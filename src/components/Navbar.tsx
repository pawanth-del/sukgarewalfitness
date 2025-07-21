import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Dumbbell,
  User,
  LogOut,
  Sun,
  Moon,
  Settings,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Plans', href: '/plans' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  // Theme toggle effect on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setShowDropdown(false);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 border-b border-[#d98e38]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-[#d98e38]" />
              <span className="text-xl font-bold text-white">SukhGarewalFitness</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[#d98e38] border-b-2 border-[#d98e38]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-[#d98e38] hover:scale-110 transition"
                title="Toggle theme"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Authenticated User */}
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700"
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${user.email}&background=1a2a24&color=fff`}
                      alt="Avatar"
                      className="h-6 w-6 rounded-full"
                    />
                    <span>{user.email?.split('@')[0]}</span>
                  </button>

                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20">
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-700 w-full"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center space-x-1 px-4 py-2 bg-[#d98e38] text-black rounded-lg hover:bg-[#b87528] transition"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-[#d98e38] bg-gray-700'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center space-x-2 px-3 py-2 text-[#d98e38] hover:bg-gray-700 rounded-lg transition-colors w-full"
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span>Theme</span>
                </button>

                {user ? (
                  <div className="border-t border-gray-700 pt-3 mt-3">
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-2 px-3 py-2 text-red-500 hover:bg-gray-700 rounded-lg transition-colors w-full"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 px-3 py-2 text-[#d98e38] hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Sign In</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
