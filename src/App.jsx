import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { useTheme } from './context/ThemeContext';

export const App = () => {
  const { isDark } = useTheme();

  return (
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
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;