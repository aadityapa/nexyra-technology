'use client'

import { useEffect, useState } from 'react'

export default function ScrollFog() {
  const [blur, setBlur] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const value = Math.min(window.scrollY / 400, 1)
      setBlur(value * 12)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fog-layer"
      style={{ backdropFilter: `blur(${blur}px)` }}
    />
  )
}
