"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
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
            <Link href="/inventory" className="text-dossier text-[14px] group flex items-baseline gap-2 hover:text-foreground transition-colors">
              <span className="text-[14px] opacity-20">01.</span> Showcase
            </Link>
            <Link href="/about" className="text-dossier text-[14px] group flex items-baseline gap-2 hover:text-foreground transition-colors">
              <span className="text-[14px] opacity-20">02.</span> Heritage
            </Link>
            <Link href="/contact" className="text-dossier text-[14px] group flex items-baseline gap-2 hover:text-foreground transition-colors">
              <span className="text-[14px] opacity-20">03.</span> Inquire
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col text-[14px] font-bold tracking-[0.4em] uppercase text-accent/60 text-right">
              Archive v.2.0 <br />
              <span className="text-accent underline decoration-accent/30">Access Restricted</span>
            </div>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex flex-col gap-[7px] items-end justify-center w-8 h-6"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                className="block h-px bg-foreground origin-right"
                animate={isMenuOpen
                  ? { width: "100%", rotate: -45, y: 3.5, translateX: 0 }
                  : { width: "100%", rotate: 0, y: 0 }
                }
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="block h-px bg-foreground"
                animate={isMenuOpen
                  ? { width: "0%", opacity: 0 }
                  : { width: "60%", opacity: 1 }
                }
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block h-px bg-foreground origin-right"
                animate={isMenuOpen
                  ? { width: "100%", rotate: 45, y: -3.5 }
                  : { width: "80%", rotate: 0, y: 0 }
                }
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
