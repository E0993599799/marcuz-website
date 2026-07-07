"use client";
import React from 'react';
import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const problems = [
    { title: 'Unclear message', desc: "Visitors leave because they don't understand what you do instantly." },
    { title: 'Slow launch', desc: 'Development takes months instead of weeks, delaying your time-to-market.' },
    { title: 'Poor mobile UX', desc: 'Your site breaks on phones, losing over 60% of potential customers.' },
    { title: 'No automation', desc: 'Your team wastes hours on manual tasks that could be handled by AI.' },
    { title: 'No conversion strategy', desc: "Looks nice, but doesn't actually generate leads or sales." },
    { title: 'No deployment discipline', desc: 'Spaghetti code that breaks in production and is hard to scale.' },
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
            Most websites look nice. <br/><span className="text-gray-500">Few actually work.</span>
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
