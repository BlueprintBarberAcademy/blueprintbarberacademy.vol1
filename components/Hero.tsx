'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const episodes = [
  "1 Episode: History of Barbering. Main principle",
  "2 Episode: Tools. Personal Kit",
  "3 Episode: Honing & Stropping. Exercises for Shaving",
  "4 Episode: Shaving. Home shaving",
  "5 Episode: Clipping. Self fading",
  "6 Episode: Trims. Self scissoring",
  "7 Episode: Hairdrying. Beard trim. Home Edition",
  "8 Episode: Cosmetics, Facial/Scalp treat.",
  "9 Episode: Sanitation. Chemistry. First aid kit",
  "10 Episode: Ethics & Salesmanship. In-Shop behavior",
  "11 Episode: Signature haircuts (+40 pcs.)",
  "Special: Business & Definitions of Craftsmanship (AMBASSADORS EXCLUSIVE)"
];

const ambassadors = [
  { image: '/ambassadors/poland.png', name: 'Podciety', country: 'Poland' },
  { image: '/ambassadors/mexico.png', name: 'Jordi', country: 'Mexico' },
  { image: '/ambassadors/portugal.png', name: 'Rufino', country: 'Portugal' },
  { image: '/ambassadors/netherlands.png', name: 'Dunkan', country: 'Netherlands' },
  { image: '/ambassadors/indonesia.png', name: 'Andi', country: 'Indonesia' },
  { image: '/ambassadors/usa.png', name: 'Mauricio', country: 'USA' },
  { image: '/ambassadors/australia.png', name: 'Vladyslav', country: 'Australia' },
  { image: '/ambassadors/south korea.png', name: 'Zay', country: 'South Korea' },
  { image: '/ambassadors/singaore.png', name: 'Dr. Faz', country: 'Singapore' },
  { image: '/ambassadors/sweden.png', name: 'Helena', country: 'Sweden' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % ambassadors.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">

      <div className="container mx-auto px-6 md:px-12 flex-grow flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20 relative z-10">

        {/* LEFT — Academy Info & CTAs */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl lg:max-w-lg xl:max-w-xl">

          {/* Pre-heading */}
          <div className="flex flex-col items-center lg:items-start mb-4 sm:mb-6">
            <span className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.3em] text-accent mb-2">
              Online
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground leading-none mb-6">
              Traditional Barber Academy
            </span>
          </div>

          {/* Heading (Explanation focus) */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 sm:mb-8 tracking-tighter leading-none uppercase text-balance">
            Dive into the origins of Barber Craft & Men&apos;s Care
          </h1>
          
          <div className="w-16 sm:w-24 h-1 sm:h-2 bg-accent mb-6 sm:mb-8"></div>

          {/* Target Audience */}
          <p className="text-foreground/80 font-medium text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 sm:mb-12 leading-relaxed text-balance">
            Designed for <strong className="text-foreground">experienced barbers</strong> elevating their craft, <strong className="text-foreground">beginners</strong> mastering the profession, and <strong className="text-foreground">everyday men</strong> cultivating the habit of self-care.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <a href="/plans" className="bg-primary text-background border-2 border-foreground px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors shadow-[4px_4px_0_0_#17193b]">
              Join Academy
            </a>
            <a href="#courses" className="bg-background border-2 border-foreground text-foreground px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors shadow-[4px_4px_0_0_#17193b]">
              Blueprint Contents
            </a>
          </div>


        </div>

        {/* RIGHT — Compact Ambassador Slideshow Card */}
        <div className="w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[320px] xl:max-w-[360px] flex-shrink-0 mb-16 lg:mb-0 flex flex-col gap-4">

          {/* Ambassador Program label — RED BLOCK (in flow, no overlap) */}
          <a href="/ambassador-program" className="group flex items-center justify-center gap-3 bg-accent border-2 border-foreground px-4 py-3 shadow-[4px_4px_0_0_#17193b] hover:shadow-[6px_6px_0_0_#17193b] hover:-translate-y-0.5 transition-all duration-200 w-full">
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-60"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-background"></span>
            </span>
            <span className="text-sm font-black uppercase tracking-[0.15em] text-background whitespace-nowrap">
              Ambassador Program OPEN!
            </span>
          </a>

          {/* Slideshow container */}
          <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-foreground shadow-[8px_8px_0_0_#17193b]">

            {/* Slides */}
            {ambassadors.map((ambassador, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <Image
                  src={ambassador.image}
                  alt={ambassador.name}
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                  sizes="360px"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
            ))}

            {/* Ambassador info — bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
              <p className="text-white text-lg font-serif font-black uppercase tracking-tight leading-none mb-1">
                {ambassadors[currentSlide].name}
              </p>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                📍 {ambassadors[currentSlide].country}
              </p>
            </div>


          </div>

          {/* Below card: indicators + CTA */}
          <div className="flex items-center justify-between mt-4">
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {ambassadors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-[3px] transition-all duration-300 ${index === currentSlide
                      ? 'w-5 bg-accent'
                      : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                    }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="w-full bg-background border-y-4 border-foreground py-4 flex items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex animate-marquee whitespace-nowrap min-w-full">
          {[...Array(4)].map((_, containerIndex) => (
            <div key={containerIndex} className="flex items-center shrink-0">
              {episodes.map((episode, index) => (
                <div key={`${containerIndex}-${index}`} className="flex items-center mx-8 gap-4">
                  <span className="text-sm font-bold text-foreground uppercase tracking-widest">{episode}</span>
                  <span className="text-accent text-xl ml-4">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
