import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Logo } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLogout = async () => {
    await logout();
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" onClick={handleLogoClick} className="flex items-center">
              <Logo />
            </a>
          </div>
         
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <a href="/dashboard" className="text-gray-600 hover:text-emerald-500 transition-colors duration-200 font-medium">
                  Dashboard
                </a>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                 <a href="/login" className="text-gray-600 hover:text-emerald-500 transition-colors duration-200 font-medium">
                  Login
                </a>
                <a href="/signup" className="inline-block bg-emerald-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;