'use client'

import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  MeshDistortMaterial, 
  Sphere, 
  Float, 
  Text3D, 
  Center,
  Environment,
  ContactShadows
} from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface PetOrbProps {
  scrollY: number
}

function PetOrb({ scrollY }: PetOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)
  
  // Mouse interaction
  useFrame(({ mouse, clock }) => {
    if (!meshRef.current) return
    
    const t = clock.getElapsedTime()
    
    // Gentle floating animation
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.1
    
    // Mouse interaction - subtle rotation
    meshRef.current.rotation.x = mouse.y * 0.1
    meshRef.current.rotation.y = mouse.x * 0.1
    
    // Scroll-based transformation
    const scrollProgress = scrollY / window.innerHeight
    meshRef.current.rotation.z = scrollProgress * Math.PI * 2
    
    // Dynamic material distortion based on scroll
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + scrollProgress * 0.4
      materialRef.current.speed = 1 + scrollProgress * 2
    }
  })

  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    canvas.width = 256
    canvas.height = 256
    
    const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128)
    gradient.addColorStop(0, '#00f0ff')
    gradient.addColorStop(0.5, '#8b00ff')
    gradient.addColorStop(1, '#ff1493')
    
    context.fillStyle = gradient
    context.fillRect(0, 0, 256, 256)
    
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.2}>
      <Sphere ref={meshRef} args={[1.2, 128, 128]}>
        <MeshDistortMaterial
          ref={materialRef}
          map={gradientTexture}
          distort={0.3}
          speed={1}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function Scene3D({ scrollY }: { scrollY: number }) {
  return (
    <>
      <Environment preset="studio" />
      <ContactShadows
        opacity={0.4}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <PetOrb scrollY={scrollY} />
    </>
  )
}

interface PetHero3DProps {
  scrollY: number
}

export function PetHero3D({ scrollY }: PetHero3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    
    // GSAP scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    })

    tl.to(canvas, {
      scale: 0.8,
      duration: 1,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="pointer-events-auto"
        style={{ background: 'transparent' }}
      >
        <Scene3D scrollY={scrollY} />
      </Canvas>
    </div>
  )
}