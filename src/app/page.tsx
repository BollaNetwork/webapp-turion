import MetaMaskActions from "@/components/MetaMaskActions";
import Faq from "@/components/Faq";
import AnimatedMetrics from "@/components/AnimatedMetrics";
import FundraisingFlow from "@/components/FundraisingFlow";

const roadmap = [
  {
    phase: "01",
    label: "Now",
    title: "Foundation",
    desc: "Public RPC live, secure HTTPS, early community onboarding.",
    status: "active",
  },
  {
    phase: "02",
    label: "Next",
    title: "Builder Program",
    desc: "Builder program and first AI-native dApps.",
    status: "upcoming",
  },
  {
    phase: "03",
    label: "Growth",
    title: "Validator Expansion",
    desc: "Validator expansion and governance rollout.",
    status: "upcoming",
  },
  {
    phase: "04",
    label: "Scale",
    title: "Ecosystem",
    desc: "Ecosystem liquidity and strategic partnerships.",
    status: "upcoming",
  },
];

const features = [
  { icon: "⬡", label: "Secure RPC", desc: "HTTPS-only endpoints with enterprise-grade security standards." },
  { icon: "⚡", label: "Fast Finality", desc: "~2 second block time for instant, responsive user experiences." },
  { icon: "🧩", label: "EVM Compatible", desc: "Full Ethereum tooling compatibility — deploy without changes." },
  { icon: "🤖", label: "AI-Native", desc: "Optimized for AI agents, automation, and intelligent dApps." },
];

const rpcInfo = [
  { label: "RPC URL", value: "https://node1.turion.network/rpc", mono: true },
  { label: "Chain ID", value: "210866  (0x337b2)", mono: true },
  { label: "Currency", value: "TUR  —  18 decimals", mono: true },
  { label: "Network", value: "Turion Mainnet", mono: false },
];

const FUNDING_TARGET_USD = 200000;
const FUNDING_RAISED_USD = 18500;
const FUNDING_WALLET = "0x62018812b89511be4933458379fa9ea344692f60";

