'use client'

import { useRef, useEffect, useState } from 'react'

interface FloatingPetProps {
  src: string
  initialX: number
  initialY: number
  size: number
  animationDelay: number
}

function FloatingPet({ src, initialX, initialY, size, animationDelay }: FloatingPetProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      video.play().catch(() => {
        // Autoplay failed, that's okay
      })
    }

    video.addEventListener('canplay', handleCanPlay)
    return () => video.removeEventListener('canplay', handleCanPlay)
  }, [])

  return (
    <div 
      className="fixed pointer-events-none z-20"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${animationDelay}s`
      }}
    >
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`
            w-full h-full object-cover rounded-full 
            shadow-2xl border-4 border-white/80
            animate-float hover:scale-110 transition-all duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))',
            background: 'transparent'
          }}
        />
        {/* Floating glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-200/30 to-purple-200/30 blur-lg animate-pulse" />
      </div>
    </div>
  )
}

export function FloatingPetsBackground() {
  const pets = [
    { src: '/videos/kitten-hero.mp4', x: 15, y: 20, size: 120, delay: 0 },
    { src: '/videos/shiba-hero.mp4', x: 75, y: 15, size: 140, delay: 1.5 },
    { src: '/videos/grey-hero.mp4', x: 85, y: 60, size: 100, delay: 3 },
    { src: '/videos/golden-feature.mp4', x: 10, y: 70, size: 110, delay: 2.2 },
    { src: '/videos/grey-feature.mp4', x: 50, y: 80, size: 90, delay: 4.1 },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {pets.map((pet, index) => (
        <FloatingPet
          key={index}
          src={pet.src}
          initialX={pet.x}
          initialY={pet.y}
          size={pet.size}
          animationDelay={pet.delay}
        />
      ))}
    </div>
  )
}