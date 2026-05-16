'use client';

import { X, Instagram, Globe, MapPin, ExternalLink } from 'lucide-react';

export interface AmbassadorData {
  name: string;
  country: string;
  countryCode: string;
  photo: string;
  shopName: string;
  experience: number;
  instagram?: string;
  website?: string;
  location: string;
  bio: string;
}

interface AmbassadorInfoModalProps {
  ambassador: AmbassadorData;
  onClose: () => void;
}

export default function AmbassadorInfoModal({ ambassador, onClose }: AmbassadorInfoModalProps) {
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

        {/* Taken Badge */}
        <div className="bg-foreground text-background px-4 py-1 mb-6 border-2 border-foreground font-bold tracking-widest uppercase text-xs w-fit transform -rotate-1">
          ✦ Position Taken
        </div>

        {/* Ambassador Card */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          {/* Photo */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 border-4 border-foreground shadow-[6px_6px_0_0_#17193b] flex-shrink-0 overflow-hidden bg-secondary mx-auto sm:mx-0">
            <img
              src={ambassador.photo}
              alt={ambassador.name}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-black text-foreground uppercase tracking-tighter leading-tight">
              {ambassador.name}
            </h2>
            <p className="text-foreground/60 font-bold uppercase tracking-widest text-xs mt-1">
              Blueprint Ambassador
            </p>
            <div className="flex items-center gap-2 mt-3 justify-center sm:justify-start">
              <MapPin className="w-3 h-3 text-accent" />
              <span className="text-xs font-bold text-foreground/70 uppercase tracking-widest">
                {ambassador.country}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-foreground/10 mb-6"></div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border-2 border-foreground/20 p-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-1">Experience</p>
            <p className="text-xl font-serif font-black text-foreground">{ambassador.experience}<span className="text-accent">+</span> <span className="text-xs font-sans">years</span></p>
          </div>
          <div className="border-2 border-foreground/20 p-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-1">Salon</p>
            <p className="text-sm font-black text-foreground uppercase tracking-wide leading-tight">{ambassador.shopName}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-foreground/70 font-medium text-sm leading-relaxed mb-6">
          {ambassador.bio}
        </p>

        <div className="w-full h-[2px] bg-foreground/10 mb-6"></div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Connect with ambassador</p>
          <div className="flex flex-wrap gap-3">
            {ambassador.instagram && (
              <a
                href={ambassador.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-foreground text-background px-4 py-2.5 border-2 border-foreground text-xs font-bold uppercase tracking-widest hover:bg-accent hover:border-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            )}
            {ambassador.website && (
              <a
                href={ambassador.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-background text-foreground px-4 py-2.5 border-2 border-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                <Globe className="w-4 h-4" />
                Website
              </a>
            )}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(ambassador.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background text-foreground px-4 py-2.5 border-2 border-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Location
            </a>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 border-2 border-accent/30 bg-accent/5 p-4">
          <p className="text-xs font-bold text-foreground/60 leading-relaxed">
            <span className="text-accent font-black">Note:</span> This ambassador is responsible for building the Blueprint education system in {ambassador.country}. 
            They are personally trained by our master and follow our methodology.
          </p>
        </div>
      </div>
    </div>
  );
}
