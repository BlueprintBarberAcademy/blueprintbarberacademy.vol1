import Image from 'next/image';

const haircuts = [
  '/master/haircuts/curlyflattop.png',
  '/master/haircuts/flattopboogie.png',
  '/master/haircuts/highntigh.png',
  '/master/haircuts/mullet.png',
  '/master/haircuts/pompadour.png',
  '/master/haircuts/shaving.png',
  '/master/haircuts/sidepart.png',
  '/master/haircuts/tamplefade.png',
  '/master/haircuts/tapper.png',
];

const masterclasses = [
  '/master/classes/frankfurt.png',
  '/master/classes/jarocin.png',
  '/master/classes/szeczyn.png',
  '/master/classes/szshamo.png',
  '/master/classes/wawL.png',
  '/master/classes/wawN.png',
  '/master/classes/wawT.png',
];

export default function FinalCTA() {
  return (
    <section className="bg-background relative overflow-hidden flex flex-col justify-center items-center text-center pt-24 pb-0">

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mb-16">
        <div className="bg-foreground text-background px-4 py-1 mb-6 border-2 border-foreground font-bold tracking-widest uppercase text-sm transform rotate-1 shadow-[4px_4px_0_0_#d92b3a]">
          The Proof is in the Work
        </div>
        <h2 className="text-5xl md:text-7xl font-serif font-black text-foreground uppercase tracking-tighter leading-none mb-6">
          Real Results
        </h2>
        <p className="text-lg text-foreground/80 font-medium text-balance max-w-2xl tracking-widest">
          This course gives you step-by-step barbering systems used in barbershops — from clean haircuts to client retention.
        </p>
      </div>

      {/* Row 1: Masterclasses */}
      <div className="w-full bg-foreground border-y-4 border-foreground py-4 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-20 transform -rotate-1 scale-105 mb-4 overflow-x-auto snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--background) 0, var(--background) 2px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }}></div>
        <div className="flex items-center min-w-max px-8">
          {masterclasses.map((src, index) => (
            <div key={`mc-${index}`} className="relative h-56 mx-3 border-2 border-background shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] bg-secondary snap-center shrink-0 group">
              <img src={src} alt="Masterclass" loading="lazy" className="h-full w-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 block" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Haircuts */}
      <div className="w-full bg-background border-y-4 border-foreground py-4 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10 transform rotate-1 scale-105 mb-24 overflow-x-auto snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center min-w-max px-8">
          {haircuts.map((src, index) => (
            <div key={`hc-${index}`} className="relative h-72 mx-3 border-2 border-foreground shadow-[4px_4px_0_0_#17193b] bg-secondary snap-center shrink-0 group">
              <img src={src} alt="Haircut" loading="lazy" className="h-full w-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 block" />
            </div>
          ))}
        </div>
      </div>

      {/* Final Call to Action Box */}
      <div className="container mx-auto px-6 relative z-30 flex flex-col items-center pb-24">
        <div className="bg-foreground p-10 md:p-16 border-4 border-foreground shadow-[16px_16px_0_0_#d92b3a] w-full max-w-4xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--background) 0, var(--background) 2px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-serif font-black text-background mb-8 tracking-tighter leading-none uppercase text-center">
              Traditional Online Barber Academy
            </h3>
            <p className="text-xl text-background/80 font-medium text-balance max-w-2xl mb-10 lowercase tracking-widest border-y-2 border-background/20 py-4 text-center">
              Unlimited access to courses. Grind whenever you feel so.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
              <a href="/plans" className="bg-background text-foreground border-2 border-background px-12 py-5 text-lg font-black uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-background transition-colors shadow-[8px_8px_0_0_rgba(255,255,255,0.2)] text-center">
                Start Learning
              </a>
              <a href="/text-manual" className="bg-transparent text-background border-2 border-background px-12 py-5 text-lg font-black uppercase tracking-widest hover:bg-background hover:text-foreground transition-all shadow-[8px_8px_0_0_rgba(255,255,255,0.2)] text-center">
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
