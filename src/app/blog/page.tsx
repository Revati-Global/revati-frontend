import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { getBlogs } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Engineering Blog | Revati Global',
  description: 'In-depth engineering articles on industrial decarbonization, heat pumps, cleanroom airflow, and thermal energy recovery.',
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-16 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
            Insights & Research
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            Technical Engineering Blog
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Technical analysis, calculation methodologies, and thermodynamic whitepapers authored by Revati Global mechanical and HVAC engineers.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-[#D9DDE3] hover:border-[#645394] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={post.image || 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop'}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-500 font-mono">
                    {post.published_at && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#645394]" />
                        {post.published_at}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#645394]" />
                      {post.author || 'Engineering Team'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#35313B] group-hover:text-[#645394] transition-colors font-heading leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9DDE3]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378]"
                  >
                    <span>Read Technical Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
