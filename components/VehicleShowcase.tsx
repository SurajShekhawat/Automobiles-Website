import Image from "next/image";

const vehicles = [
  {
    id: "01",
    name: "Apex Carbon",
    type: "Hypercar",
    image: "https://images.unsplash.com/photo-1544883617-640add7af993?q=80&w=2070&auto=format&fit=crop",
    desc: "A silent revolution in grand touring. Engineering perfected for the modern era of sustainable luxury.",
  },
  {
    id: "02",
    name: "Silver Arrow",
    type: "Luxury GT",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    desc: "The pinnacle of executive comfort. Where heritage meets future tech in a seamless dialogue.",
  },
  {
    id: "03",
    name: "Obsidian E",
    type: "Electric Heritage",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop",
    desc: "Mechanical purity refined for the next century of high-performance mobility.",
  },
  {
    id: "04",
    name: "Zenith V12",
    type: "Legendary Coupe",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    desc: "A timeless silhouette restored with surgical precision and modern materials.",
  },
  {
    id: "05",
    name: "Specter 9",
    type: "Track Spec",
    image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop",
    desc: "Aggressive aerodynamics married to an ultralight carbon chassis. The ultimate track weapon.",
  },
  {
    id: "06",
    name: "Aurora Concept",
    type: "Future GT",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    desc: "A glimpse into the next decade of Zenith design. Fluidity meets structural integrity.",
  },
];

import SmoothReveal, { RevealItem } from "./SmoothReveal";

export default function VehicleShowcase() {
  return (
    <section id="collection" className="bg-background py-32 sm:py-64 relative overflow-hidden bg-blueprint">
      <div className="mx-auto max-w-[1920px] px-6 sm:px-12 relative z-10">
        <SmoothReveal stagger>
          <RevealItem>
            <div className="mb-48">
              <div className="flex items-center gap-6 mb-12">
                <span className="text-dossier">Serial No. 001-006</span>
                <div className="editorial-line flex-1" />
              </div>
              <h2 className="text-industrial text-5xl sm:text-7xl text-foreground leading-[1] mb-12 underline underline-offset-[24px] decoration-accent/20">
                THE <br /> <span className="text-accent italic font-light outline-text">REGISTRY.</span>
              </h2>
            </div>
          </RevealItem>

          <RevealItem className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-black/10">
            {vehicles.map((v, i) => (
              <div
                key={v.id}
                className="group relative h-[800px] overflow-hidden border-r border-black/10 last:border-r-0 cursor-pointer"
              >
                {/* Clean Image Border removed background numbers causing clutter */}


                {/* Main Image */}
                <img
                  src={v.image}
                  alt={v.name}
                  className="absolute inset-0 h-full w-full object-cover contrast-125 saturate-[0.7] opacity-90 group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-110 transition-all duration-[1s]"
                />

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-end justify-between border-b border-black/10 pb-8 group-hover:border-accent transition-colors duration-500">
                      <div>
                        <span className="text-dossier block mb-2">{v.type}</span>
                        <h3 className="text-industrial text-4xl text-foreground group-hover:text-accent transition-colors duration-500">{v.name}</h3>
                      </div>
                      <span className="text-industrial text-2xl opacity-10 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                    </div>

                    <div className="h-0 group-hover:h-24 transition-all duration-700 overflow-hidden">
                      <p className="text-muted text-[14px] uppercase tracking-widest leading-relaxed">
                        {v.desc}
                      </p>
                      <div className="mt-6 flex gap-8">
                        <span className="text-dossier text-[14px] underline">Spec-Sheet // Arch</span>
                        <span className="text-dossier text-[14px] underline">Inquiry // Ref</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Indicator */}
                <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="h-10 w-10 border border-accent/40 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="h-1 w-1 bg-accent" />
                  </div>
                </div>
              </div>
            ))}
          </RevealItem>
        </SmoothReveal>
      </div>
    </section>
  );
}
