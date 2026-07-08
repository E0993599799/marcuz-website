"use client";
import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080B12]/80 -z-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-violet/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card p-12 md:p-20 border-white/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-lime" />

          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {t('พร้อมเปลี่ยนไอเดียของคุณให้เป็น', 'Ready to turn your idea into a')} <span className="text-gradient">{t('ระบบที่เปิดตัวได้จริงแล้วหรือยัง?', 'launch-ready system?')}</span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl">
              {t('อย่ารอช้า มาสร้างโครงสร้างพื้นฐานทางดิจิทัลที่ธุรกิจของคุณต้องการเพื่อการเติบโตกันตั้งแต่วันนี้เลย', 'Stop waiting. Let\'s build the digital infrastructure your business needs to scale today.')}
            </p>

            <div className="flex items-center gap-3">
              <a
                href="mailto:e.meephu@gmail.com"
                aria-label="Email Marcuz"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <span
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90"
                title="Instagram"
              >
                <InstagramIcon />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
