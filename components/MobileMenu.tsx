"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "Showcase",  href: "/inventory", ref: "01", sub: "Current Registry" },
  { name: "Heritage",  href: "/about",     ref: "02", sub: "Century Studio"  },
  { name: "Inquire",   href: "/contact",   ref: "03", sub: "Commission Protocol" },
];

const socials = [
  { label: "IG",  href: "#" },
  { label: "TW",  href: "#" },
  { label: "YT",  href: "#" },
];

// Overlay variants
const overlayVariants: import("framer-motion").Variants = {
  closed: { opacity: 0 },
  open:   { opacity: 1, transition: { duration: 0.35 } },
  exit:   { opacity: 0, transition: { duration: 0.3  } },
};

// Panel slides in from the right
const panelVariants: import("framer-motion").Variants = {
  closed: { x: "100%" },
  open:   { x: 0,    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
  exit:   { x: "100%", transition: { duration: 0.4, ease: [0.5, 0, 1, 0.5] as [number,number,number,number] } },
};

// Stagger children
const containerVariants: import("framer-motion").Variants = {
  closed: {},
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

const itemVariants: import("framer-motion").Variants = {
  closed: { opacity: 0, x: 40 },
  open:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

const footerVariants: import("framer-motion").Variants = {
  closed: { opacity: 0, y: 20 },
  open:   { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.55 } },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[190] bg-background/60 backdrop-blur-sm"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="exit"
            onClick={onClose}
          />

          {/* ── Panel ── */}
          <motion.div
            key="panel"
            className="fixed top-0 right-0 bottom-0 z-[200] w-full sm:w-[480px] bg-background flex flex-col overflow-hidden"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            {/* grain + blueprint texture */}
            <div className="grain" />
            <div className="bg-blueprint absolute inset-0 opacity-10 pointer-events-none" />

            {/* Accent left border */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } }}
            />

            <div className="relative z-10 flex flex-col h-full px-8 sm:px-12 py-8">

              {/* ── Header ── */}
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-4">
                  <div className="h-px w-6 bg-accent" />
                  <span className="text-dossier text-accent text-[14px] tracking-[0.3em] uppercase">
                    Nav Access
                  </span>
                </div>

                {/* X Close button */}
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="group relative h-10 w-10 flex items-center justify-center border border-foreground/10 hover:border-accent transition-colors duration-300"
                >
                  <span className="absolute h-px w-5 bg-foreground/60 group-hover:bg-accent rotate-45 transition-colors duration-300" />
                  <span className="absolute h-px w-5 bg-foreground/60 group-hover:bg-accent -rotate-45 transition-colors duration-300" />
                </button>
              </div>

              {/* ── Nav Links ── */}
              <motion.nav
                className="flex-1 flex flex-col justify-center gap-0"
                variants={containerVariants}
                initial="closed"
                animate="open"
              >
                {navItems.map((item, i) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-baseline justify-between border-b border-foreground/[0.06] py-7 hover:border-accent/30 transition-colors duration-300"
                    >
                      <div className="flex items-baseline gap-5">
                        <span className="text-dossier text-accent/50 text-[14px] tracking-widest group-hover:text-accent transition-colors duration-300">
                          {item.ref}
                        </span>
                        <span className="text-industrial text-5xl sm:text-6xl text-foreground group-hover:text-accent group-hover:italic transition-all duration-400 leading-none">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-dossier text-[14px] text-accent/70 tracking-widest">
                          {item.sub}
                        </span>
                        <div className="h-px w-8 bg-accent/50" />
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* Extra links */}
                <motion.div
                  variants={itemVariants}
                  className="flex gap-8 pt-10"
                >
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="text-dossier text-[14px] text-muted hover:text-accent transition-colors duration-200"
                    >
                      [{s.label}]
                    </a>
                  ))}
                </motion.div>
              </motion.nav>

              {/* ── Footer ── */}
              <motion.div
                variants={footerVariants}
                initial="closed"
                animate="open"
                className="border-t border-foreground/[0.06] pt-8 mt-8"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-dossier text-[14px] text-foreground mb-2">
                      ZENITH ARCHIVE v2.0
                    </p>
                    <div className="flex gap-6">
                      {["London", "Milan", "Tokyo"].map((city) => (
                        <span key={city} className="text-muted text-[14px] uppercase font-bold tracking-widest">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Animated status dot */}
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-dossier text-[14px] text-accent">LIVE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
