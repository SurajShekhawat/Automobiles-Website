"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SmoothReveal from "./SmoothReveal";

export default function Hero() {
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative h-[90vh] w-full bg-background overflow-hidden flex items-end pb-24 px-6 sm:px-12">
      <div className="grain" />

      {/* High-Key Video Background with Parallax */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 contrast-125 brightness-[1.6] opacity-40"
        >
          <source src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f5c71d64380969502758178cc0ca58a8a47ea1a&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40" />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-end gap-12">
        <SmoothReveal y={80}>
          <h1 className="text-industrial text-[12vw] sm:text-[9vw] leading-[0.9] tracking-tight mb-8">
            ZENITH <br />
            <span className="text-foreground/40 italic font-light">ARCHIVE.</span>
          </h1>
          <div className="flex items-center gap-6">
            <div className="h-px w-24 bg-foreground" />
            <span className="text-dossier text-foreground">Established 1924 // London Hub</span>
          </div>
        </SmoothReveal>

        <div className="text-right hidden sm:block">
          <SmoothReveal delay={0.2}>
            <p className="text-dossier text-foreground opacity-60 mb-8 max-w-[200px]">
              ARCHIVAL SYSTEMS v2.0 <br />
              [STATUS: OPERATIONAL]
            </p>
          </SmoothReveal>
        </div>
      </motion.div>
    </section>
  );
}
