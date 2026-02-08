'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Sphere, 
  Box,
  Cylinder,
  Float, 
  Text3D, 
  Center,
  Environment,
  ContactShadows
} from '@react-three/drei'
import { gsap } from 'gsap'
import * as THREE from 'three'

// Cute Dog Component
function CuteDog({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number], scale?: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    
    // Gentle breathing animation
    groupRef.current.scale.setScalar(scale + Math.sin(t * 2) * 0.02)
    // Slight head tilt
    groupRef.current.rotation.z = Math.sin(t * 1.5) * 0.1
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Body */}
      <Sphere args={[0.4, 16, 16]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#D2691E" roughness={0.3} />
      </Sphere>
      
      {/* Head */}
      <Sphere args={[0.3, 16, 16]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#DEB887" roughness={0.3} />
      </Sphere>
      
      {/* Ears */}
      <Sphere args={[0.1, 8, 8]} position={[-0.15, 0.45, 0]} rotation={[0, 0, -0.5]}>
        <meshStandardMaterial color="#8B4513" roughness={0.3} />
      </Sphere>
      <Sphere args={[0.1, 8, 8]} position={[0.15, 0.45, 0]} rotation={[0, 0, 0.5]}>
        <meshStandardMaterial color="#8B4513" roughness={0.3} />
      </Sphere>
      
      {/* Eyes */}
      <Sphere args={[0.04, 8, 8]} position={[-0.08, 0.35, 0.25]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.04, 8, 8]} position={[0.08, 0.35, 0.25]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      
      {/* Nose */}
      <Sphere args={[0.03, 8, 8]} position={[0, 0.25, 0.28]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      
      {/* Tail */}
      <Cylinder args={[0.03, 0.05, 0.3]} position={[0, -0.1, -0.35]} rotation={[0.5, 0, 0]}>
        <meshStandardMaterial color="#D2691E" roughness={0.3} />
      </Cylinder>
      
      {/* Legs */}
      {[-0.15, 0.15].map((x, i) => (
        [-0.1, 0.1].map((z, j) => (
          <Cylinder key={`${i}-${j}`} args={[0.05, 0.05, 0.2]} position={[x, -0.4, z]}>
            <meshStandardMaterial color="#D2691E" roughness={0.3} />
          </Cylinder>
        ))
      ))}
    </group>
  )
}

// Cute Cat Component
function CuteCat({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number], scale?: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    
    // Gentle breathing and subtle movement
    groupRef.current.scale.setScalar(scale + Math.sin(t * 2.5) * 0.03)
    groupRef.current.position.y = position[1] + Math.sin(t * 1.8) * 0.05
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Body */}
      <Sphere args={[0.35, 16, 16]} position={[0, -0.15, 0]}>
        <meshStandardMaterial color="#FF6347" roughness={0.3} />
      </Sphere>
      
      {/* Head */}
      <Sphere args={[0.25, 16, 16]} position={[0, 0.25, 0]}>
        <meshStandardMaterial color="#FF7F50" roughness={0.3} />
      </Sphere>
      
      {/* Ears (triangular) */}
      <Cylinder args={[0, 0.08, 0.15]} position={[-0.12, 0.4, 0]} rotation={[0, 0, -0.3]}>
        <meshStandardMaterial color="#FF6347" roughness={0.3} />
      </Cylinder>
      <Cylinder args={[0, 0.08, 0.15]} position={[0.12, 0.4, 0]} rotation={[0, 0, 0.3]}>
        <meshStandardMaterial color="#FF6347" roughness={0.3} />
      </Cylinder>
      
      {/* Eyes */}
      <Sphere args={[0.04, 8, 8]} position={[-0.07, 0.3, 0.2]}>
        <meshStandardMaterial color="#32CD32" />
      </Sphere>
      <Sphere args={[0.04, 8, 8]} position={[0.07, 0.3, 0.2]}>
        <meshStandardMaterial color="#32CD32" />
      </Sphere>
      
      {/* Pupils */}
      <Sphere args={[0.02, 8, 8]} position={[-0.07, 0.3, 0.22]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.02, 8, 8]} position={[0.07, 0.3, 0.22]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      
      {/* Nose */
      <Cylinder args={[0.02, 0.02, 0.01]} position={[0, 0.22, 0.23]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#FF1493" />
      </Cylinder>
      
      <Box args={[0.15, 0.005, 0.005]} position={[-0.1, 0.2, 0.22]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Box>
      <Box args={[0.15, 0.005, 0.005]} position={[0.1, 0.2, 0.22]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Box>
      
      {/* Tail */}
      <Cylinder args={[0.04, 0.02, 0.4]} position={[0, 0, -0.4]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial color="#FF6347" roughness={0.3} />
      </Cylinder>
    </group>
  )
}

// Cute Rabbit Component
function CuteRabbit({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number], scale?: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    
    // Bouncy animation
    groupRef.current.position.y = position[1] + Math.abs(Math.sin(t * 3)) * 0.1
    groupRef.current.scale.setScalar(scale + Math.sin(t * 4) * 0.02)
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Body */}
      <Sphere args={[0.3, 16, 16]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#FFB6C1" roughness={0.3} />
      </Sphere>
      
      {/* Head */}
      <Sphere args={[0.22, 16, 16]} position={[0, 0.25, 0]}>
        <meshStandardMaterial color="#FFC0CB" roughness={0.3} />
      </Sphere>
      
      {/* Long Ears */}
      <Sphere args={[0.06, 0.25, 0.1]} position={[-0.1, 0.5, -0.05]}>
        <meshStandardMaterial color="#FFB6C1" roughness={0.3} />
      </Sphere>
      <Sphere args={[0.06, 0.25, 0.1]} position={[0.1, 0.5, -0.05]}>
        <meshStandardMaterial color="#FFB6C1" roughness={0.3} />
      </Sphere>
      
      {/* Eyes */}
      <Sphere args={[0.05, 8, 8]} position={[-0.08, 0.3, 0.18]}>
        <meshStandardMaterial color="#FF1493" />
      </Sphere>
      <Sphere args={[0.05, 8, 8]} position={[0.08, 0.3, 0.18]}>
        <meshStandardMaterial color="#FF1493" />
      </Sphere>
      
      {/* Nose */}
      <Sphere args={[0.02, 8, 8]} position={[0, 0.22, 0.2]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      
      {/* Fluffy tail */}
      <Sphere args={[0.08, 8, 8]} position={[0, -0.05, -0.25]}>
        <meshStandardMaterial color="#FFFFFF" roughness={0.8} />
      </Sphere>
    </group>
  )
}

interface CutePets3DProps {
  type?: 'dog' | 'cat' | 'rabbit'
  position?: [number, number, number]
  scale?: number
  autoRotate?: boolean
}

export function CutePets3D({ 
  type = 'dog', 
  position = [0, 0, 0], 
  scale = 1,
  autoRotate = true 
}: CutePets3DProps) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (!groupRef.current || !autoRotate) return
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.3
  })

  const PetComponent = {
    dog: CuteDog,
    cat: CuteCat,
    rabbit: CuteRabbit
  }[type]

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        <PetComponent position={position} scale={scale} />
      </group>
    </Float>
  )
}

// Scene with multiple pets
export function CutePetsScene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }} style={{ background: 'transparent' }}>
        <Environment preset="park" />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <ContactShadows
          opacity={0.2}
          scale={15}
          blur={2}
          far={10}
          resolution={256}
          color="#8B4513"
        />
        
        <CutePets3D type="dog" position={[-3, 0, 0]} scale={0.8} />
        <CutePets3D type="cat" position={[0, 0, -2]} scale={0.9} />
        <CutePets3D type="rabbit" position={[3, 0, 1]} scale={0.7} />
        
        {/* Additional scattered pets */}
        <CutePets3D type="dog" position={[-6, 0, -3]} scale={0.6} />
        <CutePets3D type="cat" position={[5, 0, -4]} scale={0.5} />
      </Canvas>
    </div>
  )
}