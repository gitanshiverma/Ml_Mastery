import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LESSONS, MODULE_NAMES } from "@/lib/course";
import { useStore } from "@/lib/store";
import { Card, Progress, inputClass } from "@/components/ui-kit";

export const Route = createFileRoute("/course")({
  head: () => ({
    meta: [
      { title: "Machine Learning Full Course — 38 Lessons | ML Mastery" },
      {
        name: "description",
        content:
          "A structured 38-lesson machine learning curriculum in Hindi: regression, classification, SVM, trees, ensembles and clustering.",
      },
      { property: "og:title", content: "Machine Learning Full Course — 38 Lessons" },
      {
        property: "og:description",
        content: "Follow the complete ML curriculum lesson by lesson and track your progress.",
      },
    ],
  }),
  component: CoursePage,
});

function CoursePage() {
  const { state } = useStore();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LESSONS;
    return LESSONS.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q) ||
        l.module.toLowerCase().includes(q),
    );
  }, [query]);

  const done = state.completed.length;
  const pct = Math.round((done / LESSONS.length) * 100);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl font-bold">
        The <span className="text-gradient">Machine Learning</span> Course
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        38 lessons across 10 modules, from your first straight line to anomaly detection.
      </p>

      <Card className="mt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {done} of {LESSONS.length} lessons complete
          </span>
          <span className="font-display text-lg font-bold text-gradient">{pct}%</span>
        </div>
        <Progress value={pct} className="mt-3" />
      </Card>

      <input
        className={`${inputClass} mt-6`}
        placeholder="Search lessons, e.g. random forest"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mt-8 space-y-10">
        {MODULE_NAMES.map((moduleName) => {
          const lessons = filtered.filter((l) => l.module === moduleName);
          if (!lessons.length) return null;
          return (
            <section key={moduleName}>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {moduleName}
              </h2>
              <div className="space-y-2">
                {lessons.map((l) => {
                  const complete = state.completed.includes(l.id);
                  return (
                    <Link
                      key={l.id}
                      to="/lesson/$id"
                      params={{ id: l.id }}
                      className="glass flex items-center gap-4 p-4 transition hover:border-primary"
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                          complete
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {complete ? "✓" : l.index}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{l.title}</span>
                        <span className="block truncate text-sm text-muted-foreground">
                          {l.summary}
                        </span>
                      </span>
                      <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">
                        {l.minutes} min
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
