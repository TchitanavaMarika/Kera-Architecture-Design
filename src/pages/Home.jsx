// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Building2, ShieldCheck, Sparkles, Compass, Lightbulb, Layers, Award } from 'lucide-react';
import { fetchProjects } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const [projects, setProjects] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data || []);
      setLoading(false);
    });
  }, []);

  const nextSlide = () => {
    if (!projects.length) return;
    setActiveSlide((prev) => (prev + 1) % Math.min(projects.length, 4));
  };

  const prevSlide = () => {
    if (!projects.length) return;
    setActiveSlide((prev) => (prev - 1 + Math.min(projects.length, 4)) % Math.min(projects.length, 4));
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

  const currentProject = projects[activeSlide] || projects[0];
  const featuredProjects = projects.slice(0, 3);

  const texts = {
    ka: {
      viewProject: "პროექტის ნახვა",
      welcomeTitle: "მოგესალმებით KERA სტუდიაში",
      welcomeHeading: "ინოვაციური არქიტექტურა & ექსკლუზიური გარემო",
      welcomeDesc: "ჩვენ ვქმნით მონუმენტურ და მინიმალისტურ არქიტექტურას. თითოეული პროექტი არის სივრცის, ბუნებრივი განათებისა და მაღალი ხარისხის ნატურალური მასალების ჰარმონიული სინთეზი.",
      featuredTitle: "რჩეული პროექტები",
      featuredSubtitle: "რჩეული არქიტექტურა",
      aboutBannerTitle: "კონცეფციიდან რეალიზაციამდე",
      aboutBannerHeading: "ჩვენი გამოცდილება ემსახურება თქვენს ხედვას",
      aboutBannerDesc: "10 წელზე მეტია KERA ქმნის საცხოვრებელ და კომერციულ ობიექტებს საქართველოში. ჩვენი მიდგომა ეფუძნება გეომეტრიულ სიზუსტესა და ინდივიდუალურ არქიტექტურულ ხასიათს.",
      workflowTitle: "სამუშაო პროცესი",
      workflowHeading: "პროექტის შექმნის ეტაპები",
      step1Title: "1. არქიტექტურული კონცეფცია",
      step1Desc: "ტერიტორიისა და კლიმატის ანალიზი, სივრცითი დაგეგმარება და პირველადი ესკიზები.",
      step2Title: "2. 3D ვიზუალიზაცია & პროექტირება",
      step2Desc: "ფოტო-რეალისტური ვიზუალიზაცია, კონსტრუქციული ნახაზები და მასალების შერჩევა.",
      step3Title: "3. საავტორო ზედამხედველობა",
      step3Desc: "მშენებლობის სრული კონტროლი არქიტექტორების მიერ პროექტის იდეალურ დასრულებამდე.",
      statsTitle: "მაჩვენებლები",
      projectsCount: "წარმატებული პროექტი",
      modernism: "მოდერნისტული დიზაინი",
      experience: "წლიანი გამოცდილება",
      awards: "საერთაშორისო აღიარება"
    },
    en: {
      viewProject: "View Project",
      welcomeTitle: "WELCOME TO KERA STUDIO",
      welcomeHeading: "Innovative Architecture & Exclusive Environments",
      welcomeDesc: "We craft monumental and minimalist architecture. Each project represents a harmonious synthesis of space, natural lighting, and high-quality materials.",
      featuredTitle: "Featured Projects",
      featuredSubtitle: "FEATURED ARCHITECTURE",
      aboutBannerTitle: "FROM CONCEPT TO REALIZATION",
      aboutBannerHeading: "Our Expertise Serves Your Vision",
      aboutBannerDesc: "For over a decade, KERA has been creating residential and commercial properties. Our approach is rooted in geometric precision and unique architectural identity.",
      workflowTitle: "OUR WORKFLOW",
      workflowHeading: "Stages of Project Development",
      step1Title: "1. Architectural Concept",
      step1Desc: "Site analysis, spatial planning, and initial conceptual sketches.",
      step2Title: "2. 3D Visualization & Drafting",
      step2Desc: "Photorealistic visualization, structural engineering drawings, and material selection.",
      step3Title: "3. Architectural Supervision",
      step3Desc: "Complete construction oversight by architects until perfect project completion.",
      statsTitle: "KEY METRICS",
      projectsCount: "Successful Projects",
      modernism: "Modernist Design",
      experience: "Years Experience",
      awards: "International Recognition"
    }
  };

  const t = texts[lang] || texts.ka;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-50 text-neutral-900'
    }`}>
      
      {/* 1. მთავარი სლაიდერი */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-black">
        {currentProject && (
          <div className="absolute inset-0 transition-all duration-700 ease-in-out">
            {/* Home.jsx - მთავარი სლაიდი */}
<img
  src={currentProject.image}
  alt={currentProject.title?.[lang] || ''}
  className="w-full h-full object-cover brightness-[0.55] transition-transform duration-700 will-change-transform transform-gpu"
/>
            <div className="absolute inset-0 bg-gradient-to- from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-32 md:bottom-36 left-6 right-6 md:left-16 md:right-auto md:max-w-2xl space-y-4 z-10">
              <span className="inline-block text-amber-400 uppercase tracking-[0.2em] text-[11px] font-mono bg-black/60 px-3.5 py-1.5 rounded-sm border border-amber-500/30 backdrop-blur-md">
                {currentProject.location?.[lang] || ''}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                {currentProject.title?.[lang] || ''}
              </h1>
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base line-clamp-2 max-w-xl font-light leading-relaxed">
                {currentProject.description?.[lang] || ''}
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

        {/* სლაიდების ინდიკატორები */}
        <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between gap-6 max-w-7xl mx-auto">
          <div className="hidden md:flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3.5 rounded-sm border border-white/10">
            {projects.slice(0, 4).map((proj, idx) => {
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
                      {proj.title?.[lang] || ''}
                    </span>
                  </div>
                  <div className={`h-0.5 transition-all duration-300 ${
                    isActive ? 'w-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'w-8 bg-neutral-700 group-hover:bg-neutral-500'
                  }`} />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="text-xs font-mono tracking-widest text-neutral-400 mr-2 bg-black/50 px-3 py-1.5 rounded-sm border border-white/10">
              <span className="text-amber-400 font-bold">0{activeSlide + 1}</span> / 04
            </div>
            <button
              onClick={prevSlide}
              className="p-3 bg-black/60 hover:bg-amber-500 hover:text-black border border-white/20 text-white transition-all rounded-sm backdrop-blur-md"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-black/60 hover:bg-amber-500 hover:text-black border border-white/20 text-white transition-all rounded-sm backdrop-blur-md"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. მთავარი ბანერის ტექსტი */}
      <section className="py-28 px-6 max-w-7xl mx-auto text-center space-y-6">
        <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.25em]">
          {t.welcomeTitle}
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
          {t.welcomeHeading}
        </h2>
        <p className={`text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          {t.welcomeDesc}
        </p>
      </section>

      {/* 3. დიდი ბანერი */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-xl overflow-hidden border border-neutral-800 shadow-2xl min-h-[460px] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Studio Banner"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
          />
          <div className="relative z-10 p-8 sm:p-16 max-w-2xl space-y-6">
            <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">{t.aboutBannerTitle}</span>
            <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              {t.aboutBannerHeading}
            </h3>
            <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed">
              {t.aboutBannerDesc}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors pt-2"
            >
              {lang === 'ka' ? 'ვრცლად ჩვენს შესახებ' : 'More About Us'} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ბარათების ბადე */}
      <section className={`py-28 px-6 border-t mt-12 ${
        isDark ? 'border-neutral-900 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-100/50'
      }`}>
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em]">{t.featuredSubtitle}</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">{t.featuredTitle}</h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors"
            >
              {lang === 'ka' ? 'ყველა პროექტის ნახვა' : 'View All Projects'} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                className={`group rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-2 ${
                  isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title?.[lang] || ''}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest uppercase bg-black/75 backdrop-blur-md text-amber-400 px-3 py-1 rounded-sm border border-amber-500/30">
                    {proj.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors">
                    {proj.title?.[lang] || ''}
                  </h3>
                  <p className={`text-xs line-clamp-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {proj.description?.[lang] || ''}
                  </p>
                  <div className="pt-4 border-t border-neutral-800/40 flex justify-between items-center text-[11px] font-mono text-neutral-500">
                    <span>{proj.location?.[lang] || ''}</span>
                    <span>{proj.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.სამუშაო პროცესი */}
      <section className="py-28 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em]">{t.workflowTitle}</span>
          <h2 className="text-3xl sm:text-4xl font-bold">{t.workflowHeading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-8 rounded-lg border space-y-4 ${isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
            <Compass className="text-amber-500" size={32} />
            <h3 className="text-xl font-bold">{t.step1Title}</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{t.step1Desc}</p>
          </div>
          <div className={`p-8 rounded-lg border space-y-4 ${isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
            <Lightbulb className="text-amber-500" size={32} />
            <h3 className="text-xl font-bold">{t.step2Title}</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{t.step2Desc}</p>
          </div>
          <div className={`p-8 rounded-lg border space-y-4 ${isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
            <Layers className="text-amber-500" size={32} />
            <h3 className="text-xl font-bold">{t.step3Title}</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{t.step3Desc}</p>
          </div>
        </div>
      </section>

      {/* 6. STATS & NUMBERS SECTION */}
      <section className={`py-24 px-6 border-t ${isDark ? 'border-neutral-900 bg-neutral-900/20' : 'border-neutral-200 bg-neutral-100/30'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <Building2 className="text-amber-500 mx-auto mb-2" size={30} />
            <div className="text-3xl sm:text-4xl font-black">50+</div>
            <div className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.projectsCount}</div>
          </div>
          <div className="space-y-2">
            <Sparkles className="text-amber-500 mx-auto mb-2" size={30} />
            <div className="text-3xl sm:text-4xl font-black">100%</div>
            <div className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.modernism}</div>
          </div>
          <div className="space-y-2">
            <ShieldCheck className="text-amber-500 mx-auto mb-2" size={30} />
            <div className="text-3xl sm:text-4xl font-black">10+</div>
            <div className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.experience}</div>
          </div>
          <div className="space-y-2">
            <Award className="text-amber-500 mx-auto mb-2" size={30} />
            <div className="text-3xl sm:text-4xl font-black">12</div>
            <div className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.awards}</div>
          </div>
        </div>
      </section>

    </div>
  );
};