import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import WhoWeHelp from './components/WhoWeHelp';
import OurApproach from './components/OurApproach';
import PortfolioGallery from './components/PortfolioGallery';
import About from './components/About';
import ConsultationForm from './components/ConsultationForm';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-600 selection:text-white antialiased">
      {/* Header & Primary Navigation */}
      <Navbar />

      {/* Main Homepage Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Marketing Services (8 Core Capabilities) */}
        <ServicesGrid />

        {/* 3. Who We Help (5 Client Segments) */}
        <WhoWeHelp />

        {/* 4. Our Approach (4-Step Discover -> Strategize -> Execute -> Optimize) */}
        <OurApproach />

        {/* 5. Portfolio & Creative Work */}
        <PortfolioGallery />

        {/* 6. About Uplift (Honest, Early-Stage Positioning) */}
        <About />

        {/* 7. Book a Free Consultation (Primary Conversion Form) */}
        <ConsultationForm />

        {/* 8. Final Call to Action */}
        <FinalCta />
      </main>

      {/* Polished Minimalist Footer */}
      <Footer />
    </div>
  );
}
