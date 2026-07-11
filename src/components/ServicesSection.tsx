"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    t('ออกแบบเว็บไซต์และหน้าแลนดิ้งเพจ', 'Website & Landing Page Design'),
    t('พัฒนาเว็บแอปพลิเคชันด้วย Next.js', 'Next.js Web App Development'),
    t('การผสานระบบผู้ช่วย AI', 'AI Assistant Integration'),
    t('ระบบอัตโนมัติผ่าน LINE / Telegram', 'LINE / Telegram Automation'),
    t('แดชบอร์ดและเครื่องมือสำหรับใช้งานภายใน', 'Dashboard & Internal Tools'),
    t('บริการติดตั้งระบบบน Vercel', 'Vercel Deployment Support')
  ];

  return (
    <section className="py-24 bg-[#080B12] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('ความสามารถที่ออกแบบมาเพื่อตอบโจทย์ดิจิทัลยุคใหม่', 'Capabilities designed for modern digital needs.')}
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              {t('เราเชี่ยวชาญในเทคโนโลยีเว็บยุคใหม่ ด้วยการมุ่งเน้นไปที่ Next.js, AI APIs และระบบคลาวด์ เราจึงสามารถส่งมอบผลลัพธ์ประสิทธิภาพสูงได้เร็วกว่าเอเจนซี่ทั่วไปมาก', 'We specialize in the modern web stack. By focusing on Next.js, AI APIs, and cloud deployments, we deliver high-performance results much faster than traditional agencies.')}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#06b6d4]"></div>
                  <span className="text-sm font-medium text-gray-300">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden glass-card border-white/10"
          >
            <Image 
              src="/assets/marcuxz-tech-ecosystem.png" 
              alt="Tech Ecosystem" 
              fill 
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
