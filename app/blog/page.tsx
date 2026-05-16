import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BookOpen, Youtube } from 'lucide-react';

const posts = [
  {
    title: 'How to Choose the Haircut for You',
    desc: 'Understand your face shape, hair texture, and lifestyle to find the perfect style that naturally elevates your appearance.',
    img: '/episodes for men/1.png'
  },
  {
    title: 'The History of Barbering',
    desc: 'Discover the ancient roots of our craft and how traditional barbering evolved into the modern grooming rituals of today.',
    img: '/episodes for men/2.PNG'
  },
  {
    title: 'Grooming: How to Choose the Right Equipment',
    desc: 'A comprehensive guide to building your personal grooming kit. Learn what tools are essential and what you can skip.',
    img: '/episodes for men/3.png'
  },
  {
    title: 'Home Shaving: Everything You Need',
    desc: 'Master the art of the perfect shave at home. From skin prep to the right razor technique and aftercare.',
    img: '/episodes for men/4.png'
  },
  {
    title: 'Home Haircut: How to Freshen Up',
    desc: 'Can\'t make it to the shop? Learn the safe ways to clean up your edges and maintain your style between visits.',
    img: '/episodes for men/5.png'
  },
  {
    title: 'Home Beard Trimming Guide',
    desc: 'Keep your beard looking sharp. Step-by-step instructions on fading, lining up, and maintaining your facial hair.',
    img: '/episodes for men/6.png'
  },
  {
    title: 'Hair Drying at Home',
    desc: 'The secret to a great hairstyle is in the blow-dry. Learn professional techniques to add volume and control.',
    img: '/episodes for men/7.png'
  },
  {
    title: 'Cosmetics for Hair & Skin',
    desc: 'Navigate the world of men\'s grooming products. Find out exactly what your hair and skin type actually needs.',
    img: '/episodes for men/8.png'
  },
  {
    title: 'First Aid Kit & How to Use It',
    desc: 'Nicks and cuts happen. Learn how to properly treat minor shaving accidents and maintain skin health.',
    img: '/episodes for men/9.png'
  },
  {
    title: 'Etiquette: How to Behave in a Barbershop',
    desc: 'The unspoken rules of the chair. How to communicate with your barber and respect the shop environment.',
    img: '/episodes for men/10.png'
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b-2 border-foreground relative overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-block bg-accent text-background px-4 py-1 mb-6 border-2 border-foreground shadow-[4px_4px_0_0_#17193b]">
              <p className="text-xs font-bold tracking-widest uppercase">Self-Care Habits</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-6 uppercase tracking-tighter leading-none">
              Blog for Men
            </h1>
            <p className="text-xl text-foreground/80 font-medium leading-relaxed max-w-2xl text-balance mb-8">
              Essential knowledge for the modern man who wants to build proper self-care habits. Read our completely free guides here or watch our video highlights on YouTube.
            </p>

          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="py-24 bg-secondary relative">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <article key={i} className="group relative bg-background border-2 border-foreground shadow-[8px_8px_0_0_#17193b] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#d92b3a] transition-all duration-300 flex flex-col h-full">

                {/* Post Image */}
                <div className="relative aspect-[4/3] w-full border-b-2 border-foreground overflow-hidden bg-background">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover filter grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-background border-2 border-foreground px-2 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#17193b]">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Ep. 0{i + 1}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow bg-background">
                  <h3 className="text-xl font-black font-serif text-foreground mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 font-medium text-sm leading-relaxed mb-8 flex-grow">
                    {post.desc}
                  </p>

                  <div className="flex flex-col gap-3 mt-auto border-t-2 border-secondary pt-4">
                    <a href="#" className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors group/read">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Read Article
                      </span>
                      <span className="transform group-hover/read:translate-x-1 transition-transform">→</span>
                    </a>

                    <a href="https://www.youtube.com/@BlueprintBarberAcademy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-accent hover:text-foreground transition-colors group/watch">
                      <span className="flex items-center gap-2">
                        <Youtube className="w-4 h-4" /> Watch on YouTube
                      </span>
                      <span className="transform group-hover/watch:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>



      <Footer />
    </main>
  );
}
