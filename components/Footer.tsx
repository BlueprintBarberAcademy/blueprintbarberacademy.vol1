'use client';

import { Instagram, Facebook, Youtube, X, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setShowContactModal(true);
    window.addEventListener('open-contact-modal', handleOpenModal);

    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setShowContactModal(true);
      }
    };

    if (window.location.hash === '#contact') {
      setShowContactModal(true);
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('open-contact-modal', handleOpenModal);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/contact-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        alert('Дякуємо! Ваше повідомлення успішно надіслано. Ми відповімо вам найближчим часом.');
        setShowContactModal(false);
        // Reset form
        setName('');
        setEmail('');
        setSubject('General Inquiry');
        setMessage('');
      } else {
        alert(data.error || 'Щось пішло не так при надсиланні повідомлення.');
      }
    } catch (err) {
      console.error(err);
      alert('Помилка надсилання повідомлення.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="relative bg-background border-2 border-foreground shadow-[12px_12px_0_0_#17193b] w-full max-w-2xl mx-4 p-8 max-h-[90vh] overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-foreground/40 hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <div className="inline-block bg-accent text-background px-3 py-1 mb-4 border-2 border-foreground text-xs font-bold tracking-widest uppercase shadow-[2px_2px_0_0_#17193b]">
                Get In Touch
              </div>
              <h2 className="text-3xl font-serif font-black text-foreground uppercase tracking-tighter leading-none">
                Contact Us
              </h2>
              <div className="w-12 h-1 bg-accent mt-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-foreground flex-shrink-0 flex justify-center items-center text-accent shadow-[2px_2px_0_0_#17193b]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-foreground mb-1">Email</p>
                    <a href="mailto:blueprintbarberacademy@gmail.com" className="text-sm text-foreground/70 font-bold hover:text-accent transition-colors">
                      blueprintbarberacademy@gmail.com
                    </a>
                  </div>
                </div>



                <div className="flex gap-3 mt-2">
                  <a href="https://www.instagram.com/2tall_ridah/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-foreground flex justify-center items-center text-foreground hover:bg-accent hover:text-background hover:border-accent transition-colors shadow-[2px_2px_0_0_#17193b]">
                    <Instagram size={16} />
                  </a>
                  <a href="https://www.facebook.com/FrankensteinBarber/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-foreground flex justify-center items-center text-foreground hover:bg-accent hover:text-background hover:border-accent transition-colors shadow-[2px_2px_0_0_#17193b]">
                    <Facebook size={16} />
                  </a>
                  <a href="https://www.youtube.com/@BlueprintBarberAcademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-foreground flex justify-center items-center text-foreground hover:bg-accent hover:text-background hover:border-accent transition-colors shadow-[2px_2px_0_0_#17193b]">
                    <Youtube size={16} />
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Email</label>
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
                  <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Course Information</option>
                    <option>Education Programs</option>
                    <option>Ambassador Program</option>
                    <option>Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-2 border-foreground bg-background text-foreground px-4 py-3 text-sm font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foreground text-background border-2 border-foreground px-8 py-4 font-black uppercase tracking-widest hover:bg-accent hover:border-accent transition-colors shadow-[6px_6px_0_0_#d92b3a] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-background pt-24 pb-12 border-b-8 border-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

            {/* Logo Column */}
            <div className="md:col-span-4 border-l-4 border-accent pl-6">
              <a href="/" className="inline-block text-3xl font-serif font-black text-foreground tracking-widest uppercase mb-6">
                BLUEPRINT
              </a>
              <p className="text-foreground/80 text-sm font-medium leading-relaxed max-w-sm mb-6">
                Online video manual for barbers and men. Based on real experience behind the chair.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/2tall_ridah/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-foreground flex justify-center items-center text-foreground hover:bg-accent hover:text-background hover:border-accent transition-colors shadow-[4px_4px_0_0_#17193b]">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/FrankensteinBarber/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-foreground flex justify-center items-center text-foreground hover:bg-accent hover:text-background hover:border-accent transition-colors shadow-[4px_4px_0_0_#17193b]">
                  <Facebook size={20} />
                </a>
                <a href="https://www.youtube.com/@BlueprintBarberAcademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-foreground flex justify-center items-center text-foreground hover:bg-accent hover:text-background hover:border-accent transition-colors shadow-[4px_4px_0_0_#17193b]">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="md:col-span-2 md:col-start-9">
              <h4 className="text-foreground font-black mb-6 uppercase tracking-widest text-sm border-b-2 border-foreground pb-2 inline-block">Directory</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Text Book', href: '/text-manual' },
                  { name: 'Video Course', href: '/video-course' },
                  { name: 'Education', href: '/education' },
                  { name: 'Ambassadors', href: '/ambassador-program' },
                  { name: 'Book a Service', href: '/book-service' },
                  { name: 'Blog for Men', href: '/blog' }
                ].map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-foreground/70 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors inline-flex items-center gap-0 hover:gap-2 group">
                      <span className="text-accent w-0 overflow-hidden group-hover:w-3 transition-all duration-200">–</span>{link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="md:col-span-2">
              <h4 className="text-foreground font-black mb-6 uppercase tracking-widest text-sm border-b-2 border-foreground pb-2 inline-block">More</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/educator" className="text-foreground/70 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors inline-flex items-center gap-0 hover:gap-2 group">
                    <span className="text-accent w-0 overflow-hidden group-hover:w-3 transition-all duration-200">–</span>About Us
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="text-foreground/70 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors text-left inline-flex items-center gap-0 hover:gap-2 group"
                  >
                    <span className="text-accent w-0 overflow-hidden group-hover:w-3 transition-all duration-200">–</span>Contact
                  </button>
                </li>
              </ul>
            </div>


          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t-2 border-foreground flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-foreground/60 font-bold uppercase text-xs tracking-widest">
              Blueprint Academy © 2019
            </p>
            <div className="flex gap-8">
              <a href="/privacy" className="text-foreground/60 font-bold uppercase text-xs tracking-widest hover:text-foreground transition-colors">Privacy</a>
              <a href="/terms" className="text-foreground/60 font-bold uppercase text-xs tracking-widest hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
