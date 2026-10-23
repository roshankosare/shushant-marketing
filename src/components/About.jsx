import React from 'react';
import { Target, MessageSquare, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../config/brand';

export default function About() {
  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 uppercase tracking-wider">
              <span>About Uplift</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We Help Ambitious Businesses Move Forward
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {BRAND.aboutIntro}
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToConsultation}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors cursor-pointer"
              >
                <span>Schedule an introduction</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Transparent Principles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-3.5">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Strategy Before Ad Spend</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We don't believe in running ads just to spend budget. We first understand your margins, target customer, and realistic conversion goals.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-3.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Creative Execution</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ad performance lives and dies by creative quality. We craft brand-aligned visuals, sharp hooks, and clear calls-to-action tailored for each platform.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-3.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Clear, Direct Communication</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No confusing jargon or inflated metrics. You work directly with the people planning, designing, and optimizing your campaigns.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-3.5">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Continuous Learning</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  As an early-stage agency, our reputation depends on delivering genuine quality. We iterate rapidly based on measurable feedback and live performance data.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
