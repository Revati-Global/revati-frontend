import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Factory } from 'lucide-react';
import { getApplications } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries Served | Revati Global',
  description: 'Industrial sectors and applications served by Revati Global: Pharmaceuticals, Breweries, Dairy, Food Processing, Textiles and Power.',
};

export default async function ApplicationsPage() {
  const applications = await getApplications();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-16 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
            Sector Specialization
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            Industries Served
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Custom engineered thermal systems and cleanroom architectures complying with rigorous regulatory codes across core industrial sectors.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl border border-[#D9DDE3] hover:border-[#645394] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={app.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'}
                  alt={app.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-[#35313B] font-heading">
                    {app.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {app.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9DDE3]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378]"
                  >
                    <span>Request Sector Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
