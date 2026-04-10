import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inventory = [
  { id: "01", name: "Apex Carbon", type: "Hypercar", year: "2026", image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop" },
  { id: "02", name: "Silver Arrow", type: "GT", year: "2025", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" },
  { id: "03", name: "Obsidian E", type: "Electric Sedan", year: "2026", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop" },
  { id: "04", name: "Zenith V12", type: "Heritage", year: "1964", image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=2070&auto=format&fit=crop" },
];

export default function InventoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-background film-grain">
      <Navbar />
      <main className="flex-1 pt-32 sm:pt-48 px-6 sm:px-12 pb-32 relative z-10 bg-texture">
        <header className="max-w-7xl mx-auto mb-24 sm:mb-32">
          <div className="reveal-mask mb-8">
            <span className="block text-[10px] font-bold tracking-[0.5em] text-accent uppercase">
              The Registry / Archive
            </span>
          </div>
          <h1 className="text-editorial text-5xl sm:text-9xl font-bold text-foreground mb-10 leading-[0.8] tracking-tighter">
            The <span className="italic text-accent/[0.08]" style={{ WebkitTextStroke: '1px rgba(181, 154, 109, 0.4)' }}>Collection</span>
          </h1>
          <p className="text-muted max-w-2xl text-xs sm:text-sm leading-relaxed font-medium">
            An exhaustive exploration of automotive excellence across a century of precision engineering. Our registry represents the pinnacle of performance, rarity, and material design.
          </p>
        </header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {inventory.map((car) => (
            <div key={car.id} className="group cursor-pointer animate-fade-up">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface border border-accent/5">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-8 right-8 text-accent text-[10px] font-bold tracking-[0.5em] uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
                  View Detail
                </div>
              </div>
              <div className="mt-10 flex justify-between items-end border-b border-accent/10 pb-10 transition-colors group-hover:border-accent">
                <div>
                  <span className="text-[10px] text-accent/40 font-bold tracking-[0.4em] uppercase block mb-3">{car.year} // {car.type}</span>
                  <h3 className="text-3xl font-bold tracking-tighter text-foreground uppercase group-hover:text-accent transition-colors">{car.name}</h3>
                </div>
                <button className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent hover:text-foreground transition-all duration-300">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
