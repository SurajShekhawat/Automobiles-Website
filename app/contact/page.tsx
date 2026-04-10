import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
      <Navbar />
      <main className="flex-1 pt-32 sm:pt-40 px-6 sm:px-12 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form Content */}
          <div>
            <h1 className="text-editorial text-4xl sm:text-7xl font-bold mb-6 sm:mb-8 italic text-accent/[0.08]" style={{ WebkitTextStroke: '1px rgba(181, 154, 109, 0.4)' }}>Inquire</h1>
            <p className="text-muted max-w-md mb-12 sm:mb-16 text-xs sm:text-sm leading-relaxed font-medium">
              Admission to our inner circle is by reservation only. Please provide your details, and a dedicated curator will reach out to you within 48 hours.
            </p>

            <form className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 border-b border-accent/10 pb-4 group focus-within:border-accent transition-colors">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent/50 group-focus-within:text-accent transition-colors">FullName</label>
                <input type="text" className="bg-transparent outline-none py-2 text-lg font-serif placeholder:text-zinc-300 text-foreground" placeholder="Arthur Zenith" />
              </div>
              <div className="flex flex-col gap-2 border-b border-accent/10 pb-4 group focus-within:border-accent transition-colors">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent/50 group-focus-within:text-accent transition-colors">EmailAddress</label>
                <input type="email" className="bg-transparent outline-none py-2 text-lg font-serif placeholder:text-zinc-300 text-foreground" placeholder="arthur@zenith.com" />
              </div>
              <div className="flex flex-col gap-2 border-b border-accent/10 pb-4 group focus-within:border-accent transition-colors">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent/50 group-focus-within:text-accent transition-colors">SubjectOfInquiry</label>
                <select className="bg-transparent outline-none py-2 text-lg font-serif appearance-none text-foreground">
                  <option>Permanent Collection</option>
                  <option>Bespoke Commission</option>
                  <option>Private Event</option>
                </select>
              </div>
              
              <button className="mt-8 bg-foreground text-background px-12 py-5 font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all text-[11px] hover:scale-105 duration-500">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Details Content */}
          <div className="bg-surface p-12 lg:p-24 flex flex-col justify-between border border-accent/5 relative bg-texture">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-foreground mb-12 underline underline-offset-8 decoration-accent/30 decoration-2">Global Locations</h2>
              <div className="flex flex-col gap-12 text-[11px] font-bold tracking-widest uppercase text-muted">
                <div>
                  <h3 className="text-foreground mb-4">London HQ</h3>
                  <p className="leading-relaxed">Mayfair, 12 Old Burlington St. <br /> <span className="text-accent/40">Monday — Saturday, 10:00 — 18:00</span></p>
                </div>
                <div>
                  <h3 className="text-foreground mb-4">Milan Showroom</h3>
                  <p className="leading-relaxed">Via della Spiga, 26. <br /> <span className="text-accent/40">Private viewings only.</span></p>
                </div>
              </div>
            </div>
            
            <div className="mt-24">
               <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-foreground mb-4">Direct</h2>
               <p className="text-lg font-serif italic text-accent">concierge@zenith-automotive.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
