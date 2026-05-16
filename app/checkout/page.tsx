'use client';

import { useState } from 'react';
import { Lock, CreditCard, Shield, ArrowLeft, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const planDetails: Record<string, { name: string; price: string; originalPrice: string; desc: string }> = {
  advance: {
    name: 'Advance',
    price: '$250',
    originalPrice: '$1,000',
    desc: 'Full course access, outer community membership and Blueprint news & updates.',
  },
  ambassador: {
    name: 'Ambassador',
    price: '$250',
    originalPrice: '$1,000',
    desc: 'Full course access + Ambassador Program with all privileges and inner community.',
  },
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan') || 'advance';
  const plan = planDetails[planId] || planDetails.advance;

  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('Poland');
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!email || !firstName || !lastName) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          email,
          referral,
          firstName,
          lastName,
          country,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (e) {
      alert('Checkout error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-secondary flex flex-col">
      {/* Top bar */}
      <header className="bg-foreground border-b-4 border-accent">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/plans" className="flex items-center gap-2 text-background hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Back</span>
          </a>
          <a href="/" className="text-xl font-serif font-black text-background tracking-widest uppercase">
            BLUEPRINT
          </a>
          <div className="flex items-center gap-2 text-background/60">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </header>

      <div className="flex-grow container mx-auto px-4 sm:px-6 py-8 md:py-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* LEFT — Payment Form */}
          <div className="lg:col-span-3 space-y-8">

            {/* Email */}
            <div>
              <h2 className="text-lg font-black font-serif uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                Contact
              </h2>
              <div className="border-2 border-foreground bg-background shadow-[4px_4px_0_0_#17193b]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-4 py-3.5 text-sm font-bold text-foreground bg-transparent focus:outline-none placeholder:text-foreground/30"
                  required
                />
              </div>
              <p className="text-xs text-foreground/50 font-medium mt-2">
                Receipt and course access details will be sent to this email.
              </p>
            </div>

            {/* Referral */}
            <div>
              <h2 className="text-lg font-black font-serif uppercase tracking-wider text-foreground mb-4">
                How Did You Hear About Us?
              </h2>
              <div className="border-2 border-foreground bg-background shadow-[4px_4px_0_0_#17193b] relative">
                <select
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                  className="w-full px-4 py-3.5 text-sm font-bold text-foreground bg-transparent focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an option...</option>
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
                  <optgroup label="Other">
                    <option value="social-media">Social Media</option>
                    <option value="search-engine">Search Engine</option>
                    <option value="friend">Friend / Colleague</option>
                    <option value="other">Other</option>
                  </optgroup>
                </select>
                <ChevronDown className="w-4 h-4 text-foreground/40 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <p className="text-xs text-foreground/50 font-medium mt-2">
                This helps us track ambassador referrals and reward our partners.
              </p>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-lg font-black font-serif uppercase tracking-wider text-foreground mb-4">
                Billing Address
              </h2>
              <div className="border-2 border-foreground bg-background shadow-[4px_4px_0_0_#17193b] overflow-hidden">
                {/* Country */}
                <div className="relative border-b-2 border-foreground/20">
                  <label className="absolute top-2 left-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Country / Region</label>
                  <div className="flex items-center">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full pt-6 pb-2 px-4 text-sm font-bold text-foreground bg-transparent focus:outline-none appearance-none cursor-pointer"
                    >
                      <option>Poland</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>Netherlands</option>
                      <option>Australia</option>
                      <option>Sweden</option>
                      <option>Indonesia</option>
                      <option>Mexico</option>
                      <option>South Korea</option>
                      <option>Portugal</option>
                      <option>Singapore</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-foreground/40 absolute right-4 pointer-events-none" />
                  </div>
                </div>
                {/* Name row */}
                <div className="grid grid-cols-2 border-b-2 border-foreground/20">
                  <div className="border-r-2 border-foreground/20">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm font-bold text-foreground bg-transparent focus:outline-none placeholder:text-foreground/30"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm font-bold text-foreground bg-transparent focus:outline-none placeholder:text-foreground/30"
                      required
                    />
                  </div>
                </div>
                {/* Address */}
                <div className="border-b-2 border-foreground/20">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-4 py-3.5 text-sm font-bold text-foreground bg-transparent focus:outline-none placeholder:text-foreground/30"
                  />
                </div>
                {/* Postal + City */}
                <div className="grid grid-cols-2">
                  <div className="border-r-2 border-foreground/20">
                    <input
                      type="text"
                      placeholder="Postal code"
                      className="w-full px-4 py-3.5 text-sm font-bold text-foreground bg-transparent focus:outline-none placeholder:text-foreground/30"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3.5 text-sm font-bold text-foreground bg-transparent focus:outline-none placeholder:text-foreground/30"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isLoading}
              className={`w-full bg-accent text-background border-4 border-foreground py-5 font-black uppercase tracking-widest text-lg hover:bg-foreground hover:text-background transition-colors shadow-[8px_8px_0_0_#17193b] flex items-center justify-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Lock className="w-5 h-5" />
              {isLoading ? 'Processing...' : `Pay Now — ${plan.price}`}
            </button>

            <div className="flex items-center justify-center gap-4 text-foreground/30 pb-4">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">256-bit SSL Encryption</span>
              <span className="text-foreground/10">|</span>
              <span className="text-xs font-bold uppercase tracking-widest">Powered by Stripe</span>
            </div>
          </div>

          {/* RIGHT — Order Summary */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-8">
              <div className="border-4 border-foreground bg-background shadow-[8px_8px_0_0_#17193b]">
                <div className="p-6 border-b-2 border-foreground">
                  <div className="inline-block bg-accent text-background px-3 py-1 mb-4 text-[10px] font-black tracking-widest uppercase border-2 border-foreground shadow-[2px_2px_0_0_#17193b]">
                    Order Summary
                  </div>

                  {/* Product */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 border-2 border-foreground bg-secondary flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#17193b]">
                      <Image src="/logo.png" alt="Blueprint" width={40} height={40} className="object-contain" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-sm font-black text-foreground uppercase tracking-wider">
                        Blueprint — {plan.name}
                      </h3>
                      <p className="text-xs text-foreground/50 font-medium mt-1 leading-relaxed">
                        {plan.desc}
                      </p>
                    </div>
                  </div>

                  {/* Discount */}
                  <div className="border-2 border-foreground/20 flex">
                    <input
                      type="text"
                      placeholder="Discount code"
                      className="flex-grow px-4 py-3 text-sm font-bold text-foreground bg-transparent focus:outline-none placeholder:text-foreground/30"
                    />
                    <button className="px-5 py-3 bg-foreground text-background text-xs font-black uppercase tracking-widest hover:bg-accent transition-colors border-l-2 border-foreground">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Totals */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60 font-bold">Subtotal</span>
                    <span className="text-sm text-foreground/60 font-bold line-through">{plan.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60 font-bold">Pre-Sale Discount</span>
                    <span className="text-sm text-accent font-black">–75%</span>
                  </div>
                  <div className="h-[2px] bg-foreground/10 my-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-foreground uppercase tracking-wider">Total</span>
                    <div className="text-right">
                      <span className="text-3xl font-black font-serif text-foreground">{plan.price}</span>
                      <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">USD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-foreground/40">
                  <CreditCard className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold">Lifetime access — one-time payment</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/40">
                  <Shield className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold">Secure checkout via Stripe</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/40">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold">Your data is encrypted and protected</span>
                </div>
              </div>

              {/* Legal links */}
              <div className="mt-6 flex gap-4">
                <a href="/terms" className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 hover:text-accent transition-colors">Terms</a>
                <a href="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 hover:text-accent transition-colors">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-foreground font-black uppercase tracking-widest animate-pulse">Loading checkout...</div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
