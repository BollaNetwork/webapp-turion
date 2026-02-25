const supportWays = [
  {
    title: "Early Supporter",
    desc: "Join early and help Turion bootstrap liquidity, tooling, and ecosystem operations.",
    cta: "Join Early Supporters",
  },
  {
    title: "Builder Contribution",
    desc: "Contribute as developer, designer, validator operator, or growth collaborator.",
    cta: "Contribute as Builder",
  },
  {
    title: "Strategic Partner",
    desc: "Funds, communities, and products can collaborate directly with the Turion team.",
    cta: "Request Partnership",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#120819] via-[#07080d] to-[#09131a] p-8 md:p-12">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Support Turion</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Help build the next AI-native crypto ecosystem.
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300 md:text-lg">
          Your support accelerates infrastructure, developer grants, security hardening, and ecosystem expansion.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {supportWays.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-zinc-300">{s.desc}</p>
            <button className="mt-5 rounded-full border border-yellow-300/40 px-4 py-2 text-sm font-semibold text-yellow-300 hover:bg-yellow-300/10">
              {s.cta}
            </button>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
        <h3 className="text-2xl font-semibold">Partnership / Investor Contact</h3>
        <p className="mt-2 text-zinc-300">Send your details and our team will respond quickly.</p>

        <form className="mt-5 grid gap-3">
          <div className="grid gap-3 md:grid-cols-2">
            <input placeholder="Your name" className="rounded-xl border border-white/15 bg-black/40 px-3 py-3" />
            <input placeholder="Email" className="rounded-xl border border-white/15 bg-black/40 px-3 py-3" />
          </div>
          <textarea placeholder="How would you like to support Turion?" rows={5} className="rounded-xl border border-white/15 bg-black/40 px-3 py-3" />
          <button type="button" className="w-fit rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-2.5 font-semibold text-black">
            Send Request
          </button>
        </form>
      </section>

      <section className="mt-8 rounded-2xl border border-yellow-300/25 bg-yellow-300/5 p-5 text-sm text-zinc-300">
        <p>
          <span className="font-semibold text-yellow-300">Risk notice:</span> crypto markets are volatile. Support decisions should be made responsibly.
        </p>
      </section>
    </main>
  );
}
