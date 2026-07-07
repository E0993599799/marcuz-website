"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TechStackSection = () => {
  const stack = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 
    'Supabase', 'PostgreSQL', 'Vercel', 'OpenAI', 'Gemini API', 
    'n8n', 'LINE API', 'Telegram Bot', 'GitHub'
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">Powered by modern infrastructure</h3>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {stack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
