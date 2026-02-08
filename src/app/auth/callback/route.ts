import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/db/supabase-server'
import { supabaseAdmin } from '@/lib/db/supabase'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createServerSupabaseClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && data.user) {
      // Check if user profile exists
      const { data: existingProfile } = await supabase
        .from('users')
        .select('id')
        .eq('id', data.user.id)
        .single()

      // Create user profile if it doesn't exist (OAuth signup)
      if (!existingProfile) {
        const displayName = 
          data.user.user_metadata?.full_name || 
          data.user.user_metadata?.name || 
          data.user.email?.split('@')[0] || 
          'User'

        const provider = data.user.app_metadata?.provider || 'email'

        // Use admin client to bypass RLS for initial user creation
        const { error: profileError } = await (supabaseAdmin
          .from('users') as any)
          .insert({
            id: data.user.id,
            email: data.user.email!,
            display_name: displayName,
            avatar_url: data.user.user_metadata?.avatar_url,
            auth_provider: provider,
          })

        if (profileError) {
          console.error('Error creating user profile:', profileError)
        }

        // Create default subscription
        const { error: subscriptionError } = await (supabaseAdmin
          .from('subscriptions') as any)
          .insert({
            user_id: data.user.id,
            plan: 'free',
            status: 'active',
            current_period_start: new Date().toISOString(),
            current_period_end: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          })

        if (subscriptionError) {
          console.error('Error creating subscription:', subscriptionError)
        }

        // Redirect new users to onboarding
        return NextResponse.redirect(`${origin}/onboarding`)
      }

      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=auth_callback_error`)
}