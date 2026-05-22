import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, program, educator, additionalInfo } = body;

    if (!fullName || !email || !program) {
      return NextResponse.json({ error: 'Name, email, and program are required.' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('education_bookings')
      .insert([
        {
          full_name: fullName,
          email: email,
          program: program,
          educator: educator || null,
          additional_info: additionalInfo || null,
        }
      ]);

    if (error) {
      console.error('Supabase error saving education booking:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Education booking API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
