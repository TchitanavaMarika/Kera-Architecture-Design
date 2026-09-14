// src/App.jsx
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// კონტექსტები
export const ThemeContext = createContext();
export const LanguageContext = createContext();

export const useTheme = () => useContext(ThemeContext);
export const useLanguage = () => useContext(LanguageContext);

export const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('ka');

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleLanguage = () => setLang((prev) => (prev === 'ka' ? 'en' : 'ka'));

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, toggleLanguage }}>
        <Router>
          <div className={`min-h-screen font-sans antialiased flex flex-col justify-between transition-colors duration-300 ${
            isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-50 text-neutral-900'
          }`}>
            <div>
              <Navbar />
              <main>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
              </main>
            </div>
            <footer className={`border-t py-8 text-center text-xs transition-colors duration-300 ${
              isDark ? 'bg-neutral-950 border-neutral-800 text-neutral-500' : 'bg-white border-neutral-200 text-neutral-600'
            }`}>
              © {new Date().getFullYear()} KERA Architecture Studio. {lang === 'ka' ? 'ყველა უფლება დაცულია.' : 'All rights reserved.'}
            </footer>
          </div>
        </Router>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;