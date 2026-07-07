"use client";
import React from 'react';
import { Layout, Cpu, Workflow, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
  const solutions = [
    {
      title: 'Premium Landing Pages',
      desc: 'High-converting, beautiful pages designed to turn visitors into customers.',
      icon: <Layout className="w-8 h-8 text-accent-cyan" />,
      color: 'bg-accent-cyan/10 border-accent-cyan/20'
    },
    {
      title: 'AI Web Apps',
      desc: 'Intelligent web applications powered by OpenAI and Gemini for smart user experiences.',
      icon: <Cpu className="w-8 h-8 text-accent-violet" />,
      color: 'bg-accent-violet/10 border-accent-violet/20'
    },
    {
      title: 'Business Automation',
      desc: 'Connect your apps, streamline data flow, and let bots do the repetitive work.',
      icon: <Workflow className="w-8 h-8 text-accent-lime" />,
      color: 'bg-accent-lime/10 border-accent-lime/20'
    },
    {
      title: 'Deployment & Debugging',
      desc: 'Enterprise-grade Vercel deployments, CI/CD pipelines, and zero-downtime architecture.',
      icon: <Terminal className="w-8 h-8 text-white" />,
      color: 'bg-white/5 border-white/10'
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent-violet/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Marcuxz turns your idea into a <span className="text-gradient">working digital system.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${solution.color} bg-[#080B12]/80 backdrop-blur-xl flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="p-4 rounded-2xl bg-[#05070D]">
                {solution.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed">{solution.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
