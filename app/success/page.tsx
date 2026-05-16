import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background pt-24 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center container mx-auto px-6 py-12">
        <div className="max-w-md w-full border-4 border-foreground bg-secondary p-8 md:p-12 text-center shadow-[12px_12px_0_0_#d92b3a]">
          <div className="w-20 h-20 mx-auto bg-accent rounded-full border-4 border-foreground flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-background" strokeWidth={3} />
          </div>
          <h1 className="text-3xl font-serif font-black text-foreground uppercase tracking-wider mb-4">
            Payment Successful!
          </h1>
          <p className="text-foreground/80 font-medium mb-8">
            Thank you for joining Blueprint Academy. Your payment has been securely processed. We have sent the confirmation and access details to your email.
          </p>
          <Link
            href="/"
            className="inline-block w-full bg-foreground text-background border-2 border-foreground py-4 font-black uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors shadow-[4px_4px_0_0_rgba(255,255,255,0.15)]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
