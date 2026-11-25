import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { getBlogs, getBlogBySlug } from '@/lib/api';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogBySlug(params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: `${post.title} | Technical Blog`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-14 border-b border-[#D9DDE3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378] mb-2 font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Technical Blog</span>
          </Link>
          <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
            {post.published_at && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#645394]" />
                {post.published_at}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#645394]" />
              {post.author || 'Revati Global Engineering Team'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35313B] font-heading leading-tight">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {post.summary}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="relative h-96 w-full rounded-3xl overflow-hidden border border-[#D9DDE3] shadow-md bg-slate-100">
          <Image
            src={post.image || 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop'}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#D9DDE3] shadow-sm text-slate-800 leading-relaxed text-sm sm:text-base space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#35313B] font-heading">
              Thermodynamic Foundations & Practical Engineering
            </h2>
            <p>
              Industrial process heating constitutes over 60% of manufacturing energy demand across the food, beverage, chemical, and pharmaceutical sectors. Conventional heating regimes rely overwhelmingly on combustion boilers firing diesel, furnace oil, or natural gas—introducing persistent operational carbon emissions and steep thermal fuel penalties.
            </p>
            <p>
              By leveraging advanced vapor compression cycles and environmentally compliant low-GWP refrigerants such as R1234ze and R513A, modern industrial heat pumps capture waste heat from cooling loops, condensers, or ambient air, and upgrade this energy to supply continuous hot water up to 90°C.
            </p>
          </div>

          <div className="p-6 bg-[#F2F1F5] rounded-2xl border-l-4 border-[#645394] space-y-2">
            <h4 className="font-bold text-[#35313B] text-sm">Key Engineering Rule</h4>
            <p className="text-xs text-slate-700">
              For every 1 kW of electrical energy supplied to an inverter screw compressor, a well-engineered industrial heat pump delivers 3.5 to 4.2 kW of usable process thermal energy—slashing carbon output while preserving plant reliability.
            </p>
          </div>
        </div>

        <div className="pt-6 flex justify-between items-center border-t border-[#D9DDE3]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#645394]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Articles</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider"
          >
            <span>Discuss with Engineers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </article>
    </div>
  );
}
