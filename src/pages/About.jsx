// src/pages/About.jsx
import React from 'react';
import { Compass, Lightbulb, Layers, Award } from 'lucide-react';

export const About = () => {
  const principles = [
    {
      icon: <Compass className="text-amber-500" size={28} />,
      title: 'მინიმალისტური ესთეტიკა',
      description: 'სუფთა ხაზები, ვიტრაჟული ფასადები და სივრცის მაქსიმალური ათვისება ზედმეტი დეტალების გარეშე.',
    },
    {
      icon: <Lightbulb className="text-amber-500" size={28} />,
      title: 'ინოვაცია & ტექნოლოგია',
      description: 'თანამედროვე ენერგოეფექტური მასალები, ჭკვიანი სახლის ინტეგრაცია და მდგრადი არქიტექტურა.',
    },
    {
      icon: <Layers className="text-amber-500" size={28} />,
      title: 'ინდივიდუალური მიდგომა',
      description: 'თითოეული პროექტი იქმნება დამკვეთის ექსკლუზიური საჭიროებებისა და ლანდშაფტის სპეციფიკის გათვალისწინებით.',
    },
  ];

  return (
    <div className="bg-neutral-950 text-white min-h-screen py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
              ჩვენ შესახებ
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              ჩვენ ვქმნით მომავლის საცხოვრებელ და სამუშაო სივრცეებს
            </h1>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              "კერა" არის თანამედროვე არქიტექტურისა და ინტერიერის დიზაინის სტუდია. ჩვენი საქმიანობის მთავარი სფეროა ექსკლუზიური კერძო სახლების, მოდერნისტული ვილების, პრემიუმ საცხოვრებელი ბინებისა და ფუნქციური ოფისების დაპროექტება.
            </p>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              ჩვენი მიზანია შევქმნათ არქიტექტურა, რომელიც იდეალურად ერწყმის გარემოს, ინარჩუნებს სიმარტივესა და ელეგანტურობას, და ამავდროულად უზრუნველყოფს მაქსიმალურ კომფორტს.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
              alt="KERA Studio Office & Design Process"
              className="rounded border border-neutral-800 shadow-2xl w-full h-[350px] sm:h-[450px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-800 p-6 rounded hidden sm:flex items-center gap-4 shadow-xl">
              <Award className="text-amber-500" size={36} />
              <div>
                <div className="text-lg font-bold text-white">პრემიუმ ხარისხი</div>
                <div className="text-xs text-neutral-400">საერთაშორისო სტანდარტების პროექტები</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 PRINCIPLES SECTION */}
        <div className="space-y-10 pt-10 border-t border-neutral-900">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em]">
              პრინციპები
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">რით გამოვირჩევით</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-900/60 border border-neutral-800 p-8 rounded space-y-4 hover:border-amber-500/50 transition-colors"
              >
                <div>{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};