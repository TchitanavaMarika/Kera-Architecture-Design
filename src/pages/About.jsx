

import { useTheme } from '../context/ThemeContext'; 
 import { useLanguage } from '../context/LanguageContext';
import { Building2, Compass, Home as HomeIcon, Layers, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  const texts = {
    ka: {
      subtitle: "ჩვენ შესახებ",
      heroTitle: "ვქმნით მომავლის საცხოვრებელ და სამუშაო სივრცეებს",
      heroDesc1: "KERA არის თანამედროვე არქიტექტურისა და ინტერიერის დიზაინის სტუდია. ჩვენი საქმიანობის მთავარი სფეროა ექსკლუზიური კერძო სახლების, მოდერნისტული ვილების, პრემიუმ საცხოვრებელი ბინებისა და ფუნქციური ოფისების დაპროექტება.",
      heroDesc2: "ჩვენი მიზანია შევქმნით არქიტექტურა, რომელიც იდეალურად ერწყმის გარემოს, ინარჩუნებს სიმარტივესა და ელეგანტურობას, და ამავდროულად უზრუნველყოფს მაქსიმალურ კომფორტს.",
      qualityTitle: "პრემიუმ ხარისხი",
      qualityDesc: "საერთაშორისო სტანდარტების პროექტები",
      directionsTitle: "საქმიანობის მიმართულებები",
      directionsHeading: "ჩვენი არქიტექტურული მიმართებები",
      
      dir1Title: "1. არქიტექტურული პროექტირება",
      dir1Desc: "ინდივიდუალური საცხოვრებელი სახლების, ვილებისა და მრავალფუნქციური კომპლექსების დაპროექტება. მოიცავს გეომეტრიულ სიზუსტეს, სივრცის მაქსიმალურ ათვისებასა და ბუნებრივი განათების ინტეგრაციას.",
      dir1Item1: "კონცეპტუალური ესკიზები & 3D ვიზუალიზაცია",
      dir1Item2: "სრული კონსტრუქციული და ტექნიკური ნახაზები",
      dir1Item3: "ენერგოეფექტური და მდგრადი არქიტექტურა",

      dir2Title: "2. ინტერიერის დიზაინი",
      dir2Desc: "მინიმალისტური და ექსკლუზიური ინტერიერის შექმნა საცხოვრებელი და კომერციული სივრცეებისთვის. განსაკუთრებული ყურადღება ეთმობა მასალების ტექსტურას, ავეჯის დიზაინსა და განათების სცენარებს.",
      dir2Item1: "ინდივიდუალური ავეჯის & დეტალების დაპროექტება",
      dir2Item2: "ნატურალური მასალების (ხე, ქვა, ლითონი) სინთეზი",
      dir2Item3: "სინათლისა და ფერების ჰარმონიული ბალანსი",

      dir3Title: "3. ლანდშაფტის დიზაინი",
      dir3Desc: "გარე სივრცეებისა და ეზოების დაგეგმარება, რომელიც ჰარმონიულად აკავშირებს შენობის არქიტექტურას გარემომცველ ბუნებასთან.",
      dir3Item1: "რელიეფის & მცენარეულობის ზონირება",
      dir3Item2: "გარე განათებისა და აუზების დაპროექტება",
      dir3Item3: "რელაქსაციისა და დასვენების ექსკლუზიური ზონები",

      heritageTitle: "ჩვენი პრინციპები",
      heritageHeading: "რით გამოვირჩევით",
      heritageDesc: "თითოეული პროექტი KERA-სთვის არის ხელოვნებისა და ინჟინერიის სინთეზი. ჩვენ არ ვქმნით შაბლონურ სივრცეებს — თითოეული დეტალი იქმნება დამკვეთის ინდივიდუალური საჭიროებებისა და ექსკლუზიური გემოვნების გათვალისწინებით."
    },
    en: {
      subtitle: "ABOUT US",
      heroTitle: "Creating Future Living & Working Spaces",
      heroDesc1: "KERA is a modern architecture and interior design studio. Our core focus spans exclusive private residences, modernist villas, premium apartments, and highly functional office environments.",
      heroDesc2: "Our objective is to architect environments that seamlessly blend with nature, maintaining simplicity and elegance while offering uncompromising comfort.",
      qualityTitle: "Premium Quality",
      qualityDesc: "International Standard Projects",
      directionsTitle: "OUR SERVICES",
      directionsHeading: "Architectural Directions & Specializations",

      dir1Title: "1. Architectural Design",
      dir1Desc: "Designing custom residences, villas, and multifunctional complexes. Focused on geometric precision, spatial optimization, and seamless natural light integration.",
      dir1Item1: "Conceptual Sketches & 3D Visualization",
      dir1Item2: "Complete Structural & Technical Working Drawings",
      dir1Item3: "Energy-Efficient & Sustainable Architecture",

      dir2Title: "2. Interior Design",
      dir2Desc: "Crafting minimalist and luxury interior environments for personal and commercial spaces. Special attention is given to material textures, custom millwork, and lighting design.",
      dir2Item1: "Custom Furniture & Millwork Detailing",
      dir2Item2: "Synthesis of Natural Materials (Wood, Stone, Metal)",
      dir2Item3: "Harmonious Balance of Lighting & Tonal Palettes",

      dir3Title: "3. Landscape Design",
      dir3Desc: "Outdoor and site planning that effortlessly connects building architecture with the surrounding natural topography.",
      dir3Item1: "Terrain Topography & Vegetation Zoning",
      dir3Item2: "Outdoor Architectural Lighting & Pool Design",
      dir3Item3: "Exclusive Outdoor Relaxation & Lounge Zones",

      heritageTitle: "OUR PRINCIPLES",
      heritageHeading: "What Sets Us Apart",
      heritageDesc: "Every project at KERA represents a synthesis of art and structural engineering. We reject cookie-cutter templates — every single line is drawn to fulfill tailored lifestyle demands and bespoke aesthetic preferences."
    }
  };

  const t = texts[lang] || texts.ka;

  return (
    <div className={`min-h-screen py-20 px-6 max-w-7xl mx-auto transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-neutral-900'
    }`}>
      
      {/* 1. მთავარი ბანერი და ტექსტი */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
        <div className="space-y-6">
          <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.25em]">
            {t.subtitle}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t.heroTitle}
          </h1>
          <p className={`text-sm md:text-base font-light leading-relaxed ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {t.heroDesc1}
          </p>
          <p className={`text-sm md:text-base font-light leading-relaxed ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {t.heroDesc2}
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-lg overflow-hidden border border-neutral-800 shadow-2xl h-[420px] sm:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
              alt="About KERA Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md border border-amber-500/30 rounded-sm flex items-center gap-4">
              <ShieldCheck className="text-amber-500 shrink-0" size={32} />
              <div>
                <h4 className="text-sm font-bold text-white">{t.qualityTitle}</h4>
                <p className="text-xs text-neutral-300 font-mono">{t.qualityDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. დეტალური სერვისები და მიმართულებები */}
      <div className="mb-28 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em]">
            {t.directionsTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black">{t.directionsHeading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* მიმართულება 1: არქიტექტურა */}
          <div className={`p-8 rounded-lg border flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-2 ${
            isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
          }`}>
            <div className="space-y-4">
              <Building2 className="text-amber-500" size={36} />
              <h3 className="text-xl font-bold">{t.dir1Title}</h3>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {t.dir1Desc}
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-neutral-800/60 text-xs font-mono">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir1Item1}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir1Item2}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir1Item3}</li>
            </ul>
          </div>

          {/* მიმართულება 2: ინტერიერი */}
          <div className={`p-8 rounded-lg border flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-2 ${
            isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
          }`}>
            <div className="space-y-4">
              <HomeIcon className="text-amber-500" size={36} />
              <h3 className="text-xl font-bold">{t.dir2Title}</h3>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {t.dir2Desc}
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-neutral-800/60 text-xs font-mono">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir2Item1}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir2Item2}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir2Item3}</li>
            </ul>
          </div>

          {/* მიმართულება 3: ლანდშაფტი */}
          <div className={`p-8 rounded-lg border flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-2 ${
            isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
          }`}>
            <div className="space-y-4">
              <Compass className="text-amber-500" size={36} />
              <h3 className="text-xl font-bold">{t.dir3Title}</h3>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {t.dir3Desc}
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-neutral-800/60 text-xs font-mono">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir3Item1}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir3Item2}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-500 shrink-0" /> {t.dir3Item3}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. პრინციპები და მიმართულებები */}
      <div className={`p-10 sm:p-14 rounded-lg border grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${
        isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
      }`}>
        <div className="space-y-2 lg:col-span-1">
          <span className="text-amber-500 text-xs font-mono uppercase tracking-widest">{t.heritageTitle}</span>
          <h3 className="text-3xl font-black">{t.heritageHeading}</h3>
        </div>
        <p className={`text-sm md:text-base leading-relaxed lg:col-span-2 font-light ${
          isDark ? 'text-neutral-300' : 'text-neutral-700'
        }`}>
          {t.heritageDesc}
        </p>
      </div>

    </div>
  );
};