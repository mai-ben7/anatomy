'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ParticleEffect = () => {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const particles = particlesRef.current
    if (!particles) return

    // Create particles
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      // Random position
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      
      // Random size
      const size = Math.random() * 3 + 1
      particle.style.width = size + 'px'
      particle.style.height = size + 'px'
      
      // Random animation duration
      const duration = Math.random() * 4 + 3
      particle.style.animationDuration = duration + 's'
      
      // Random delay
      particle.style.animationDelay = Math.random() * 2 + 's'
      
      particles.appendChild(particle)
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, duration * 1000)
    }

    // Create particles periodically
    const interval = setInterval(createParticle, 200)
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100)
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div 
      ref={particlesRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-bg/20 to-dark-bg" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-teal/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  )
}

export default ParticleEffect 