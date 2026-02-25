import Link from "next/link";

const pillars = [
  {
    title: "1:1 Reserve Model",
    text: "USDnt is designed to be backed with transparent reserve rules, reconciliation, and controlled issuance.",
  },
  {
    title: "Mint & Redeem Flow",
    text: "Mint when verified collateral enters. Redeem with burn + settlement process under policy controls.",
  },
  {
    title: "Risk Controls",
    text: "Operational controls, incident procedures, multi-step approvals, and periodic independent review.",
  },
  {
    title: "Proof of Reserves",
    text: "Public reporting cadence with clear reserve visibility for users, partners, and auditors.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080d] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_20%_0%,rgba(56,189,248,.20),transparent_65%),radial-gradient(900px_500px_at_90%_10%,rgba(168,85,247,.16),transparent_65%)]" />

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pt-24">
        <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-400/10 px-4 py-1 text-xs font-medium tracking-wide text-cyan-200">
          USDnt · Stable Infrastructure by Turion
        </p>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
              A professional stable system for real operations.
            </h1>
            <p className="mt-5 max-w-xl text-base text-zinc-300 md:text-lg">
              USDnt is built to provide stable digital liquidity for payments, treasury movement, and ecosystem activity with clear governance and transparency.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#launch" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Start Mint/Redeem Process
              </a>
              <Link href="/guide" className="rounded-xl border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10">
                Launch Guide
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold">USDnt Overview</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Asset: USDnt</li>
              <li>• Network: TRN Chain</li>
              <li>• Use case: stable settlement + treasury flows</li>
              <li>• Status: architecture and controls in implementation</li>
            </ul>
            <div className="mt-5 rounded-2xl border border-cyan-300/30 bg-cyan-300/5 p-4 text-sm text-cyan-100">
              Goal: trusted stable rails for the Turion ecosystem.
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-cyan-200">{item.title}</h3>
              <p className="mt-2 text-zinc-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="launch" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:px-8">
          <div>
            <h3 className="text-3xl font-semibold">Institutional-ready onboarding</h3>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Use this channel to join the first mint/redeem onboarding wave. The team will validate profile, compliance path, and technical setup.
            </p>
          </div>

          <form className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-5">
            <label className="block text-sm text-zinc-300">
              Full name
              <input className="mt-1 w-full rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
            </label>
            <label className="block text-sm text-zinc-300">
              Business email
              <input type="email" className="mt-1 w-full rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-400" placeholder="name@company.com" />
            </label>
            <label className="block text-sm text-zinc-300">
              Use case
              <input className="mt-1 w-full rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-400" placeholder="Treasury, payments, settlement..." />
            </label>
            <button type="button" className="w-full rounded-lg bg-cyan-400 px-4 py-2.5 font-semibold text-slate-950 hover:bg-cyan-300">
              Request Access
            </button>
            <p className="text-xs text-zinc-500">Production integration can route this form to CRM + compliance queue.</p>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-zinc-400 md:px-8">
        <p>© {new Date().getFullYear()} USDnt by Turion</p>
        <Link href="/guide" className="underline underline-offset-4 hover:text-white">
          Stable launch framework
        </Link>
      </footer>
    </main>
  );
}
