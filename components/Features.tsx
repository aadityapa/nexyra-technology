'use client'

import { useEffect } from 'react'
import { initGSAP } from '@/lib/gsap'

export default function Features() {
  useEffect(() => {
    const gsap = initGSAP()

    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.section-features',
        start: 'top 75%',
      },
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 0.9,
    })
  }, [])

  return (
    <section className="section-features">
      <div className="container features">
        <div className="feature-card glow">Fast Delivery</div>
        <div className="feature-card glow">Clean UX</div>
        <div className="feature-card glow">Growth Focused</div>
      </div>
    </section>
  )
}
