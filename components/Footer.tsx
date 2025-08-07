'use client'

import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-gray-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              חוקר האנטומיה האנושית
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              חקר תלת-ממדי אינטראקטיבי של הגוף האנושי, שנועד לחנך ולהעשיר 
              את ההבנה של המערכות האנטומיות המורכבות שלנו.
            </p>
                          <div className="flex items-center space-x-4">
                <div className="flex items-center text-neon-blue">
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="text-sm">נוצר בתשוקה</span>
                </div>
                <div className="flex items-center text-neon-teal">
                  <Code className="w-5 h-5 mr-2" />
                  <span className="text-sm">React + Three.js</span>
                </div>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">חקור</h4>
            <ul className="space-y-2">
              <li>
                <a href="#skeletal" className="text-gray-400 hover:text-neon-blue transition-colors">
                  מערכת השלד
                </a>
              </li>
              <li>
                <a href="#muscular" className="text-gray-400 hover:text-neon-teal transition-colors">
                  מערכת השרירים
                </a>
              </li>
              <li>
                <a href="#cardiovascular" className="text-gray-400 hover:text-neon-purple transition-colors">
                  מערכת הלב וכלי הדם
                </a>
              </li>
              <li>
                <a href="#overview" className="text-gray-400 hover:text-neon-pink transition-colors">
                  סקירת מערכות
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">צור קשר</h4>
            <div className="space-y-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-neon-teal transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center text-gray-400 hover:text-neon-purple transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>אימייל</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 חוקר האנטומיה האנושית. כל הזכויות שמורות.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">
                מדיניות פרטיות
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-teal text-sm transition-colors">
                תנאי שימוש
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-purple text-sm transition-colors">
                מדיניות עוגיות
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 