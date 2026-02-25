import Link from "next/link";

const blocks = [
  {
    title: "1) Define your stablecoin model",
    text: "Choose clearly: fiat-backed, crypto-backed, or hybrid. For public users and companies, a model backed by liquid and auditable reserves is usually easier to explain and supervise.",
  },
  {
    title: "2) Reserve management and custody",
    text: "Reserves must be segregated with daily reconciliation policies. Avoid concentration in a single counterparty. Define risk limits and contingency plans for extreme events.",
  },
  {
    title: "3) Mint and burn policy",
    text: "Set objective rules: when valid reserve enters, mint; when redemption is confirmed, burn. This prevents unbacked issuance and reduces solvency concerns.",
  },
  {
    title: "4) Governance",
    text: "Governance must assign clear responsibilities: who approves critical changes, how incidents are handled, and how accountability to the market is maintained.",
  },
  {
    title: "5) Audit and controls",
    text: "Periodic external audits, internal controls, and approval trails are essential. Technology and operational security must be continuously tested and monitored.",
  },
  {
    title: "6) Proof of reserves",
    text: "Publish frequent, understandable evidence. The best approach combines financial reports, independent verification, and on-chain data for third-party validation.",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-14 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-cyan-300 underline underline-offset-4">← Back to landing</Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Practical Guide: Launching a Stablecoin Correctly</h1>
        <p className="mt-4 text-lg text-slate-300">This guide summarizes what matters most for a serious operation: clear model, reliable reserves, responsible governance, and ongoing transparency.</p>

        <div className="mt-10 space-y-4">
          {blocks.map((block) => (
            <section key={block.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-cyan-200">{block.title}</h2>
              <p className="mt-2 text-slate-300">{block.text}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
          <h2 className="text-xl font-semibold text-amber-200">Important Note</h2>
          <p className="mt-2 text-amber-100/90">
            A stablecoin is not only technology. It is also financial risk, regulation, and user responsibility.
            Before launch, validate legal structure and compliance requirements with qualified specialists.
          </p>
        </section>
      </div>
    </main>
  );
}
