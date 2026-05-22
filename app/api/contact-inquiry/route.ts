import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('contact_inquiries')
      .insert([
        {
          name: name,
          email: email,
          subject: subject,
          message: message,
        }
      ]);

    if (error) {
      console.error('Supabase error saving contact inquiry:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Contact inquiry API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
