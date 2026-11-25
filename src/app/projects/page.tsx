import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar, Zap } from 'lucide-react';
import { getProjects } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Reference Installations | Revati Global',
  description: 'Industrial reference installations and projects executed by Revati Global across pharmaceutical, chemical, and manufacturing plants.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-16 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
            Track Record
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            Projects & Reference Installations
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Real installations delivering verified energy efficiency, cleanroom climate compliance, and mission-critical reliability.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-[#D9DDE3] hover:border-[#645394] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={proj.image || 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop'}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {proj.year && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#35313B]/90 backdrop-blur-sm text-white text-[10px] font-mono font-bold tracking-wider">
                    {proj.year}
                  </div>
                )}
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {proj.client && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#645394] font-mono block">
                      Client: {proj.client}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#35313B] group-hover:text-[#645394] transition-colors font-heading">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    {proj.location && (
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#645394]" />
                        {proj.location}
                      </span>
                    )}
                    {proj.capacity && (
                      <span className="flex items-center gap-1 font-mono font-bold text-[#35313B]">
                        <Zap className="w-3.5 h-3.5 text-[#645394]" />
                        {proj.capacity}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D9DDE3]">
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378]"
                  >
                    <span>Read Commission Case Study</span>
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
