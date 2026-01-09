'use client'

import { useEffect, useRef } from 'react'

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1)

      video.currentTime = progress * video.duration
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="video-bg">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
