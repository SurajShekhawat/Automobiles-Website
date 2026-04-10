"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothReveal, { RevealItem } from "@/components/SmoothReveal";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">
      <div className="grain" />
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-48 pb-24 px-6 sm:px-12 bg-blueprint">
        <div className="mx-auto max-w-[1920px]">
          <SmoothReveal stagger>
            <div className="flex flex-col lg:flex-row gap-32 mb-64 items-start">
               <div className="lg:sticky lg:top-48 lg:w-1/3">
                  <RevealItem>
                    <div className="flex items-center gap-4 mb-12">
                      <span className="text-dossier">Archive / Heritage</span>
                      <div className="h-px w-24 bg-accent/20" />
                    </div>
                  </RevealItem>
                  <RevealItem>
                    <h1 className="text-industrial text-7xl sm:text-[10rem] text-foreground leading-[0.8] tracking-tighter mb-16">
                      CENTURY <br /> <span className="text-accent italic">STUDIO.</span>
                    </h1>
                  </RevealItem>
                  <RevealItem>
                    <p className="text-muted text-[11px] uppercase tracking-widest leading-relaxed max-w-sm mb-12">
                      The chronicle of Zenith is not merely a timeline of dates, but a preservation of mechanical soul. Founded in 1924, our mission remains unchanged: to curate the intersection of engineering and emotion.
                    </p>
                  </RevealItem>
               </div>

               <div className="flex-1 space-y-32">
                  <RevealItem>
                    <div className="relative aspect-video bg-surface overflow-hidden border border-black/10">
                       <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80" />
                       <div className="absolute top-12 left-12 text-dossier bg-background/50 backdrop-blur-sm p-4">Station No. 001 // Restoration Lab</div>
                    </div>
                  </RevealItem>

                  <RevealItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="p-12 border border-black/10 bg-surface/30 backdrop-blur-sm">
                          <span className="text-dossier block mb-8 underline underline-offset-8">01. Originality</span>
                          <p className="text-muted text-[11px] uppercase tracking-widest leading-relaxed">
                            We believe in period-correct metallurgy. Every machine processed in our atelier is restored using materials and techniques authentic to its specific era of engineering.
                          </p>
                       </div>
                       <div className="p-12 border border-black/10 bg-surface/30 backdrop-blur-sm">
                          <span className="text-dossier block mb-8 underline underline-offset-8">02. Evolution</span>
                          <p className="text-muted text-[11px] uppercase tracking-widest leading-relaxed">
                            Legacy is not static. Our Innovation Lab explores how performance heritage can thrive in a carbon-neutral future without sacrificing the visceral mechanical experience.
                          </p>
                       </div>
                    </div>
                  </RevealItem>

                  <RevealItem>
                    <div className="relative aspect-square sm:aspect-[21/9] bg-surface overflow-hidden border border-black/10">
                       <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-20 hover:opacity-100 transition-all duration-[2s]" />
                       <div className="absolute bottom-12 right-12 text-industrial text-8xl text-accent/10 italic">THE LAB</div>
                    </div>
                  </RevealItem>
               </div>
            </div>
          </SmoothReveal>

          <SmoothReveal y={60}>
            <div className="text-center py-32 border-t border-black/10">
               <span className="text-dossier block mb-12">Access Protocol Completed</span>
               <h2 className="text-industrial text-4xl sm:text-7xl text-foreground">A Legacy in <span className="text-accent">Motion.</span></h2>
            </div>
          </SmoothReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
