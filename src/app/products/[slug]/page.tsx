import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Zap, Download, ShieldCheck, FileText } from 'lucide-react';
import { getProducts, getProductBySlug } from '@/lib/api';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const prod = await getProductBySlug(params.slug);
  if (!prod) return { title: 'Product Not Found' };
  return {
    title: `${prod.title} | Products & Machinery`,
    description: prod.description,
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#F2F1F5] py-14 border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378] mb-2 font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
          {product.category_name && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono block">
              {product.category_name}
            </span>
          )}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#35313B] font-heading">
            {product.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {product.description}
          </p>
        </div>
      </section>

      {/* Main Product Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden border border-[#D9DDE3] shadow-md bg-slate-100">
              <Image
                src={product.image || 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop'}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            {/* Features & Benefits */}
            {product.feature_and_benefit && (
              <div className="bg-white p-8 rounded-3xl border border-[#D9DDE3] shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-[#35313B] font-heading">
                  Features & Engineering Advantages
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {product.feature_and_benefit}
                </p>
              </div>
            )}

            {/* Specifications Key-Value Table */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="bg-white rounded-3xl border border-[#D9DDE3] shadow-sm overflow-hidden">
                <div className="p-6 bg-[#F2F1F5] border-b border-[#D9DDE3]">
                  <h3 className="text-base font-bold text-[#35313B] font-heading">
                    Technical Specifications
                  </h3>
                </div>
                <div className="divide-y divide-[#D9DDE3] text-xs">
                  {product.capacity && (
                    <div className="grid grid-cols-2 p-4">
                      <span className="font-bold text-slate-600">Rated Thermal Capacity</span>
                      <span className="text-[#35313B] font-mono font-bold">{product.capacity}</span>
                    </div>
                  )}
                  {product.power && (
                    <div className="grid grid-cols-2 p-4">
                      <span className="font-bold text-slate-600">Power & Electrical Specs</span>
                      <span className="text-[#35313B] font-mono font-bold">{product.power}</span>
                    </div>
                  )}
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="grid grid-cols-2 p-4">
                      <span className="font-bold text-slate-600">{spec.key}</span>
                      <span className="text-[#35313B] font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-[#D9DDE3] shadow-sm space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono font-bold text-[#645394] tracking-wider block">
                  Procurement & Sizing
                </span>
                <h3 className="text-xl font-bold text-[#35313B] font-heading">
                  Request Equipment Pricing
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Provide your operating capacity and process parameters for an engineering sizing sheet and quotation.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                >
                  <span>Request RFQ Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {product.catalogue && (
                  <a
                    href={product.catalogue}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#D9DDE3] hover:bg-[#F2F1F5] text-[#35313B] text-xs font-bold transition"
                  >
                    <Download className="w-4 h-4 text-[#645394]" />
                    <span>Download Datasheet PDF</span>
                  </a>
                )}
              </div>

              <div className="pt-4 border-t border-[#D9DDE3] space-y-2 text-xs text-slate-600 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#645394]" />
                  <span>Factory Tested to 1.5x Pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#645394]" />
                  <span>Full Material Test Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
