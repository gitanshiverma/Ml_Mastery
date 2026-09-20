import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useStore } from "@/lib/store";

const PALETTES = {
  dark: {
    primary: "#00f0ff",
    accent: "#ff007f",
    violet: "#a855f7",
    gold: "#ffd700",
    emerald: "#00ffaa",
    hands: "#ffffff",
    secHand: "#ff2a5f",
    fog: "#000000",
    bg: "#000000",
  },
  light: {
    primary: "#0f9c8b",
    accent: "#e11d48",
    violet: "#7c3aed",
    gold: "#d97706",
    emerald: "#059669",
    hands: "#1e293b",
    secHand: "#dc2626",
    fog: "#edf2f7",
    bg: "#f1f5f9",
  },
};

/**
 * Kinetic 3D Clock Dial with smooth quartz sweeping hands,
 * precision tick marks, concentric orbital rings, and gyro-spheres.
 */
function MotionGraphicsClock({
  palette,
}: {
  palette: (typeof PALETTES)["dark"];
}) {
  const clockGroup = useRef<THREE.Group>(null);
  const hourHandRef = useRef<THREE.Group>(null);
  const minHandRef = useRef<THREE.Group>(null);
  const secHandRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);

  // Generate 60 clock dial ticks (hours & minutes)
  const dialTicks = useMemo(() => {
    const lines: number[] = [];
    const radius = 3.2;
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * Math.PI * 2;
      const isMajor = i % 5 === 0;
      const innerR = isMajor ? radius - 0.35 : radius - 0.18;
      const x1 = Math.cos(angle) * innerR;
      const y1 = Math.sin(angle) * innerR;
      const x2 = Math.cos(angle) * radius;
      const y2 = Math.sin(angle) * radius;
      lines.push(x1, y1, 0, x2, y2, 0);
    }
    return new Float32Array(lines);
  }, []);

  // Generate orbital concentric HUD dots
  const orbitDots = useMemo(() => {
    const count = 48;
    const pts = new Float32Array(count * 3);
    const r = 4.2;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      pts[i * 3] = Math.cos(angle) * r;
      pts[i * 3 + 1] = Math.sin(angle) * r;
      pts[i * 3 + 2] = Math.sin(angle * 4) * 0.3;
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const time = state.clock.elapsedTime;

    // Real-time clock rotation simulation + smooth continuous second sweep
    const now = new Date();
    const millis = now.getMilliseconds();
    const seconds = now.getSeconds() + millis / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    if (secHandRef.current) {
      secHandRef.current.rotation.z = -((seconds / 60) * Math.PI * 2);
    }
    if (minHandRef.current) {
      minHandRef.current.rotation.z = -((minutes / 60) * Math.PI * 2);
    }
    if (hourHandRef.current) {
      hourHandRef.current.rotation.z = -((hours / 12) * Math.PI * 2);
    }

    // Concentric gyro rings continuous rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += dt * 0.2;
      ring1Ref.current.rotation.x = Math.sin(time * 0.4) * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= dt * 0.15;
      ring2Ref.current.rotation.y = Math.cos(time * 0.3) * 0.35;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += dt * 0.08;
    }

    // Subtle 3D floating and mouse parallax damping
    if (clockGroup.current) {
      const { x, y } = state.pointer;
      clockGroup.current.rotation.y += (x * 0.35 - clockGroup.current.rotation.y) * dt * 2.0;
      clockGroup.current.rotation.x += (-y * 0.35 - clockGroup.current.rotation.x) * dt * 2.0;
      clockGroup.current.position.y = Math.sin(time * 0.5) * 0.25;
      clockGroup.current.position.x += (x * 0.8 - clockGroup.current.position.x) * dt * 1.5;
    }
  });

  return (
    <group ref={clockGroup} position={[0, 0, 0]}>
      {/* Central Dial Glass Backdrop */}
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[3.3, 64]} />
        <meshBasicMaterial color={palette.bg} transparent opacity={0.55} />
      </mesh>

      {/* Clock Dial Rim Circle */}
      <mesh position={[0, 0, -0.05]}>
        <ringGeometry args={[3.2, 3.26, 64]} />
        <meshBasicMaterial color={palette.primary} transparent opacity={0.8} />
      </mesh>

      {/* 60 Dial Ticks (Seconds & Minutes) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dialTicks, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={palette.primary} transparent opacity={0.65} />
      </lineSegments>

      {/* Hour Hand */}
      <group ref={hourHandRef} position={[0, 0, 0.05]}>
        <mesh position={[0, 0.9, 0]}>
          <boxGeometry args={[0.09, 1.8, 0.02]} />
          <meshBasicMaterial color={palette.hands} />
        </mesh>
      </group>

      {/* Minute Hand */}
      <group ref={minHandRef} position={[0, 0, 0.1]}>
        <mesh position={[0, 1.35, 0]}>
          <boxGeometry args={[0.06, 2.7, 0.02]} />
          <meshBasicMaterial color={palette.hands} />
        </mesh>
      </group>

      {/* Sweeping Quartz Second Hand with bright accent tip */}
      <group ref={secHandRef} position={[0, 0, 0.15]}>
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[0.025, 3.2, 0.02]} />
          <meshBasicMaterial color={palette.secHand} />
        </mesh>
        {/* Counterbalance tail */}
        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[0.04, 1.2, 0.02]} />
          <meshBasicMaterial color={palette.secHand} />
        </mesh>
        {/* Second hand tip dot */}
        <mesh position={[0, 2.9, 0]}>
          <circleGeometry args={[0.07, 16]} />
          <meshBasicMaterial color={palette.gold} />
        </mesh>
      </group>

      {/* Center Pin Cap */}
      <mesh position={[0, 0, 0.2]}>
        <circleGeometry args={[0.16, 32]} />
        <meshBasicMaterial color={palette.primary} />
      </mesh>
      <mesh position={[0, 0, 0.21]}>
        <circleGeometry args={[0.07, 32]} />
        <meshBasicMaterial color={palette.secHand} />
      </mesh>

      {/* Concentric Orbit Ring 1 (Dashed HUD Arc) */}
      <group ref={ring1Ref}>
        <mesh>
          <ringGeometry args={[3.8, 3.84, 64]} />
          <meshBasicMaterial color={palette.violet} transparent opacity={0.4} />
        </mesh>
      </group>

      {/* Concentric Orbit Ring 2 (Outer Gyro Ring with nodes) */}
      <group ref={ring2Ref}>
        <mesh>
          <ringGeometry args={[4.4, 4.45, 64]} />
          <meshBasicMaterial color={palette.primary} transparent opacity={0.35} />
        </mesh>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[orbitDots, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.08} color={palette.emerald} transparent opacity={0.8} />
        </points>
      </group>

      {/* Outer Rotating Gyro Ring 3 */}
      <group ref={ring3Ref}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <ringGeometry args={[5.2, 5.23, 64]} />
          <meshBasicMaterial color={palette.accent} transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}

