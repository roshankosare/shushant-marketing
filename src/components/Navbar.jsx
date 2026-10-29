import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.svg';
import { BRAND } from '../config/brand';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-white border-b border-slate-200 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* UPLIFT Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            aria-label={`${BRAND.fullName} Home`}
          >
            <img
              src={logo}
              alt={BRAND.name}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="Main Navigation">
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-emerald-600 transition-colors py-1 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="hover:text-emerald-600 transition-colors py-1 cursor-pointer"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('who-we-help')}
              className="hover:text-emerald-600 transition-colors py-1 cursor-pointer"
            >
              Who We Help
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="hover:text-emerald-600 transition-colors py-1 cursor-pointer"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-emerald-600 transition-colors py-1 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('consultation')}
              className="hover:text-emerald-600 transition-colors py-1 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection('consultation')}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#009933] hover:bg-[#007A29] text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-emerald-600/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Book a Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => scrollToSection('consultation')}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#009933] text-white font-semibold text-xs"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-700" aria-label="Mobile Navigation">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-600 transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('who-we-help')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-600 transition-colors"
            >
              Who We Help
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-600 transition-colors"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('consultation')}
              className="text-left py-2 border-b border-slate-100 hover:text-emerald-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('consultation')}
            className="w-full mt-2 py-3 rounded-lg bg-[#009933] hover:bg-[#007A29] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Book a Free Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
