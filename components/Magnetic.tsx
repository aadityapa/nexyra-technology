'use client'

import { useRef } from 'react'

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const move = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={reset}>
      {children}
    </div>
  )
}
