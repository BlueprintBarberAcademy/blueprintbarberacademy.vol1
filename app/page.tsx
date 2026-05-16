import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import PainPoint from '@/components/PainPoint';

import WhyUs from '@/components/WhyUs';
import CourseShowcase from '@/components/CourseShowcase';
import FinalCTA from '@/components/FinalCTA';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <PainPoint />

      <WhyUs />
      <CourseShowcase />
      <FinalCTA />

      <Footer />
    </main>
  );
}
