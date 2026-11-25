import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Flame,
  Wind,
  CheckCircle2,
  Factory,
  Building,
  Award,
  ChevronRight,
  Clock,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { getSolutions, getApplications, getProducts } from '@/lib/api';

export default async function HomePage() {
  const [solutions, applications, products] = await Promise.all([
    getSolutions(),
    getApplications(),
    getProducts()
  ]);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F2F1F5] via-white to-white pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-[#D9DDE3]">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D9DDE3_1px,transparent_1px),linear-gradient(to_bottom,#D9DDE3_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#645394]/10 border border-[#645394]/25 text-[#645394] text-xs font-bold font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#645394]" />
                <span>Modern Engineering &bull; Reliable Solutions</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#35313B] font-heading tracking-tight leading-[1.12]">
                Industrial Thermal & Cleanroom HVAC Engineering.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                Revati Global engineers cutting-edge process heating, high-temperature industrial heat pumps, cleanroom climate validation, and turnkey thermal fluid piping networks.
              </p>

              {/* CTA Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>Request Engineering Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/solutions"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#D9DDE3] bg-white hover:bg-[#F2F1F5] text-[#35313B] text-xs sm:text-sm font-bold transition-all shadow-sm"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>

              {/* Trust markers */}
              <div className="pt-6 border-t border-[#D9DDE3] flex flex-wrap items-center gap-6 text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#645394]" />
                  ISO 9001:2015 Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#645394]" />
                  ASME & IBR Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#645394]" />
                  Pan-India & Global Delivery
                </span>
              </div>
            </div>

            {/* Visual Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#D9DDE3] shadow-2xl bg-white p-2">
                <div className="relative h-96 sm:h-[420px] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop"
                    alt="Industrial Heat Pump Facility"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="px-2.5 py-1 rounded bg-[#645394] text-[10px] font-mono font-bold uppercase tracking-wider">
                      Flagship Commission
                    </span>
                    <h3 className="text-lg font-bold font-heading">
                      1.2 MW Industrial Heat Pump Retrofit
                    </h3>
                    <p className="text-xs text-[#D9DDE3] line-clamp-2">
                      Delivering continuous 85°C process water with 62% energy cost savings over diesel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#35313B] text-white rounded-3xl p-8 sm:p-12 border border-[#524378] shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="space-y-1 pt-4 lg:pt-0">
              <span className="text-3xl sm:text-4xl font-extrabold font-tech text-[#645394] block">
                250+ MW
              </span>
              <p className="text-xs text-[#D9DDE3] font-medium">Thermal Capacity Installed</p>
            </div>
            <div className="space-y-1 pt-4 lg:pt-0 lg:pl-8">
              <span className="text-3xl sm:text-4xl font-extrabold font-tech text-[#645394] block">
                180+
              </span>
              <p className="text-xs text-[#D9DDE3] font-medium">Industrial Plants Commissioned</p>
            </div>
            <div className="space-y-1 pt-4 lg:pt-0 lg:pl-8">
              <span className="text-3xl sm:text-4xl font-extrabold font-tech text-[#645394] block">
                Up to 4.2
              </span>
              <p className="text-xs text-[#D9DDE3] font-medium">Peak Heat Pump COP</p>
            </div>
            <div className="space-y-1 pt-4 lg:pt-0 lg:pl-8">
              <span className="text-3xl sm:text-4xl font-extrabold font-tech text-[#645394] block">
                99.8%
              </span>
              <p className="text-xs text-[#D9DDE3] font-medium">Commissioned System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ENGINEERING SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35313B] font-heading">
              Our Turnkey Engineering Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              Engineered for maximum thermal efficiency, regulatory compliance, and non-stop continuous production cycles.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378] transition"
          >
            <span>View all engineering solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.slice(0, 4).map((sol) => (
            <div
              key={sol.id}
              className="group bg-white rounded-2xl border border-[#D9DDE3] hover:border-[#645394] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={sol.image || 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop'}
                  alt={sol.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-sm text-[#35313B] group-hover:text-[#645394] transition-colors font-heading">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {sol.summary}
                  </p>
                </div>
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#645394] hover:text-[#524378] pt-2"
                >
                  <span>Technical Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY REVATI GLOBAL */}
      <section className="bg-[#F2F1F5] py-20 border-y border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
              The Engineering Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35313B] font-heading">
              Why Industry Leaders Trust Revati Global
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We eliminate technical compromise by delivering integrated, validated thermal and cleanroom mechanical packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#D9DDE3] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#645394]/10 text-[#645394] flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#35313B] font-heading">
                Decarbonized Thermal Efficiency
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replaces high-emission fuel boilers with advanced heat pump thermal cascades, reducing process energy costs by up to 65%.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#D9DDE3] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#645394]/10 text-[#645394] flex items-center justify-center">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#35313B] font-heading">
                Cleanroom Airflow Precision
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ISO 14644 certified Class 5 through 8 environmental compliance with sub-micron HEPA/ULPA filtration and precise humidity regulation.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#D9DDE3] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#645394]/10 text-[#645394] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#35313B] font-heading">
                Single-Point Turnkey Ownership
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From hydraulic FEA simulation to on-site ASME welding, validation IQ/OQ protocols, and lifetime preventive maintenance telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#645394] font-mono">
              Sector Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35313B] font-heading">
              Industries We Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              Engineered installations tailored to rigorous sector-specific regulations and continuous uptime demands.
            </p>
          </div>
          <Link
            href="/applications"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#645394] hover:text-[#524378] transition"
          >
            <span>View all sectors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.slice(0, 6).map((app) => (
            <div
              key={app.id}
              className="group relative h-64 rounded-2xl overflow-hidden border border-[#D9DDE3] shadow-sm"
            >
              <Image
                src={app.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'}
                alt={app.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                <h3 className="font-bold text-base font-heading">
                  {app.title}
                </h3>
                <p className="text-xs text-[#D9DDE3] line-clamp-2">
                  {app.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. QUOTE CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#645394] rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-mono uppercase tracking-wider font-bold">
              Engineering Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Ready to Upgrade Your Industrial Thermal Infrastructure?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Connect with our senior mechanical and HVAC applications engineers for a technical feasibility assessment and detailed thermal load analysis.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white text-[#645394] hover:bg-[#F2F1F5] font-bold text-xs uppercase tracking-wider transition shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>Request a Detailed Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919876543210"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
