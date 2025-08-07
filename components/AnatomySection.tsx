'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronRight, ChevronDown, Info, Activity, Zap } from 'lucide-react'

interface AnatomySectionProps {
  title: string
  description: string
  system: string
  color: string
}

const AnatomySection = ({ title, description, system, color }: AnatomySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const systemData = {
    skeletal: {
      icon: <Activity className="w-8 h-8" />,
      facts: [
        "206 עצמות בגוף האדם הבוגר",
        "עצמות הן רקמה חיה שמתחדשת כל הזמן",
        "עצם הירך היא העצם הארוכה והחזקה ביותר",
        "עצמות מאחסנות מינרלים כמו סידן וזרחן"
      ],
      details: "מערכת השלד מספקת תמיכה מבנית, מגנה על איברים חיוניים, מאפשרת תנועה דרך מפרקים, ומשמשת כמאגר מינרלים. היא מורכבת מעצמות, סחוס, רצועות וגידים שעובדים יחד לשמירה על שלמות הגוף."
    },
    muscular: {
      icon: <Zap className="w-8 h-8" />,
      facts: [
        "יותר מ-600 שרירים בגוף האדם",
        "שרירים מהווים כ-40% ממשקל הגוף",
        "הלב הוא השריר שעובד הכי קשה",
        "שרירים יכולים רק למשוך, לעולם לא לדחוף"
      ],
      details: "מערכת השרירים מאפשרת תנועה, שומרת על יציבה, מייצרת חום ומגנה על איברים פנימיים. היא מורכבת משלושה סוגים: שרירי שלד (רצוניים), שרירים חלקים (לא רצוניים) ושריר הלב, כל אחד עם תפקידים מיוחדים."
    },
    cardiovascular: {
      icon: <Info className="w-8 h-8" />,
      facts: [
        "הלב פועם כ-100,000 פעמים ביום",
        "כלי דם יכולים להקיף את כדור הארץ 2.5 פעמים",
        "הלב שואב 2,000 גלונים של דם ביום",
        "דם מהווה כ-7% ממשקל הגוף"
      ],
      details: "מערכת הלב וכלי הדם מעבירה חמצן, חומרים מזינים, הורמונים ומוצרי פסולת ברחבי הגוף. היא מורכבת מהלב, כלי דם ודם, שעובדים יחד לשמירה על מחזור הדם והומאוסטזיס."
    }
  }

  const currentSystem = systemData[system as keyof typeof systemData]

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`text-${color} p-3 rounded-full bg-${color}/20 border border-${color}/30`}>
                {currentSystem.icon}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {title}
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">עובדות מפתח</h3>
              <div className="grid gap-3">
                {currentSystem.facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${color} mt-2 flex-shrink-0`} />
                    <p className="text-gray-300">{fact}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-2 px-6 py-3 bg-${color}/20 border border-${color}/50 rounded-lg text-${color} hover:bg-${color}/30 transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">
                {isExpanded ? 'הצג פחות' : 'למד עוד'}
              </span>
              {isExpanded ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </motion.button>
            
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-6 bg-card-bg/50 border border-border-glow rounded-lg"
              >
                <p className="text-gray-300 leading-relaxed">
                  {currentSystem.details}
                </p>
              </motion.div>
            )}
          </motion.div>
          
          {/* Right side - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className={`w-full h-96 bg-gradient-to-br from-${color}/20 to-transparent rounded-2xl border border-${color}/30 flex items-center justify-center`}>
              <div className="text-center">
                <div className={`text-${color} text-6xl mb-4 opacity-20`}>
                  {currentSystem.icon}
                </div>
                <p className="text-gray-400 text-lg">ויזואליזציה תלת-ממדית</p>
                <p className="text-gray-500 text-sm">חקירה אינטראקטיבית זמינה</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute top-4 right-4 w-4 h-4 bg-${color} rounded-full opacity-60`}
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className={`absolute bottom-8 left-8 w-3 h-3 bg-${color} rounded-full opacity-40`}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AnatomySection 