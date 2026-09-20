import { createFileRoute } from "@tanstack/react-router";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import {
  BADGES,
  awardBadges,
  computeTimerElapsed,
  formatStudyDurationLong,
  formatStudyHours,
  getEffectiveDailyGoalMinutes,
  streakDays,
  todayKey,
  totalMinutes,
  useStore,
} from "@/lib/store";
import { Button, Card, Confetti, Stat } from "@/components/ui-kit";
import { StudyCalendar } from "@/components/StudyCalendar";
=======
import { useEffect, useRef, useState } from "react";
import { BADGES, streakDays, todayKey, totalMinutes, useStore } from "@/lib/store";
import { Button, Card, Confetti, Stat } from "@/components/ui-kit";
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4

export const Route = createFileRoute("/tracker")({
  head: () => ({
    meta: [
<<<<<<< HEAD
      { title: "Study Calendar & Tracker | ML Mastery" },
      {
        name: "description",
        content:
          "Track daily study hours with an interactive calendar, live timer, goal celebration blocks, streaks, and badges.",
      },
      { property: "og:title", content: "Study Calendar & Tracker | ML Mastery" },
      {
        property: "og:description",
        content: "Interactive study calendar, live session timer, and goal rewards.",
=======
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
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
      },
    ],
  }),
  component: TrackerPage,
});

<<<<<<< HEAD
function TrackerPage() {
  const { state, update } = useStore();
  const [activeTab, setActiveTab] = useState<"calendar" | "timer">("calendar");
  const [celebrate, setCelebrate] = useState(false);
  const [, setTick] = useState(0);

  const timer = state.timer;
  const isRunning = !!timer?.isRunning;
  const elapsed = computeTimerElapsed(timer);

  const dailyGoalMinutes = getEffectiveDailyGoalMinutes(state);

  // Smooth live tick updater while timer is running
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);
=======
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
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4

  useEffect(() => {
    if (!celebrate) return;
    const id = setTimeout(() => setCelebrate(false), 3500);
    return () => clearTimeout(id);
  }, [celebrate]);

