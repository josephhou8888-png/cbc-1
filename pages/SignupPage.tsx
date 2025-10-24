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

const SignupSuccessMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-gray-900">Please check your email</h3>
        <div className="mt-2 text-md text-gray-600">
            <p>{message}</p>
            <p className="mt-2 font-semibold">You must click the confirmation link before you can sign in.</p>
        </div>
        <div className="mt-6">
            <a href="/" className="inline-block bg-emerald-500 text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
                Back to Homepage
            </a>
        </div>
    </div>
);

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const { signup, isConfigured } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      return setError('Password must be at least 6 characters long.');
    }
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    setError('');
    setSuccessMessage('');
    setLoading(true);

    const { error: authError } = await signup(email, password);
    if (authError) {
      setError(authError.message);
    } else {
      setSuccessMessage('A confirmation link has been sent to your email address.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
           <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Carbon Blockchain Certificate" />
           {!successMessage && (
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create your account
                </h2>
           )}
        </div>

        {isConfigured ? (
             successMessage ? (
                <SignupSuccessMessage message={successMessage} />
             ) : (
                <>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                placeholder="Password (min. 6 characters)" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                            <input id="confirm-password" name="confirm-password" type="password" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <div>
                            <button type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-emerald-400"
                            >
                            {loading ? 'Creating account...' : 'Sign up'}
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
                        Sign in
                        </a>
                    </p>
                </>
             )
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

export default SignupPage;