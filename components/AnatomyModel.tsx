'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Text } from '@react-three/drei'
import * as THREE from 'three'

interface AnatomyModelProps {}

interface AnatomicalLabel {
  id: string
  name: string
  position: [number, number, number]
  color: string
}

function SimpleCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y += 0.01
    }
  })
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00d4ff" />
    </mesh>
  )
}

function AnatomicalLabel({ label }: { label: AnatomicalLabel }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group position={label.position}>
      {/* Large background sphere for maximum visibility */}
      <mesh>
        <sphereGeometry args={[3, 16, 16]} />
        <meshBasicMaterial 
          color={hovered ? "#ffffff" : label.color} 
          opacity={0.9} 
          transparent={true}
        />
      </mesh>
      
      {/* Text with much larger size and better contrast */}
      <Text
        position={[0, 0, 0.5]}
        fontSize={2.5}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        outlineWidth={0.1}
        outlineColor="#ffffff"
      >
        {label.name}
      </Text>
    </group>
  )
}

function Model({ scrollY }: { scrollY: number }) {
  const modelRef = useRef<THREE.Group>(null)
  const [modelLoaded, setModelLoaded] = useState(false)
  const [loadingError, setLoadingError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [modelBounds, setModelBounds] = useState<{center: THREE.Vector3, size: THREE.Vector3} | null>(null)
  
           // Anatomical labels - positioned for the much bigger model scale, adjusted for left side
    const labels: AnatomicalLabel[] = [
      { id: 'skull', name: 'SKULL', position: [-200, 100, 50], color: '#ff6348' },
      { id: 'brain', name: 'BRAIN', position: [-200, 80, 50], color: '#4ecdc4' },
      { id: 'heart', name: 'HEART', position: [-200, 50, 50], color: '#ff6b6b' },
      { id: 'lungs', name: 'LUNGS', position: [-240, 30, 50], color: '#45b7d1' },
      { id: 'liver', name: 'LIVER', position: [-160, 20, 50], color: '#96ceb4' },
      { id: 'stomach', name: 'STOMACH', position: [-200, 0, 50], color: '#feca57' },
      { id: 'kidney', name: 'KIDNEY', position: [-150, -20, 50], color: '#ff9ff3' },
      { id: 'spine', name: 'SPINE', position: [-200, -40, 50], color: '#54a0ff' },
      { id: 'humerus', name: 'HUMERUS', position: [-250, 20, 50], color: '#00d2d3' },
      { id: 'femur', name: 'FEMUR', position: [-200, -80, 50], color: '#5f27cd' },
      { id: 'tibia', name: 'TIBIA', position: [-200, -120, 50], color: '#ff9f43' },
      { id: 'foot', name: 'FOOT', position: [-200, -160, 50], color: '#2e86de' }
    ]
  
  // Load the model - this must be at the top level
  const { scene } = useGLTF('/male anatomical body 3d/anatomy_model.gltf')
  
  useEffect(() => {
    if (scene) {
      setModelLoaded(true)
      setIsLoading(false)
      console.log('✅ 3D model loaded successfully')
      
      // Debug: log the scene structure
      console.log('Scene children:', scene.children.length)
      scene.traverse((child) => {
        console.log('Child:', child.name, child.type)
      })
      
      // Calculate model bounds to center it properly
      const box = new THREE.Box3().setFromObject(scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      setModelBounds({ center, size })
      
             console.log('Model bounds:', { 
         center: { x: center.x, y: center.y, z: center.z },
         size: { x: size.x, y: size.y, z: size.z }
       })
       console.log("Model size:", size)
    }
  }, [scene])
  
  useFrame((state: any) => {
    if (modelRef.current) {
             // Calculate scroll progress (0 to 1) based on actual page height
       // Page has: 1 hero + 3 anatomy sections = 6 screen heights for complete 360 rotation
       const screenHeight = window.innerHeight
       const maxScroll = screenHeight * 6 // 6 full screen heights for complete 360 rotation
      const scrollProgress = Math.max(0, Math.min(scrollY / maxScroll, 1)) // Clamp between 0 and 1
      
      // Always show the model and animate it throughout the entire scroll
      modelRef.current.visible = true
      
             // Full 360-degree rotation as you scroll through all muscle explanations
       const targetRotation = scrollProgress * Math.PI * 2 // Full rotation (0 to 360 degrees)
       modelRef.current.rotation.y = targetRotation
       
       // Debug: log rotation progress
       console.log('Rotation:', (scrollProgress * 360).toFixed(1) + '°')
      
             // Move model horizontally from left to right as you scroll
       // Start at left side (-200), end at right side (200) for full movement
       const startX = -250
       const endX = 200
      const xPosition = startX + (scrollProgress * (endX - startX))
      modelRef.current.position.x = xPosition
      
      // Keep Y position for subtle vertical movement
      const startY = -100 // Start Y position
      const endY = 200 // End Y position
      const yPosition = startY - (scrollProgress * (startY - endY))
      modelRef.current.position.y = yPosition + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  // Show loading state
  if (isLoading) {
    console.log('⏳ Loading model...')
    return <SimpleCube />
  }

  // Show error state
  if (loadingError) {
    console.log('❌ Showing error state:', loadingError)
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    )
  }

  // Show model if loaded
  if (scene && modelLoaded) {
    console.log('🎯 Rendering 3D anatomical model')
    
                      // Use much larger scale to make model visible
       let scale =30000
      if (modelBounds) {
        const maxSize = Math.max(modelBounds.size.x, modelBounds.size.y, modelBounds.size.z)
        console.log('Using scale:', scale, 'for max size:', maxSize)
      }
    
    return (
      <group 
        ref={modelRef}
        position={[0, 200, 0]}
        scale={[scale, scale, scale]}
      >
        <primitive 
          object={scene} 
          position={modelBounds ? modelBounds.center.clone().multiplyScalar(-1) : [0, 0, 0]} 
        />
      </group>
    )
  }

  // Fallback
  return <SimpleCube />
}

function AnatomyModel({}: AnatomyModelProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0,100, 800], fov: 40}}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          pointerEvents: 'auto'
        }}
      >
        <ambientLight intensity={2.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={5.0} 
          color="#ffffff"
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={4.0} 
          color="#ffffff"
        />
        
                <Model scrollY={scrollY} />
        
        <Environment preset="city" />
                                  {/* OrbitControls disabled for scroll-only interaction */}
      </Canvas>
    </div>
  )
}

export default AnatomyModel 