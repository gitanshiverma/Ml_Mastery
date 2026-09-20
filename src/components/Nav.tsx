import { Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { computeTimerElapsed, useStore } from "@/lib/store";
=======
import { useState } from "react";
import { useStore } from "@/lib/store";
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4

const LINKS = [
  { to: "/", label: "Dashboard" },
  { to: "/course", label: "Course" },
  { to: "/planner", label: "Planner" },
  { to: "/tracker", label: "Tracker" },
  { to: "/projects", label: "Projects" },
] as const;

export function Nav() {
  const { state, update } = useStore();
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const [, setNavTick] = useState(0);

  const isTimerRunning = !!state.timer?.isRunning;
  const elapsedSecs = computeTimerElapsed(state.timer);

  // Keep navbar timer in sync every second while running
  useEffect(() => {
    if (!isTimerRunning) return;
    const interval = setInterval(() => setNavTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const toggleTheme = () => update((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" }));

  const navHh = Math.floor(elapsedSecs / 3600);
  const navMm = Math.floor((elapsedSecs % 3600) / 60);
  const navSs = elapsedSecs % 60;
  const formattedNavTime =
    navHh > 0
      ? `${String(navHh).padStart(2, "0")}:${String(navMm).padStart(2, "0")}:${String(navSs).padStart(2, "0")}`
      : `${String(navMm).padStart(2, "0")}:${String(navSs).padStart(2, "0")}`;

=======

  const toggleTheme = () => update((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" }));

>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">
          ML<span className="text-gradient">Mastery</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
<<<<<<< HEAD
          {/* Active Live Study Timer Widget */}
          {state.timer && (isTimerRunning || (state.timer.baseSeconds ?? 0) > 0) ? (
            <Link
              to="/tracker"
              title="Study Timer Running - Click to open Tracker"
              className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono transition ${
                isTimerRunning
                  ? "border-primary/60 bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                  : "border-border bg-card/60 text-muted-foreground"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isTimerRunning ? "bg-primary animate-pulse" : "bg-muted-foreground"
                }`}
              />
              <span>{formattedNavTime}</span>
            </Link>
          ) : null}

=======
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
          <span className="hidden rounded-full border border-border px-3 py-1 text-xs text-muted-foreground sm:inline">
            {state.points} pts
          </span>
          <button
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className="rounded-lg border border-border px-2.5 py-1.5 text-sm transition hover:border-primary"
          >
            {state.theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-lg border border-border px-2.5 py-1.5 text-sm md:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-2 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