<<<<<<< HEAD
  const toggleTimer = () => {
    update((s) => {
      const currentTimer = s.timer;
      if (currentTimer?.isRunning) {
        // Pause and flush uncommitted minutes
        const currentElapsed = computeTimerElapsed(currentTimer);
        const wholeMinutes = Math.floor(currentElapsed / 60);
        const uncommitted = wholeMinutes - (currentTimer.lastCommittedMinutes || 0);

        let sessions = s.sessions;
        let points = s.points;
        let badges = s.badges;

        if (uncommitted > 0) {
          const key = todayKey();
          const prevMins = s.sessions[key] ?? 0;
          const nextMins = prevMins + uncommitted;
          sessions = { ...s.sessions, [key]: nextMins };
          points = s.points + uncommitted;
          badges = awardBadges(nextMins, streakDays(sessions), s.badges);
          if (badges.length > s.badges.length || (prevMins < dailyGoalMinutes && nextMins >= dailyGoalMinutes)) {
            setTimeout(() => setCelebrate(true), 0);
          }
        }

        return {
          ...s,
          sessions,
          points,
          badges,
          timer: {
            isRunning: false,
            startedAt: null,
            baseSeconds: currentElapsed,
            lastCommittedMinutes: wholeMinutes,
          },
        };
      } else {
        // Start or Resume with current Date.now() wall-clock timestamp
        return {
          ...s,
          timer: {
            isRunning: true,
            startedAt: Date.now(),
            baseSeconds: currentTimer?.baseSeconds || 0,
            lastCommittedMinutes: currentTimer?.lastCommittedMinutes || 0,
          },
        };
      }
    });
  };

  const resetTimer = () => {
    update((s) => {
      const currentTimer = s.timer;
      let sessions = s.sessions;
      let points = s.points;
      let badges = s.badges;

      if (currentTimer) {
        const currentElapsed = computeTimerElapsed(currentTimer);
        const wholeMinutes = Math.floor(currentElapsed / 60);
        const uncommitted = wholeMinutes - (currentTimer.lastCommittedMinutes || 0);
        if (uncommitted > 0) {
          const key = todayKey();
          const prevMins = s.sessions[key] ?? 0;
          const nextMins = prevMins + uncommitted;
          sessions = { ...s.sessions, [key]: nextMins };
          points = s.points + uncommitted;
          badges = awardBadges(nextMins, streakDays(sessions), s.badges);
        }
      }

      return {
        ...s,
        sessions,
        points,
        badges,
        timer: {
          isRunning: false,
          startedAt: null,
          baseSeconds: 0,
          lastCommittedMinutes: 0,
        },
      };
    });
  };

  const logManual = (mins: number) => {
    update((s) => {
      const key = todayKey();
      const prevMins = s.sessions[key] ?? 0;
      const nextMins = Math.max(0, prevMins + mins);
      const sessions = { ...s.sessions, [key]: nextMins };
      const badges = awardBadges(nextMins, streakDays(sessions), s.badges);
      const goalJustCrossed = prevMins < dailyGoalMinutes && nextMins >= dailyGoalMinutes;

      if (badges.length > s.badges.length || goalJustCrossed) {
        setTimeout(() => setCelebrate(true), 0);
      }
=======
  const logManual = (mins: number) => {
    update((s) => {
      const key = todayKey();
      const sessions = { ...s.sessions, [key]: Math.max(0, (s.sessions[key] ?? 0) + mins) };
      const badges = award(sessions[key]!, streakDays(sessions), s.badges);
      if (badges.length > s.badges.length) setTimeout(() => setCelebrate(true), 0);
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
      return { ...s, sessions, points: Math.max(0, s.points + mins), badges };
    });
  };

  const today = state.sessions[todayKey()] ?? 0;
  const streak = streakDays(state.sessions);
  const total = totalMinutes(state.sessions);
  const hh = String(Math.floor(elapsed / 3600)).padStart(2, "0");
  const mm = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");
<<<<<<< HEAD
  const goalPct = Math.min(100, Math.round((today / dailyGoalMinutes) * 100));
  const isGoalDone = today >= dailyGoalMinutes && dailyGoalMinutes > 0;
=======
  const goalPct = Math.min(100, Math.round((today / 480) * 100));
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Confetti show={celebrate} />
<<<<<<< HEAD

      {/* Page Heading */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-4xl font-bold">
            Study <span className="text-gradient">Tracker & Calendar</span>
          </h1>
          <p className="mt-1 text-muted-foreground">
            Track daily study hours, view your glowing achievement calendar, and earn badges.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center rounded-xl border border-border bg-card/70 p-1 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("calendar")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition ${
              activeTab === "calendar"
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>📅</span> Study Calendar
          </button>
          <button
            onClick={() => setActiveTab("timer")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition ${
              activeTab === "timer"
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>⏱️</span> Live Timer & Badges
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Study Calendar View */}
      {activeTab === "calendar" && (
        <div className="mt-8">
          <StudyCalendar />
        </div>
      )}

      {/* Tab 2: Live Stopwatch Timer & Badge Rack */}
      {activeTab === "timer" && (
        <div className="mt-8 space-y-8">
          <Card
            className={`text-center transition-all ${
              isGoalDone
                ? "goal-card-glow border-primary/70 bg-gradient-to-br from-primary/15 via-card to-card"
                : ""
            }`}
          >
            {isGoalDone && (
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary border border-primary/40">
                <span>🏆</span> Today's Study Goal Completed! ({formatStudyHours(today)})
              </div>
            )}
            <p className="font-display text-6xl font-bold tabular-nums">
              {hh}:{mm}:{ss}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</Button>
              <Button variant="outline" onClick={resetTimer}>
                Reset
              </Button>
              <Button variant="outline" onClick={() => logManual(25)}>
                + Log 25 min
              </Button>
              <Button variant="outline" onClick={() => logManual(60)}>
                + Log 1 hour
              </Button>
              <Button variant="ghost" onClick={() => logManual(-25)}>
                − 25 min
              </Button>
            </div>
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                <span>Today: {formatStudyDurationLong(today)}</span>
                <span>
                  {formatStudyHours(dailyGoalMinutes)} goal — {goalPct}%
                </span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${goalPct}%` }}
                />
              </div>
            </div>
          </Card>

          <div className="grid gap-3 sm:grid-cols-3">
            <Stat label="Total hours" value={(total / 60).toFixed(1)} />
            <Stat label="Streak" value={`${streak} days`} />
            <Stat label="Points" value={String(state.points)} />
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">Badges</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Unlock achievements by studying and hitting daily milestones.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {BADGES.map((b) => {
                const earned = state.badges.includes(b.id);
                return (
                  <Card key={b.id} className={earned ? "neon border-primary/50" : "opacity-60"}>
                    <p className="font-display font-semibold">
                      {earned ? "🏅" : "🔒"} {b.label}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{b.detail}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

=======
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
>>>>>>> 88d3f5c648715706e0bc2b78dc2e61cbfd9402e4
