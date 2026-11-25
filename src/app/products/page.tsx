import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Zap, Download } from 'lucide-react';
import { getProducts } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Machinery Systems | Revati Global',
  description: 'Industrial heat pumps, air handling units, commercial water heating and thermal equipment engineered by Revati Global.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-16 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
            Equipment Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            Products & Machinery Systems
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            High-performance industrial thermal machinery, heat pumps, and modular cleanroom environmental equipment engineered for longevity and extreme efficiency.
          </p>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl border border-[#D9DDE3] hover:border-[#645394] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={prod.image || '/images/background-image.png'}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {prod.capacity && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#35313B]/90 backdrop-blur-sm text-white text-[10px] font-mono font-bold tracking-wider">
                    {prod.capacity}
                  </div>
                )}
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {prod.category_name && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#645394] font-mono block">
                      {prod.category_name}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#35313B] group-hover:text-[#645394] transition-colors font-heading">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9DDE3] flex items-center justify-between">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378]"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-slate-500 hover:text-[#645394]"
                  >
                    RFQ &rarr;
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
