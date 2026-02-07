import { Plan } from '@/types/database'

const FEATURE_ACCESS: Record<string, Plan[]> = {
  'pet_profiles': ['free', 'pro', 'deluxe'],
  '3d_twin_basic': ['free', 'pro', 'deluxe'],
  'manual_health_tracking': ['free', 'pro', 'deluxe'],
  'food_nutrition_logging': ['free', 'pro', 'deluxe'],
  'vet_grooming_reminders': ['free', 'pro', 'deluxe'],
  'partner_services': ['free', 'pro', 'deluxe'],
  'wearable_waitlist': ['free', 'pro', 'deluxe'],
  'advanced_dashboards': ['pro', 'deluxe'],
  'wearable_data_integration': ['pro', 'deluxe'],
  'activity_sleep_trends': ['pro', 'deluxe'],
  'breed_age_insights': ['pro', 'deluxe'],
  'priority_features': ['pro', 'deluxe'],
  'premium_analytics': ['deluxe'],
  'predictive_insights': ['deluxe'],
  'experimental_features': ['deluxe'],
  'concierge_support': ['deluxe'],
  'hardware_priority': ['deluxe'],
}

export function hasAccess(plan: Plan, feature: string): boolean {
  return FEATURE_ACCESS[feature]?.includes(plan) ?? false
}

export function getRequiredPlan(feature: string): Plan | null {
  const plans = FEATURE_ACCESS[feature]
  if (!plans || plans.length === 0) return null
  
  // Return the lowest tier that has access
  if (plans.includes('free')) return 'free'
  if (plans.includes('pro')) return 'pro'
  if (plans.includes('deluxe')) return 'deluxe'
  
  return null
}

export const PLAN_FEATURES = {
  free: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Pet profiles (cats & dogs)',
      '3D pet character (basic)',
      'Manual health tracking',
      'Food & nutrition logging',
      'Vet & grooming reminders',
      'Access to partner services',
      'Wearable waitlist'
    ],
    wearableBenefit: 'Waitlist only'
  },
  pro: {
    name: 'Pro',
    price: '$15',
    period: 'month',
    features: [
      'Everything in Free, plus:',
      'Advanced health dashboards',
      'Wearable data integration',
      'Activity, sleep & trend analysis',
      'Breed + age-filtered study insights',
      'Priority access to new features'
    ],
    wearableBenefit: '50% off'
  },
  deluxe: {
    name: 'Deluxe',
    price: '$150',
    period: 'month',
    features: [
      'Everything in Pro, plus:',
      'Premium analytics & predictive insights',
      'Early access to experimental features',
      'Concierge-level support',
      'Highest priority for future hardware'
    ],
    wearableBenefit: 'Free'
  }
} as const