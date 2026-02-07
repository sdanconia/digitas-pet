-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  auth_provider TEXT NOT NULL DEFAULT 'email' CHECK (auth_provider IN ('email', 'google', 'apple')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create pets table
CREATE TABLE pets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  species TEXT NOT NULL CHECK (species IN ('dog', 'cat')),
  breed TEXT NOT NULL,
  date_of_birth DATE,
  approximate_age_months INTEGER CHECK (approximate_age_months > 0),
  weight_kg DECIMAL(5,2) NOT NULL CHECK (weight_kg > 0),
  sex TEXT NOT NULL CHECK (sex IN ('male', 'female')),
  is_neutered BOOLEAN NOT NULL,
  photo_url TEXT NOT NULL,
  dominant_color_hex TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT age_or_birth_date CHECK (
    (date_of_birth IS NOT NULL AND approximate_age_months IS NULL) OR
    (date_of_birth IS NULL AND approximate_age_months IS NOT NULL)
  )
);

-- Create subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'deluxe')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'past_due')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  current_period_start TIMESTAMPTZ NOT NULL,
  current_period_end TIMESTAMPTZ NOT NULL,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create wearable_claims table
CREATE TABLE wearable_claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan_at_claim TEXT NOT NULL CHECK (plan_at_claim IN ('pro', 'deluxe')),
  discount_type TEXT NOT NULL CHECK (discount_type IN ('half_off', 'free')),
  claimed_at TIMESTAMPTZ NOT NULL,
  wearable_activated_at TIMESTAMPTZ,
  activation_lock_plan TEXT CHECK (activation_lock_plan IN ('pro', 'deluxe')),
  activation_lock_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create stat_entries table
CREATE TABLE stat_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  weight_kg DECIMAL(5,2) CHECK (weight_kg > 0),
  activity_level INTEGER CHECK (activity_level >= 1 AND activity_level <= 10),
  diet_quality INTEGER CHECK (diet_quality >= 1 AND diet_quality <= 10),
  sleep_hours DECIMAL(4,2) CHECK (sleep_hours >= 0 AND sleep_hours <= 24),
  mood INTEGER CHECK (mood >= 1 AND mood <= 5),
  last_vet_visit DATE,
  vaccinations_up_to_date BOOLEAN,
  overall_score INTEGER NOT NULL CHECK (overall_score >= 0 AND overall_score <= 100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(pet_id, date)
);

-- Create food_entries table
CREATE TABLE food_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  food_name TEXT NOT NULL,
  food_type TEXT NOT NULL CHECK (food_type IN ('dry', 'wet', 'raw', 'homemade', 'treats', 'supplements')),
  portion_amount DECIMAL(8,2) NOT NULL CHECK (portion_amount > 0),
  portion_unit TEXT NOT NULL CHECK (portion_unit IN ('grams', 'cups', 'pieces')),
  meal_time TEXT NOT NULL CHECK (meal_time IN ('breakfast', 'lunch', 'dinner', 'snack')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create reminders table
CREATE TABLE reminders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('vet', 'vaccination', 'grooming', 'medication', 'custom')),
  datetime TIMESTAMPTZ NOT NULL,
  recurrence TEXT NOT NULL DEFAULT 'none' CHECK (recurrence IN ('none', 'daily', 'weekly', 'monthly', 'yearly')),
  notes TEXT,
  email_reminder_sent_24h BOOLEAN DEFAULT FALSE,
  email_reminder_sent_day_of BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create wearable_waitlist table
CREATE TABLE wearable_waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  pet_species TEXT CHECK (pet_species IN ('dog', 'cat', 'other')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_pets_owner_id ON pets(owner_id);
CREATE INDEX idx_pets_slug ON pets(slug);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_stat_entries_pet_id ON stat_entries(pet_id);
CREATE INDEX idx_stat_entries_date ON stat_entries(date);
CREATE INDEX idx_food_entries_pet_id ON food_entries(pet_id);
CREATE INDEX idx_food_entries_date ON food_entries(date);
CREATE INDEX idx_reminders_pet_id ON reminders(pet_id);
CREATE INDEX idx_reminders_datetime ON reminders(datetime);
CREATE INDEX idx_wearable_waitlist_email ON wearable_waitlist(email);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pets_updated_at BEFORE UPDATE ON pets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reminders_updated_at BEFORE UPDATE ON reminders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE wearable_claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE stat_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminders ENABLE ROW LEVEL SECURITY;
ALTER TABLE wearable_waitlist ENABLE ROW LEVEL SECURITY;

-- Users can only access their own data
CREATE POLICY users_policy ON users FOR ALL USING (auth.uid()::text = id::text);

-- Pet owners can access their pets
CREATE POLICY pets_owner_policy ON pets FOR ALL USING (
  owner_id IN (SELECT id FROM users WHERE auth.uid()::text = id::text)
);

-- Allow public read access to pets for shareable URLs (will be filtered by application)
CREATE POLICY pets_public_read ON pets FOR SELECT USING (true);

-- Subscription policies
CREATE POLICY subscriptions_policy ON subscriptions FOR ALL USING (
  user_id IN (SELECT id FROM users WHERE auth.uid()::text = id::text)
);

-- Wearable claims policies
CREATE POLICY wearable_claims_policy ON wearable_claims FOR ALL USING (
  user_id IN (SELECT id FROM users WHERE auth.uid()::text = id::text)
);

-- Stat entries policies
CREATE POLICY stat_entries_policy ON stat_entries FOR ALL USING (
  pet_id IN (SELECT id FROM pets WHERE owner_id IN (SELECT id FROM users WHERE auth.uid()::text = id::text))
);

-- Food entries policies
CREATE POLICY food_entries_policy ON food_entries FOR ALL USING (
  pet_id IN (SELECT id FROM pets WHERE owner_id IN (SELECT id FROM users WHERE auth.uid()::text = id::text))
);

-- Reminders policies
CREATE POLICY reminders_policy ON reminders FOR ALL USING (
  pet_id IN (SELECT id FROM pets WHERE owner_id IN (SELECT id FROM users WHERE auth.uid()::text = id::text))
);

-- Wearable waitlist - public insert, user can read their own
CREATE POLICY wearable_waitlist_insert_policy ON wearable_waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY wearable_waitlist_read_policy ON wearable_waitlist FOR SELECT USING (
  user_id IS NULL OR user_id IN (SELECT id FROM users WHERE auth.uid()::text = id::text)
);