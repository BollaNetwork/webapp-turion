"use client";

import { useState } from "react";

const DONATION = {
  BTC: "bc1qREPLACE_WITH_YOUR_BTC_ADDRESS",
  SOL: "REPLACE_WITH_YOUR_SOLANA_ADDRESS",
  ETH: "0x62018812b89511be4933458379fa9ea344692f60",
} as const;

type Net = keyof typeof DONATION;

const netConfig: Record<Net, { active: string; border: string; text: string }> = {
  BTC: {
    active: "border-orange-400/50 bg-orange-400/12 text-orange-300",
    border: "border-orange-400/30",
    text: "text-orange-300",
  },
  SOL: {
    active: "border-purple-400/50 bg-purple-400/12 text-purple-300",
    border: "border-purple-400/30",
    text: "text-purple-300",
  },
  ETH: {
    active: "border-cyan-400/50 bg-cyan-400/12 text-cyan-300",
    border: "border-cyan-400/30",
    text: "text-cyan-300",
  },
};

const inputClass =
  "mt-1.5 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 font-mono text-sm text-zinc-200 placeholder:text-zinc-700 focus:border-cyan-500/40 focus:outline-none transition";

export default function FundraisingFlow() {
  const [net, setNet] = useState<Net>("ETH");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", amount: "", wallet: "", txHash: "" });

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setMsg("Address copied to clipboard");
    setTimeout(() => setMsg(""), 1800);
  };

  const submit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/fundraising", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, network: net }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setMsg("Saved. TRN rewards sent after verification.");
      setForm({ email: "", amount: "", wallet: "", txHash: "" });
    } catch (e: any) {
      setMsg(e.message || "Error saving");
    } finally {
      setLoading(false);
      setTimeout(() => setMsg(""), 3000);
    }
  };

  const cfg = netConfig[net];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-yellow-400/18 bg-black/60 p-6 backdrop-blur-xl">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-yellow-400/60">Fundraising Round</p>
      <h3 className="mt-1 text-xl font-bold text-white">Help Turion Reach $200,000</h3>
      <p className="mt-1.5 text-sm text-zinc-400">
        Send your donation, then submit your wallet to receive TRN token rewards.
      </p>

      {/* Network selector */}
      <div className="mt-5 flex gap-2">
        {(["BTC", "SOL", "ETH"] as Net[]).map((n) => (
          <button
            key={n}
            onClick={() => setNet(n)}
            className={`flex-1 rounded-lg border py-2.5 font-mono text-sm font-bold tracking-wider transition ${
              net === n
                ? netConfig[n].active
                : "border-white/[0.08] text-zinc-600 hover:border-white/15 hover:text-zinc-400"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Donation address */}
      <div className={`mt-4 rounded-xl border bg-black/50 p-4 ${cfg.border}`}>
        <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
          Donation Address ({net})
        </p>
        <p className={`mt-2 break-all font-mono text-sm ${cfg.text}`}>{DONATION[net]}</p>
        <button
          onClick={() => copy(DONATION[net])}
          className={`mt-3 rounded-lg border px-3 py-1.5 font-mono text-xs transition hover:bg-white/[0.04] ${cfg.border} ${cfg.text}`}
        >
          Copy Address
        </button>
      </div>

      {/* Form */}
      <div className="mt-5 space-y-3">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
            Your wallet — to receive TRN
          </label>
          <input
            value={form.wallet}
            onChange={(e) => setForm({ ...form, wallet: e.target.value })}
            placeholder="0x... or bc1... or Sol..."
            className={inputClass}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              Amount ({net})
            </label>
            <input
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              placeholder="0.25"
              className={inputClass}
            />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              Email (optional)
            </label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              className="mt-1.5 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-700 focus:border-cyan-500/40 focus:outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
            Transaction Hash (recommended)
          </label>
          <input
            value={form.txHash}
            onChange={(e) => setForm({ ...form, txHash: e.target.value })}
            placeholder="0xabc123..."
            className={inputClass}
          />
        </div>
      </div>

      <button
        onClick={submit}
        disabled={loading}
        className="mt-5 w-full rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 py-3 font-bold text-black transition hover:brightness-110 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] disabled:opacity-50"
      >
        {loading ? "Saving…" : "I Donated — Register My Contribution"}
      </button>

      {msg && (
        <p className="mt-3 text-center font-mono text-xs text-cyan-300">{msg}</p>
      )}
    </div>
  );
}
