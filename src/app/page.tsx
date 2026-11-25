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
  PhoneCall,
  MapPin,
  Mail,
  FileText,
  Star
} from 'lucide-react';
import {
  getBanners,
  getFeatures,
  getCategories,
  getSolutions,
  getApplications,
  getProjects,
  getTestimonials
} from '@/lib/api';

export default async function HomePage() {
  const [
    banners,
    features,
    categories,
    solutions,
    applications,
    projects,
    testimonials
  ] = await Promise.all([
    getBanners(),
    getFeatures(),
    getCategories(),
    getSolutions(),
    getApplications(),
    getProjects(),
    getTestimonials()
  ]);

  const activeBanner = banners[0] || {
    title: 'Clean Energy & Industrial Heating Solutions',
    image: '/images/background-image.png'
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO BANNER SECTION (Futuretek Banner Slider Look with Revati Ultra Violet Brand) */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-[#35313B] overflow-hidden text-white">
        {/* Background Image with Dark Ultra Violet Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={activeBanner.image?.startsWith('http') ? activeBanner.image : (activeBanner.image || '/images/background-image.png')}
            alt="Revati Global Engineering Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#35313B]/95 via-[#35313B]/85 to-[#645394]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#645394]/30 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#645394]/30 border border-[#645394]/60 text-white text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D9DDE3]" />
                <span>Modern Engineering &bull; Reliable Solutions</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.15] text-white max-w-3xl drop-shadow-sm">
                {activeBanner.title || 'Industrial Thermal & Cleanroom HVAC Engineering.'}
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#D9DDE3] font-normal leading-relaxed max-w-2xl">
                Revati Global provides turnkey industrial heating, process boilers, cleanroom climate validation, steam distribution loops, and energy recovery networks from our Kolkata engineering center.
              </p>

              {/* CTA Group */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#645394]/30 active:scale-95"
                >
                  <span>Request Engineering Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/solutions"
                  className="flex items-center gap-2 px-7 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-sm transition-all"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>

              {/* Compliance & Trust Markers */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#D9DDE3] font-mono">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9DDE3]" />
                  ISO 9001:2015 Certified
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9DDE3]" />
                  ASME & IBR Compliant
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9DDE3]" />
                  Kolkata Headquarters &bull; Pan-India Support
                </span>
              </div>
            </div>

            {/* Quick Stats Column */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-[#645394] flex items-center justify-center shrink-0 shadow-md">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono">250+</div>
                    <div className="text-xs text-[#D9DDE3]">Industrial Installations</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-[#645394] flex items-center justify-center shrink-0 shadow-md">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono">Up to 65%</div>
                    <div className="text-xs text-[#D9DDE3]">Thermal Energy Reduction</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#645394] flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono">24/7</div>
                    <div className="text-xs text-[#D9DDE3]">Continuous Technical Assistance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURE HIGHLIGHTS (Futuretek FeatureBox Structure) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(0, 4).map((feat, idx) => (
            <div
              key={feat.id || idx}
              className="p-6 rounded-2xl bg-white border border-[#D9DDE3] shadow-xl hover:shadow-2xl hover:border-[#645394] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-[#F2F1F5] flex items-center justify-center group-hover:bg-[#645394] transition-colors p-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src={feat.image?.startsWith('http') ? feat.image : (feat.image || '/images/svg/maintainance.svg')}
                      alt={feat.title}
                      fill
                      className="object-contain filter group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#35313B] font-heading group-hover:text-[#645394] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F2F1F5] flex items-center gap-1 text-[11px] font-bold text-[#645394] uppercase tracking-wider">
                <span>Reliability Assured</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT REVA TI GLOBAL (Futuretek AboutSector with Kolkata Office & Image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual with Futuretek About Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#D9DDE3] shadow-2xl p-2 bg-white">
              <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/img/about/industry-2.jpg"
                  alt="Revati Global Engineering Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#35313B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="px-2.5 py-1 rounded bg-[#645394] text-[10px] font-mono font-bold uppercase tracking-wider">
                    Kolkata Engineering Center
                  </span>
                  <h4 className="text-base font-bold font-heading">
                    PS Srijan Corporate Park, Salt Lake
                  </h4>
                  <p className="text-xs text-[#D9DDE3]">
                    Sector V, Kolkata &bull; Turnkey Engineering Management
                  </p>
                </div>
              </div>
            </div>
            {/* Experience Pill */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 p-4 rounded-2xl bg-[#645394] text-white shadow-xl flex items-center gap-3 border-2 border-white">
              <Award className="w-8 h-8 text-white shrink-0" />
              <div>
                <div className="text-xl font-bold font-mono leading-none">20+ Years</div>
                <div className="text-[10px] text-[#D9DDE3] uppercase tracking-wider">Combined Pedigree</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#645394]/10 text-[#645394] text-xs font-mono font-bold uppercase tracking-wider">
              About Revati Global
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35313B] font-heading tracking-tight leading-tight">
              Leading Engineering Excellence in Clean Energy & Process Heating.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Headquartered in Kolkata, West Bengal, <strong>Revati Global Pvt. Ltd.</strong> is an engineering powerhouse dedicated to transforming industrial thermal efficiency, clean energy deployment, and precision cleanroom environments.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide end-to-end engineering, procurement, installation, and commissioning (EPIC) across boilers, industrial heat pumps, steam networks, and HVAC climate systems. Every project adheres strictly to ASME, IBR, and ISO 9001:2015 quality standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F2F1F5] border border-[#D9DDE3]/60">
                <CheckCircle2 className="w-5 h-5 text-[#645394] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#35313B]">Turnkey Engineering</h4>
                  <p className="text-[11px] text-slate-500">Design, fabrication, piping & commissioning under one roof.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F2F1F5] border border-[#D9DDE3]/60">
                <CheckCircle2 className="w-5 h-5 text-[#645394] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#35313B]">Sustainable Energy</h4>
                  <p className="text-[11px] text-slate-500">Decarbonization through heat recovery and heat pumps.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#35313B] hover:bg-[#645394] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES & SOLUTIONS SECTION (Futuretek ServiceBox Structure) */}
      <section className="bg-[#F2F1F5] py-20 border-y border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#645394]/10 text-[#645394] text-xs font-mono font-bold uppercase tracking-wider">
                Engineering Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35313B] font-heading tracking-tight">
                Explore the Services & Solutions We Provide.
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                Our manufacturing and thermal services assure clients that their processes, systems, and facilities operate with peak efficiency, compliance, and safety.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Service Cards Grid (Using Futuretek service images & SVGs) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.slice(0, 4).map((sol, index) => (
              <div
                key={sol.id || index}
                className="group rounded-2xl bg-white border border-[#D9DDE3] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#645394] transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={sol.image?.startsWith('http') ? sol.image : (sol.image || `/images/img/services/service${(index % 4) + 1}.jpg`)}
                    alt={sol.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#35313B]/80 via-transparent to-transparent" />
                  {sol.icon && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 p-2 shadow-md backdrop-blur-sm">
                      <Image
                        src={sol.icon}
                        alt="Service icon"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#35313B] font-heading group-hover:text-[#645394] transition-colors line-clamp-1">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {sol.summary || sol.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F2F1F5] flex items-center justify-between">
                    <Link
                      href={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#645394] hover:text-[#524378] transition"
                    >
                      <span>Explore Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CATEGORIES (Direct from Database) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#645394]/10 text-[#645394] text-xs font-mono font-bold uppercase tracking-wider">
              Product Categories
            </div>
            <h2 className="text-3xl font-extrabold text-[#35313B] font-heading tracking-tight">
              Engineered Systems & Equipment.
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-[#645394] hover:text-[#524378] flex items-center gap-1 uppercase tracking-wider"
          >
            <span>View Catalog</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.slice(0, 6).map((cat, idx) => (
            <Link
              key={cat.id || idx}
              href={`/products?category=${cat.slug}`}
              className="p-5 rounded-2xl bg-white border border-[#D9DDE3] hover:border-[#645394] hover:shadow-lg transition-all group flex flex-col items-center text-center space-y-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F2F1F5] group-hover:bg-[#645394] transition-colors p-3 flex items-center justify-center">
                <Factory className="w-7 h-7 text-[#645394] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xs font-bold text-[#35313B] font-heading group-hover:text-[#645394] transition-colors line-clamp-2">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. APPLICATIONS & SECTORS (Futuretek ApplicationBox with 5 application images) */}
      <section className="bg-[#35313B] text-white py-20 relative overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#645394]/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#D9DDE3] text-xs font-mono font-bold uppercase tracking-wider">
              Applications & Sectors
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
              Sectors & Systems We Cater To.
            </h2>
            <p className="text-sm text-[#D9DDE3] leading-relaxed">
              From high-pressure steam distribution to cleanroom climate control, we deliver specialized process solutions across diverse industrial operations.
            </p>
          </div>

          {/* 5 Futuretek Application Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {applications.slice(0, 5).map((app, index) => (
              <div
                key={app.id || index}
                className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#645394] hover:bg-white/10 transition-all flex flex-col justify-between backdrop-blur-sm"
              >
                <div className="relative h-44 w-full overflow-hidden bg-white/5">
                  <Image
                    src={app.image?.startsWith('http') ? app.image : (app.image || `/images/img/application/application${(index % 5) + 1}.png`)}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#35313B] via-transparent to-transparent" />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-mono text-[#D9DDE3]/80 uppercase tracking-wider">
                    Sector 0{index + 1}
                  </span>
                  <h3 className="text-sm font-bold font-heading text-white group-hover:text-[#D9DDE3] transition-colors">
                    {app.title}
                  </h3>
                  {app.summary && (
                    <p className="text-[11px] text-[#D9DDE3]/80 line-clamp-2">
                      {app.summary}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS (Futuretek ProjectBox with project1..project5 images) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#645394]/10 text-[#645394] text-xs font-mono font-bold uppercase tracking-wider">
              Project Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#35313B] font-heading tracking-tight">
              Featured Case Studies & References.
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Real-world execution of industrial heating plants, energy recovery networks, and regulatory compliance projects.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D9DDE3] bg-white hover:bg-[#F2F1F5] text-[#35313B] text-xs font-bold transition shadow-sm"
          >
            <span>All References</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((proj, idx) => (
            <div
              key={proj.id || idx}
              className="group rounded-3xl bg-white border border-[#D9DDE3] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#645394] transition-all flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={proj.image?.startsWith('http') ? proj.image : (proj.image || `/images/img/projects/project${(idx % 5) + 1}.jpg`)}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#35313B]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-[#35313B] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
                    {proj.project_type || 'Industrial Plant'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#D9DDE3]">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                    <span>{proj.location || 'Kolkata, West Bengal'}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#35313B] font-heading group-hover:text-[#645394] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {proj.summary || proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2F1F5]">
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#645394] hover:text-[#524378] transition"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS (Futuretek TestimonialBox) */}
      {testimonials.length > 0 && (
        <section className="bg-[#F2F1F5] py-20 border-y border-[#D9DDE3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#645394]/10 text-[#645394] text-xs font-mono font-bold uppercase tracking-wider">
                Client Testimonials
              </div>
              <h2 className="text-3xl font-extrabold text-[#35313B] font-heading tracking-tight">
                What Our Industrial Partners Say.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((test, index) => (
                <div
                  key={test.id || index}
                  className="p-8 rounded-2xl bg-white border border-[#D9DDE3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-[#645394]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      &ldquo;{test.message}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F2F1F5] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#645394] text-white flex items-center justify-center font-bold text-sm">
                      {test.full_name?.charAt(0) || 'C'}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#35313B] font-heading">{test.full_name}</div>
                      <div className="text-[11px] text-slate-500">{test.position || test.company_name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. INDUSTRIAL GALLERY (Futuretek SocialMediaBox with /images/social-media/ photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#645394]/10 text-[#645394] text-xs font-mono font-bold uppercase tracking-wider">
            Execution Gallery
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#35313B] font-heading tracking-tight">
            Field Installations & Manufacturing Facilities.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            '/images/social-media/01.jpg',
            '/images/social-media/02.jpg',
            '/images/social-media/03.jpg',
            '/images/social-media/04.jpg',
            '/images/social-media/05.jpg',
            '/images/social-media/06.jpg'
          ].map((imgSrc, i) => (
            <div key={i} className="relative h-40 rounded-2xl overflow-hidden border border-[#D9DDE3] shadow-sm group bg-slate-100">
              <Image
                src={imgSrc}
                alt={`Revati installation photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-[#35313B]/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* 10. QUICK CONTACT & QUOTE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#35313B] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D9DDE3] text-xs font-mono font-bold uppercase tracking-wider">
                Direct Engineering Inquiries
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight">
                Ready to Upgrade Your Thermal & Cleanroom Infrastructure?
              </h2>
              <p className="text-sm sm:text-base text-[#D9DDE3] leading-relaxed">
                Connect with our senior engineering team in Kolkata for technical feasibility audits, boiler sizing, heat pump design, or turnkey project execution.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#D9DDE3]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#645394]" />
                  <span>PS Srijan Corporate Park, Sector V, Salt Lake, Kolkata, West Bengal 700091</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#645394]" />
                  <a href="mailto:info@revatiglobal.com" className="hover:text-white transition">info@revatiglobal.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-[#645394]" />
                  <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#645394] hover:bg-[#524378] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xl shadow-[#645394]/30"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
