'use client'

import { useEffect, useState } from 'react'
import { sanity } from '@/lib/sanity'
import { initGSAP } from '@/lib/gsap'

type Service = {
  _id: string
  title: string
  description?: string
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "service" && !(_id in path("drafts.**"))] | order(order asc) {
          _id,
          title,
          description
        }`
      )
      .then((data) => {
        setServices(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err)
        setLoading(false)
      })
  }, [])

  // GSAP animation AFTER data exists
  useEffect(() => {
  if (!services.length) return

  const gsap = initGSAP()

  gsap.fromTo(
    '.service-glass',
    { autoAlpha: 0, y: 40 },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#services',
        start: 'top 70%',
        once: true, // 🔑 VERY IMPORTANT
      },
    }
  )
}, [services])


  if (loading) {
    return (
      <section id="services" className="section-services">
        <div className="container">Loading services…</div>
      </section>
    )
  }

  if (!services.length) {
    return (
      <section id="services" className="section-services">
        <div className="container">No services published yet.</div>
      </section>
    )
  }

  return (
    <section id="services" className="section-services">
      <div className="container services-grid">
        {services.map((s) => (
          <div key={s._id} className="service-glass">
            <h3>{s.title}</h3>
            {s.description && <p>{s.description}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
