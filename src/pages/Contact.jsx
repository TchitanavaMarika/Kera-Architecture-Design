// src/pages/Contact.jsx
import React, { useState } from 'react';
import { useTheme, useLanguage } from '../App';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

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
  const [savedData, setSavedData] = useState(null); // შენახული მონაცემები ეკრანზე გამოსატანად

  const texts = {
    ka: {
      subtitle: "დაგვიკავშირდით",
      title: "დაიწყეთ თქვენი პროექტი",
      desc: "მოგვწერეთ თქვენი იდეის შესახებ და ჩვენი არქიტექტორები დაგიკავშირდებიან კონსულტაციისთვის.",
      nameLabel: "სახელი / კომპანია",
      emailLabel: "ელ-ფოტო",
      serviceLabel: "მიმართულება",
      archOption: "არქიტექტურული პროექტი",
      interiorOption: "ინტერიერის დიზაინი",
      landscapeOption: "ლანდშაფტის დიზაინი",
      areaLabel: "სავარაუდო ფართი (მ²)",
      messageLabel: "დეტალები / აღწერა",
      submitBtn: "მოთხოვნის გაგზავნა",
      successTitle: "მოთხოვნა წარმატებით გაიგზავნა!",
      successDesc: "მადლობა დაინტერესებისთვის. ჩვენი წარმომადგენელი უმოკლეს დროში დაგიკავშირდებათ.",
      addressTitle: "მისამართი",
      addressVal: "რუსთაველის გამზირი 12, ზუგდიდი / თბილისი",
      phoneTitle: "ტელეფონი",
      emailTitle: "ელ-ფოტო",
      sendNew: "ახალი მოთხოვნის შეყვანა",
      requiredError: "გთხოვთ შეავსოთ ეს ველი.",
      previewTitle: "მიღებული შეკვეთის მონაცემები (სისტემის ლოგი):"
    },
    en: {
      subtitle: "GET IN TOUCH",
      title: "Start Your Project",
      desc: "Tell us about your vision and our architects will contact you for a consultation.",
      nameLabel: "Name / Company",
      emailLabel: "Email Address",
      serviceLabel: "Service Type",
      archOption: "Architecture Project",
      interiorOption: "Interior Design",
      landscapeOption: "Landscape Design",
      areaLabel: "Estimated Area (m²)",
      messageLabel: "Project Details",
      submitBtn: "Send Request",
      successTitle: "Request Sent Successfully!",
      successDesc: "Thank you for your interest. Our representative will contact you shortly.",
      addressTitle: "Address",
      addressVal: "12 Rustaveli Ave, Zugdidi / Tbilisi",
      phoneTitle: "Phone",
      emailTitle: "Email",
      sendNew: "Send Another Request",
      requiredError: "Please fill out this field.",
      previewTitle: "Received Order Data (System Log):"
    }
  };

  const t = texts[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // შენახვა სტეიტში, რომ ეკრანზე გამოჩნდეს
    setSavedData(formData);
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen py-16 px-6 max-w-7xl mx-auto transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-neutral-900'
    }`}>
      
      {/* სათაური */}
      <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
        <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em]">
          {t.subtitle}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          {t.title}
        </h1>
        <p className={`text-sm md:text-base font-light leading-relaxed ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* საკონტაქტო ინფორმაცია */}
        <div className={`p-8 rounded-lg border space-y-8 ${
          isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
        }`}>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase text-neutral-400">{t.addressTitle}</h3>
              <p className="text-sm font-semibold mt-1">{t.addressVal}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded">
              <Phone size={22} />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase text-neutral-400">{t.phoneTitle}</h3>
              <p className="text-sm font-semibold mt-1">+995 (415) 23 45 67</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase text-neutral-400">{t.emailTitle}</h3>
              <p className="text-sm font-semibold mt-1">contact@kera-studio.ge</p>
            </div>
          </div>
        </div>

        {/* ფორმა */}
        <div className={`lg:col-span-2 p-8 sm:p-10 rounded-lg border ${
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

              {/* 🟢 მონაცემების ვიზუალური ჩვენება ეკრანზე (პრეზენტაციისთვის იდეალურია) */}
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
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onInvalid={(e) => e.target.setCustomValidity(t.requiredError)}
                    onInput={(e) => e.target.setCustomValidity('')}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                    }`}
                    placeholder="მაგ: გიორგი ბერაია"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {t.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onInvalid={(e) => e.target.setCustomValidity(t.requiredError)}
                    onInput={(e) => e.target.setCustomValidity('')}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                    }`}
                    placeholder="example@mail.com"
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
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                    }`}
                    placeholder="მაგ: 250 მ²"
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
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-sm border text-sm outline-none transition-colors resize-none ${
                    isDark 
                      ? 'bg-neutral-950 border-neutral-800 focus:border-amber-500 text-white' 
                      : 'bg-neutral-50 border-neutral-300 focus:border-amber-500 text-black'
                  }`}
                  placeholder="..."
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