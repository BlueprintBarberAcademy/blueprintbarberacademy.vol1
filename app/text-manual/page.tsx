'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import EpisodeModal, { episodeContents } from '@/components/EpisodeModal';

const courses = [
  { title: "1. History of Barbering", image: "/episodes/episode1.png", educator: "Master Barber" },
  { title: "2. Tools", image: "/episodes/episode2.png", educator: "Master Barber" },
  { title: "3. Honing & Stropping", image: "/episodes/episode3.png", educator: "Master Barber" },
  { title: "4. Shaving", image: "/episodes/episode4.png", educator: "Master Barber" },
  { title: "5. Clipping", image: "/episodes/episode5.png", educator: "Master Barber" },
  { title: "6. Trims", image: "/episodes/episode6.png", educator: "Master Barber" },
  { title: "7. Drying. Beard trim. Home Edition", image: "/episodes/episode7.png", educator: "Master Barber" },
  { title: "8. Cosmetics, Facial/Scalp treatment", image: "/episodes/episode8.png", educator: "Master Barber" },
  { title: "9. Sanitation. Chemistry. First aid kit", image: "/episodes/episode9.png", educator: "Master Barber" },
  { title: "10. Ethics & Salesmanship. In-Shop behavior", image: "/episodes/episode10.png", educator: "Master Barber" },
  { title: "11. Signature haircuts", subtitle: "(+40 pcs.)", image: "/episodes/episode11.png", educator: "Master Barber" },
  { title: "Special: Business & Definitions of craftsmanship", image: "/episodes/special.png", educator: "Master Barber" }
];

export default function TextManual() {
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background pt-24">
      <Header />

      <section className="py-16 md:py-24 border-b-2 border-foreground relative overflow-hidden bg-secondary">
        {/* Background abstract noir lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--foreground) 0, var(--foreground) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-foreground text-background px-4 py-1 mb-6 border-2 border-foreground shadow-[4px_4px_0_0_#d92b3a]">
              <p className="text-xs font-bold tracking-widest uppercase">Education</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-6 uppercase tracking-tighter leading-none">
              Text Book Manual
            </h1>
            <p className="text-xl text-foreground/80 font-medium leading-relaxed max-w-2xl text-balance mb-8">
              Dive deep into the fundamental principles of barbering. Our comprehensive text manual covers everything from the history of the craft to advanced techniques and business acumen.
            </p>
            <a 
              href="/plans" 
              className="inline-block bg-accent border-2 border-foreground text-background px-8 py-4 font-bold uppercase tracking-widest text-center hover:bg-foreground hover:text-background transition-colors shadow-[4px_4px_0_0_#17193b] hover:shadow-[6px_6px_0_0_#d92b3a]"
            >
              Join Course
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, i) => (
              <button
                key={i}
                onClick={() => setSelectedEpisode(i)}
                className="group relative bg-background border-2 border-foreground shadow-[6px_6px_0_0_#17193b] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#d92b3a] transition-all duration-300 p-4 pb-8 flex flex-col text-left"
              >

                <div className="relative aspect-[4/5] w-full border-2 border-foreground overflow-hidden mb-6 bg-secondary">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover filter grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />

                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/20">
                    <div className="w-16 h-16 rounded-full border-2 border-background flex justify-center items-center bg-accent shadow-lg">
                      <BookOpen className="w-6 h-6 text-background" strokeWidth={2} />
                    </div>
                  </div>


                </div>

                <h3 className="text-foreground font-black font-serif text-xl leading-tight uppercase mb-2">
                  {course.title}
                  {course.subtitle && <span className="block text-sm font-bold mt-1 tracking-wider text-accent">{course.subtitle}</span>}
                </h3>

                <div className="w-12 h-1 bg-foreground mt-auto group-hover:bg-accent transition-colors"></div>
              </button>
            ))}
          </div>

        </div>
      </section>

      <EpisodeModal
        episode={selectedEpisode !== null ? episodeContents[selectedEpisode] : null}
        onClose={() => setSelectedEpisode(null)}
      />

      <Footer />
    </main>
  );
}
