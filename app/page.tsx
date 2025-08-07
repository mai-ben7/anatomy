'use client'

import { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import ParticleEffect from '@/components/ParticleEffect'
import MuscleExplanations from '@/components/MuscleExplanations'

// Dynamically import the 3D components to avoid SSR issues
const AnatomyModel = dynamic(() => import('@/components/AnatomyModel'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-neon-blue text-xl">Loading 3D Model...</div>
    </div>
  ),
})

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const screenHeight = window.innerHeight
      const maxScroll = screenHeight * 6 // 6 full screen heights for complete 360 rotation
      const progress = Math.max(0, Math.min(scrollY / maxScroll, 1))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-dark-bg relative">
      <ParticleEffect />
      
      {/* Content overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="relative z-20 h-full flex items-center justify-start pl-8">
            <HeroSection />
          </div>
        </section>

        {/* 3D Model only in body systems sections */}
        <div className="relative">
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Suspense fallback={<div className="text-neon-blue">Loading...</div>}>
              <AnatomyModel />
            </Suspense>
          </div>
          
          {/* Muscle Explanations */}
          <MuscleExplanations scrollProgress={scrollProgress} />
          
                      {/* Empty sections to maintain space for 3D model animation */}
           <section className="min-h-screen"></section>
           <section className="min-h-screen"></section>
           <section className="min-h-screen"></section>
           <section className="min-h-screen"></section>
           <section className="min-h-screen"></section>
        </div>

        {/* Footer - no 3D model here */}
        <Footer />
      </div>
    </main>
  )
} 