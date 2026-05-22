import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: reviews, error } = await supabaseAdmin
      .from('reviews')
      .select('id, name, review, created_at')
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    if (error) {
      // If table doesn't exist yet, we can gracefully return an empty list or error
      // This helps prevent landing page crashes if the user hasn't run the SQL yet.
      if (error.code === '42P01') {
        console.warn('⚠️ Supabase table "reviews" does not exist yet. Please run the SQL migration.');
        return NextResponse.json({ reviews: [] });
      }
      console.error('❌ Supabase error fetching reviews:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ reviews });
  } catch (err: any) {
    console.error('❌ Reviews GET API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, review } = body;

    if (!name || !email || !review) {
      return NextResponse.json({ error: 'Будь ласка, заповніть усі поля.' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();

    // 1. Verify email in 'users' table
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('email, has_access')
      .eq('email', cleanEmail)
      .eq('has_access', true)
      .maybeSingle();

    if (userError) {
      console.error('❌ Supabase error verifying user purchase:', userError.message);
      return NextResponse.json({ error: 'Помилка бази даних під час перевірки оплати.' }, { status: 500 });
    }

    if (!user) {
      return NextResponse.json(
        { 
          error: 'NOT_A_BUYER', 
          message: 'Цей email не знайдено серед покупців курсу. Тільки покупці курсу можуть залишати відгуки.' 
        }, 
        { status: 403 }
      );
    }

    // 2. Insert review to 'reviews' table
    const { error: insertError } = await supabaseAdmin
      .from('reviews')
      .insert([
        {
          name: name.trim(),
          email: cleanEmail,
          review: review.trim(),
          is_approved: true, // Auto-approve since email is verified
        }
      ]);

    if (insertError) {
      console.error('❌ Supabase error saving review:', insertError.message);
      return NextResponse.json({ error: 'Помилка при збереженні вашого відгуку.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('❌ Reviews POST API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
