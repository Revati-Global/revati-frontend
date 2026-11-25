import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Revati Global',
  description: 'Terms of service and engineering quotation terms of Revati Global.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#35313B] font-heading border-b border-[#D9DDE3] pb-4">
        Terms of Service
      </h1>
      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
        <p>
          These Terms of Service govern your use of the Revati Global digital portal and preliminary engineering sizing documentation.
        </p>
        <h3 className="text-base font-bold text-[#35313B] pt-2">1. Engineering Calculations & Proposals</h3>
        <p>
          Technical capacities, flow calculations, and COP estimates published on this website are indicative and subject to site-specific ambient conditions, water quality analysis, and formal signed engineering contracts.
        </p>
        <h3 className="text-base font-bold text-[#35313B] pt-2">2. Intellectual Property</h3>
        <p>
          All CAD schematics, technical documentation, brochures, and brand marks displayed on this website are the intellectual property of Revati Global and may not be reproduced without written authorization.
        </p>
      </div>
    </div>
  );
}
