import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://revatiglobal.com'),
  title: {
    default: 'Revati Global | Industrial Thermal & HVAC Engineering Solutions',
    template: '%s | Revati Global',
  },
  description:
    'Modern Engineering. Reliable Solutions. Premium industrial process heating, commercial heat pumps, precision cleanroom HVAC, and turnkey mechanical piping systems.',
  keywords: [
    'industrial heat pumps',
    'cleanroom HVAC',
    'commercial water heating',
    'process heating India',
    'thermal energy efficiency',
    'turnkey piping systems',
    'Revati Global',
  ],
  authors: [{ name: 'Revati Global Engineering Team' }],
  creator: 'Revati Global',
  publisher: 'Revati Global',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://revatiglobal.com',
    siteName: 'Revati Global',
    title: 'Revati Global | Modern Engineering. Reliable Solutions.',
    description:
      'Industrial process heating, high-temperature heat pumps, cleanroom HVAC, and turnkey mechanical piping solutions.',
    images: [
      {
        url: '/brand/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'Revati Global - Modern Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revati Global | Modern Engineering. Reliable Solutions.',
    description: 'Industrial process heating, heat pumps, and cleanroom HVAC solutions.',
    images: ['/brand/logo-full.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EngineeringService',
    name: 'Revati Global',
    url: 'https://revatiglobal.com',
    logo: 'https://revatiglobal.com/brand/logo-full.png',
    description:
      'Industrial process heating, commercial heat pumps, precision cleanroom HVAC, and turnkey mechanical piping engineering solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    telephone: '+91 98765 43210',
    email: 'info@revatiglobal.com',
    sameAs: ['https://linkedin.com/company/revatiglobal'],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#35313B]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
