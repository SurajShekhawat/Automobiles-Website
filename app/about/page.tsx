import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 pt-32 sm:pt-40 pb-32">
        {/* Hero Section */}
        <section className="px-6 sm:px-12 mb-32">
          <div className="max-w-7xl mx-auto border-b border-accent/10 pb-16 sm:pb-24">
            <h1 className="text-editorial text-4xl sm:text-8xl font-bold text-foreground mb-8 sm:mb-12">
              Heritage <br className="hidden sm:block" /> <span className="italic text-accent/20" style={{ WebkitTextStroke: '1px rgba(181, 154, 109, 0.4)' }}>& History</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-start">
              <p className="text-muted text-sm sm:text-lg leading-relaxed font-medium">
                Founded in London in 1924, Zenith began as a small boutique specializing in the preservation of European Grand Tourers. Over a century, we have evolved into a global authority on automotive excellence, curating a living collection of the most significant machines ever built.
              </p>
              <div className="text-muted text-xs sm:text-sm italic border-l border-accent/20 pl-6 sm:pl-8">
                "We don't just sell cars; we preserve the physical manifestation of human ambition."
                <span className="block mt-4 font-bold uppercase not-italic text-foreground tracking-widest text-[9px] sm:text-[10px]">Founder, Arthur Zenith</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-surface py-32 px-6 sm:px-12 bg-texture">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-6 underline underline-offset-8">01 / Selection</h3>
              <p className="text-xs text-muted leading-relaxed font-medium">Only 12 vehicles are admitted to our permanent collection each year. Scarcity is our standard.</p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-6 underline underline-offset-8">02 / Purity</h3>
              <p className="text-xs text-muted leading-relaxed font-medium">We focus on machines that represent a pure mechanical or technological breakthrough.</p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-6 underline underline-offset-8">03 / Legacy</h3>
              <p className="text-xs text-muted leading-relaxed font-medium">Our relationship with clients spans generations, ensuring the legacy of each vehicle continues.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
