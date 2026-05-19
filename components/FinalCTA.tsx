import Image from 'next/image';

const haircuts = [
  '/master/haircuts/flattop.png',
  '/master/haircuts/pompadour.png',
  '/master/haircuts/sidepart.png',
  '/master/haircuts/curlyflattop.png',
  '/master/haircuts/flattopboogie.png',
  '/master/haircuts/highntigh.png',
  '/master/haircuts/mullet.png',
  '/master/haircuts/psycho.png',
  '/master/haircuts/shaving.png',
];

const masterclasses = [
  '/master/classes/frankfurt.png',
  '/master/classes/greece.png',
  '/master/classes/jarocin.png',
  '/master/classes/kyiv1st.png',
  '/master/classes/kyivm15.png',
  '/master/classes/lublin.png',
  '/master/classes/misk.png',
  '/master/classes/rzesuw.png',
  '/master/classes/szamotuly.png',
  '/master/classes/szeczyn.png',
  '/master/classes/waw1on1.png',
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
        <p className="text-lg text-foreground/80 font-medium text-balance max-w-2xl lowercase tracking-widest">
          Thousands of students taught worldwide. Countless classic haircuts executed with precision. Don&apos;t just trust our words, look at our track record.
        </p>
      </div>

      {/* Marquee 1: Masterclasses */}
      <div className="w-full bg-foreground border-y-4 border-foreground py-2 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-20 transform -rotate-1 scale-105 mb-4">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--background) 0, var(--background) 2px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }}></div>
        <div className="flex animate-marquee whitespace-nowrap min-w-full">
          {[...Array(2)].map((_, containerIndex) => (
            <div key={containerIndex} className="flex items-center shrink-0">
              {masterclasses.map((src, index) => (
                <div key={`${containerIndex}-${index}`} className="relative h-48 w-72 mx-2 border-2 border-background shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] bg-secondary overflow-hidden">
                  <Image src={src} alt="Masterclass" fill unoptimized={true} className="object-cover grayscale hover:grayscale-0 transition-all duration-500" sizes="288px" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee 2: Haircuts */}
      <div className="w-full bg-background border-y-4 border-foreground py-2 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10 transform rotate-1 scale-105 mb-24">
        <div className="flex animate-marquee-reverse whitespace-nowrap min-w-full">
          {[...Array(2)].map((_, containerIndex) => (
            <div key={containerIndex} className="flex items-center shrink-0">
              {haircuts.map((src, index) => (
                <div key={`${containerIndex}-${index}`} className="relative h-64 w-48 mx-2 border-2 border-foreground shadow-[4px_4px_0_0_#17193b] bg-secondary overflow-hidden">
                  <Image src={src} alt="Haircut" fill unoptimized={true} className="object-cover grayscale hover:grayscale-0 transition-all duration-500" sizes="192px" />
                </div>
              ))}
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
