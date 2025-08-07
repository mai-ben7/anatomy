'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Text } from '@react-three/drei'
import * as THREE from 'three'

interface InteractiveModelViewerProps {
  isOpen: boolean
  onClose: () => void
}

function InteractiveModel() {
  const modelRef = useRef<THREE.Group>(null)
  const [modelLoaded, setModelLoaded] = useState(false)
  const [modelBounds, setModelBounds] = useState<{center: THREE.Vector3, size: THREE.Vector3} | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  // Load the model
  const { scene } = useGLTF('/male anatomical body 3d/anatomy_model.gltf')
  
  useEffect(() => {
    console.log('🔄 Interactive model loading...')
    console.log('📁 Scene object:', scene)
    
    if (scene) {
      setModelLoaded(true)
      setIsLoading(false)
      console.log('✅ Interactive 3D model loaded successfully')
      
      // Debug: check model materials and geometry
      scene.traverse((child) => {
        if (child.type === 'Mesh') {
          console.log('🔍 Mesh found:', child.name, 'Geometry:', child.geometry, 'Material:', child.material)
        }
      })
      
      // Calculate model bounds
      const box = new THREE.Box3().setFromObject(scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      setModelBounds({ center, size })
      console.log('📏 Model bounds calculated:', { center, size })
    } else {
      console.log('❌ Scene is null or undefined')
    }
  }, [scene])

  // Show loading state
  if (isLoading) {
    return (
      <group>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#00d4ff" />
        </mesh>
        <Text
          position={[0, 3, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          טוען מודל...
        </Text>
      </group>
    )
  }

  // Show model if loaded
  if (scene && modelLoaded) {
    let scale = 120 // Back to the working scale
    
    if (modelBounds) {
      const maxSize = Math.max(modelBounds.size.x, modelBounds.size.y, modelBounds.size.z)
      console.log('📐 Model scale:', scale, 'for max size:', maxSize)
      console.log('📍 Model position:', [0, 0, 0])
    } else {
      console.log('⚠️ No model bounds, using default scale:', scale)
    }
    
    return (
      <group>
        <primitive 
          ref={modelRef}
          object={scene} 
          scale={[scale, scale, scale]}
          position={[0, 0, 0]}
        />
        {/* Add a reference cube to see if rendering works */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[10, 10, 10]} />
          <meshStandardMaterial color="#ff0000" wireframe />
        </mesh>
      </group>
    )
  }

  // Fallback - show a simple cube if model doesn't load
  return (
    <group>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        מודל לא נטען
      </Text>
    </group>
  )
}

export default function InteractiveModelViewer({ isOpen, onClose }: InteractiveModelViewerProps) {
  console.log('🎯 InteractiveModelViewer render:', { isOpen })
  
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="relative w-full h-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-card-bg/80 backdrop-blur-sm border border-neon-blue/30 rounded-full p-3 text-neon-blue hover:bg-neon-blue/20 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Instructions */}
        <div className="absolute top-4 left-4 z-10 bg-card-bg/80 backdrop-blur-sm border border-neon-blue/30 rounded-lg p-4 text-white">
          <h3 className="text-lg font-semibold mb-2">מודל אינטראקטיבי</h3>
          <p className="text-sm text-gray-300">
            השתמש בעכבר כדי לסובב, להזיז ולהתקרב למודל
          </p>
        </div>

                 {/* 3D Canvas */}
         <Canvas
           camera={{ position: [0, 0, 300], fov: 75 }}
           gl={{
             antialias: true,
             alpha: true,
             powerPreference: "high-performance",
             preserveDrawingBuffer: false,
             failIfMajorPerformanceCaveat: false
           }}
           onCreated={({ gl }) => {
             gl.setClearColor(0x000000, 0)
           }}
           style={{
             width: '100%',
             height: '100%'
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
          
                     <InteractiveModel />
           
           {/* Test cube to see if Canvas is working */}
           <mesh position={[0, 0, 0]}>
             <boxGeometry args={[5, 5, 5]} />
             <meshStandardMaterial color="#ffff00" />
           </mesh>
           
           <Environment preset="city" />
          
          {/* Full interactive controls */}
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            target={[0, 0, 0]}
            panSpeed={1.5}
            rotateSpeed={1.5}
            zoomSpeed={1.0}
            maxDistance={1000}
            minDistance={50}
          />
        </Canvas>
      </div>
    </div>
  )
} 