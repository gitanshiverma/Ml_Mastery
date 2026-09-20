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

<<<<<<< HEAD
export type ActiveTimer = {
  isRunning: boolean;
  startedAt: number | null; // Wall-clock timestamp (Date.now()) when timer started/resumed
  baseSeconds: number; // Elapsed seconds accumulated prior to current run
  lastCommittedMinutes: number; // Whole minutes already logged to daily sessions
};

=======
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
export type AppState = {
  completed: string[];
  sessions: Record<string, number>; // date -> minutes studied
  points: number;
  badges: string[];
  plan: PlanSettings | null;
  projects: ProjectEntry[];
  theme: "dark" | "light";
<<<<<<< HEAD
  dailyGoalMinutes?: number; // custom daily study target in minutes (e.g. 120 = 2h)
  timer?: ActiveTimer;
=======
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
};

const DEFAULT_STATE: AppState = {
  completed: [],
  sessions: {},
  points: 0,
  badges: [],
  plan: null,
  projects: [],
  theme: "dark",
<<<<<<< HEAD
  dailyGoalMinutes: 120, // default 2 hours
  timer: {
    isRunning: false,
    startedAt: null,
    baseSeconds: 0,
    lastCommittedMinutes: 0,
  },
=======
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
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

<<<<<<< HEAD
export function computeTimerElapsed(timer?: ActiveTimer): number {
  if (!timer) return 0;
  const base = Math.max(0, timer.baseSeconds || 0);
  if (!timer.isRunning || !timer.startedAt) {
    return base;
  }
  // Wall-clock difference ensures time passes accurately even if the tab was inactive or the PC slept
  const delta = Math.max(0, Math.floor((Date.now() - timer.startedAt) / 1000));
  return base + delta;
}

export function awardBadges(minutesToday: number, streak: number, current: string[]): string[] {
  const badges = new Set(current);
  if (minutesToday >= 60) badges.add("focused-hour");
  if (minutesToday >= 240) badges.add("deep-work");
  if (minutesToday >= 480) badges.add("ml-warrior");
  if (streak >= 7) badges.add("week-streak");
  return [...badges];
}

=======
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(DEFAULT_STATE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
<<<<<<< HEAD
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<AppState>;
        setState({
          ...DEFAULT_STATE,
          ...parsed,
          timer: {
            ...DEFAULT_STATE.timer!,
            ...(parsed.timer ?? {}),
          },
        });
      }
=======
      if (raw) setState({ ...DEFAULT_STATE, ...(JSON.parse(raw) as AppState) });
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
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

<<<<<<< HEAD
  // Background and sleep-recovery synchronizer
  // Ensures all study time is credited accurately across tab switches and system sleep
  useEffect(() => {
    if (!ready) return;

    const syncWallClockTimer = () => {
      setState((prev) => {
        const timer = prev.timer;
        if (!timer || !timer.isRunning || !timer.startedAt) return prev;

        const totalSecs = computeTimerElapsed(timer);
        const wholeMinutes = Math.floor(totalSecs / 60);
        const uncommitted = wholeMinutes - (timer.lastCommittedMinutes || 0);

        if (uncommitted <= 0) return prev;

        const key = todayKey();
        const prevMins = prev.sessions[key] ?? 0;
        const nextMins = prevMins + uncommitted;
        const sessions = { ...prev.sessions, [key]: nextMins };
        const badges = awardBadges(nextMins, streakDays(sessions), prev.badges);

        return {
          ...prev,
          sessions,
          points: prev.points + uncommitted,
          badges,
          timer: {
            ...timer,
            lastCommittedMinutes: wholeMinutes,
          },
        };
      });
    };

    // Periodic ticker
    const intervalId = setInterval(syncWallClockTimer, 1000);

    // Immediate reactive listeners when returning to tab, waking PC, or changing windows
    const onWakeOrFocus = () => {
      syncWallClockTimer();
    };

    document.addEventListener("visibilitychange", onWakeOrFocus);
    window.addEventListener("focus", onWakeOrFocus);
    window.addEventListener("blur", onWakeOrFocus);
    window.addEventListener("pageshow", onWakeOrFocus);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onWakeOrFocus);
      window.removeEventListener("focus", onWakeOrFocus);
      window.removeEventListener("blur", onWakeOrFocus);
      window.removeEventListener("pageshow", onWakeOrFocus);
    };
  }, [ready]);

=======
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
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
  { id: "graduate", label: "ML Graduate", detail: "Finish all 134 lessons" },
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
<<<<<<< HEAD

export function getEffectiveDailyGoalMinutes(state: AppState): number {
  if (state.dailyGoalMinutes && state.dailyGoalMinutes > 0) {
    return state.dailyGoalMinutes;
  }
  if (state.plan && state.plan.hoursPerDay > 0) {
    return Math.round(state.plan.hoursPerDay * 60);
  }
  return 120; // default 2 hours (120 mins)
}

export function formatStudyHours(minutes: number): string {
  if (!minutes || minutes <= 0) return "0h";
  const hours = minutes / 60;
  if (hours < 1) {
    return `${minutes}m`;
  }
  if (minutes % 60 === 0) {
    return `${hours}h`;
  }
  return `${hours.toFixed(1)}h`;
}

export function formatStudyDurationLong(minutes: number): string {
  if (!minutes || minutes <= 0) return "0 min";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0 && m > 0) return `${h} hr ${m} min`;
  if (h > 0) return `${h} ${h === 1 ? "hour" : "hours"}`;
  return `${m} min`;
}

export function formatHoursAndMins(minutes: number): string {
  if (!minutes || minutes <= 0) return "0h 0m";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

=======
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
