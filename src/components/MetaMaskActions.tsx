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
      // 1) Try switch first (if network already exists)
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x337b2" }] });
      setMsg("Turion selected in MetaMask");
      setTimeout(() => setMsg(""), 2500);
      return;
    } catch (switchErr: any) {
      // 4902 = unknown chain, then add it
      if (switchErr?.code !== 4902) {
        if (switchErr?.code === 4001) {
          setMsg("Request canceled in MetaMask");
        } else {
          setMsg(`MetaMask switch error (${switchErr?.code ?? "unknown"})`);
        }
        setTimeout(() => setMsg(""), 3000);
        return;
      }
    }

    try {
      await provider.request({ method: "wallet_addEthereumChain", params: [params] });
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x337b2" }] });
      setMsg("Turion added and selected in MetaMask");
      setTimeout(() => setMsg(""), 2500);
    } catch (e: any) {
      if (e?.code === 4001) {
        setMsg("Request canceled in MetaMask");
      } else {
        setMsg(`MetaMask add error (${e?.code ?? "unknown"})`);
      }
      setTimeout(() => setMsg(""), 3000);
    }
  };

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <button onClick={add} className="rounded-xl bg-yellow-300 px-4 py-2 font-semibold text-black hover:brightness-95">
        Add Turion Network to MetaMask
      </button>
      <button onClick={() => copy("https://node1.turion.network/rpc", "RPC URL")} className="rounded-xl border border-purple-400 px-4 py-2 hover:bg-purple-500/20">
        Copy RPC
      </button>
      <button onClick={() => copy("210866", "Chain ID")} className="rounded-xl border border-purple-400 px-4 py-2 hover:bg-purple-500/20">
        Copy Chain ID
      </button>
      {msg ? <span className="text-sm text-yellow-300">{msg}</span> : null}
    </div>
  );
}
