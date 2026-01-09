'use client'
import ScrollVideo from '@/components/ScrollVideo'
import ScrollFog from '@/components/ScrollFog'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import FloatingChat from '@/components/FloatingChat'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

export default function Home() {
  return (
    <>
      <ScrollVideo />
      <ScrollFog />
      <Cursor />
      <Header />
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
      <FloatingChat />
      <Footer />
    </>
  )
}
