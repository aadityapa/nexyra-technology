'use client'

import { useEffect, useRef, useState } from 'react'
import { sanity } from '@/lib/sanity'
import { initGSAP } from '@/lib/gsap'

type Service = {
  _id: string
  title: string
  description?: string
  depth?: number
  video?: { asset?: { url: string } }
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    sanity.fetch(
      `*[_type == "service" && !(_id in path("drafts.**"))]{
        _id,
        title,
        description,
        depth,
        "video": video.asset->{url}
      }`
    ).then(setServices)
  }, [])

  useEffect(() => {
    if (!services.length) return

    const gsap = initGSAP()

    cardsRef.current.forEach((card, i) => {
      if (!card) return

      const depth = services[i]?.depth ?? 40

      // Entry animation
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Scroll parallax (CMS-controlled)
      gsap.to(card, {
        y: -depth,
        ease: 'none',
        scrollTrigger: {
          trigger: '#services',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
  }, [services])

  // 🖱️ Magnetic hover + 3D tilt
  const onMove = (e: React.MouseEvent, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)

    card.style.transform = `
      perspective(1200px)
      rotateX(${(-y / rect.height) * 16}deg)
      rotateY(${(x / rect.width) * 16}deg)
      translateZ(40px)
    `
  }

  const reset = (card: HTMLDivElement) => {
    card.style.transform =
      'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)'
  }

  return (
    <section id="services" className="section-services">
      <div className="container services-grid">
        {services.map((s, i) => (
          <div
            key={s._id}
            ref={(el) => el && (cardsRef.current[i] = el)}
            className="service-card-elite"
            onMouseMove={(e) => onMove(e, cardsRef.current[i])}
            onMouseLeave={() => reset(cardsRef.current[i])}
          >
            {s.video?.url && (
              <video
                className="card-video"
                src={s.video.url}
                autoPlay
                muted
                loop
                playsInline
              />
            )}

            <div className="card-content">
              <h3>{s.title}</h3>
              {s.description && <p>{s.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
