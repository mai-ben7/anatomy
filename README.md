<<<<<<< HEAD
# Human Anatomy 3D Explorer

An interactive, futuristic web application for exploring human anatomy through 3D visualization and educational content.

## Features

- **3D Model Integration**: Interactive 3D anatomical model using React Three Fiber
- **Scroll-Based Interactions**: Model rotates and highlights based on scroll position
- **Futuristic Design**: Clean, modern UI with neon accents and particle effects
- **Educational Content**: Detailed information about body systems with expandable cards
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Optimized for all device sizes

## Tech Stack

- **Next.js 14** with App Router
- **React Three Fiber** for 3D rendering
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anatomy-main
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
anatomy-main/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── AnatomyModel.tsx     # 3D model component
│   ├── HeroSection.tsx      # Hero section with animations
│   ├── AnatomySection.tsx   # System-specific sections
│   ├── SystemOverview.tsx   # Overview of all systems
│   └── ParticleEffect.tsx   # Background particle effects
├── public/
│   └── male anatomical body 3d/
│       ├── anatomy_model.gltf  # 3D model file
│       ├── scene.bin           # Model binary data
│       └── license.txt         # Model license
└── package.json
```

## 3D Model

The application uses a high-quality 3D anatomical model in GLTF format. The model is optimized for web performance and includes:

- Detailed anatomical structures
- Proper material setup with glow effects
- Responsive scaling and positioning
- Scroll-based rotation and interaction

## Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'neon-blue': '#00d4ff',
  'neon-teal': '#00f5d4',
  'neon-purple': '#8b5cf6',
  // Add your custom colors
}
```

### Animations
Adjust animation parameters in the component files or modify the Framer Motion configurations.

### Content
Update the system information in `AnatomySection.tsx` and `SystemOverview.tsx` to add or modify body systems.

## Performance Optimization

- 3D model is dynamically loaded to avoid SSR issues
- Particle effects are optimized for smooth performance
- Images and assets are optimized for web delivery
- Lazy loading implemented for better initial load times

## Browser Support

- Chrome/Edge (recommended for best 3D performance)
- Firefox
- Safari
- Mobile browsers (with reduced 3D features)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. The 3D model has its own license - see `public/male anatomical body 3d/license.txt`.

## Acknowledgments

- 3D model provided by [source]
- Icons from Lucide React
- Animations powered by Framer Motion
- 3D rendering with React Three Fiber
=======
# anatomy
>>>>>>> a7e619cda5dbacb7d280bb65ab6808d91c338bd6
