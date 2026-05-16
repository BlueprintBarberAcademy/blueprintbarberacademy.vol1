import Image from 'next/image';

const educators = [
  "Mykyta V.", "Anna K.", "Michał B.", "Sara L.", 
  "John D.", "Emma W.", "Lucas R.", "Olivia S.", 
  "David C.", "Sophia M.", "Daniel K.", "Chloe P."
];

export default function Educators() {
  return (
    <section className="py-24 md:py-32 bg-secondary border-b-2 border-foreground">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-20 text-center border-b-4 border-foreground pb-10">
          <h2 className="text-6xl md:text-7xl font-serif font-black text-foreground mb-6 uppercase tracking-tighter">The Practitioners</h2>
          <p className="text-lg text-foreground/80 font-bold uppercase tracking-widest max-w-2xl mx-auto">Learn directly from industry leaders who stand behind the chair every day.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
          {educators.map((name, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full border-2 border-foreground bg-background mb-4 p-2 shadow-[4px_4px_0_0_#17193b] group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0_0_#d92b3a] transition-all duration-300">
                <div className="relative w-full h-full border border-foreground filter grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                   <Image 
                     src={`https://picsum.photos/seed/edu${i}/300/400`} 
                     alt={name} 
                     fill 
                     className="object-cover"
                   />
                </div>
              </div>
              <h3 className="text-center text-foreground font-black font-serif text-lg uppercase group-hover:text-accent transition-colors">{name}</h3>
              <p className="text-center text-xs font-bold text-foreground/60 mt-1 uppercase tracking-widest">Instructor</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
