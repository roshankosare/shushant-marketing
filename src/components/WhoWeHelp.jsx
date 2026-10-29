import React from 'react';
import { Store, Briefcase, TrendingUp, ShoppingBag, UserCheck, ArrowRight } from 'lucide-react';
import { BRAND } from '../config/brand';

const iconMap = [Store, Briefcase, TrendingUp, ShoppingBag, UserCheck];

export default function WhoWeHelp() {
  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="who-we-help" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
            <span>Client Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built for Businesses Ready to Grow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our approach is adapted to each client’s unique business goals, target audience, and marketing budget—whether you run a local retail store or a scaling brand.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND.clientTypes.map((client, index) => {
            const Icon = iconMap[index] || Briefcase;

            return (
              <div
                key={client.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:border-emerald-400 hover:bg-white hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#009933] mb-4 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {client.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {client.desc}
                </p>

                <div className="pt-3 border-t border-slate-200/80">
                  <span className="text-xs font-medium text-slate-500 block">
                    Focus: <span className="text-slate-700">{client.idealFor}</span>
                  </span>
                </div>
              </div>
            );
          })}

          {/* Consultation Prompt Card */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100/90 text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-3">
                Tailored Engagement
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Not Sure Which Fits You?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every business has different starting points. We will audit your current setup and advise on the most practical next step for your budget.
              </p>
            </div>

            <button
              onClick={scrollToConsultation}
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#009933] hover:text-[#007A29] cursor-pointer"
            >
              <span>Discuss Your Goals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
