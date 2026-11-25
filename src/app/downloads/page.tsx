import React from 'react';
import Link from 'next/link';
import { Download, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { getDownloads } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brochures & Technical Datasheets | Revati Global',
  description: 'Download official engineering brochures and technical datasheets for Revati Global systems.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DownloadsPage() {
  const downloads = await getDownloads();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-16 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
            Documentation Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            Brochures & Technical Datasheets
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Access certified engineering specifications, thermodynamic curves, equipment dimensions, and corporate compliance literature.
          </p>
        </div>
      </section>

      {/* Downloads List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-7 border border-[#D9DDE3] hover:border-[#645394] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                {doc.category && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#645394] font-mono block">
                    {doc.category}
                  </span>
                )}
                <h3 className="font-bold text-base text-[#35313B] font-heading">
                  {doc.title}
                </h3>
                {doc.description && (
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {doc.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#D9DDE3] flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono font-medium">
                  {doc.file_size || 'PDF Document'}
                </span>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
