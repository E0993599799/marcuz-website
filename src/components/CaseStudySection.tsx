"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const CaseStudySection = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t('จากไอเดียที่กระจัดกระจาย สู่', 'From scattered idea to')} <br/><span className="text-gradient">{t('ระบบที่พร้อมเปิดตัว', 'launch-ready system')}</span>
          </motion.h2>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 bg-[#080B12]/80 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-cyan w-max mb-6">
                {t('กรณีศึกษา', 'CASE STUDY')}
              </div>
              <h3 className="text-3xl font-bold mb-6">{t('การพลิกโฉมแพลตฟอร์ม SaaS ด้วย AI', 'AI-Powered SaaS Platform Transformation')}</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('ความท้าทาย', 'Challenge')}</h4>
                  <p className="text-gray-300">{t('ระบบเดิมที่ซับซ้อน ดูแลรักษายาก โหลดช้า และไม่มีระบบรับผู้ใช้ใหม่แบบอัตโนมัติ', 'A complex legacy system that was hard to maintain, slow to load, and had no automated user onboarding.')}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('กลยุทธ์และการพัฒนา', 'Strategy & Build')}</h4>
                  <p className="text-gray-300">{t('สร้างหน้าบ้านใหม่ทั้งหมดด้วย Next.js ผสานการทำงานกับ OpenAI เพื่อตอบคำถามผู้ใช้อย่างชาญฉลาด และติดตั้งระบบบน Vercel ให้พร้อมทำงานตลอดเวลา', 'Completely rebuilt the frontend using Next.js, integrated OpenAI for smart user queries, and set up zero-downtime Vercel deployments.')}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-accent-cyan">{t('7 วัน', '7-day')}</div>
                  <div className="text-xs text-gray-400 mt-1">{t('ส่งมอบโปรโตไทป์', 'Prototype Delivery')}</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-accent-violet">100%</div>
                  <div className="text-xs text-gray-400 mt-1">{t('พร้อมเปิดใช้งานจริง', 'Deployment Ready')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto border-l border-white/10 overflow-hidden">
              <Image 
                src="/assets/marcuxz-before-after.png" 
                alt="Before and After Redesign" 
                fill 
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
