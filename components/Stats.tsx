import Image from 'next/image';

export default function Stats() {
  return (
    <section className="py-12 md:py-16 bg-background border-b-2 border-foreground relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col z-10 space-y-6">

          <h2 className="text-4xl md:text-5xl font-serif font-black text-foreground uppercase tracking-tighter leading-none">
            Scale without borders
          </h2>

          {/* Top Table: Course */}
          <div>
            <h2 className="text-sm font-serif font-black uppercase tracking-widest text-accent pb-1 border-b-2 border-foreground/15 mb-3">Course</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xl md:text-2xl font-serif font-black text-foreground mb-1">10<span className="text-accent">+</span></p>
                <p className="text-[10px] font-bold text-foreground uppercase tracking-widest border-l-2 border-foreground pl-2 lg:pl-3">Episodes</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-serif font-black text-foreground mb-1">40<span className="text-accent">+</span></p>
                <p className="text-[10px] font-bold text-foreground uppercase tracking-widest border-l-2 border-foreground pl-2 lg:pl-3">Practice hours</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-serif font-black text-foreground mb-1">300<span className="text-accent">+</span></p>
                <p className="text-[10px] font-bold text-foreground uppercase tracking-widest border-l-2 border-foreground pl-2 lg:pl-3">Lecture pages</p>
              </div>
            </div>
          </div>

          {/* Bottom Table: Master */}
          <div>
            <h2 className="text-sm font-serif font-black uppercase tracking-widest text-accent pb-1 border-b-2 border-foreground/15 mb-3">Master Barber</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-xl md:text-2xl font-serif font-black text-foreground mb-1">10<span className="text-accent">+</span></p>
                <p className="text-[10px] font-bold text-foreground uppercase tracking-widest border-l-2 border-foreground pl-2 lg:pl-3 leading-tight">Experience years</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-serif font-black text-foreground mb-1">100<span className="text-accent">+</span></p>
                <p className="text-[10px] font-bold text-foreground uppercase tracking-widest border-l-2 border-foreground pl-2 lg:pl-3 leading-tight">Classes</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-serif font-black text-foreground mb-1">3k<span className="text-accent">+</span></p>
                <p className="text-[10px] font-bold text-foreground uppercase tracking-widest border-l-2 border-foreground pl-2 lg:pl-3 leading-tight">Happy clients</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-serif font-black text-foreground mb-1">5k<span className="text-accent">+</span></p>
                <p className="text-[10px] font-bold text-foreground uppercase tracking-widest border-l-2 border-foreground pl-2 lg:pl-3 leading-tight">Inspired barbers</p>
              </div>
            </div>

            {/* Meet the Master Link */}
            <div className="mt-8">
              <a href="/educator" className="group inline-flex items-center gap-3 bg-foreground text-background border-2 border-foreground px-6 py-3 shadow-[6px_6px_0_0_#d92b3a] hover:bg-accent hover:border-accent hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#d92b3a] transition-all duration-300">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.15em]">
                  Meet the Master-Educator
                </span>
                <span className="text-base transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Content - Collage */}
        <div className="w-full lg:w-1/2 relative h-[320px] md:h-[400px] flex justify-center items-center">
          <div className="relative w-full max-w-sm h-full">
            {/* Image 1 */}
            <div className="absolute top-0 right-10 w-2/3 h-48 border-4 border-foreground shadow-[6px_6px_0_0_#17193b] z-10 transform translate-x-4 lg:translate-x-8 filter grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/photo1.png" alt="Barber portrait" fill className="object-cover object-top" />
            </div>
            {/* Image 2 */}
            <div className="absolute bottom-6 left-0 w-3/5 h-52 border-4 border-foreground shadow-[6px_6px_0_0_#17193b] z-20 filter grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/photo2.png" alt="Master class" fill className="object-cover" />
            </div>
            {/* Image 3 */}
            <div className="absolute top-1/3 right-0 w-1/2 h-40 border-4 border-background shadow-[6px_6px_0_0_#d92b3a] z-30 transform translate-x-8 translate-y-8 filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500">
              <Image src="/photo3.png" alt="Pompadour style" fill className="object-cover object-top" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
