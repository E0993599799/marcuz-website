import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#05070D] pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center font-bold text-white">M</div>
              <span className="font-bold text-xl tracking-tight text-white">Marcuxz Web</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Premium digital studio building high-converting websites, AI-powered web apps, automation workflows, and deployment-ready business systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">AI Integrations</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Business Automation</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Cloud Deployment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#work" className="hover:text-accent-violet transition-colors">Our Work</a></li>
              <li><a href="#pricing" className="hover:text-accent-violet transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-accent-violet transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent-violet transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Marcuxz Web. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