/**
 * Floating motion graphics kinetic particles and wireframe nodes
 */
function KineticField({
  colorA,
  colorB,
}: {
  colorA: string;
  colorB: string;
}) {
  const group = useRef<THREE.Group>(null);

  const { positions, linePositions } = useMemo(() => {
    const count = 75;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 11,
          (Math.random() - 0.5) * 7 - 1,
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
        if (a.distanceTo(b) < 2.5) {
          lines.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }
    return { positions: pos, linePositions: new Float32Array(lines) };
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    if (!group.current) return;
    group.current.rotation.y += dt * 0.03;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          color={colorA}
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={colorB} transparent opacity={0.16} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

function FloatingPolyhedron({
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
    ref.current.rotation.y += dt * speed * 0.8;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.9) * 0.35;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
    </mesh>
  );
}

export default function Background3D() {
  const { state } = useStore();
  const palette = PALETTES[state.theme] ?? PALETTES.dark;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[palette.fog]} />
        <fog attach="fog" args={[palette.fog, 10, 22]} />

        {/* Dynamic Motion Graphics Kinetic Clock & Concentric Dials */}
        <MotionGraphicsClock palette={palette} />

        {/* Dynamic Neural Field & Constellations */}
        <KineticField colorA={palette.primary} colorB={palette.violet} />

        {/* Floating Geometric Wireframe Satellites */}
        <FloatingPolyhedron
          position={[-6.2, 2.2, -3]}
          color={palette.accent}
          speed={0.35}
          scale={1.2}
        />
        <FloatingPolyhedron
          position={[6.4, -2.4, -2]}
          color={palette.emerald}
          speed={0.28}
          scale={1.0}
        />
        <FloatingPolyhedron
          position={[4.8, 3.2, -4]}
          color={palette.primary}
          speed={0.22}
          scale={0.8}
        />
        <FloatingPolyhedron
          position={[-4.5, -3.2, -4]}
          color={palette.gold}
          speed={0.18}
          scale={0.9}
        />
      </Canvas>

      {/* Film Grain Texture Overlay */}
      <div className="film-grain-texture" />

      {/* Vignette Glow Overlay for cinematic focus */}
      <div className="vignette-glow" />

      {/* Backdrop tint layer ensuring high content contrast */}
      <div className="pointer-events-none absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
    </div>
  );
}
