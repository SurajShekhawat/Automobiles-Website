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
    <div className="fixed inset-0 z-[200] flex flex-col bg-background p-6 sm:p-12">
      <div className="grain" />
      <div className="bg-blueprint absolute inset-0 opacity-20" />
      
      <div className="flex justify-between items-center mb-24 relative z-10">
        <span className="text-dossier">Nav / Mobile-Access</span>
        <button 
          onClick={onClose}
          className="text-industrial text-2xl text-accent hover:rotate-90 transition-transform"
        >
          [CLOSE]
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-12 relative z-10">
        {[
          { name: 'Showcase', href: '/inventory', ref: '01' },
          { name: 'Heritage', href: '/about', ref: '02' },
          { name: 'Inquiry', href: '/contact', ref: '03' }
        ].map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="group flex items-baseline gap-6 border-b border-black/10 pb-8"
          >
            <span className="text-dossier text-xs opacity-20">{item.ref}.</span>
            <span className="text-industrial text-6xl sm:text-8xl text-foreground group-hover:text-accent group-hover:italic transition-all">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-auto border-t border-black/5 pt-12 relative z-10">
        <div className="flex flex-col gap-4">
            <span className="text-dossier text-[8px]">Zenith Archive v.2.0 // Terminal 4</span>
            <div className="flex gap-8">
              <span className="text-muted text-[10px] uppercase font-bold tracking-widest leading-none">London</span>
              <span className="text-muted text-[10px] uppercase font-bold tracking-widest leading-none">Milan</span>
              <span className="text-muted text-[10px] uppercase font-bold tracking-widest leading-none">Tokyo</span>
            </div>
        </div>
      </div>
    </div>
  );
}
