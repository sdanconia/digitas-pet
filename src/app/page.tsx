import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import { 
  PawPrint, 
  Sparkles, 
  BarChart3, 
  Watch,
  Shield,
  Zap
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 animate-gradient" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-300">Your pet's stats. Tracked automatically.</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Your Pet's
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Twin
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Meet the future of pet care. Get a beautiful 3D digital twin of your pet with real-time health stats, 
            creating an engaging way to track and optimize their wellbeing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/signup">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                <PawPrint className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </Link>
          </div>
          
          {/* Demo/Preview placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <PawPrint className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-slate-400">3D Pet Twin Demo Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Everything Your Pet Needs
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From basic tracking to advanced insights, we've got your pet covered at every stage of their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-cyan-400 transition-colors">
                Shiny 3D Twin
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Your pet gets a gorgeous holographic 3D avatar with Pokémon-style collectible energy. 
                Watch them come to life with subtle animations and effects.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-glow-purple transition-shadow">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-purple-400 transition-colors">
                Health Dashboard
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Track activity, diet, sleep, mood, and vet visits with beautiful stat cards. 
                Get insights that help you optimize your pet's wellbeing.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 hover:border-pink-500/50 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-glow-pink transition-shadow">
                <Watch className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-pink-400 transition-colors">
                Smart Wearable
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Launching December 2026. Real-time tracking with GPS, activity monitoring, 
                and temperature sensing. Auto-syncs with your pet's digital twin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wearable Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
            <Watch className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-semibold">Coming December 2026</span>
          </div>
          
          <h2 className="text-4xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Digitas.Pet Wearable
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Be first in line for the future of pet health monitoring. 
            Real-time data that brings your pet's digital twin to life.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Zap, title: "Real-time Activity", desc: "Steps, runs, play time" },
              { icon: Shield, title: "GPS Location", desc: "Always know where they are" },
              { icon: BarChart3, title: "Sleep Tracking", desc: "Quality rest monitoring" },
              { icon: Watch, title: "Health Vitals", desc: "Temperature & wellness" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
                <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/wearable">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              <Watch className="w-5 h-5 mr-2" />
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to meet your pet's
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              digital twin?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8">
            Start tracking your pet's health today. Free forever, with premium features when you're ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                <PawPrint className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
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
  )
}