"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothReveal, { RevealItem } from "@/components/SmoothReveal";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">
      <div className="grain" />
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-48 pb-24 px-6 sm:px-12 bg-blueprint">
        <div className="mx-auto max-w-[1920px]">
          <SmoothReveal stagger className="flex flex-col lg:flex-row gap-24 items-start mb-32">
             <div className="lg:w-2/3">
                <RevealItem>
                  <div className="flex items-center gap-4 mb-12">
                    <span className="text-dossier">Protocol / Inquiry</span>
                    <div className="h-px w-24 bg-accent/20" />
                  </div>
                </RevealItem>
                <RevealItem>
                  <h1 className="text-industrial text-6xl sm:text-8xl text-foreground leading-[0.9] tracking-tight mb-16">
                    INITIATE <br /> <span className="text-accent italic font-light">DIALOGUE.</span>
                  </h1>
                </RevealItem>
                
                <RevealItem>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-12 border border-black/10 bg-surface/30 backdrop-blur-sm p-8 sm:p-24 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent/20" />
                     
                     <div className="flex flex-col gap-4">
                        <label className="text-dossier">01. Applicant Name</label>
                        <input type="text" placeholder="Full Credentials" className="bg-transparent border-b border-black/10 py-4 text-xl focus:border-accent outline-none placeholder:text-muted/20" />
                     </div>
                     <div className="flex flex-col gap-4">
                        <label className="text-dossier">02. Digital Channel</label>
                        <input type="email" placeholder="email@address.arch" className="bg-transparent border-b border-black/10 py-4 text-xl focus:border-accent outline-none placeholder:text-muted/20" />
                     </div>
                     <div className="md:col-span-2 flex flex-col gap-4">
                        <label className="text-dossier">03. Intent / Reference No.</label>
                        <textarea placeholder="Specify machine or bespoke commission details..." rows={6} className="bg-transparent border border-black/10 p-6 text-xl focus:border-accent outline-none placeholder:text-muted/20 resize-none" />
                     </div>
                     <div className="md:col-span-2">
                        <button className="w-full sm:w-auto px-24 py-8 bg-foreground text-background text-industrial text-xl hover:bg-accent hover:scale-105 transition-all duration-500" type="button">
                           Transmit Inquiry // Arch
                        </button>
                     </div>
                  </form>
                </RevealItem>
             </div>

             <div className="lg:w-1/3 flex flex-col gap-12 pt-0 sm:pt-48">
                <RevealItem>
                  <div className="p-12 border border-black/10 bg-surface/30">
                     <span className="text-dossier block mb-6">Mayfair HQ // London</span>
                     <p className="text-outfit text-muted text-[11px] uppercase font-bold tracking-[0.2em] leading-relaxed">
                        12 Bruton Place, Mayfair <br />
                        London W1J 6NP <br />
                        United Kingdom
                     </p>
                  </div>
                </RevealItem>
                <RevealItem>
                  <div className="p-12 border border-black/10 bg-surface/30">
                     <span className="text-dossier block mb-4">Digital Support</span>
                     <p className="text-outfit text-muted text-[11px] uppercase font-bold tracking-[0.2em] leading-relaxed">
                        registry@zenith-auto.arch <br />
                        +44 (0) 20 7946 0142
                     </p>
                  </div>
                </RevealItem>
                <RevealItem>
                  <div className="relative aspect-square grayscale border border-black/10 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Mayfair Office" />
                  </div>
                </RevealItem>
             </div>
          </SmoothReveal>

        </div>
      </main>

      <Footer />
    </div>
  );
}
