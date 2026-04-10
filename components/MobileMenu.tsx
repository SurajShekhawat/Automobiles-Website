"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center animate-fade-up bg-texture">
      <button 
        onClick={onClose}
        className="absolute top-10 right-10 text-[10px] font-bold tracking-[0.5em] uppercase text-accent/50 hover:text-foreground transition-colors"
      >
        Close / Exit
      </button>

      <div className="flex flex-col items-center gap-12 text-center">
        <Link 
          href="/" 
          onClick={onClose}
          className="text-editorial text-5xl font-bold hover:italic text-foreground hover:text-accent transition-all duration-500"
        >
          Home
        </Link>
        <Link 
          href="/inventory" 
          onClick={onClose}
          className="text-editorial text-5xl font-bold hover:italic text-foreground hover:text-accent transition-all duration-500"
        >
          Showcase
        </Link>
        <Link 
          href="/about" 
          onClick={onClose}
          className="text-editorial text-5xl font-bold hover:italic text-foreground hover:text-accent transition-all duration-500"
        >
          Heritage
        </Link>
        <Link 
          href="/contact" 
          onClick={onClose}
          className="text-editorial text-5xl font-bold hover:italic text-foreground hover:text-accent transition-all duration-500"
        >
          Inquire
        </Link>
      </div>

      <div className="absolute bottom-20 text-[10px] font-bold tracking-[0.6em] text-accent/20 uppercase">
        Zenith Automotive / Global Hub
      </div>
    </div>
  );
}
