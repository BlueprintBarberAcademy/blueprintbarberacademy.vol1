'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import EpisodeModal, { episodeContents } from './EpisodeModal';

const courses = [
  { title: "1. History of Barbering. Main principle", image: "/episodes/episode1.png" },
  { title: "2. Tools. Personal Kit", image: "/episodes/episode2.png" },
  { title: "3. Honing & Stropping. Exercises for Shaving", image: "/episodes/episode3.png" },
  { title: "4. Shaving. Home shaving", image: "/episodes/episode4.png" },
  { title: "5. Clipping. Self fading", image: "/episodes/episode5.png" },
  { title: "6. Trims. Self scissoring", image: "/episodes/episode6.png" },
  { title: "7. Hairdrying. Beard trim. Home Edition", image: "/episodes/episode7.png" },
  { title: "8. Cosmetics, Facial/Scalp treatment", image: "/episodes/episode8.png" },
  { title: "9. Sanitation. Chemistry. First aid kit", image: "/episodes/episode9.png" },
  { title: "10. Ethics & Salesmanship. In-Shop behavior", image: "/episodes/episode10.png" },
  { title: "11. Signature haircuts", subtitle: "(+40 pcs.)", image: "/episodes/episode11.png" },
  { title: "Special: Business & Definitions of Craftsmanship", image: "/episodes/spesial.png", isSpecial: true }
];

export default function CourseShowcase() {
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);

  return (
    <section id="courses" className="py-24 md:py-32 bg-background border-b-2 border-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b-4 border-foreground pb-6">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-serif font-black text-foreground mb-4 uppercase tracking-tighter leading-none">Library</h2>
            <p className="text-lg text-foreground/80 font-bold uppercase tracking-widest pl-2 border-l-2 border-accent">Explore every important part of the craft</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {courses.map((course, i) => (
            <button
              key={i}
              onClick={() => setSelectedEpisode(i)}
              className="group relative bg-background border-2 border-foreground shadow-[6px_6px_0_0_#17193b] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#d92b3a] transition-all duration-300 p-3 pt-3 pb-6 flex flex-col text-left"
            >

              <div className="relative aspect-[4/3] w-full border-2 border-foreground overflow-hidden mb-4 bg-secondary">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover filter grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Play icon overlay */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/20">
                  <div className="w-12 h-12 rounded-full border-2 border-background flex justify-center items-center bg-accent">
                    <Play className="w-5 h-5 text-background translate-x-0.5" strokeWidth={3} />
                  </div>
                </div>
              </div>

              <h3 className="text-foreground font-black font-serif text-lg leading-tight uppercase text-center mt-2">
                {course.title}
                {course.subtitle && <span className="block text-sm font-bold mt-1 tracking-wider">{course.subtitle}</span>}
                {course.isSpecial && (
                  <span className="block mt-3 text-[10px] bg-accent text-background border-2 border-foreground px-2 py-1 tracking-widest mx-auto w-fit">
                    AMBASSADORS EXCLUSIVE
                  </span>
                )}
              </h3>
              <div className="w-8 h-1 bg-foreground mx-auto mt-3 group-hover:bg-accent transition-colors"></div>
            </button>
          ))}
        </div>

      </div>

      <EpisodeModal
        episode={selectedEpisode !== null ? episodeContents[selectedEpisode] : null}
        onClose={() => setSelectedEpisode(null)}
      />
    </section>
  );
}
