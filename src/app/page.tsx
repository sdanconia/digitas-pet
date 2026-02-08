'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import Image from 'next/image'
import {
  PawPrint,
  Sparkles,
  BarChart3,
  Watch,
  Shield,
  Zap,
  Heart,
  Activity,
  ArrowRight,
  Microscope,
  Rocket,
  CalendarDays,
} from 'lucide-react'

// Dynamic import for 3D to avoid SSR issues
const ScrollReactive3D = dynamic(
  () => import('@/components/effects/ScrollReactive3D').then(mod => ({ default: mod.ScrollReactive3D })),
  { ssr: false }
)

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <ScrollReactive3D />

      <div className="relative min-h-screen bg-transparent">
        <Navigation />

        {/* ===== APP LAUNCH HERO ===== */}
        <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Launch badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-5 py-2.5 mb-8 shadow-sm glow-pulse">
              <Rocket className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-semibold">Launching Summer 2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
              <span className="text-gray-900">Your Pet.</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Digitally Alive.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              3D digital twins. Real health insights. A smarter way to care for the ones who can&apos;t tell you how they feel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/signup">
                <Button size="lg" className="px-10 py-5 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-200/50 glow-pulse">
                  <PawPrint className="w-5 h-5 mr-2" />
                  Create Your Twin &mdash; Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-8 py-5 text-base font-semibold border-gray-200 text-gray-700 hover:bg-white/80 backdrop-blur-sm">
                  View Plans
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Trust Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-6 border-y border-gray-200/50 bg-white/40 backdrop-blur-sm rounded-2xl px-8">
              {[
                { value: '50K+', label: 'Happy Pets' },
                { value: '94.2', label: 'Avg Health Score' },
                { value: '24/7', label: 'Monitoring' },
                { value: '99.1%', label: 'Accuracy' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold font-mono text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== APP PREVIEW / SIGN UP FEATURE ===== */}
        <RevealSection>
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-3xl p-1 shadow-2xl shadow-purple-300/30 glow-pulse">
                <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                  {/* Inner glow effects */}
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
                      <CalendarDays className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-medium">App Launch &mdash; Summer 2026</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
                      The Future of Pet Care
                      <br />
                      <span className="text-purple-200">Starts Here</span>
                    </h2>

                    <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Be among the first to experience AI-powered health tracking, stunning 3D digital twins,
                      and real-time wearable monitoring. Sign up today and get early access.
                    </p>

                    {/* App features grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
                      {[
                        { icon: Sparkles, label: '3D Twin' },
                        { icon: BarChart3, label: 'Health AI' },
                        { icon: Watch, label: 'Smart Collar' },
                        { icon: Shield, label: 'Vet Sync' },
                      ].map((item, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                          <item.icon className="w-6 h-6 text-white mx-auto mb-2" />
                          <span className="text-sm text-white font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/signup">
                        <Button size="lg" className="px-10 py-5 text-base font-semibold bg-white text-purple-700 hover:bg-purple-50 shadow-xl">
                          <PawPrint className="w-5 h-5 mr-2" />
                          Sign Up for Early Access
                        </Button>
                      </Link>
                      <Link href="/wearable">
                        <Button size="lg" className="px-8 py-5 text-base font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20">
                          <Watch className="w-5 h-5 mr-2" />
                          Collar Waitlist
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ===== FEATURES GRID ===== */}
        <RevealSection>
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">
                  Everything Your Pet Needs
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  From adorable 3D twins to comprehensive health tracking, we make pet care delightful.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Sparkles,
                    title: '3D Digital Twins',
                    description: 'Watch your pet come to life in beautiful 3D with cute animations and personality that matches your real pet.',
                    color: 'purple',
                  },
                  {
                    icon: BarChart3,
                    title: 'Health Dashboard',
                    description: 'Beautiful charts and insights that make tracking weight, activity, diet, sleep, and mood effortless.',
                    color: 'blue',
                  },
                  {
                    icon: Heart,
                    title: 'AI-Powered Care',
                    description: 'Personalized recommendations based on your pet\u2019s breed, age, and real-time health data.',
                    color: 'pink',
                  },
                  {
                    icon: Activity,
                    title: 'Real-time Sync',
                    description: 'Watch your digital twin update live as your pet moves, plays, and rests throughout the day.',
                    color: 'green',
                  },
                  {
                    icon: Shield,
                    title: 'Vet Integration',
                    description: 'Share health reports directly with your veterinarian for smarter, data-driven checkups.',
                    color: 'indigo',
                  },
                  {
                    icon: Microscope,
                    title: '10% to Research',
                    description: 'Every subscription funds peer-reviewed studies into the diseases that affect your pet\u2019s breed.',
                    color: 'orange',
                  },
                ].map((feature, i) => {
                  const colorMap: Record<string, { bg: string; icon: string }> = {
                    purple: { bg: 'bg-purple-50', icon: 'text-purple-600' },
                    blue: { bg: 'bg-blue-50', icon: 'text-blue-600' },
                    pink: { bg: 'bg-pink-50', icon: 'text-pink-600' },
                    green: { bg: 'bg-green-50', icon: 'text-green-600' },
                    indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600' },
                    orange: { bg: 'bg-orange-50', icon: 'text-orange-600' },
                  }
                  const colors = colorMap[feature.color]
                  return (
                    <div
                      key={i}
                      className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <feature.icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ===== HOW IT WORKS ===== */}
        <RevealSection>
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">
                  How It Works
                </h2>
                <p className="text-lg text-gray-500">Three simple steps to a healthier, happier pet.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Create a Profile',
                    description: 'Add your pet\u2019s breed, age, and basic info. We\u2019ll generate their unique 3D twin.',
                    icon: PawPrint,
                  },
                  {
                    step: '02',
                    title: 'Track Their Health',
                    description: 'Log meals, activity, weight, and mood. Our AI spots patterns and gives you insights.',
                    icon: BarChart3,
                  },
                  {
                    step: '03',
                    title: 'Connect the Collar',
                    description: 'Coming December 2026 \u2014 our smart collar syncs real-time vitals automatically.',
                    icon: Watch,
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-50 rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-purple-200/50 transition-all">
                      <item.icon className="w-7 h-7 text-purple-600" />
                    </div>
                    <span className="block text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">Step {item.step}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ===== WEARABLE PREVIEW ===== */}
        <RevealSection>
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-5 py-2 mb-8 shadow-sm">
                <Watch className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700 font-semibold">Coming December 2026</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">
                The Smart Collar
              </h2>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Real-time health monitoring that works while they play. Pro subscribers get 50% off. Deluxe gets it free.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Zap, title: 'Activity Tracking', description: 'Steps, runs, and playtime tracked with precision.', color: 'blue' },
                  { icon: Shield, title: 'GPS Safety', description: 'Always know where your furry friend is.', color: 'green' },
                  { icon: Heart, title: 'Health Vitals', description: 'Temperature, heart rate, and wellness monitoring.', color: 'pink' },
                ].map((item, i) => {
                  const colorMap: Record<string, { bg: string; icon: string }> = {
                    blue: { bg: 'bg-blue-50', icon: 'text-blue-600' },
                    green: { bg: 'bg-green-50', icon: 'text-green-600' },
                    pink: { bg: 'bg-pink-50', icon: 'text-pink-600' },
                  }
                  const colors = colorMap[item.color]
                  return (
                    <div key={i} className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all group">
                      <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  )
                })}
              </div>

              <Link href="/wearable">
                <Button size="lg" className="px-8 py-4 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200">
                  <Watch className="w-5 h-5 mr-2" />
                  Join the Waitlist
                </Button>
              </Link>
            </div>
          </section>
        </RevealSection>

        {/* ===== RESEARCH CTA ===== */}
        <RevealSection>
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
                <div className="relative z-10">
                  <Microscope className="w-10 h-10 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">10% of Profits Fund Research</h3>
                  <p className="text-purple-100 mb-6 max-w-xl mx-auto">
                    Every subscription directly funds peer-reviewed studies into the diseases that affect your pet&apos;s breed.
                  </p>
                  <Link href="/research">
                    <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 shadow-lg">
                      Learn About Our Foundation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ===== FINAL CTA ===== */}
        <RevealSection>
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">
                Ready to meet your pet&apos;s digital twin?
              </h2>
              <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
                Join thousands of pet parents who&apos;ve discovered the future of pet care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="px-8 py-4 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200">
                    <PawPrint className="w-5 h-5 mr-2" />
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold border-gray-200 text-gray-700 hover:bg-white/80">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Image src="/logo.jpg" alt="Digitas.Pet" width={24} height={24} className="w-6 h-6 rounded-md object-cover" />
                <span className="text-lg font-bold font-heading text-gray-900">
                  Digitas<span className="text-purple-600">.Pet</span>
                </span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/research" className="hover:text-gray-700 transition-colors">Research</Link>
                <Link href="/pricing" className="hover:text-gray-700 transition-colors">Pricing</Link>
                <Link href="/wearable" className="hover:text-gray-700 transition-colors">Wearable</Link>
                <span>&copy; 2026 Digitas.Pet</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
