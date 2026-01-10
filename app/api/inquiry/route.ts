import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: false, // MUST be false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // REQUIRED for GoDaddy
      },
    })

    await transporter.verify()

    await transporter.sendMail({
      from: `"Nexyyra Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: 'New Website Inquiry – Nexyyra',
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('SMTP ERROR:', error)
    return NextResponse.json(
      { success: false, error: 'Email sending failed' },
      { status: 500 }
    )
  }
}
