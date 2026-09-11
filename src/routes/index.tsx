import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSONS } from "@/lib/course";
import { buildPlan } from "@/lib/planner";
import { BADGES, streakDays, todayKey, totalMinutes, useStore } from "@/lib/store";
import { Button, Card, Progress, Stat } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ML Mastery — Learn Machine Learning in 38 Lessons" },
      {
        name: "description",
        content:
          "A 3D, dark-neon learning hub for machine learning: 38 structured video lessons, an adaptive study planner, a session timer and badge rewards.",
      },
      { property: "og:title", content: "ML Mastery — Learn Machine Learning in 38 Lessons" },
      {
        property: "og:description",
        content:
          "Structured ML curriculum, adaptive study planner, study timer and rewards in one place.",
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

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <section className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          38 lessons · 10 modules · one habit
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl">
          Master <span className="text-gradient">Machine Learning</span>
          <br />
          one focused day at a time
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A full ML curriculum, a planner that reshapes itself around your schedule, a study timer
          and badges that make the hours count.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/lesson/$id" params={{ id: nextLesson.id }}>
            <Button>{done ? "Continue learning" : "Start lesson 1"}</Button>
          </Link>
          <Link to="/planner">
            <Button variant="outline">Build my study plan</Button>
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
        <Stat label="Today" value={`${(today / 60).toFixed(1)} h`} hint="8 h earns ML Warrior" />
        <Stat label="Streak" value={`${streakDays(state.sessions)}d`} />
        <Stat label="Total hours" value={(totalMinutes(state.sessions) / 60).toFixed(1)} />
      </div>

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
            Open the study timer →
          </Link>
        </Card>
      </div>
    </div>
  );
}
