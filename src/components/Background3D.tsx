import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useStore } from "@/lib/store";

const PALETTES = {
  dark: { a: "#22e3c0", b: "#b25cff", fog: "#0a0f1c" },
  light: { a: "#0f9c8b", b: "#7a4bd0", fog: "#eef2f8" },
};

function Network({ colorA, colorB }: { colorA: string; colorB: string }) {
  const group = useRef<THREE.Group>(null);

  const { positions, linePositions } = useMemo(() => {
    const count = 90;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 9,
          (Math.random() - 0.5) * 8,
        ),
      );
    }
    const pos = new Float32Array(count * 3);
    pts.forEach((p, i) => {
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;
    });

    const lines: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const a = pts[i]!;
        const b = pts[j]!;
        if (a.distanceTo(b) < 2.6) {
          lines.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }
    return { positions: pos, linePositions: new Float32Array(lines) };
  }, []);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    if (!group.current) return;
    group.current.rotation.y += dt * 0.05;
    const { x, y } = state.pointer;
    group.current.rotation.x += (y * 0.15 - group.current.rotation.x) * dt * 1.5;
    group.current.position.x += (x * 0.6 - group.current.position.x) * dt * 1.5;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.11}
          color={colorA}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={colorB} transparent opacity={0.22} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

function FloatingShape({
  position,
  color,
  speed,
  scale,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    if (!ref.current) return;
    ref.current.rotation.x += dt * speed;
    ref.current.rotation.y += dt * speed * 0.7;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.4;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

export default function Background3D() {
  const { state } = useStore();
  const palette = PALETTES[state.theme];

  return (
    <div className="fixed inset-0 -z-10" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 11], fov: 60 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[palette.fog]} />
        <fog attach="fog" args={[palette.fog, 12, 24]} />
        <Network colorA={palette.a} colorB={palette.b} />
        <FloatingShape position={[-5.5, 1.6, -2]} color={palette.b} speed={0.35} scale={1.5} />
        <FloatingShape position={[5.2, -1.8, -1]} color={palette.a} speed={0.28} scale={1.1} />
        <FloatingShape position={[3.4, 2.4, -4]} color={palette.a} speed={0.2} scale={0.8} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-background/55" />
    </div>
  );
}
