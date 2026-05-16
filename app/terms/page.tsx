import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-foreground/60 text-sm font-bold uppercase tracking-widest">
              Last updated: January 12, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">

            <article className="space-y-12">

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">1. Introduction</h2>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  These Terms and Conditions set out the rules for using the Blueprint Barber Academy website available at blueprint-academy.com and the terms and conditions for providing online educational services within the Blueprint platform. By using the website, you agree to these Terms and Conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">2. Definitions</h2>
                <ul className="space-y-3 text-foreground/80 font-medium leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">Blueprint Academy</strong> – an online educational platform providing barbering courses, text manuals, video lessons, and live education programs.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">User</strong> – a natural person, legal person, or organizational unit without legal personality using Blueprint Academy services.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">User Account</strong> – a set of data and settings associated with a given User in the Blueprint Academy system.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">3. Registration and User Account</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>3.1. To use the full functionality of the website, you must create a User Account by registering.</p>
                  <p>3.2. During the registration process, the User is required to provide accurate information and protect their login details from access by third parties.</p>
                  <p>3.3. The User bears full responsibility for actions performed using their User Account.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">4. Subscription Models and Access to Content</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>4.1. Blueprint Academy offers multiple subscription tiers providing varying levels of access to educational content, courses, and platform features. Current pricing and plans are available at the Join page.</p>
                  <p>4.2. Payment for the next billing period is automatically charged to the User&apos;s selected payment method.</p>
                  <p>4.3. You can manage your subscription, including canceling it, changing your plan, or updating your payment details, through your User Account panel.</p>
                  <p>4.4. Payments are processed through secure third-party payment providers. Your payment details are handled directly by these providers in accordance with their own privacy and security policies.</p>
                  <p>4.5. Fees paid for a billing period that has already started are non-refundable.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">5. Digital Content and the Right of Withdrawal</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>5.1. In the case of purchasing a subscription enabling access to digital content that is not delivered on a tangible medium, the right to withdraw from the contract does not apply once the service has commenced with the consumer&apos;s express consent.</p>
                  <p>5.2. By placing an order and accepting these Terms and Conditions, the User agrees to the commencement of service provision before the expiry of the 14-day withdrawal period and acknowledges that they lose the right to withdraw from the contract after the service has commenced.</p>
                  <p>5.3. The provision of the service begins when the digital content is made available to the user on the platform, which occurs immediately after payment and account confirmation.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">6. Intellectual Property Rights</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>6.1. All content, educational materials, video courses, graphics, trademarks, and other elements available on the platform are the property of Blueprint Academy or its partners and are protected by copyright.</p>
                  <p>6.2. The user may use the educational materials solely for their own use. It is prohibited to:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-3 items-start">
                      <span className="w-2 h-2 bg-foreground mt-2 flex-shrink-0"></span>
                      <span>Copy, distribute, and make content available to third parties</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-2 h-2 bg-foreground mt-2 flex-shrink-0"></span>
                      <span>Publicly play or display video materials</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-2 h-2 bg-foreground mt-2 flex-shrink-0"></span>
                      <span>Use materials for commercial purposes</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-2 h-2 bg-foreground mt-2 flex-shrink-0"></span>
                      <span>Record, download, or otherwise preserve content without written consent</span>
                    </li>
                  </ul>
                  <p>6.3. Violation of intellectual property rights may result in legal liability and blocking of access to the service.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">7. Responsible Use of the Platform</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>7.1. The User undertakes to use the platform in a manner consistent with the law, good manners, and these Terms and Conditions.</p>
                  <p>7.2. It is prohibited to: share your account with third parties, attempt to circumvent technical security measures, provide illegal content, or act in a manner that disrupts the functioning of the platform.</p>
                  <p>7.3. Blueprint Academy reserves the right to block access to the account of any user who violates these terms.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">8. Limitation of Liability</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>8.1. Blueprint Academy makes every effort to ensure the highest quality of services provided, but does not guarantee that the service will be available continuously and free from errors, or that the educational materials will meet all user expectations.</p>
                  <p>8.2. Blueprint Academy shall not be liable for interruptions in access resulting from technical reasons beyond our control, damage incurred by the user as a result of improper use, or the effects of applying the knowledge acquired during the courses.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">9. Protection of Personal Data</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>9.1. Blueprint Academy is the administrator of users&apos; personal data.</p>
                  <p>9.2. Personal data is processed for the purpose of providing services, handling payments, and communicating with the user.</p>
                  <p>9.3. Detailed rules for the processing of personal data can be found in our <a href="/privacy" className="text-accent font-bold border-b border-accent hover:text-foreground transition-colors">Privacy Policy</a>.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">10. Complaints</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>10.1. The user has the right to submit complaints regarding the operation of the platform and the quality of services.</p>
                  <p>10.2. Complaints should be sent to the email address: blueprintbarberacademy@gmail.com.</p>
                  <p>10.3. Complaints will be considered within 14 days of receipt.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">11. Changes to the Terms and Conditions</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>11.1. Blueprint Academy reserves the right to amend these Terms and Conditions.</p>
                  <p>11.2. Users will be informed of any planned changes via email or through a message on the platform.</p>
                  <p>11.3. Changes come into effect 14 days after the date of their announcement.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-black text-foreground uppercase tracking-tight mb-4 border-b-2 border-foreground pb-2">12. Final Provisions</h2>
                <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <p>12.1. In matters not covered by these Terms and Conditions, the provisions of applicable law shall apply.</p>
                  <p>12.2. Any disputes arising from the use of Blueprint Academy services shall be settled by the competent court.</p>
                  <p>12.3. These Terms and Conditions enter into force on the date of their publication on the Blueprint Academy platform.</p>
                </div>
              </div>

              <div className="bg-secondary p-6 border-l-4 border-accent">
                <p className="text-foreground/80 font-medium leading-relaxed">
                  If you have any questions or problems related to the use of the platform, please contact us via the contact form available in the footer of this website.
                </p>
              </div>

            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
