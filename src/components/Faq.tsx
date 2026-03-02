"use client";

import { useState } from "react";

const items = [
  [
    "What is Turion?",
    "Turion is an AI-focused blockchain network built for fast execution and community-first governance. It runs a full EVM stack with chain ID 210866 and supports all standard Ethereum tooling.",
  ],
  [
    "Is Turion live?",
    "Yes. The network is online with chain ID 210866 and public RPC accessible at node1.turion.network/rpc over HTTPS. You can add it to MetaMask instantly from this page.",
  ],
  [
    "How do I support?",
    "Join the community, contribute to the fundraising round, or reach out for strategic partnerships. All supporters who contribute are eligible for TRN token rewards distributed publicly.",
  ],
  [
    "Is there guaranteed profit?",
    "No. Crypto assets carry inherent risk and market volatility. Support Turion responsibly and only with funds you can afford to risk. This is not financial advice.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div
          key={it[0]}
          className={`overflow-hidden rounded-xl border transition ${
            open === i
              ? "border-cyan-500/25 bg-cyan-500/[0.03]"
              : "border-white/[0.06] bg-white/[0.015] hover:border-white/[0.10]"
          }`}
        >
          <button
            className="flex w-full items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className={`font-medium transition ${open === i ? "text-white" : "text-zinc-300"}`}>
              {it[0]}
            </span>
            <span
              className={`ml-4 flex-shrink-0 font-mono text-lg leading-none transition ${
                open === i ? "text-cyan-400" : "text-zinc-600"
              }`}
            >
              {open === i ? "−" : "+"}
            </span>
          </button>

          {open === i && (
            <p className="border-t border-white/[0.04] px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-400">
              {it[1]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
