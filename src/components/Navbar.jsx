import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();
  const { user } = useAuth();
  
  
  const headerRef = useRef(null);

  const navLinks = [
    { name: lang === 'ka' ? 'მთავარი' : 'Home', path: '/' },
    { name: lang === 'ka' ? 'პორტფოლიო' : 'Portfolio', path: '/portfolio' },
    { name: lang === 'ka' ? 'ჩვენ შესახებ' : 'About Us', path: '/about' },
    { name: lang === 'ka' ? 'კონტაქტი' : 'Contact', path: '/contact' },
  ];

  //  მენიუს გარეთ დაწკაპუნებისას დახურვა
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // გვერდის შეცვლისას მენიუს ავტომატური დახურვა
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header 
        ref={headerRef}
        className={`sticky top-0 z-50 backdrop-blur-md transform-gpu border-b transition-colors duration-300 ${
          isDark 
            ? 'bg-neutral-950/90 border-neutral-800 text-white' 
            : 'bg-white/90 border-neutral-200 text-neutral-900 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* ლოგო */}
          <Link to="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-9 h-9 border border-amber-500/80 flex items-center justify-center transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <div className="absolute w-full h-px bg-amber-500 transform -rotate-45 transition-transform duration-300 group-hover:scale-110" />
              <span className={`text-xs font-black tracking-tighter z-10 transition-colors ${
                isDark ? 'text-neutral-100 group-hover:text-amber-400' : 'text-neutral-900 group-hover:text-amber-600'
              }`}>
                K
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500" />
            </div>

            <div className="flex flex-col justify-center">
              <span className={`text-xl font-bold tracking-[0.25em] uppercase leading-tight transition-colors ${
                isDark ? 'text-neutral-100 group-hover:text-amber-400' : 'text-neutral-900 group-hover:text-amber-600'
              }`}>
                KERA
              </span>
              <span className={`text-[9px] font-medium tracking-[0.3em] uppercase ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}>
                Architecture & Design
              </span>
            </div>
          </Link>

          {/* დესკტოპ ნავიგაცია */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 relative py-1 ${
                      isActive 
                        ? 'text-amber-500 font-semibold' 
                        : isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 border-l border-neutral-800 pl-6">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-all ${
                  isDark ? 'border-neutral-800 text-amber-400 hover:bg-neutral-900' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <Globe size={14} />
                <span>{lang === 'ka' ? 'EN' : 'GE'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full border transition-all ${
                  isDark ? 'border-neutral-800 text-amber-400 hover:bg-neutral-900' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {user ? (
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500 bg-amber-500/10 text-amber-400 text-xs font-mono font-bold hover:bg-amber-500 hover:text-black transition-all"
                >
                  <User size={14} />
                  <span>{user.name ? user.name.split(' ')[0] : 'User'}</span>
                </Link>
              ) : (
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="p-2 rounded-full border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition-all"
                  title={lang === 'ka' ? 'შესვლა / რეგისტრაცია' : 'Login / Register'}
                >
                  <User size={18} />
                </button>
              )}
            </div>
          </div>

          {/* მობილური ჰედერი */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded border transition-colors ${
                isDark ? 'border-neutral-800 text-neutral-300' : 'border-neutral-300 text-neutral-700'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* მობილური ჩამოშლადი მენიუ */}
        {isOpen && (
          <div className={`md:hidden border-b px-6 py-6 space-y-6 animate-fade-in ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-xl'
          }`}>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-xs uppercase tracking-widest font-mono ${
                    location.pathname === link.path 
                      ? 'text-amber-500 font-bold' 
                      : isDark ? 'text-neutral-400 hover:text-amber-400' : 'text-neutral-600 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
              {user ? (
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded border border-amber-500 text-amber-400 text-xs font-mono font-bold"
                >
                  <User size={14} />
                  <span>{user.name ? user.name.split(' ')[0] : 'Profile'}</span>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsAuthOpen(true);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded border border-amber-500/50 text-amber-500 text-xs font-mono"
                >
                  <User size={14} />
                  <span>{lang === 'ka' ? 'შესვლა' : 'Login'}</span>
                </button>
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleLanguage}
                  className={`px-3 py-1.5 text-xs font-mono rounded border ${
                    isDark ? 'border-neutral-800 text-amber-400' : 'border-neutral-300 text-neutral-700'
                  }`}
                >
                  {lang === 'ka' ? 'EN' : 'GE'}
                </button>

                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full border ${
                    isDark ? 'border-neutral-800 text-amber-400' : 'border-neutral-300 text-neutral-700'
                  }`}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};