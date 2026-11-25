import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, Users, CheckCircle2, Factory, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Modern Engineering Excellence',
  description: 'Learn about Revati Global, our industrial thermal engineering capabilities, quality standards, and leadership.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-[#F2F1F5] py-16 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            Engineering Precision. Reliable Delivery.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Revati Global is a premier engineering solutions company specializing in advanced thermal thermodynamics, high-lift heat pumps, cleanroom environmental HVAC, and critical process fluid piping networks.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D9DDE3] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#645394]/10 text-[#645394] flex items-center justify-center font-bold text-lg font-mono">
              01
            </div>
            <h3 className="text-2xl font-extrabold text-[#35313B] font-heading">
              Our Engineering Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To decarbonize and optimize industrial heating and cleanroom environments through mathematically verified thermodynamic engineering, robust equipment design, and flawless turnkey commissioning.
            </p>
          </div>

          <div className="bg-[#35313B] text-white p-8 sm:p-10 rounded-3xl border border-[#524378] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#645394] flex items-center justify-center font-bold text-lg font-mono">
              02
            </div>
            <h3 className="text-2xl font-extrabold text-white font-heading">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-[#D9DDE3] leading-relaxed">
              To be the most trusted engineering partner for industrial thermal processes and critical environment manufacturing across India and global high-precision export hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards & Accreditations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D9DDE3] shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
              Quality Assurance
            </span>
            <h2 className="text-3xl font-extrabold text-[#35313B] font-heading">
              Certified Compliance & Stringent Codes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              Every system manufactured and installed by Revati Global complies with statutory manufacturing codes and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F2F1F5] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#645394]" />
              <h4 className="font-bold text-sm text-[#35313B]">ISO 9001:2015</h4>
              <p className="text-xs text-slate-500">Quality Management System certified for design, fabrication, and site testing.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F2F1F5] space-y-2">
              <Award className="w-6 h-6 text-[#645394]" />
              <h4 className="font-bold text-sm text-[#35313B]">ASME Section VIII</h4>
              <p className="text-xs text-slate-500">Pressure vessel welding and radiography testing protocol compliance.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F2F1F5] space-y-2">
              <Factory className="w-6 h-6 text-[#645394]" />
              <h4 className="font-bold text-sm text-[#35313B]">Indian Boiler Regulations (IBR)</h4>
              <p className="text-xs text-slate-500">Approved materials, certified welders, and statutory inspector sign-offs.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F2F1F5] space-y-2">
              <Users className="w-6 h-6 text-[#645394]" />
              <h4 className="font-bold text-sm text-[#35313B]">ISO 14644 Validation</h4>
              <p className="text-xs text-slate-500">Cleanroom particle counting, HEPA filter integrity, and recovery testing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#645394] rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">Partner with Revati Global</h3>
            <p className="text-xs text-white/80">Speak with our senior engineering team about your upcoming thermal project.</p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-white text-[#645394] hover:bg-[#F2F1F5] font-bold text-xs uppercase tracking-wider transition shadow-sm shrink-0"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
