const network = {
  name: "TurionChain",
  displayName: "Rede Turion",
  chainId: 210866,
  chainIdHex: "0x337b2",
  currencySymbol: "TUR",
  rpc: "https://node1.turion.network/rpc",
  ws: "wss://node1.turion.network/ws",
  consensus: "IBFT (Proof of Authority)",
  blockTime: "~2s",
  explorer: "Coming soon",
};

export default function DocsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:px-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b0818] via-[#06060a] to-[#07101a] p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Documentation</p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Turion Blockchain Docs</h1>
        <p className="mt-3 max-w-3xl text-zinc-300">
          Official network configuration for developers, wallets, and infrastructure integrations.
        </p>
      </section>

      <section className="mt-7 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
          <h2 className="text-xl font-semibold">Network Details</h2>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li><span className="text-zinc-400">Chain Name:</span> {network.name}</li>
            <li><span className="text-zinc-400">Display Name:</span> {network.displayName}</li>
            <li><span className="text-zinc-400">Chain ID:</span> {network.chainId} ({network.chainIdHex})</li>
            <li><span className="text-zinc-400">Currency Symbol:</span> {network.currencySymbol}</li>
            <li><span className="text-zinc-400">Consensus:</span> {network.consensus}</li>
            <li><span className="text-zinc-400">Block Time:</span> {network.blockTime}</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
          <h2 className="text-xl font-semibold">Endpoints</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">
              <p className="text-zinc-400">RPC</p>
              <p className="break-all font-mono text-cyan-300">{network.rpc}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">
              <p className="text-zinc-400">WebSocket</p>
              <p className="break-all font-mono text-cyan-300">{network.ws}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">
              <p className="text-zinc-400">Explorer</p>
              <p className="font-mono text-yellow-300">{network.explorer}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-7 rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
        <h2 className="text-xl font-semibold">Add Turion to MetaMask (Manual)</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
          <li>Open MetaMask and go to <span className="text-white">Add custom network</span>.</li>
          <li>Network Name: <span className="font-mono text-cyan-300">{network.displayName}</span></li>
          <li>RPC URL: <span className="font-mono text-cyan-300">{network.rpc}</span></li>
          <li>Chain ID: <span className="font-mono text-cyan-300">{network.chainId}</span></li>
          <li>Currency Symbol: <span className="font-mono text-cyan-300">{network.currencySymbol}</span></li>
          <li>Save and switch to the Turion network.</li>
        </ol>
      </section>

      <section className="mt-7 rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-5">
        <h3 className="font-semibold text-yellow-300">Security Note</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Always verify the domain <span className="font-mono text-white">node1.turion.network</span> before sending transactions or connecting wallets.
        </p>
      </section>
    </main>
  );
}
