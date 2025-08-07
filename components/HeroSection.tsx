'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Brain, Heart, Bone } from 'lucide-react'

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 pointer-events-auto"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-white">אנטומיה</span>
          <br />
          <span className="text-neon-blue">אנושית</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          חקור את המערכות המורכבות של הגוף האנושי באמצעות ויזואליזציה תלת-ממדית אינטראקטיבית
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex items-center gap-2 text-neon-blue">
            <Brain className="w-6 h-6" />
            <span className="text-sm font-medium">מערכת העצבים</span>
          </div>
          <div className="flex items-center gap-2 text-neon-teal">
            <Heart className="w-6 h-6" />
            <span className="text-sm font-medium">מערכת הלב וכלי הדם</span>
          </div>
          <div className="flex items-center gap-2 text-neon-purple">
            <Bone className="w-6 h-6" />
            <span className="text-sm font-medium">מערכת השלד</span>
          </div>
        </motion.div>
        
        <motion.button
          onClick={scrollToContent}
          className="group flex items-center gap-2 px-8 py-4 bg-neon-blue/20 border border-neon-blue/50 rounded-full text-neon-blue hover:bg-neon-blue/30 transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium">חקור מערכות</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </motion.button>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection 