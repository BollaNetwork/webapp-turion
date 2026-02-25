"use client";

import { useEffect, useMemo, useState } from "react";

type Metric = { label: string; value: number; suffix?: string };

const metrics: Metric[] = [
  { label: "Chain ID", value: 210866 },
  { label: "Block Time", value: 2, suffix: "s" },
  { label: "Live RPC", value: 1, suffix: " endpoint" },
  { label: "Initial Validator", value: 1, suffix: " node" },
];

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = 16;
    const totalSteps = Math.max(1, Math.floor(duration / step));
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, step);

    return () => clearInterval(timer);
  }, [target, duration]);

  return value;
}

function MetricCard({ metric }: { metric: Metric }) {
  const raw = useCountUp(metric.value);
  const display = useMemo(() => {
    if (metric.value >= 1000) return Math.round(raw).toLocaleString("en-US");
    if (metric.value <= 10) return raw.toFixed(metric.value < 3 ? 1 : 0);
    return Math.round(raw).toString();
  }, [raw, metric.value]);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,.18),transparent_45%)]" />
      <p className="relative text-[11px] uppercase tracking-wider text-zinc-400">{metric.label}</p>
      <p className="relative mt-2 text-2xl font-semibold text-white">
        {display}
        <span className="text-cyan-300">{metric.suffix ?? ""}</span>
      </p>
    </div>
  );
}

export default function AnimatedMetrics() {
  return (
    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <MetricCard key={m.label} metric={m} />
      ))}
    </div>
  );
}
