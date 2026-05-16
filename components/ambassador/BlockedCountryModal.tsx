'use client';

import { X } from 'lucide-react';

interface BlockedCountryModalProps {
  countryName: string;
  onClose: () => void;
}

export default function BlockedCountryModal({ countryName, onClose }: BlockedCountryModalProps) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-background border-4 border-foreground shadow-[12px_12px_0_0_#d92b3a] p-8 md:p-10 max-w-md w-full relative animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground hover:text-accent transition-colors"
        >
          <X size={24} />
        </button>

        {/* Blocked Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 border-4 border-accent bg-accent/10 flex items-center justify-center">
            <span className="text-4xl">🚫</span>
          </div>
        </div>

        {/* Country Name */}
        <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-2 uppercase tracking-tighter text-center">
          {countryName}
        </h2>

        <div className="w-12 h-1 bg-accent mx-auto mb-6"></div>

        {/* Blocked Label */}
        <div className="bg-accent text-background px-4 py-1 mb-6 border-2 border-foreground font-bold tracking-widest uppercase text-xs text-center transform -rotate-1 mx-auto w-fit">
          Restricted Region
        </div>

        {/* Message */}
        <p className="text-foreground/80 font-medium text-center leading-relaxed text-sm mb-8">
          This country is currently <strong className="text-accent">blocked</strong> from the Ambassador Program. 
          To unlock access, change your government or change your country.
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-foreground text-background border-2 border-foreground px-6 py-4 font-black uppercase tracking-widest hover:bg-accent hover:border-accent transition-colors text-sm"
        >
          Understood
        </button>
      </div>
    </div>
  );
}
