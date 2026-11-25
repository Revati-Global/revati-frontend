'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    'Hello Revati Global, I am interested in your industrial heating and HVAC solutions.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group font-medium text-xs"
    >
      <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline font-bold">Chat with Engineering</span>
    </a>
  );
}
