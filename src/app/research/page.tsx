import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import {
  PawPrint,
  Microscope,
  HeartHandshake,
  TrendingUp,
  Sparkles,
  Dog,
  Cat,
  ArrowRight,
  Globe,
  BookOpen,
  Users,
  Beaker,
} from 'lucide-react'

const researchAreas = [
  {
    title: 'Canine Cancer Research',
    species: 'Dogs',
    speciesIcon: Dog,
    accent: 'blue',
    description: 'Studying lymphoma, osteosarcoma, and hemangiosarcoma across breeds like Golden Retrievers, Rottweilers, and Boxers.',
    stat: '1 in 3',
    statLabel: 'dogs affected by cancer',
    breeds: ['Golden Retriever', 'Rottweiler', 'Boxer', 'Bernese Mountain Dog'],
  },
  {
    title: 'Feline Kidney Disease',
    species: 'Cats',
    speciesIcon: Cat,
    accent: 'purple',
    description: 'Chronic kidney disease affects over 30% of cats over 10. Our research targets early detection biomarkers and slowing progression.',
    stat: '30%+',
    statLabel: 'of senior cats affected',
    breeds: ['Persian', 'Siamese', 'Maine Coon', 'Abyssinian'],
  },
  {
    title: 'Hip & Joint Dysplasia',
    species: 'Dogs',
    speciesIcon: Dog,
    accent: 'pink',
    description: 'Advancing genetic screening and early intervention for hip dysplasia in large breeds, reducing the need for surgery.',
    stat: '20%',
    statLabel: 'of large breeds affected',
    breeds: ['German Shepherd', 'Labrador', 'Rottweiler', 'Golden Retriever'],
  },
  {
    title: 'Feline Heart Disease (HCM)',
    species: 'Cats',
    speciesIcon: Cat,
    accent: 'indigo',
    description: 'Hypertrophic cardiomyopathy is the #1 heart disease in cats. We fund echocardiographic screening research and genetic markers.',
    stat: '15%',
    statLabel: 'of cats carry HCM genes',
    breeds: ['Maine Coon', 'Ragdoll', 'British Shorthair', 'Sphynx'],
  },
  {
    title: 'Brachycephalic Syndrome',
    species: 'Dogs',
    speciesIcon: Dog,
    accent: 'green',
    description: 'Breathing difficulties in flat-faced breeds. Funding surgical technique improvements and breeding guideline research.',
    stat: '50%+',
    statLabel: 'of brachy breeds affected',
    breeds: ['French Bulldog', 'Bulldog', 'Pug', 'Boston Terrier'],
  },
  {
    title: 'Feline Diabetes',
    species: 'Cats',
    speciesIcon: Cat,
    accent: 'orange',
    description: 'Type 2 diabetes is rising in cats. Our studies focus on dietary prevention, early glucose monitoring, and remission protocols.',
    stat: '1 in 200',
    statLabel: 'cats develop diabetes',
    breeds: ['Burmese', 'Siamese', 'British Shorthair', 'Maine Coon'],
  },
]

const impactStats = [
  { value: '10%', label: 'Of Every Dollar', description: 'goes directly to research' },
  { value: '12', label: 'Active Studies', description: 'funded across institutions' },
  { value: '8', label: 'Research Partners', description: 'universities & foundations' },
  { value: '20+', label: 'Breeds Studied', description: 'cats and dogs combined' },
]

const fundingBreakdown = [
  { label: 'Direct Research Funding', percentage: 70, color: 'from-purple-500 to-purple-400' },
  { label: 'Institutional Partnerships', percentage: 15, color: 'from-pink-500 to-pink-400' },
  { label: 'Data Infrastructure', percentage: 10, color: 'from-blue-500 to-blue-400' },
  { label: 'Education & Outreach', percentage: 5, color: 'from-green-500 to-green-400' },
]

