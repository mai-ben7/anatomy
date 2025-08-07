/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00d4ff',
        'neon-teal': '#00f5d4',
        'neon-purple': '#8b5cf6',
        'dark-bg': '#0a0a0a',
        'card-bg': '#1a1a1a',
        'border-glow': '#00d4ff20',
      },
      fontFamily: {
        'heebo': ['var(--font-heebo)', 'Heebo', 'sans-serif'],
        'rubik': ['var(--font-rubik)', 'Rubik', 'sans-serif'],
        'hebrew': ['Heebo', 'Rubik', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #00d4ff20' },
          '100%': { boxShadow: '0 0 30px #00d4ff40, 0 0 40px #00d4ff20' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 