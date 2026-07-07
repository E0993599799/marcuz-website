"use client";
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080B12]/80 -z-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-violet/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card p-12 md:p-20 border-white/20 relative overflow-hidden"
        >
          {/* Decorative lines inside card */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-lime"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to turn your idea into a <span className="text-gradient">launch-ready system?</span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Stop waiting. Let's build the digital infrastructure your business needs to scale today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:hello@marcuxz.com" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Start your Marcuxz project <ArrowRight className="w-5 h-5" />
            </a>
            <button className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5" /> Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
