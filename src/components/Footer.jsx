import React from 'react';
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
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img
                src={logoWhite}
                alt={BRAND.name}
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-sm font-medium text-slate-300">
              {BRAND.fullName}
            </p>
            <p className="text-xs text-slate-400">
              {BRAND.tagline}
            </p>
          </div>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm" aria-label="Footer Navigation">
            <button
              onClick={() => scrollTo('services')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollTo('who-we-help')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Who We Help
            </button>
            <button
              onClick={() => scrollTo('approach')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('consultation')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

        </div>

        {/* Bottom Bar: Copyright notice & positioning note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {BRAND.fullName}. All rights reserved.
          </p>
          <p className="text-slate-400">
            Performance Marketing & Digital Creative Agency
          </p>
        </div>

      </div>
    </footer>
  );
}
