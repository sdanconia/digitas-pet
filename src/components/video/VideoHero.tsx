'use client'

import { useRef, useEffect, useState } from 'react'

interface VideoHeroProps {
  videos: string[]
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  className?: string
}

export function VideoHero({ 
  videos, 
  autoPlay = true, 
  loop = true, 
  muted = true, 
  className = '' 
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      if (videos.length > 1) {
        // Cycle to next video
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
      }
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [videos.length])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Load new video
    video.src = videos[currentVideoIndex]
    
    if (autoPlay) {
      video.play().catch((e) => {
        console.log('Video autoplay failed:', e)
      })
    }
  }, [currentVideoIndex, videos, autoPlay])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videos[currentVideoIndex]}
        autoPlay={autoPlay}
        loop={loop && videos.length === 1}
        muted={muted}
        playsInline
        preload="metadata"
      />
      
      {/* Video overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Video indicators */}
      {videos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentVideoIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Play video ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Play/Pause control */}
      <button
        onClick={() => {
          const video = videoRef.current
          if (video) {
            if (isPlaying) {
              video.pause()
            } else {
              video.play()
            }
          }
        }}
        className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export function PetVideoCarousel() {
  const petVideos = [
    '/videos/kitten-hero.mp4',
    '/videos/shiba-hero.mp4',
    '/videos/grey-hero.mp4'
  ]

  return (
    <VideoHero
      videos={petVideos}
      className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl"
    />
  )
}