import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LESSONS } from "@/lib/course";
import { buildPlan } from "@/lib/planner";
import { todayKey, useStore } from "@/lib/store";
import { Button, Card, Field, inputClass } from "@/components/ui-kit";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Study Planner | ML Mastery" },
      {
        name: "description",
        content:
          "Tell the planner your free hours and study days and get a day-by-day machine learning schedule that adapts to your pace.",
      },
      { property: "og:title", content: "AI Study Planner | ML Mastery" },
      {
        property: "og:description",
        content: "A day-by-day ML study schedule built around your availability.",
      },
    ],
  }),
  component: PlannerPage,
});

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function PlannerPage() {
  const { state, update } = useStore();
  const [hours, setHours] = useState(state.plan?.hoursPerDay ?? 2);
  const [weekdays, setWeekdays] = useState<number[]>(state.plan?.weekdays ?? [1, 2, 3, 4, 5]);
  const [start, setStart] = useState(state.plan?.startDate ?? todayKey());

  const plan = state.plan;
  const days = useMemo(
    () => (plan ? buildPlan(plan, state.completed) : []),
    [plan, state.completed],
  );

  const save = () =>
    update((s) => ({
      ...s,
      plan: { hoursPerDay: hours, weekdays: [...weekdays].sort(), startDate: start },
    }));

  const remaining = LESSONS.length - state.completed.length;
  const finishDate = days.length ? days[days.length - 1]!.label : "—";

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl font-bold">
        Study <span className="text-gradient">Planner</span>
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Your schedule is rebuilt from whatever is still unfinished, so it keeps up whether you fall
        behind or race ahead.
      </p>

      <Card className="mt-6 grid gap-4 md:grid-cols-3">
        <Field label="Study hours per day">
          <input
            type="number"
            min={0.5}
            max={12}
            step={0.5}
            className={inputClass}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </Field>
        <Field label="Start date">
          <input
            type="date"
            className={inputClass}
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </Field>
        <div className="text-sm">
          <span className="mb-1.5 block text-muted-foreground">Study days</span>
          <div className="flex flex-wrap gap-1.5">
            {DAY_LABELS.map((d, i) => {
              const on = weekdays.includes(i);
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => setWeekdays((w) => (on ? w.filter((x) => x !== i) : [...w, i]))}
                  className={`rounded-lg px-2.5 py-1.5 text-xs transition ${
                    on
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-3">
          <Button onClick={save}>Generate my plan</Button>
        </div>
      </Card>

      {plan ? (
        <>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Lessons left
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-gradient">{remaining}</p>
            </Card>
            <Card className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Study days</p>
              <p className="mt-1 font-display text-2xl font-bold text-gradient">{days.length}</p>
            </Card>
            <Card className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Finish by</p>
              <p className="mt-1 font-display text-2xl font-bold text-gradient">{finishDate}</p>
            </Card>
          </div>

          <div className="mt-6 space-y-3">
            {days.map((d) => (
              <Card key={d.date}>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold">{d.label}</h3>
                  <span className="text-xs text-muted-foreground">{d.minutes} min</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {d.lessons.map((l) => (
                    <li key={l.id}>
                      <Link
                        to="/lesson/$id"
                        params={{ id: l.id }}
                        className="text-sm text-muted-foreground transition hover:text-primary"
                      >
                        {l.index}. {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
            {days.length === 0 ? (
              <Card>You've finished every lesson. Time to build projects.</Card>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}
