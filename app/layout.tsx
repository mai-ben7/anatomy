import type { Metadata } from 'next'
import { Heebo, Rubik } from 'next/font/google'
import './globals.css'

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heebo'
})

const rubik = Rubik({ 
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  title: 'Human Anatomy 3D Explorer',
  description: 'Interactive 3D human anatomy exploration with detailed anatomical models and educational content.',
  keywords: 'anatomy, 3D, medical, education, human body, interactive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
} 