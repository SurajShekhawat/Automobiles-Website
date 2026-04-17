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
                    <h2 className="text-industrial text-5xl sm:text-7xl text-foreground leading-[1.1] mb-16 underline underline-offset-[24px] decoration-accent/20">
                      CENTURY OF <br /> <span className="text-accent italic font-light">MECHANICS.</span>
                    </h2>
                  </RevealItem>
                  <RevealItem>
                    <div className="pl-12 border-l border-accent/20">
                      <p className="text-muted text-sm leading-relaxed max-w-xl mb-6 uppercase tracking-widest font-medium">
                        Zenith began as a discreet restoration atelier in post-war London, tasked with preserving the mechanical soul of an era that was rapidly digitizing. We recognized early on that true luxury isn't a touchscreen—it is the tactile, visceral explosion of a naturally aspirated engine.
                      </p>
                      <p className="text-muted text-sm leading-relaxed max-w-xl mb-12 uppercase tracking-widest font-medium">
                        Today, we are curators of an evolving legacy. We don't just find cars; we find stories that are waiting to be continued. By merging period-correct metallurgy with aerospace-grade reinforcement, we ensure that these mechanical titans thunder into the next century without sacrificing a single ounce of their original analog brilliance.
                      </p>
                      <Link href="/about" className="text-dossier underline underline-offset-8 hover:text-foreground transition-colors">
                        Access Full Historical Archive // Hist
                      </Link>
                    </div>
                  </RevealItem>
                </SmoothReveal>
              </div>
              <div className="lg:col-span-7 relative">
                <SmoothReveal delay={0.3}>
                  <div className="relative aspect-[16/10] bg-surface overflow-hidden border border-black/5">
                    <img
                      src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop"
                      alt="Classic Car Detail"
                      className="w-full h-full object-cover contrast-125 saturate-[0.8] opacity-90 hover:opacity-100 hover:saturate-100 transition-all duration-[2s]"
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
                    <h2 className="text-industrial text-4xl sm:text-6xl text-foreground mb-4">STATION <span className="text-accent">04.</span></h2>
                  </div>
                  <div className="max-w-xl text-right">
                    <p className="text-muted text-[14px] uppercase tracking-widest leading-relaxed mb-4">
                      Where raw metallurgy meets surgical precision. Our Lab 04 protocol oversees the structural integrity of every carbon-monocoque weave and titanium alloy commission.
                    </p>
                    <p className="text-muted text-[14px] uppercase tracking-widest leading-relaxed">
                      Every chassis undergoes stringent sonic testing and chromoly tubular reinforcement before it ever sees an assembly bay. We engineer out the failure points of the 1960s while strictly retaining the driving dynamics that made these platforms legendary. 
                    </p>
                  </div>
                </div>
              </RevealItem>

              <RevealItem>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: 'BLOCK_CORE', spec: 'TITANIUM-G5', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070' },
                    { title: 'REINFORCEMENT', spec: 'CARBON-3K', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070' },
                    { title: 'ASSEMBLY', spec: 'CLEAN_RM_09', img: 'https://images.unsplash.com/photo-1689826493949-5e5824a5474e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                    { title: 'CASTING', spec: 'B_ALLOY_V8', img: 'https://images.unsplash.com/photo-1570280406792-bf58b7c59247?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
                  ].map((item, i) => (
                    <div key={i} className="group relative aspect-square overflow-hidden bg-surface border border-black/5 transition-all duration-700">
                      <img src={item.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 contrast-125 saturate-[0.5] opacity-90 group-hover:opacity-100 group-hover:saturate-100" />
                      <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background to-transparent opacity-90">
                        <span className="text-dossier text-[14px] block mb-2 text-accent">[{item.title}]</span>
                        <span className="text-industrial text-xl text-foreground">{item.spec}</span>
                      </div>
                      <div className="absolute top-8 right-8 text-[14px] font-bold text-foreground opacity-20 group-hover:opacity-100 transition-opacity">
                        SYS.REF.{i + 100}
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
                  <h2 className="text-industrial text-5xl sm:text-7xl text-foreground leading-[1] mb-16 underline underline-offset-[24px] decoration-black/5">
                    THERMO <br /> <span className="text-accent italic font-light outline-text">DYNAMICS.</span>
                  </h2>
                </RevealItem>
                <RevealItem>
                  <div className="grid grid-cols-2 gap-12 max-w-xl pr-12">
                    <div>
                      <span className="text-dossier text-[14px] block mb-4 text-accent border-b border-accent/20 pb-2">01 // HEAT MGMT</span>
                      <p className="text-muted text-[14px] uppercase font-bold tracking-widest leading-relaxed mb-4">Active liquid-cooling substrate integration. We utilize military-grade thermal mapping to redistribute heat away from the core block.</p>
                      <p className="text-muted text-[14px] uppercase font-light tracking-widest leading-relaxed">This completely eliminates the vapor lock issues notorious in 1970s carbureted performance engines, allowing for sustained 9,000 RPM track violence without thermal degradation.</p>
                    </div>
                    <div>
                      <span className="text-dossier text-[14px] block mb-4 text-accent border-b border-accent/20 pb-2">02 // AIRFLOW</span>
                      <p className="text-muted text-[14px] uppercase font-bold tracking-widest leading-relaxed mb-4">Variable-geometry aerodynamic vectoring. Fluid dynamic simulations govern the placement of hidden intake valving.</p>
                      <p className="text-muted text-[14px] uppercase font-light tracking-widest leading-relaxed">Rather than butchering classic body lines with massive carbon wings, we route high-pressure air through the floorpan, generating immense downforce silently.</p>
                    </div>
                    <div className="col-span-2 mt-8">
                       <span className="text-dossier text-[14px] opacity-40 cursor-pointer hover:text-accent transition-colors">[VIEW ENTIRE THERMAL ALGORITHM // DATASHEET]</span>
                    </div>
                  </div>
                </RevealItem>
              </SmoothReveal>

              <SmoothReveal delay={0.4}>
                <div className="relative aspect-video bg-background border border-black/10 p-12 overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="text-dossier text-[14px] opacity-40">CALIBRATION_TEST.v8</span>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070"
                    className="w-full h-full object-cover contrast-125 saturate-[0.6] opacity-80 hover:opacity-100 hover:saturate-100 transition-all duration-[3s]"
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

        {/* --- NEW SECTION: The Mechanical Soul Manifesto --- */}
        <section className="bg-blueprint py-64 border-y border-black/10 relative overflow-hidden">
          <div className="mx-auto max-w-[1920px] px-6 sm:px-12 relative z-10">
            <SmoothReveal stagger>
              <RevealItem>
                 <div className="flex items-center gap-4 mb-24">
                   <div className="h-px w-32 bg-accent" />
                   <span className="text-dossier font-bold text-accent">THE ZENITH DOCTRINE</span>
                 </div>
              </RevealItem>
              <RevealItem>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-start">
                    <h2 className="text-industrial text-4xl sm:text-6xl text-foreground leading-[1.1] mb-8">
                      PRESERVING THE <br />
                      <span className="text-accent italic font-light outline-text">TACTILE <br/> REVOLUTION.</span>
                    </h2>
                    
                    <div className="space-y-12">
                       <p className="text-muted text-sm sm:text-base leading-relaxed tracking-widest uppercase font-medium">
                         <span className="text-4xl text-foreground font-bold float-left mr-4 mt-1 border border-accent/20 p-2">W</span>
                         e stand at the precipice of a silent, sterilized future. As the automotive world rushes toward soulless electric mobility, Zenith exists to protect the endangered species of the mechanical era. The smell of high-octane combustion, the distinct metallic click of a gated manual shifter, and the violent roar of a cold-started V12 are sensory experiences that no algorithm can replicate.
                       </p>
                       <p className="text-muted text-sm sm:text-base leading-relaxed tracking-widest uppercase font-medium">
                         Our restorations are not museum pieces designed to collect dust in a climate-controlled vault. They are precision weapons. We tear iconic chassis down to the bare metal, mapping millions of data points, to correct factory flaws while amplifying what made the machine terrifyingly beautiful in the first place.
                       </p>
                       <p className="text-muted text-sm sm:text-base leading-relaxed tracking-widest uppercase font-medium">
                         This is not just restoration. It is the architectural elevation of driving purity. We build machines that demand your absolute attention, forcing a dialogue between driver, engine, and tarmac.
                       </p>
                       <div className="pt-8 border-t border-black/10">
                          <span className="text-dossier block mb-2 cursor-pointer hover:text-accent transition-colors underline underline-offset-8">Read the Full Doctrine // PDF Arch</span>
                       </div>
                    </div>
                 </div>
              </RevealItem>
            </SmoothReveal>
          </div>
        </section>


        {/* The Boutique / Showcase */}
        <VehicleShowcase />

        {/* Archival Intelligence (Zenith Journal) */}
        <section className="bg-background py-64 relative overflow-hidden bg-blueprint">
          <div className="mx-auto max-w-[1920px] px-6 sm:px-24 relative z-10">
            <SmoothReveal delay={0.2}>
              <div className="flex flex-col md:flex-row gap-24 items-end mb-48">
                <h2 className="text-industrial text-5xl sm:text-7xl text-foreground leading-[1.1] mb-8 underline underline-offset-[24px] decoration-accent/20">
                  ARCHIVAL <br /> <span className="text-accent italic font-light">INTELLIGENCE.</span>
                </h2>
                <div className="pb-4">
                  <span className="text-dossier block mb-4">Edition // 004/26</span>
                  <p className="text-muted text-[14px] uppercase tracking-widest leading-relaxed max-w-[280px]">
                    Exploring the intersection of mechanical heritage and evolving digital mobility.
                  </p>
                </div>
              </div>
            </SmoothReveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 gap-y-32">
              <div className="md:col-span-7 group cursor-pointer">
                <SmoothReveal delay={0.4}>
                  <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-surface transition-all duration-700">
                    <img src="https://images.unsplash.com/photo-1544883617-640add7af993?q=80&w=2070" className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105 contrast-125 saturate-[0.7] group-hover:saturate-100 opacity-90" />
                  </div>
                  <span className="text-dossier text-accent mb-4 block underline underline-offset-8">Feature // Hist.Registry</span>
                  <h3 className="text-industrial text-4xl sm:text-6xl text-foreground mb-6">THE ART OF THE <br /> ANALOG OVERHAUL</h3>
                  <p className="text-muted text-[14px] uppercase tracking-[0.2em] mb-4 max-w-xl leading-relaxed">
                    Inside the restoration of the 1974 RS Carrera chassis #0092. A deep dive into period-correct metallurgy and the digital preservation of mechanical DNA.
                  </p>
                  <p className="text-muted text-[14px] uppercase tracking-[0.2em] mb-8 max-w-xl leading-relaxed italic opacity-70">
                    We sit down with lead engineer Marcus V. to discuss how his team spent 400 hours re-casting the magnesium engine block from original factory blueprints found in a German archive. The result is an engine that revs faster, runs cooler, and sounds infinitely more aggressive than Stuttgart ever intended.
                  </p>
                  <span className="text-dossier text-[14px] opacity-40">READ DURATION: 12 MINS // ARCH_ACCESS: GRANTED</span>
                </SmoothReveal>
              </div>

              <div className="md:col-span-4 md:col-start-9 flex flex-col gap-32">
                <SmoothReveal delay={0.6}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-square mb-8 overflow-hidden bg-surface transition-all duration-700">
                      <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070" className="w-full h-full object-cover contrast-125 saturate-[0.7] group-hover:saturate-100 transition-all duration-700 opacity-90" />
                    </div>
                    <span className="text-dossier text-accent mb-2 block">Protocol // Design</span>
                    <h4 className="text-industrial text-3xl text-foreground mb-4">FUTURE PROOFING <br /> THE V12 HEART</h4>
                    <p className="text-muted text-[14px] uppercase tracking-widest leading-relaxed">
                      How we inject modern engine management systems (MoTeC) into analog arteries without losing the soul of the machine.
                    </p>
                  </div>
                </SmoothReveal>

                <SmoothReveal delay={0.8}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-square mb-8 overflow-hidden bg-surface transition-all duration-700">
                      <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070" className="w-full h-full object-cover contrast-125 saturate-[0.7] group-hover:saturate-100 transition-all duration-700 opacity-90" />
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
                  <h2 className="text-industrial text-4xl sm:text-6xl text-accent/50 italic font-light">Global Distribution</h2>
                  <div className="text-right">
                    <span className="text-dossier block mb-2">Network Status</span>
                    <span className="text-foreground font-bold tracking-[0.5em] uppercase text-[14px]">Operational / Worldwide</span>
                  </div>
                </div>
              </RevealItem>

              <RevealItem>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/5 divide-x divide-black/5">
                  {[
                    { city: 'London', role: 'Mayfair HQ / Arch', desc: 'The historical genesis of Zenith. Our Mayfair headquarters handles all private client commissioning, archival documentation, and global registry management.', img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9' },
                    { city: 'Milan', role: 'Design / Commission', desc: 'Where analog blueprints become reality. The Milan atelier is focused strictly on coachbuilding, utilizing third-generation metalworkers to sculpt aluminum and carbon.', img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad' },
                    { city: 'Tokyo', role: 'Lab / Mobility', desc: 'The future of our performance division. Tokyo tests aerospace suspension dynamics, telemetry data, and bespoke wiring harness solutions for classic chassis.', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf' }
                  ].map((hub, i) => (
                    <div key={i} className="group relative aspect-[3/4] overflow-hidden transition-all duration-700">
                      <img src={`${hub.img}?q=80&w=2070&auto=format&fit=crop`} className="w-full h-full object-cover contrast-125 saturate-[0.5] group-hover:saturate-100 opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-12 left-12 right-12">
                        <span className="text-dossier block mb-2">{hub.role}</span>
                        <h3 className="text-industrial text-4xl text-foreground mb-4">{hub.city}</h3>
                        <p className="text-muted text-[14px] uppercase font-bold tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0 relative border-l border-accent/30 pl-4">{hub.desc}</p>
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
                    <span className="text-dossier block mb-12 border-l-2 border-accent pl-4">Restoration Protocol // 2026</span>
                    <h2 className="text-industrial text-5xl sm:text-7xl text-foreground leading-[1.1] mb-12">THE <br /> <span className="text-accent italic font-light">PROCESS.</span></h2>
                    <p className="text-muted text-[14px] uppercase tracking-widest leading-relaxed max-w-sm">
                      Every commission follows a clinical restoration protocol designed to maximize mechanical integrity while preserving the machine's historical soul.
                    </p>
                  </RevealItem>
                </SmoothReveal>
              </div>

              <div className="lg:col-span-8">
                <SmoothReveal stagger delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-24">
                  {[
                    { step: '01', title: 'Forensic Metal Audit', desc: 'Complete disassembly down to the bare monocoque. We catalog and x-ray every mechanical component to verify period-correct metallurgy, identifying micro-fractures in legacy castings before they fail.' },
                    { step: '02', step_name: 'Structural Reinforcement', desc: 'Structural restoration of the chassis using aerospace-grade carbon-fiber weaving and titanium structural bonding. This eliminates the torquing and flex issues inherent in classic architecture, allowing the frame to handle modern horsepower.' },
                    { step: '03', title: 'Analog Calibration', desc: 'Master-level tuning of the naturally aspirated engines and gated transmission systems. We blueprint the block to exacting Zenith high-performance standards, prioritizing throttle response and auditory violence.' },
                    { step: '04', title: 'Archival & Delivery', desc: 'Final aerodynamic testing, deep cosmetic correction, and technical documentation. The commission is inducted into the global registry alongside its immutable service ledger before private delivery.' }
                  ].map((item, i) => (
                    <RevealItem key={i}>
                      <div className="relative pl-12 border-l border-black/5 h-full">
                        <span className="text-accent text-industrial text-3xl block mb-6">{item.step}</span>
                        <h4 className="text-industrial text-xl text-foreground mb-4">{item.title || item.step_name}</h4>
                        <p className="text-muted text-[14px] uppercase tracking-widest leading-relaxed">{item.desc}</p>
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
              <h2 className="text-industrial text-5xl sm:text-8xl text-foreground leading-[0.9] mb-16 underline underline-offset-[24px] decoration-accent/20">
                MECHANICS <br />
                <span className="text-accent italic font-light outline-text">OF SOUL.</span>
              </h2>
              <Link href="/contact" className="inline-block px-24 py-8 bg-foreground text-background text-industrial text-xl hover:bg-accent hover:scale-110 transition-all duration-500 shadow-2xl">
                Inquire // Arch
              </Link>
            </div>
          </SmoothReveal>

          <motion.div
            style={{ y: useTransform(scrollY, [0, 10000], [0, 400]) }}
            className="absolute top-0 right-24 h-full pointer-events-none opacity-[0.03]"
          >
            <span className="text-industrial text-[10rem] whitespace-nowrap [writing-mode:vertical-rl]">ZENITH AUTOMOTIVE GROUP</span>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
