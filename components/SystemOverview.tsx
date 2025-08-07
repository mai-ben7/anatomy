'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Activity, 
  Target, 
  Zap, 
  Shield,
  ChevronRight,
  ExternalLink,
  Heart,
  Brain,
  Eye
} from 'lucide-react'

const SystemOverview = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const muscles = [
    {
      id: 'biceps',
      name: 'שריר הדו-ראשי',
      englishName: 'Biceps Brachii',
      icon: <Activity className="w-6 h-6" />,
      color: 'neon-blue',
      location: 'זרוע עליונה',
      function: 'כיפוף המרפק וסיבוב האמה',
      facts: [
        'מורכב משני ראשים: ראש קצר וראש ארוך',
        'מתחבר לעצם השכמה ולעצם הרדיוס',
        'עובד יחד עם שריר התלת-ראשי',
        'חיוני לתנועות דחיפה ומשיכה'
      ],
      details: 'שריר הדו-ראשי הוא אחד השרירים המזוהים ביותר בגוף. הוא ממוקם בחלק הקדמי של הזרוע העליונה ומורכב משני ראשים שמתחברים בנקודות שונות. השריר אחראי על כיפוף המרפק וסיבוב האמה כלפי מעלה, מה שהופך אותו לחיוני בפעילויות יומיומיות כמו הרמת חפצים ופעילויות ספורט.'
    },
    {
      id: 'triceps',
      name: 'שריר התלת-ראשי',
      englishName: 'Triceps Brachii',
      icon: <Target className="w-6 h-6" />,
      color: 'neon-teal',
      location: 'זרוע עליונה אחורית',
      function: 'יישור המרפק וסמיכת הזרוע',
      facts: [
        'מורכב משלושה ראשים: צדדי, אמצעי ופנימי',
        'מכסה 60% מנפח הזרוע העליונה',
        'חיוני ליציבות המרפק',
        'עובד נגד שריר הדו-ראשי'
      ],
      details: 'שריר התלת-ראשי הוא השריר הגדול ביותר בזרוע העליונה. הוא ממוקם בחלק האחורי של הזרוע ומורכב משלושה ראשים שמתחברים בנקודות שונות. השריר אחראי על יישור המרפק וסמיכת הזרוע לגוף, מה שהופך אותו לחיוני בפעילויות כמו דחיפה, זריקה ופעילויות ספורט.'
    },
    {
      id: 'deltoids',
      name: 'שריר הדלתא',
      englishName: 'Deltoid',
      icon: <Shield className="w-6 h-6" />,
      color: 'neon-purple',
      location: 'כתף',
      function: 'הרמת הזרוע והרחקתה מהגוף',
      facts: [
        'מורכב משלושה חלקים: קדמי, אמצעי ואחורי',
        'מכסה את מפרק הכתף',
        'חיוני לתנועות הזרוע בכל הכיוונים',
        'עובד יחד עם שרירי החזה והגב'
      ],
      details: 'שריר הדלתא הוא השריר העיקרי של הכתף. הוא ממוקם מעל מפרק הכתף ומורכב משלושה חלקים שמאפשרים תנועה בכל הכיוונים. השריר אחראי על הרמת הזרוע, הרחקתה מהגוף וסיבובה, מה שהופך אותו לחיוני בפעילויות יומיומיות וספורט.'
    },
    {
      id: 'pectoralis',
      name: 'שרירי החזה',
      englishName: 'Pectoralis Major',
      icon: <Heart className="w-6 h-6" />,
      color: 'neon-blue',
      location: 'חזה',
      function: 'קירוב הזרועות והרמתן',
      facts: [
        'מורכב משני חלקים: עליון ותחתון',
        'מתחבר לעצם הבריח ולעצם החזה',
        'חיוני לתנועות דחיפה',
        'משתתף בנשימה עמוקה'
      ],
      details: 'שרירי החזה הם קבוצת שרירים גדולה הממוקמת בחלק הקדמי של החזה. הם מורכבים משריר החזה הגדול ושריר החזה הקטן. השרירים אחראים על קירוב הזרועות לגוף, הרמתן והרחקתן, מה שהופך אותם לחיוניים בפעילויות כמו דחיפה, זריקה ופעילויות ספורט.'
    },
    {
      id: 'latissimus',
      name: 'שריר הגב הרחב',
      englishName: 'Latissimus Dorsi',
      icon: <Zap className="w-6 h-6" />,
      color: 'neon-teal',
      location: 'גב תחתון',
      function: 'קירוב הזרועות והרמתן',
      facts: [
        'השריר הגדול ביותר בגב',
        'מתחבר לעצם הזרוע',
        'חיוני לתנועות משיכה',
        'משתתף בנשימה עמוקה'
      ],
      details: 'שריר הגב הרחב הוא השריר הגדול ביותר בגב. הוא ממוקם בחלק התחתון של הגב ומתחבר לעצם הזרוע. השריר אחראי על קירוב הזרועות לגוף, הרמתן והרחקתן, מה שהופך אותו לחיוני בפעילויות כמו משיכה, טיפוס ופעילויות ספורט.'
    },
    {
      id: 'quadriceps',
      name: 'שרירי הארבע-ראשי',
      englishName: 'Quadriceps Femoris',
      icon: <Activity className="w-6 h-6" />,
      color: 'neon-purple',
      location: 'ירך קדמית',
      function: 'יישור הברך וסיבוב הירך',
      facts: [
        'מורכב מארבעה שרירים נפרדים',
        'השריר הגדול ביותר בירך',
        'חיוני להליכה, ריצה וקפיצה',
        'מתחבר לעצם השוקה'
      ],
      details: 'שרירי הארבע-ראשי הם קבוצת שרירים גדולה הממוקמת בחלק הקדמי של הירך. הם מורכבים מארבעה שרירים נפרדים שמתחברים לעצם השוקה. השרירים אחראים על יישור הברך וסיבוב הירך, מה שהופך אותם לחיוניים בפעילויות כמו הליכה, ריצה, קפיצה ופעילויות ספורט.'
    },
    {
      id: 'hamstrings',
      name: 'שרירי המיתר האחורי',
      englishName: 'Hamstrings',
      icon: <Target className="w-6 h-6" />,
      color: 'neon-blue',
      location: 'ירך אחורית',
      function: 'כיפוף הברך ויישור הירך',
      facts: [
        'מורכב משלושה שרירים נפרדים',
        'מתחבר לעצם השוקה והשוקית',
        'חיוני להליכה וריצה',
        'עובד נגד שרירי הארבע-ראשי'
      ],
      details: 'שרירי המיתר האחורי הם קבוצת שרירים הממוקמת בחלק האחורי של הירך. הם מורכבים משלושה שרירים נפרדים שמתחברים לעצם השוקה והשוקית. השרירים אחראים על כיפוף הברך ויישור הירך, מה שהופך אותם לחיוניים בפעילויות כמו הליכה, ריצה ופעילויות ספורט.'
    },
    {
      id: 'gluteus',
      name: 'שרירי העכוז',
      englishName: 'Gluteus Maximus',
      icon: <Shield className="w-6 h-6" />,
      color: 'neon-teal',
      location: 'עכוז',
      function: 'יישור הירך וסיבובו',
      facts: [
        'השריר הגדול ביותר בגוף',
        'מורכב משלושה שרירים נפרדים',
        'חיוני להליכה, ריצה וקפיצה',
        'מתחבר לעצם הירך'
      ],
      details: 'שרירי העכוז הם קבוצת שרירים גדולה הממוקמת בחלק האחורי של הירך. הם מורכבים משלושה שרירים נפרדים שמתחברים לעצם הירך. השרירים אחראים על יישור הירך וסיבובו, מה שהופך אותם לחיוניים בפעילויות כמו הליכה, ריצה, קפיצה ופעילויות ספורט.'
    },
    {
      id: 'calves',
      name: 'שרירי השוק',
      englishName: 'Gastrocnemius & Soleus',
      icon: <Zap className="w-6 h-6" />,
      color: 'neon-purple',
      location: 'שוק אחורית',
      function: 'כיפוף כף הרגל והרמת העקב',
      facts: [
        'מורכב משני שרירים עיקריים',
        'חיוני להליכה, ריצה וקפיצה',
        'מתחבר לגיד אכילס',
        'השריר החזק ביותר ביחס לגודלו'
      ],
      details: 'שרירי השוק הם קבוצת שרירים הממוקמת בחלק האחורי של השוק. הם מורכבים משני שרירים עיקריים שמתחברים לגיד אכילס. השרירים אחראים על כיפוף כף הרגל והרמת העקב, מה שהופך אותם לחיוניים בפעילויות כמו הליכה, ריצה, קפיצה ופעילויות ספורט.'
    },
    {
      id: 'abs',
      name: 'שרירי הבטן',
      englishName: 'Rectus Abdominis',
      icon: <Activity className="w-6 h-6" />,
      color: 'neon-blue',
      location: 'בטן',
      function: 'כיפוף הגו וייצוב הגוף',
      facts: [
        'מורכב משש עד שמונה חלקים',
        'מתחבר לעצם החזה ולעצם החיק',
        'חיוני לייצוב הגוף',
        'משתתף בנשימה'
      ],
      details: 'שרירי הבטן הם קבוצת שרירים הממוקמת בחלק הקדמי של הבטן. הם מורכבים משריר הבטן הישר שמתחלק לשש עד שמונה חלקים. השרירים אחראים על כיפוף הגו וייצוב הגוף, מה שהופך אותם לחיוניים בפעילויות יומיומיות וספורט.'
    },
    {
      id: 'trapezius',
      name: 'שריר הטרפז',
      englishName: 'Trapezius',
      icon: <Brain className="w-6 h-6" />,
      color: 'neon-teal',
      location: 'גב עליון',
      function: 'הרמת הכתפיים וסיבוב השכמה',
      facts: [
        'מורכב משלושה חלקים: עליון, אמצעי ותחתון',
        'מתחבר לעצם השכמה ולעצם הבריח',
        'חיוני לתנועות הכתף',
        'משתתף בנשימה'
      ],
      details: 'שריר הטרפז הוא שריר גדול הממוקם בחלק העליון של הגב. הוא מורכב משלושה חלקים שמתחברים לעצם השכמה ולעצם הבריח. השריר אחראי על הרמת הכתפיים וסיבוב השכמה, מה שהופך אותו לחיוני בפעילויות יומיומיות וספורט.'
    },
    {
      id: 'rhomboids',
      name: 'שרירי המעוין',
      englishName: 'Rhomboids',
      icon: <Eye className="w-6 h-6" />,
      color: 'neon-purple',
      location: 'גב עליון',
      function: 'קירוב השכמות וייצוב הגב',
      facts: [
        'מורכב משני שרירים: גדול וקטן',
        'מתחבר לעצם השכמה',
        'חיוני ליציבה נכונה',
        'עובד יחד עם שריר הטרפז'
      ],
      details: 'שרירי המעוין הם קבוצת שרירים הממוקמת בחלק העליון של הגב. הם מורכבים משני שרירים נפרדים שמתחברים לעצם השכמה. השרירים אחראים על קירוב השכמות וייצוב הגב, מה שהופך אותם לחיוניים ליציבה נכונה ופעילויות יומיומיות.'
    },
    {
      id: 'serratus',
      name: 'שריר המשונן הקדמי',
      englishName: 'Serratus Anterior',
      icon: <Target className="w-6 h-6" />,
      color: 'neon-blue',
      location: 'צד החזה',
      function: 'הרמת הזרוע וייצוב השכמה',
      facts: [
        'מתחבר לצלעות ולעצם השכמה',
        'חיוני לתנועות הזרוע מעל הראש',
        'משתתף בנשימה עמוקה',
        'עובד יחד עם שרירי החזה'
      ],
      details: 'שריר המשונן הקדמי הוא שריר הממוקם בצד החזה. הוא מתחבר לצלעות ולעצם השכמה. השריר אחראי על הרמת הזרוע וייצוב השכמה, מה שהופך אותו לחיוני בפעילויות כמו הרמת חפצים מעל הראש ופעילויות ספורט.'
    }
  ]

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 bg-gradient-to-b from-dark-bg to-card-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            שרירי הגוף
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            חקור את השרירים המרכזיים בגוף והבן את תפקידם בתנועה ויציבה
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {muscles.map((muscle, index) => (
            <motion.div
              key={muscle.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                onClick={() => setSelectedMuscle(selectedMuscle === muscle.id ? null : muscle.id)}
                className={`bg-card-bg border border-${muscle.color}/30 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-${muscle.color}/60 hover:bg-${muscle.color}/10`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-${muscle.color} p-2 rounded-lg bg-${muscle.color}/20`}>
                    {muscle.icon}
                  </div>
                  <ChevronRight className={`w-5 h-5 text-${muscle.color} transition-transform duration-300 group-hover:translate-x-1`} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-1">
                  {muscle.name}
                </h3>
                
                <p className="text-sm text-neon-blue mb-2">
                  {muscle.englishName}
                </p>
                
                <p className="text-gray-400 text-sm mb-2">
                  <strong>מיקום:</strong> {muscle.location}
                </p>
                
                <p className="text-gray-400 text-sm mb-4">
                  <strong>תפקיד:</strong> {muscle.function}
                </p>

                {selectedMuscle === muscle.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      {muscle.facts.map((fact, factIndex) => (
                        <motion.div
                          key={factIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: factIndex * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-${muscle.color} mt-2 flex-shrink-0`} />
                          <p className="text-gray-300 text-sm">{fact}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {muscle.details}
                      </p>
                    </div>
                    
                    <motion.button
                      className={`flex items-center gap-2 text-${muscle.color} text-sm font-medium hover:underline`}
                      whileHover={{ x: 5 }}
                    >
                      <span>למד עוד</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            כל שריר עובד בהרמוניה עם אחרים ליצירת תנועה חלקה ויעילה
          </p>
          <motion.button
            className="px-8 py-4 bg-neon-blue/20 border border-neon-blue/50 rounded-full text-neon-blue hover:bg-neon-blue/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            חקור מודל תלת-ממדי אינטראקטיבי
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SystemOverview 