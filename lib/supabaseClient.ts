import { createClient, SupabaseClient } from '@supabase/supabase-js';

// --- USER ACTION REQUIRED ---
// 1. Create a project at https://supabase.com/
// 2. Go to your project's API settings.
// 3. Find your Project URL and anon Public Key.
// 4. Replace the placeholder values below.
// FIX: Explicitly type as string to prevent TypeScript from inferring a literal type, which causes comparison errors on line 13.
const supabaseUrl: string = 'https://thadtkhgphxivaoyzhgo.supabase.co'; // e.g., 'https://xyz.supabase.co'
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoYWR0a2hncGh4aXZhb3l6aGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMTYyMDQsImV4cCI6MjA3Njg5MjIwNH0.HJ8bUdJWZhGduNPBXGEwqPw2vZBNfRvsGv5ULvTZaZY'; // e.g., 'eyJhbGciOi...'

// A flag to check if the credentials have been updated from their placeholder values.
export const isSupabaseConfigured =
  supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY';

// We are creating a nullable Supabase client.
// If the credentials are still placeholders, the client will be null.
let supabaseInstance: SupabaseClient | null = null;

if (isSupabaseConfigured) {
    // Only create a client if the credentials have been changed.
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} else {
    // Log a warning to the console if the client is not configured.
    // This prevents the app from crashing and keeps auth features disabled.
    console.warn("Supabase client is not configured. Authentication will not work. Please update lib/supabaseClient.ts.");
}

export const supabase = supabaseInstance;