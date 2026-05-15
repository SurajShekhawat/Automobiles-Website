"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        // Longer duration = smoother, more cinematic feel
        duration: 1.6,
        // Gentle expo-out easing — no sudden stops
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        // Lower multiplier = fewer pixels per tick = smoother
        wheelMultiplier: 0.85,
        // Touch momentum interpolation on mobile
        touchMultiplier: 1.8,
        syncTouch: true,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
