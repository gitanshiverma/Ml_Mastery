import { LESSONS, type Lesson } from "./course";
import type { PlanSettings } from "./store";

export type PlanDay = {
  date: string; // YYYY-MM-DD
  label: string;
  lessons: Lesson[];
  minutes: number;
};

function fmt(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

/**
 * Distributes the remaining (not yet completed) lessons across the user's
 * available study days, respecting their daily hour budget. Because it always
 * starts from what is still unfinished, the plan self-adjusts when the user
 * falls behind or races ahead.
 */
export function buildPlan(plan: PlanSettings, completed: string[]): PlanDay[] {
  const remaining = LESSONS.filter((l) => !completed.includes(l.id));
  if (remaining.length === 0) return [];

  const budget = Math.max(15, Math.round(plan.hoursPerDay * 60));
  const weekdays = plan.weekdays.length ? plan.weekdays : [0, 1, 2, 3, 4, 5, 6];

  const start = new Date(`${plan.startDate}T00:00:00`);
  const cursor = new Date(isNaN(start.getTime()) ? Date.now() : start.getTime());

  const days: PlanDay[] = [];
  let i = 0;
  let guard = 0;

  while (i < remaining.length && guard < 800) {
    guard += 1;
    if (weekdays.includes(cursor.getDay())) {
      const bucket: Lesson[] = [];
      let minutes = 0;
      while (i < remaining.length) {
        const next = remaining[i]!;
        if (bucket.length > 0 && minutes + next.minutes > budget) break;
        bucket.push(next);
        minutes += next.minutes;
        i += 1;
        if (minutes >= budget) break;
      }
      days.push({
        date: fmt(cursor),
        label: cursor.toLocaleDateString(undefined, {
          weekday: "short",
          day: "numeric",
          month: "short",
        }),
        lessons: bucket,
        minutes,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}
