import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CalendarDays, Scissors } from 'lucide-react';

type Service = { title: string; desc: string; img: string; img2?: string };

const services: Service[] = [
  {
    title: 'Haircut',
    desc: 'A tailored haircut designed specifically for your head shape, hair texture, and personal style. Finished with premium styling products and a neck shave.',
    img: '/service/haircut.png',
  },
  {
    title: 'Hot Towel Shave',
    desc: 'Face or Head - the traditional straight razor experience. Includes skin preparation, multiple hot towels, rich lather, and a soothing aftershave treatment.',
    img: '/service/shave1.png',
    img2: '/service/shave2.png',
  },
  {
    title: 'Beard Trim (+ Razor)',
    desc: 'Expert beard shaping and length reduction, finished with crisp, clean lines using a straight razor and tow towel.',
    img: '/service/beard.png',
  },
  {
    title: 'Hair + Beard + Razor',
    desc: 'The comprehensive grooming package. A precision haircut seamlessly blended with meticulous beard shaping and razor detailing.',
    img: '/service/hair_beard.png',
  },
  {
    title: 'Hair + Shave',
    desc: 'Our signature haircut combined with the relaxing ritual of a classic hot towel straight razor shave. The ultimate gentleman\'s reset.',
    img: '/service/hair_shave.png',
  }
];

export default function BookService() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b-2 border-foreground relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--foreground) 0, var(--foreground) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-block bg-foreground text-background px-4 py-1 mb-6 border-2 border-foreground shadow-[4px_4px_0_0_#d92b3a]">
              <p className="text-xs font-bold tracking-widest uppercase">Service Menu</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-8 uppercase tracking-tighter leading-none">
              Book a Service
            </h1>
            <p className="text-xl text-foreground/80 font-medium leading-relaxed max-w-2xl text-balance mb-12">
              Experience the highest standard of traditional barbering. Review our services below and secure your time in the chair.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a href="https://booksy.com/pl-pl/67284_the-hermit-barber-shop_barber-shop_3_warszawa/staffer/697755#ba_s=rwg" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-accent text-background border-2 border-foreground px-8 py-4 text-base font-black uppercase tracking-widest hover:bg-foreground transition-colors shadow-[6px_6px_0_0_#17193b]">
                <CalendarDays className="w-5 h-5" />
                Book Appointment
              </a>
              <a href="#" className="flex items-center justify-center gap-3 bg-background text-foreground border-2 border-foreground px-8 py-4 text-base font-black uppercase tracking-widest hover:bg-secondary transition-colors shadow-[6px_6px_0_0_#17193b]">
                <Scissors className="w-5 h-5" />
                Signature Haircuts Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {services.map((service, i) => (
              <div key={i} className="group relative bg-background border-2 border-foreground shadow-[4px_4px_0_0_#17193b] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#d92b3a] transition-all duration-300 flex flex-col h-full">

                <div className="p-4 flex flex-col flex-grow bg-background">
                  <h3 className="text-sm font-black font-serif text-foreground mb-2 uppercase tracking-wider leading-tight">
                    {service.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-accent mb-3"></div>
                  <p className="text-xs text-foreground/80 font-medium leading-relaxed mb-4 flex-grow">
                    {service.desc}
                  </p>

                  <a href="https://booksy.com/pl-pl/67284_the-hermit-barber-shop_barber-shop_3_warszawa/staffer/697755#ba_s=rwg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors group/btn">
                    <span className="border-b-2 border-foreground group-hover/btn:border-accent pb-0.5">Book This Service</span>
                    <span className="ml-1 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Service Image — small at bottom */}
                <div className="relative w-full h-28 border-t-2 border-foreground overflow-hidden bg-secondary">
                  {service.img2 ? (
                    // Collage: two images side by side
                    <div className="flex h-full w-full">
                      <div className="relative w-1/2 h-full border-r border-foreground/30">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                      </div>
                      <div className="relative w-1/2 h-full">
                        <Image
                          src={service.img2}
                          alt={service.title}
                          fill
                          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      <Footer />
    </main>
  );
}
