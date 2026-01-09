'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function FAQ() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.faq-item', {
      scrollTrigger: {
        trigger: '.faq',
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
    })
  }, [])

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h4>How long does a project take?</h4>
        <p>Most projects take 2–4 weeks depending on scope.</p>
      </div>

      <div className="faq-item">
        <h4>Do you offer ongoing support?</h4>
        <p>Yes, we provide long-term maintenance and optimization.</p>
      </div>

      <div className="faq-item">
        <h4>Can I scale later?</h4>
        <p>Absolutely. Our architecture is built for growth.</p>
      </div>
    </section>
  )
}
