import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
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
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
