'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-white">אימון</span>
          <br />
          <span className="text-neon-blue">אישי</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          השג את המטרות שלך עם ליווי מקצועי מותאם אישית ותוכניות אימונים מתקדמות
        </p>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-8 py-4 bg-neon-blue/20 border border-neon-blue/50 rounded-full text-neon-blue hover:bg-neon-blue/30 transition-all duration-300"
        >
          התחל עכשיו - Count: {count}
        </button>
      </div>
    </main>
  )
} 