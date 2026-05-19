import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ambassador Program | Blueprint Barber Academy',
  description: 'Join the Blueprint Ambassador Program — represent the craft, grow your brand, and become a key part of the global barber community. Exclusive perks, education access & more.',
};

const benefits = [
  {
    number: '01',
    title: 'Free Academy Access',
    description: 'Full access to all Blueprint courses, text manuals, and video content — for life. Stay ahead of the craft.',
  },
  {
    number: '02',
    title: 'Brand',
    description: 'Free from partnerships, we build our own brand. Your name. Your shop. Our global reach.',
  },
  {
    number: '03',
    title: 'Systematisations',
    description: 'Receive a system process that actually works is used. Service delivery, salesmanship, education and business.',
  },
  {
    number: '04',
    title: 'Revenue Share',
    description: 'Earn commission on every referral. Take most of it from hands-on classes. More barbers you bring to the academy - more you earn.',
  },
  {
    number: '05',
    title: 'Private Community',
    description: 'Join a closed network of top barbers worldwide. Share knowledge, collaborate, and grow together.',
  },
  {
    number: '06',
    title: 'Priority',
    description: 'First access to Blueprint workshops, masterclasses, and live events. Online work on-errors.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Access & Apply',
    description: 'Access the course and Fill out the application form with your contact information details and experience.',
  },
  {
    step: '02',
    title: 'Get Approved',
    description: 'We review applications and select ambassadors based on craft quality and community values.',
  },
  {
    step: '03',
    title: 'Represent',
    description: 'Start representing Blueprint in your country. Share the craft, grow the community, earn rewards.',
  },
];

export default function AmbassadorProgramPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header forceSolid />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-block bg-accent text-background px-4 py-1.5 mb-8 border-2 border-foreground text-xs font-black tracking-[0.3em] uppercase shadow-[4px_4px_0_0_#17193b]">
              Now Open
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[0.9] uppercase mb-6">
              Ambassador<br />Program
            </h1>

            <div className="w-20 h-1.5 bg-accent mb-8"></div>

            <p className="text-foreground/80 font-medium text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-balance">
              We&apos;re building a global network of barbers who believe in the craft.
              As a Blueprint Ambassador, you&apos;re not just joining a program — you&apos;re becoming
              the face of traditional barbering in your country.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/ambassador"
                className="inline-flex items-center justify-center bg-accent text-background border-2 border-foreground px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-primary transition-colors shadow-[6px_6px_0_0_#17193b]"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-72 h-72 border-[6px] border-foreground/5 -rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 border-[6px] border-accent/10 rotate-6 hidden lg:block"></div>
      </section>

      {/* Positioning Statement */}
      <section className="py-20 md:py-28 bg-foreground text-background border-y-4 border-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase mb-8">
              Longevity of<br />Traditional Barbering
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-6xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-accent font-black text-sm mt-0.5">1.</span>
                <p className="text-background/80 text-sm font-medium leading-relaxed">
                  Raise the ideals of the craft. To convey to all artisans a higher appreciation of themselves and their work;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-black text-sm mt-0.5">2.</span>
                <p className="text-background/80 text-sm font-medium leading-relaxed">
                  Increase the stages of service (promote uniform trade practices and establish a uniform fee for such services throughout the country);
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-black text-sm mt-0.5">3.</span>
                <p className="text-background/80 text-sm font-medium leading-relaxed">
                  Promote tolerance in the cooperation of barbers, hairdressers and cosmetologists, especially for the purpose of educating the public and establishing uniform, non-conflicting laws that regulate business;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-black text-sm mt-0.5">4.</span>
                <p className="text-background/80 text-sm font-medium leading-relaxed">
                  Promote technical craft education in order to maintain and gain public trust;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-black text-sm mt-0.5">5.</span>
                <p className="text-background/80 text-sm font-medium leading-relaxed">
                  Pour into the modern literary stream, a stream of reading in the name of modern barbering;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-black text-sm mt-0.5">6.</span>
                <p className="text-background/80 text-sm font-medium leading-relaxed">
                  To support the line of scientific and economic research for the benefit of the craft;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-black text-sm mt-0.5">7.</span>
                <p className="text-background/80 text-sm font-medium leading-relaxed">
                  Unite the craft through comprehensive nationwide mutual information and reliable craft news;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-black text-sm mt-0.5">8.</span>
                <p className="text-background/80 text-sm font-medium leading-relaxed">
                  To state and make it clear that these principles are not an agenda of selfish and commercial interests, but are a legitimate cog in the wheel of better things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-20 md:py-28 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">
              What You Get
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tighter leading-none uppercase">
              Benefits
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-foreground">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.number}
                className={`p-8 md:p-10 border-b-2 border-foreground ${index % 3 !== 2 ? 'lg:border-r-2' : ''
                  } ${index % 2 !== 1 ? 'md:border-r-2 lg:border-r-0' : 'md:border-r-0'} ${index % 3 !== 2 ? 'lg:border-r-2' : 'lg:border-r-0'
                  } hover:bg-foreground hover:text-background group transition-colors duration-300 last:border-b-0 ${index >= benefits.length - 3 ? 'lg:border-b-0' : ''
                  } ${index >= benefits.length - 2 ? 'md:border-b-0 lg:border-b-2' : ''}`}
              >
                <span className="text-5xl font-serif font-black text-accent/30 group-hover:text-accent/50 transition-colors block mb-4">
                  {benefit.number}
                </span>
                <h3 className="text-lg font-black uppercase tracking-wider mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-background border-t-4 border-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">
              3 Steps
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tighter leading-none uppercase">
              How It Works
            </h2>
            <div className="w-16 h-1 bg-accent mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-foreground/20"></div>
                )}
                <div className="border-2 border-foreground p-8 md:p-10 shadow-[6px_6px_0_0_#17193b] bg-background">
                  <div className="w-14 h-14 border-2 border-foreground flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#d92b3a]">
                    <span className="text-lg font-black text-foreground">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-wider mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-foreground text-background border-y-4 border-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'Top', label: 'Ambassadors' },
              { value: '190+', label: 'Countries' },
              { value: '12', label: 'Episodes' },
              { value: '∞', label: 'Lifetime Access' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-serif font-black text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-background/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Globe CTA Section */}
      <section className="py-20 md:py-28 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block">
            Global Network
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tighter leading-none uppercase mb-6">
            It's bigger than us
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-foreground/70 text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            Explore our interactive globe to see where Blueprint Ambassadors are already
            representing the craft — and apply to become one in your part of the world.
          </p>
          <a
            href="/ambassador"
            className="inline-flex items-center justify-center bg-foreground text-background border-2 border-foreground px-12 py-5 text-sm font-black uppercase tracking-widest hover:bg-accent hover:border-accent transition-colors shadow-[8px_8px_0_0_#d92b3a] hover:shadow-[10px_10px_0_0_#d92b3a] hover:-translate-y-0.5 transition-all duration-300"
          >
            🌍 &nbsp;Open Interactive Globe
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
