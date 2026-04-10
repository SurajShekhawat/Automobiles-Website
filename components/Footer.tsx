export default function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-background pt-24 pb-12 px-6 sm:px-12 relative overflow-hidden bg-texture">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <h3 className="font-serif text-3xl font-bold tracking-tighter text-accent">ZENITH</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted font-sans font-medium">
              Founded in 1924. Curators of the world's finest automotive engineering and digital heritage.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16 sm:grid-cols-3">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-foreground uppercase mb-6">Heritage</h4>
              <ul className="flex flex-col gap-3 text-[11px] font-bold tracking-widest uppercase text-muted">
                <li><a href="/about" className="hover:text-accent transition-colors">Our Story</a></li>
                <li><a href="/about" className="hover:text-accent transition-colors">Craftsmanship</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-foreground uppercase mb-6">Service</h4>
              <ul className="flex flex-col gap-3 text-[11px] font-bold tracking-widest uppercase text-muted">
                <li><a href="/contact" className="hover:text-accent transition-colors">Bespoke</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Concierge</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-foreground uppercase mb-6">Connect</h4>
              <ul className="flex flex-col gap-3 text-[11px] font-bold tracking-widest uppercase text-muted">
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-accent/10 pt-8 sm:flex-row">
          <p className="text-[9px] tracking-[0.3em] text-muted uppercase font-bold">
            © 2026 ZENITH AUTOMOTIVE. LONDON / MILAN / TOKYO.
          </p>
          <div className="flex gap-8 text-[9px] tracking-[0.3em] text-muted uppercase font-bold">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
