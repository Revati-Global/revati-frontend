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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-[#F2F1F5]">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
                Corporate Headquarters & Center of Excellence
              </span>
              <h2 className="text-3xl font-extrabold text-[#35313B] font-heading">
                Kolkata Engineering Hub
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating out of PS Srijan Corporate Park, Sector V, Salt Lake, Kolkata, our central engineering management directs turnkey projects, boiler manufacturing partnerships, and precision cleanroom HVAC commissions across India and overseas.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-[#D9DDE3] shadow-md">
                <Image
                  src="/images/img/about/industry-2.jpg"
                  alt="Kolkata Engineering Center"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
              Quality Assurance
            </span>
            <h2 className="text-3xl font-extrabold text-[#35313B] font-heading">
              Engineering Principles & Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              Every system engineered and commissioned by Revati Global adheres to the highest parameters of industrial safety and thermal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F2F1F5] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#645394]" />
              <h4 className="font-bold text-sm text-[#35313B]">Turnkey Execution</h4>
              <p className="text-xs text-slate-500">Design, procurement, fabrication, and rigorous on-site commissioning.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F2F1F5] space-y-2">
              <Award className="w-6 h-6 text-[#645394]" />
              <h4 className="font-bold text-sm text-[#35313B]">Energy Optimization</h4>
              <p className="text-xs text-slate-500">Waste heat recovery loops and high-COP heat pump integrations.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F2F1F5] space-y-2">
              <Factory className="w-6 h-6 text-[#645394]" />
              <h4 className="font-bold text-sm text-[#35313B]">Industrial Equipment</h4>
              <p className="text-xs text-slate-500">High-efficiency boilers, thermic fluid heaters, and precision hydronics.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F2F1F5] space-y-2">
              <Users className="w-6 h-6 text-[#645394]" />
              <h4 className="font-bold text-sm text-[#35313B]">Pan-India Support</h4>
              <p className="text-xs text-slate-500">Kolkata engineering hub delivering prompt technical lifecycle service.</p>
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
