'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, Loader2, MessageSquare, Check } from 'lucide-react';

const haircuts = [
  '/master/haircuts/curlyflattop.png',
  '/master/haircuts/flattopboogie.png',
  '/master/haircuts/highntigh.png',
  '/master/haircuts/mullet.png',
  '/master/haircuts/pompadour.png',
  '/master/haircuts/shaving.png',
  '/master/haircuts/sidepart.png',
  '/master/haircuts/tamplefade.png',
  '/master/haircuts/tapper.png',
];

const masterclasses = [
  '/master/classes/frankfurt.png',
  '/master/classes/jarocin.png',
  '/master/classes/szeczyn.png',
  '/master/classes/szshamo.png',
  '/master/classes/wawL.png',
  '/master/classes/wawN.png',
  '/master/classes/wawT.png',
];

export default function FinalCTA() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', review: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error('Error loading reviews:', err);
        setReviews([]);
      } finally {
        setLoadingReviews(false);
      }
    }
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.review.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.error === 'NOT_A_BUYER'
          ? 'This email was not found among course buyers. Only verified students can leave a review.'
          : data.message || data.error || 'Something went wrong. Please try again.';
        setStatus({ type: 'error', message: msg });
      } else {
        setStatus({ type: 'success', message: 'Thank you! Your review has been submitted.' });
        const newReview = {
          id: Date.now().toString(),
          name: formData.name.trim(),
          review: formData.review.trim(),
          created_at: new Date().toISOString(),
        };
        setReviews(prev => [newReview, ...prev]);
        setFormData({ name: '', email: '', review: '' });
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background relative overflow-hidden flex flex-col justify-center items-center text-center pt-24 pb-0">

      {/* Scrollbar Styling */}
      <style>{`
        .reviews-scroll::-webkit-scrollbar { width: 6px; }
        .reviews-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .reviews-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); }
        .reviews-scroll::-webkit-scrollbar-thumb:hover { background: #d92b3a; }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mb-16">
        <div className="bg-foreground text-background px-4 py-1 mb-6 border-2 border-foreground font-bold tracking-widest uppercase text-sm transform rotate-1 shadow-[4px_4px_0_0_#d92b3a]">
          The Proof is in the Work
        </div>
        <h2 className="text-5xl md:text-7xl font-serif font-black text-foreground uppercase tracking-tighter leading-none mb-6">
          Real Results
        </h2>
        <p className="text-lg text-foreground/80 font-medium text-balance max-w-2xl tracking-widest">
          This course gives you a step-by-step barbering system used in barbershops — from clean haircuts to client retention.
        </p>
      </div>

      {/* Row 1: Masterclasses */}
      <div className="w-full bg-foreground border-y-4 border-foreground py-4 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-20 transform -rotate-1 scale-105 mb-4 overflow-x-auto snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--background) 0, var(--background) 2px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }}></div>
        <div className="flex items-center min-w-max px-8">
          {masterclasses.map((src, index) => (
            <div key={`mc-${index}`} className="relative h-56 mx-3 border-2 border-background shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] bg-secondary snap-center shrink-0 group">
              <img src={src} alt="Masterclass" loading="lazy" className="h-full w-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 block" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Haircuts */}
      <div className="w-full bg-background border-y-4 border-foreground py-4 flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10 transform rotate-1 scale-105 mb-24 overflow-x-auto snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center min-w-max px-8">
          {haircuts.map((src, index) => (
            <div key={`hc-${index}`} className="relative h-72 mx-3 border-2 border-foreground shadow-[4px_4px_0_0_#17193b] bg-secondary snap-center shrink-0 group">
              <img src={src} alt="Haircut" loading="lazy" className="h-full w-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 block" />
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Box */}
      <div className="container mx-auto px-6 relative z-30 flex flex-col items-center pb-24">
        <div className="bg-foreground p-8 md:p-10 border-4 border-foreground shadow-[16px_16px_0_0_#d92b3a] w-full max-w-4xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--background) 0, var(--background) 2px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }}></div>

          <div className="relative z-10 flex flex-col items-center">

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-8 text-left">

              {/* Left: Reviews Feed */}
              <div className="flex flex-col bg-background/5 border-2 border-background/20 p-4">
                <h4 className="text-sm font-serif font-black text-background uppercase tracking-wider mb-3 flex items-center gap-2 border-b-2 border-background/10 pb-2">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  Student Reviews
                </h4>

                <div className="reviews-scroll overflow-y-auto max-h-[180px] pr-2 space-y-3">
                  {loadingReviews ? (
                    <div className="text-background/60 text-sm font-medium py-8 text-center flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-accent" />
                      Loading...
                    </div>
                  ) : reviews.length === 0 ? (
                    <div className="text-background/60 text-sm font-medium py-8 text-center">
                      Be the first to leave a review!
                    </div>
                  ) : (
                    reviews.map((r, index) => (
                      <div key={r.id || index} className="bg-background/10 border border-background/10 p-4 hover:border-background/30 transition-all duration-300">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-accent text-background font-serif font-black flex items-center justify-center text-xs">
                              {r.name ? r.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <span className="font-serif font-black text-background text-sm tracking-wide">
                              {r.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-[9px] uppercase font-black tracking-wider text-[#34d399] bg-[#34d399]/10 px-2 py-0.5 border border-[#34d399]/20 shrink-0">
                            <ShieldCheck className="w-3 h-3 text-[#34d399]" />
                            Verified Student
                          </div>
                        </div>
                        <p className="text-sm text-background/80 font-medium leading-relaxed italic">
                          "{r.review}"
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Right: Leave a Review Form */}
              <div className="flex flex-col bg-background/5 border-2 border-background/20 p-4">
                <h4 className="text-sm font-serif font-black text-background uppercase tracking-wider mb-3 border-b-2 border-background/10 pb-2">
                  Leave a Review
                </h4>

                <form onSubmit={handleSubmit} className="space-y-3 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <div>
                      <label className="block text-[9px] uppercase font-black text-background/50 tracking-widest mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John D."
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-background/10 border border-background/20 text-background px-2 py-1.5 text-xs font-medium focus:outline-none focus:border-accent transition-colors duration-200 placeholder-background/30 rounded-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase font-black text-background/50 tracking-widest mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-background/10 border border-background/20 text-background px-2 py-1.5 text-xs font-medium focus:outline-none focus:border-accent transition-colors duration-200 placeholder-background/30 rounded-none"
                      />
                      <span className="text-[9px] text-background/40 font-semibold block mt-1">
                        *Use the email you paid with — we verify every review.
                      </span>
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase font-black text-background/50 tracking-widest mb-1">
                        Review
                      </label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Share your experience with the course..."
                        value={formData.review}
                        onChange={(e) => setFormData(prev => ({ ...prev, review: e.target.value }))}
                        className="w-full bg-background/10 border border-background/20 text-background px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-accent transition-colors duration-200 placeholder-background/30 resize-none rounded-none"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    {status.type && (
                      <div className={`text-xs p-3 mb-3 border font-bold flex items-start gap-2 ${
                        status.type === 'success'
                          ? 'bg-[#34d399]/10 border-[#34d399]/30 text-[#34d399]'
                          : 'bg-accent/10 border-accent/30 text-accent'
                      }`}>
                        {status.type === 'success' && <Check className="w-4 h-4 shrink-0 text-[#34d399]" />}
                        <span>{status.message}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-background text-foreground border-2 border-background py-2.5 text-xs font-black uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-background transition-colors shadow-[4px_4px_0_0_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0_0_#17193b] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Verifying purchase...
                        </>
                      ) : (
                        'Submit Review'
                      )}
                    </button>
                  </div>
                </form>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center border-t-2 border-background/20 pt-6">
              <a href="/plans" className="bg-background text-foreground border-2 border-background px-12 py-5 text-lg font-black uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-background transition-colors shadow-[8px_8px_0_0_rgba(255,255,255,0.2)] text-center">
                Start Learning
              </a>
              <a href="/text-manual" className="bg-transparent text-background border-2 border-background px-12 py-5 text-lg font-black uppercase tracking-widest hover:bg-background hover:text-foreground transition-all shadow-[8px_8px_0_0_rgba(255,255,255,0.2)] text-center">
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
