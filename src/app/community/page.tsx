const channels = [
  {
    name: "Telegram",
    desc: "Daily updates, announcements, and open community chat.",
    cta: "Join Telegram",
    href: "#",
  },
  {
    name: "Discord",
    desc: "Builders, contributors, and ecosystem working groups.",
    cta: "Join Discord",
    href: "#",
  },
  {
    name: "X / Twitter",
    desc: "Product updates, milestones, and fundraising transparency posts.",
    cta: "Follow Turion",
    href: "#",
  },
];

const roles = [
  ["Builders", "Ship apps, tools, SDKs, and integrations on Turion."],
  ["Validators", "Help secure the network as Turion grows validator capacity."],
  ["Ambassadors", "Expand the community and onboard new supporters globally."],
  ["Researchers", "Improve protocol quality, docs, and token utility design."],
];

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#10061d] via-[#07080d] to-[#06121b] p-8 md:p-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Turion Community</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Build together. Fund together. Grow the Turion ecosystem together.
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300 md:text-lg">
          Turion is community-first by design. We reward real contribution, transparent support, and long-term participation.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#channels" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-black">Join Channels</a>
          <a href="/support" className="rounded-full border border-yellow-300/40 px-6 py-3 font-semibold text-yellow-300 hover:bg-yellow-300/10">Support Fundraising</a>
        </div>
      </section>

      <section id="channels" className="mt-8 grid gap-4 md:grid-cols-3">
        {channels.map((c) => (
          <div key={c.name} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur">
            <p className="text-lg font-semibold">{c.name}</p>
            <p className="mt-2 text-zinc-300">{c.desc}</p>
            <a href={c.href} className="mt-5 inline-block rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">
              {c.cta}
            </a>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
        <h2 className="text-2xl font-semibold">How to contribute</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {roles.map((r) => (
            <div key={r[0]} className="rounded-xl border border-fuchsia-500/20 bg-black/25 p-4">
              <p className="font-semibold text-cyan-300">{r[0]}</p>
              <p className="mt-1 text-zinc-300">{r[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-yellow-300/30 bg-yellow-300/5 p-6">
        <h3 className="text-2xl font-semibold text-yellow-300">Community Manifesto</h3>
        <p className="mt-3 max-w-4xl text-zinc-300">
          Turion exists to turn collective effort into real infrastructure. We prioritize clarity over hype, contribution over noise, and long-term utility over short-term speculation.
        </p>
      </section>
    </main>
  );
}
