"use client";

import { useEffect, useMemo, useState } from "react";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  color: "cyan" | "green" | "purple" | "yellow";
  sublabel?: string;
};

const metrics: Metric[] = [
  { label: "Chain ID", value: 210866, prefix: "#", color: "cyan", sublabel: "0x337b2" },
  { label: "Block Time", value: 2, suffix: "s", color: "green", sublabel: "avg confirmation" },
  { label: "RPC Status", value: 1, suffix: " LIVE", color: "green", sublabel: "endpoint active" },
  { label: "Validators", value: 1, suffix: " node", color: "purple", sublabel: "genesis validator" },
];

const colorMap = {
  cyan: {
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/[0.03]",
    hoverBorder: "hover:border-cyan-500/40",
    hoverBg: "hover:bg-cyan-500/[0.06]",
    text: "text-cyan-300",
    label: "text-cyan-500/60",
    sub: "text-cyan-500/40",
    glow: "hover:shadow-[0_0_25px_rgba(0,212,255,0.08)]",
  },
  green: {
    border: "border-green-500/20",
    bg: "bg-green-500/[0.03]",
    hoverBorder: "hover:border-green-500/40",
    hoverBg: "hover:bg-green-500/[0.06]",
    text: "text-green-300",
    label: "text-green-500/60",
    sub: "text-green-500/40",
    glow: "hover:shadow-[0_0_25px_rgba(0,255,157,0.08)]",
  },
  purple: {
    border: "border-purple-500/20",
    bg: "bg-purple-500/[0.03]",
    hoverBorder: "hover:border-purple-500/40",
    hoverBg: "hover:bg-purple-500/[0.06]",
    text: "text-purple-300",
    label: "text-purple-500/60",
    sub: "text-purple-500/40",
    glow: "hover:shadow-[0_0_25px_rgba(157,78,221,0.08)]",
  },
  yellow: {
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/[0.03]",
    hoverBorder: "hover:border-yellow-500/40",
    hoverBg: "hover:bg-yellow-500/[0.06]",
    text: "text-yellow-300",
    label: "text-yellow-500/60",
    sub: "text-yellow-500/40",
    glow: "hover:shadow-[0_0_25px_rgba(251,191,36,0.08)]",
  },
};

function useCountUp(target: number, duration = 1400) {
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

  const c = colorMap[metric.color];

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border ${c.border} ${c.bg} ${c.hoverBorder} ${c.hoverBg} ${c.glow} p-5 transition`}
    >
      {/* Top label */}
      <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${c.label}`}>{metric.label}</p>

      {/* Value */}
      <p className={`mt-3 font-mono text-2xl font-bold ${c.text}`}>
        <span className="text-base font-normal opacity-60">{metric.prefix ?? ""}</span>
        {display}
        <span className="text-sm font-normal opacity-60">{metric.suffix ?? ""}</span>
      </p>

      {/* Sub-label */}
      {metric.sublabel && (
        <p className={`mt-1.5 font-mono text-[10px] ${c.sub}`}>{metric.sublabel}</p>
      )}
    </div>
  );
}

export default function AnimatedMetrics() {
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <MetricCard key={m.label} metric={m} />
      ))}
    </div>
  );
}
