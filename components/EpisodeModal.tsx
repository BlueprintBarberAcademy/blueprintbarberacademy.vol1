'use client';

import { X, BookOpen, Clock } from 'lucide-react';

export interface EpisodeContent {
  title: string;
  subtitle?: string;
  pages: number;
  minutes: number;
  topics: string[];
  isSpecial?: boolean;
}

export const episodeContents: EpisodeContent[] = [
  {
    title: "1. History of Barbering. Main principle",
    pages: 31,
    minutes: 30,
    topics: [
      "Ancient, medieval and modern barbering",
      "Shaving head and beard",
      "Clergy assistants",
      "The first hairdressing organization",
      "The first school of surgery",
      "Barber as a surgeon",
      "The origin of the barber's Pole",
      "The collapse of the Alliance",
      "The decline of the profession",
      "Trend",
      "Principles of the Barbers Association",
      "Appearance, try everything that attracts you to find your perfect personal set of tools",
    ],
  },
  {
    title: "2. Tools. Personal Kit",
    pages: 49,
    minutes: 50,
    topics: [
      "Razor",
      "Shavette",
      "T-blade",
      "Foil Shaver",
      "Hone / Whetstone",
      "Strop / Belt",
      "Scissors / Shears",
      "Thinners / Blenders",
      "Mustache scissors",
      "Clipper",
      "Trimmer",
      "Hair Dryer",
      "Brush",
      "Comb",
      "Flattoper",
      "Picker",
      "Neck Dust",
      "Shaving Brush & Mug",
      "Supporting Tools",
      "Leather Roll & Kitbag",
      "Cape & Neck Strips",
      "Uniform",
    ],
  },
  {
    title: "3. Honing & Stropping. Exercises for Shaving",
    pages: 16,
    minutes: 30,
    topics: [
      "Razor Preparation",
      "Honing",
      "Stropping",
      "Exercise for Shaving",
      "Supporting Hand",
      "Before Shaving",
    ],
  },
  {
    title: "4. Shaving. Home shaving",
    pages: 40,
    minutes: 75,
    topics: [
      "Overall: Shaving",
      "Face Shaving",
      "Head Shaving",
      "Outlines Shaving",
      "Home Shaving — Face",
      "Home Shaving — Head",
    ],
  },
  {
    title: "5. Clipping. Self fading",
    pages: 45,
    minutes: 65,
    topics: [
      "Scalp",
      "How to use a clipper",
      "Position at the Chair",
      "Axiom",
      "Contour",
      "Short Contour",
      "Half Crown",
      "Full Crown",
      "Medium Contour",
      "Curly Hair",
      "Self fading",
    ],
  },
  {
    title: "6. Trims. Self scissoring",
    pages: 40,
    minutes: 60,
    topics: [
      "Holy Trinity",
      "Sectioning",
      "Shape",
      "Scissors over the comb",
      "Axiom",
      "Low Contour",
      "Short trim",
      "Medium trim",
      "Long trim",
      "Children & Ladies",
      "Self trim",
    ],
  },
  {
    title: "7. Hairdrying. Beard trim. Home Edition",
    pages: 40,
    minutes: 45,
    topics: [
      "Hairdrying — How to hold",
      "Hairdrying — How to use",
      "Hairdrying — 3 Directions",
      "Beard trim — Shapes",
      "Beard trim — Clipper over the comb",
      "Beard trim — Razor outlines",
      "Shampoo",
      "Home Edition — Drying",
      "Home Edition — Beard trim",
      "Home Edition — Shampoo",
    ],
  },
  {
    title: "8. Cosmetics, Facial/Scalp treatment",
    pages: 20,
    minutes: 30,
    topics: [
      "Scalp — Shampoo",
      "Scalp — Conditioner",
      "Scalp — Lotion",
      "Hair — Tonic",
      "Hair — Pomade",
      "Face — Daily Cream",
      "Face — Shaving",
      "Face — Beard care",
    ],
  },
  {
    title: "9. Sanitation. Chemistry. First aid kit",
    pages: 15,
    minutes: 20,
    topics: [
      "Bacteria",
      "Infection",
      "Disinfectants",
      "Antiseptics",
      "Sterilisation",
      "Moist Heat",
      "Dry Heat",
      "Chemicals",
      "Vapor",
      "Solutions",
    ],
  },
  {
    title: "10. Ethics & Salesmanship. In-Shop behavior",
    pages: 15,
    minutes: 20,
    topics: [
      "Ethics for Men",
      "Salesman — Price",
      "Salesman — Services",
      "Salesman — Products",
      "Salesman — Classes",
      "Salesman — Collaborations",
      "Behavior in-shop — For barbers",
      "Behavior in-shop — For patrons",
    ],
  },
  {
    title: "11. Signature haircuts",
    subtitle: "(+40 pcs.)",
    pages: 70,
    minutes: 200,
    topics: [
      "Head Shaving",
      "South side fade",
      "10mm bzzz cut",
      "Military flattop",
      "Texture flattop",
      "Crew with a hard part",
      "High'n'tight (no part)",
      "Natural side part",
      "Side part pompadour (Scumbag)",
      "Quiff",
      "Short pompadour",
      "Scumbag boogie",
      "Razor fade pomp",
      "Low contour side part",
      "Low contour pomp",
      "Long trim side part with taper",
      "Long trim pomp with temple fade",
      "Long trim with taper",
      "Middle part",
      "Boogie / Elephant trunk",
      "Crybaby / Ted",
      "Flattop boogie",
      "DA / Duck tail",
    ],
  },
  {
    title: "Special: Business & Definitions of Craftsmanship",
    pages: 15,
    minutes: 25,
    topics: [
      "Systematization",
      "Scale",
      "Longevity",
    ],
    isSpecial: true,
  },
];

