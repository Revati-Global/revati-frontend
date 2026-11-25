import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Wrench, Download } from 'lucide-react';
import { getSolutions, getSolutionBySlug } from '@/lib/api';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const solutions = await getSolutions();
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const sol = await getSolutionBySlug(params.slug);
  if (!sol) return { title: 'Solution Not Found' };
  return {
    title: `${sol.title} | Engineering Solutions`,
    description: sol.summary,
  };
}

export default async function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = await getSolutionBySlug(params.slug);
  if (!solution) notFound();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-14 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378] mb-2 font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            {solution.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {solution.summary}
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Content Area */}
          <div className="lg:col-span-8 space-y-10">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#D9DDE3] shadow-md bg-slate-100">
              <Image
                src={solution.image || 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop'}
                alt={solution.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#D9DDE3] shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-[#35313B] font-heading">
                Engineering Scope & Design Parameters
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap space-y-4">
                {solution.description}
              </div>
            </div>

            {solution.features && solution.features.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-[#D9DDE3] shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-[#35313B] font-heading flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#645394]" />
                  Key Technical Features & Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F2F1F5] text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#645394] shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#35313B] text-white p-7 rounded-3xl border border-[#524378] shadow-lg space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono font-bold text-[#645394] tracking-wider block">
                  Project Inquiries
                </span>
                <h3 className="text-xl font-bold font-heading">
                  Request System Sizing
                </h3>
                <p className="text-xs text-[#D9DDE3] leading-relaxed">
                  Submit your thermal loads, temperature requirements, or cleanroom CFM specifications to receive an engineering feasibility review.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                >
                  <span>Request RFQ Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/downloads"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-bold transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Catalogues</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-[#D9DDE3]">
                <div className="flex items-center gap-2 font-mono">
                  <Shield className="w-4 h-4 text-[#645394]" />
                  <span>Verified Engineering Standards</span>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <Wrench className="w-4 h-4 text-[#645394]" />
                  <span>Turnkey Commissioning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
