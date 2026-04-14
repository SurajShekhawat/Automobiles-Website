"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VehicleShowcase from "@/components/VehicleShowcase";
import Footer from "@/components/Footer";
import SmoothReveal, { RevealItem } from "@/components/SmoothReveal";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-background relative">
      <div className="grain" />
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Heritage Section (Declassified Document style) */}
        <section className="bg-background py-64 px-6 sm:px-24 relative overflow-hidden bg-blueprint border-y border-black/5">
          <div className="mx-auto max-w-[1920px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-5">
                <SmoothReveal stagger>
                  <RevealItem>
                    <div className="flex items-center gap-4 mb-12">
                       <span className="text-dossier">Dossier / 001-H</span>
                       <div className="h-px w-24 bg-accent/20" />
                    </div>
                  </RevealItem>
                  <RevealItem>
                    <h2 className="text-industrial text-6xl sm:text-[10rem] text-foreground leading-[0.75] mb-16">
                      CENTURY OF <br /> <span className="text-accent italic">MECHANICS.</span>
                    </h2>
                  </RevealItem>
                  <RevealItem>
                    <div className="pl-12 border-l border-accent/20">
                      <p className="text-muted text-sm leading-relaxed max-w-md mb-12 uppercase tracking-widest font-medium">
                        Zenith began as a restoration atelier in post-war London. Today, we are curators of an evolving legacy. We don't just find cars; we find stories that are waiting to be continued in a modern context.
                      </p>
                      <Link href="/about" className="text-dossier underline underline-offset-8 hover:text-foreground transition-colors">
                        Access Full Archive // Hist
                      </Link>
                    </div>
                  </RevealItem>
                </SmoothReveal>
              </div>
              <div className="lg:col-span-7 relative">
                <SmoothReveal delay={0.3}>
                  <div className="relative aspect-[16/10] bg-surface overflow-hidden grayscale border border-black/5">
                    <img 
                      src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                      alt="Classic Car Detail"
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-[2s]"
                    />
                  </div>
                </SmoothReveal>
                {/* Asymmetric Overlay */}
                <SmoothReveal delay={0.5} y={20}>
                  <div className="absolute -bottom-12 -left-12 bg-accent p-12 hidden lg:block">
                    <span className="text-background text-industrial text-5xl">REF. 1924</span>
                  </div>
                </SmoothReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Station 04 // Metallurgy Lab (The Engineering Ledger) */}
        <section className="bg-background py-64 relative overflow-hidden">
          <div className="mx-auto max-w-[1920px] px-6 sm:px-12 relative z-10">
            <SmoothReveal stagger>
              <RevealItem>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
                   <div>
                      <span className="text-dossier block mb-8">Engineering Ledger // v2.4</span>
                      <h2 className="text-industrial text-5xl sm:text-9xl text-foreground">STATION <span className="text-accent">04.</span></h2>
                   </div>
                   <div className="max-w-md text-right">
                      <p className="text-muted text-[11px] uppercase tracking-widest leading-relaxed">
                         Where raw metallurgy meets surgical precision. Our Lab 04 oversees the structural integrity of every carbon-monocoque weave and titanium alloy commission.
                      </p>
                   </div>
                </div>
              </RevealItem>

              <RevealItem>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {[
                     { title: 'BLOCK_CORE', spec: 'TITANIUM-G5', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070' },
                     { title: 'REINFORCEMENT', spec: 'CARBON-3K', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070' },
                     { title: 'ASSEMBLY', spec: 'CLEAN_RM_09', img: 'https://images.unsplash.com/photo-1530124560672-99935178619b?q=80&w=2070' },
                     { title: 'CASTING', spec: 'B_ALLOY_V8', img: 'https://images.unsplash.com/photo-1611015795014-b8160a665b36?q=80&w=2070' }
                   ].map((item, i) => (
                     <div key={i} className="group relative aspect-square overflow-hidden bg-surface border border-black/5 grayscale hover:grayscale-0 transition-all duration-700">
                        <img src={item.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background to-transparent opacity-90">
                           <span className="text-dossier text-[9px] block mb-2 text-accent">[{item.title}]</span>
                           <span className="text-industrial text-xl text-foreground">{item.spec}</span>
                        </div>
                        <div className="absolute top-8 right-8 text-[8px] font-bold text-foreground opacity-20 group-hover:opacity-100 transition-opacity">
                           SYS.REF.{i+100}
                        </div>
                     </div>
                   ))}
                </div>
              </RevealItem>
            </SmoothReveal>
          </div>
        </section>

        {/* Station 09 // Thermodynamics Lab */}
        <section className="bg-surface py-64 relative overflow-hidden boarder-y border-black/5">
          <div className="bg-blueprint absolute inset-0 opacity-20 pointer-events-none" />
          <div className="mx-auto max-w-[1920px] px-6 sm:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <SmoothReveal stagger>
                  <RevealItem>
                     <span className="text-dossier block mb-8">Performance Archival / Section 09</span>
                     <h2 className="text-industrial text-7xl sm:text-[12rem] text-foreground leading-[0.75] mb-16">
                        THERMO <br /> <span className="text-accent italic">DYNAMICS.</span>
                     </h2>
                  </RevealItem>
                  <RevealItem>
                     <div className="grid grid-cols-2 gap-12 max-w-md">
                        <div>
                           <span className="text-dossier text-[9px] block mb-2 text-accent">01 // HEAT MGMT</span>
                           <p className="text-muted text-[10px] uppercase font-bold tracking-widest">Active liquid-cooling substrate integration.</p>
                        </div>
                        <div>
                           <span className="text-dossier text-[9px] block mb-2 text-accent">02 // AIRFLOW</span>
                           <p className="text-muted text-[10px] uppercase font-bold tracking-widest">Variable-geometry aerodynamic vectoring.</p>
                        </div>
                     </div>
                  </RevealItem>
               </SmoothReveal>

               <SmoothReveal delay={0.4}>
                  <div className="relative aspect-video bg-background border border-black/10 p-12 overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 p-4">
                        <span className="text-dossier text-[8px] opacity-40">CALIBRATION_TEST.v8</span>
                     </div>
                     <img 
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070" 
                        className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-all duration-[3s]" 
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 border border-accent/20 rounded-full animate-float flex items-center justify-center">
                           <div className="w-48 h-48 border border-accent/10 rounded-full animate-pulse" />
                        </div>
                     </div>
                  </div>
               </SmoothReveal>
            </div>
          </div>
        </section>

        {/* The Boutique / Showcase */}
        <VehicleShowcase />

        {/* Archival Intelligence (Zenith Journal) */}
        <section className="bg-background py-64 relative overflow-hidden bg-blueprint">
          <div className="mx-auto max-w-[1920px] px-6 sm:px-24 relative z-10">
            <SmoothReveal delay={0.2}>
              <div className="flex flex-col md:flex-row gap-24 items-end mb-48">
                 <h2 className="text-industrial text-7xl sm:text-[12rem] text-foreground leading-[0.75]">
                   ARCHIVAL <br /> <span className="text-accent italic">INTELLIGENCE.</span>
                 </h2>
                 <div className="pb-4">
                    <span className="text-dossier block mb-4">Edition // 004/26</span>
                    <p className="text-muted text-[11px] uppercase tracking-widest leading-relaxed max-w-[280px]">
                      Exploring the intersection of mechanical heritage and evolving digital mobility.
                    </p>
                 </div>
              </div>
            </SmoothReveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 gap-y-32">
               <div className="md:col-span-7 group cursor-pointer">
                  <SmoothReveal delay={0.4}>
                    <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-surface grayscale group-hover:grayscale-0 transition-all duration-700">
                       <img src="https://images.unsplash.com/photo-1560570803-7474c0f9af99?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                    </div>
                    <span className="text-dossier text-accent mb-4 block underline underline-offset-8">Feature // Hist.Registry</span>
                    <h3 className="text-industrial text-4xl sm:text-6xl text-foreground mb-6">THE ART OF THE <br /> ANALOG OVERHAUL</h3>
                    <p className="text-muted text-xs uppercase tracking-[0.2em] mb-8 max-w-xl">
                      Inside the restoration of the 1974 RS Carrera chassis #0092. A deep dive into period-correct metallurgy and the digital preservation of mechanical DNA.
                    </p>
                    <span className="text-dossier text-[8px] opacity-40">READ DURATION: 12 MINS // ARCH_ACCESS: GRANTED</span>
                  </SmoothReveal>
               </div>

               <div className="md:col-span-4 md:col-start-9 flex flex-col gap-32">
                  <SmoothReveal delay={0.6}>
                    <div className="group cursor-pointer">
                       <div className="relative aspect-square mb-8 overflow-hidden bg-surface grayscale group-hover:grayscale-0 transition-all duration-700">
                          <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2070" className="w-full h-full object-cover" />
                       </div>
                       <span className="text-dossier text-accent mb-2 block">Protocol // Design</span>
                       <h4 className="text-industrial text-3xl text-foreground">FUTURE PROOFING <br /> THE V12 HEART</h4>
                    </div>
                  </SmoothReveal>

                  <SmoothReveal delay={0.8}>
                    <div className="group cursor-pointer">
                       <div className="relative aspect-square mb-8 overflow-hidden bg-surface grayscale group-hover:grayscale-0 transition-all duration-700">
                          <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070" className="w-full h-full object-cover" />
                       </div>
                       <span className="text-dossier text-accent mb-2 block">Archive // Discovery</span>
                       <h4 className="text-industrial text-3xl text-foreground">THE STUTTGART <br /> SURVIVOR PAPERS</h4>
                    </div>
                  </SmoothReveal>
               </div>
            </div>
          </div>
        </section>

        {/* Global Hubs (Technical Strip) */}
        <section className="bg-surface py-48 relative overflow-hidden border-b border-black/5">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/10 -translate-y-1/2" />
          <div className="mx-auto max-w-[1920px] px-6 sm:px-12 relative z-10">
            <SmoothReveal stagger>
              <RevealItem>
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
                  <h2 className="text-industrial text-5xl sm:text-8xl text-accent/50 italic">Global Distribution</h2>
                  <div className="text-right">
                    <span className="text-dossier block mb-2">Network Status</span>
                    <span className="text-foreground font-bold tracking-[0.5em] uppercase text-[10px]">Operational / Worldwide</span>
                  </div>
                </div>
              </RevealItem>
              
              <RevealItem>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/5 divide-x divide-black/5">
                  {[
                    { city: 'London', role: 'Mayfair HQ / Arch', img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9' },
                    { city: 'Milan', role: 'Design / Commission', img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad' },
                    { city: 'Tokyo', role: 'Lab / Mobility', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf' }
                  ].map((hub, i) => (
                    <div key={i} className="group relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                      <img src={`${hub.img}?q=80&w=2070&auto=format&fit=crop`} className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-12 left-12">
                        <span className="text-dossier block mb-2">{hub.role}</span>
                        <h3 className="text-industrial text-4xl text-foreground">{hub.city}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealItem>
            </SmoothReveal>
          </div>
        </section>

        {/* The Commissioning Protocol (Process) */}
        <section className="bg-background py-64 relative overflow-hidden border-b border-black/10">
           <div className="mx-auto max-w-[1920px] px-6 sm:px-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                 <div className="lg:col-span-4">
                    <SmoothReveal stagger>
                      <RevealItem>
                        <span className="text-dossier block mb-12">Restoration Protocol // 2026</span>
                        <h2 className="text-industrial text-7xl text-foreground leading-tight mb-16">THE <br /> <span className="text-accent">PROCESS.</span></h2>
                        <p className="text-muted text-xs uppercase tracking-widest leading-relaxed max-w-sm">
                           Every commission follows a clinical restoration protocol designed to maximize mechanical integrity while preserving the machine's historical soul.
                        </p>
                      </RevealItem>
                    </SmoothReveal>
                 </div>

                 <div className="lg:col-span-8">
                    <SmoothReveal stagger delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-24">
                      {[
                        { step: '01', title: 'Forensic Audit', desc: 'Disassembly and cataloging of every mechanical component to verify period-correct metallurgy.' },
                        { step: '02', step_name: 'Metal & Core', desc: 'Structural restoration of the monocoque using carbon-fiber weaving and titanium structural bonding.' },
                        { step: '03', title: 'Analog Tuning', desc: 'Master-level calibration of engines and transmission systems to Zenith high-performance standards.' },
                        { step: '04', title: 'Archive Release', desc: 'Final technical documentation and digital archival before delivery to the global registry.' }
                      ].map((item, i) => (
                        <RevealItem key={i}>
                          <div className="relative pl-12 border-l border-black/5 h-full">
                             <span className="text-accent text-industrial text-3xl block mb-6">{item.step}</span>
                             <h4 className="text-industrial text-xl text-foreground mb-4">{item.title || item.step_name}</h4>
                             <p className="text-muted text-[11px] uppercase tracking-widest leading-relaxed">{item.desc}</p>
                          </div>
                        </RevealItem>
                      ))}
                    </SmoothReveal>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Registry Activity Feed */}
        <section className="bg-background py-32 border-b border-black/5 overflow-hidden">
           <div className="mx-auto max-w-[1920px] px-6 sm:px-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-dossier opacity-40">
                 <div className="flex gap-8 items-center overflow-hidden whitespace-nowrap">
                    {[
                      'UPLOAD: RS_CARRERA_74', 'INTEGRITY_CHECK: PASSED', 'REGISTRY: MAYFAIR_HUB', 
                      'METADATA: SYNCED', 'PROTOCOL: ACTIVE', 'ARCHIVE_v2: LOADED'
                    ].map((status, i) => (
                       <div key={status} className="flex gap-8 items-center animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                          <span>[{status}]</span>
                          <div className="h-1 w-1 bg-accent rounded-full" />
                       </div>
                    ))}
                 </div>
                 <div className="flex gap-4">
                    <span>SYS_UPTIME: 99.9%</span>
                    <span>//</span>
                    <span>DATA_STREAM: SECURE</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Industrial Brand Statement */}
        <section className="relative min-h-[100vh] flex items-center justify-center bg-background overflow-hidden bg-blueprint">
          <SmoothReveal y={100}>
            <div className="relative z-10 text-center px-6">
              <div className="h-24 w-px bg-accent/30 mx-auto mb-12" />
              <span className="text-dossier block mb-12 underline underline-offset-8 decoration-accent/20">The Foundation</span>
              <h2 className="text-industrial text-6xl sm:text-[15rem] text-foreground leading-[0.7] tracking-tighter mb-24">
                MECHANICS <br /> 
                <span className="text-accent italic">OF SOUL.</span>
              </h2>
              <Link href="/contact" className="inline-block px-24 py-8 bg-foreground text-background text-industrial text-xl hover:bg-accent hover:scale-110 transition-all duration-500 shadow-2xl">
                Inquire // Arch
              </Link>
            </div>
          </SmoothReveal>

          {/* Large Background vertical text with parallax */}
          <motion.div 
            style={{ y: useTransform(scrollY, [0, 10000], [0, 400]) }}
            className="absolute top-0 right-24 h-full pointer-events-none opacity-[0.03]"
          >
            <span className="text-industrial text-[20rem] whitespace-nowrap [writing-mode:vertical-rl]">ZENITH AUTOMOTIVE GROUP</span>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
