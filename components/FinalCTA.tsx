export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-foreground border-b-2 border-foreground relative overflow-hidden flex flex-col justify-center items-center text-center">

      {/* Background noir stripes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--background) 0, var(--background) 2px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }}></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

        <div className="bg-accent text-background px-4 py-1 mb-8 border-2 border-background font-bold tracking-widest uppercase text-sm transform -rotate-2">
          Join Today
        </div>

        <h2 className="text-6xl md:text-8xl font-serif font-black text-background mb-8 max-w-4xl tracking-tighter leading-none uppercase">
          Traditional Online Barber Academy
        </h2>

        <p className="text-xl text-background/80 font-medium text-balance max-w-2xl mb-14 lowercase tracking-widest border-y-2 border-background/20 py-4">
          Unlimited access to courses. Grind whenever you feel so.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a href="/plans" className="bg-background text-foreground border-2 border-background px-12 py-5 text-lg font-black uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-background transition-colors shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]">
            Start Learning
          </a>
          <a href="/text-manual" className="bg-transparent text-background border-2 border-background px-12 py-5 text-lg font-black uppercase tracking-widest hover:bg-background hover:text-foreground transition-all shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]">
            Browse Courses
          </a>
        </div>
      </div>
    </section>
  );
}
