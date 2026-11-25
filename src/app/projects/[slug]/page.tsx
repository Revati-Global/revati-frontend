import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Zap, ShieldCheck } from 'lucide-react';
import { getProjects, getProjectBySlug } from '@/lib/api';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const proj = await getProjectBySlug(params.slug);
  if (!proj) return { title: 'Project Not Found' };
  return {
    title: `${proj.title} | Projects & References`,
    description: proj.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-14 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378] mb-2 font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden border border-[#D9DDE3] shadow-md bg-slate-100">
              <Image
                src={project.image || 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop'}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#D9DDE3] shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-[#35313B] font-heading">
                Commission Scope & Performance Overview
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {project.description || project.summary}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-[#D9DDE3] shadow-sm space-y-6 sticky top-28">
              <h3 className="text-lg font-bold text-[#35313B] font-heading border-b border-[#D9DDE3] pb-3">
                Project Metrics
              </h3>
              <div className="space-y-4 text-xs">
                {project.client && (
                  <div>
                    <span className="text-slate-500 block">Client</span>
                    <span className="font-bold text-[#35313B] text-sm">{project.client}</span>
                  </div>
                )}
                {project.location && (
                  <div>
                    <span className="text-slate-500 block">Facility Location</span>
                    <span className="font-bold text-[#35313B]">{project.location}</span>
                  </div>
                )}
                {project.capacity && (
                  <div>
                    <span className="text-slate-500 block">Installed Thermal Capacity</span>
                    <span className="font-bold text-[#645394] font-mono text-sm">{project.capacity}</span>
                  </div>
                )}
                {project.year && (
                  <div>
                    <span className="text-slate-500 block">Commissioning Year</span>
                    <span className="font-bold text-[#35313B] font-mono">{project.year}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#D9DDE3]">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
