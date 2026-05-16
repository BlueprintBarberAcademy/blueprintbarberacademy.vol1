import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled since globe uses WebGL
const AmbassadorGlobe = dynamic(() => import('@/components/AmbassadorGlobe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-[#0a0b1a] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-white/20 border-t-accent animate-spin mb-6"></div>
      <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Loading Globe...</p>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Ambassador Program | Blueprint Barber Academy',
  description: 'Join the Blueprint Barber Academy global ambassador network. Select your country and become a representative of our education methodology worldwide.',
};

export default function AmbassadorPage() {
  return (
    <main className="min-h-screen bg-[#0a0b1a]">
      <AmbassadorGlobe />
    </main>
  );
}
