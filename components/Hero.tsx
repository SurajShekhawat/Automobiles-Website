import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background bg-texture pt-24 sm:pt-32">
      {/* Background Image with Heritage Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic Supercar"
          fill
          className="object-cover opacity-30 transition-transform duration-[30s] hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="reveal-mask mb-8">
          <span className="block text-[10px] font-bold tracking-[0.6em] text-accent uppercase [animation-delay:0.3s]">
            The Art of Performance
          </span>
        </div>
        
        <h1 className="text-editorial mb-12 text-6xl font-black sm:text-8xl md:text-[11rem] text-foreground leading-[0.8] tracking-tighter">
          <span className="reveal-mask block">
            <span className="block">ZENITH</span>
          </span>
          <span className="reveal-mask block italic text-surface border-text-accent" style={{ WebkitTextStroke: '1px rgba(181, 154, 109, 0.3)' }}>
            <span className="block [animation-delay:0.4s]">GALLERY</span>
          </span>
        </h1>

        <p className="max-w-md animate-fade-up font-sans text-xs sm:text-sm leading-relaxed text-muted opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
          A curated editorial of high-performance automotive history. Experience the intersection of period-correct machinery and modern heritage.
        </p>

        <div className="mt-20 animate-fade-up opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">
          <Link href="/inventory" className="group relative flex items-center gap-8 border border-accent/20 bg-surface/50 backdrop-blur-sm hover:bg-accent px-14 py-6 font-bold tracking-[0.4em] text-accent hover:text-background uppercase transition-all duration-700">
            View Collection
            <span className="block h-[1px] w-10 bg-accent group-hover:bg-background transition-all group-hover:w-20" />
          </Link>
        </div>
      </div>

      {/* Side Status */}
      <div className="absolute bottom-16 left-16 hidden flex-col gap-6 sm:flex">
        <div className="flex items-center gap-6 text-[9px] tracking-[0.5em] uppercase text-muted font-bold">
          <span className="h-[1px] w-16 bg-accent/30" />
          <span>EST. 1924 / LONDON HUB</span>
        </div>
      </div>
    </section>
  );
}
