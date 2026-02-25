import MetaMaskActions from "@/components/MetaMaskActions";
import Faq from "@/components/Faq";
import AnimatedMetrics from "@/components/AnimatedMetrics";
import FundraisingFlow from "@/components/FundraisingFlow";

const roadmap = [
  ["Now", "Public RPC live, secure HTTPS, early community onboarding."],
  ["Next", "Builder program and first AI-native dApps."],
  ["Growth", "Validator expansion and governance rollout."],
  ["Scale", "Ecosystem liquidity and strategic partnerships."],
];

const FUNDING_TARGET_USD = 200000;
const FUNDING_RAISED_USD = 18500; // update this value as donations come in
const FUNDING_WALLET = "0x62018812b89511be4933458379fa9ea344692f60";

export default function Home() {
  const fundingPct = Math.min(100, (FUNDING_RAISED_USD / FUNDING_TARGET_USD) * 100);

  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute top-[32rem] -left-24 h-[30rem] w-[30rem] rounded-full bg-cyan-400/15 blur-[100px]" />
        <div className="absolute top-[70rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-yellow-300/10 blur-[110px]" />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 md:px-8 md:pt-24">
        <p className="fade-in text-center text-xs uppercase tracking-[0.28em] text-cyan-300">Turion Network</p>
        <h1 className="fade-in mx-auto mt-5 max-w-5xl text-center text-4xl font-semibold leading-tight md:text-7xl">
          Crypto infrastructure with
          <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-yellow-300 bg-clip-text text-transparent"> AI-native speed</span>
          , clean UX, and community-first growth.
        </h1>
        <p className="fade-in mx-auto mt-6 max-w-2xl text-center text-base text-zinc-300 md:text-lg">
          Turion is built to launch real products faster, with secure networking and a transparent path for supporters, builders, and long-term ecosystem value.
        </p>

        <div className="fade-in mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="/community" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-[1.02]">Join the Community</a>
          <a href="/support" className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold backdrop-blur transition hover:bg-white/10">Support the Network</a>
          <a href="/docs" className="rounded-full border border-yellow-300/40 px-7 py-3 font-semibold text-yellow-300 transition hover:bg-yellow-300/10">Docs</a>
        </div>

        <div className="fade-in mx-auto mt-10 w-full max-w-5xl rounded-3xl border border-yellow-300/30 bg-black/55 p-6 shadow-[0_0_60px_rgba(250,204,21,0.18)] backdrop-blur">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">Fundraising Progress</p>
              <p className="mt-1 text-3xl font-semibold text-white md:text-4xl">${FUNDING_RAISED_USD.toLocaleString()} <span className="text-zinc-400">/ ${FUNDING_TARGET_USD.toLocaleString()}</span></p>
            </div>
            <p className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-200">{fundingPct.toFixed(1)}% reached</p>
          </div>

          <div className="progress-wrap mt-5 h-6 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
            <div className="progress-fill relative h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-yellow-300" style={{ width: `${fundingPct}%` }}>
              <div className="progress-glow absolute inset-0" />
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-300">Supporters who contribute are eligible for TRN token rewards (distribution policy announced publicly).</p>
          <p className="mt-1 text-xs text-zinc-400">Donation wallet: <span className="font-mono text-zinc-200">{FUNDING_WALLET}</span></p>
        </div>

        <AnimatedMetrics />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8">
        <div className="fade-in space-y-4">
          <h2 className="text-3xl font-semibold md:text-4xl">Designed for modern crypto products</h2>
          <p className="text-zinc-300">
            Turion combines private EVM flexibility, public secure access, and clear operational standards. No hype promises — only measurable delivery.
          </p>
          <ul className="space-y-2 text-zinc-300">
            <li>• Secure-by-default RPC over HTTPS</li>
            <li>• Fast confirmation experience for users</li>
            <li>• Smooth developer onboarding path</li>
            <li>• Structured rollout for fundraising and community</li>
          </ul>

          <div className="rounded-[28px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">Add Turion to MetaMask</h3>
            <p className="mt-2 text-zinc-300">One click to connect. Copy RPC and Chain ID instantly.</p>
            <MetaMaskActions />
          </div>
        </div>

        <div className="fade-in">
          <FundraisingFlow />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <h2 className="fade-in text-3xl font-semibold md:text-4xl">Roadmap</h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {roadmap.map((item) => (
            <div key={item[0]} className="fade-in rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5">
              <p className="text-sm font-semibold text-cyan-300">{item[0]}</p>
              <p className="mt-2 text-zinc-300">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <h2 className="fade-in text-3xl font-semibold md:text-4xl">FAQ</h2>
        <div className="mt-5">
          <Faq />
        </div>
      </section>

      <footer className="mx-auto mb-10 mt-8 max-w-7xl rounded-2xl border border-white/10 bg-black/40 px-5 py-5 text-sm text-zinc-400 md:px-8">
        Risk Disclaimer: Crypto assets are volatile and involve risk. Support Turion responsibly.
      </footer>
    </main>
  );
}
