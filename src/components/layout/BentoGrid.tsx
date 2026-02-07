'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  children: ReactNode
  className?: string
  transparent?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

function BentoCard({ children, className, transparent = false, size = 'md' }: BentoCardProps) {
  const sizeClasses = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-2 row-span-1',
    lg: 'col-span-2 row-span-2',
    xl: 'col-span-3 row-span-2'
  }

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl p-6 transition-all duration-300',
        sizeClasses[size],
        transparent
          ? 'bg-slate-800/20 backdrop-blur-md border border-slate-700/30'
          : 'bg-slate-800/50 backdrop-blur-xl border border-slate-700',
        'hover:bg-slate-700/60 hover:border-cyan-500/50 hover:shadow-glow',
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-fr',
        className
      )}
    >
      {children}
    </div>
  )
}

// Pre-built cards for common use cases
export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  transparent = false,
  size = 'md' 
}: {
  icon: any
  title: string
  description: string
  transparent?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  return (
    <BentoCard transparent={transparent} size={size}>
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </BentoCard>
  )
}

export function CTACard({ 
  title, 
  description, 
  buttonText, 
  buttonHref,
  variant = 'primary',
  size = 'lg' 
}: {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  return (
    <BentoCard size={size}>
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            {description}
          </p>
        </div>
        <a
          href={buttonHref}
          className={cn(
            'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200',
            variant === 'primary'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 hover:shadow-glow'
              : 'border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-700/50'
          )}
        >
          {buttonText}
        </a>
      </div>
    </BentoCard>
  )
}

export function StatsCard({ 
  stats, 
  size = 'md' 
}: {
  stats: { label: string; value: string; color?: string }[]
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  return (
    <BentoCard transparent size={size}>
      <div className="grid grid-cols-2 gap-4 h-full">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div 
              className={cn(
                'text-2xl font-bold font-mono mb-1',
                stat.color || 'text-cyan-400'
              )}
            >
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

export { BentoCard }