'use client'

import { useEffect } from 'react'
import { initGSAP } from '@/lib/gsap'
import Parallax from './Parallax'
import Magnetic from './Magnetic'

export default function Hero() {
  useEffect(() => {
    const gsap = initGSAP()

    gsap.from('.hero-line', {
      opacity: 0,
      y: 80,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
    })
  }, [])

  return (
    <section id="home" className="section-hero">
      <div className="container">
        <Parallax speed={-0.15}>
          <h1 className="hero-line">
            Design. <span>Develop.</span> Promote.
          </h1>
        </Parallax>

        <p className="hero-line">
          Your one-stop tech & design studio
        </p>

        <Magnetic>
          <button
            className="cta-btn hero-line"
            onClick={() =>
              document
                .getElementById('pricing')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get Started
          </button>
        </Magnetic>
      </div>
    </section>
  )
}