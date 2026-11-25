# Revati Global - Official Website (`revati-frontend`)

Modern engineering website for Revati Global built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Lucide Icons.

## Brand Identity
Strictly adheres to `Brand-identity/BRAND.md`:
- **Palette:** Ultra Violet (`#645394`), Dark Charcoal (`#35313B`), White (`#FFFFFF`), Lavender Grey (`#F2F1F5`), Cool Grey (`#D9DDE3`).
- **Typography:** Manrope (headlines), Inter (body), Space Grotesk (technical metrics).
- **Logo:** Client-approved Revati Global monogram and wordmark assets.

## Architecture & Performance
- **Static Site Generation (SSG) & Incremental Static Regeneration (ISR):** Sub-second page loads with 87 kB first-load JS.
- **Zero Runtime Database Dependency for Static Rendering:** Fallback data architectures ensure resilient builds even when offline or during DB maintenance.
- **Egress Optimized Media:** Next.js remote patterns configured for Supabase CDN with 30-day image cache TTL.
- **Spam-Resistant RFQ Engine:** Client validation, hidden honeypot (`_hp`), time-delta analysis (`_t`), and optional Cloudflare Turnstile integration.
- **SEO Ready:** Programmatic `sitemap.ts`, `robots.ts`, OpenGraph metadata, and Schema.org `EngineeringService` structured data.

## Getting Started
```bash
npm install
npm run dev
npm run build
```
