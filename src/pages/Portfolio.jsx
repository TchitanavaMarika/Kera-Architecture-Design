// src/pages/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchProjects } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { Layers, X, CheckCircle2, Calendar, MapPin, Heart, Maximize } from 'lucide-react';

export const Portfolio = () => {
  // სტეიტები პროექტებისა და არჩეული მოდალისთვის
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // თემის, ენისა და ავტორიზაციის კონტექსტები
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const { favorites, toggleFavorite } = useAuth();
  const location = useLocation();

  // გვერდის გახსნისას ავტომატურად თავში ასვლა
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // პროექტების ჩატვირთვა და URL-იდან ID-ის წაკითხვა
  useEffect(() => {
    fetchProjects().then((data) => {
      const allProjects = data || [];
      setProjects(allProjects);

      const params = new URLSearchParams(location.search);
      const projectId = params.get('id');

      if (projectId) {
        const found = allProjects.find((p) => String(p.id) === String(projectId));
        if (found) {
          setSelectedProject(found);
        }
      }
    });
  }, [location.search]);

  // პროექტების ფილტრაცია კატეგორიის მიხედვით
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // ენის ტექსტები
  const texts = {
    ka: {
      subtitle: "არქიტექტურული პორტფოლიო",
      title: "ჩვენი პროექტები",
      desc: "თითოეული პროექტი არის ინდივიდუალური არქიტექტურული ხასიათის, ფუნქციონალურობისა და უმაღლესი ხარისხის მასალების ჰარმონიული სინთეზი.",
      all: "ყველა პროექტი",
      interior: "ინტერიერი",
      architecture: "არქიტექტურა",
      landscape: "ლანდშაფტი",
      materialsTitle: "გამოყენებული მასალები & კონცეფცია:",
      viewDetails: "დეტალების ნახვა",
      locationLabel: "მდებარეობა",
      yearLabel: "თარიღი",
      areaLabel: "ფართობი"
    },
    en: {
      subtitle: "ARCHITECTURAL PORTFOLIO",
      title: "Our Projects",
      desc: "Each project represents a unique architectural identity, combining functionality with premium material integration.",
      all: "All Projects",
      interior: "Interior",
      architecture: "Architecture",
      landscape: "Landscape",
      materialsTitle: "Materials & Concept Used:",
      viewDetails: "View Details",
      locationLabel: "Location",
      yearLabel: "Year",
      areaLabel: "Area"
    }
  };

  const t = texts[lang] || texts.ka;

  const categoryLabels = {
    interior: lang === 'ka' ? 'ინტერიერის დიზაინი' : 'Interior Design',
    architecture: lang === 'ka' ? 'არქიტექტურა' : 'Architecture',
    landscape: lang === 'ka' ? 'ლანდშაფტის დიზაინი' : 'Landscape Design'
  };

  return (
    <div className={`min-h-screen py-20 px-6 max-w-7xl mx-auto transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-neutral-900'
    }`}>
      
      {/* 1. ჰედერი */}
      <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
        <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.25em]">
          {t.subtitle}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          {t.title}
        </h1>
        <p className={`text-sm md:text-base font-light leading-relaxed ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          {t.desc}
        </p>
      </div>

      {/* 2. კატეგორიები */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {[
          { id: 'all', label: t.all },
          { id: 'architecture', label: t.architecture },
          { id: 'interior', label: t.interior },
          { id: 'landscape', label: t.landscape }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-6 py-3 text-xs font-mono uppercase tracking-widest transition-all rounded-sm border ${
              filter === tab.id
                ? 'bg-amber-500 text-black font-bold border-amber-500 shadow-lg shadow-amber-500/20'
                : isDark 
                  ? 'bg-neutral-900/80 text-neutral-400 hover:text-white border-neutral-800 hover:border-neutral-700' 
                  : 'bg-neutral-100 text-neutral-600 hover:text-black border-neutral-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. პორტფოლიოს გრიდი */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const isFav = favorites.includes(project.id);
          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[480px] sm:h-[520px] rounded-lg overflow-hidden border border-neutral-800/60 shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title?.[lang] || ''}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.75] group-hover:brightness-[0.45]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md text-amber-400 px-3 py-1.5 rounded-sm border border-amber-500/30">
                  {categoryLabels[project.category] || project.category}
                </span>
              </div>

              {/* რჩეულების ღილაკი */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(project.id);
                }}
                className={`absolute top-6 right-6 z-20 p-2.5 rounded-full backdrop-blur-md border transition-all ${
                  isFav 
                    ? 'bg-amber-500 border-amber-500 text-black' 
                    : 'bg-black/60 border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black'
                }`}
                title="Favorite"
              >
                <Heart size={16} className={isFav ? 'fill-black' : ''} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 space-y-3">
                <span className="text-neutral-400 text-xs font-mono tracking-wider block">
                  {project.year} • {project.location?.[lang] || ''}
                </span>

                <h3 className="text-2xl font-black text-white leading-tight group-hover:text-amber-400 transition-colors">
                  {project.title?.[lang] || ''}
                </h3>

                <p className="text-neutral-300 text-xs font-light line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description?.[lang] || ''}
                </p>

                <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-amber-500 font-semibold border-t border-white/10 mt-2">
                  <span>{project.area}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {t.viewDetails} &rarr;
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. ქარდები */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-fade-in">
          <div className={`relative w-full max-w-5xl rounded-xl overflow-hidden border shadow-2xl max-h-[88vh] grid grid-cols-1 lg:grid-cols-12 ${
            isDark ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}>
            
            {/* დახურვის ღილაკი */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 p-2.5 bg-black/70 text-white hover:bg-amber-500 hover:text-black rounded-full transition-all backdrop-blur-md border border-white/20"
            >
              <X size={18} />
            </button>

            {/* 1. მარცხენა სვეტი - ფოტო (7 სვეტი 12-დან) */}
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-full bg-neutral-900 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title?.[lang] || ''}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to- from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
              
              <span className="absolute bottom-4 left-4 z-10 text-[10px] font-mono tracking-widest uppercase bg-black/80 text-amber-400 px-3 py-1.5 rounded-sm border border-amber-500/30 backdrop-blur-md">
                {categoryLabels[selectedProject.category] || selectedProject.category}
              </span>
            </div>

            {/* 2. მარჯვენა სვეტი - ტექსტი & დეტალები (5 სვეტი 12-დან) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[500px] lg:max-h-full space-y-6">
              
              <div className="space-y-6">
                {/* სათაური */}
                <div className="space-y-1.5">
                  <span className="text-amber-500 text-[10px] font-mono uppercase tracking-[0.25em] font-bold">
                    KERA ARCHITECTURE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                    {selectedProject.title?.[lang] || ''}
                  </h2>
                </div>

                {/* ქარდის პარამეტრები */}
                <div className="space-y-2 py-3 border-y border-neutral-800/80">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400 font-medium flex items-center gap-1.5">
                      <MapPin size={14} className="text-amber-500 shrink-0" /> {t.locationLabel}:
                    </span>
                    <span className="font-bold text-white tracking-wide">
                      {selectedProject.location?.[lang] || ''}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400 font-medium flex items-center gap-1.5">
                      <Calendar size={14} className="text-amber-500 shrink-0" /> {t.yearLabel}:
                    </span>
                    <span className="font-bold text-amber-400">
                      {selectedProject.year}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400 font-medium flex items-center gap-1.5">
                      <Maximize size={14} className="text-amber-500 shrink-0" /> {t.areaLabel}:
                    </span>
                    <span className="font-bold text-amber-400">
                      {selectedProject.area}
                    </span>
                  </div>
                </div>

                {/* აღწერა */}
                <div className="space-y-2">
                  <p className={`text-xs sm:text-sm leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {selectedProject.details?.[lang] || selectedProject.description?.[lang] || ''}
                  </p>
                </div>

                {/* გამოყენებული მასალები */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-[11px] font-mono uppercase text-amber-500 tracking-wider flex items-center gap-1.5 font-bold">
                    <Layers size={14} /> {t.materialsTitle}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedProject.materials?.[lang] || []).map((mat, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-sm border ${
                          isDark 
                            ? 'bg-neutral-900 border-neutral-800 text-neutral-300' 
                            : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                        }`}
                      >
                        <CheckCircle2 size={11} className="text-amber-500" /> {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* რჩეულებში დამატების ღილაკი */}
              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => toggleFavorite(selectedProject.id)}
                  className={`w-full py-3 px-5 rounded-sm text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all ${
                    favorites.includes(selectedProject.id)
                      ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                      : 'border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-black'
                  }`}
                >
                  <Heart size={15} className={favorites.includes(selectedProject.id) ? 'fill-black' : ''} />
                  {favorites.includes(selectedProject.id)
                    ? (lang === 'ka' ? 'რჩეულებშია' : 'Saved in Favorites')
                    : (lang === 'ka' ? 'რჩეულებში დამატება' : 'Add to Favorites')}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;