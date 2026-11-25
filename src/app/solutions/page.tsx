import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { getSolutions } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Solutions | Revati Global',
  description: 'Explore turnkey industrial heating, heat pumps, cleanroom HVAC, and thermal piping solutions engineered by Revati Global.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SolutionsPage() {
  const solutions = await getSolutions();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-16 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
            Turnkey Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            Engineering Solutions & Systems
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Custom engineered thermal systems and precision environment infrastructure for demanding industrial facilities.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-3xl border border-[#D9DDE3] hover:border-[#645394] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={sol.image || '/images/img/services/service1.jpg'}
                  alt={sol.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-[#35313B] font-heading">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.summary}
                  </p>

                  {sol.features && sol.features.length > 0 && (
                    <div className="pt-2 space-y-1.5">
                      {sol.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#645394] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#D9DDE3] flex items-center justify-between">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                  >
                    <span>Technical Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#645394] hover:text-[#524378]"
                  >
                    Request Quote &rarr;
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
