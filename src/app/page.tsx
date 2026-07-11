"use client";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudySection from '@/components/CaseStudySection';
import ProcessSection from '@/components/ProcessSection';
import TechStackSection from '@/components/TechStackSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ContactWidget from '@/components/ContactWidget';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background glow effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-cyan/10 blur-[120px] animate-float-1" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-accent-violet/10 blur-[150px] animate-float-2" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] rounded-full bg-accent-lime/5 blur-[120px] animate-float-3" />
      </div>

      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <CaseStudySection />
      <ProcessSection />
      <TechStackSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <ContactWidget />
    </main>
  );
}
