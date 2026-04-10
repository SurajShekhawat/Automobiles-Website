"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

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
  duration = 0.8, 
  y = 40,
  stagger = false,
  className = ""
}: SmoothRevealProps) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay
            }
          }
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}

export const RevealItem = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
    }}
  >
    {children}
  </motion.div>
);
