import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Turion Network — AI-Native Blockchain",
  description:
    "Turion is the AI-focused network built to power next-generation applications with speed, sovereignty, and community-first governance.",
};

const navLinks = [
  ["Home", "/"],
  ["Docs", "/docs"],
  ["Community", "/community"],
  ["Support", "/support"],
];

const tickerItems = Array.from({ length: 6 }, () => [
  "CHAIN ID: 210866",
  "●",
  "RPC: HTTPS ACTIVE",
  "●",
  "BLOCK TIME: ~2s",
  "●",
  "STATUS: OPERATIONAL",
  "●",
]).flat();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrains.variable} bg-[#020509] text-white antialiased`}>
        {/* Network status ticker */}
        <div className="overflow-hidden border-b border-cyan-500/10 bg-black/60 py-1.5">
          <div className="flex hash-ticker w-max gap-8 px-4 font-mono text-[10px] text-cyan-400/50">
            {tickerItems.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-black/75 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-cyan-400/20 blur-md opacity-0 transition group-hover:opacity-100" />
                <Image src="/trn-icon.svg" alt="TRN" width={28} height={28} className="relative" />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="font-bold tracking-widest text-white text-[13px]">TURION</span>
                <span className="font-bold tracking-widest text-cyan-400 text-[13px]"> NETWORK</span>
              </div>
            </Link>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2.5">
              <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/[0.08] px-3 py-1.5">
                <div className="live-dot" />
                <span className="font-mono text-[10px] font-semibold tracking-wider text-green-400">LIVE</span>
              </div>
              <Link
                href="/support"
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-4 py-1.5 font-mono text-[11px] font-bold text-black transition hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,212,255,0.35)]"
              >
                Support →
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
