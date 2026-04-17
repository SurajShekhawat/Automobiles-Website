"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] border-b border-black/5 px-6 sm:px-12"
        animate={{
          backgroundColor: scrolled ? "rgba(240,245,250,0.96)" : "rgba(240,245,250,0.75)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          paddingTop: scrolled ? "14px" : "24px",
          paddingBottom: scrolled ? "14px" : "24px",
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between">

          {/* Logo */}
          <motion.div
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/"
              className="text-industrial text-2xl sm:text-3xl text-foreground hover:italic transition-all duration-500 uppercase tracking-widest"
            >
              ZENITH
            </Link>
          </motion.div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex gap-12">
            {[
              { label: "Showcase", href: "/inventory" },
              { label: "Heritage",  href: "/about" },
              { label: "Inquire",   href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dossier group relative flex items-baseline gap-2 hover:text-foreground transition-colors duration-500"
              >
                {item.label}
                {/* Underline slide-in on hover */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col text-[14px] font-bold tracking-[0.4em] uppercase text-accent/60 text-right">
              Archive v.2.0 <br />
              <span className="text-accent underline decoration-accent/30">Access Restricted</span>
            </div>

            {/* Animated hamburger */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex flex-col gap-[7px] items-end justify-center w-8 h-6"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="block h-px bg-foreground origin-center"
                animate={
                  isMenuOpen
                    ? { width: "100%", rotate: -45, y: 5 }
                    : { width: "100%", rotate: 0, y: 0 }
                }
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="block h-px bg-foreground"
                animate={
                  isMenuOpen
                    ? { width: "0%", opacity: 0 }
                    : { width: "65%", opacity: 1 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px bg-foreground origin-center"
                animate={
                  isMenuOpen
                    ? { width: "100%", rotate: 45, y: -5 }
                    : { width: "80%", rotate: 0, y: 0 }
                }
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
