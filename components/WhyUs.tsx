const blocks = [
  {
    title: "No Limit",
    desc: "Learn when you have free time and inspiration.",
  },
  {
    title: "Real Time Updates",
    desc: "Watch course writing and updates in real time. Participate in editing. Evolution is here!",
  },
  {
    title: "Guiding Contents",
    desc: "Video manual with complete service process. Detailed breakdown of different techniques.",
  },
  {
    title: "Tested for decades",
    desc: "Refined by experience of leading barbers of America & Europe throughout time.",
  },
  {
    title: "One of a Kind",
    desc: "Material is absolutely unique and will help you never make mistakes.",
  },
  {
    title: "VIP treatment",
    desc: "After working through the course, send photo/video confirmation to work on errors. You are never alone!",
  }
];

export default function WhyUs() {
  return (
    <section className="py-12 md:py-16 bg-secondary border-b-2 border-foreground relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header Container */}
        <div className="mb-12">
          <div className="text-center md:text-left border-b-4 border-foreground pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-foreground uppercase tracking-tighter leading-none max-w-3xl">
              Made for Barbers & Men
            </h2>
            <p className="text-sm text-foreground/80 font-bold max-w-xs text-balance text-left border-l-2 border-accent pl-4 uppercase tracking-wider">
              NOT<br />Hairdressing<br />Course
            </p>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-base md:text-lg lg:text-xl font-serif font-bold text-foreground uppercase tracking-widest">
              By Craft Masters
            </p>
          </div>
        </div>

        {/* Compact Grid of Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blocks.map((block, i) => (
            <div key={i} className="bg-background border-2 border-foreground p-6 shadow-[6px_6px_0_0_#17193b] hover:shadow-[8px_8px_0_0_#d92b3a] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-foreground text-background font-serif font-black text-lg px-2 py-1">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-black font-serif text-foreground uppercase tracking-wide leading-tight">
                  {block.title}
                </h3>
              </div>
              <p className="text-sm text-foreground/80 font-medium leading-relaxed flex-grow">
                {block.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
