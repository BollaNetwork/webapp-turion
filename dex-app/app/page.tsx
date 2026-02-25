"use client";

import { useMemo, useState } from "react";

const TOKENS = ["TRN", "USDT", "USDC", "ETH"];

export default function Page() {
  const [wallet, setWallet] = useState<string>("");
  const [tokenIn, setTokenIn] = useState("TRN");
  const [tokenOut, setTokenOut] = useState("USDT");
  const [amountIn, setAmountIn] = useState("100");
  const [slippage, setSlippage] = useState("0.5");
  const [msg, setMsg] = useState("");

  const amountOut = useMemo(() => {
    const n = Number(amountIn || 0);
    if (!Number.isFinite(n)) return "0.00";
    return (n * 0.98).toFixed(2);
  }, [amountIn]);

  const connect = async () => {
    const w = window as any;
    const provider = w.ethereum?.providers?.find((p: any) => p?.isMetaMask) || w.ethereum;
    if (!provider) return setMsg("MetaMask não encontrada");
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    setWallet(accounts?.[0] || "");
    setMsg("Carteira conectada");
  };

  const addNetwork = async () => {
    const w = window as any;
    const provider = w.ethereum?.providers?.find((p: any) => p?.isMetaMask) || w.ethereum;
    if (!provider) return setMsg("MetaMask não encontrada");
    try {
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x337b2" }] });
      setMsg("TRN Chain selecionada");
      return;
    } catch (e: any) {
      if (e?.code !== 4902) return setMsg("Erro ao trocar rede");
    }
    await provider.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: "0x337b2",
        chainName: "TRN Chain",
        nativeCurrency: { name: "Turion", symbol: "TRN", decimals: 18 },
        rpcUrls: ["https://node1.turion.network/rpc"],
      }],
    });
    setMsg("Rede adicionada");
  };

  return (
    <main style={{ minHeight: "100vh", background: "radial-gradient(1000px 600px at 20% 0%, #3b0764 0%, #09090b 55%)", color: "#fff", padding: 24 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700 }}>TRN DEX</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={addNetwork} style={btnGhost}>Add TRN Chain</button>
            <button onClick={connect} style={btnPrimary}>{wallet ? wallet.slice(0, 6) + "..." + wallet.slice(-4) : "Connect Wallet"}</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
          <div style={card}>
            <h2 style={{ marginBottom: 12 }}>Swap</h2>
            <div style={row}>
              <input value={amountIn} onChange={(e) => setAmountIn(e.target.value)} placeholder="0.00" style={input} />
              <select value={tokenIn} onChange={(e) => setTokenIn(e.target.value)} style={select}>{TOKENS.map(t => <option key={t}>{t}</option>)}</select>
            </div>
            <div style={{ textAlign: "center", margin: "10px 0", opacity: 0.7 }}>↓</div>
            <div style={row}>
              <input value={amountOut} readOnly style={input} />
              <select value={tokenOut} onChange={(e) => setTokenOut(e.target.value)} style={select}>{TOKENS.map(t => <option key={t}>{t}</option>)}</select>
            </div>

            <div style={{ marginTop: 14, fontSize: 14, opacity: 0.85 }}>
              <div>Slippage: {slippage}%</div>
              <input type="range" min="0.1" max="5" step="0.1" value={slippage} onChange={(e)=>setSlippage(e.target.value)} style={{ width: "100%" }} />
              <div style={{ marginTop: 8 }}>Price impact (mock): 0.32%</div>
            </div>

            <button style={{ ...btnPrimary, width: "100%", marginTop: 16 }}>Preview Swap</button>
          </div>
        </div>

        {msg && <p style={{ marginTop: 14, color: "#c4b5fd" }}>{msg}</p>}
      </div>
    </main>
  );
}

const card: React.CSSProperties = {
  background: "rgba(24,24,27,0.82)",
  border: "1px solid rgba(168,85,247,0.35)",
  borderRadius: 20,
  padding: 20,
  maxWidth: 520,
  margin: "0 auto",
  boxShadow: "0 0 40px rgba(168,85,247,0.18)",
};
const row: React.CSSProperties = { display: "flex", gap: 10, alignItems: "center" };
const input: React.CSSProperties = { flex: 1, background: "#09090b", border: "1px solid #3f3f46", color: "#fff", borderRadius: 12, padding: "12px 14px" };
const select: React.CSSProperties = { background: "#111827", color: "#fff", border: "1px solid #3f3f46", borderRadius: 12, padding: "12px" };
const btnPrimary: React.CSSProperties = { background: "linear-gradient(90deg,#a855f7,#22d3ee)", color: "#000", border: 0, borderRadius: 12, padding: "10px 14px", fontWeight: 700, cursor: "pointer" };
const btnGhost: React.CSSProperties = { background: "transparent", color: "#ddd6fe", border: "1px solid rgba(196,181,253,.35)", borderRadius: 12, padding: "10px 14px", fontWeight: 600, cursor: "pointer" };
