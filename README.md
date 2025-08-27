# Anatomy 3D Website - Personal Training Platform

A modern, interactive website showcasing 3D anatomy models with Hebrew content, RTL support, and comprehensive hardening features for production deployment.

## 🚀 Features

### Core Features
- **3D Anatomy Models** - Interactive Three.js models with scroll-based rotation
- **Hebrew Content** - Full RTL support with Hebrew typography
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern Animations** - Framer Motion animations with reduced motion support

### Hardening & Security Features
- **Content Security Policy (CSP)** - Comprehensive security headers
- **Error Boundaries** - Graceful error handling with fallback UI
- **Hydration Guards** - Prevents SSR/CSR mismatches
- **Reduced Motion Support** - Accessibility compliance
- **Type Safety** - Full TypeScript implementation
- **Testing Setup** - Jest + React Testing Library
- **Design Tokens** - Consistent theming system
- **Content Management** - JSON-based content with i18n support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion + GSAP
- **Testing**: Jest + React Testing Library
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Type checking
npm run type-check
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Content Management
Edit content in `/content/site-content.json` for easy updates without code changes.

### Design Tokens
Modify design tokens in `/lib/design-tokens.ts` for consistent theming.

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🔒 Security Features

### Content Security Policy
- Script sources restricted to trusted domains
- Style sources limited to self and Google Fonts
- Frame sources blocked for clickjacking protection
- Object sources blocked for plugin protection

### Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## ♿ Accessibility

- **Reduced Motion Support** - Respects user preferences
- **Focus Management** - Visible focus indicators
- **Semantic HTML** - Proper heading structure
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility

## 🌐 Internationalization

- **Hebrew/English Support** - Bilingual content system
- **RTL Layout** - Right-to-left text direction
- **Language Switching** - Dynamic language changes
- **Localized Content** - JSON-based content management

## 📱 Performance

- **Code Splitting** - Dynamic imports for 3D components
- **Image Optimization** - Next.js Image component
- **Bundle Analysis** - Production build optimization
- **Lazy Loading** - Suspense boundaries for heavy components

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
The app is optimized for any Node.js hosting platform with proper environment variables.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
├── components/            # React components
├── content/              # JSON content files
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── __tests__/           # Test files
└── design-tokens.ts     # Design system
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
