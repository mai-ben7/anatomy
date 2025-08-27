'use client'

import { useState } from 'react'

export default function TestPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neon-blue mb-4">Test Page</h1>
        <p className="text-white mb-4">If you can see this, the basic setup is working!</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-neon-blue/20 border border-neon-blue/50 rounded text-neon-blue hover:bg-neon-blue/30"
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}
