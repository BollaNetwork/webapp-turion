"use client";

import { useState } from "react";

export default function Page() {
  const [wallet, setWallet] = useState("");
  const [msg, setMsg] = useState("");

  const connect = async () => {
    const w = window as any;
    const provider = w.ethereum?.providers?.find((p: any) => p?.isMetaMask) || w.ethereum;
    if (!provider) return setMsg("MetaMask not found");
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    setWallet(accounts?.[0] || "");
    setMsg("Wallet connected");
  };

  const addNetwork = async () => {
    const w = window as any;
    const provider = w.ethereum?.providers?.find((p: any) => p?.isMetaMask) || w.ethereum;
    if (!provider) return setMsg("MetaMask not found");

    try {
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x337b2" }] });
      setMsg("TRN Chain selected");
      return;
    } catch (e: any) {
      if (e?.code !== 4902) return setMsg("Failed to switch network");
    }

    await provider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x337b2",
          chainName: "TRN Chain",
          nativeCurrency: { name: "Turion", symbol: "TRN", decimals: 18 },
          rpcUrls: ["https://node1.turion.network/rpc"],
        },
      ],
    });

    setMsg("TRN Chain added");
  };

  return (
    <main className="min-h-screen bg-[#06060a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_0%,rgba(147,51,234,.22),transparent_65%),radial-gradient(800px_420px_at_100%_20%,rgba(168,85,247,.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Turion Exchange</p>
            <h1 className="mt-2 text-4xl font-semibold md:text-5xl">TRN DEX</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={addNetwork}
              className="rounded-full border border-violet-300/40 bg-violet-300/10 px-4 py-2 text-sm font-semibold text-violet-200 hover:bg-violet-300/20"
            >
              Add TRN Chain
            </button>
            <button
              onClick={connect}
              className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
            >
              {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Connect Wallet"}
            </button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold">TRN Token</h2>
            <p className="mt-2 text-sm text-zinc-300">The DEX currently supports the native TRN asset only.</p>

            <div className="mt-5 rounded-2xl border border-violet-300/25 bg-black/35 p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-400">Asset</p>
              <p className="mt-1 text-2xl font-semibold">TRN</p>
              <p className="mt-1 text-xs text-zinc-400">Network: TRN Chain (210866)</p>
            </div>

            <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold text-white hover:brightness-110">
              Trade TRN (beta)
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="text-xl font-semibold">Status</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Network configured: TRN Chain</li>
              <li>• Chain ID: 210866</li>
              <li>• Native token: TRN</li>
              <li>• Initial support: TRN-only</li>
            </ul>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-zinc-300">
              More pairs and liquidity options will be enabled in upcoming phases.
            </div>
          </div>
        </section>

        {msg ? <p className="mt-5 text-sm text-violet-300">{msg}</p> : null}
      </div>
    </main>
  );
}
