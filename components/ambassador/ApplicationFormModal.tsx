'use client';

import { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ApplicationFormModalProps {
  countryName: string;
  onClose: () => void;
}

export default function ApplicationFormModal({ countryName, onClose }: ApplicationFormModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    shopName: '',
    portfolioLinks: '',
    workLocation: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/ambassador-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, country: countryName }),
      });
    } catch (error) {
      console.error('Error submitting application:', error);
    }

    // Redirect to the checkout page automatically
    router.push('/checkout?plan=ambassador');
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };



  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-background border-4 border-foreground shadow-[12px_12px_0_0_#d92b3a] p-6 md:p-8 max-w-lg w-full relative animate-modal-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-foreground hover:text-accent transition-colors z-10">
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="bg-accent text-background px-4 py-1 mb-4 border-2 border-foreground font-bold tracking-widest uppercase text-xs w-fit transform -rotate-1">
            Open Position
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-black text-foreground uppercase tracking-tighter">
            Become Ambassador
          </h2>
          <p className="text-foreground/60 font-bold uppercase tracking-widest text-xs mt-2">
            {countryName}
          </p>
        </div>

        <div className="w-full h-[2px] bg-foreground/10 mb-6"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="John Doe"
              className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none text-sm"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
              Years of Experience <span className="text-accent">*</span>
            </label>
            <input
              type="number"
              required
              min="0"
              max="50"
              value={formData.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              placeholder="5"
              className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none text-sm"
            />
          </div>

          {/* Shop Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
              Shop / Salon Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.shopName}
              onChange={(e) => handleChange('shopName', e.target.value)}
              placeholder="Classic Barber Studio"
              className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none text-sm"
            />
          </div>

          {/* Portfolio / Social Links */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
              Portfolio & Social Media Links <span className="text-accent">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={formData.portfolioLinks}
              onChange={(e) => handleChange('portfolioLinks', e.target.value)}
              placeholder={"Instagram: @yourbarbershop\nWebsite: www.yoursite.com\nTikTok: @yourhandle"}
              className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none text-sm resize-none"
            />
            <p className="text-[10px] text-foreground/50 font-bold uppercase tracking-widest mt-1">
              Links to your work on social media and your shop location
            </p>
          </div>

          {/* Work Location */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
              Work Location / Google Maps Link
            </label>
            <input
              type="text"
              value={formData.workLocation}
              onChange={(e) => handleChange('workLocation', e.target.value)}
              placeholder="https://maps.google.com/..."
              className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors rounded-none text-sm"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-foreground text-background border-2 border-foreground px-6 py-4 mt-2 font-black uppercase tracking-widest hover:bg-accent hover:border-accent transition-colors text-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Application & Join
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
