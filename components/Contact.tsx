'use client'

import { useEffect, useState } from 'react'
import { getContact } from '@/lib/getContact'

export default function Contact() {
  const [contact, setContact] = useState<any>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    getContact().then(setContact)
  }, [])

  const submit = async (e: any) => {
    e.preventDefault()

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    // Save inquiry
    await fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    // ✅ FIXED WhatsApp redirect
    if (contact?.whatsapp) {
      // Remove non-digits
      const rawNumber = contact.whatsapp.replace(/\D/g, '')

      // Ensure valid Indian number
      if (rawNumber.length === 10) {
        const phoneNumber = `91${rawNumber}`

        const message = `
Hi Nexyra Technology,

Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
        `.trim()

        window.open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
          '_blank'
        )
      }
    }

    setSent(true)
  }

  if (!contact) return null

  return (
    <section id="contact" className="section-contact">
      <div className="container contact-box">
        <div>
          <h1>Contact</h1>
          <h2>Nexyra Technology</h2>

          <h3>Email: {contact.email}</h3>
          <p>
            Phone: <strong>{contact.phone}</strong>
          </p>
        </div>

        {!sent ? (
          <form onSubmit={submit} className="inquiry-form">
            <input name="name" placeholder="Your Name" required />
            <input name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Inquiry" required />
            <button type="submit">Send Inquiry</button>
          </form>
        ) : (
          <p>✅ Thank you! We’ll contact you soon.</p>
        )}
      </div>
    </section>
  )
}
