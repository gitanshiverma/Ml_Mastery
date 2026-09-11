import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useStore } from "@/lib/store";

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

  const toggleTheme = () => update((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" }));

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
