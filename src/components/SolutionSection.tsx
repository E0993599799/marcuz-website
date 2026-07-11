"use client";
import React from 'react';
import { Layout, Cpu, Workflow, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const SolutionSection = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t('หน้าแลนดิ้งเพจระดับพรีเมียม', 'Premium Landing Pages'),
      desc: t('หน้าเว็บที่สวยงาม ออกแบบมาเพื่อเปลี่ยนผู้เข้าชมให้กลายเป็นลูกค้า', 'High-converting, beautiful pages designed to turn visitors into customers.'),
      icon: <Layout className="w-8 h-8 text-accent-cyan" />,
      color: 'bg-accent-cyan/10 border-accent-cyan/20'
    },
    {
      title: t('เว็บแอปพลิเคชัน AI', 'AI Web Apps'),
      desc: t('เว็บแอปพลิเคชันอัจฉริยะที่ขับเคลื่อนด้วย OpenAI และ Gemini เพื่อประสบการณ์ผู้ใช้ที่ชาญฉลาด', 'Intelligent web applications powered by OpenAI and Gemini for smart user experiences.'),
      icon: <Cpu className="w-8 h-8 text-accent-violet" />,
      color: 'bg-accent-violet/10 border-accent-violet/20'
    },
    {
      title: t('ระบบอัตโนมัติสำหรับธุรกิจ', 'Business Automation'),
      desc: t('เชื่อมต่อแอปพลิเคชันของคุณ จัดการกระแสข้อมูล และปล่อยให้บอททำงานที่ซ้ำซากแทนคุณ', 'Connect your apps, streamline data flow, and let bots do the repetitive work.'),
      icon: <Workflow className="w-8 h-8 text-accent-lime" />,
      color: 'bg-accent-lime/10 border-accent-lime/20'
    },
    {
      title: t('การติดตั้งและแก้ไขระบบ', 'Deployment & Debugging'),
      desc: t('การติดตั้งระบบบน Vercel ระดับองค์กร, CI/CD pipelines และสถาปัตยกรรมที่ไม่มีการหยุดชะงัก', 'Enterprise-grade Vercel deployments, CI/CD pipelines, and zero-downtime architecture.'),
      icon: <Terminal className="w-8 h-8 text-white" />,
      color: 'bg-white/5 border-white/10'
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent-violet/5 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t('MarcusX เปลี่ยนไอเดียของคุณให้เป็น', 'MarcusX turns your idea into a')} <span className="text-gradient">{t('ระบบดิจิทัลที่ใช้งานได้จริง', 'working digital system.')}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.4, delay: index * 0.05 }}
              style={{ transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}
              className={`p-8 rounded-3xl border ${solution.color} bg-[#080B12]/80 backdrop-blur-xl flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="p-4 rounded-2xl bg-[#05070D]">
                {solution.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed">{solution.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
