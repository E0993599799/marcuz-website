"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, MessageCircle, QrCode } from 'lucide-react';

const ContactWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (isClosed) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = document.documentElement.clientHeight;

          // Show popup when scrolled almost to the end of the page (within 350px from bottom)
          const threshold = 350; // pixels from the bottom
          const isAlmostEnd = scrollHeight - scrollTop - clientHeight < threshold;

          // Only show if the page is scrollable
          const isScrollable = scrollHeight > clientHeight + 100;

          if (isScrollable && isAlmostEnd) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially to check scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClosed]);

  if (isClosed) return null;

  return (
    <aside
      id="contact-widget"
      className={`fixed bottom-4 right-4 z-50 w-[min(84vw,18rem)] rounded-2xl border border-white/10 bg-[#05070D]/95 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.45)] overflow-hidden transition-all duration-500 ease-in-out ${
        isVisible 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <div className="h-1 w-full bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-lime" />
      
      {/* Dismiss Button */}
      <button
        onClick={() => setIsClosed(true)}
        className="absolute top-2.5 right-2.5 text-gray-500 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 z-10"
        aria-label="Close contact widget"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

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