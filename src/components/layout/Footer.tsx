import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#35313B] text-white border-t border-[#524378]">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-12 w-48 bg-white/10 p-2 rounded-xl backdrop-blur-sm inline-block">
              <Image
                src="/brand/logo-full.png"
                alt="Revati Global Logo"
                fill
                className="object-contain object-left px-2"
              />
            </div>
            <p className="text-xs text-[#D9DDE3] leading-relaxed max-w-sm">
              Revati Global delivers industrial process heating, commercial heat pumps, precision cleanroom HVAC, and turnkey mechanical piping solutions across India and international markets.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-[11px] font-mono text-[#D9DDE3]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#645394]" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-[11px] font-mono text-[#D9DDE3]">
                <Award className="w-3.5 h-3.5 text-[#645394]" />
                <span>ASME / IBR</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-[#D9DDE3]">
              <li><Link href="/solutions/industrial-heat-pump-solutions" className="hover:text-white transition">Industrial Heat Pumps</Link></li>
              <li><Link href="/solutions/commercial-water-heating" className="hover:text-white transition">Commercial Water Heating</Link></li>
              <li><Link href="/solutions/cleanroom-hvac-turnkey" className="hover:text-white transition">Cleanroom Turnkey HVAC</Link></li>
              <li><Link href="/solutions/turnkey-piping-heat-exchangers" className="hover:text-white transition">Piping & Heat Exchangers</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition font-semibold text-[#645394]">View All Solutions &rarr;</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#D9DDE3]">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/applications" className="hover:text-white transition">Industries Served</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">Projects & References</Link></li>
              <li><Link href="/downloads" className="hover:text-white transition">Downloads & Datasheets</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Technical Articles</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white font-mono">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#D9DDE3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#645394] shrink-0 mt-0.5" />
                <span>PS Srijan Corporate Park, Sector V, Salt Lake, Kolkata, West Bengal 700091, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#645394] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition font-mono">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#645394] shrink-0" />
                <a href="mailto:info@revatiglobal.com" className="hover:text-white transition">info@revatiglobal.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#524378] bg-[#28252D] py-5 px-4 sm:px-8 text-[11px] text-[#D9DDE3]/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Revati Global. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <a href="https://admin.revatiglobal.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition font-mono">
              Staff Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
