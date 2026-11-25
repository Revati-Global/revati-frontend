'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { submitEnquiry } from '@/lib/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    _hp: '', // Honeypot field (hidden from users, bot trap)
  });

  const [mountTime, setMountTime] = useState<number>(Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setMountTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    // Bot trap check: if honeypot is filled, discard silently
    if (formData._hp) {
      setSubmitted(true);
      return;
    }

    try {
      setSubmitting(true);
      await submitEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        company: formData.company.trim() || undefined,
        subject: formData.subject.trim() || undefined,
        message: formData.message.trim(),
        _hp: formData._hp,
        _t: mountTime,
      });
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Submission failed. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-16 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            Request an Engineering Consultation & Quote
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Our applications and thermal systems engineering team is ready to analyze your facility thermal balance and deliver sizing proposals.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Accreditations */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#35313B] text-white p-8 sm:p-10 rounded-3xl border border-[#524378] shadow-xl space-y-6">
              <h3 className="text-2xl font-extrabold font-heading">
                Corporate Headquarters
              </h3>
              <p className="text-xs text-[#D9DDE3] leading-relaxed">
                Connect with our senior engineering team directly for technical inquiries, vendor audits, and procurement discussions.
              </p>

              <div className="space-y-4 text-xs text-[#D9DDE3] pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#645394] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Engineering & Operations Hub</span>
                    <span>Pune Industrial Corridor, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#645394] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Telephone</span>
                    <a href="tel:+919876543210" className="hover:text-white transition font-mono">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#645394] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Official RFQ Inquiries</span>
                    <a href="mailto:info@revatiglobal.com" className="hover:text-white transition">info@revatiglobal.com</a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D9DDE3]">
                  <ShieldCheck className="w-4 h-4 text-[#645394]" />
                  <span>ISO 9001:2015 Certified System Integrator</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Standard RFQ response window: Within 24-48 business hours with preliminary thermal assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D9DDE3] shadow-sm">
              {submitted ? (
                <div className="p-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#35313B] font-heading">
                    RFQ Submission Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you. A Revati Global applications engineer has been alerted and will review your specifications shortly. A confirmation has been dispatched to your email.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '', _hp: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#645394] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-[#35313B] font-heading">
                      Engineering RFQ Form
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fields marked with * are required for preliminary sizing.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot field (hidden from human users, catches spam bots) */}
                  <input
                    type="text"
                    name="_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._hp}
                    onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9DDE3] focus:border-[#645394] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="v.mehta@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9DDE3] focus:border-[#645394] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9DDE3] focus:border-[#645394] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Company / Facility Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Biotech Ltd"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9DDE3] focus:border-[#645394] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Project Subject / System of Interest</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. 500 kW High Temperature Heat Pump for Cleanroom"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9DDE3] focus:border-[#645394] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Technical Scope & Specifications *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your operating temperatures, thermal loads (kW/TR), required airflow (CFM), utility medium, or site requirements."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9DDE3] focus:border-[#645394] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider transition shadow-md disabled:opacity-50 active:scale-98"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting RFQ...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Engineering RFQ</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
