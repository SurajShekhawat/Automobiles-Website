"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// The premium easing curve used throughout the site
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface SmoothRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: boolean;
  className?: string;
}

export default function SmoothReveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 50,
  stagger = false,
  className = "",
}: SmoothRevealProps) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: delay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

export const RevealItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
  >
    {children}
  </motion.div>
);
