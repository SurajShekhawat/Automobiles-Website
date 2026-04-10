import Image from "next/image";

const vehicles = [
  {
    id: "01",
    name: "Apex Carbon",
    type: "Hypercar",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
    desc: "Mechanical purity refined for the next century of high-performance mobility.",
  },
  {
    id: "04",
    name: "Zenith V12",
    type: "Legendary Coupe",
    image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2070&auto=format&fit=crop",
    desc: "A glimpse into the next decade of Zenith design. Fluidity meets structural integrity.",
  },
];

export default function VehicleShowcase() {
  return (
    <section id="collection" className="bg-background py-32 sm:py-48 px-6 sm:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-32 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="reveal-mask mb-6">
              <span className="block text-[10px] font-bold tracking-[0.5em] text-accent uppercase">
                Curated Selection
              </span>
            </div>
            <h2 className="text-editorial text-5xl font-bold sm:text-7xl text-foreground">
              The <span className="italic text-accent/20">Permanent</span> <br /> Collection
            </h2>
          </div>
          <div className="animate-fade-up opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards] text-[10px] font-bold tracking-[0.4em] uppercase text-muted border-l border-accent/20 pl-8 hidden md:block">
            Automotive Art / Vol. I <br />
            Archive No. 42-B
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-32 md:grid-cols-2">
          {vehicles.map((v, i) => (
            <div 
              key={v.id} 
              className="group cursor-pointer animate-fade-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${0.2 + i * 0.2}s` }}
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-surface mb-10 border border-accent/5">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover parallax-img grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8 font-serif text-6xl font-bold text-accent opacity-[0.05] group-hover:opacity-20 transition-opacity duration-700">
                  {v.id}
                </div>
              </div>
              <div className="flex items-start justify-between border-b border-accent/10 pb-10 transition-colors group-hover:border-accent duration-500">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground mb-2 group-hover:text-accent transition-colors">{v.name}</h3>
                  <p className="text-[10px] text-accent font-bold uppercase tracking-[0.3em] mb-6">{v.type}</p>
                  <p className="text-sm leading-relaxed text-muted group-hover:text-foreground transition-colors">
                    {v.desc}
                  </p>
                </div>
                <button className="h-12 w-12 rounded-full border border-accent/20 flex items-center justify-center text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-background group-hover:rotate-45">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
