import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Educator() {
  return (
    <main className="min-h-screen bg-background pt-24 flex flex-col">
      <Header />

      <section className="flex-grow py-16 md:py-32 relative bg-background overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          <div className="w-full lg:w-1/2 relative aspect-[3/4] border-4 border-foreground shadow-[16px_16px_0_0_#17193b] bg-secondary group">
            <Image
              src="/photo4.png"
              alt="Mykyta Vemhryn"
              fill
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 p-2 md:p-4"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent border-4 border-foreground z-[-1]"></div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="inline-block bg-accent text-background px-4 py-1 mb-6 border-2 border-foreground self-start shadow-[4px_4px_0_0_#17193b]">
              <p className="text-xs font-bold tracking-widest uppercase">Master Educator</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-4 uppercase tracking-tighter leading-none">
              Mykyta V.
            </h1>

            <p className="text-lg md:text-xl font-bold text-foreground/60 tracking-widest uppercase mb-8">
              Dr. Frankenstein
            </p>

            <div className="w-24 h-2 bg-foreground mb-8"></div>

            <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-6 text-balance">
              With 10+ years of experience mastering the traditional craft of barbering, Mykyta brings a highly precise and systematized approach to men&apos;s grooming. His methodology strips away the noise, focusing entirely on flawless technique and consistent, superior results.
            </p>
            <div className="bg-secondary p-6 border-l-4 border-accent mb-12 shadow-[4px_4px_0_0_#17193b]">
              <p className="text-foreground font-black uppercase tracking-widest text-sm mb-3">
                Featured in GQ Poland
              </p>
              <p className="text-foreground/80 italic text-base mb-4 leading-relaxed">
                &quot;I spoke about how to shave properly with Mykyta V., an experienced barber from The Hermit Barber Shop in Warsaw... He honed his skills all over the world to now take care of men&apos;s hair and beards in the oldest barber shop in Poland.&quot;
              </p>
              <a
                href="https://gq.pl/self-care/uroda/sztuka-golenia-zarostu-barber-tlumaczy-jak-robic-to-prawidlowo-i-uniknac-podraznien"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent font-bold text-sm tracking-widest uppercase hover:text-foreground transition-colors border-b-2 border-accent hover:border-foreground pb-1"
              >
                Read Full Article →
              </a>
            </div>
            <a href="/plans" className="bg-foreground text-background border-2 border-foreground px-10 py-5 text-lg font-black uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-background transition-colors self-start shadow-[8px_8px_0_0_#d92b3a]">
              Learn From the Master
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
