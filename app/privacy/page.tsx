import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Header />

      <section className="py-16 md:py-24 border-b-2 border-foreground relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--foreground) 0, var(--foreground) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-foreground text-background px-4 py-1 mb-6 border-2 border-foreground shadow-[4px_4px_0_0_#d92b3a]">
              <p className="text-xs font-bold tracking-widest uppercase">Legal</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-6 uppercase tracking-tighter leading-none">
              Privacy Policy
            </h1>
            <p className="text-foreground/60 text-sm font-bold uppercase tracking-widest">
              Last updated: January 12, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl prose-container">

            <article className="space-y-12">

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">1. Introduction</h2>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  Our website, blueprintbarberacademy.com (hereinafter: &quot;website&quot;) uses cookies and other related technologies (for convenience, all technologies are referred to as &quot;cookies&quot;). Cookies are also placed by third-party websites. In the following document, we provide information about the use of cookies on our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">2. What Are Cookies?</h2>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  A cookie is a small, simple file that is sent along with the pages of this website and stored by your browser on your computer&apos;s hard drive or other device. The information stored in cookies may be returned to our servers or to the servers of relevant third parties during your next visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">3. What Are Scripts?</h2>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  A script is a piece of program code that ensures the proper and interactive functioning of our website. This code is executed on our server or on your device.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">4. What Is a Pixel Tag?</h2>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  A web beacon (or pixel tag) is a small, invisible piece of text or image on a web page that is used to monitor website traffic. To do this, various data about you is stored using web beacons.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">5. Cookies</h2>
                <div className="space-y-6">
                  <div className="bg-secondary p-6 border-l-4 border-accent">
                    <h3 className="font-black text-foreground uppercase tracking-widest text-sm mb-2">5.1 Technical or Functional Cookies</h3>
                    <p className="text-foreground/80 font-medium leading-relaxed text-sm">
                      Some cookies ensure that certain parts of the website work properly and that we can recognize your preferences. By placing functional cookies, we make it easier for you to visit our website. We may place these cookies without your consent.
                    </p>
                  </div>
                  <div className="bg-secondary p-6 border-l-4 border-foreground">
                    <h3 className="font-black text-foreground uppercase tracking-widest text-sm mb-2">5.2 Analytical Cookies</h3>
                    <p className="text-foreground/80 font-medium leading-relaxed text-sm">
                      We use analytical cookies to optimize the website experience for our users. These analytical cookies give us insight into how our website is used. Please consent to the use of analytical cookies.
                    </p>
                  </div>
                  <div className="bg-secondary p-6 border-l-4 border-foreground">
                    <h3 className="font-black text-foreground uppercase tracking-widest text-sm mb-2">5.3 Advertising Cookies</h3>
                    <p className="text-foreground/80 font-medium leading-relaxed text-sm">
                      On this website, we use advertising cookies that enable us to personalize ads and allow us (and third parties) to view campaign results. This is based on a profile that we create based on your clicks and browsing behavior.
                    </p>
                  </div>
                  <div className="bg-secondary p-6 border-l-4 border-foreground">
                    <h3 className="font-black text-foreground uppercase tracking-widest text-sm mb-2">5.4 Marketing / Tracking Cookies</h3>
                    <p className="text-foreground/80 font-medium leading-relaxed text-sm">
                      Marketing/tracking cookies are cookies used to create a user profile for the purpose of displaying advertisements or tracking that user across websites for similar marketing purposes. Since these cookies are marked as tracking cookies, we ask for your consent to place them.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">6. Consent</h2>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  When you visit our website for the first time, we will show you a pop-up window with an explanation about cookies. By clicking the &quot;Accept&quot; button, you agree to our use of the categories of cookies and plugins selected in the pop-up window, as described in this cookie statement. The use of cookies can be disabled via your browser, but please note that our website may no longer function properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">7. Enabling / Disabling and Deleting Cookies</h2>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  You can use your web browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change your web browser settings so that you receive a message each time a cookie is placed. Please note that our website may not function properly if all cookies are disabled.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">8. Your Rights Regarding Personal Data</h2>
                <ul className="space-y-3 text-foreground/80 font-medium leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span>You have the right to know why your personal data is needed, what will happen to it, and how long it will be stored.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span>Right of access: You have the right to access the personal data we hold about you.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span>Right to rectification: You have the right to complete, correct, delete, or block your personal data at any time.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span>If you consent to the processing of your data, you have the right to revoke this consent and delete your personal data.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span>Right to data portability: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span>Right to object: You may object to the processing of your data. We will comply with this unless there are legitimate grounds for processing.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">9. Contact Details</h2>
                <div className="bg-secondary p-6 border-l-4 border-accent">
                  <p className="text-foreground/80 font-medium leading-relaxed">
                    If you have any questions and/or comments about our cookie policy and this statement, please contact us:
                  </p>
                  <p className="text-foreground font-bold mt-4">
                    Blueprint Barber Academy<br />
                    Warsaw, Poland<br />
                    Email: blueprintbarberacademy@gmail.com
                  </p>
                </div>
              </div>

            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
