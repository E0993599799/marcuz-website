"use client";
import React from 'react';
import Image from 'next/image';
import { Mail, MessageCircle, QrCode } from 'lucide-react';

const ContactWidget = () => {
  return (
    <aside
      id="contact-widget"
      className="fixed bottom-4 right-4 z-50 w-[min(84vw,18rem)] rounded-2xl border border-white/10 bg-[#05070D]/95 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.45)] overflow-hidden"
    >
      <div className="h-1 w-full bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-lime" />
      <div className="p-3 sm:p-4 space-y-3">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gray-400">
          <MessageCircle className="w-3.5 h-3.5" /> Contact Marcuz
        </div>

        <div className="grid gap-2 text-[11px]">
          <a
            href="https://line.me/ti/p/MWRVrZwhH7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-white/80" />
            <span className="truncate">LINE</span>
          </a>
          <a
            href="mailto:e.meephu@gmail.com"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-white/80" />
            <span className="truncate">Email</span>
          </a>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/30 p-2">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gray-400 mb-2">
            <QrCode className="w-3.5 h-3.5" /> QR
          </div>
          <Image
            src="/contact/lineid.jpg"
            alt="LINE QR code for Marcuz contact"
            width={512}
            height={512}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </aside>
  );
};

export default ContactWidget;
