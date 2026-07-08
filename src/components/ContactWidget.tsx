"use client";
import React from 'react';
import Image from 'next/image';
import { Mail, MessageCircle, QrCode } from 'lucide-react';

const ContactWidget = () => {
  return (
    <aside
      id="contact-widget"
      className="fixed bottom-6 right-6 z-50 w-[min(92vw,24rem)] rounded-3xl border border-white/10 bg-[#05070D]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden"
    >
      <div className="h-1 w-full bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-lime" />
      <div className="p-5 sm:p-6 space-y-5">
        <div>
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
            <MessageCircle className="w-4 h-4" /> Contact Marcuz
          </div>
          <h3 className="text-lg font-semibold text-white leading-tight">
            LINE, QR, and email in one place
          </h3>
        </div>

        <div className="grid gap-3 text-sm">
          <a
            href="https://line.me/ti/p/MWRVrZwhH7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-accent-cyan" />
            <span className="break-all">https://line.me/ti/p/MWRVrZwhH7</span>
          </a>
          <a
            href="mailto:e.meephu@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4 text-accent-violet" />
            <span className="break-all">e.meephu@gmail.com</span>
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
            <QrCode className="w-4 h-4" /> Scan QR
          </div>
          <Image
            src="/contact/lineid.jpg"
            alt="LINE QR code for Marcuz contact"
            width={512}
            height={512}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </aside>
  );
};

export default ContactWidget;
