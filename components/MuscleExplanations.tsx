'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Activity, 
  Target, 
  Zap, 
  Shield,
  Heart,
  Brain,
  Eye
} from 'lucide-react'

interface MuscleExplanation {
  id: string
  name: string
  englishName: string
  icon: JSX.Element
  color: string
  description: string
  facts: string[]
  scrollTrigger: number // 0-1, when this explanation should appear
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right' | 'top-center' | 'bottom-center' // abstract positioning
}

const MuscleExplanations = ({ scrollProgress }: { scrollProgress: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const explanations: MuscleExplanation[] = [
    {
      id: 'biceps',
      name: 'שריר הדו-ראשי',
      englishName: 'Biceps Brachii',
      icon: <Activity className="w-6 h-6" />,
      color: 'neon-blue',
      description: 'כיפוף המרפק וסיבוב האמה',
      facts: [
        'מורכב משני ראשים: ראש קצר וראש ארוך',
        'מתחבר לעצם השכמה ולעצם הרדיוס',
        'עובד יחד עם שריר התלת-ראשי',
        'חיוני לתנועות דחיפה ומשיכה'
      ],
      scrollTrigger: 0.05,
      position: 'top-left'
    },
    {
      id: 'triceps',
      name: 'שריר התלת-ראשי',
      englishName: 'Triceps Brachii',
      icon: <Target className="w-6 h-6" />,
      color: 'neon-teal',
      description: 'יישור המרפק וסמיכת הזרוע',
      facts: [
        'מורכב משלושה ראשים: צדדי, אמצעי ופנימי',
        'מכסה 60% מנפח הזרוע העליונה',
        'חיוני ליציבות המרפק',
        'עובד נגד שריר הדו-ראשי'
      ],
      scrollTrigger: 0.15,
      position: 'bottom-right'
    },
    {
      id: 'deltoids',
      name: 'שריר הדלתא',
      englishName: 'Deltoid',
      icon: <Shield className="w-6 h-6" />,
      color: 'neon-purple',
      description: 'הרמת הזרוע והרחקתה מהגוף',
      facts: [
        'מורכב משלושה חלקים: קדמי, אמצעי ואחורי',
        'מכסה את מפרק הכתף',
        'חיוני לתנועות הזרוע בכל הכיוונים',
        'עובד יחד עם שרירי החזה והגב'
      ],
      scrollTrigger: 0.25,
      position: 'center-left'
    },
    {
      id: 'pectoralis',
      name: 'שרירי החזה',
      englishName: 'Pectoralis Major',
      icon: <Heart className="w-6 h-6" />,
      color: 'neon-blue',
      description: 'קירוב הזרועות והרמתן',
      facts: [
        'מורכב משני חלקים: עליון ותחתון',
        'מתחבר לעצם הבריח ולעצם החזה',
        'חיוני לתנועות דחיפה',
        'משתתף בנשימה עמוקה'
      ],
      scrollTrigger: 0.35,
      position: 'top-center'
    },
    {
      id: 'latissimus',
      name: 'שריר הגב הרחב',
      englishName: 'Latissimus Dorsi',
      icon: <Zap className="w-6 h-6" />,
      color: 'neon-teal',
      description: 'קירוב הזרועות והרמתן',
      facts: [
        'השריר הגדול ביותר בגב',
        'מתחבר לעצם הזרוע',
        'חיוני לתנועות משיכה',
        'משתתף בנשימה עמוקה'
      ],
      scrollTrigger: 0.45,
      position: 'bottom-left'
    },
    {
      id: 'quadriceps',
      name: 'שרירי הארבע-ראשי',
      englishName: 'Quadriceps Femoris',
      icon: <Activity className="w-6 h-6" />,
      color: 'neon-purple',
      description: 'יישור הברך וסיבוב הירך',
      facts: [
        'מורכב מארבעה שרירים נפרדים',
        'השריר הגדול ביותר בירך',
        'חיוני להליכה, ריצה וקפיצה',
        'מתחבר לעצם השוקה'
      ],
      scrollTrigger: 0.55,
      position: 'center-right'
    },
    {
      id: 'hamstrings',
      name: 'שרירי המיתר האחורי',
      englishName: 'Hamstrings',
      icon: <Target className="w-6 h-6" />,
      color: 'neon-blue',
      description: 'כיפוף הברך ויישור הירך',
      facts: [
        'מורכב משלושה שרירים נפרדים',
        'מתחבר לעצם השוקה והשוקית',
        'חיוני להליכה וריצה',
        'עובד נגד שרירי הארבע-ראשי'
      ],
      scrollTrigger: 0.65,
      position: 'top-right'
    },
    {
      id: 'gluteus',
      name: 'שרירי העכוז',
      englishName: 'Gluteus Maximus',
      icon: <Shield className="w-6 h-6" />,
      color: 'neon-teal',
      description: 'יישור הירך וסיבובו',
      facts: [
        'השריר הגדול ביותר בגוף',
        'מורכב משלושה שרירים נפרדים',
        'חיוני להליכה, ריצה וקפיצה',
        'מתחבר לעצם הירך'
      ],
      scrollTrigger: 0.65,
      position: 'bottom-center'
    },
    {
      id: 'calves',
      name: 'שרירי השוק',
      englishName: 'Gastrocnemius & Soleus',
      icon: <Zap className="w-6 h-6" />,
      color: 'neon-purple',
      description: 'כיפוף כף הרגל והרמת העקב',
      facts: [
        'מורכב משני שרירים עיקריים',
        'חיוני להליכה, ריצה וקפיצה',
        'מתחבר לגיד אכילס',
        'השריר החזק ביותר ביחס לגודלו'
      ],
      scrollTrigger: 0.75,
      position: 'center-left'
    }
  ]

  // Filter explanations that should be visible based on scroll progress
  const visibleExplanations = explanations.filter(exp => 
    scrollProgress >= exp.scrollTrigger && scrollProgress < exp.scrollTrigger + 0.15
  )

  // Helper function to get position classes based on position type
  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-8 left-8'
      case 'top-right':
        return 'top-8 right-8'
      case 'bottom-left':
        return 'bottom-8 left-8'
      case 'bottom-right':
        return 'bottom-8 right-8'
      case 'center-left':
        return 'top-1/2 left-8 transform -translate-y-1/2'
      case 'center-right':
        return 'top-1/2 right-8 transform -translate-y-1/2'
      case 'top-center':
        return 'top-8 left-1/2 transform -translate-x-1/2'
      case 'bottom-center':
        return 'bottom-8 left-1/2 transform -translate-x-1/2'
      default:
        return 'top-1/2 left-8 transform -translate-y-1/2'
    }
  }

  // Helper function to get animation direction based on position
  const getAnimationDirection = (position: string) => {
    switch (position) {
      case 'top-left':
      case 'center-left':
      case 'bottom-left':
        return { x: -100, y: 0 }
      case 'top-right':
      case 'center-right':
      case 'bottom-right':
        return { x: 100, y: 0 }
      case 'top-center':
        return { x: 0, y: -100 }
      case 'bottom-center':
        return { x: 0, y: 100 }
      default:
        return { x: -100, y: 0 }
    }
  }

  // Check if we're in the footer area (after the muscle explanations)
  const isInFooter = scrollProgress >= 0.85 // Hide when scroll progress is 85% or more

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {!isInFooter && visibleExplanations.map((explanation) => {
        const initialDirection = getAnimationDirection(explanation.position)
        
        return (
          <motion.div
            key={explanation.id}
            initial={{ opacity: 0, x: initialDirection.x, y: initialDirection.y }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: 0
            }}
            exit={{ opacity: 0, x: initialDirection.x, y: initialDirection.y }}
            transition={{ duration: 0.5 }}
            className={`absolute ${getPositionClasses(explanation.position)} max-w-sm bg-card-bg/90 backdrop-blur-sm border border-${explanation.color}/30 rounded-xl p-6 shadow-2xl`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`text-${explanation.color} p-2 rounded-lg bg-${explanation.color}/20`}>
                {explanation.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {explanation.name}
                </h3>
                <p className="text-sm text-neon-blue">
                  {explanation.englishName}
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              {explanation.description}
            </p>
            
            <div className="space-y-2">
              {explanation.facts.map((fact, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${explanation.color} mt-2 flex-shrink-0`} />
                  <p className="text-gray-300 text-sm">{fact}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default MuscleExplanations 