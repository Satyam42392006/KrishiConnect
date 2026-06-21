'use client'; // Don't worry about this line - Next.js needs it!

import { useState } from 'react'; // This lets us remember things (like what the user types)
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import websiteContent from '../../components/content';

// ========================================
// This is the SIGNIN PAGE (renamed from login)!
// ========================================
function SigninPage() {
  let [emailInput, setEmailInput] = useState('');
  let [passwordInput, setPasswordInput] = useState('');
  let [messageText, setMessageText] = useState('');
  let [messageColorClass, setMessageColorClass] = useState('');

  function handleLoginClick(event) {
    event.preventDefault();

    if (emailInput !== '' && passwordInput !== '') {
      setMessageText('RISHI-CONNECT Sign in successful!');
      setMessageColorClass('bg-green-100 text-green-800');
    } else {
      setMessageText('RISHI-CONNECT Please fill in both fields');
      setMessageColorClass('bg-red-100 text-red-800');
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{websiteContent.signinTitle}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Welcome back! Please sign in to your account.
          </p>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            {messageText && (
              <p className={`mb-4 p-3 rounded-lg text-center ${messageColorClass}`}>
                {messageText}
              </p>
            )}

            <form onSubmit={handleLoginClick}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  placeholder="your@email.com"
                  value={emailInput}
                  onChange={(event) => setEmailInput(event.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  placeholder="••••••••"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>

            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SigninPage;
