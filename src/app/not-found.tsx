import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-[#F2F1F5]/40 py-20">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#D9DDE3] shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-[#645394]/10 text-[#645394] flex items-center justify-center mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-[#645394] font-mono block">404</span>
          <h1 className="text-xl font-extrabold text-[#35313B] font-heading">
            Engineering Blueprint Not Found
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            The page or specification document you are attempting to access has been relocated or is no longer in service.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#645394] hover:bg-[#524378] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
