import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planId, email, firstName, lastName, country, referral } = body;

    const planDetails: Record<string, { name: string; price: number }> = {
      advance: { name: 'Advance', price: 25000 }, // $250.00
      ambassador: { name: 'Ambassador', price: 25000 }, // $250.00
    };

    const plan = planDetails[planId] || planDetails.advance;

    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Blueprint Academy — ${plan.name} Plan`,
            },
            unit_amount: plan.price,
          },
          quantity: 1,
        },
      ],
      metadata: {
        firstName,
        lastName,
        country,
        referral,
        planId,
      },
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?plan=${planId}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
