"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      q: 'How long does a landing page take?',
      a: 'A standard premium landing page typically takes 1-2 weeks from concept to deployment, depending on content readiness and feedback cycles.'
    },
    {
      q: 'Can you connect AI tools?',
      a: 'Yes. We frequently integrate OpenAI (ChatGPT), Google Gemini, and Anthropic Claude APIs to build smart assistants, content generators, and data processors directly into your web apps.'
    },
    {
      q: 'Can you deploy to Vercel?',
      a: 'Absolutely. Vercel is our preferred deployment platform for Next.js applications, ensuring global edge delivery and zero-downtime deployments.'
    },
    {
      q: 'Can you redesign an existing website?',
      a: 'Yes, we can audit your existing site and rebuild it on a modern stack (Next.js) for better performance, UX, and conversion rates.'
    },
    {
      q: 'Do you support Thai and English websites?',
      a: 'Yes, we build fully internationalized (i18n) systems supporting multiple languages, tailored specifically for Thai and Global audiences.'
    },
    {
      q: 'Can you build internal dashboards?',
      a: 'Yes, we build custom admin panels and internal tools connected to your databases (like Supabase or Postgres) and automation platforms (n8n).'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
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
