"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: "01",
    title: "ZENITH",
    subtitle: "ARCHIVE.",
    label: "Heritage Commission",
    desc: "We do not build cars. We preserve the visceral, terrifying brilliance of the mechanical era.",
    cta: "Explore Collection",
    ctaHref: "/inventory",
    image: "https://images.unsplash.com/photo-1685935990930-75c061dbb979?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "EST. 1924",
    ref: "ZA-001",
  },
  {
    id: "02",
    title: "PRECISION",
    subtitle: "MECHANICS.",
    label: "Engineering Ledger",
    desc: "Aerospace-grade carbon weaving married to period-correct metallurgy. The analog art of performance.",
    cta: "Our Process",
    ctaHref: "/about",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2560&auto=format&fit=crop",
    year: "LAB 04",
    ref: "ZA-002",
  },
  {
    id: "03",
    title: "TACTILE",
    subtitle: "REVOLUTION.",
    label: "The Doctrine",
    desc: "The distinct metallic click of a gated manual shifter. The violent roar of a cold-started V12. Irreplaceable.",
    cta: "Commission a Build",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2560&auto=format&fit=crop",
    year: "GLOBAL",
    ref: "ZA-003",
  },
  {
    id: "04",
    title: "APEX",
    subtitle: "CARBON.",
    label: "Current Registry",
    desc: "Every commission in the Zenith registry is verified for mechanical purity before archival and release.",
    cta: "View Registry",
    ctaHref: "/inventory",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2560&auto=format&fit=crop",
    year: "2026",
    ref: "ZA-004",
  },
];

const SLIDE_DURATION = 5500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      setPrev(current);
      setDirection(dir);
      setCurrent(index);
      setProgress(0);
    },
    [current]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  // Auto-play + progress bar
  useEffect(() => {
    if (isPaused) return;
    const startTime = Date.now();
    let raf: number;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        goNext();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current, isPaused, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const slide = slides[current];

  const imageVariants = {
    enterNext: { opacity: 0, scale: 1.08, x: 60 },
    enterPrev: { opacity: 0, scale: 1.08, x: -60 },
    center: { opacity: 1, scale: 1, x: 0 },
    exitNext: { opacity: 0, scale: 0.97, x: -40 },
    exitPrev: { opacity: 0, scale: 0.97, x: 40 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="relative h-screen w-full bg-background overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grain" />

      {/* ═══ IMAGE LAYER ═══ */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={`img-${current}`}
            className="absolute inset-0"
            variants={imageVariants}
            initial={direction === "next" ? "enterNext" : "enterPrev"}
            animate="center"
            exit={direction === "next" ? "exitNext" : "exitPrev"}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover contrast-125 saturate-[0.75]"
            />
            {/* Multi-layer gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ═══ CONTENT LAYER ═══ */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 sm:px-12 lg:px-16 pt-32 pb-16">

        {/* Top meta bar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`meta-${current}`}
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-dossier text-accent tracking-[0.3em] uppercase text-[14px]">
              {slide.label}
            </span>
            <div className="h-px flex-1 bg-foreground/10 max-w-[120px]" />
            <span className="text-dossier text-foreground/40 text-[14px]">
              REF. {slide.ref}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Main text block */}
        <div className="max-w-[1920px]">
          <AnimatePresence mode="wait">
            <motion.div key={`content-${current}`}>
              {/* Slide counter */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <span className="text-industrial text-[14px] text-accent font-black tracking-[0.3em]">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <div className="h-px w-16 bg-accent/40" />
                <span className="text-dossier text-foreground/30 text-[14px]">
                  / {String(slides.length).padStart(2, "0")}
                </span>
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden mb-2">
                <motion.h1
                  className="text-industrial text-[14vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.88] tracking-tight text-foreground"
                  custom={0.1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {slide.title}
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-10">
                <motion.h2
                  className="text-industrial text-[14vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.88] tracking-tight text-foreground/30 italic font-light"
                  custom={0.2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {slide.subtitle}
                </motion.h2>
              </div>

              {/* Descriptor + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
                <motion.div
                  className="pl-6 border-l border-accent/40 max-w-sm"
                  custom={0.35}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p className="text-muted text-[14px] uppercase tracking-widest leading-relaxed font-medium mb-6">
                    {slide.desc}
                  </p>
                  <Link
                    href={slide.ctaHref}
                    className="group inline-flex items-center gap-4 text-dossier text-[14px] text-foreground hover:text-accent transition-colors duration-300"
                  >
                    <span className="underline underline-offset-4 decoration-accent/40">
                      {slide.cta}
                    </span>
                    <span className="w-6 h-px bg-foreground group-hover:w-10 group-hover:bg-accent transition-all duration-500" />
                  </Link>
                </motion.div>

                <motion.div
                  className="hidden sm:block text-right"
                  custom={0.45}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <span className="text-dossier text-foreground/20 text-[14px] uppercase tracking-[0.4em] block mb-2">
                    {slide.year}
                  </span>
                  <span className="text-dossier text-foreground/30 text-[14px]">
                    ARCHIVAL SYSTEMS v2.0
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ═══ CONTROLS STRIP ═══ */}
        <div className="flex items-end justify-between gap-8">

          {/* Progress bars + thumbnails */}
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                className="group flex flex-col gap-2 cursor-pointer"
                aria-label={`Go to slide ${i + 1}`}
              >
                {/* Thumbnail */}
                <div className={`relative h-12 w-20 overflow-hidden border transition-all duration-500 ${i === current ? "border-accent opacity-100 w-24" : "border-white/10 opacity-40 group-hover:opacity-70"}`}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover contrast-125 saturate-50"
                  />
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 bg-accent/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>
                {/* Progress bar */}
                <div className="h-px w-full bg-white/10 relative overflow-hidden">
                  {i === current && (
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-accent"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {i < current && (
                    <div className="absolute top-0 left-0 h-full w-full bg-accent/50" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="group flex h-12 w-12 items-center justify-center border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 stroke-current text-foreground/60 group-hover:text-accent transition-colors"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="group flex h-12 w-12 items-center justify-center border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 stroke-current text-foreground/60 group-hover:text-accent transition-colors"
              >
                <path d="M5 12h14M12 19l7-7-7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ═══ VERTICAL LABEL ═══ */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-3">
        <div className="h-24 w-px bg-foreground/10" />
        <span
          className="text-dossier text-foreground/30 text-[14px] tracking-[0.4em] uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Established London 1924
        </span>
        <div className="h-24 w-px bg-foreground/10" />
      </div>
    </section>
  );
}
