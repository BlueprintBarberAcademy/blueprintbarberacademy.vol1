export default function PainPoint() {
  return (
    <section className="py-12 md:py-16 bg-secondary border-b-2 border-foreground relative overflow-hidden">
      {/* Background abstract noir lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--foreground) 0, var(--foreground) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex justify-center text-center">

        {/* Main Text Content */}
        <div className="w-full max-w-[90rem] flex flex-col items-center">
          <div className="inline-block bg-foreground text-background px-4 py-1 mb-4 border-2 border-foreground shadow-[4px_4px_0_0_#d92b3a]">
            <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">Why Blueprint?</p>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-serif font-black text-foreground mb-4 leading-[1.1] tracking-tighter uppercase w-full">
            Systematization of the service delivery process.<br className="hidden lg:block" />
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-foreground/80 font-medium leading-relaxed max-w-4xl text-balance">
            The fact that  <span className="bg-foreground text-background px-2 font-bold uppercase text-[10px] sm:text-xs mx-1">Barbering </span> is a profession requires standardization of services so that the apprentice can not only acquire practical knowledge but also learn the theoretical, ethical, legal and scientific principles or elements of the profession to be a required, qualified professional.
          </p>
        </div>

      </div>
    </section>
  );
}
