import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { BADGES, streakDays, todayKey, totalMinutes, useStore } from "@/lib/store";
import { Button, Card, Confetti, Stat } from "@/components/ui-kit";

export const Route = createFileRoute("/tracker")({
  head: () => ({
    meta: [
      { title: "Study Timer & Rewards | ML Mastery" },
      {
        name: "description",
        content:
          "Track daily study hours with a live timer, build streaks and unlock badges like ML Warrior for eight-hour days.",
      },
      { property: "og:title", content: "Study Timer & Rewards | ML Mastery" },
      {
        property: "og:description",
        content: "Time your sessions, keep your streak alive and earn badges.",
      },
    ],
  }),
  component: TrackerPage,
});

function award(minutesToday: number, streak: number, current: string[]) {
  const badges = new Set(current);
  if (minutesToday >= 60) badges.add("focused-hour");
  if (minutesToday >= 240) badges.add("deep-work");
  if (minutesToday >= 480) badges.add("ml-warrior");
  if (streak >= 7) badges.add("week-streak");
  return [...badges];
}

function TrackerPage() {
  const { state, update } = useStore();
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0); // seconds in the live session
  const [celebrate, setCelebrate] = useState(false);
  const carry = useRef(0);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  // Commit whole minutes to storage as they accumulate.
  useEffect(() => {
    const wholeMinutes = Math.floor(elapsed / 60);
    if (wholeMinutes <= carry.current) return;
    const delta = wholeMinutes - carry.current;
    carry.current = wholeMinutes;
    update((s) => {
      const key = todayKey();
      const sessions = { ...s.sessions, [key]: (s.sessions[key] ?? 0) + delta };
      const badges = award(sessions[key]!, streakDays(sessions), s.badges);
      const newBadge = badges.length > s.badges.length;
      if (newBadge) setTimeout(() => setCelebrate(true), 0);
      return { ...s, sessions, points: s.points + delta, badges };
    });
  }, [elapsed, update]);

  useEffect(() => {
    if (!celebrate) return;
    const id = setTimeout(() => setCelebrate(false), 3500);
    return () => clearTimeout(id);
  }, [celebrate]);

  const logManual = (mins: number) => {
    update((s) => {
      const key = todayKey();
      const sessions = { ...s.sessions, [key]: Math.max(0, (s.sessions[key] ?? 0) + mins) };
      const badges = award(sessions[key]!, streakDays(sessions), s.badges);
      if (badges.length > s.badges.length) setTimeout(() => setCelebrate(true), 0);
      return { ...s, sessions, points: Math.max(0, s.points + mins), badges };
    });
  };

  const today = state.sessions[todayKey()] ?? 0;
  const streak = streakDays(state.sessions);
  const total = totalMinutes(state.sessions);
  const hh = String(Math.floor(elapsed / 3600)).padStart(2, "0");
  const mm = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");
  const goalPct = Math.min(100, Math.round((today / 480) * 100));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Confetti show={celebrate} />
      <h1 className="font-display text-4xl font-bold">
        Time <span className="text-gradient">Tracker</span>
      </h1>
      <p className="mt-2 text-muted-foreground">
        Study 8 hours in a day to earn the ML Warrior badge. Every minute is a point.
      </p>

      <Card className="mt-6 text-center">
        <p className="font-display text-6xl font-bold tabular-nums">
          {hh}:{mm}:{ss}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Button onClick={() => setRunning((r) => !r)}>{running ? "Pause" : "Start"}</Button>
          <Button
            variant="outline"
            onClick={() => {
              setRunning(false);
              setElapsed(0);
              carry.current = 0;
            }}
          >
            Reset
          </Button>
          <Button variant="outline" onClick={() => logManual(25)}>
            + Log 25 min
          </Button>
          <Button variant="ghost" onClick={() => logManual(-25)}>
            − 25 min
          </Button>
        </div>
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>Today: {(today / 60).toFixed(1)} h</span>
            <span>8 h goal — {goalPct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
              style={{ width: `${goalPct}%` }}
            />
          </div>
        </div>
      </Card>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Total hours" value={(total / 60).toFixed(1)} />
        <Stat label="Streak" value={`${streak} days`} />
        <Stat label="Points" value={String(state.points)} />
      </div>

      <h2 className="mt-10 font-display text-2xl font-bold">Badges</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {BADGES.map((b) => {
          const earned = state.badges.includes(b.id);
          return (
            <Card key={b.id} className={earned ? "neon" : "opacity-60"}>
              <p className="font-display font-semibold">
                {earned ? "🏅" : "🔒"} {b.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{b.detail}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
