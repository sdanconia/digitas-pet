export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          display_name: string
          avatar_url: string | null
          auth_provider: 'email' | 'google' | 'apple'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          display_name: string
          avatar_url?: string | null
          auth_provider?: 'email' | 'google' | 'apple'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          display_name?: string
          avatar_url?: string | null
          auth_provider?: 'email' | 'google' | 'apple'
          created_at?: string
          updated_at?: string
        }
      }
      pets: {
        Row: {
          id: string
          owner_id: string
          name: string
          slug: string
          species: 'dog' | 'cat'
          breed: string
          date_of_birth: string | null
          approximate_age_months: number | null
          weight_kg: number
          sex: 'male' | 'female'
          is_neutered: boolean
          photo_url: string
          dominant_color_hex: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          name: string
          slug: string
          species: 'dog' | 'cat'
          breed: string
          date_of_birth?: string | null
          approximate_age_months?: number | null
          weight_kg: number
          sex: 'male' | 'female'
          is_neutered: boolean
          photo_url: string
          dominant_color_hex: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          name?: string
          slug?: string
          species?: 'dog' | 'cat'
          breed?: string
          date_of_birth?: string | null
          approximate_age_months?: number | null
          weight_kg?: number
          sex?: 'male' | 'female'
          is_neutered?: boolean
          photo_url?: string
          dominant_color_hex?: string
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          plan: 'free' | 'pro' | 'deluxe'
          status: 'active' | 'cancelled' | 'past_due'
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          current_period_start: string
          current_period_end: string
          cancel_at_period_end: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan?: 'free' | 'pro' | 'deluxe'
          status?: 'active' | 'cancelled' | 'past_due'
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          current_period_start: string
          current_period_end: string
          cancel_at_period_end?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan?: 'free' | 'pro' | 'deluxe'
          status?: 'active' | 'cancelled' | 'past_due'
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          current_period_start?: string
          current_period_end?: string
          cancel_at_period_end?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      wearable_claims: {
        Row: {
          id: string
          user_id: string
          plan_at_claim: 'pro' | 'deluxe'
          discount_type: 'half_off' | 'free'
          claimed_at: string
          wearable_activated_at: string | null
          activation_lock_plan: 'pro' | 'deluxe' | null
          activation_lock_expires_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan_at_claim: 'pro' | 'deluxe'
          discount_type: 'half_off' | 'free'
          claimed_at: string
          wearable_activated_at?: string | null
          activation_lock_plan?: 'pro' | 'deluxe' | null
          activation_lock_expires_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan_at_claim?: 'pro' | 'deluxe'
          discount_type?: 'half_off' | 'free'
          claimed_at?: string
          wearable_activated_at?: string | null
          activation_lock_plan?: 'pro' | 'deluxe' | null
          activation_lock_expires_at?: string | null
          created_at?: string
        }
      }
      stat_entries: {
        Row: {
          id: string
          pet_id: string
          date: string
          weight_kg: number | null
          activity_level: number | null
          diet_quality: number | null
          sleep_hours: number | null
          mood: 1 | 2 | 3 | 4 | 5 | null
          last_vet_visit: string | null
          vaccinations_up_to_date: boolean | null
          overall_score: number
          created_at: string
        }
        Insert: {
          id?: string
          pet_id: string
          date: string
          weight_kg?: number | null
          activity_level?: number | null
          diet_quality?: number | null
          sleep_hours?: number | null
          mood?: 1 | 2 | 3 | 4 | 5 | null
          last_vet_visit?: string | null
          vaccinations_up_to_date?: boolean | null
          overall_score: number
          created_at?: string
        }
        Update: {
          id?: string
          pet_id?: string
          date?: string
          weight_kg?: number | null
          activity_level?: number | null
          diet_quality?: number | null
          sleep_hours?: number | null
          mood?: 1 | 2 | 3 | 4 | 5 | null
          last_vet_visit?: string | null
          vaccinations_up_to_date?: boolean | null
          overall_score?: number
          created_at?: string
        }
      }
      food_entries: {
        Row: {
          id: string
          pet_id: string
          date: string
          food_name: string
          food_type: 'dry' | 'wet' | 'raw' | 'homemade' | 'treats' | 'supplements'
          portion_amount: number
          portion_unit: 'grams' | 'cups' | 'pieces'
          meal_time: 'breakfast' | 'lunch' | 'dinner' | 'snack'
          created_at: string
        }
        Insert: {
          id?: string
          pet_id: string
          date: string
          food_name: string
          food_type: 'dry' | 'wet' | 'raw' | 'homemade' | 'treats' | 'supplements'
          portion_amount: number
          portion_unit: 'grams' | 'cups' | 'pieces'
          meal_time: 'breakfast' | 'lunch' | 'dinner' | 'snack'
          created_at?: string
        }
        Update: {
          id?: string
          pet_id?: string
          date?: string
          food_name?: string
          food_type?: 'dry' | 'wet' | 'raw' | 'homemade' | 'treats' | 'supplements'
          portion_amount?: number
          portion_unit?: 'grams' | 'cups' | 'pieces'
          meal_time?: 'breakfast' | 'lunch' | 'dinner' | 'snack'
          created_at?: string
        }
      }
      reminders: {
        Row: {
          id: string
          pet_id: string
          title: string
          type: 'vet' | 'vaccination' | 'grooming' | 'medication' | 'custom'
          datetime: string
          recurrence: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly'
          notes: string | null
          email_reminder_sent_24h: boolean
          email_reminder_sent_day_of: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          pet_id: string
          title: string
          type: 'vet' | 'vaccination' | 'grooming' | 'medication' | 'custom'
          datetime: string
          recurrence?: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly'
          notes?: string | null
          email_reminder_sent_24h?: boolean
          email_reminder_sent_day_of?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          pet_id?: string
          title?: string
          type?: 'vet' | 'vaccination' | 'grooming' | 'medication' | 'custom'
          datetime?: string
          recurrence?: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly'
          notes?: string | null
          email_reminder_sent_24h?: boolean
          email_reminder_sent_day_of?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      wearable_waitlist: {
        Row: {
          id: string
          email: string
          user_id: string | null
          pet_species: 'dog' | 'cat' | 'other' | null
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          user_id?: string | null
          pet_species?: 'dog' | 'cat' | 'other' | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          user_id?: string | null
          pet_species?: 'dog' | 'cat' | 'other' | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Plan = 'free' | 'pro' | 'deluxe'
export type Species = 'dog' | 'cat'
export type Sex = 'male' | 'female'
export type MoodValue = 1 | 2 | 3 | 4 | 5