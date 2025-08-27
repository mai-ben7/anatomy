import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeroSection from '../../components/HeroSection'

// Mock the content hook
jest.mock('../../hooks/useContent', () => ({
  useContent: () => ({
    t: (key: string) => key,
    language: 'he',
    isRTL: true,
  }),
}))

describe('HeroSection', () => {
  it('renders hero section with title', () => {
    render(<HeroSection />)
    
    // Check if the main title is rendered (split across spans)
    expect(screen.getByText('אימון')).toBeInTheDocument()
    expect(screen.getByText('אישי')).toBeInTheDocument()
  })

  it('renders subtitle text', () => {
    render(<HeroSection />)
    
    // Check if subtitle is rendered
    expect(screen.getByText(/השג את המטרות שלך/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<HeroSection />)
    
    // Check if CTA button is rendered
    expect(screen.getByText('התחל עכשיו')).toBeInTheDocument()
  })

  it('renders feature icons', () => {
    render(<HeroSection />)
    
    // Check if feature texts are rendered
    expect(screen.getByText('אימוני כוח')).toBeInTheDocument()
    expect(screen.getByText('כושר לב-ריאה')).toBeInTheDocument()
    expect(screen.getByText('ירידה במשקל')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<HeroSection />)
    
    // Check if button is accessible (native button elements don't need role)
    const ctaButton = screen.getByRole('button', { name: 'התחל עכשיו' })
    expect(ctaButton).toBeInTheDocument()
  })
})
