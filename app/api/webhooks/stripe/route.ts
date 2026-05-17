import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase';
import nodemailer from 'nodemailer';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10' as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature') as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      const email = session.customer_email;
      const metadata = session.metadata;

      console.log('✅ Payment successful for:', email);
      
      if (email && metadata) {
        // Save to Supabase DB
        const { error } = await supabaseAdmin
          .from('users')
          .insert([
            {
              email: email,
              first_name: metadata.firstName,
              last_name: metadata.lastName,
              plan: metadata.planId,
              referral: metadata.referral,
              country: metadata.country,
              has_access: true,
            }
          ]);

        if (error) {
          console.error('❌ Error inserting user to DB:', error.message);
        } else {
          console.log('✅ Successfully saved user to Supabase DB');
          
          // Send Welcome Email
          try {
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
              },
            });

            const mailOptions = {
              from: `"Blueprint Academy" <${process.env.EMAIL_USER}>`,
              to: email,
              subject: 'Ласкаво просимо до Blueprint Academy! 💈 Ваші матеріали',
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                  <h1 style="color: #111;">Вітаємо, ${metadata.firstName}! 🎉</h1>
                  <p>Дякуємо за покупку <strong>${metadata.planId === 'advance' ? 'Advance' : 'Ambassador'} Plan</strong> в Blueprint Barber Academy.</p>
                  <p>Оскільки це передпродаж, ви отримуєте ексклюзивний ранній доступ до наших матеріалів. Ми дуже цінуємо вашу довіру!</p>
                  
                  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                    <h2 style="margin-top: 0;">Ваші посилання для доступу:</h2>
                    <ul style="line-height: 1.6;">
                      <li>🎥 <strong>Відеоуроки:</strong> <a href="ТУТ_ВАШЕ_ПОСИЛАННЯ_НА_YOUTUBE" style="color: #0066cc;">Відкрити закритий YouTube плейлист</a></li>
                      <li>📖 <strong>Текстовий мануал:</strong> <a href="ТУТ_ВАШЕ_ПОСИЛАННЯ_НА_GOOGLE_DOCS" style="color: #0066cc;">Відкрити Google Документ</a></li>
                    </ul>
                  </div>

                  <p style="color: #666; font-size: 14px;"><em>*Будь ласка, не передавайте ці посилання іншим особам, оскільки вони призначені виключно для вас.</em></p>
                  
                  <p>Якщо у вас виникнуть запитання, просто дайте відповідь на цей лист.</p>
                  
                  <br/>
                  <p>З повагою,<br/><strong>Команда Blueprint Academy</strong></p>
                </div>
              `
            };

            await transporter.sendMail(mailOptions);
            console.log('✅ Welcome email sent successfully to:', email);
          } catch (mailError) {
            console.error('❌ Error sending welcome email:', mailError);
          }
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
