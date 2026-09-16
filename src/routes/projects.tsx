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
    topic: "End-to-End ML Deployment",
    idea: "Build and deploy a complete ML toy application using Scikit-Learn, Pickle, and Streamlit.",
  },
  {
    topic: "Data Scraping & EDA",
    idea: "Scrape tabular data from web pages/APIs and create a deep exploratory analysis on IPL or Movie datasets.",
  },
  {
    topic: "Feature Engineering Pipeline",
    idea: "Build an end-to-end ColumnTransformer & Pipeline with One-Hot encoding, imputation, and power transforms.",
  },
  {
    topic: "Linear, Ridge & Lasso Regression",
    idea: "Predict house prices and compare OLS, Ridge (L2), and Lasso (L1) with automated alpha tuning.",
  },
  {
    topic: "Logistic Regression & ROC-AUC",
    idea: "Build a credit card fraud detection classifier with threshold tuning and ROC-AUC curve evaluation.",
  },
  {
    topic: "Naive Bayes Classifier",
    idea: "Classify SMS messages and spam emails using TF-IDF vectorization and Multinomial Naive Bayes.",
  },
  {
    topic: "KNN Recommendation Engine",
    idea: "Recommend movies or songs based on feature similarity and Minkowski distance metrics.",
  },
  {
    topic: "Support Vector Machines",
    idea: "Classify handwritten digits or non-linear blobs using SVM with RBF and Polynomial kernels.",
  },
  {
    topic: "Decision Trees & dtreeviz",
    idea: "Predict employee attrition or churn and visualize tree decision boundaries with dtreeviz.",
  },
  {
    topic: "Random Forest & OOB Score",
    idea: "Build a loan approval predictor and calculate feature importances alongside out-of-bag (OOB) validation.",
  },
  {
    topic: "AdaBoost & Gradient Boosting",
    idea: "Train custom AdaBoost and Gradient Boosting regressors and compare residual convergence.",
  },
  {
    topic: "XGBoost & Ensembles",
    idea: "Compete on Kaggle tabular benchmarks using XGBoost, Voting Classifiers, and Stacking meta-learners.",
  },
  {
    topic: "K-Means & DBSCAN Clustering",
    idea: "Segment e-commerce customers into behavioral personas using K-Means (Elbow method) and DBSCAN.",
  },
  {
    topic: "Optuna Hyperparameter Tuning",
    idea: "Optimize XGBoost and Random Forest hyperparameters using Optuna's Bayesian TPE sampler and pruning.",
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
