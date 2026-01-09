'use client'

import { useEffect, useRef } from 'react'
import { initGSAP } from '@/lib/gsap'

export default function Parallax({
  children,
  speed = 0.2,
}: {
  children: React.ReactNode
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()

    gsap.to(ref.current, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        scrub: true,
      },
    })
  }, [speed])

  return <div ref={ref}>{children}</div>
}
