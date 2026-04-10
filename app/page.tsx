import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VehicleShowcase from "@/components/VehicleShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Heritage Section (Minimalist snippet) */}
        <section className="bg-background py-48 px-6 sm:px-12 relative overflow-hidden bg-texture">
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
              <div>
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-accent block mb-10">Historical Context / Archive</span>
                <h2 className="text-4xl sm:text-7xl font-serif italic text-accent/40 leading-[0.9] mb-12">
                  A century of <br /> <span className="text-foreground">mechanical poetry.</span>
                </h2>
                <p className="text-muted text-sm leading-relaxed max-w-md mb-12 font-medium">
                  Zenith began as a restoration atelier in post-war London. Today, we are curators of an evolving legacy. We don't just find cars; we find stories that are waiting to be continued in a modern context.
                </p>
                <Link href="/about" className="inline-block border-b border-accent/30 pb-3 text-[10px] font-bold tracking-[0.4em] uppercase hover:text-accent hover:border-accent transition-all duration-500">
                  Discover Our History
                </Link>
              </div>
              <div className="relative aspect-[4/5] bg-surface overflow-hidden border border-accent/10">
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Classic Car Detail"
                  className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 transition-all duration-[2s]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Gallery Section */}
        <section className="bg-surface py-24 sm:py-48 px-6 sm:px-12">
           <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
                 <div className="md:col-span-8 relative aspect-video bg-background overflow-hidden border border-accent/5">
                    <img 
                      src="https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Lifestyle 1"
                      className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-transform duration-[2s] hover:scale-110"
                    />
                 </div>
                 <div className="md:col-span-4 relative aspect-[4/5] md:aspect-auto bg-background overflow-hidden border border-accent/5">
                    <img 
                      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
                      alt="Lifestyle 2"
                      className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-transform duration-[2s] hover:scale-110"
                    />
                 </div>
                 <div className="md:col-span-4 relative aspect-[4/5] md:aspect-auto bg-background overflow-hidden border border-accent/5">
                    <img 
                      src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop" 
                      alt="Lifestyle 3"
                      className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-transform duration-[2s] hover:scale-110"
                    />
                 </div>
                 <div className="md:col-span-8 relative aspect-video bg-background overflow-hidden border border-accent/5">
                    <img 
                      src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=2070&auto=format&fit=crop" 
                      alt="Lifestyle 4"
                      className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-transform duration-[2s] hover:scale-110"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* Global Hubs Section */}
        <section className="bg-background py-24 sm:py-48 border-b border-accent/10 relative overflow-hidden bg-texture">
          <div className="mx-auto max-w-7xl px-6 sm:px-12 relative z-10">
            <div className="mb-24 text-center">
              <h2 className="text-4xl sm:text-8xl font-serif italic text-accent/20 mb-8 capitalize leading-none">Global Network</h2>
              <p className="text-accent text-[10px] sm:text-xs tracking-[0.5em] uppercase font-bold">London / Milan / Tokyo</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="group hidden sm:block">
                <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-8 border border-accent/5">
                  <img src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]" />
                </div>
                <h3 className="font-bold text-[11px] uppercase tracking-[0.4em] text-foreground mb-4">London / Mayfair HQ</h3>
                <p className="text-muted text-[11px] leading-relaxed font-medium">Historical Archive & Bespoke Restoration Atelier.</p>
              </div>
              <div className="group">
                <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-8 border border-accent/5">
                  <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]" />
                </div>
                <h3 className="font-bold text-[11px] uppercase tracking-[0.4em] text-foreground mb-4">Milan / Styling</h3>
                <p className="text-muted text-[11px] leading-relaxed font-medium">Industrial Design & Creative Commission Studio.</p>
              </div>
              <div className="group hidden sm:block">
                <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-8 border border-accent/5">
                  <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]" />
                </div>
                <h3 className="font-bold text-[11px] uppercase tracking-[0.4em] text-foreground mb-4">Tokyo / Lab</h3>
                <p className="text-muted text-[11px] leading-relaxed font-medium">Advanced Materials & Future Mobility Laboratory.</p>
              </div>
            </div>
          </div>
        </section>

        <VehicleShowcase />

        {/* The Technology Lab Section */}
        <section className="bg-surface py-48 px-6 sm:px-12 relative">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
               <div className="relative aspect-square bg-background overflow-hidden order-last md:order-first border border-accent/10">
                   <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-100 transition-opacity duration-[2s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
               </div>
               <div>
                  <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-accent/50 block mb-10 underline underline-offset-8">Innovation / Future</span>
                  <h2 className="text-5xl sm:text-8xl font-serif italic mb-10 leading-[0.85] text-foreground">Engineering <br /> <span className="text-accent underline decoration-accent/10 decoration-8 underline-offset-[-2px]">Pure Motion.</span></h2>
                  <p className="text-muted text-sm leading-relaxed max-w-md mb-16 font-medium">
                     At the Zenith Innovation Lab, we don't just restore the past; we engineer the future of high-performance mechanics. Our proprietary carbon-neutral restoration processes ensure legacy machines remain operational for the centuries to come.
                  </p>
                  <div className="flex gap-16 text-[10px] font-bold tracking-[0.4em] uppercase">
                     <div className="flex flex-col gap-4">
                        <span className="text-foreground text-2xl font-serif italic">99%</span>
                        <span className="text-accent/40">Aerodynamic <br /> Purity rating</span>
                     </div>
                     <div className="flex flex-col gap-4">
                        <span className="text-foreground text-2xl font-serif italic">Zero</span>
                        <span className="text-accent/40">Carbon <br /> footprint target</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Founder's Perspective Section */}
        <section className="bg-background py-48 px-6 sm:px-12 relative bg-texture">
          <div className="mx-auto max-w-5xl text-center relative z-10">
            <span className="text-[11px] font-bold tracking-[0.6em] text-accent uppercase block mb-16 italic">Director's Vision</span>
            <blockquote className="text-3xl sm:text-6xl font-serif italic text-foreground leading-[1.1] mb-16 max-w-4xl mx-auto">
              "We believe a car is not a tool, but a dialogue between the road and the soul. <span className="text-accent/50">Our mission is to ensure that dialogue never goes silent."</span>
            </blockquote>
            <div className="h-[1px] w-32 bg-accent/20 mx-auto mb-16" />
            <p className="text-muted text-[11px] font-bold tracking-[0.5em] uppercase"> Arthur Zenith / Founder & Curator </p>
          </div>
        </section>

        {/* The Atelier Section */}
        <section className="bg-background py-32 sm:py-56 border-y border-accent/10 relative overflow-hidden">
           <div className="absolute inset-0 bg-texture opacity-30" />
           <div className="mx-auto max-w-7xl px-6 sm:px-12 relative z-10">
              <div className="flex flex-col lg:flex-row gap-32 items-center">
                 <div className="flex-1">
                    <span className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase block mb-10">The Atelier</span>
                    <h2 className="text-4xl sm:text-7xl font-serif italic text-foreground leading-[1.1] mb-12">
                       The architecture <br /> of obsession.
                    </h2>
                    <p className="text-muted text-sm leading-relaxed max-w-lg mb-16 font-medium">
                       In our Mayfair atelier, we don't just assemble machines; we sculpt them. Every stitch in the hand-selected leather and every polished surface of the mechanical heart is a testament to our relentless pursuit of perfection. Precision is our baseline; soul is our objective.
                    </p>
                    <div className="grid grid-cols-2 gap-12 border-t border-accent/10 pt-16">
                       <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent mb-4">Originality</h4>
                          <p className="text-muted text-[11px] font-medium leading-relaxed">99% Restoration Accuracy to original period specifications.</p>
                       </div>
                       <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent mb-4">Hand-Crafted</h4>
                          <p className="text-muted text-[11px] font-medium leading-relaxed">Over 12,000 work hours dedicated to every single commission.</p>
                       </div>
                    </div>
                 </div>
                 <div className="flex-1 grid grid-cols-2 gap-6 relative">
                    <div className="absolute -inset-4 border border-accent/5 -z-10 translate-x-4 translate-y-4" />
                    <div className="relative aspect-[3/4] overflow-hidden bg-surface group">
                       <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-[1.5s]" />
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden bg-surface mt-16 group">
                       <img src="https://images.unsplash.com/photo-1517524008436-bbdb53c248b1?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-[1.5s]" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Bespoke Services Section */}
        <section className="bg-surface py-24 sm:py-48 px-6 sm:px-12">
          <div className="mx-auto max-w-7xl text-center">
             <h2 className="text-editorial text-5xl sm:text-9xl font-bold mb-24 uppercase tracking-tighter text-foreground">Bespoke <span className="italic text-accent/10">Commission</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                <div className="relative p-12 min-h-[400px] flex flex-col justify-end overflow-hidden group border border-accent/5">
                   <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-[1s] grayscale" />
                   <div className="relative z-10">
                      <h3 className="font-bold mb-6 uppercase tracking-[0.4em] text-[11px] text-accent">Acquisition</h3>
                      <p className="text-muted text-sm leading-relaxed font-medium">A clandestine global network for sourcing the rarest machines in automotive history.</p>
                   </div>
                </div>
                <div className="relative p-12 min-h-[400px] flex flex-col justify-end overflow-hidden group border border-accent/5">
                   <img src="https://images.unsplash.com/photo-1517524008436-bbdb53c248b1?q=80&w=1974&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-[1s] grayscale" />
                   <div className="relative z-10">
                      <h3 className="font-bold mb-6 uppercase tracking-[0.4em] text-[11px] text-accent">Restoration</h3>
                      <p className="text-muted text-sm leading-relaxed font-medium">Master craftsmen dedicated to original specifications and period-correct metallurgy.</p>
                   </div>
                </div>
                <div className="relative p-12 min-h-[400px] flex flex-col justify-end overflow-hidden group border border-accent/5">
                   <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-[1s] grayscale" />
                   <div className="relative z-10">
                      <h3 className="font-bold mb-6 uppercase tracking-[0.4em] text-[11px] text-accent">Management</h3>
                      <p className="text-muted text-sm leading-relaxed font-medium">White-glove, secure global logistics for high-value automotive assets and private collections.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* The Journal Section */}
        <section className="bg-background py-32 sm:py-56 px-6 sm:px-12 relative">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
           <div className="mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8">
                 <h2 className="text-editorial text-5xl sm:text-9xl font-bold italic text-accent/[0.08] leading-none">The Journal</h2>
                 <p className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase">Vol. IV / Winter Edition</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                 <div className="group cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden mb-10 border border-accent/5">
                       <img src="https://images.unsplash.com/photo-1542362567-b055002b91f4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.2s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-accent/40 uppercase block mb-6">Discovery // 01</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4 group-hover:text-accent transition-colors">The V12 Renaissance</h3>
                    <p className="text-[12px] text-muted leading-relaxed font-medium">A philosophical exploration of why mechanical soul matters in an increasingly automated world.</p>
                 </div>
                 <div className="group cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden mb-10 border border-accent/5">
                       <img src="https://images.unsplash.com/photo-1614162692292-7ac56d73771e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.2s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-accent/40 uppercase block mb-6">Design // 02</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4 group-hover:text-accent transition-colors">Aerodynamic Poetry</h3>
                    <p className="text-[12px] text-muted leading-relaxed font-medium">Understanding the structural integrity and fluid dynamics of our signature carbon-fiber wings.</p>
                 </div>
                 <div className="group cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden mb-10 border border-accent/5">
                       <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.2s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-accent/40 uppercase block mb-6">Legacy // 03</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4 group-hover:text-accent transition-colors">The St. Moritz Archive</h3>
                    <p className="text-[12px] text-muted leading-relaxed font-medium">Inside our private annual gathering of the world's most significant automotive collectors.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Brand Statement / CTA Section */}
        <section className="relative h-[80vh] flex items-center justify-center bg-background overflow-hidden border-t border-accent/10 bg-texture">
          <div className="relative z-10 text-center px-6">
            <span className="text-[11px] font-bold tracking-[0.7em] text-accent uppercase block mb-12 italic">The Registry</span>
             <h2 className="text-editorial text-5xl sm:text-[10rem] font-bold mb-16 text-foreground leading-[0.8] tracking-tighter">
              BEGIN YOUR <br /> <span className="italic text-accent/[0.08]" style={{ WebkitTextStroke: '1px rgba(181, 154, 109, 0.4)' }}>RESERVATION.</span>
            </h2>
            <Link href="/contact" className="inline-block px-16 py-7 bg-accent text-background font-bold tracking-[0.4em] uppercase hover:bg-foreground hover:text-background transition-all duration-500 text-xs shadow-2xl shadow-accent/20">
              Request Exclusive Invitation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
