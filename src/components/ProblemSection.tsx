"use client";
import React from 'react';
import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    { title: t('สื่อสารไม่ชัดเจน', 'Unclear message'), desc: t("ผู้เข้าชมออกจากเว็บเพราะไม่เข้าใจทันทีว่าคุณทำอะไร", "Visitors leave because they don't understand what you do instantly.") },
    { title: t('เปิดตัวช้า', 'Slow launch'), desc: t('การพัฒนาใช้เวลาเป็นเดือนแทนที่จะเป็นสัปดาห์ ทำให้เสียโอกาสทางธุรกิจ', 'Development takes months instead of weeks, delaying your time-to-market.') },
    { title: t('ประสบการณ์ใช้งานบนมือถือแย่', 'Poor mobile UX'), desc: t('เว็บพังเมื่อดูบนมือถือ ทำให้เสียลูกค้าไปกว่า 60%', 'Your site breaks on phones, losing over 60% of potential customers.') },
    { title: t('ไม่มีระบบอัตโนมัติ', 'No automation'), desc: t('ทีมของคุณเสียเวลาไปกับงานที่ทำด้วยมือซึ่ง AI สามารถจัดการได้', 'Your team wastes hours on manual tasks that could be handled by AI.') },
    { title: t('ไม่มีกลยุทธ์เพิ่มยอดขาย', 'No conversion strategy'), desc: t("ดูสวย แต่ไม่สามารถสร้างยอดขายหรือหาลูกค้าใหม่ได้จริง", "Looks nice, but doesn't actually generate leads or sales.") },
    { title: t('โค้ดไร้ระเบียบ', 'No deployment discipline'), desc: t('โค้ดที่ยุ่งเหยิง พังง่ายเมื่อใช้งานจริง และยากต่อการขยายสเกล', 'Spaghetti code that breaks in production and is hard to scale.') },
  ];

  return (
    <section className="py-24 bg-[#080B12]/50 border-y border-white/5 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t('เว็บไซต์ส่วนใหญ่ดูสวยงาม', 'Most websites look nice.')} <br/><span className="text-gray-500">{t('แต่มีน้อยเว็บที่ใช้งานได้จริง', 'Few actually work.')}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{problem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
