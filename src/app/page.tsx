'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import { PetHero3D } from '@/components/three/PetHero3D'
import { BentoGrid, FeatureCard, CTACard, StatsCard } from '@/components/layout/BentoGrid'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { 
  PawPrint, 
  Sparkles, 
  BarChart3, 
  Watch,
  Shield,
  Zap,
  Heart,
  Activity
} from 'lucide-react'

export default function HomePage() {
  const scrollY = useScrollPosition()

  return (
    <>
      {/* 3D Background - Fixed and Interactive */}
      <PetHero3D scrollY={scrollY} />
      
      <div className="relative min-h-screen">
        <Navigation />
        
        {/* Hero Section - Now with 3D Integration */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto z-10">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-slate-300">Your pet's stats. Tracked automatically.</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Your Pet's
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Twin
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Meet the future of pet care. Get a beautiful 3D digital twin with real-time health tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold backdrop-blur-xl">
                  <PawPrint className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold backdrop-blur-xl">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bento Grid Features Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Everything Your Pet Needs
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                From basic tracking to advanced insights, we've revolutionized pet care with cutting-edge technology.
              </p>
            </div>

            <BentoGrid className="mb-16">
              <FeatureCard
                icon={Sparkles}
                title="Shiny 3D Twin"
                description="Gorgeous holographic avatar with Pokémon-style collectible energy. Watch them come alive with subtle animations and effects."
                transparent
                size="lg"
              />
              
              <FeatureCard
                icon={BarChart3}
                title="Health Dashboard"
                description="Track activity, diet, sleep, and mood with beautiful stat cards."
                size="md"
              />
              
              <FeatureCard
                icon={Watch}
                title="Smart Wearable"
                description="Real-time tracking launching December 2026. GPS, activity, and health vitals."
                size="md"
              />

              <StatsCard
                stats={[
                  { label: "Pet Parents", value: "50K+", color: "text-cyan-400" },
                  { label: "Health Score", value: "94.2", color: "text-green-400" },
                  { label: "Active Pets", value: "24/7", color: "text-purple-400" },
                  { label: "Accuracy", value: "99.1%", color: "text-pink-400" }
                ]}
                size="md"
              />

              <FeatureCard
                icon={Heart}
                title="Wellness AI"
                description="Predictive insights and breed-specific recommendations powered by veterinary data."
                transparent
                size="md"
              />

              <FeatureCard
                icon={Activity}
                title="Real-time Sync"
                description="Instant updates from wearable to digital twin. See your pet's vitals live."
                size="md"
              />
            </BentoGrid>
          </div>
        </section>

        {/* Wearable Section with Transparent Cards */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
                <Watch className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300 font-semibold">Coming December 2026</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  The Digitas.Pet Wearable
                </span>
              </h2>
            </div>

            <BentoGrid>
              <CTACard
                title="Join the Waitlist"
                description="Be first in line for the future of pet health monitoring. Real-time data that brings your digital twin to life."
                buttonText="Reserve Your Spot"
                buttonHref="/wearable"
                size="xl"
              />

              <FeatureCard
                icon={Zap}
                title="Real-time Activity"
                description="Steps, runs, play time tracked continuously."
                transparent
                size="sm"
              />

              <FeatureCard
                icon={Shield}
                title="GPS Location"
                description="Always know where they are with precise tracking."
                transparent
                size="sm"
              />
            </BentoGrid>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Ready to meet your pet's
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                digital twin?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Start tracking your pet's health today. Free forever, with premium features when you're ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup">
                <Button size="lg" className="px-12 py-4 text-xl font-semibold backdrop-blur-xl">
                  <PawPrint className="w-6 h-6 mr-3" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-12 py-4 text-xl font-semibold backdrop-blur-xl">
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-xl relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <PawPrint className="w-6 h-6 text-cyan-400" />
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Digitas.Pet
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                <Link href="/wearable" className="hover:text-white transition-colors">Wearable</Link>
                <span>© 2026 Digitas.Pet</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}