// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Building2, ShieldCheck, Sparkles } from 'lucide-react';
import { fetchProjects } from '../data/projects';
import { useTheme, useLanguage } from '../App';

export const Home = () => {
  const [projects, setProjects] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const nextSlide = () => {
    if (projects.length === 0) return;
    setActiveSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    if (projects.length === 0) return;
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center text-amber-500 text-xs tracking-[0.2em] uppercase font-mono ${
        isDark ? 'bg-neutral-950' : 'bg-neutral-50'
      }`}>
        {lang === 'ka' ? 'იტვირთება...' : 'Loading...'}
      </div>
    );
  }

  const currentProject = projects[activeSlide];

  const texts = {
    ka: {
      viewProject: "პროექტის ნახვა",
      visionTitle: "არქიტექტურული ხედვა",
      visionHeading: "კერა — თანამედროვე არქიტექტურა და ინდივიდუალური დიზაინი",
      visionDesc: "ჩვენი სტუდია სპეციალიზებულია თანამედროვე კერძო სახლების, პრემიუმ საცხოვრებელი კომპლექსებისა და ინოვაციური საოფისე სივრცეების დაპროექტებაზე.",
      projectsCount: "პროექტი",
      modernism: "მოდერნიზმი",
      experience: "წლიანი გამოცდილება"
    },
    en: {
      viewProject: "View Project",
      visionTitle: "ARCHITECTURAL VISION",
      visionHeading: "KERA — Modern Architecture & Custom Design",
      visionDesc: "Our studio specializes in designing modern private houses, premium residential complexes, and innovative office spaces.",
      projectsCount: "Projects",
      modernism: "Modernism",
      experience: "Years Experience"
    }
  };

  const t = texts[lang];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-50 text-neutral-900'
    }`}>
      
      {/* 1. HERO SLIDER */}
      <section className="relative h-[82vh] md:h-[88vh] overflow-hidden bg-black">
        {currentProject && (
          <div className="absolute inset-0 transition-all duration-700 ease-in-out">
            <img
              src={currentProject.image}
              alt={currentProject.title[lang]}
              className="w-full h-full object-cover brightness-[0.55] transition-transform duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            {/* ტექსტური ბლოკი */}
            <div className="absolute bottom-32 md:bottom-36 left-6 right-6 md:left-16 md:right-auto md:max-w-2xl space-y-4 z-10">
              <span className="inline-block text-amber-400 uppercase tracking-[0.2em] text-[11px] font-mono bg-black/60 px-3.5 py-1.5 rounded-sm border border-amber-500/30 backdrop-blur-md">
                {currentProject.location[lang]}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                {currentProject.title[lang]}
              </h1>
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base line-clamp-2 max-w-xl font-light leading-relaxed">
                {currentProject.description[lang]}
              </p>
              <div className="pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3.5 text-xs uppercase tracking-[0.15em] transition-all rounded-sm shadow-xl shadow-amber-500/10 hover:gap-4"
                >
                  {t.viewProject} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 🎛️ მინიმალისტური არქიტექტურული სლაიდ-ნავიგაცია */}
        <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between gap-6 max-w-7xl mx-auto">
          
          <div className="hidden md:flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3.5 rounded-sm border border-white/10">
            {projects.map((proj, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveSlide(idx)}
                  className="group flex flex-col gap-1.5 text-left transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono tracking-wider ${
                      isActive ? 'text-amber-400 font-bold' : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-xs font-medium tracking-wide transition-colors truncate max-w-[120px] ${
                      isActive ? 'text-white font-semibold' : 'text-neutral-400 group-hover:text-neutral-200'
                    }`}>
                      {proj.title[lang]}
                    </span>
                  </div>

                  <div className={`h-[2px] transition-all duration-300 ${
                    isActive ? 'w-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'w-8 bg-neutral-700 group-hover:bg-neutral-500'
                  }`} />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="text-xs font-mono tracking-widest text-neutral-400 mr-2 bg-black/50 px-3 py-1.5 rounded-sm border border-white/10">
              <span className="text-amber-400 font-bold">0{activeSlide + 1}</span> / 0{projects.length}
            </div>
            <button
              onClick={prevSlide}
              className="p-3 bg-black/60 hover:bg-amber-500 hover:text-black border border-white/20 text-white transition-all rounded-sm backdrop-blur-md"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-black/60 hover:bg-amber-500 hover:text-black border border-white/20 text-white transition-all rounded-sm backdrop-blur-md"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT FEATURE SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
            {t.visionTitle}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {t.visionHeading}
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {t.visionDesc}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-neutral-800">
            <div>
              <Building2 className="text-amber-500 mb-1" size={24} />
              <div className="text-xl font-bold">50+</div>
              <div className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.projectsCount}</div>
            </div>
            <div>
              <Sparkles className="text-amber-500 mb-1" size={24} />
              <div className="text-xl font-bold">100%</div>
              <div className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.modernism}</div>
            </div>
            <div>
              <ShieldCheck className="text-amber-500 mb-1" size={24} />
              <div className="text-xl font-bold">10+</div>
              <div className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.experience}</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
            alt="KERA Architecture Studio"
            className="rounded-lg shadow-2xl border border-neutral-800 object-cover w-full h-[360px] sm:h-[440px]"
          />
        </div>
      </section>

    </div>
  );
};