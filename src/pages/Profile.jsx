import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { User, LogOut, Heart, MapPin, ArrowUpRight } from 'lucide-react';

export const Profile = () => {
  const { user, favorites, logoutUser, toggleFavorite } = useAuth();
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const favoriteProjects = projectsData.filter(p => favorites.includes(p.id));

  return (
    <div className={`min-h-screen py-16 px-6 max-w-7xl mx-auto transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-neutral-900'
    }`}>
      
      {/* იუზერის პროფილის ბარათი */}
      <div className={`p-8 sm:p-10 rounded-lg border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16 ${
        isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
      }`}>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-500 font-bold text-2xl">
            {user.name ? user.name[0].toUpperCase() : 'U'}
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-black">{user.name}</h1>
            <p className="text-xs font-mono text-neutral-400">{user.email}</p>
            <span className="inline-block text-[10px] font-mono bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded border border-amber-500/30">
              {lang === 'ka' ? 'ავტორიზებული მომხმარებელი' : 'Authorized User'}
            </span>
          </div>
        </div>

        <button
          onClick={logoutUser}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-red-500/40 text-red-500 hover:bg-red-500 hover:text-white transition-all text-xs font-mono uppercase tracking-wider rounded-sm"
        >
          <LogOut size={16} /> {lang === 'ka' ? 'გამოსვლა' : 'Logout'}
        </button>
      </div>

      {/* რჩეული პროექტების სექცია */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Heart size={22} className="text-amber-500 fill-amber-500" />
          <h2 className="text-2xl font-black uppercase tracking-wide">
            {lang === 'ka' ? 'ჩემი რჩეული პროექტები' : 'My Favorite Projects'} ({favoriteProjects.length})
          </h2>
        </div>

        {favoriteProjects.length === 0 ? (
          <div className={`p-12 text-center rounded-lg border font-mono text-xs text-neutral-500 ${
            isDark ? 'border-neutral-800 bg-neutral-900/20' : 'border-neutral-200 bg-neutral-50'
          }`}>
            <p>{lang === 'ka' ? 'ჯერ არცერთი პროექტი არ გაქვთ დამატებული რჩეულებში.' : 'No favorite projects added yet.'}</p>
            <Link to="/portfolio" className="inline-block mt-4 text-amber-500 hover:underline font-bold">
              {lang === 'ka' ? 'პორტფოლიოს დათვალიერება →' : 'Browse Portfolio →'}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteProjects.map((project) => (
              <div
                key={project.id}
                className="group relative h-[420px] rounded-lg overflow-hidden border border-neutral-800/60 shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title?.[lang] || ''}
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                <button
                  onClick={() => toggleFavorite(project.id)}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 text-amber-500 rounded-full backdrop-blur-md border border-amber-500/30 hover:scale-110 transition-transform"
                >
                  <Heart size={16} className="fill-amber-500" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2">
                  <span className="text-neutral-400 text-xs font-mono block">
                    {project.year} • {project.location?.[lang] || ''}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {project.title?.[lang] || ''}
                  </h3>
                  <p className="text-neutral-300 text-xs line-clamp-2">
                    {project.description?.[lang] || ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};