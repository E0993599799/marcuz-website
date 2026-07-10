"use client";
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span className="text-xs font-medium tracking-wide text-gray-300">
                {t('ดิจิทัลสตูดิโอระดับพรีเมียม', 'PREMIUM DIGITAL STUDIO')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              {t('สร้างเว็บไซต์ระดับพรีเมียม ระบบ AI และระบบอัตโนมัติ', 'Launch premium websites, AI systems, and automation workflows')} <span className="text-gradient">{t('— ได้เร็วยิ่งขึ้น', '— faster.')}</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              {t('MarcusX web ออกแบบและสร้างเว็บไซต์ที่เน้นการเพิ่มยอดขาย เครื่องมือ AI และระบบอัตโนมัติสำหรับธุรกิจ ที่พร้อมใช้งาน ขยายสเกลได้ และสร้างความประทับใจ', 'MarcusX web designs and builds conversion-focused websites, AI-powered tools, and business automation systems that are ready to deploy, scale, and impress.')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                {t('เริ่มต้นโปรเจกต์', 'Start Project')} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#work" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium">
                {t('ดูผลงาน', 'View Work')}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500">
              <span>{t('เทคโนโลยีที่ใช้:', 'Trusted Stack:')}</span>
              <span className="text-gray-300">Next.js</span>
              <span className="text-gray-300">Tailwind</span>
              <span className="text-gray-300">Supabase</span>
              <span className="text-gray-300">Vercel</span>
              <span className="text-gray-300">OpenAI</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-hero-glow rounded-full blur-[100px] opacity-30 animate-pulse"></div>
            
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-full rounded-3xl overflow-hidden glass-card p-2 border-white/20">
              <img src="/assets/marcuxz-hero.png" alt="Futuristic AI Workspace" className="w-full h-full object-cover rounded-2xl" />
              
              <div className="absolute -left-6 top-1/4 glass-card p-4 rounded-xl flex items-center gap-4 animate-[bounce_4s_infinite]">
                <div className="w-10 h-10 rounded-full bg-accent-lime/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent-lime rounded-full"></div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">{t('สถานะ', 'Status')}</div>
                  <div className="font-semibold text-sm">{t('พร้อมใช้งานจริง', 'Deployment Ready')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
