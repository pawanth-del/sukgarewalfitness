import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Moon, Sun } from 'lucide-react';
import toast from 'react-hot-toast';

const Auth: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const validate = () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    if (!isResetMode && password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    setTimeout(() => {
      if (isResetMode) {
        toast.success('Password reset email would be sent (demo).');
      } else if (isSignUp) {
        toast.success('Magic link sign-up flow simulated.');
      } else {
        toast.success('Logged in (demo).');
        navigate('/');
      }

      setLoading(false);
    }, 1200);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex items-center justify-center bg-[#1a2a24] dark:bg-white dark:text-black text-white px-4 sm:px-6 transition-colors duration-300">
        <form
          onSubmit={handleSubmit}
          className="bg-[#21332a] dark:bg-gray-100 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6"
        >
          {/* Theme Toggle */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="text-[#d98e38] hover:scale-110 transition"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-2">
            <Dumbbell className="h-10 w-10 text-[#d98e38]" />
          </div>

          <h2 className="text-2xl font-bold text-center dark:text-black">
            {isResetMode
              ? 'Reset Password'
              : isSignUp
              ? 'Sign Up via Magic Link'
              : 'Login with Password'}
          </h2>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded bg-[#2b3a33] dark:bg-white dark:text-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d98e38]"
            />
            {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Password */}
          {!isResetMode && (
            <div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded bg-[#2b3a33] dark:bg-white dark:text-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d98e38]"
              />
              {passwordError && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-[#d98e38] text-black font-semibold py-3 rounded transition-all duration-200 ${
              loading ? 'animate-pulse' : 'hover:bg-[#b87528]'
            }`}
            disabled={loading}
          >
            {loading
              ? 'Please wait...'
              : isResetMode
              ? 'Send Reset Email'
              : isSignUp
              ? 'Sign Up'
              : 'Login'}
          </button>

          {/* Reset Password Link */}
          {!isResetMode && (
            <p className="text-sm text-center text-gray-300 dark:text-gray-600">
              <button
                type="button"
                onClick={() => setIsResetMode(true)}
                className="text-[#d98e38] hover:underline"
              >
                Forgot Password?
              </button>
            </p>
          )}

          {/* Mode Switching */}
          <p className="text-sm text-center text-gray-300 dark:text-gray-600">
            {isResetMode ? (
              <>
                Remembered your password?{' '}
                <button
                  type="button"
                  onClick={() => setIsResetMode(false)}
                  className="text-[#d98e38] hover:underline"
                >
                  Go back
                </button>
              </>
            ) : isSignUp ? (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="text-[#d98e38] hover:underline"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                New here?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="text-[#d98e38] hover:underline"
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
