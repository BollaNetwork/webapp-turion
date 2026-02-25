"use client";

import { useState } from "react";

const DONATION = {
  BTC: "bc1qREPLACE_WITH_YOUR_BTC_ADDRESS",
  SOL: "REPLACE_WITH_YOUR_SOLANA_ADDRESS",
  ETH: "0x62018812b89511be4933458379fa9ea344692f60",
} as const;

type Net = keyof typeof DONATION;

export default function FundraisingFlow() {
  const [net, setNet] = useState<Net>("ETH");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    amount: "",
    wallet: "",
    txHash: "",
  });

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setMsg("Address copied");
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
      setMsg("Saved. We will send TRN after verification.");
      setForm({ email: "", amount: "", wallet: "", txHash: "" });
    } catch (e: any) {
      setMsg(e.message || "Error saving");
    } finally {
      setLoading(false);
      setTimeout(() => setMsg(""), 2500);
    }
  };

  return (
    <div className="rounded-3xl border border-yellow-300/30 bg-black/50 p-6 backdrop-blur-xl">
      <h3 className="text-2xl font-semibold text-yellow-300">Fundraising — Help Turion Reach $200k</h3>
      <p className="mt-2 text-zinc-300">Choose a network, send your donation, then submit your wallet so we can send TRN rewards.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {(["BTC", "SOL", "ETH"] as Net[]).map((n) => (
          <button key={n} onClick={() => setNet(n)} className={`rounded-full px-4 py-2 text-sm font-semibold ${net === n ? "bg-yellow-300 text-black" : "border border-white/20"}`}>
            {n}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-zinc-900/80 p-4">
        <p className="text-xs text-zinc-400">Donation address ({net})</p>
        <p className="mt-1 break-all font-mono text-sm text-cyan-300">{DONATION[net]}</p>
        <button onClick={() => copy(DONATION[net])} className="mt-3 rounded-lg border border-cyan-300/40 px-3 py-1.5 text-sm">Copy Address</button>
      </div>

      <div className="mt-5 space-y-3">
        <div className="grid gap-2">
          <label className="text-xs text-zinc-400">Your wallet address (to receive TRN)</label>
          <input value={form.wallet} onChange={(e) => setForm({ ...form, wallet: e.target.value })} placeholder="0x... / bc1... / Sol..." className="rounded-xl border border-white/15 bg-zinc-950/70 px-3 py-3" />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-xs text-zinc-400">Amount donated ({net})</label>
            <input value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="Ex: 0.25" className="rounded-xl border border-white/15 bg-zinc-950/70 px-3 py-3" />
          </div>
          <div className="grid gap-2">
            <label className="text-xs text-zinc-400">Email (optional)</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="rounded-xl border border-white/15 bg-zinc-950/70 px-3 py-3" />
          </div>
        </div>
      </div>
      <input value={form.txHash} onChange={(e) => setForm({ ...form, txHash: e.target.value })} placeholder="Transaction hash (optional, recommended)" className="mt-3 w-full rounded-xl border border-white/15 bg-zinc-950/70 px-3 py-3" />

      <button onClick={submit} disabled={loading} className="mt-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2 font-semibold text-black disabled:opacity-60">
        {loading ? "Saving..." : "I Donated — Save My Info"}
      </button>
      {msg ? <p className="mt-3 text-sm text-yellow-300">{msg}</p> : null}
    </div>
  );
}
