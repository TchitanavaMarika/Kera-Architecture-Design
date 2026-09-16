import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  return (
    <footer className={`border-t pt-16 pb-12 px-6 transition-colors duration-300 ${
      isDark ? 'bg-neutral-950 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-600'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800/60">
        
        //ლოგო და აღწერა
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 border border-amber-500 flex items-center justify-center">
              <span className="text-xs font-black text-amber-500">K</span>
            </div>
            <span className="text-lg font-bold tracking-[0.2em] uppercase">KERA</span>
          </div>
          <p className="text-xs font-light leading-relaxed">
            {lang === 'ka' 
              ? 'თანამედროვე არქიტექტურისა და ინტერიერის დიზაინის სტუდია. ვქმნით მომავლის სივრცეებს.' 
              : 'Modern architecture and interior design studio. Creating spaces for the future.'}
          </p>
        </div>

        {/* ნავიგაცია */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
            {lang === 'ka' ? 'ნავიგაცია' : 'Navigation'}
          </h4>
          <ul className="space-y-2 text-xs font-medium">
            <li><a href="/" className="hover:text-amber-500 transition-colors">{lang === 'ka' ? 'მთავარი' : 'Home'}</a></li>
            <li><a href="/portfolio" className="hover:text-amber-500 transition-colors">{lang === 'ka' ? 'პორტფოლიო' : 'Portfolio'}</a></li>
            <li><a href="/about" className="hover:text-amber-500 transition-colors">{lang === 'ka' ? 'ჩვენ შესახებ' : 'About Us'}</a></li>
            <li><a href="/contact" className="hover:text-amber-500 transition-colors">{lang === 'ka' ? 'კონტაქტი' : 'Contact'}</a></li>
          </ul>
        </div>

        {/* საკონტაქტო ინფო */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
            {lang === 'ka' ? 'საკონტაქტო' : 'Contact Info'}
          </h4>
          <ul className="space-y-2 text-xs leading-relaxed">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>
                {lang === 'ka' 
                  ? 'რუსთაველის გამზირი 12, ზუგდიდი  /  აღმაშენებლის გამზირი 188, თბილისი'
                  : '12 Rustaveli Ave, Zugdidi  /  188 Aghmashenebeli Ave, Tbilisi'}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +995 (415) 23 45 67
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              contact@kera-studio.ge
            </li>
          </ul>
        </div>

        {/* სოციალური ქსელები */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
            {lang === 'ka' ? 'სოციალური ქსელები' : 'Social Networks'}
          </h4>
          <div className="flex items-center gap-3 pt-1">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" className="p-2.5 rounded-full border border-neutral-800 hover:border-amber-500 hover:text-amber-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" className="p-2.5 rounded-full border border-neutral-800 hover:border-amber-500 hover:text-amber-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500">
        <p>© {new Date().getFullYear()} KERA Architecture Studio. {lang === 'ka' ? 'ყველა უფლება დაცულია.' : 'All rights reserved.'}</p>
        <p>Designed for Diploma Project</p>
      </div>
    </footer>
  );
};