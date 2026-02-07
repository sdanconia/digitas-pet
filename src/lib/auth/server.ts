import { createServerSupabaseClient } from '@/lib/db/supabase-server'
import { redirect } from 'next/navigation'

export async function getCurrentUser() {
  const supabase = await createServerSupabaseClient()
  
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    return null
  }

  // Get user profile from our users table
  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

  return {
    ...user,
    profile
  }
}

export async function requireAuth() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return user
}

export async function getUserSubscription(userId: string) {
  const supabase = await createServerSupabaseClient()
  
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single()

  return subscription
}

export async function getUserPlan(userId: string) {
  const subscription = await getUserSubscription(userId)
  return subscription?.plan || 'free'
}