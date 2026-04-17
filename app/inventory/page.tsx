"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothReveal, { RevealItem } from "@/components/SmoothReveal";

const inventory = [
  { id: "01", name: "Apex Carbon", type: "Hypercar", year: "2026", image: "https://images.unsplash.com/photo-1544883617-640add7af993?q=80&w=2070&auto=format&fit=crop" },
  { id: "02", name: "Silver Arrow", type: "GT", year: "2025", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" },
  { id: "03", name: "Obsidian E", type: "Electric Sedan", year: "2026", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop" },
  { id: "04", name: "Zenith V12", type: "Heritage", year: "1964", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop" },
];

export default function Inventory() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">
      <div className="grain" />
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-48 pb-24 px-6 sm:px-12 bg-blueprint">
        <div className="mx-auto max-w-[1920px]">
          <SmoothReveal stagger>
            <RevealItem>
              <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32 border-b border-black/10 pb-24">
                 <div>
                    <div className="flex items-center gap-4 mb-12">
                      <span className="text-dossier">Archive Access / Level 4</span>
                      <div className="h-px w-24 bg-accent/20" />
                    </div>
                    <h1 className="text-industrial text-6xl sm:text-8xl text-foreground leading-[0.9] tracking-tight">
                      CURRENT <br /> <span className="text-accent italic font-light">BUREAU.</span>
                    </h1>
                 </div>
                 <div className="text-right max-w-sm">
                    <p className="text-dossier mb-6">Total Registry: 04 Machines</p>
                    <p className="text-outfit text-muted text-[14px] uppercase font-bold tracking-[0.2em] leading-relaxed">
                      Authorized commissions currently available for private acquisition. Every machine in the registry has been verified for mechanical purity.
                    </p>
                 </div>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/10">
                {inventory.map((car, i) => (
                  <div key={car.id} className="group relative aspect-[3/4] overflow-hidden border-r border-black/10 last:border-r-0 cursor-pointer">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="absolute inset-0 h-full w-full object-cover contrast-125 saturate-[0.7] opacity-90 group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-110 transition-all duration-[1.5s]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-8 left-8">
                      <span className="text-industrial text-6xl text-white/[0.05] group-hover:text-accent/10 transition-colors">{car.id}</span>
                    </div>

                    <div className="absolute bottom-12 left-12 right-12">
                       <span className="text-dossier block mb-4">{car.year} // {car.type}</span>
                       <h2 className="text-industrial text-4xl text-foreground group-hover:text-accent transition-colors">{car.name}</h2>
                       <div className="h-0 group-hover:h-12 transition-all duration-500 overflow-hidden mt-6">
                          <Link href="/contact" className="text-dossier text-[14px] underline decoration-accent/20">Init. Acquisition Protocol</Link>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealItem>
          </SmoothReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
