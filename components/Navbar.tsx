"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 sm:p-10 pointer-events-none">
        <div className="glass flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-4 sm:px-12 pointer-events-auto border border-white/20">
          
          {/* Left: Navigation (Desktop) */}
          <div className="hidden flex-1 sm:flex gap-10 text-[10px] font-bold tracking-[0.4em] uppercase text-muted">
            <Link href="/inventory" className="hover:text-accent transition-colors">Showcase</Link>
            <Link href="/about" className="hover:text-accent transition-colors">Heritage</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Inquire</Link>
          </div>

          {/* Center: Branding */}
          <div className="flex-none sm:flex-1 flex justify-center">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl hover:italic transition-all">
              ZENITH
            </Link>
          </div>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <button className="hidden md:block bg-foreground text-background px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase transition-all hover:bg-accent hover:scale-105 active:scale-95 duration-500">
              Reservations
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="group flex flex-col gap-1.5 p-2"
            >
              <span className="h-[2px] w-6 bg-foreground rounded-full transition-all group-hover:w-8" />
              <span className="h-[2px] w-8 bg-foreground rounded-full transition-all group-hover:w-6" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
