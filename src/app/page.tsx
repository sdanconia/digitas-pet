'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import { PetVideoCarousel } from '@/components/video/VideoHero'
import { BentoGrid, FeatureCard, CTACard, StatsCard } from '@/components/layout/BentoGrid'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import Image from 'next/image'
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
      <div className="relative min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-purple">
        <Navigation />
        
        {/* Hero Section - Light and Playful */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto z-10">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-pink-200 rounded-full px-6 py-2 mb-8 shadow-lg">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span className="text-sm text-gray-700 font-medium">Your pet's stats. Tracked with love.</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Your Pet's
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Digital Twin
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Watch your pet come to life! Real-time 3D digital twins that make pet care fun, engaging, and absolutely adorable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                  <Heart className="w-5 h-5 mr-2" />
                  Start for Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-xl border-pink-200 text-gray-700 hover:bg-white hover:border-pink-300">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Pricing
                </Button>
              </Link>
            </div>
            </div>

            {/* Video Showcase */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
              <PetVideoCarousel />
            </div>
          </div>
        </section>

        {/* Features Section with Light Cards */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Everything Your Furry Friend Needs
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From adorable 3D twins to comprehensive health tracking, we've made pet care delightful and easy.
              </p>
            </div>

            <BentoGrid className="mb-16">
              <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 bg-white/80 backdrop-blur-xl border border-pink-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Adorable 3D Twins
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Watch your pet come to life in beautiful 3D! Each twin is uniquely crafted with cute animations, 
                    playful movements, and personality that matches your real pet.
                  </p>
                  <div className="flex-1 flex items-end">
                    <video 
                      src="/videos/golden-feature.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-32 object-cover rounded-xl border border-pink-100"
                    />
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Health Dashboard</h3>
                <p className="text-gray-600 text-sm">Beautiful charts and insights that make tracking fun.</p>
              </div>
              
              <div className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Watch className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Wearable</h3>
                <p className="text-gray-600 text-sm">Coming December 2026 - Real-time health monitoring.</p>
              </div>

              <div className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-yellow-50 to-pink-50 border border-yellow-200 rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono mb-1 text-pink-500">50K+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Happy Pets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono mb-1 text-purple-500">94.2</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Avg Health</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono mb-1 text-blue-500">24/7</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono mb-1 text-green-500">99.1%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Accuracy</div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 row-span-1 bg-white/60 backdrop-blur-xl border border-pink-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">AI-Powered Care</h3>
                <p className="text-gray-600 text-sm">Personalized recommendations based on your pet's needs.</p>
              </div>

              <div className="col-span-1 md:col-span-2 row-span-1 bg-white/60 backdrop-blur-xl border border-purple-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Real-time Sync</h3>
                <p className="text-gray-600 text-sm">Watch your digital twin update as your pet moves and plays.</p>
              </div>
            </BentoGrid>
          </div>
        </section>

        {/* Wearable Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-6 py-2 mb-8">
              <Watch className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-semibold">Coming December 2026</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                The Cutest Wearable Ever
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              A tiny, adorable device that keeps track of everything while your pet plays and explores.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-xl border border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Activity Tracking</h3>
                <p className="text-gray-600">Steps, runs, and playtime tracked with precision and care.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">GPS Safety</h3>
                <p className="text-gray-600">Always know your furry friend is safe with precise location tracking.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-pink-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Health Vitals</h3>
                <p className="text-gray-600">Temperature, heart rate, and wellness monitoring made simple.</p>
              </div>
            </div>

            <Link href="/wearable">
              <Button size="lg" className="px-12 py-4 text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                <Watch className="w-6 h-6 mr-3" />
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Ready to meet your pet's
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                adorable digital twin?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands of pet parents who've discovered the joy of digital pet care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup">
                <Button size="lg" className="px-12 py-4 text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                  <PawPrint className="w-6 h-6 mr-3" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-12 py-4 text-xl font-semibold bg-white/80 backdrop-blur-xl border-pink-200 text-gray-700 hover:bg-white hover:border-pink-300">
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-pink-200 py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-xl relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Image src="/logo.jpg" alt="Digitas.Pet" width={24} height={24} className="w-6 h-6 rounded-md object-cover" />
                <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Digitas.Pet
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <Link href="/pricing" className="hover:text-gray-800 transition-colors">Pricing</Link>
                <Link href="/wearable" className="hover:text-gray-800 transition-colors">Wearable</Link>
                <span>© 2026 Digitas.Pet</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}