"use client";
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter Landing Page',
      price: 'Start from',
      target: 'Best for: New products, pre-launch campaigns, small business validation.',
      features: ['Premium 1-Page Design', 'Next.js + Tailwind CSS', 'Responsive Mobile-first', 'Contact Form Integration', 'Vercel Deployment'],
      highlight: false
    },
    {
      name: 'Growth Web System',
      price: 'Start from',
      target: 'Best for: Expanding businesses needing multiple pages and dynamic content.',
      features: ['Multi-page Architecture', 'CMS / Blog Integration', 'Supabase Database Setup', 'SEO Optimization', 'Basic Analytics Setup'],
      highlight: true
    },
    {
      name: 'Custom AI Automation',
      price: 'Start from',
      target: 'Best for: Teams needing internal tools, AI chatbots, and workflow automation.',
      features: ['Custom AI Assistant Integration', 'LINE/Telegram Bots', 'n8n Workflow Automation', 'Custom Dashboard UI', 'API Integrations'],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#080B12] border-t border-white/5 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Transparent scoping. <span className="text-gray-500">No surprises.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-card p-8 flex flex-col ${plan.highlight ? 'border-accent-cyan/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]' : 'border-white/10'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-cyan text-[#05070D] text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">{plan.price}</div>
              <p className="text-sm text-gray-400 mb-8 h-10">{plan.target}</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-lime shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={`block w-full py-4 text-center rounded-xl font-semibold transition-colors ${plan.highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                Discuss Scope
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
