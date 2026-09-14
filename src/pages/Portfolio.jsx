// src/pages/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../data/projects';
import { useTheme, useLanguage } from '../App';
import { Layers, X, CheckCircle2 } from 'lucide-react';

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const texts = {
    ka: {
      subtitle: "პროექტების არქივი",
      title: "არქიტექტურა & ინტერიერის დიზაინი",
      desc: "თითოეული პროექტი არის ესთეტიკის, ფუნქციონალურობისა და უმაღლესი ხარისხის მასალების ჰარმონიული სინთეზი.",
      all: "ყველა პროექტი",
      interior: "ინტერიერის დიზაინი",
      architecture: "არქიტექტურა",
      landscape: "ლანდშაფტი",
      materialsTitle: "გამოყენებული მასალები & კონცეფცია:"
    },
    en: {
      subtitle: "PROJECT ARCHIVE",
      title: "Architecture & Interior Design",
      desc: "Each project is a harmonious synthesis of aesthetics, functionality, and highest-quality materials.",
      all: "All Projects",
      interior: "Interior Design",
      architecture: "Architecture",
      landscape: "Landscape",
      materialsTitle: "Materials & Concept Used:"
    }
  };

  const t = texts[lang];

  const categoryLabels = {
    interior: lang === 'ka' ? 'ინტერიერი' : 'Interior',
    architecture: lang === 'ka' ? 'არქიტექტურა' : 'Architecture',
    landscape: lang === 'ka' ? 'ლანდშაფტი' : 'Landscape'
  };

  return (
    <div className={`min-h-screen py-16 px-6 max-w-7xl mx-auto transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-neutral-900'
    }`}>
      
      {/* სათაური */}
      <div className="space-y-4 mb-12 text-center md:text-left">
        <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em]">
          {t.subtitle}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          {t.title}
        </h1>
        <p className={`text-sm md:text-base max-w-2xl font-light leading-relaxed ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          {t.desc}
        </p>
      </div>

      {/* ფილტრები */}
      <div className="flex flex-wrap gap-3 mb-12 border-b border-neutral-800 pb-6">
        {[
          { id: 'all', label: t.all },
          { id: 'interior', label: t.interior },
          { id: 'architecture', label: t.architecture },
          { id: 'landscape', label: t.landscape }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all rounded-sm ${
              filter === tab.id
                ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                : isDark 
                  ? 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800' 
                  : 'bg-neutral-200 text-neutral-700 hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* პროექტების ბადე */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`group cursor-pointer rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 ${
              isDark 
                ? 'bg-neutral-900/60 border-neutral-800 hover:border-amber-500/50' 
                : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-md'
            }`}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title?.[lang] || ''}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest uppercase bg-black/75 backdrop-blur-md text-amber-400 px-3 py-1 rounded-sm border border-amber-500/30 shadow-lg">
                {categoryLabels[project.category] || project.category}
              </span>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors">
                {project.title?.[lang] || ''}
              </h3>
              <p className={`text-xs line-clamp-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {project.description?.[lang] || ''}
              </p>
              
              <div className="pt-4 border-t border-neutral-800/50 flex justify-between items-center text-[11px] font-mono text-neutral-500">
                <span>{project.location?.[lang] || ''}</span>
                <span>{project.area}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className={`relative w-full max-w-3xl rounded-lg overflow-hidden border shadow-2xl max-h-[90vh] overflow-y-auto ${
            isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-neutral-900'
          }`}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white hover:bg-amber-500 hover:text-black rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title?.[lang] || ''}
              className="w-full h-72 object-cover"
            />

            <div className="p-8 space-y-6">
              <div>
                <span className="text-amber-500 font-mono text-xs uppercase tracking-widest">
                  {selectedProject.location?.[lang] || ''} • {selectedProject.year}
                </span>
                <h2 className="text-3xl font-black mt-1">{selectedProject.title?.[lang] || ''}</h2>
              </div>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {selectedProject.details?.[lang] || ''}
              </p>

              <div className="space-y-3 pt-4 border-t border-neutral-800">
                <h4 className="text-xs font-mono uppercase text-amber-500 tracking-wider flex items-center gap-2">
                  <Layers size={14} /> {t.materialsTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedProject.materials?.[lang] || []).map((mat, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm border ${
                        isDark 
                          ? 'bg-neutral-800 border-neutral-700 text-neutral-300' 
                          : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                      }`}
                    >
                      <CheckCircle2 size={12} className="text-amber-500" /> {mat}
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