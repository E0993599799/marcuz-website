"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CaseStudySection = () => {
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
            จากไอเดียที่กระจัดกระจาย สู่ <br/><span className="text-gradient">ระบบที่พร้อมเปิดตัว</span>
          </motion.h2>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 bg-[#080B12]/80 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-cyan w-max mb-6">
                กรณีศึกษา
              </div>
              <h3 className="text-3xl font-bold mb-6">การพลิกโฉมแพลตฟอร์ม SaaS ด้วย AI</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">ความท้าทาย</h4>
                  <p className="text-gray-300">ระบบเดิมที่ซับซ้อน ดูแลรักษายาก โหลดช้า และไม่มีระบบรับผู้ใช้ใหม่แบบอัตโนมัติ</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">กลยุทธ์และการพัฒนา</h4>
                  <p className="text-gray-300">สร้างหน้าบ้านใหม่ทั้งหมดด้วย Next.js ผสานการทำงานกับ OpenAI เพื่อตอบคำถามผู้ใช้อย่างชาญฉลาด และติดตั้งระบบบน Vercel ให้พร้อมทำงานตลอดเวลา</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-accent-cyan">7 วัน</div>
                  <div className="text-xs text-gray-400 mt-1">ส่งมอบโปรโตไทป์</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-accent-violet">100%</div>
                  <div className="text-xs text-gray-400 mt-1">พร้อมเปิดใช้งานจริง</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto border-l border-white/10">
              <img src="/assets/marcuxz-before-after.png" alt="Before and After Redesign" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
