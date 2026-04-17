"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-black/5 px-6 sm:px-12 py-6">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between">

          <Link href="/" className="text-industrial text-2xl sm:text-3xl text-foreground hover:italic transition-all uppercase tracking-widest">
            ZENITH
          </Link>

          {/* Center: Monospace Nav (Desktop) */}
          <div className="hidden lg:flex gap-12">
            <Link href="/inventory" style={{fontSize: '14px!important'}} className="text-dossier text-[14px] group flex items-baseline gap-2 hover:text-foreground transition-colors">
              <span style={{fontSize: '12px!important'}} className="text-[12px] opacity-20">01.</span> Showcase
            </Link>
            <Link href="/about" style={{fontSize: '14px!important'}} className="text-dossier text-[14px] group flex items-baseline gap-2 hover:text-foreground transition-colors">
              <span style={{fontSize: '12px!important'}} className="text-[12px] opacity-20">02.</span> Heritage
            </Link>
            <Link href="/contact" style={{fontSize: '14px!important'}} className="text-dossier text-[14px] group flex items-baseline gap-2 hover:text-foreground transition-colors">
              <span style={{fontSize: '12px!important'}} className="text-[12px] opacity-20">03.</span> Inquire
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col text-[8px] font-bold tracking-[0.4em] uppercase text-accent/60 text-right">
              Archive v.2.0 <br />
              <span className="text-accent underline decoration-accent/30">Access Restricted</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col gap-1.5"
            >
              <div className="h-px w-8 bg-foreground" />
              <div className="h-px w-5 bg-foreground self-end" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
