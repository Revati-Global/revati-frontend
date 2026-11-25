'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, Phone, Mail, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Products', href: '/products' },
  { name: 'Applications', href: '/applications' },
  { name: 'Projects', href: '/projects' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D9DDE3] transition-all">
      {/* Top micro-bar */}
      <div className="bg-[#35313B] text-white text-[11px] py-1.5 px-4 sm:px-8 flex items-center justify-between font-mono">
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline text-[#D9DDE3]">
            Modern Engineering. Reliable Solutions.
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Mail className="w-3 h-3 text-[#645394]" />
            <a href="mailto:info@revatiglobal.com" className="hover:text-white transition">info@revatiglobal.com</a>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-[#645394]" />
            <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
          </span>
          <span className="hidden md:inline text-[#D9DDE3]/60">|</span>
          <span className="hidden md:inline text-slate-300">Kolkata, West Bengal</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-48 sm:w-56">
            <Image
              src="/brand/logo-full.png"
              alt="Revati Global Logo"
              fill
              priority
              sizes="(max-width: 640px) 192px, 224px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-[#35313B] hover:text-[#645394] transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#645394] hover:bg-[#F2F1F5] transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D9DDE3] px-6 py-5 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-bold text-[#35313B] hover:text-[#645394] py-2 border-b border-slate-100"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#645394] text-white text-xs font-bold uppercase tracking-wider"
            >
              <span>Get an Engineering Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
