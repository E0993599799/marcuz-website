"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CaseStudySection = () => {
  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            From scattered idea to <br/><span className="text-gradient">launch-ready system</span>
          </motion.h2>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 bg-[#080B12]/80 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-cyan w-max mb-6">
                CASE STUDY
              </div>
              <h3 className="text-3xl font-bold mb-6">AI-Powered SaaS Platform Transformation</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-gray-300">A complex legacy system that was hard to maintain, slow to load, and had no automated user onboarding.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Strategy & Build</h4>
                  <p className="text-gray-300">Completely rebuilt the frontend using Next.js, integrated OpenAI for smart user queries, and set up zero-downtime Vercel deployments.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-accent-cyan">7-day</div>
                  <div className="text-xs text-gray-400 mt-1">Prototype Delivery</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-accent-violet">100%</div>
                  <div className="text-xs text-gray-400 mt-1">Deployment Ready</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto border-l border-white/10">
              <img src="/assets/marcuxz-before-after.png" alt="Before and After Redesign" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
