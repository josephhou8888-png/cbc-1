import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const NotConfiguredMessage = () => (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Authentication Not Configured</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>This feature requires a backend connection to work.</p>
            <p className="mt-1">To enable login and signup, please follow these steps:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Create a free project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline">supabase.com</a>.</li>
              <li>Find your Project URL and anon key in your project's API settings.</li>
              <li>Open the file <code className="bg-yellow-100 text-yellow-900 px-1 py-0.5 rounded text-xs">lib/supabaseClient.ts</code>.</li>
              <li>Replace the placeholder values with your own credentials.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isConfigured } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error: authError } = await login(email, password);
    if (authError) {
      if (authError.message.includes('Email not confirmed')) {
        setError('Please check your email to confirm your account before logging in.');
      } else {
        setError(authError.message);
      }
    } else {
      window.location.href = '/dashboard';
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
           <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Carbon Blockchain Certificate" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {isConfigured ? (
            <>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <div>
                    <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-emerald-400"
                    >
                    {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/signup" className="font-medium text-emerald-600 hover:text-emerald-500">
                    Sign up
                    </a>
                </p>
            </>
        ) : (
            <div className="mt-8 space-y-4">
                <NotConfiguredMessage />
                <p className="text-center text-sm text-gray-600">
                    Return to{' '}
                    <a href="/" className="font-medium text-emerald-600 hover:text-emerald-500">
                        Homepage
                    </a>
                </p>
            </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;