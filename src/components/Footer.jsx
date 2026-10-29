import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import logoWhite from '../assets/logo-white.svg';
import { BRAND } from '../config/brand';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-14 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoWhite}
                alt={BRAND.name}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-slate-200">
              {BRAND.fullName}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
            <p className="text-xs font-mono text-emerald-400/90 pt-1">
              {BRAND.tagline}
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2 text-sm" aria-label="Footer Navigation">
              <button
                onClick={() => scrollTo('services')}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo('work')}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollTo('who-we-help')}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Who We Help
              </button>
              <button
                onClick={() => scrollTo('approach')}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Our Approach
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollTo('consultation')}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Book a Consultation
              </button>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Contact Information
            </h4>
            <p className="text-xs text-slate-400">
              Reach out directly for enquiries, collaborations, or marketing consultations.
            </p>

            <div className="space-y-3 pt-2">
              {/* Phone Link */}
              <a
                href={`tel:${BRAND.contact.phoneRaw}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-950/40 group-hover:border-emerald-500/40 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Call or WhatsApp</span>
                  <span className="text-sm font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {BRAND.contact.phone}
                  </span>
                </div>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-950/40 group-hover:border-emerald-500/40 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 block font-medium">Email Us</span>
                  <span className="text-sm font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors break-all">
                    {BRAND.contact.email}
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright notice & positioning note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {BRAND.fullName}. All rights reserved.
          </p>
          <p className="text-slate-500">
            Performance Marketing & Digital Creative Agency
          </p>
        </div>

      </div>
    </footer>
  );
}
