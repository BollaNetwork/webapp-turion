"use client";

import { useState } from "react";

export default function MetaMaskActions() {
  const [msg, setMsg] = useState("");

  const copy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setMsg(`${label} copied`);
    setTimeout(() => setMsg(""), 2000);
  };

  const add = async () => {
    const w = window as any;
    const provider = w.ethereum?.providers?.find((p: any) => p?.isMetaMask) || w.ethereum;
    if (!provider || !provider.request) {
      alert("MetaMask not found. Please install MetaMask and try again.");
      return;
    }

    const params = {
      chainId: "0x337b2",
      chainName: "Rede Turion",
      nativeCurrency: { name: "Turion", symbol: "TUR", decimals: 18 },
      rpcUrls: ["https://node1.turion.network/rpc"],
    };

    try {
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x337b2" }] });
      setMsg("Turion selected in MetaMask ✓");
      setTimeout(() => setMsg(""), 2500);
      return;
    } catch (switchErr: any) {
      if (switchErr?.code !== 4902) {
        setMsg(switchErr?.code === 4001 ? "Cancelled" : `Error (${switchErr?.code ?? "unknown"})`);
        setTimeout(() => setMsg(""), 3000);
        return;
      }
    }

    try {
      await provider.request({ method: "wallet_addEthereumChain", params: [params] });
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x337b2" }] });
      setMsg("Turion added to MetaMask ✓");
      setTimeout(() => setMsg(""), 2500);
    } catch (e: any) {
      setMsg(e?.code === 4001 ? "Cancelled" : `Error (${e?.code ?? "unknown"})`);
      setTimeout(() => setMsg(""), 3000);
    }
  };

  return (
    <div className="mt-4 space-y-2.5">
      {/* MetaMask button */}
      <button
        onClick={add}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f6851b] px-4 py-3 font-bold text-white transition hover:bg-[#e07318] hover:shadow-[0_0_25px_rgba(246,133,27,0.35)]"
      >
        <span>🦊</span> Add Turion to MetaMask
      </button>

      {/* Copy buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => copy("https://node1.turion.network/rpc", "RPC URL")}
          className="rounded-xl border border-cyan-500/25 bg-cyan-500/[0.05] px-3 py-2 font-mono text-xs text-cyan-400 transition hover:border-cyan-500/50 hover:bg-cyan-500/[0.10]"
        >
          Copy RPC URL
        </button>
        <button
          onClick={() => copy("210866", "Chain ID")}
          className="rounded-xl border border-cyan-500/25 bg-cyan-500/[0.05] px-3 py-2 font-mono text-xs text-cyan-400 transition hover:border-cyan-500/50 hover:bg-cyan-500/[0.10]"
        >
          Copy Chain ID
        </button>
      </div>

      {msg && <p className="text-center font-mono text-xs text-green-400">{msg}</p>}
    </div>
  );
}
