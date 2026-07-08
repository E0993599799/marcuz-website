"use client";
import React from 'react';
import { Search, PenTool, Code2, Bot, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { title: t('ถอดรหัสความต้องการ', 'Decode Intent'), desc: t('ทำความเข้าใจเป้าหมายธุรกิจและความต้องการทางเทคนิคของคุณ', 'We align on your business goals and technical requirements.'), icon: <Search className="w-6 h-6" /> },
    { title: t('ออกแบบระบบ', 'Design System'), desc: t('สร้าง UI/UX ระดับพรีเมียมที่สร้างความน่าเชื่อถือและเพิ่มยอดขาย', 'Create a premium UI/UX that builds trust and drives conversion.'), icon: <PenTool className="w-6 h-6" /> },
    { title: t('พัฒนาระบบหลัก', 'Build Core'), desc: t('พัฒนาระบบด้วย Next.js เพื่อประสิทธิภาพที่รวดเร็ว', 'Develop with Next.js for blazing fast performance.'), icon: <Code2 className="w-6 h-6" /> },
    { title: t('สร้างระบบอัตโนมัติ', 'Automate Workflow'), desc: t('ผสานการทำงานกับ AI และ webhooks เพื่อลดการทำงานที่ต้องใช้คน', 'Integrate AI and webhooks to eliminate manual tasks.'), icon: <Bot className="w-6 h-6" /> },
    { title: t('ติดตั้งและปรับให้เหมาะสม', 'Deploy & Optimize'), desc: t('เปิดตัวบนโครงสร้างพื้นฐานคลาวด์ที่แข็งแกร่งพร้อมระบบวิเคราะห์ข้อมูล', 'Launch on robust cloud infrastructure with analytics.'), icon: <Rocket className="w-6 h-6" /> },
  ];

  return (
    <section id="process" className="py-24 bg-[#080B12] border-y border-white/5 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t('ขั้นตอนการทำงานของเรา', 'How we build systems')}
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-[#05070D] border-4 border-[#080B12] glass-card flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  {step.icon}
                </div>
                <div className="absolute top-8 -right-4 text-[100px] font-black text-white/[0.02] -z-10 select-none">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
