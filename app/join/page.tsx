'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const benefits = [
  "Access to 11+ Premium Video Episodes",
  "Comprehensive Text Manuals",
  "Signature Haircuts Gallery",
  "Exclusive Community Access",
  "Direct Feedback from Master Barbers"
];

export default function Join() {
  return (
    <main className="min-h-screen bg-background pt-24 flex flex-col">
      <Header />
      
      <section className="flex-grow py-16 md:py-24 relative overflow-hidden bg-background flex items-center">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center max-w-6xl mx-auto">
            
            {/* Form Section */}
            <div className="w-full lg:w-1/2 bg-background border-4 border-foreground shadow-[12px_12px_0_0_#17193b] p-8 md:p-12 relative">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent transform translate-x-8 -translate-y-8 rotate-45 z-[-1] border-4 border-foreground shadow-[4px_4px_0_0_#17193b]"></div>
              
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4 uppercase tracking-tighter leading-none">
                  Join Blueprint
                </h1>
                <p className="text-foreground/70 font-medium">Create your account to start mastering the craft.</p>
              </div>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">First Name</label>
                    <input type="text" placeholder="John" className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">Email Address</label>
                  <input type="email" placeholder="barber@example.com" className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">Password</label>
                  <input type="password" placeholder="Create a strong password" className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none" />
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded-none border-2 border-foreground accent-accent cursor-pointer" />
                  <label htmlFor="terms" className="text-sm font-medium text-foreground/80 cursor-pointer">
                    I agree to the <a href="#" className="font-bold underline hover:text-accent">Terms of Service</a> and <a href="#" className="font-bold underline hover:text-accent">Privacy Policy</a>.
                  </label>
                </div>

                <button type="submit" className="w-full bg-accent text-background border-2 border-foreground px-6 py-4 mt-6 font-black uppercase tracking-widest hover:bg-foreground transition-colors shadow-[6px_6px_0_0_#17193b]">
                  Create Account
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t-2 border-secondary text-center">
                <p className="text-sm font-medium text-foreground/80">
                  Already have an account? <a href="#" className="font-bold text-foreground hover:text-accent uppercase tracking-widest ml-2">Log In Here</a>
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-block bg-foreground text-background px-4 py-1 mb-6 border-2 border-foreground self-start shadow-[4px_4px_0_0_#d92b3a]">
                <p className="text-xs font-bold tracking-widest uppercase">The Blueprint Advantage</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-serif text-foreground mb-8 leading-tight uppercase">
                Elevate Your <br/><span className="text-accent">Barbering Career</span>
              </h2>
              <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-10">
                Join hundreds of driven professionals who are transforming their skillset with our traditional, no-nonsense approach to education.
              </p>

              <div className="flex flex-col gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 shrink-0 bg-secondary border-2 border-foreground flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" strokeWidth={3} />
                    </div>
                    <span className="text-base md:text-lg font-bold text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
