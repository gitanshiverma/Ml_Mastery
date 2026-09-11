import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useStore, type ProjectEntry } from "@/lib/store";
import { Button, Card, Field, inputClass } from "@/components/ui-kit";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "ML Project Ideas & Submissions | ML Mastery" },
      {
        name: "description",
        content:
          "Browse machine learning project ideas for every module, submit your own builds and track which ones you have finished.",
      },
      { property: "og:title", content: "ML Project Ideas & Submissions" },
      {
        property: "og:description",
        content: "Project ideas for every ML topic, plus a place to log your own work.",
      },
    ],
  }),
  component: ProjectsPage,
});

const IDEAS = [
  {
    topic: "Linear Regression",
    idea: "Predict house prices from the Boston or Bengaluru housing data.",
  },
  {
    topic: "Ridge & Lasso",
    idea: "Compare regularised models on a high-dimensional gene expression dataset.",
  },
  {
    topic: "Logistic Regression",
    idea: "Build a loan-default classifier with a clean evaluation report.",
  },
  { topic: "Naive Bayes", idea: "Classify SMS messages as spam or ham using TF-IDF features." },
  { topic: "KNN", idea: "Recommend movies by nearest-neighbour similarity on ratings." },
  { topic: "SVM", idea: "Classify handwritten digits and visualise the decision boundaries." },
  {
    topic: "Decision Trees",
    idea: "Predict customer churn and explain each split to a non-technical reader.",
  },
  { topic: "Random Forest", idea: "Rank feature importance for a credit-risk dataset." },
  {
    topic: "Boosting",
    idea: "Beat your random forest baseline with AdaBoost and gradient boosting.",
  },
  { topic: "Clustering", idea: "Segment retail customers with K-Means and profile each cluster." },
  {
    topic: "Anomaly Detection",
    idea: "Flag fraudulent card transactions with Isolation Forest and LOF.",
  },
  {
    topic: "Automated EDA",
    idea: "Publish a one-click profiling report for any CSV a user uploads.",
  },
];

function ProjectsPage() {
  const { state, update } = useStore();
  const [form, setForm] = useState({ title: "", description: "", repo: "", demo: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    const entry: ProjectEntry = {
      id: `${Date.now()}`,
      title: form.title.trim(),
      description: form.description.trim(),
      repo: form.repo.trim(),
      demo: form.demo.trim(),
      done: false,
    };
    update((s) => ({ ...s, projects: [entry, ...s.projects], points: s.points + 50 }));
    setForm({ title: "", description: "", repo: "", demo: "" });
  };

  const toggleDone = (id: string) =>
    update((s) => ({
      ...s,
      projects: s.projects.map((p) => (p.id === id ? { ...p, done: !p.done } : p)),
    }));

  const remove = (id: string) =>
    update((s) => ({ ...s, projects: s.projects.filter((p) => p.id !== id) }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl font-bold">
        Build <span className="text-gradient">Projects</span>
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Theory sticks when you ship something. Pick an idea, build it, then log it here.
      </p>

      <h2 className="mt-8 font-display text-2xl font-bold">Project ideas</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {IDEAS.map((i) => (
          <Card key={i.topic}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {i.topic}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{i.idea}</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 font-display text-2xl font-bold">Submit your project</h2>
      <Card className="mt-4">
        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
          <Field label="Title">
            <input
              className={inputClass}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Spam classifier"
              required
            />
          </Field>
          <Field label="GitHub link">
            <input
              className={inputClass}
              value={form.repo}
              onChange={(e) => setForm({ ...form, repo: e.target.value })}
              placeholder="https://github.com/..."
            />
          </Field>
          <Field label="Demo link">
            <input
              className={inputClass}
              value={form.demo}
              onChange={(e) => setForm({ ...form, demo: e.target.value })}
              placeholder="https://..."
            />
          </Field>
          <Field label="Description">
            <input
              className={inputClass}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="What it does and which model you used"
            />
          </Field>
          <div className="sm:col-span-2">
            <Button type="submit">Add project (+50 pts)</Button>
          </div>
        </form>
      </Card>

      <h2 className="mt-10 font-display text-2xl font-bold">Your projects</h2>
      <div className="mt-4 space-y-3">
        {state.projects.length === 0 ? (
          <Card className="text-sm text-muted-foreground">Nothing logged yet.</Card>
        ) : null}
        {state.projects.map((p) => (
          <Card key={p.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p
                  className={`font-display font-semibold ${p.done ? "line-through opacity-60" : ""}`}
                >
                  {p.title}
                </p>
                {p.description ? (
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                ) : null}
                <div className="mt-2 flex gap-4 text-sm">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      Code
                    </a>
                  ) : null}
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => toggleDone(p.id)}>
                  {p.done ? "Reopen" : "Mark done"}
                </Button>
                <Button variant="ghost" onClick={() => remove(p.id)}>
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
