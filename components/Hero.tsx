'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const episodes = [
  "1 Episode: History of Barbering",
  "2 Episode: Tools",
  "3 Episode: Honing & Stropping",
  "4 Episode: Shaving",
  "5 Episode: Clipping",
  "6 Episode: Trims",
  "7 Episode: Drying. Beard trim. Home Edition",
  "8 Episode: Cosmetics, Facial/Scalp treatment",
  "9 Episode: Sanitation. Chemistry. First aid kit",
  "10 Episode: Ethics & Salesmanship. In-Shop behavior",
  "11 Episode: Signature haircuts",
  "Special Episode: Business & Definitions of craftsmanship"
];

const ambassadors = [
  { image: '/ambassadors/poland.png', name: 'Mikolaj M.', country: 'Poland' },
  { image: '/ambassadors/mexico.png', name: 'Jordi', country: 'Mexico' },
  { image: '/ambassadors/portugal.png', name: 'Joao R.', country: 'Portugal' },
  { image: '/ambassadors/netherlands.png', name: 'Duncan B.', country: 'Netherlands' },
  { image: '/ambassadors/indonesia.png', name: 'Andi F.', country: 'Indonesia' },
  { image: '/ambassadors/usa.png', name: 'Mauricio M.', country: 'USA' },
  { image: '/ambassadors/australia.png', name: 'Vladyslav S.', country: 'Australia' },
  { image: '/ambassadors/south korea.png', name: 'Zay', country: 'South Korea' },
  { image: '/ambassadors/singapore.png', name: 'Dr.Faz', country: 'Singapore' },
  { image: '/ambassadors/argentina.png', name: 'Ivan-David G.', country: 'Argentina' },
  { image: '/ambassadors/brasil.png', name: 'Juliano N.', country: 'Brazil' },
  { image: '/ambassadors/greece.png', name: 'Outsiders Bbs.', country: 'Greece' },
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
          <div className="flex flex-col items-center lg:items-start mb-4 sm:mb-5">
            <span className="text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-accent mb-1">
              Online
            </span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight text-foreground leading-none mb-4">
              Traditional Barber Academy
            </span>
          </div>

          {/* Heading (Explanation focus) */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-foreground mb-4 sm:mb-6 tracking-tighter leading-tight uppercase text-balance">
            Master the Full barber profession Online - from tools to salesmanship
          </h1>

          <div className="w-16 sm:w-24 h-1 bg-accent mb-4 sm:mb-6"></div>

          {/* Target Audience */}
          <p className="text-foreground/80 font-medium text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed text-balance">
            Designed for <strong className="text-foreground">Experienced barbers</strong> elevating their craft, <strong className="text-foreground">Beginners</strong> mastering the profession, and <strong className="text-foreground">Men</strong> developing the habit of self-care.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6 lg:mb-0">
            <a href="/plans" className="bg-primary text-background border-2 border-foreground px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors shadow-[4px_4px_0_0_#17193b]">
              Join Academy
            </a>
            <a href="#courses" className="bg-background border-2 border-foreground text-foreground px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors shadow-[4px_4px_0_0_#17193b]">
              Blueprint Contents
            </a>
          </div>


        </div>

        {/* RIGHT — Compact Ambassador Slideshow Card */}
        <div className="w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[320px] xl:max-w-[360px] flex-shrink-0 mb-16 lg:mb-0 flex flex-col gap-4">

          {/* Button Wrapper with Bouncing Arrow */}
          <div className="w-full flex flex-col items-center gap-2 mt-[-10px]">
            {/* Bouncing Arrow */}
            <div className="animate-bounce text-accent flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-1">Click Here</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Ambassador Program label — RED BLOCK */}
            <a href="/ambassador-program" className="group flex items-center justify-center gap-3 bg-accent border-2 border-foreground px-4 py-3 shadow-[4px_4px_0_0_#17193b] hover:shadow-[6px_6px_0_0_#17193b] hover:-translate-y-0.5 transition-all duration-200 w-full">
              <span className="text-sm font-black uppercase tracking-[0.15em] text-background whitespace-nowrap">
                Ambassador Program OPEN
              </span>
            </a>
          </div>

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
