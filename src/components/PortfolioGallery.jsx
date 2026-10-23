import React, { useState } from 'react';
import { Eye, X, ArrowUpRight, Filter } from 'lucide-react';
import heroImg from '../assets/hero-campaign.jpg';
import socialImg from '../assets/project-social.jpg';
import productImg from '../assets/project-product.jpg';
import lifestyleImg from '../assets/project-lifestyle.jpg';

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Performance Ad Creative & Offer Hook',
      category: 'ads',
      categoryLabel: 'Advertising Creative',
      image: heroImg,
      type: 'Sample Campaign Concept',
      desc: 'High-contrast visual messaging engineered for paid social ads. Focuses on immediate value communication and clear call-to-action hierarchy.',
      deliverables: ['Meta Feed Creative', 'Story Format (9:16)', 'Headline Copy Variations'],
    },
    {
      id: 2,
      title: 'Social Media Grid & Brand Content Strategy',
      category: 'social',
      categoryLabel: 'Social Media',
      image: socialImg,
      type: 'Sample Content Concept',
      desc: 'Consistent aesthetic layout designed to build brand authority, educate audiences on core services, and turn organic visitors into active enquiries.',
      deliverables: ['Carousel Post Layouts', 'Engagement Prompts', 'Visual Identity Guidelines'],
    },
    {
      id: 3,
      title: 'Minimalist Product & Brand Visual Styling',
      category: 'brand',
      categoryLabel: 'Brand & Graphic Design',
      image: productImg,
      type: 'Creative Design Concept',
      desc: 'Refined product framing and brand communication focusing on clean lines, balanced whitespace, and premium aesthetic perception.',
      deliverables: ['Product Hero Assets', 'Promotional Banners', 'Brand Palette & Typography'],
    },
    {
      id: 4,
      title: 'Lifestyle Brand & Promotional Campaign',
      category: 'brand',
      categoryLabel: 'Brand & Graphic Design',
      image: lifestyleImg,
      type: 'Promotional Campaign Sample',
      desc: 'Story-driven brand communication demonstrating real-world product usage and relatable customer moments.',
      deliverables: ['Campaign Key Visuals', 'Digital Display Assets', 'Social Campaign Headers'],
    },
    {
      id: 5,
      title: 'Conversion-Focused Landing Page Structure',
      category: 'web',
      categoryLabel: 'Website & Landing Pages',
      image: heroImg,
      type: 'Web Layout Sample',
      desc: 'Fast-loading, mobile-first page layout structured with a frictionless enquiry flow, benefit-driven copy blocks, and accessible consultation booking.',
      deliverables: ['Responsive Web Layout', 'Mobile Optimization', 'Lead Capture Architecture'],
    },
    {
      id: 6,
      title: 'Short-Form Video & Reels Hook Framework',
      category: 'social',
      categoryLabel: 'Reels & Video',
      image: socialImg,
      type: 'Video Format Concept',
      desc: 'Engaging first-3-seconds hook structure combined with readable kinetic captions and brand-aligned video pacing.',
      deliverables: ['Video Hook Scripting', 'Kinetic Caption Styling', 'Platform Sizing & Cuts'],
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Creative' },
    { id: 'ads', label: 'Advertising Creatives' },
    { id: 'social', label: 'Social Media & Video' },
    { id: 'brand', label: 'Brand & Design' },
    { id: 'web', label: 'Web & Landing Pages' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const scrollToConsultation = () => {
    setSelectedItem(null);
    const el = document.getElementById('consultation');
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 uppercase tracking-wider mb-3">
            <span>Portfolio & Creative Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Creative Work With a Purpose
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore the creative thinking behind our advertising, design, and digital marketing work.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:border-purple-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/90 text-slate-900 text-xs font-semibold backdrop-blur-xs shadow-sm">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Concept</span>
                  </span>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold text-slate-800 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {item.type}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-purple-600">
                  <span>Explore Thinking</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine sample work */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Work samples showcase creative strategy, copywriting, visual structure, and format standards created for client campaigns.
          </p>
        </div>

      </div>

      {/* Modal Detail View */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-slate-100">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-semibold text-slate-900 bg-white/95 px-3 py-1 rounded-md shadow-sm">
                  {selectedItem.categoryLabel}
                </span>
              </div>
            </div>

            {/* Modal Info */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold block mb-1">
                  {selectedItem.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.desc}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Key Deliverables & Execution:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {selectedItem.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Ready to develop similar creative for your business?
                </span>
                <button
                  onClick={scrollToConsultation}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Free Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
