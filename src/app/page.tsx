"use client";
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// Dynamically import below-the-fold components (Code Splitting / Lazy Loading)
// ssr: true ensures the HTML is pre-rendered on the server for SEO, but JS is split and lazily loaded on the client.
const ProblemSection = dynamic(() => import('@/components/ProblemSection'), { ssr: true });
const SolutionSection = dynamic(() => import('@/components/SolutionSection'), { ssr: true });
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), { ssr: true });
const CaseStudySection = dynamic(() => import('@/components/CaseStudySection'), { ssr: true });
const ProcessSection = dynamic(() => import('@/components/ProcessSection'), { ssr: true });
const TechStackSection = dynamic(() => import('@/components/TechStackSection'), { ssr: true });
const PricingSection = dynamic(() => import('@/components/PricingSection'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/FAQSection'), { ssr: true });
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const ContactWidget = dynamic(() => import('@/components/ContactWidget'), { ssr: true });

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