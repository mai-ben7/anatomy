// Design Tokens for consistent theming
export const tokens = {
  colors: {
    // Primary brand colors
    primary: {
      50: '#e6f7ff',
      100: '#b3e5ff',
      200: '#80d4ff',
      300: '#4dc2ff',
      400: '#1ab0ff',
      500: '#00d4ff', // Main brand color
      600: '#00b8e6',
      700: '#0099cc',
      800: '#007a99',
      900: '#005b66',
    },
    secondary: {
      50: '#e6fff7',
      100: '#b3ffe6',
      200: '#80ffd4',
      300: '#4dffc2',
      400: '#1affb0',
      500: '#00f5d4', // Secondary brand color
      600: '#00d4b3',
      700: '#00b392',
      800: '#009271',
      900: '#007150',
    },
    accent: {
      50: '#f3e8ff',
      100: '#e9d5ff',
      200: '#d8b4fe',
      300: '#c084fd',
      400: '#a855f7',
      500: '#8b5cf6', // Accent color
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    // Neutral colors
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    // Background colors
    background: {
      primary: '#0a0a0a',
      secondary: '#1a1a1a',
      tertiary: '#2a2a2a',
      card: '#1a1a1a',
      overlay: 'rgba(0, 0, 0, 0.8)',
    },
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#e5e5e5',
      tertiary: '#a3a3a3',
      muted: '#737373',
      inverse: '#0a0a0a',
    },
    // Status colors
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
  typography: {
    fontFamily: {
      primary: 'var(--font-heebo)',
      secondary: 'var(--font-rubik)',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    glow: '0 0 20px rgba(0, 212, 255, 0.3)',
  },
  animation: {
    duration: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
      slower: '700ms',
      slowest: '1000ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modal: '1040',
    popover: '1050',
    tooltip: '1060',
  },
} as const

// Type-safe token access
export type ColorToken = keyof typeof tokens.colors
export type TypographyToken = keyof typeof tokens.typography
export type SpacingToken = keyof typeof tokens.spacing

// Utility functions
export function getToken(path: string): string {
  const keys = path.split('.')
  let value: any = tokens
  
  for (const key of keys) {
    value = value[key]
    if (value === undefined) {
      console.warn(`Token not found: ${path}`)
      return ''
    }
  }
  
  return value
}

// CSS Custom Properties generator
export function generateCSSVariables(): string {
  const variables: string[] = []
  
  // Colors
  Object.entries(tokens.colors).forEach(([category, colors]) => {
    if (typeof colors === 'object' && colors !== null) {
      Object.entries(colors).forEach(([shade, value]) => {
        variables.push(`--color-${category}-${shade}: ${value};`)
      })
    }
  })
  
  // Typography
  Object.entries(tokens.typography.fontSize).forEach(([size, value]) => {
    variables.push(`--font-size-${size}: ${value};`)
  })
  
  Object.entries(tokens.typography.fontWeight).forEach(([weight, value]) => {
    variables.push(`--font-weight-${weight}: ${value};`)
  })
  
  // Spacing
  Object.entries(tokens.spacing).forEach(([size, value]) => {
    variables.push(`--spacing-${size}: ${value};`)
  })
  
  return `:root {\n  ${variables.join('\n  ')}\n}`
}
