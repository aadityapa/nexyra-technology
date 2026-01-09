import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  // ✅ FIX: required for OpenGraph & Twitter images
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),

  title: 'Nexyra Technology — Design. Develop. Promote.',
  description:
    'Nexyra Technology is a premium design, development, and growth studio for modern brands.',

  keywords: [
    'UI UX Design',
    'Web Development',
    'Brand Strategy',
    'Next.js Agency',
    'Creative Studio',
  ],

  openGraph: {
    title: 'Nexyra Technology — Design. Develop. Promote.',
    description:
      'Premium design, development, and growth studio for modern digital brands.',
    url: 'https://nexyyra.com',
    siteName: 'Nexyra Technology',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Nexyra Technology',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nexyra Technology — Design. Develop. Promote.',
    description: 'Premium digital studio',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* ✅ Analytics safely loaded on client */}
        <Analytics />

        {children}
      </body>
    </html>
  )
}
