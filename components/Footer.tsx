export default function Footer() {
  return (
    <footer className="bg-background border-t border-black/5 pt-24 pb-12 px-6 sm:px-12 relative overflow-hidden">
      <div className="bg-blueprint absolute inset-0 opacity-10 pointer-events-none" />
      
      <div className="mx-auto max-w-[1920px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 pb-24 border-b border-black/5">
          <div className="col-span-1 lg:col-span-1">
             <div className="text-industrial text-4xl text-foreground mb-8">ZENITH</div>
             <p className="text-muted text-[11px] uppercase tracking-widest leading-relaxed max-w-[200px]">
               Custodian of automotive performance and mechanical heritage since 1924.
             </p>
          </div>
          
          <div>
             <span className="text-dossier block mb-8 underline underline-offset-8">Global Registry</span>
             <div className="flex flex-col gap-4 text-[11px] font-bold tracking-[0.2em] transition-colors">
                <a href="/inventory" className="text-muted hover:text-accent uppercase">Showcase</a>
                <a href="/about" className="text-muted hover:text-accent uppercase">Heritage</a>
                <a href="/contact" className="text-muted hover:text-accent uppercase">Inquiry</a>
             </div>
          </div>

          <div>
             <span className="text-dossier block mb-8 underline underline-offset-8">Ateliers</span>
             <div className="space-y-6 text-[11px] font-bold tracking-widest text-muted uppercase">
                <p>Mayfair, London</p>
                <p>Brera, Milan</p>
                <p>Aoyama, Tokyo</p>
             </div>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-between">
             <div className="text-right">
                <span className="text-industrial text-4xl text-black/[0.03]">SYS.02</span>
             </div>
             <div className="flex gap-8">
                {['IG', 'TW', 'YT'].map(social => (
                  <a key={social} href="#" className="text-dossier hover:text-accent transition-colors">[{social}]</a>
                ))}
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <span className="text-dossier text-[9px] opacity-40">© 2026 ZENITH ARCHIVE. ALL COMMISSIONS RESERVED.</span>
           <div className="flex gap-12">
              <span className="text-dossier text-[9px] opacity-40">Privacy Protocol</span>
              <span className="text-dossier text-[9px] opacity-40">Terms of Acquisition</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
