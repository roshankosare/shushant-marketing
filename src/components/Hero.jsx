import React from 'react';
import { ArrowUpRight, ArrowDown, Target, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../config/brand';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009933] animate-pulse" />
              <span>{BRAND.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {BRAND.tagline}
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {BRAND.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('consultation')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#009933] hover:bg-[#007A29] text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-emerald-600/25 active:scale-[0.99] cursor-pointer"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Supporting Line / Pillars */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                {BRAND.subline}
              </p>
            </div>

          </div>

          {/* Right Column: Clean Marketing Strategy & Creative Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-sm">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#009933]" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Growth Framework</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100/70 border border-emerald-200/60 px-2 py-0.5 rounded font-medium">
                  Strategy-Led
                </span>
              </div>

              {/* Framework Workflow Preview */}
              <div className="space-y-3.5 pt-5">
                
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#009933] shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Target Audience & Intent</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Identifying exact buyer profiles on Meta & Google who are ready to engage.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#009933] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Creative Hook & Messaging</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Designing thumb-stopping ad creatives, short-form reels, and clear offers.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#009933] shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Optimization & Review</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Continuous campaign adjustments based on real enquiries and verifiable data.</p>
                  </div>
                </div>

              </div>

              {/* Card Footer Note */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span>Built for ambitious businesses</span>
                <span className="font-medium text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009933]" /> Direct execution
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
