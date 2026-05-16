'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Play } from 'lucide-react';
import EpisodeModal, { episodeContents } from '@/components/EpisodeModal';

const courses = [
  { title: "1. History of Barbering. Main principle", image: "/episodes/episode1.png", duration: "30 min", educator: "Master Barber" },
  { title: "2. Tools. Personal Kit", image: "/episodes/episode2.png", duration: "50 min", educator: "Master Barber" },
  { title: "3. Honing & Stropping. Exercises for Shaving", image: "/episodes/episode3.png", duration: "30 min", educator: "Master Barber" },
  { title: "4. Shaving. Home shaving", image: "/episodes/episode4.png", duration: "1h 15m", educator: "Master Barber" },
  { title: "5. Clipping. Self fading", image: "/episodes/episode5.png", duration: "1h 05m", educator: "Master Barber" },
  { title: "6. Trims. Self scissoring", image: "/episodes/episode6.png", duration: "60 min", educator: "Master Barber" },
  { title: "7. Hairdrying. Beard trim. Home Edition", image: "/episodes/episode7.png", duration: "45 min", educator: "Master Barber" },
  { title: "8. Cosmetics, Facial/Scalp treatment", image: "/episodes/episode8.png", duration: "30 min", educator: "Master Barber" },
  { title: "9. Sanitation. Chemistry. First aid kit", image: "/episodes/episode9.png", duration: "20 min", educator: "Master Barber" },
  { title: "10. Ethics & Salesmanship. In-Shop behavior", image: "/episodes/episode10.png", duration: "20 min", educator: "Master Barber" },
  { title: "11. Signature haircuts", subtitle: "(+40 pcs.)", image: "/episodes/episode11.png", duration: "3h 20m", educator: "Master Barber" },
  { title: "Special: Business & Definitions of Craftsmanship", image: "/episodes/spesial.png", duration: "25 min", educator: "Master Barber" }
];

export default function VideoCourse() {
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-foreground text-background pt-24">
      {/* We force the header to have a solid background immediately so it's visible on this dark page */}
      <Header forceSolid={true} />
      
      <section className="py-16 md:py-24 border-b-2 border-background/20 relative overflow-hidden bg-foreground">
        {/* Background abstract noir lines - inverted for dark theme */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--background) 0, var(--background) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-block bg-accent text-background px-4 py-1 mb-6 border-2 border-background shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]">
              <p className="text-xs font-bold tracking-widest uppercase">Video Production</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-background mb-6 uppercase tracking-tighter leading-none">
              Video Course
            </h1>
            <p className="text-xl text-background/80 font-medium leading-relaxed max-w-2xl text-balance mb-8">
              Immerse yourself in high-quality video lessons. Watch our master educators demonstrate every technique step-by-step in real time.
            </p>
            <a 
              href="/plans" 
              className="inline-block bg-accent border-2 border-background text-background px-8 py-4 font-bold uppercase tracking-widest text-center hover:bg-background hover:text-foreground transition-colors shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0_0_#d92b3a]"
            >
              Join Course
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground relative">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, i) => (
              <button
                key={i}
                onClick={() => setSelectedEpisode(i)}
                className="group relative bg-foreground border-2 border-background shadow-[6px_6px_0_0_rgba(255,255,255,0.1)] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#d92b3a] transition-all duration-300 p-4 flex flex-col text-left"
              >

                {/* 16:9 Aspect Ratio for Video Thumbnails */}
                <div className="relative aspect-video w-full border-2 border-background overflow-hidden mb-6 bg-secondary">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover filter grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />

                  {/* Play icon overlay - always slightly visible, full on hover */}
                  <div className="absolute inset-0 flex justify-center items-center bg-foreground/40 group-hover:bg-foreground/20 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full border-2 border-background flex justify-center items-center bg-accent shadow-[0_0_20px_rgba(217,43,58,0.5)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-background translate-x-0.5 fill-background" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-foreground text-background px-2 py-1 text-[10px] font-bold tracking-widest border border-background">
                    {course.duration}
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="text-background font-black font-serif text-lg leading-tight uppercase">
                      {course.title}
                      {course.subtitle && <span className="block text-sm font-bold mt-1 tracking-wider text-accent">{course.subtitle}</span>}
                    </h3>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-background/20 flex justify-end items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-background transition-colors">
                      Watch Now →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      <EpisodeModal
        episode={selectedEpisode !== null ? episodeContents[selectedEpisode] : null}
        onClose={() => setSelectedEpisode(null)}
        variant="dark"
      />

      <Footer />
    </main>
  );
}
