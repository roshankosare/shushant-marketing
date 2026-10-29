import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCta() {
  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle brand green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#009933]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Ready to Take Your Business Further?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Let's talk about your goals and find a marketing approach that fits your business.
        </p>

        <div className="pt-2">
          <button
            onClick={scrollToConsultation}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#009933] hover:bg-[#007A29] text-white font-semibold text-sm transition-all duration-150 shadow-lg shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
          >
            <span>Book a Free Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
