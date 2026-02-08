'use client'

import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollY(maxScroll > 0 ? window.scrollY / maxScroll : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

interface FloatingShapeProps {
  position: [number, number, number]
  geometry: 'torus' | 'octahedron' | 'icosahedron' | 'dodecahedron'
  color: string
  size: number
  scrollMultiplier: number
  rotationSpeed: number
  scrollProgress: number
}

function FloatingShape({
  position,
  geometry,
  color,
  size,
  scrollMultiplier,
  rotationSpeed,
  scrollProgress,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialY = useRef(position[1])

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    // Scroll-reactive vertical movement
    meshRef.current.position.y =
      initialY.current + scrollProgress * scrollMultiplier * 3

    // Continuous rotation influenced by scroll speed
    meshRef.current.rotation.x = t * rotationSpeed + scrollProgress * Math.PI
    meshRef.current.rotation.y = t * rotationSpeed * 0.7 + scrollProgress * Math.PI * 0.5
    meshRef.current.rotation.z = Math.sin(t * 0.5) * 0.2

    // Subtle mouse parallax
    meshRef.current.position.x = position[0] + mouse.x * 0.15
    meshRef.current.position.z = position[2] + mouse.y * 0.1

    // Scale pulse based on scroll
    const scalePulse = 1 + Math.sin(scrollProgress * Math.PI * 2) * 0.1
    meshRef.current.scale.setScalar(scalePulse)
  })

  const geometryElement = {
    torus: <torusGeometry args={[size, size * 0.35, 16, 32]} />,
    octahedron: <octahedronGeometry args={[size, 0]} />,
    icosahedron: <icosahedronGeometry args={[size, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[size, 0]} />,
  }[geometry]

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {geometryElement}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.4}
          metalness={0.6}
          distort={0.2}
          speed={2}
          wireframe={geometry === 'icosahedron'}
        />
      </mesh>
    </Float>
  )
}

function Particles({ scrollProgress }: { scrollProgress: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 60

  const positions = useRef(
    Float32Array.from({ length: particleCount * 3 }, (_, i) => {
      if (i % 3 === 0) return (Math.random() - 0.5) * 20 // x
      if (i % 3 === 1) return (Math.random() - 0.5) * 20 // y
      return (Math.random() - 0.5) * 10 // z
    })
  )

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const t = clock.getElapsedTime()

    pointsRef.current.rotation.y = t * 0.02 + scrollProgress * 0.5
    pointsRef.current.rotation.x = scrollProgress * 0.3

    // Subtle breathing scale
    const breathe = 1 + Math.sin(t * 0.8) * 0.05
    pointsRef.current.scale.setScalar(breathe)
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a855f7"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

function Scene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />

      {/* Left side shapes */}
      <FloatingShape
        position={[-5, 2, -3]}
        geometry="torus"
        color="#9333ea"
        size={0.6}
        scrollMultiplier={-2}
        rotationSpeed={0.3}
        scrollProgress={scrollProgress}
      />
      <FloatingShape
        position={[-4, -3, -5]}
        geometry="octahedron"
        color="#ec4899"
        size={0.5}
        scrollMultiplier={1.5}
        rotationSpeed={0.4}
        scrollProgress={scrollProgress}
      />

      {/* Right side shapes */}
      <FloatingShape
        position={[5, 1, -4]}
        geometry="icosahedron"
        color="#3b82f6"
        size={0.7}
        scrollMultiplier={-1.8}
        rotationSpeed={0.25}
        scrollProgress={scrollProgress}
      />
      <FloatingShape
        position={[4, -2, -3]}
        geometry="dodecahedron"
        color="#a855f7"
        size={0.4}
        scrollMultiplier={2.2}
        rotationSpeed={0.35}
        scrollProgress={scrollProgress}
      />

      {/* Center-ish shapes (further back) */}
      <FloatingShape
        position={[-1, 4, -8]}
        geometry="torus"
        color="#f472b6"
        size={0.8}
        scrollMultiplier={-1}
        rotationSpeed={0.15}
        scrollProgress={scrollProgress}
      />
      <FloatingShape
        position={[2, -4, -6]}
        geometry="octahedron"
        color="#7c3aed"
        size={0.35}
        scrollMultiplier={1.8}
        rotationSpeed={0.5}
        scrollProgress={scrollProgress}
      />

      <Particles scrollProgress={scrollProgress} />
    </>
  )
}

export function ScrollReactive3D() {
  const scrollProgress = useScrollProgress()

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
