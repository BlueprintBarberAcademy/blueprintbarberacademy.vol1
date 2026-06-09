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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [educator, setEducator] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = (topic: string) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/education-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          program: selectedTopic,
          educator,
          additionalInfo,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        alert('Дякуємо! Ваш запит на фізичний майстер-клас успішно надіслано. Ми зв’яжемося з вами найближчим часом.');
        setIsModalOpen(false);
        // Reset form
        setFullName('');
        setEmail('');
        setEducator('');
        setAdditionalInfo('');
      } else {
        alert(data.error || 'Щось пішло не так при надсиланні запиту.');
      }
    } catch (err) {
      console.error(err);
      alert('Помилка надсилання форми.');
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Certification Section */}
      <section className="py-16 md:py-24 bg-background border-t-2 border-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, var(--foreground) 0, var(--foreground) 2px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }}></div>
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Image */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] border-4 border-foreground shadow-[8px_8px_0_0_#17193b] overflow-hidden bg-secondary">
            <Image
              src="/education/certificate.png"
              alt="Blueprint Official Certificate"
              fill
              className="object-contain p-4 md:p-8"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <div className="inline-block bg-accent text-background px-4 py-1 mb-6 border-2 border-foreground shadow-[4px_4px_0_0_#17193b]">
              <p className="text-xs font-bold tracking-widest uppercase">Official Certification</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-6 uppercase tracking-tighter leading-none">
              Get Certified
            </h2>
            <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-6">
              All participants who successfully complete any of our physical live coaching classes will receive an official <strong className="text-foreground">Blueprint Academy Certificate</strong>.
            </p>

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={educator}
                  onChange={(e) => setEducator(e.target.value)}
                  className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select educator...</option>
                  <optgroup label="Master Barber">
                    <option value="mykyta-poland">Mykyta V. — Poland (Master Barber)</option>
                  </optgroup>
                  <optgroup label="Ambassadors">
                    <option value="vladyslav-australia">Vladyslav S. — Australia</option>
                    <option value="david-argentina">Ivan-David G. — Argentina</option>
                    <option value="juliano-brazil">Juliano N. — Brazil</option>
                    <option value="outsiders-greece">Outsiders Bbs. — Greece</option>
                    <option value="andi-indonesia">Andi F. — Indonesia</option>
                    <option value="jordi-mexico">Jordi — Mexico</option>
                    <option value="duncan-netherlands">Duncan B. — Netherlands</option>
                    <option value="mikolaj-poland">Mikolaj M. — Poland</option>
                    <option value="drfaz-singapore">Dr.Faz — Singapore</option>
                    <option value="zay-southkorea">Zay — South Korea</option>
                    <option value="mauricio-usa">Mauricio M. — USA</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Additional Information</label>
                <textarea
                  rows={3}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Any questions or specific requests..."
                  className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-foreground text-background border-2 border-foreground px-8 py-4 font-black uppercase tracking-widest hover:bg-accent hover:border-accent transition-colors shadow-[6px_6px_0_0_#d92b3a] flex items-center justify-center gap-3 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} /> {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
