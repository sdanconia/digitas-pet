import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import { PLAN_FEATURES } from '@/lib/features'
import { 
  PawPrint, 
  Check, 
  X, 
  Watch,
  Shield,
  Heart,
  Zap
} from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      ...PLAN_FEATURES.free,
      color: 'green',
      popular: false,
    },
    {
      ...PLAN_FEATURES.pro,
      color: 'blue',
      popular: true,
    },
    {
      ...PLAN_FEATURES.deluxe,
      color: 'purple',
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            From free basic tracking to premium insights, we've got a plan for every pet parent. 
            Start free and upgrade when you're ready for more features.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-slate-800/50 backdrop-blur-xl border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500 ring-2 ring-cyan-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period !== 'forever' && (
                      <span className="text-slate-400 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-4 py-2">
                    <Watch className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-300 font-semibold">
                      Wearable: {plan.wearableBenefit}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700'
                      : index === 0
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started' : `Start ${plan.name}`}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Wearable Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                How the Wearable Works
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Understanding our transparent wearable program and what happens when you activate your device.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h3 className="text-xl font-bold text-white">Getting Your Wearable</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                <p><strong className="text-green-400">Free Plan:</strong> Join waitlist (no discount)</p>
                <p><strong className="text-blue-400">Pro Plan:</strong> Get 50% off wearable purchase</p>
                <p><strong className="text-purple-400">Deluxe Plan:</strong> Wearable included free</p>
                <p className="text-sm text-slate-400 italic">
                  Sign up for paid plan for one month, claim benefit, then change plans freely
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h3 className="text-xl font-bold text-white">Activation Commitment</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                <p>When you first activate your wearable:</p>
                <p><strong className="text-blue-400">Pro wearable:</strong> Stay on Pro for 3 months</p>
                <p><strong className="text-purple-400">Deluxe wearable:</strong> Stay on Deluxe for 3 months</p>
                <p className="text-sm text-slate-400 italic">
                  3-month period starts from activation, not purchase
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h3 className="text-xl font-bold text-white">After 3 Months</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                <p>You are completely free to:</p>
                <p>• Stay on your current plan</p>
                <p>• Downgrade to Pro ($15/month)</p>
                <p>• Downgrade to Free ($0/month)</p>
                <p className="text-green-400 font-semibold">You keep the wearable forever</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h3 className="text-xl font-bold text-white">Future-Proofing</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                <p>• Software updates continue on all plans</p>
                <p>• Data sync works on Pro and Deluxe plans</p>
                <p>• Free plan users keep basic wearable functions</p>
                <p>• No retroactive charges or hidden fees</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-400 mb-6">
              Yes, it's possible to end up with a <strong className="text-green-400">free wearable on the free plan forever</strong>. 
              This is intentional — our trust model.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Our Promise
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "No Dark Patterns",
                description: "Transparent pricing, no hidden tricks"
              },
              {
                icon: Heart,
                title: "No Forced Subscriptions", 
                description: "Cancel anytime, keep your benefits"
              },
              {
                icon: Zap,
                title: "No Hardware Hostage",
                description: "Your wearable works regardless of plan"
              },
              {
                icon: PawPrint,
                title: "Trust-Based Model",
                description: "Great value speaks for itself"
              }
            ].map((promise, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 text-center">
                <promise.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{promise.title}</h3>
                <p className="text-sm text-slate-400">{promise.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8">
            <blockquote className="text-xl text-slate-300 italic mb-4">
              "If the value is there, you'll stay. If it's not, you shouldn't have to. That's the deal."
            </blockquote>
            <p className="text-slate-400">— The Digitas.Pet Team</p>
          </div>

          <div className="mt-12">
            <Link href="/signup">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold mr-4">
                <PawPrint className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
            <Link href="/wearable">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                <Watch className="w-5 h-5 mr-2" />
                Join Waitlist
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