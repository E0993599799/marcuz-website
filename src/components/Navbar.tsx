"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05070D]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center font-bold text-white">M</div>
          <span className="font-bold text-xl tracking-tight text-white">Marcuxz Web</span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          {['Services', 'Work', 'Process', 'Pricing', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all hover:border-accent-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            Start Project
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#080B12] border-b border-white/10 p-6 flex flex-col gap-4">
          {['Services', 'Work', 'Process', 'Pricing', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-300 hover:text-white">
              {item}
            </a>
          ))}
          <a href="#contact" className="mt-4 px-5 py-3 rounded-xl bg-accent-violet text-white text-center font-medium">
            Start Project
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
