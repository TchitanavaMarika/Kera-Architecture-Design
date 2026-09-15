// src/pages/Contact.jsx
import React, { useState } from 'react';
import { useTheme, useLanguage } from '../App';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

export const Contact = () => {
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'architecture',
    area: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [savedData, setSavedData] = useState(null);

  const texts = {
    ka: {
      subtitle: "დაგვიკავშირდით",
      heroTitle: "მოგვიყევით თქვენი პროექტის შესახებ",
      heroDesc: "ჩვენი არქიტექტორები მზად არიან განახორციელონ ნებისმიერი სირთულის იდეა. მოგვწერეთ და მიიღეთ პროფესიონალური კონსულტაცია.",
      contactDetailsTitle: "საკონტაქტო დეტალები",
      mainOffice: "მთავარი ოფისი (თბილისი)",
      mainOfficeAddr: "აღმაშენებლის გამზირი 188, თბილისი",
      regOffice: "რეგიონული ოფისი (ზუგდიდი)",
      regOfficeAddr: "რუსთაველის გამზირი 12, ზუგდიდი",
      workingHours: "სამუშაო საათები",
      hoursVal: "ორშაბათი - პარასკევი: 10:00 - 19:00",
      formTitle: "მოგვწერეთ შეტყობინება",
      nameLabel: "სახელი / კომპანია *",
      namePlaceholder: "სახელი და გვარი",
      emailLabel: "ელ-ფოსტა *",
      emailPlaceholder: "example@mail.com",
      serviceLabel: "მიმართულება",
      archOption: "არქიტექტურული პროექტი",
      interiorOption: "ინტერიერის დიზაინი",
      landscapeOption: "ლანდშაფტის დიზაინი",
      areaLabel: "სავარაუდო ფართი (მ²)",
      areaPlaceholder: "მაგ: 250 მ²",
      messageLabel: "დეტალები / აღწერა",
      messagePlaceholder: "აღწერეთ თქვენი პროექტი...",
      submitBtn: "მოთხოვნის გაგზავნა",
      successTitle: "მოთხოვნა წარმატებით გაიგზავნა!",
      successDesc: "მადლობა დაინტერესებისთვის. ჩვენი წარმომადგენელი უმოკლეს დროში დაგიკავშირდებათ.",
      sendNew: "ახალი მოთხოვნის შეყვანა",
      requiredError: "გთხოვთ შეავსოთ ეს ველი.",
      previewTitle: "მიღებული შეკვეთის მონაცემები (სისტემის ლოგი):"
    },
    en: {
      subtitle: "GET IN TOUCH",
      heroTitle: "Tell us about your project",
      heroDesc: "Our architects are ready to bring any complex idea to life. Contact us for professional consultation.",
      contactDetailsTitle: "Contact Details",
      mainOffice: "Main Office (Tbilisi)",
      mainOfficeAddr: "188 Aghmashenebeli Ave, Tbilisi",
      regOffice: "Regional Office (Zugdidi)",
      regOfficeAddr: "12 Rustaveli Ave, Zugdidi",
      workingHours: "Working Hours",
      hoursVal: "Monday - Friday: 10:00 - 19:00",
      formTitle: "Connect With Us",
      nameLabel: "Name / Company *",
      namePlaceholder: "Name and Surname",
      emailLabel: "Email Address *",
      emailPlaceholder: "example@mail.com",
      serviceLabel: "Service Type",
      archOption: "Architectural Project",
      interiorOption: "Interior Design",
      landscapeOption: "Landscape Design",
      areaLabel: "Estimated Area (m²)",
      areaPlaceholder: "e.g. 250 m²",
      messageLabel: "Project Details",
      messagePlaceholder: "Describe your project...",
      submitBtn: "Send Request",
      successTitle: "Request Sent Successfully!",
      successDesc: "Thank you for your interest. Our representative will contact you shortly.",
      sendNew: "Send Another Request",
      requiredError: "Please fill out this field.",
      previewTitle: "Received Order Data (System Log):"
    }
  };

  const t = texts[lang] || texts.ka;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSavedData(formData);
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen py-16 px-6 max-w-7xl mx-auto transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-neutral-900'
    }`}>
      
      {/* 1. HERO SECTION (Figma Desktop - Contact Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.25em]">
            {t.subtitle}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            {t.heroTitle}
          </h1>
          <p className={`text-base md:text-lg font-light leading-relaxed ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {t.heroDesc}
          </p>
        </div>
        <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
            alt="Contact Architecture"
            className="w-full h-full object-cover brightness-90"
          />
        </div>
      </div>

      {/* 2. CONTACT DETAILS GRID (Figma Style) */}
      <div className="mb-24 space-y-8">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-amber-500 font-bold">
          {t.contactDetailsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* თბილისის ოფისი */}
          <div className={`p-8 rounded-lg border space-y-4 ${
            isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <MapPin className="text-amber-500" size={26} />
            <div>
              <h3 className="text-lg font-bold">{t.mainOffice}</h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{t.mainOfficeAddr}</p>
            </div>
            <div className="pt-2 text-xs font-mono text-neutral-400">
              <Phone size={14} className="inline mr-2 text-amber-500" /> +995 (322) 10 20 30
            </div>
          </div>

          {/* ზუგდიდის ოფისი */}
          <div className={`p-8 rounded-lg border space-y-4 ${
            isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <MapPin className="text-amber-500" size={26} />
            <div>
              <h3 className="text-lg font-bold">{t.regOffice}</h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{t.regOfficeAddr}</p>
            </div>
            <div className="pt-2 text-xs font-mono text-neutral-400">
              <Phone size={14} className="inline mr-2 text-amber-500" /> +995 (415) 23 45 67
            </div>
          </div>

          {/* სამუშაო საათები & ელ-ფოსტა */}
          <div className={`p-8 rounded-lg border space-y-4 ${
            isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <Clock className="text-amber-500" size={26} />
            <div>
              <h3 className="text-lg font-bold">{t.workingHours}</h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{t.hoursVal}</p>
            </div>
            <div className="pt-2 text-xs font-mono text-neutral-400">
              <Mail size={14} className="inline mr-2 text-amber-500" /> contact@kera-studio.ge
            </div>
          </div>
        </div>
      </div>

      {/* 3. VISUAL MAP BANNER */}
      <div className="mb-24 rounded-lg overflow-hidden border border-neutral-800 relative h-72 sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
          alt="Map Location"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
          <Globe size={36} className="text-amber-500 animate-pulse" />
          <h3 className="text-2xl font-bold text-white">Georgia • Tbilisi & Zugdidi</h3>
          <p className="text-xs font-mono text-neutral-400 max-w-md">
            {lang === 'ka' ? 'ჩვენი არქიტექტურული პროექტები ხორციელდება მთელი საქართველოს მასშტაბით.' : 'Our architectural projects are executed nationwide across Georgia.'}
          </p>
        </div>
      </div>

      {/* 4. FORM SECTION (Connect With Us) */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-amber-500 text-xs font-mono uppercase tracking-widest font-bold">CONNECT WITH US</span>
          <h2 className="text-3xl font-black">{t.formTitle}</h2>
        </div>

        <div className={`p-8 sm:p-12 rounded-lg border ${
          isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
        }`}>
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <CheckCircle2 className="text-amber-500 mx-auto" size={54} />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{t.successTitle}</h2>
                <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {t.successDesc}
                </p>
              </div>

              {savedData && (
                <div className={`p-4 rounded text-left max-w-lg mx-auto border font-mono text-xs space-y-1 ${
                  isDark ? 'bg-black border-neutral-800 text-amber-400' : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                }`}>
                  <div className="text-[10px] uppercase text-neutral-500 mb-2 font-bold">{t.previewTitle}</div>
                  <div><span className="text-neutral-500">Name:</span> {savedData.name}</div>
                  <div><span className="text-neutral-500">Email:</span> {savedData.email}</div>
                  <div><span className="text-neutral-500">Service:</span> {savedData.service}</div>
                  <div><span className="text-neutral-500">Area:</span> {savedData.area || '-'}</div>
                  <div><span className="text-neutral-500">Message:</span> {savedData.message || '-'}</div>
                </div>
              )}

              <button
                onClick={() => {
                  setSubmitted(false);
                  setSavedData(null);
                  setFormData({ name: '', email: '', service: 'architecture', area: '', message: '' });
                }}
                className="mt-4 px-6 py-3 bg-amber-500 text-black font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-amber-400 transition-all"
              >
                {t.sendNew}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    placeholder={t.namePlaceholder}
                    onInvalid={(e) => e.target.setCustomValidity(t.requiredError)}
                    onInput={(e) => e.target.setCustomValidity('')}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder={t.emailPlaceholder}
                    onInvalid={(e) => e.target.setCustomValidity(t.requiredError)}
                    onInput={(e) => e.target.setCustomValidity('')}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {t.serviceLabel}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                    }`}
                  >
                    <option value="architecture">{t.archOption}</option>
                    <option value="interior">{t.interiorOption}</option>
                    <option value="landscape">{t.landscapeOption}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {t.areaLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.area}
                    placeholder={t.areaPlaceholder}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {t.messageLabel}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  placeholder={t.messagePlaceholder}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors resize-none ${
                    isDark 
                      ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                      : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 text-xs uppercase tracking-[0.15em] transition-all rounded-sm shadow-lg shadow-amber-500/20"
              >
                {t.submitBtn} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
};