# Revati Global - Web Frontend (`revati-frontend`)

Official public website frontend for Revati Global built with modern Next.js, React, and Tailwind CSS.

## Features
- Modern engineering solutions showcase (Heat Pumps, HVAC, Boilers, Utility Systems).
- Complete Brand Identity integration (Ultra Violet `#645394`, Dark Charcoal `#35313B`, White `#FFFFFF`, Lavender Grey `#F2F1F5`, Cool Grey `#D9DDE3`).
- Typography system using Manrope, Inter, and Space Grotesk.
- Responsive, accessible, and SEO-optimized architecture.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Configuration
Copy `.env.example` to `.env.local` and fill in the required variables:
```bash
cp .env.example .env.local
```

#### Required Environment Variables (Names Only)
- `NEXT_PUBLIC_API_URL` - Backend API base endpoint
- `NEXT_PUBLIC_SITE_URL` - Canonical public website URL

### Running the Application
```bash
# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

