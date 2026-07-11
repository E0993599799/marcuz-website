"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('บริการ', 'Services'), href: '#services' },
    { label: t('ผลงาน', 'Work'), href: '#work' },
    { label: t('ขั้นตอนการทำงาน', 'Process'), href: '#process' },
    { label: t('ราคา', 'Pricing'), href: '#pricing' },
    { label: t('คำถามที่พบบ่อย', 'FAQ'), href: '#faq' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'th' ? 'en' : 'th');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05070D]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center font-bold text-white">M</div>
          <span className="font-bold text-xl tracking-tight text-white">MarcusX web</span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors ml-4 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
          >
            <Globe className="w-4 h-4" />
            {language === 'th' ? 'EN' : 'TH'}
          </button>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all hover:border-accent-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            {t('เริ่มต้นโปรเจกต์', 'Start Project')}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white px-2 py-1 rounded-md bg-white/5"
          >
            <Globe className="w-4 h-4" />
            {language === 'th' ? 'EN' : 'TH'}
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#080B12] border-b border-white/10 p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-300 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="mt-4 px-5 py-3 rounded-xl bg-accent-violet text-white text-center font-medium">
            {t('เริ่มต้นโปรเจกต์', 'Start Project')}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
