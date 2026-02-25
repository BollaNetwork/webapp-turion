import Link from "next/link";

const sections = [
  {
    title: "What is Stable Turion",
    text: "Stable Turion is a digital currency designed to maintain stable value, with a focus on security, transparency, and daily usability. The goal is simple: reduce volatility to support payments, treasury management, and business operations.",
  },
  {
    title: "How it works (simple)",
    text: "Each issued unit must have clear and verifiable backing. When valid reserves enter, stable tokens are minted. When stable tokens are redeemed, they are burned. This keeps supply and reserves aligned.",
  },
  {
    title: "Reserves and transparency",
    text: "We publish custody rules, periodic reports, and audit trails. The commitment is to let anyone verify whether reserves exist and how they are managed.",
  },
  {
    title: "Roadmap",
    text: "Phase 1: legal and operational structure. Phase 2: controlled pilot issuance. Phase 3: partner and payment integrations. Phase 4: scale with mature governance and continuous audits.",
  },
  {
    title: "Risk and compliance",
    text: "Every stablecoin carries risk: regulatory, operational, counterparty, and technical. Our plan includes compliance from day one, risk policies, role segregation, and independent external review.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
          Stable Turion · Transparency First
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Stablecoin infrastructure focused on trust, clarity, and responsible execution.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          A professional foundation to launch and operate a stablecoin with governance, proof of reserves, and simple communication anyone can understand.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#interest"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Join Interest List
          </a>
          <Link
            href="/guide"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-slate-500"
          >
            View Launch Guide
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-16 md:grid-cols-2">
        {sections.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-cyan-200">{item.title}</h2>
            <p className="mt-3 text-slate-300">{item.text}</p>
          </article>
        ))}
      </section>

      <section id="interest" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-3xl font-bold">Interest List</h3>
            <p className="mt-3 max-w-2xl text-slate-300">
              Want updates about launch, reserve policy, integrations, and pilot access? Leave your contact details.
            </p>
          </div>

          <form className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <label className="block text-sm text-slate-300">
              Name
              <input className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-400 placeholder:text-slate-500 focus:ring-2" placeholder="Your name" />
            </label>
            <label className="block text-sm text-slate-300">
              Email
              <input type="email" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-400 placeholder:text-slate-500 focus:ring-2" placeholder="you@company.com" />
            </label>
            <button type="button" className="w-full rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Send Updates
            </button>
            <p className="text-xs text-slate-500">In production, this form can connect to CRM and email automation.</p>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Stable Turion</p>
        <Link className="underline underline-offset-4 hover:text-slate-200" href="/guide">
          Guide: how to launch a stablecoin correctly
        </Link>
      </footer>
    </main>
  );
}
