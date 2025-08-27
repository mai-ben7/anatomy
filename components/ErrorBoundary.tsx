'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Add your error reporting service here
      // Example: Sentry.captureException(error, { extra: errorInfo })
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <AlertTriangle className="w-16 h-16 text-neon-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              משהו השתבש
            </h2>
            <p className="text-gray-400 mb-6">
              אירעה שגיאה בלתי צפויה. אנא נסה שוב או רענן את הדף.
            </p>
            <button
              onClick={this.handleRetry}
              className="flex items-center gap-2 px-6 py-3 bg-neon-blue/20 border border-neon-blue/50 rounded-lg text-neon-blue hover:bg-neon-blue/30 transition-all duration-300 mx-auto"
            >
              <RefreshCw className="w-4 h-4" />
              נסה שוב
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="text-sm text-gray-500 cursor-pointer">
                  פרטי השגיאה (פיתוח בלבד)
                </summary>
                <pre className="mt-2 text-xs text-red-400 bg-red-900/20 p-2 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
