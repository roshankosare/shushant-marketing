import React from 'react';
import { Search, Compass, Rocket, BarChart3 } from 'lucide-react';
import { BRAND } from '../config/brand';

const stepIcons = [Search, Compass, Rocket, BarChart3];

export default function OurApproach() {
  return (
    <section id="approach" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
            <span>Process & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A Clear Strategy. A Smarter Way to Grow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We adapt our framework to each client's specific business challenges and stage of growth—focusing on fundamentals, disciplined execution, and measurable feedback.
          </p>
        </div>

        {/* 4-Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {BRAND.processSteps.map((step, index) => {
            const Icon = stepIcons[index] || Search;

            return (
              <div
                key={step.step}
                className="bg-white border border-slate-200 rounded-xl p-6 relative transition-all duration-200 hover:border-emerald-400 hover:shadow-sm"
              >
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-extrabold text-[#009933] font-mono">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Step {index + 1} — {step.title}
                </h3>

                {/* Step Core Description */}
                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-3">
                  {step.desc}
                </p>

                {/* Step Practical Detail */}
                <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Adaptability Note */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            <strong className="text-slate-800">Adaptable by design:</strong> We tailor the pace, creative deliverables, and ad platforms specifically to your sales cycle and budget capacity.
          </p>
          <span className="shrink-0 font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            No rigid one-size-fits-all packages
          </span>
        </div>

      </div>
    </section>
  );
}
