import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { Layers, X, CheckCircle2, Calendar, MapPin, ArrowUpRight, Heart } from 'lucide-react';

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const { favorites, toggleFavorite, user } = useAuth();

  useEffect(() => {
    fetchProjects().then((data) => setProjects(data || []));
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
      
      {/* სათაური */}
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

      {/* კატეგორიები და ფილტრი */}
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

      {/* პორტფოლიო გრიდი */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const isFav = favorites.includes(project.id);
          return (
            <div
              key={project.id}
              className="group relative h-120 sm:h-130 rounded-lg overflow-hidden border border-neutral-800/60 shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title?.[lang] || ''}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.75] group-hover:brightness-[0.45]"
              />

              <div className="absolute inset-0 bg-gradient-to- from-black via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md text-amber-400 px-3 py-1.5 rounded-sm border border-amber-500/30">
                  {categoryLabels[project.category] || project.category}
                </span>
              </div>

              {/* რჩეულებში დამატება */}
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

              <div 
                onClick={() => setSelectedProject(project)}
                className="absolute bottom-0 left-0 right-0 p-8 z-10 space-y-3 cursor-pointer"
              >
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

      {/* მოდალის დეტალები */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className={`relative w-full max-w-4xl rounded-lg overflow-hidden border shadow-2xl max-h-[92vh] overflow-y-auto ${
            isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-neutral-900'
          }`}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 bg-black/70 text-white hover:bg-amber-500 hover:text-black rounded-full transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>

            <div className="relative h-80 sm:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title?.[lang] || ''}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90" />
            </div>

            <div className="p-8 sm:p-10 space-y-8 -mt-12 relative z-10">
              <div className="space-y-2">
                <span className="inline-block text-amber-400 font-mono text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30">
                  {categoryLabels[selectedProject.category] || selectedProject.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black">{selectedProject.title?.[lang] || ''}</h2>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-neutral-800/80 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-neutral-500 block">{t.locationLabel}</span>
                  <span className="font-semibold flex items-center gap-1.5"><MapPin size={14} className="text-amber-500" /> {selectedProject.location?.[lang] || ''}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500 block">{t.yearLabel}</span>
                  <span className="font-semibold flex items-center gap-1.5"><Calendar size={14} className="text-amber-500" /> {selectedProject.year}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500 block">{t.areaLabel}</span>
                  <span className="font-semibold">{selectedProject.area}</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className={`text-sm sm:text-base leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {selectedProject.details?.[lang] || selectedProject.description?.[lang] || ''}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-800">
                <h4 className="text-xs font-mono uppercase text-amber-500 tracking-wider flex items-center gap-2">
                  <Layers size={16} /> {t.materialsTitle}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {(selectedProject.materials?.[lang] || []).map((mat, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-2 text-xs px-3.5 py-2 rounded-sm border ${
                        isDark 
                          ? 'bg-neutral-800/80 border-neutral-700 text-neutral-200' 
                          : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                      }`}
                    >
                      <CheckCircle2 size={13} className="text-amber-500" /> {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;