import Link from "next/link";

const blocks = [
  {
    title: "1) Define issuance policy",
    text: "Set clear conditions for mint and burn with role-based approvals and full traceability.",
  },
  {
    title: "2) Reserve operations",
    text: "Keep reserve segregation, reconciliation cadence, and custody limits documented and auditable.",
  },
  {
    title: "3) Compliance controls",
    text: "Implement onboarding checks, sanctions screening, and incident playbooks before broad access.",
  },
  {
    title: "4) Transparency layer",
    text: "Publish reserve evidence and policy updates on a predictable schedule in plain language.",
  },
  {
    title: "5) Security and governance",
    text: "Use multi-approval operational paths, key management policy, and periodic external review.",
  },
  {
    title: "6) Rollout strategy",
    text: "Start with controlled pilot cohorts, monitor, iterate, and then scale distribution.",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#07080d] px-5 py-14 text-white md:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-cyan-300 underline underline-offset-4">← Back to USDnt</Link>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">USDnt Launch Framework</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          A practical blueprint to launch USDnt responsibly with stable operations, reserve clarity, and long-term trust.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <section key={block.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-cyan-200">{block.title}</h2>
              <p className="mt-2 text-zinc-300">{block.text}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
          <h2 className="text-xl font-semibold text-amber-200">Important</h2>
          <p className="mt-2 text-amber-100/90">
            Stablecoin success is not only code. It depends on operations, legal structure, reserve discipline, and transparent communication.
          </p>
        </section>
      </div>
    </main>
  );
}