const accentColors: Record<string, { border: string; text: string; bg: string; iconBg: string; pillText: string }> = {
  blue: {
    border: 'border-gray-100',
    text: 'text-blue-600',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-50',
    pillText: 'text-blue-600',
  },
  purple: {
    border: 'border-gray-100',
    text: 'text-purple-600',
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-50',
    pillText: 'text-purple-600',
  },
  pink: {
    border: 'border-gray-100',
    text: 'text-pink-600',
    bg: 'bg-pink-50',
    iconBg: 'bg-pink-50',
    pillText: 'text-pink-600',
  },
  indigo: {
    border: 'border-gray-100',
    text: 'text-indigo-600',
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-50',
    pillText: 'text-indigo-600',
  },
  green: {
    border: 'border-gray-100',
    text: 'text-green-600',
    bg: 'bg-green-50',
    iconBg: 'bg-green-50',
    pillText: 'text-green-600',
  },
  orange: {
    border: 'border-gray-100',
    text: 'text-orange-600',
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-50',
    pillText: 'text-orange-600',
  },
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero — The Big Number */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background accents */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-6 py-3 mb-12 shadow-sm">
            <Microscope className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-600 font-medium">The Digitas Research Foundation</span>
          </div>

          <div className="mb-8">
            <span className="text-8xl sm:text-9xl md:text-[12rem] font-bold font-heading bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-none">
              10%
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gray-900 mb-6 max-w-3xl mx-auto">
            of every dollar funds pet health research
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Your subscription isn't just better care for your pet. It's advancing
            the science that helps all pets live longer, healthier lives.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                Every pet deserves the chance to live a longer, healthier life.
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                The Digitas Research Foundation funds peer-reviewed scientific studies
                targeting the most common diseases in popular cat and dog breeds. Our
                goal: earlier detection, better treatments, and real prevention strategies.
              </p>
              <blockquote className="border-l-2 border-purple-600 pl-4 italic text-gray-500">
                "By combining real-world pet health data with rigorous research, we can
                identify patterns in early disease detection that would take decades to
                discover traditionally."
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Microscope, label: 'Peer-reviewed research', desc: 'Every study meets rigorous scientific standards', color: 'purple' },
                { icon: HeartHandshake, label: 'Leading institutions', desc: 'Partnering with top veterinary research centers', color: 'pink' },
                { icon: TrendingUp, label: 'Evidence-based treatments', desc: 'Turning data into better care protocols', color: 'blue' },
                { icon: Globe, label: 'Open science', desc: 'All findings are published and publicly available', color: 'green' },
              ].map((item, i) => {
                const iconBgMap: Record<string, string> = { purple: 'bg-purple-50', pink: 'bg-pink-50', blue: 'bg-blue-50', green: 'bg-green-50' }
                const iconColorMap: Record<string, string> = { purple: 'text-purple-600', pink: 'text-pink-600', blue: 'text-blue-600', green: 'text-green-600' }
                return (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                    <div className={`w-10 h-10 ${iconBgMap[item.color]} rounded-xl flex items-center justify-center mb-3`}>
                      <item.icon className={`w-5 h-5 ${iconColorMap[item.color]}`} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.label}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How Your Subscription Powers Research */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-gray-900">
              How Your Subscription Powers Research
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Every plan directly contributes to the foundation. Here's the journey your contribution takes.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 items-start">
            {[
              { step: '01', title: 'You Subscribe', desc: 'Choose a plan that fits your pet\u2019s needs', icon: PawPrint },
              { step: '02', title: 'Foundation Receives 10%', desc: 'Automatically allocated from every subscription', icon: HeartHandshake },
              { step: '03', title: 'Studies Get Funded', desc: 'Money supports disease prevention and treatment research', icon: Beaker },
              { step: '04', title: 'Insights Emerge', desc: 'Research findings are published and peer-reviewed', icon: BookOpen },
              { step: '05', title: 'Your Pet Benefits', desc: 'Discoveries improve our health tracking and recommendations', icon: Sparkles },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                  <span className="text-3xl font-bold font-mono text-purple-200 block mb-3">{item.step}</span>
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                {i < 4 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-gray-300 absolute -right-4 top-1/2 -translate-y-1/2 translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-gray-900">
              What We're Funding
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Active research areas targeting the most impactful diseases across popular cat and dog breeds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, i) => {
              const colors = accentColors[area.accent]
              const SpeciesIcon = area.speciesIcon
              return (
                <div
                  key={i}
                  className={`bg-white border ${colors.border} rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${colors.iconBg} rounded-xl p-2.5`}>
                      <Microscope className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className={`inline-flex items-center space-x-1 ${colors.bg} rounded-full px-3 py-1`}>
                      <SpeciesIcon className={`w-3 h-3 ${colors.pillText}`} />
                      <span className={`text-xs font-medium ${colors.pillText}`}>{area.species}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className={`text-2xl font-bold font-mono ${colors.text}`}>{area.stat}</span>
                      <span className="text-xs text-gray-400">{area.statLabel}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {area.breeds.map((breed, j) => (
                        <span key={j} className="text-xs bg-gray-50 text-gray-500 rounded px-2 py-0.5">
                          {breed}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-gray-900">
              The Impact So Far
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="text-4xl font-bold font-mono text-gray-900 mb-2">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spending Transparency */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-gray-900">
              Where Your 10% Goes
            </h2>
            <p className="text-lg text-gray-500">
              Full transparency on how foundation funds are allocated.
            </p>
          </div>

          <div className="space-y-4">
            {fundingBreakdown.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                  <span className="text-sm font-mono text-purple-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              No executive overhead. Every dollar goes to research or direct support.
            </p>
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-4 text-gray-900">
            Our Research Partners
          </h2>
          <p className="text-lg text-gray-500 mb-12">
            Partnering with leading veterinary research institutions worldwide.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Cornell Veterinary Medicine',
              'UC Davis Vet School',
              'Morris Animal Foundation',
              'Royal Veterinary College',
              'Penn Vet',
            ].map((partner, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-xs text-gray-500 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Science */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-center">
            <BookOpen className="w-10 h-10 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-heading text-white mb-4">Open Access to Knowledge</h3>
            <p className="text-white/90 mb-2 max-w-2xl mx-auto">
              All research we fund is peer-reviewed and publicly available. Our findings help all pets — not just digitas.pet users.
            </p>
            <p className="text-sm text-white/70">
              Your data helps advance science for every pet, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
            Become Part of the Solution
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Every subscription advances pet health research. Start your plan today and
            automatically contribute to the Digitas Research Foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200">
                <PawPrint className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-gray-200 text-gray-700 hover:bg-gray-50">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <PawPrint className="w-6 h-6 text-purple-600" />
              <span className="text-lg font-bold text-gray-900">
                Digitas.Pet
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link href="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
              <Link href="/research" className="hover:text-gray-900 transition-colors">Research</Link>
              <Link href="/wearable" className="hover:text-gray-900 transition-colors">Wearable</Link>
              <span>&copy; 2026 Digitas.Pet</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
