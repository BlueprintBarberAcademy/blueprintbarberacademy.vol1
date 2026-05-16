'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header({ forceSolid = false }: { forceSolid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Text Manual', href: '/text-manual' },
    { name: 'Video Course', href: '/video-course' },
    { name: 'Education', href: '/education' },
    { name: 'Ambassadors', href: '/ambassador-program' },
    { name: 'Book a Service', href: '/book-service' },
    { name: 'Blog for Men', href: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || forceSolid ? 'bg-background py-4 border-b-2 border-foreground shadow-[0_4px_0_0_#17193b]' : 'bg-transparent py-6 border-b-2 border-transparent'
        }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 sm:gap-1.5 text-xl sm:text-2xl font-serif font-bold text-foreground tracking-widest uppercase shrink-0">
          Blueprint
          <span className="font-[cursive] lowercase tracking-normal text-sm sm:text-base font-medium opacity-70 mt-1 mx-0.5">by</span>
          <Image src="/logo.png" alt="Blueprint Logo" width={32} height={32} className="object-contain w-8 h-8 sm:w-10 sm:h-10" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-foreground hover:text-accent transition-colors relative group uppercase tracking-wide"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center space-x-4">
          <a
            href="/plans"
            className="bg-accent text-background px-6 py-2 border-2 border-foreground rounded-none text-sm font-bold uppercase tracking-wide hover:bg-primary transition-colors"
          >
            Join
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu — Compact Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop to close */}
          <div
            className="xl:hidden fixed inset-0 top-[72px] z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Dropdown card */}
          <div className="xl:hidden absolute top-[72px] right-4 left-4 sm:left-auto sm:w-[280px] z-40 bg-background border-2 border-foreground shadow-[8px_8px_0_0_#17193b] animate-[fadeSlideIn_0.2s_ease-out]">
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-5 py-3 text-xs font-black text-foreground uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-colors border-b border-foreground/10 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
