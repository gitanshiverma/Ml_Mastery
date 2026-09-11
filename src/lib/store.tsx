import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ProjectEntry = {
  id: string;
  title: string;
  description: string;
  repo: string;
  demo: string;
  done: boolean;
};

export type PlanSettings = {
  hoursPerDay: number;
  weekdays: number[]; // 0 = Sunday
  startDate: string; // YYYY-MM-DD
};

export type AppState = {
  completed: string[];
  sessions: Record<string, number>; // date -> minutes studied
  points: number;
  badges: string[];
  plan: PlanSettings | null;
  projects: ProjectEntry[];
  theme: "dark" | "light";
};

const DEFAULT_STATE: AppState = {
  completed: [],
  sessions: {},
  points: 0,
  badges: [],
  plan: null,
  projects: [],
  theme: "dark",
};

const KEY = "ml-mastery-state-v1";

type Ctx = {
  state: AppState;
  ready: boolean;
  update: (fn: (s: AppState) => AppState) => void;
};

const StoreContext = createContext<Ctx | null>(null);

export function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(DEFAULT_STATE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState({ ...DEFAULT_STATE, ...(JSON.parse(raw) as AppState) });
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(state));
    const root = document.documentElement;
    root.classList.toggle("light", state.theme === "light");
  }, [state, ready]);

  const update = useCallback((fn: (s: AppState) => AppState) => {
    setState((prev) => fn(prev));
  }, []);

  const value = useMemo(() => ({ state, ready, update }), [state, ready, update]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

/* ---------- derived helpers ---------- */

export const BADGES: { id: string; label: string; detail: string }[] = [
  { id: "first-step", label: "First Step", detail: "Complete your first lesson" },
  { id: "focused-hour", label: "Focused Hour", detail: "Study for 1 hour in a day" },
  { id: "deep-work", label: "Deep Work", detail: "Study 4+ hours in a day" },
  { id: "ml-warrior", label: "ML Warrior", detail: "Study 8+ hours in a day" },
  { id: "week-streak", label: "Week Streak", detail: "Study 7 days in a row" },
  { id: "halfway", label: "Halfway There", detail: "Finish half the course" },
  { id: "graduate", label: "ML Graduate", detail: "Finish all 38 lessons" },
];

export function streakDays(sessions: Record<string, number>) {
  let streak = 0;
  const d = new Date();
  for (;;) {
    const key = todayKey(d);
    const mins = sessions[key] ?? 0;
    if (mins > 0) {
      streak += 1;
    } else if (streak > 0 || key !== todayKey()) {
      break;
    }
    d.setDate(d.getDate() - 1);
    if (streak > 400) break;
  }
  return streak;
}

export function totalMinutes(sessions: Record<string, number>) {
  return Object.values(sessions).reduce((a, b) => a + b, 0);
}