export default function Home() {
  const fundingPct = Math.min(100, (FUNDING_RAISED_USD / FUNDING_TARGET_USD) * 100);

  return (
    <main className="relative overflow-x-hidden">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[55rem] w-[55rem] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[160px]" />
        <div className="absolute top-[35rem] -left-40 h-[40rem] w-[40rem] rounded-full bg-purple-600/8 blur-[130px]" />
        <div className="absolute top-[70rem] right-[-12rem] h-[35rem] w-[35rem] rounded-full bg-yellow-400/6 blur-[120px]" />
      </div>

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pt-28">
        {/* Badge */}
        <div className="fade-in flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.08] px-4 py-1.5 font-mono text-[11px] text-cyan-300">
            <span className="text-green-400">◉</span>
            TURION MAINNET — CHAIN ID 210866
          </div>
        </div>

        <h1 className="fade-in mx-auto mt-6 max-w-5xl text-center text-4xl font-bold leading-[1.1] tracking-tight md:text-[72px]">
          The AI‑Native
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            Blockchain Network
          </span>
          Built for Speed.
        </h1>

        <p className="fade-in mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-zinc-400 md:text-lg">
          Turion delivers EVM-compatible infrastructure with AI-optimized throughput,
          community-first governance, and transparent fundraising for long-term ecosystem growth.
        </p>

        {/* CTAs */}
        <div className="fade-in mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/community"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-7 py-3 font-bold text-black transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(0,212,255,0.4)]"
          >
            Join the Community
          </a>
          <a
            href="/support"
            className="rounded-xl border border-yellow-400/35 bg-yellow-400/[0.06] px-7 py-3 font-semibold text-yellow-300 transition hover:bg-yellow-400/[0.12] hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]"
          >
            Support the Network
          </a>
          <a
            href="/docs"
            className="rounded-xl border border-white/12 bg-white/[0.03] px-7 py-3 font-semibold text-zinc-300 transition hover:bg-white/[0.07]"
          >
            Read Docs →
          </a>
        </div>

        {/* Fundraising Card */}
        <div className="fade-in mx-auto mt-14 w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-yellow-400/18 bg-black/60 p-6 backdrop-blur-xl shadow-[0_0_80px_rgba(251,191,36,0.06)]">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-yellow-400/70">Fundraising Round</p>
                <p className="mt-1.5 text-3xl font-bold text-white md:text-4xl">
                  ${FUNDING_RAISED_USD.toLocaleString()}
                  <span className="ml-2 text-lg font-normal text-zinc-500">/ ${FUNDING_TARGET_USD.toLocaleString()}</span>
                </p>
              </div>
              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/[0.08] px-5 py-3 text-center">
                <p className="text-2xl font-bold text-yellow-300">{fundingPct.toFixed(1)}%</p>
                <p className="font-mono text-[10px] text-yellow-400/60">COMPLETED</p>
              </div>
            </div>

            <div className="progress-wrap mt-5 h-2.5 overflow-hidden rounded-full bg-white/[0.05] ring-1 ring-white/[0.08]">
              <div
                className="progress-fill relative h-full rounded-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300"
                style={{ width: `${fundingPct}%` }}
              >
                <div className="progress-glow absolute inset-0" />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-zinc-400">Supporters eligible for TRN token rewards. Distribution policy announced publicly.</p>
              <p className="font-mono text-[11px] text-zinc-500">
                <span className="text-zinc-400">Wallet: </span>
                {FUNDING_WALLET.slice(0, 6)}…{FUNDING_WALLET.slice(-4)}
              </p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <AnimatedMetrics />
      </section>

      {/* ── FEATURES ── */}
      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-cyan-500/25 hover:bg-cyan-500/[0.03]"
            >
              <span className="text-2xl">{f.icon}</span>
              <p className="mt-3 font-semibold text-white">{f.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONNECT + FUNDRAISING ── */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-2 md:px-8">
        {/* Left: connect */}
        <div className="fade-in space-y-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400/60">Developer Access</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Connect in Seconds</h2>
            <p className="mt-3 text-zinc-400">
              Turion runs a full EVM stack with public HTTPS RPC. Add to MetaMask with one click
              or paste the endpoint directly into your dApp.
            </p>
          </div>

          {/* RPC info table */}
          <div className="space-y-1.5">
            {rpcInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-lg border border-white/[0.05] bg-black/40 px-4 py-2.5"
              >
                <span className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                  {item.label}
                </span>
                <span className={`text-sm text-zinc-300 break-all ${item.mono ? "font-mono" : ""}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* MetaMask card */}
          <div className="rounded-2xl border border-white/[0.06] bg-black/40 p-5 backdrop-blur">
            <h3 className="font-semibold text-white">Add Turion to MetaMask</h3>
            <p className="mt-1 text-sm text-zinc-500">One click to add the network to your wallet.</p>
            <MetaMaskActions />
          </div>
        </div>

        {/* Right: fundraising form */}
        <div className="fade-in">
          <FundraisingFlow />
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400/60">Development Path</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Roadmap</h2>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {roadmap.map((item, i) => (
              <div
                key={item.phase}
                className={`fade-in relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-xs font-bold ${
                      item.status === "active"
                        ? "border-cyan-400 bg-cyan-400/15 text-cyan-300"
                        : "border-white/15 bg-black/60 text-zinc-600"
                    }`}
                  >
                    {item.phase}
                  </div>
                  {item.status === "active" && (
                    <div className="absolute -inset-1.5 rounded-full bg-cyan-400/15 blur-md" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 md:w-[calc(50%-3rem)] md:flex-none ${
                    i % 2 === 0 ? "md:pr-14" : "md:pl-14 md:ml-auto"
                  }`}
                >
                  <div
                    className={`rounded-xl border p-4 transition ${
                      item.status === "active"
                        ? "border-cyan-500/25 bg-cyan-500/[0.04]"
                        : "border-white/[0.06] bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">{item.label}</p>
                      {item.status === "active" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2 py-0.5 font-mono text-[10px] text-green-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-4xl px-5 py-14 md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400/60">Got Questions?</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">FAQ</h2>
        <div className="mt-7">
          <Faq />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mx-auto mb-10 max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.05] bg-black/40 px-6 py-5">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="live-dot" />
              <span className="font-mono text-xs text-zinc-400">Turion Network — All systems operational</span>
            </div>
            <p className="text-xs text-zinc-600">
              ⚠ Crypto assets are volatile. Support Turion responsibly.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
