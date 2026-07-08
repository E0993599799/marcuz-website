"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      q: t('ใช้เวลาทำหน้าแลนดิ้งเพจนานเท่าไหร่?', 'How long does a landing page take?'),
      a: t('หน้าแลนดิ้งเพจระดับพรีเมียมทั่วไปใช้เวลาประมาณ 1-2 สัปดาห์ ตั้งแต่เริ่มคิดคอนเซปต์จนถึงการเปิดตัว ขึ้นอยู่กับความพร้อมของเนื้อหาและรอบการแก้ไข', 'A standard premium landing page typically takes 1-2 weeks from concept to deployment, depending on content readiness and feedback cycles.')
    },
    {
      q: t('สามารถเชื่อมต่อเครื่องมือ AI ได้หรือไม่?', 'Can you connect AI tools?'),
      a: t('ได้แน่นอนครับ เราเชี่ยวชาญการผสานการทำงานกับ API ของ OpenAI (ChatGPT), Google Gemini และ Anthropic Claude เพื่อสร้างผู้ช่วยอัจฉริยะ เครื่องมือสร้างเนื้อหา และระบบประมวลผลข้อมูลลงในเว็บแอปพลิเคชันของคุณ', 'Yes. We frequently integrate OpenAI (ChatGPT), Google Gemini, and Anthropic Claude APIs to build smart assistants, content generators, and data processors directly into your web apps.')
    },
    {
      q: t('สามารถติดตั้งบน Vercel ได้หรือไม่?', 'Can you deploy to Vercel?'),
      a: t('ได้ครับ Vercel เป็นแพลตฟอร์มหลักที่เราใช้ติดตั้งแอปพลิเคชัน Next.js ซึ่งช่วยให้ส่งมอบเนื้อหาได้อย่างรวดเร็วทั่วโลกและระบบไม่มีการหยุดชะงัก', 'Absolutely. Vercel is our preferred deployment platform for Next.js applications, ensuring global edge delivery and zero-downtime deployments.')
    },
    {
      q: t('สามารถออกแบบเว็บไซต์เดิมใหม่ได้หรือไม่?', 'Can you redesign an existing website?'),
      a: t('ได้ครับ เราสามารถตรวจสอบเว็บไซต์เดิมของคุณและสร้างใหม่ด้วยเทคโนโลยีที่ทันสมัย (Next.js) เพื่อเพิ่มประสิทธิภาพ ประสบการณ์ผู้ใช้ (UX) และอัตราการเกิดคอนเวอร์ชันให้ดีขึ้น', 'Yes, we can audit your existing site and rebuild it on a modern stack (Next.js) for better performance, UX, and conversion rates.')
    },
    {
      q: t('รองรับเว็บไซต์ภาษาไทยและภาษาอังกฤษหรือไม่?', 'Do you support Thai and English websites?'),
      a: t('รองรับครับ เราสร้างระบบที่รองรับหลายภาษา (i18n) อย่างเต็มรูปแบบ ปรับแต่งมาเพื่อผู้ชมทั้งชาวไทยและทั่วโลก', 'Yes, we build fully internationalized (i18n) systems supporting multiple languages, tailored specifically for Thai and Global audiences.')
    },
    {
      q: t('สามารถสร้างหน้าแดชบอร์ดสำหรับใช้งานภายในองค์กรได้หรือไม่?', 'Can you build internal dashboards?'),
      a: t('ได้ครับ เราสร้างระบบหลังบ้านและเครื่องมือภายในแบบปรับแต่งได้ ซึ่งสามารถเชื่อมต่อกับฐานข้อมูลของคุณ (เช่น Supabase หรือ Postgres) รวมถึงแพลตฟอร์มระบบอัตโนมัติ (n8n) ได้ด้วย', 'Yes, we build custom admin panels and internal tools connected to your databases (like Supabase or Postgres) and automation platforms (n8n).')
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('คำถามที่พบบ่อย', 'Frequently Asked Questions')}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <button 
                className="w-full text-left p-6 flex justify-between items-center hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
