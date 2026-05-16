'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { X, Send } from 'lucide-react';

const programs = [
  {
    title: '"1 on 1" Private Class',
    desc: 'Personalized training designed entirely around your needs. We schedule the sessions when and where it is most convenient for You.',
    details: 'Flexible schedule & location',
    img: '/education/1on1.png',
    buttonText: 'Book "1 on 1"'
  },
  {
    title: 'Advanced Training',
    desc: 'Comprehensive out-door class designed for your entire salon staff. Features intensive hands-on practice under expert supervision.',
    details: 'Team training • Hands-on',
    img: '/education/advanced.png',
    buttonText: 'Book Training'
  },
  {
    title: '"Personal" Group Class',
    desc: 'Small group of 4 people. Haircuts or Shave. Available once a month, in-door only.',
    details: 'Max 4 people • Monthly',
    img: '/education/group.png',
    buttonText: 'Join Group Class'
  },
  {
    title: '"Look & Learn" Show',
    desc: 'Out-door demonstration and showcase tailored for broader audiences and events. Arranged by specific agreement with the inviting side.',
    details: 'By invitation',
    img: '/education/show.png',
    buttonText: 'Book Show'
  },
];

export default function Education() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('General Inquiry');

  const openModal = (topic: string) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background pt-24">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b-2 border-foreground relative overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--foreground) 0, var(--foreground) 2px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-block bg-accent text-background px-4 py-1 mb-6 border-2 border-foreground shadow-[4px_4px_0_0_#17193b]">
              <p className="text-xs font-bold tracking-widest uppercase">Live Coaching</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-6 uppercase tracking-tighter leading-none">
              Education Programs
            </h1>
            <p className="text-xl text-foreground/80 font-medium leading-relaxed max-w-2xl text-balance">
              Elevate your skills with direct, hands-on training. Choose the format that best suits your goals and schedule your session.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-24 bg-secondary relative">
        <div className="container mx-auto px-6 md:px-12">

          <div className="flex flex-col gap-16 lg:gap-20">
            {programs.map((program, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>

                  {/* Image Side */}
                  <div className="w-full lg:w-5/12 relative h-[200px] sm:h-[250px] lg:h-[280px] border-2 border-foreground shadow-[6px_6px_0_0_#17193b] group overflow-hidden bg-background shrink-0">
                    <Image
                      src={program.img}
                      alt={program.title}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out p-1 sm:p-2"
                    />
                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 bg-background border-2 border-foreground w-10 h-10 flex justify-center items-center font-serif font-black text-lg z-10 shadow-[2px_2px_0_0_#d92b3a]">
                      0{i + 1}
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center py-4">
                    <div className="mb-3">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent border-b-2 border-accent pb-1 inline-block">
                        {program.details}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black font-serif text-foreground mb-4 leading-tight uppercase">
                      {program.title}
                    </h2>
                    <p className="text-base text-foreground/80 font-medium leading-relaxed mb-8">
                      {program.desc}
                    </p>

                    <div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(program.title);
                        }}
                        className="inline-block bg-background border-2 border-foreground text-foreground px-6 py-3 text-sm font-bold uppercase tracking-widest text-center hover:bg-foreground hover:text-background transition-colors shadow-[4px_4px_0_0_#17193b] hover:shadow-[6px_6px_0_0_#d92b3a]"
                      >
                        {program.buttonText || 'Book This Program'}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-background border-2 border-foreground shadow-[12px_12px_0_0_#17193b] w-full max-w-lg p-8 max-h-[90vh] overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-foreground/40 hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-8 text-center">
              <div className="inline-block bg-accent text-background px-3 py-1 mb-4 border-2 border-foreground text-xs font-bold tracking-widest uppercase shadow-[2px_2px_0_0_#17193b]">
                Registration
              </div>
              <h2 className="text-3xl font-serif font-black text-foreground uppercase tracking-tighter leading-none mb-2">
                Book Program
              </h2>
              <p className="text-sm font-medium text-foreground/70">
                Fill out the form below to register for the selected program. We will contact you shortly to confirm the details.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Selected Program (Subject)</label>
                <input
                  type="text"
                  value={selectedTopic}
                  readOnly
                  className="w-full border-2 border-foreground bg-foreground/5 text-foreground/80 px-4 py-3 text-sm font-bold focus:outline-none cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Preferred Educator</label>
                <select
                  className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select educator...</option>
                  <optgroup label="Master Barber">
                    <option value="mykyta-poland">Mykyta V. — Poland (Master Barber)</option>
                  </optgroup>
                  <optgroup label="Ambassadors">
                    <option value="vladyslav-australia">Vladyslav — Australia</option>
                    <option value="andi-indonesia">Andi — Indonesia</option>
                    <option value="jordi-mexico">Jordi — Mexico</option>
                    <option value="dunkan-netherlands">Dunkan — Netherlands</option>
                    <option value="podciety-poland">Podciety — Poland</option>
                    <option value="rufino-portugal">Rufino — Portugal</option>
                    <option value="drfaz-singapore">Dr. Faz — Singapore</option>
                    <option value="zay-southkorea">Zay — South Korea</option>
                    <option value="helena-sweden">Helena — Sweden</option>
                    <option value="mauricio-usa">Mauricio — USA</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Additional Information</label>
                <textarea
                  rows={3}
                  placeholder="Any questions or specific requests..."
                  className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30 resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-foreground text-background border-2 border-foreground px-8 py-4 font-black uppercase tracking-widest hover:bg-accent hover:border-accent transition-colors shadow-[6px_6px_0_0_#d92b3a] flex items-center justify-center gap-3 mt-2"
              >
                <Send size={16} /> Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
