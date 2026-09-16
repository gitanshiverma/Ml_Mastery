import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { LESSONS, embedUrl, lessonById } from "@/lib/course";
import { useStore } from "@/lib/store";
import { Button, Card, Confetti, Progress } from "@/components/ui-kit";

export const Route = createFileRoute("/lesson/$id")({
  loader: ({ params }) => {
    const lesson = lessonById(params.id);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Lesson unavailable | ML Mastery" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { lesson } = loaderData;
    const title = `${lesson.title} | ML Mastery`;
    return {
      meta: [
        { title },
        { name: "description", content: lesson.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: lesson.summary },
      ],
    };
  },
  component: LessonPage,
});

function LessonPage() {
  const { lesson } = Route.useLoaderData();
  const { state, update } = useStore();
  const [celebrate, setCelebrate] = useState(false);

  const complete = state.completed.includes(lesson.id);
  const prev = LESSONS[lesson.index - 2];
  const next = LESSONS[lesson.index];
  const pct = Math.round((state.completed.length / LESSONS.length) * 100);

  const toggle = () => {
    update((s) => {
      const isDone = s.completed.includes(lesson.id);
      const completed = isDone
        ? s.completed.filter((c) => c !== lesson.id)
        : [...s.completed, lesson.id];
      const badges = new Set(s.badges);
      if (!isDone) {
        badges.add("first-step");
        if (completed.length >= LESSONS.length / 2) badges.add("halfway");
        if (completed.length === LESSONS.length) badges.add("graduate");
      }
      return {
        ...s,
        completed,
        points: Math.max(0, s.points + (isDone ? -20 : 20)),
        badges: [...badges],
      };
    });
    if (!complete) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 3000);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Confetti show={celebrate} />
      <Link to="/course" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to course
      </Link>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {lesson.module} · Lesson {lesson.index} of {LESSONS.length}
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold">{lesson.title}</h1>

      <div className="glass mt-6 aspect-video w-full overflow-hidden">
        <iframe
          className="h-full w-full"
          src={embedUrl(lesson)}
          title={lesson.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>

      <Card className="mt-6">
        <h2 className="font-display text-lg font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">{lesson.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span>⏱️ Estimated watch time: {lesson.minutes} minutes</span>
          <span>•</span>
          <a
            href={`https://www.youtube.com/watch?v=${lesson.videoId}&list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH&index=${lesson.index}`}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            Watch on YouTube ↗
          </a>
          <span>•</span>
          <a
            href="https://github.com/campusx-official/100-days-of-machine-learning"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            CampusX Code Repository ↗
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button onClick={toggle} variant={complete ? "outline" : "primary"}>
            {complete ? "✓ Completed — undo" : "Mark as complete (+20 pts)"}
          </Button>
          {prev ? (
            <Link
              to="/lesson/$id"
              params={{ id: prev.id }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Previous
            </Link>
          ) : null}
          {next ? (
            <Link
              to="/lesson/$id"
              params={{ id: next.id }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Next lesson →
            </Link>
          ) : null}
        </div>
      </Card>

      {lesson.notes && lesson.notes.length > 0 ? (
        <Card className="mt-6">
          <h2 className="font-display text-lg font-semibold">Key Takeaways & Notes</h2>
          <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
            {lesson.notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm text-muted-foreground">
          <span>Course progress</span>
          <span>{pct}%</span>
        </div>
        <Progress value={pct} />
      </div>
    </div>
  );
}
