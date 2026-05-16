import { Layers, PlayCircle, Scissors } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Layers,
    title: "Conscious work with form",
    desc: "Form, proportion, decision. Master the geometry of haircuts rather than memorizing steps."
  },
  {
    icon: PlayCircle,
    title: "Full process step by step",
    desc: "From thorough analysis to the final result. Uncut, authentic professional workflow."
  },
  {
    icon: Scissors,
    title: "Techniques from real work",
    desc: "Proven at the chair. Everything you learn translates directly to your salon reality."
  }
];

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-background border-b-2 border-foreground">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-8 uppercase tracking-tighter leading-none">
            Elevate your craft. <br/><span className="text-transparent" style={{ WebkitTextStroke: '2px var(--foreground)'}}>Work with intention.</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 font-medium max-w-2xl mx-auto text-balance">
            The Blueprint methodology is built on understanding the 'why' behind every cut. We abandon rigid rules in favor of conscious design based on individual anatomy.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((ft, i) => {
            const Icon = ft.icon;
            return (
              <div 
                key={i} 
                className="bg-background border-2 border-foreground p-8 shadow-[8px_8px_0_0_#17193b] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#d92b3a] transition-all duration-300 group"
              >
                <div className="bg-foreground w-16 h-16 flex items-center justify-center border-2 border-foreground mb-8">
                  <Icon className="text-background w-8 h-8 group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black font-serif text-foreground mb-4 uppercase tracking-wider">{ft.title}</h3>
                <p className="text-foreground/70 font-medium leading-relaxed">{ft.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
             <div key={num} className="relative aspect-[4/5] border-2 border-foreground shadow-[4px_4px_0_0_#17193b] overflow-hidden group">
               <Image 
                 src={`https://picsum.photos/seed/feat${num}/600/800`} 
                 alt={`Gallery Work ${num}`} 
                 fill 
                 className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
               />
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
