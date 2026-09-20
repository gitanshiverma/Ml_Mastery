import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  formatHoursAndMins,
  formatStudyDurationLong,
  getEffectiveDailyGoalMinutes,
  streakDays,
  todayKey,
  useStore,
} from "@/lib/store";
import { buildPlan } from "@/lib/planner";
import { Button, Card, Confetti, Stat, inputClass } from "@/components/ui-kit";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const GOAL_PRESETS = [
  { label: "1h 0m", mins: 60 },
  { label: "2h 0m", mins: 120 },
  { label: "3h 0m", mins: 180 },
  { label: "4h 0m", mins: 240 },
  { label: "8h 0m (Warrior)", mins: 480 },
];

function formatDateKey(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function StudyCalendar() {
  const { state, update } = useStore();
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed
  const [selectedDate, setSelectedDate] = useState<string>(todayKey());
  const [celebrate, setCelebrate] = useState(false);
  const [customGoalInput, setCustomGoalInput] = useState<string>("");
  const [showGoalEditor, setShowGoalEditor] = useState(false);
  const [customLogMinutes, setCustomLogMinutes] = useState<number>(30);

  const dailyGoalMinutes = getEffectiveDailyGoalMinutes(state);

  // Derive planned schedule if planner settings exist
  const planDays = useMemo(() => {
    return state.plan ? buildPlan(state.plan, state.completed) : [];
  }, [state.plan, state.completed]);

  const planDayMap = useMemo(() => {
    const map = new Map<string, (typeof planDays)[0]>();
    for (const d of planDays) {
      map.set(d.date, d);
    }
    return map;
  }, [planDays]);

  // Calendar matrix calculations
  const monthData = useMemo(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    // Monday is 0, Sunday is 6 in our UI
    let startDayOfWeek = firstDayOfMonth.getDay() - 1;
    if (startDayOfWeek === -1) startDayOfWeek = 6;

    const daysFromPrevMonth = startDayOfWeek;
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

    const cells: {
      dateKey: string;
      dayNum: number;
      isCurrentMonth: boolean;
      isToday: boolean;
      minutes: number;
      isGoalMet: boolean;
      planned?: (typeof planDays)[0];
    }[] = [];

    // Previous month padding
    const prevMonthIdx = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const d = prevMonthLastDay - i;
      const key = formatDateKey(prevYear, prevMonthIdx, d);
      const mins = state.sessions[key] ?? 0;
      cells.push({
        dateKey: key,
        dayNum: d,
        isCurrentMonth: false,
        isToday: key === todayKey(),
        minutes: mins,
        isGoalMet: mins >= dailyGoalMinutes && dailyGoalMinutes > 0,
        planned: planDayMap.get(key),
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const key = formatDateKey(currentYear, currentMonth, d);
      const mins = state.sessions[key] ?? 0;
      cells.push({
        dateKey: key,
        dayNum: d,
        isCurrentMonth: true,
        isToday: key === todayKey(),
        minutes: mins,
        isGoalMet: mins >= dailyGoalMinutes && dailyGoalMinutes > 0,
        planned: planDayMap.get(key),
      });
    }

    // Next month padding to fill grid
    const totalFilled = cells.length;
    const remainder = totalFilled % 7 === 0 ? 0 : 7 - (totalFilled % 7);
    const nextMonthIdx = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    for (let d = 1; d <= remainder; d++) {
      const key = formatDateKey(nextYear, nextMonthIdx, d);
      const mins = state.sessions[key] ?? 0;
      cells.push({
        dateKey: key,
        dayNum: d,
        isCurrentMonth: false,
        isToday: key === todayKey(),
        minutes: mins,
        isGoalMet: mins >= dailyGoalMinutes && dailyGoalMinutes > 0,
        planned: planDayMap.get(key),
      });
    }

    return { cells, daysInMonth };
  }, [currentYear, currentMonth, state.sessions, dailyGoalMinutes, planDayMap]);

  // Monthly statistics
  const monthStats = useMemo(() => {
    let totalMins = 0;
    let goalDays = 0;
    let daysWithStudy = 0;

    for (let d = 1; d <= monthData.daysInMonth; d++) {
      const key = formatDateKey(currentYear, currentMonth, d);
      const mins = state.sessions[key] ?? 0;
      if (mins > 0) {
        totalMins += mins;
        daysWithStudy += 1;
      }
      if (mins >= dailyGoalMinutes && dailyGoalMinutes > 0) {
        goalDays += 1;
      }
    }

    const isCurrentActualMonth =
      today.getFullYear() === currentYear && today.getMonth() === currentMonth;
    const daysElapsed = isCurrentActualMonth ? today.getDate() : monthData.daysInMonth;
    const completionRate = daysElapsed > 0 ? Math.round((goalDays / daysElapsed) * 100) : 0;

    return {
      totalDisplay: formatHoursAndMins(totalMins),
      totalHours: (totalMins / 60).toFixed(1),
      goalDays,
      daysWithStudy,
      completionRate,
      totalMinutes: totalMins,
    };
  }, [currentYear, currentMonth, monthData.daysInMonth, state.sessions, dailyGoalMinutes, today]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const jumpToToday = () => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    setCurrentMonth(now.getMonth());
    setSelectedDate(todayKey());
  };

  const setDailyGoal = (mins: number) => {
    update((s) => ({
      ...s,
      dailyGoalMinutes: mins,
    }));
    setShowGoalEditor(false);
  };

  const logTimeToDate = (dateKey: string, deltaMinutes: number) => {
    update((s) => {
      const current = s.sessions[dateKey] ?? 0;
      const nextMinutes = Math.max(0, current + deltaMinutes);
      const prevGoalMet = current >= dailyGoalMinutes && dailyGoalMinutes > 0;
      const nextGoalMet = nextMinutes >= dailyGoalMinutes && dailyGoalMinutes > 0;

      if (!prevGoalMet && nextGoalMet) {
        setTimeout(() => setCelebrate(true), 50);
        setTimeout(() => setCelebrate(false), 3500);
      }

      const sessions = { ...s.sessions, [dateKey]: nextMinutes };
      const pointDelta = deltaMinutes > 0 ? deltaMinutes : -Math.min(current, Math.abs(deltaMinutes));
      const nextPoints = Math.max(0, s.points + pointDelta);

      return {
        ...s,
        sessions,
        points: nextPoints,
      };
    });
  };

  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Selected date info
  const selectedMinutes = state.sessions[selectedDate] ?? 0;
  const selectedIsGoalMet = selectedMinutes >= dailyGoalMinutes && dailyGoalMinutes > 0;
  const selectedGoalPct = Math.min(
    200,
    dailyGoalMinutes > 0 ? Math.round((selectedMinutes / dailyGoalMinutes) * 100) : 0,
  );
  const selectedPlan = planDayMap.get(selectedDate);
  const selectedDateObj = new Date(`${selectedDate}T00:00:00`);
  const selectedDateFormatted = !isNaN(selectedDateObj.getTime())
    ? selectedDateObj.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : selectedDate;

  return (
    <div className="space-y-6">
      <Confetti show={celebrate} />

      {/* Header & Controls */}
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">{monthName}</h2>
          <p className="text-xs text-muted-foreground">
            Per-day Goal:{" "}
            <span className="font-semibold text-primary">{formatHoursAndMins(dailyGoalMinutes)}</span>
            {" · "}
            {monthStats.goalDays} multi-neon goal days
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" className="px-2.5 py-1 text-xs" onClick={prevMonth}>
            ← Prev
          </Button>
          <Button variant="outline" className="px-2.5 py-1 text-xs" onClick={jumpToToday}>
            Today
          </Button>
          <Button variant="outline" className="px-2.5 py-1 text-xs" onClick={nextMonth}>
            Next →
          </Button>
          <Button
            variant="ghost"
            className="border border-border/70 px-2.5 py-1 text-xs hover:border-primary"
            onClick={() => setShowGoalEditor((v) => !v)}
          >
            ⚙ Goal: {formatHoursAndMins(dailyGoalMinutes)}
          </Button>
        </div>
      </Card>

      {/* Daily Goal Target Selector Modal/Drawer */}
      {showGoalEditor && (
        <Card className="border-primary/40 bg-card/95 backdrop-blur-md">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-sm font-semibold">Customize Per-Day Study Goal</p>
              <p className="text-xs text-muted-foreground">
                Completing this goal turns your day block into animated multi-neon glowing colors!
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {GOAL_PRESETS.map((p) => (
                <button
                  key={p.mins}
                  onClick={() => setDailyGoal(p.mins)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                    dailyGoalMinutes === p.mins
                      ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "border border-border bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p.label}
                </button>
              ))}
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0.5"
                  max="16"
                  step="0.5"
                  placeholder="hrs"
                  value={customGoalInput}
                  onChange={(e) => setCustomGoalInput(e.target.value)}
                  className="w-16 rounded-md border border-input bg-background px-2 py-1 text-xs text-foreground"
                />
                <Button
                  variant="outline"
                  className="px-2 py-1 text-xs"
                  onClick={() => {
                    const hrs = parseFloat(customGoalInput);
                    if (hrs && hrs > 0) setDailyGoal(Math.round(hrs * 60));
                  }}
                >
                  Set
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Monthly Metrics Summary Strip */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Study time this month" value={monthStats.totalDisplay} />
        <Stat
          label="Multi-neon goal days"
          value={`${monthStats.goalDays} days`}
          hint={`Goal: ${formatHoursAndMins(dailyGoalMinutes)}/day`}
        />
        <Stat label="Goal hit rate" value={`${monthStats.completionRate}%`} />
        <Stat label="Current Streak" value={`${streakDays(state.sessions)} days`} />
      </div>

      {/* Compact Small Block Calendar Grid */}
      <div className="glass overflow-hidden rounded-2xl p-3 sm:p-5">
        {/* Weekday headers */}
        <div className="mb-2 grid grid-cols-7 gap-1.5 sm:gap-2 text-center">
          {WEEKDAYS.map((w) => (
            <div
              key={w}
              className="py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {w}
            </div>
          ))}
        </div>

        {/* Small Block Days Grid */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {monthData.cells.map((cell) => {
            const isSelected = cell.dateKey === selectedDate;
            const hasHours = cell.minutes > 0;
            const progress =
              dailyGoalMinutes > 0
                ? Math.min(100, Math.round((cell.minutes / dailyGoalMinutes) * 100))
                : 0;

            // Small block styling
            let blockClasses =
              "relative flex flex-col justify-between rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 transition-all cursor-pointer min-h-[58px] sm:min-h-[72px] text-left border overflow-hidden select-none";

            if (!cell.isCurrentMonth) {
              blockClasses += " opacity-30 bg-card/15 border-border/20 hover:opacity-70";
            } else if (cell.isGoalMet) {
              // Multi-neon glowing colors animation!
              blockClasses += " multi-neon-block text-white font-bold shadow-md hover:scale-[1.02]";
            } else if (hasHours) {
              // In progress with study time
              blockClasses +=
                " bg-card/85 border-primary/45 hover:border-primary/80 shadow-xs";
            } else if (cell.planned) {
              // Planned study day
              blockClasses +=
                " bg-card/40 border-dashed border-accent/45 hover:border-accent";
            } else {
              // Empty day
              blockClasses +=
                " bg-card/35 border-border/40 hover:border-border hover:bg-card/60";
            }

            if (isSelected) {
              blockClasses += " ring-2 ring-primary ring-offset-1 ring-offset-background z-10";
            }

            return (
              <button
                key={cell.dateKey}
                type="button"
                onClick={() => setSelectedDate(cell.dateKey)}
                className={blockClasses}
              >
                {/* Shimmer glossy light sweep overlay for multi-neon completed days */}
                {cell.isGoalMet && (
                  <div className="shimmer-overlay">
                    <div className="shimmer-beam" />
                  </div>
                )}

                {/* Top: Day Number & Small Badge */}
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`font-display text-[11px] sm:text-xs font-semibold ${
                      cell.isToday
                        ? "flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-xs"
                        : cell.isGoalMet
                          ? "text-white font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                          : "text-foreground"
                    }`}
                  >
                    {cell.dayNum}
                  </span>

                  {cell.isGoalMet ? (
                    <span
                      title="Goal Completed!"
                      className="flex items-center text-[10px] sm:text-[11px] drop-shadow-sm"
                    >
                      🏆
                    </span>
                  ) : cell.isToday ? (
                    <span className="hidden rounded bg-secondary/80 px-1 text-[8px] font-medium text-muted-foreground sm:inline">
                      Today
                    </span>
                  ) : null}
                </div>

                {/* Bottom: Hours and Minutes Studied Display */}
                <div className="mt-1">
                  <div
                    className={`text-[10px] sm:text-[11px] font-medium leading-tight truncate ${
                      cell.isGoalMet
                        ? "text-white font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                        : hasHours
                          ? "text-primary font-semibold"
                          : "text-muted-foreground/45"
                    }`}
                  >
                    {formatHoursAndMins(cell.minutes)}
                  </div>

                  {/* Progress bar for partially studied days */}
                  {!cell.isGoalMet && hasHours && (
                    <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted/60">
                      <div
                        className="h-full rounded-full bg-primary/80 transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Inspector & Quick Logger Panel */}
      <Card
        className={`transition-all ${
          selectedIsGoalMet
            ? "multi-neon-block text-foreground border-primary/70"
            : ""
        }`}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl font-bold">{selectedDateFormatted}</h3>
              {selectedDate === todayKey() && (
                <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary border border-primary/30">
                  Today
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Studied on this day:{" "}
              <strong className="text-foreground">
                {formatHoursAndMins(selectedMinutes)}
              </strong>{" "}
              ({formatStudyDurationLong(selectedMinutes)})
              {" · "}
              Target:{" "}
              <strong className="text-foreground">
                {formatHoursAndMins(dailyGoalMinutes)}
              </strong>
            </p>
          </div>

          {/* Goal Status Pill */}
          <div className="flex items-center gap-3">
            {selectedIsGoalMet ? (
              <div className="flex items-center gap-2.5 rounded-xl bg-black/40 backdrop-blur-md px-4 py-2.5 border border-white/30 shadow-lg">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-display text-sm font-bold multi-neon-text">
                    Multi-Neon Goal Achieved!
                  </p>
                  <p className="text-xs text-white/80">
                    {selectedGoalPct}% of daily target completed
                  </p>
                </div>
              </div>
            ) : selectedMinutes > 0 ? (
              <div className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 border border-border">
                <span className="text-2xl">⏳</span>
                <div>
                  <p className="font-display text-sm font-bold">
                    {formatHoursAndMins(Math.max(0, dailyGoalMinutes - selectedMinutes))} remaining
                  </p>
                  <p className="text-xs text-muted-foreground">{selectedGoalPct}% towards goal</p>
                </div>
              </div>
            ) : (
              <div className="text-xs text-muted-foreground">
                No study time recorded for this date yet.
              </div>
            )}
          </div>
        </div>

        {/* Quick Log Buttons for Selected Day */}
        <div className="mt-5 border-t border-border/70 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Log Study Time for {selectedDate}
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              className="text-xs bg-card/80"
              onClick={() => logTimeToDate(selectedDate, 15)}
            >
              +15m
            </Button>
            <Button
              variant="outline"
              className="text-xs bg-card/80"
              onClick={() => logTimeToDate(selectedDate, 30)}
            >
              +30m
            </Button>
            <Button
              variant="outline"
              className="text-xs bg-card/80"
              onClick={() => logTimeToDate(selectedDate, 60)}
            >
              +1h 0m
            </Button>
            <Button
              variant="outline"
              className="text-xs bg-card/80"
              onClick={() => logTimeToDate(selectedDate, 120)}
            >
              +2h 0m
            </Button>
            <Button
              variant="ghost"
              className="text-xs border border-border bg-card/50"
              onClick={() => logTimeToDate(selectedDate, -30)}
              disabled={selectedMinutes <= 0}
            >
              −30m
            </Button>

            <div className="flex items-center gap-1.5 sm:ml-auto">
              <input
                type="number"
                min="5"
                max="600"
                step="5"
                value={customLogMinutes}
                onChange={(e) => setCustomLogMinutes(Math.max(1, Number(e.target.value)))}
                className={`${inputClass} !w-20 !py-1 text-xs`}
                placeholder="mins"
              />
              <Button
                variant="outline"
                className="text-xs"
                onClick={() => logTimeToDate(selectedDate, customLogMinutes)}
              >
                + Log Mins
              </Button>
              {selectedMinutes > 0 && (
                <Button
                  variant="ghost"
                  className="text-xs text-destructive hover:bg-destructive/10"
                  onClick={() => logTimeToDate(selectedDate, -selectedMinutes)}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Planned Lessons on this date */}
        {selectedPlan && selectedPlan.lessons.length > 0 && (
          <div className="mt-4 border-t border-border/70 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Planned Lessons ({selectedPlan.lessons.length} lessons · {selectedPlan.minutes} min)
            </p>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {selectedPlan.lessons.map((l) => (
                <li key={l.id}>
                  <Link
                    to="/lesson/$id"
                    params={{ id: l.id }}
                    className="flex items-center justify-between rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-xs transition hover:border-primary hover:text-primary"
                  >
                    <span className="truncate font-medium">
                      {l.index}. {l.title}
                    </span>
                    <span className="shrink-0 text-muted-foreground ml-2">{l.minutes}m</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
}
