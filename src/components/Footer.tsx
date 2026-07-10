"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#05070D] pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center font-bold text-white">M</div>
              <span className="font-bold text-xl tracking-tight text-white">MarcusX web</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              {t('ดิจิทัลสตูดิโอระดับพรีเมียมที่สร้างเว็บไซต์เน้นยอดขาย เว็บแอปพลิเคชัน AI ระบบอัตโนมัติ และระบบธุรกิจที่พร้อมเปิดใช้งานจริง', 'Premium digital studio building high-converting websites, AI-powered web apps, automation workflows, and deployment-ready business systems.')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">{t('บริการ', 'Services')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">{t('พัฒนาเว็บไซต์', 'Web Development')}</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">{t('การผสานระบบ AI', 'AI Integrations')}</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">{t('ระบบอัตโนมัติสำหรับธุรกิจ', 'Business Automation')}</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">{t('บริการติดตั้งระบบคลาวด์', 'Cloud Deployment')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">{t('บริษัท', 'Company')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#work" className="hover:text-accent-violet transition-colors">{t('ผลงานของเรา', 'Our Work')}</a></li>
              <li><a href="#pricing" className="hover:text-accent-violet transition-colors">{t('ราคา', 'Pricing')}</a></li>
              <li><a href="#faq" className="hover:text-accent-violet transition-colors">{t('คำถามที่พบบ่อย', 'FAQ')}</a></li>
              <li><a href="#contact" className="hover:text-accent-violet transition-colors">{t('ติดต่อ', 'Contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('ติดต่อ', 'Contact')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="mailto:e.meephu@gmail.com" className="hover:text-accent-cyan transition-colors break-all">
                  e.meephu@gmail.com
                </a>
              </li>
              <li>
                <a href="https://line.me/ti/p/MWRVrZwhH7" target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors break-all">
                  LINE: https://line.me/ti/p/MWRVrZwhH7
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} MarcusX web. {t('สงวนลิขสิทธิ์', 'All rights reserved.')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">{t('นโยบายความเป็นส่วนตัว', 'Privacy Policy')}</a>
            <a href="#" className="hover:text-gray-300">{t('ข้อกำหนดการให้บริการ', 'Terms of Service')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
