import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turion Network",
  description:
    "Turion is the AI-focused network built to power next-generation applications with speed, sovereignty, and community-first governance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/trn-icon.svg" alt="TRN" width={26} height={26} />
              <span className="font-semibold tracking-wide text-yellow-300">TURION</span>
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/">Home</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/community">Community</Link>
              <Link href="/support">Support</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
