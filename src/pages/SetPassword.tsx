import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const SetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session?.user) {
        toast.error('You must be logged in to set your password');
        navigate('/auth');
      } else {
        setUserLoaded(true);
      }
    };

    checkSession();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Password set successfully!');
        navigate('/');
      }
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (!userLoaded) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a2a24] text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#21332a] p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Set Your Password</h2>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded bg-[#2b3a33] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d98e38]"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 rounded bg-[#2b3a33] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d98e38]"
        />

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          className={`w-full bg-[#d98e38] text-black font-semibold py-3 rounded transition-all duration-200 ${
            loading ? 'animate-pulse' : 'hover:bg-[#b87528]'
          }`}
          disabled={loading}
        >
          {loading ? 'Setting Password...' : 'Set Password'}
        </button>
      </form>
    </div>
  );
};

export default SetPassword;
