import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, experience, portfolioLinks, country } = data;

    // 1. Save to Supabase DB (ambassador_applications table)
    try {
      const { error } = await supabaseAdmin
        .from('ambassador_applications')
        .insert([
          {
            name,
            email,
            experience: String(experience),
            portfolio_links: portfolioLinks,
            country,
          }
        ]);

      if (error) {
        console.error('❌ Supabase error saving ambassador application:', error.message);
      } else {
        console.log('✅ Successfully saved ambassador application to Supabase DB');
      }
    } catch (dbError) {
      console.error('❌ Database insertion failed:', dbError);
    }

    // 2. Create a transporter for email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'blueprintbarberacademy@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password-here', 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'blueprintbarberacademy@gmail.com',
      to: 'blueprintbarberacademy@gmail.com',
      subject: `New Ambassador Application: ${name} from ${country}`,
      text: `
New Ambassador Application Received (Automatically Accepted)

Name: ${name}
Email: ${email}
Country: ${country}
Years of Experience: ${experience}
Portfolio Links: ${portfolioLinks}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API execution error:', error);
    // Even if email/database fails, we return success so the user is still redirected to checkout.
    return NextResponse.json({ success: true, error: 'Application processed with errors.' });
  }
}
