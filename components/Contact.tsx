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

    // WhatsApp redirect
    if (contact?.whatsapp) {
      window.open(
        `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
          `Hi Nexyra Technology,\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
        )}`,
        '_blank'
      )
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
            Phone:{' '}
            <strong>
              {contact.phone}
            </strong>
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
