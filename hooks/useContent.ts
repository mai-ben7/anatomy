'use client'

import { useState, useEffect } from 'react'
import siteContent from '@/content/site-content.json'

export type Language = 'he' | 'en'

interface ContentHook {
  content: any
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
  isRTL: boolean
}

export function useContent(): ContentHook {
  const [language, setLanguage] = useState<Language>('he')

  // Get language from localStorage or browser preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'he' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    } else {
      // Default to Hebrew for this site
      setLanguage('he')
    }
  }, [])

  // Save language preference
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  // Translation helper function
  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.')
    let value: any = siteContent

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        return fallback || key
      }
    }

    // Handle multilingual content
    if (typeof value === 'object' && value[language]) {
      return value[language]
    }

    // Handle direct string values
    if (typeof value === 'string') {
      return value
    }

    return fallback || key
  }

  const isRTL = language === 'he'

  return {
    content: siteContent,
    language,
    setLanguage: handleSetLanguage,
    t,
    isRTL,
  }
}

// Utility function to get nested content
export function getNestedContent(obj: any, path: string): any {
  const keys = path.split('.')
  let value = obj

  for (const key of keys) {
    value = value?.[key]
    if (value === undefined) {
      return null
    }
  }

  return value
}

// Utility function to get multilingual text
export function getMultilingualText(obj: any, language: Language): string {
  if (typeof obj === 'string') {
    return obj
  }

  if (obj && typeof obj === 'object' && obj[language]) {
    return obj[language]
  }

  // Fallback to Hebrew if English not available
  if (language === 'en' && obj?.he) {
    return obj.he
  }

  // Fallback to English if Hebrew not available
  if (language === 'he' && obj?.en) {
    return obj.en
  }

  return ''
}
