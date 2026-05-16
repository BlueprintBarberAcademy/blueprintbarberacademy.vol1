import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Create a transporter. In production, you'll want to use proper environment variables for this.
    // Ensure you have EMAIL_USER and EMAIL_PASS in your .env.local file.
    // If using Gmail, you need to generate an "App Password" in your Google Account settings.
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
      subject: `New Ambassador Application: ${data.name} from ${data.country}`,
      text: `
New Ambassador Application Received (Automatically Accepted)

Name: ${data.name}
Country: ${data.country}
Years of Experience: ${data.experience}
Shop/Salon Name: ${data.shopName}
Portfolio Links: ${data.portfolioLinks}
Work Location: ${data.workLocation}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    // Even if email fails (e.g. missing credentials), we return success so the user is still redirected to checkout.
    return NextResponse.json({ success: true, error: 'Email configuration missing, but application processed.' });
  }
}
