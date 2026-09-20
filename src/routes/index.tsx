import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSONS } from "@/lib/course";
import { buildPlan } from "@/lib/planner";
import {
  BADGES,
  formatHoursAndMins,
  formatStudyHours,
  getEffectiveDailyGoalMinutes,
  streakDays,
  todayKey,
  totalMinutes,
  useStore,
} from "@/lib/store";
import { Button, Card, Progress, Stat } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ML Mastery — 100 Days of Machine Learning (CampusX)" },
      {
        name: "description",
        content:
          "A 3D, dark-neon learning hub for CampusX's 100 Days of Machine Learning: 134 structured video lectures, comprehensive notes, adaptive study planner, session timer and rewards.",
      },
      { property: "og:title", content: "ML Mastery — 100 Days of Machine Learning (CampusX)" },
      {
        property: "og:description",
        content:
          "Structured 134-lesson ML curriculum by CampusX, adaptive study planner, study timer and rewards in one place.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { state } = useStore();
  const done = state.completed.length;
  const pct = Math.round((done / LESSONS.length) * 100);
  const nextLesson = LESSONS.find((l) => !state.completed.includes(l.id)) ?? LESSONS[0]!;
  const today = state.sessions[todayKey()] ?? 0;
  const plan = state.plan ? buildPlan(state.plan, state.completed) : [];
  const todayPlan = plan.find((d) => d.date === todayKey()) ?? plan[0];
  const dailyGoalMinutes = getEffectiveDailyGoalMinutes(state);

  // Generate the last 14 days for the dashboard activity strip
  const last14Days = Array.from({ length: 14 }).map((_, idx) => {
    const d = new Date();
    d.setDate(d.getDate() - (13 - idx));
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate(),
    ).padStart(2, "0")}`;
    const mins = state.sessions[key] ?? 0;
    const isGoalMet = mins >= dailyGoalMinutes && dailyGoalMinutes > 0;
    return {
      key,
      label: d.toLocaleDateString(undefined, { weekday: "narrow" }),
      dayNum: d.getDate(),
      mins,
      isGoalMet,
      isToday: key === todayKey(),
    };
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <section className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          134 lessons · 14 modules · 100 days of ml
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl">
          Master <span className="text-gradient">Machine Learning</span>
          <br />
          one focused day at a time
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A full ML curriculum, a planner that reshapes itself around your schedule, a study timer,
          glowing calendar, and badges that make the hours count.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/lesson/$id" params={{ id: nextLesson.id }}>
            <Button>{done ? "Continue learning" : "Start lesson 1"}</Button>
          </Link>
          <Link to="/tracker">
            <Button variant="outline">📅 Open Study Calendar</Button>
          </Link>
          <Link to="/planner">
            <Button variant="ghost" className="border border-border">
              Build my study plan
            </Button>
          </Link>
        </div>
      </section>

      <Card className="mt-12">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Course progress</span>
          <span className="font-display text-lg font-bold text-gradient">{pct}%</span>
        </div>
        <Progress value={pct} className="mt-3" />
        <p className="mt-3 text-sm text-muted-foreground">
          Up next: <span className="text-foreground">{nextLesson.title}</span>
        </p>
      </Card>

      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        <Stat label="Lessons done" value={`${done}/${LESSONS.length}`} />
        <Stat
          label="Today"
          value={formatStudyHours(today)}
          hint={`Daily target: ${formatStudyHours(dailyGoalMinutes)}`}
        />
        <Stat label="Streak" value={`${streakDays(state.sessions)}d`} />
        <Stat label="Total hours" value={(totalMinutes(state.sessions) / 60).toFixed(1)} />
      </div>

      {/* 14-Day Study Activity & Calendar Strip */}
      <Card className="mt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold">Recent Study Activity</h2>
            <p className="text-xs text-muted-foreground">
              Daily Target: <span className="text-primary font-semibold">{formatHoursAndMins(dailyGoalMinutes)}</span>
              {" · "}
              Multi-neon glowing blocks show completed goal days!
            </p>
          </div>
          <Link to="/tracker" className="text-xs font-semibold text-primary hover:underline">
            Open full calendar →
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1.5 sm:grid-cols-14">
          {last14Days.map((d) => (
            <Link
              key={d.key}
              to="/tracker"
              title={`${d.key}: ${formatHoursAndMins(d.mins)} studied`}
              className={`flex flex-col items-center justify-between rounded-lg p-1.5 sm:p-2 text-center transition ${
                d.isGoalMet
                  ? "multi-neon-block text-white font-bold shadow-md hover:scale-105"
                  : d.mins > 0
                    ? "border border-primary/45 bg-card text-foreground shadow-xs"
                    : "border border-border/40 bg-card/40 opacity-60 hover:opacity-100 text-muted-foreground"
              } ${d.isToday ? "ring-2 ring-primary" : ""}`}
            >
              <span className={`text-[9px] ${d.isGoalMet ? "text-white/90" : "text-muted-foreground"}`}>{d.label}</span>
              <span className={`my-0.5 font-display text-xs font-bold ${d.isGoalMet ? "text-white drop-shadow-sm" : ""}`}>{d.dayNum}</span>
              <span
                className={`text-[9px] font-semibold truncate max-w-full ${
                  d.isGoalMet ? "text-white font-bold drop-shadow-sm" : d.mins > 0 ? "text-primary font-medium" : "text-muted-foreground/45"
                }`}
              >
                {d.mins > 0 ? formatHoursAndMins(d.mins) : "0h 0m"}
              </span>
            </Link>
          ))}
        </div>
      </Card>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="font-display text-lg font-semibold">Today's plan</h2>
          {todayPlan ? (
            <ul className="mt-3 space-y-1.5">
              {todayPlan.lessons.map((l) => (
                <li key={l.id}>
                  <Link
                    to="/lesson/$id"
                    params={{ id: l.id }}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {l.index}. {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              No plan yet —{" "}
              <Link to="/planner" className="text-primary hover:underline">
                set your study hours
              </Link>
              .
            </p>
          )}
        </Card>

        <Card>
          <h2 className="font-display text-lg font-semibold">Badges</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {BADGES.map((b) => (
              <span
                key={b.id}
                title={b.detail}
                className={`rounded-full border px-3 py-1 text-xs ${
                  state.badges.includes(b.id)
                    ? "border-primary text-foreground"
                    : "border-border text-muted-foreground opacity-60"
                }`}
              >
                {state.badges.includes(b.id) ? "🏅" : "🔒"} {b.label}
              </span>
            ))}
          </div>
          <Link to="/tracker" className="mt-4 inline-block text-sm text-primary hover:underline">
            Open the study calendar & timer →
          </Link>
        </Card>
      </div>
    </div>
  );
}

