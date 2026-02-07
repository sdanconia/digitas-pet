import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function generateSlug(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  
  // Add random suffix to ensure uniqueness
  const suffix = Math.random().toString(36).substring(2, 8)
  return `${base}-${suffix}`
}

export function calculateOverallScore({
  activityLevel,
  dietQuality,
  sleepHours,
  mood,
  lastVetVisit,
  vaccinationsUpToDate,
  species
}: {
  activityLevel?: number
  dietQuality?: number
  sleepHours?: number
  mood?: 1 | 2 | 3 | 4 | 5
  lastVetVisit?: string
  vaccinationsUpToDate?: boolean
  species: 'dog' | 'cat'
}): number {
  let score = 0
  
  // Activity level (20 points max)
  if (activityLevel) {
    score += (activityLevel / 10) * 20
  }
  
  // Diet quality (20 points max)
  if (dietQuality) {
    score += (dietQuality / 10) * 20
  }
  
  // Sleep (20 points max)
  if (sleepHours) {
    const ideal = species === 'dog' ? { min: 12, max: 14 } : { min: 12, max: 16 }
    const midpoint = (ideal.min + ideal.max) / 2
    
    if (sleepHours >= ideal.min && sleepHours <= ideal.max) {
      score += 20
    } else {
      score += Math.max(0, (sleepHours / midpoint) * 20)
    }
  }
  
  // Mood (15 points max)
  if (mood) {
    score += (mood / 5) * 15
  }
  
  // Vet visit (15 points max)
  if (lastVetVisit) {
    const daysSinceVet = Math.floor(
      (new Date().getTime() - new Date(lastVetVisit).getTime()) / (1000 * 60 * 60 * 24)
    )
    score += daysSinceVet <= 365 ? 15 : 0
  }
  
  // Vaccinations (10 points max)
  if (vaccinationsUpToDate) {
    score += 10
  }
  
  return Math.round(Math.max(0, Math.min(100, score)))
}

export function extractDominantColor(imageUrl: string): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0)
      
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)
      if (!imageData) {
        resolve('#8B5CF6') // Default purple
        return
      }
      
      const colorCounts: Record<string, number> = {}
      const data = imageData.data
      
      // Sample every 10th pixel for performance
      for (let i = 0; i < data.length; i += 40) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const alpha = data[i + 3]
        
        if (alpha < 128) continue // Skip transparent pixels
        
        // Convert to hex
        const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
        colorCounts[hex] = (colorCounts[hex] || 0) + 1
      }
      
      // Find most common color
      let dominantColor = '#8B5CF6'
      let maxCount = 0
      
      for (const [color, count] of Object.entries(colorCounts)) {
        if (count > maxCount) {
          maxCount = count
          dominantColor = color
        }
      }
      
      resolve(dominantColor)
    }
    
    img.onerror = () => resolve('#8B5CF6')
    img.src = imageUrl
  })
}

export function formatWeight(kg: number, unit: 'kg' | 'lbs' = 'kg'): string {
  if (unit === 'lbs') {
    const lbs = kg * 2.20462
    return `${lbs.toFixed(1)} lbs`
  }
  return `${kg.toFixed(1)} kg`
}

export function formatTimeAgo(date: string): string {
  const now = new Date()
  const then = new Date(date)
  const diffInDays = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return 'Today'
  if (diffInDays === 1) return '1 day ago'
  if (diffInDays < 30) return `${diffInDays} days ago`
  if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30)
    return months === 1 ? '1 month ago' : `${months} months ago`
  }
  
  const years = Math.floor(diffInDays / 365)
  return years === 1 ? '1 year ago' : `${years} years ago`
}