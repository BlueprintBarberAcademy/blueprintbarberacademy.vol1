import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Zap, AlertTriangle } from 'lucide-react';

const plans = [
  {
    id: 'for-men',
    name: "For Men",
    badge: null,
    price: "FREE",
    originalPrice: null,
    period: "forever",
    desc: "A blog for men about grooming, self-care, and lifestyle. No payment needed — just show up.",
    features: [
      "Men's grooming blog",
      "Home shaving & haircut guides",
      "Lifestyle & self-care tips",
      "No professional modules",
    ],
    cta: "Visit Blog",
    href: "/blog",
    popular: false,
    dark: false,
  },
  {
    id: 'ambassador',
    name: "Ambassador",
    badge: "By Approval Only",
    price: "$250",
    originalPrice: "$1,000",
    period: "lifetime",
    desc: "For Experienced barbers ready to do more for the sake of Craft & Culture.",
    features: [
      "Lifetime access to all academy courses & manuals",
      "Build your personal and shop brand globally",
      "Proven systems for service, sales & business",
      "Lucrative revenue share & referral commissions",
      "Membership in a private, elite global barber network",
      "Priority access to workshops, masterclasses & events",
      "Early-partner recognition & direct core team support",
      "Special Episode",
    ],
    cta: "Become Ambassador",
    href: "/checkout?plan=ambassador",
    popular: true,
    dark: false,
  },
  {
    id: 'advance',
    name: "Advance",
    badge: null,
    price: "$250",
    originalPrice: "$1,000",
    period: "lifetime",
    desc: "For barbers or those who want to learn the profession in a proper, systematic way.",
    features: [
      "Unlimited access to learn at your own pace",
      "Real-time updates & active participation",
      "Detailed video manuals & technique breakdowns",
      "Methods refined from global experience",
      "Unique materials to prevent common mistakes",
      "VIP support with personalized photo/video feedback",
    ],
    cta: "Get Advance",
    href: '/checkout?plan=advance',
    popular: false,
    dark: false,
  },
];

export default function Plans() {
  return (
    <main className="min-h-screen bg-background pt-24 overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 border-b-2 border-foreground relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--foreground) 0, var(--foreground) 2px, transparent 0, transparent 20px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl flex flex-col items-center">
            <div className="inline-block bg-accent text-background px-4 py-1 mb-6 border-2 border-foreground shadow-[4px_4px_0_0_#17193b]">
              <p className="text-xs font-bold tracking-widest uppercase">Pre-Sale</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-6 uppercase tracking-tighter leading-none">
              Choose Your Path
            </h1>
            <p className="text-xl text-foreground/80 font-medium leading-relaxed max-w-2xl text-balance mb-6">
              Join Blueprint Academy before the full launch and lock in your access at a founding price.
            </p>

            {/* Pre-sale warning banner */}
            <div className="w-full max-w-2xl bg-foreground text-background border-2 border-foreground px-6 py-4 shadow-[6px_6px_0_0_#d92b3a] flex items-start gap-4 text-left">
              <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-accent mb-1">Pre-Sale</p>
                <p className="text-sm text-background/80 font-medium leading-relaxed">
                  Join now and get all new episodes in real time first. Pre-sale prices reflect a <strong className="text-accent">75% discount</strong> off the final launch price. Early supporters gain lifetime access and full privileges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans grid */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Discount notice */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="h-px flex-grow bg-foreground/10 max-w-[120px]"></div>
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-accent">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-xs font-black uppercase tracking-widest text-accent">75% Pre-Sale Discount — Limited Time</span>
            </div>
            <div className="h-px flex-grow bg-foreground/10 max-w-[120px]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {plans.map((plan, i) => (
              <div
                key={plan.id}
                className={`flex flex-col border-4 border-foreground bg-background p-7 relative transition-all duration-300 hover:-translate-y-1 ${plan.popular
                  ? 'shadow-[8px_8px_0_0_#d92b3a] md:-translate-y-6 bg-foreground text-background'
                  : 'shadow-[8px_8px_0_0_#17193b] hover:shadow-[12px_12px_0_0_#17193b]'
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-background px-5 py-1.5 text-xs font-black uppercase tracking-widest border-2 border-foreground whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <h3 className={`text-2xl font-black font-serif uppercase tracking-wider mb-2 text-center ${plan.popular ? 'text-background' : 'text-foreground'}`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className={`text-sm font-medium mb-6 leading-relaxed ${plan.popular ? 'text-background/70' : 'text-foreground/60'}`}>
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="mb-2 flex items-baseline gap-2">
                  <span className={`text-5xl font-black font-serif leading-none ${plan.popular ? 'text-background' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${plan.popular ? 'text-background/50' : 'text-foreground/40'}`}>
                    / {plan.period}
                  </span>
                </div>
                {plan.originalPrice && (
                  <div className="flex items-center gap-2 mb-6">
                    <span className={`text-sm line-through font-bold ${plan.popular ? 'text-background/40' : 'text-foreground/30'}`}>
                      {plan.originalPrice}
                    </span>
                    <span className="text-xs font-black text-accent bg-accent/10 px-2 py-0.5 border border-accent/30">
                      –75% PRE-SALE
                    </span>
                  </div>
                )}
                {!plan.originalPrice && <div className="mb-6"></div>}

                {/* Divider */}
                <div className={`h-[2px] w-full mb-6 ${plan.popular ? 'bg-background/15' : 'bg-foreground/8'}`}></div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-accent' : 'text-foreground'}`}
                        strokeWidth={3}
                      />
                      <span className={`text-sm font-bold leading-snug ${plan.popular ? 'text-background/90' : 'text-foreground/80'}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.href}
                  className={`mt-auto block w-full py-4 text-center text-sm font-black uppercase tracking-widest border-2 transition-colors ${plan.popular
                    ? 'bg-accent text-background border-background hover:bg-background hover:text-foreground shadow-[4px_4px_0_0_rgba(255,255,255,0.15)]'
                    : plan.id === 'for-men'
                      ? 'bg-background text-foreground border-foreground hover:bg-foreground hover:text-background'
                      : 'bg-foreground text-background border-foreground hover:bg-accent hover:border-accent'
                    }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Barbershop & Franchise Licenses info block */}
          <div className="max-w-2xl mx-auto mt-12 text-foreground p-4 text-center">
            <p className="text-sm font-medium leading-relaxed mb-4 text-foreground/75">
              The prices listed above reflect individual, single-user access. We offer discounted group rates for teams:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 py-3 border-y border-foreground/10">
              <div className="flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-widest text-foreground/50 mb-0.5">Personal Access</span>
                <span className="text-xl font-serif font-black text-foreground">$250</span>
                <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mt-0.5">Single User</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-widest text-accent mb-0.5">Shop Staff</span>
                <span className="text-xl font-serif font-black text-accent">$200</span>
                <span className="text-[10px] font-bold text-accent/60 uppercase tracking-widest mt-0.5">2-9 members</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-widest text-accent mb-0.5">Franchise</span>
                <span className="text-xl font-serif font-black text-accent">$175</span>
                <span className="text-[10px] font-bold text-accent/60 uppercase tracking-widest mt-0.5">10+ member</span>
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mt-4">
              Need multi-user access?{' '}
              <a href="#contact" className="text-accent underline hover:text-foreground transition-colors">
                Contact our support team
              </a>{' '}
              to set up your team account.
            </p>
          </div>

          {/* Pre-sale footer note */}
          <p className="text-center text-xs text-foreground/40 font-bold uppercase tracking-widest mt-16 max-w-xl mx-auto">
            All pre-sale purchases include lifetime access. Final price will increase upon full course completion.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
