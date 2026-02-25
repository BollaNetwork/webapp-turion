"use client";

import { useState } from "react";

const items = [
  ["What is Turion?", "Turion is an AI-focused blockchain network built for fast execution and community-first governance."],
  ["Is Turion live?", "Yes. The network is online with chain ID 210866 and public RPC over HTTPS."],
  ["How do I support?", "Join the community, subscribe as early supporter, or contact us for strategic partnerships."],
  ["Is there guaranteed profit?", "No. Crypto assets carry risk and market volatility. Support should be done responsibly."],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={it[0]} className="rounded-xl border border-white/10 bg-zinc-900/70">
          <button className="flex w-full items-center justify-between px-4 py-3 text-left" onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-medium">{it[0]}</span>
            <span className="text-yellow-300">{open === i ? "−" : "+"}</span>
          </button>
          {open === i ? <p className="px-4 pb-4 text-zinc-300">{it[1]}</p> : null}
        </div>
      ))}
    </div>
  );
}