interface EpisodeModalProps {
  episode: EpisodeContent | null;
  onClose: () => void;
  variant?: 'light' | 'dark';
}

export default function EpisodeModal({ episode, onClose, variant = 'light' }: EpisodeModalProps) {
  if (!episode) return null;

  const isDark = variant === 'dark';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative max-w-md w-full max-h-[80vh] overflow-y-auto border-2 shadow-[8px_8px_0_0_#d92b3a] animate-modal-in ${
          isDark
            ? 'bg-foreground border-background/30 text-background'
            : 'bg-background border-foreground text-foreground'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`sticky top-0 z-10 px-6 pt-5 pb-4 border-b-2 ${
          isDark ? 'bg-foreground border-background/20' : 'bg-background border-foreground/10'
        }`}>
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 hover:text-accent transition-colors ${
              isDark ? 'text-background/60' : 'text-foreground/60'
            }`}
          >
            <X size={20} />
          </button>
          <h3 className="font-serif font-black text-lg uppercase tracking-tight leading-tight pr-8">
            {episode.title}
          </h3>
          {episode.subtitle && (
            <span className="text-sm font-bold text-accent tracking-wider">{episode.subtitle}</span>
          )}
          {episode.isSpecial && (
            <div className="mt-2 mb-1">
              <span className="inline-block bg-accent text-background border-2 border-foreground px-2 py-1 text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0_0_#17193b]">
                AMBASSADORS EXCLUSIVE
              </span>
            </div>
          )}
          {/* Duration badges */}
          <div className="flex gap-3 mt-3">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 border text-[10px] font-black uppercase tracking-widest ${
              isDark ? 'border-background/20 text-background/70' : 'border-foreground/20 text-foreground/70'
            }`}>
              <BookOpen size={12} />
              {episode.pages} pages
            </div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 border text-[10px] font-black uppercase tracking-widest ${
              isDark ? 'border-background/20 text-background/70' : 'border-foreground/20 text-foreground/70'
            }`}>
              <Clock size={12} />
              {episode.minutes} min
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="px-6 py-5">
          <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-background/40' : 'text-foreground/40'
          }`}>
            Contents
          </p>
          <ul className="space-y-0">
            {episode.topics.map((topic, i) => (
              <li
                key={i}
                className={`flex items-start gap-2.5 py-2 border-b text-sm font-medium ${
                  isDark
                    ? 'border-background/5 text-background/80'
                    : 'border-foreground/5 text-foreground/80'
                } last:border-b-0`}
              >
                <span className="text-accent text-xs mt-0.5 flex-shrink-0">▸</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className={`px-6 py-4 border-t-2 ${
          isDark ? 'border-background/10' : 'border-foreground/10'
        }`}>
          <a
            href="/plans"
            className="block w-full text-center bg-accent text-background border-2 border-foreground px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors shadow-[4px_4px_0_0_#17193b]"
          >
            Start Learning →
          </a>
        </div>
      </div>
    </div>
  );
}
