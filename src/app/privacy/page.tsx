import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Revati Global',
  description: 'Privacy Policy and data governance standards of Revati Global.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#35313B] font-heading border-b border-[#D9DDE3] pb-4">
        Privacy Policy
      </h1>
      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
        <p>
          At <strong>Revati Global</strong>, we respect your corporate privacy and are committed to safeguarding the personal and commercial information you share when requesting engineering proposals, sizing sheets, or consulting services.
        </p>
        <h3 className="text-base font-bold text-[#35313B] pt-2">1. Information Collection</h3>
        <p>
          We collect technical requirements, contact coordinates (name, email, phone number, and corporate identity) submitted voluntarily via our RFQ forms or email channels. We do not sell, rent, or lease customer contact information to third parties.
        </p>
        <h3 className="text-base font-bold text-[#35313B] pt-2">2. Use of Information</h3>
        <p>
          The information gathered is exclusively deployed to analyze engineering feasibility, furnish technical sizing quotations, fulfill statutory contractual agreements, and supply relevant technical product documentation.
        </p>
        <h3 className="text-base font-bold text-[#35313B] pt-2">3. Security Standards</h3>
        <p>
          All data transmitted via our web forms utilizes transport layer security (TLS) encryption. Systems are protected by strict access controls and monitored for unauthorized access.
        </p>
      </div>
    </div>
  );
}
