import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Send, 
  Phone, 
  Mail, 
  Building2, 
  User, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { BRAND } from '../config/brand';

const BUSINESS_TYPES = [
  'Local Shop / Retail Store',
  'Small Business / Service Provider',
  'Growing Regional Brand',
  'E-commerce / D2C Store',
  'Personal Brand / Creator',
  'Other / Enterprise',
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '',
    selectedServices: [],
    challenge: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Listen for service selection triggers from other sections
  useEffect(() => {
    const handleServiceSelect = (e) => {
      const serviceTitle = e.detail;
      if (serviceTitle) {
        setFormData((prev) => {
          if (!prev.selectedServices.includes(serviceTitle)) {
            return {
              ...prev,
              selectedServices: [...prev.selectedServices, serviceTitle],
            };
          }
          return prev;
        });
      }
    };
    window.addEventListener('select-service', handleServiceSelect);
    return () => window.removeEventListener('select-service', handleServiceSelect);
  }, []);

  const toggleService = (title) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(title);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== title)
          : [...prev.selectedServices, title],
      };
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.businessName.trim() || formData.businessName.trim().length < 2) {
      errs.businessName = 'Please enter your business or company name.';
    }
    // Phone validation (7-15 digits, optional + prefix)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,14}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone or WhatsApp number is required.';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Please enter a valid phone or WhatsApp number.';
    }

    // Email is optional, but if entered, must be valid
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const endpoint = import.meta.env.VITE_CONSULTATION_ENDPOINT;

    try {
      if (endpoint) {
        // Real configured endpoint (e.g. Formspree, webhook, custom API)
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit consultation enquiry. Please try again.');
        }
      } else {
        // Clean client-side persistence fallback when no backend is configured yet
        await new Promise((resolve) => setTimeout(resolve, 800));
        try {
          const existing = JSON.parse(localStorage.getItem('uplift_consultation_enquiries') || '[]');
          existing.push({
            ...formData,
            submittedAt: new Date().toISOString(),
          });
          localStorage.setItem('uplift_consultation_enquiries', JSON.stringify(existing));
        } catch {
          // ignore localStorage restrictions in strict contexts
        }
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessName: '',
      phone: '',
      email: '',
      businessType: '',
      selectedServices: [],
      challenge: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <section id="consultation" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & What to Expect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              <span>Primary Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Book a Free Consultation
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us about your business and what you want to achieve. We'll discuss your goals and explore a suitable marketing approach.
            </p>

            {/* What Happens Next Card */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                What to expect during our call:
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009933] mt-2 shrink-0" />
                  <span>Review of your target audience and current marketing channels.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009933] mt-2 shrink-0" />
                  <span>Honest discussion on suitable ad platforms (Meta, Google, or organic content).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009933] mt-2 shrink-0" />
                  <span>No high-pressure sales tactics—just practical strategy and transparent pricing.</span>
                </li>
              </ul>
            </div>

            {/* Confidentiality Notice */}
            <p className="text-xs text-slate-400">
              Your information is strictly kept confidential and only used to respond to your consultation request.
            </p>
          </div>

          {/* Right Column: Functional Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.fullName}!
                  </h3>
                  
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your consultation enquiry for <strong className="text-slate-800">{formData.businessName}</strong>. Our team will review your requirements and reach out via phone/WhatsApp at <strong className="text-slate-800">{formData.phone}</strong> shortly.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {submitError && (
                    <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. John Doe"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border ${
                            errors.fullName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                          } focus:outline-none focus:ring-3 transition-colors text-slate-900`}
                          aria-invalid={errors.fullName ? 'true' : 'false'}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Acme Retail or Studio"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border ${
                          errors.businessName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                        } focus:outline-none focus:ring-3 transition-colors text-slate-900`}
                        aria-invalid={errors.businessName ? 'true' : 'false'}
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-xs text-rose-500">{errors.businessName}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone / WhatsApp (Required) & Email (Optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone or WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border ${
                          errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                        } focus:outline-none focus:ring-3 transition-colors text-slate-900`}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. you@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border ${
                          errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                        } focus:outline-none focus:ring-3 transition-colors text-slate-900`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Business Type (Optional Selection) */}
                  <div>
                    <label htmlFor="businessType" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Business Type <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-slate-200 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100 focus:outline-none transition-colors text-slate-800"
                    >
                      <option value="">Select your business type...</option>
                      {BUSINESS_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Services of Interest (Multi-select) */}
                  <div>
                    <span className="block text-xs font-semibold text-slate-700 mb-2">
                      Services of Interest <span className="text-slate-400 font-normal">(select all that apply)</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {BRAND.services.map((service) => {
                        const isSelected = formData.selectedServices.includes(service.title);
                        return (
                          <button
                            type="button"
                            key={service.id}
                            onClick={() => toggleService(service.title)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-[#009933] text-white border-[#009933] shadow-2xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {service.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Current Marketing Challenge or Goal */}
                  <div>
                    <label htmlFor="challenge" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Current Marketing Challenge or Business Goal <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={3}
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      placeholder="Briefly describe what you want to achieve or what issues you are currently facing with your marketing..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-slate-200 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100 focus:outline-none transition-colors text-slate-900 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-[#009933] hover:bg-[#007A29] disabled:bg-emerald-400 text-white font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-sm hover:shadow-emerald-600/25 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Consultation Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Book a Free Consultation</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
