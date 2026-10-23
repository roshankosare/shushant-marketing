import React from 'react';
import { 
  Share2, 
  Search, 
  Layers, 
  Image as ImageIcon, 
  Video, 
  Palette, 
  Users, 
  Globe, 
  ArrowUpRight 
} from 'lucide-react';
import { BRAND } from '../config/brand';

const iconMap = {
  '01': Share2,
  '02': Search,
  '03': Layers,
  '04': ImageIcon,
  '05': Video,
  '06': Palette,
  '07': Users,
  '08': Globe,
};

export default function ServicesGrid() {
  const scrollToConsultation = (serviceTitle) => {
    const el = document.getElementById('consultation');
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // Dispatch custom event to auto-select service in form if applicable
      window.dispatchEvent(new CustomEvent('select-service', { detail: serviceTitle }));
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 uppercase tracking-wider mb-3">
            <span>Capabilities & Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Marketing That Moves Your Business Forward
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From reaching the right audience to creating content that captures attention, we help businesses build a stronger digital presence.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND.services.map((service) => {
            const IconComponent = iconMap[service.id] || Share2;

            return (
              <div
                key={service.id}
                className="group relative bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:border-purple-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Service Number & Subtle Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-purple-600 transition-colors">
                      {service.id}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-purple-50 group-hover:border-purple-100 flex items-center justify-center text-slate-500 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-900 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Consultation Link */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => scrollToConsultation(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors cursor-pointer"
                  >
                    <span>Enquire for {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
