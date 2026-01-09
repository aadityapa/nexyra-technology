'use client'

import { useEffect, useState } from 'react'

const sections = ['home', 'services', 'pricing', 'contact']

export default function Header() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">Nexyra<span>.</span></div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {sections.map((id) => (
            <button
              key={id}
              className={`nav-link ${active === id ? 'active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? 'show' : ''}`}>
        {sections.map((id) => (
          <button
            key={id}
            className={`mobile-link ${active === id ? 'active' : ''}`}
            onClick={() => scrollTo(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>
    </header>
  )
}
