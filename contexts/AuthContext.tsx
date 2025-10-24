import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import type { AuthError, User } from '@supabase/supabase-js';

// A custom AuthError-like object for when Supabase is not configured.
const notConfiguredError = {
  name: 'NotConfiguredError',
  message: 'Authentication service is not configured. Please check your Supabase credentials.',
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isConfigured: boolean;
  login: (email: string, pass: string) => Promise<{ error: AuthError | null }>;
  logout: () => Promise<{ error: AuthError | null }>;
  signup: (email: string, pass: string) => Promise<{ error: AuthError | null }>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If supabase client is not initialized, we are not logged in and not loading.
    if (!supabase) {
      setLoading(false);
      return;
    }
    
    const setInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error getting session:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    setInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    if (!supabase) {
      return { error: notConfiguredError as AuthError };
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const logout = async () => {
    if (!supabase) {
        // If not configured, just redirect without an error
        window.location.href = '/login';
        return { error: null };
    }
    const { error } = await supabase.auth.signOut();
    if (!error) {
        window.location.href = '/login';
    }
    return { error };
  };

  const signup = async (email: string, password: string) => {
    if (!supabase) {
      return { error: notConfiguredError as AuthError };
    }
    const { error } = await supabase.auth.signUp({ email, password });
    return { error };
  };

  const value = { user, loading, login, logout, signup, isConfigured: isSupabaseConfigured };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};