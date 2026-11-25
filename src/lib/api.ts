const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.revatiglobal.com/api';

export interface Solution {
  id: string | number;
  title: string;
  slug: string;
  summary: string;
  description: string;
  features?: string[];
  image?: string;
  order?: number;
}

export interface Product {
  id: string | number;
  title: string;
  slug: string;
  category_id?: string | number;
  category_name?: string;
  category_slug?: string;
  description: string;
  feature_and_benefit?: string;
  capacity?: string;
  power?: string;
  specifications?: Array<{ key: string; value: string }>;
  image?: string;
  catalogue?: string;
  order?: number;
}

export interface Project {
  id: string | number;
  title: string;
  slug: string;
  client?: string;
  location?: string;
  capacity?: string;
  year?: number | string;
  summary?: string;
  description?: string;
  image?: string;
}

export interface Application {
  id: string | number;
  title: string;
  slug: string;
  summary: string;
  description?: string;
  image?: string;
}

export interface DownloadItem {
  id: string | number;
  title: string;
  category?: string;
  description?: string;
  file: string;
  file_size?: string;
}

export interface BlogPost {
  id: string | number;
  title: string;
  slug: string;
  summary: string;
  content?: string;
  image?: string;
  published_at?: string;
  author?: string;
}

// Fallback data for SSG / offline preview
const FALLBACK_SOLUTIONS: Solution[] = [
  {
    id: 1,
    title: 'Industrial Heat Pump Solutions',
    slug: 'industrial-heat-pump-solutions',
    summary: 'High-temperature industrial air-to-water and water-to-water heat pumps for sustainable process heating up to 90°C.',
    description: 'Revati Global engineers cutting-edge heat pump architectures that capture low-grade waste thermal energy and lift it to industrial process temperatures. Our systems dramatically reduce carbon footprints while cutting operational heating expenses by up to 65%.',
    features: ['COP up to 4.2', 'Dual refrigerant circuit', 'Eco-friendly R1234ze / R513A', 'Remote BMS integration', 'Built-in economizer cycle'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Commercial Water & Process Heating',
    slug: 'commercial-water-heating',
    summary: 'High-efficiency thermal systems for hospitality, hospitals, pharmaceutical batch processes, and manufacturing plants.',
    description: 'Turnkey thermal water heating systems designed for continuous, high-volume industrial reliability. Built with titanium and duplex stainless steel heat exchangers for superior corrosion resistance and longevity.',
    features: ['Stainless steel SS316L/Duplex construction', 'Variable primary flow control', 'Integrated modulating burners', 'Automated descaling systems'],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Cleanroom & HVAC Turnkey Engineering',
    slug: 'cleanroom-hvac-turnkey',
    summary: 'ISO Class 5-8 certified cleanroom environmental control systems for biotech, pharmaceutical, and electronics manufacturing.',
    description: 'Precision environmental control delivering precise temperature (±0.5°C), relative humidity control (±3% RH), and certified laminar airflow with multi-stage HEPA/ULPA filtration.',
    features: ['ISO 14644 cleanroom compliance', 'Direct-expansion & chilled water AHUs', 'Integrated dehumidification wheels', '21 CFR Part 11 BMS telemetry'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Turnkey Piping & Heat Exchanger Systems',
    slug: 'turnkey-piping-heat-exchangers',
    summary: 'Custom designed shell & tube and plate heat exchangers paired with engineered process fluid piping networks.',
    description: 'Complete mechanical piping fabrication and heat transfer packages engineered under ASME Section VIII and IBR standards for high pressure thermal fluid networks.',
    features: ['ASME Sec VIII / IBR compliant', 'Gasketed and welded plate exchangers', 'Thermal stress FEA validated', 'Hydro-tested to 1.5x design pressure'],
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop'
  }
];

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'ThermaMax R90 Industrial Heat Pump',
    slug: 'thermamax-r90-heat-pump',
    category_name: 'Industrial Heat Pumps',
    category_slug: 'industrial-heat-pumps',
    description: 'High-lift industrial heat pump producing continuous hot water at 90°C using environmentally compliant low-GWP refrigerants.',
    feature_and_benefit: 'Reduces process heating fossil fuel consumption by up to 70% with high COP inverter screw compressors.',
    capacity: '120 kW - 1200 kW Thermal',
    power: '415V, 3-Phase, 50Hz',
    specifications: [
      { key: 'Max Output Temp', value: '90°C (194°F)' },
      { key: 'Refrigerant', value: 'R1234ze (Low GWP < 1)' },
      { key: 'Compressor Type', value: 'Semi-Hermetic Inverter Screw' },
      { key: 'Heat Exchanger', value: 'Shell & Tube Duplex Steel' }
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'AeroTherm Commercial Air-Source Heat Pump',
    slug: 'aerotherm-commercial-air-source',
    category_name: 'Commercial Heating',
    category_slug: 'commercial-heating',
    description: 'Heavy duty commercial air-to-water heat pump tailored for hotels, central hospitals, and residential townships.',
    feature_and_benefit: 'Operates in ambient conditions down to -10°C with intelligent reverse-cycle defrosting.',
    capacity: '45 kW - 280 kW',
    power: '415V, 3-Phase, 50Hz',
    specifications: [
      { key: 'Output Water Temp', value: '65°C' },
      { key: 'COP Range', value: '3.6 - 4.2' },
      { key: 'Fan Type', value: 'EC Variable Speed Aerofoil' },
      { key: 'Sound Level', value: '< 62 dBA at 1m' }
    ],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'IsoClean Precision Cleanroom AHU',
    slug: 'isoclean-cleanroom-ahu',
    category_name: 'Cleanroom Systems',
    category_slug: 'cleanroom-systems',
    description: 'Thermal break modular air handling unit designed specifically for pharmaceutical and aseptic cleanroom environments.',
    feature_and_benefit: 'Double-skin polyurethane insulated casing with internal coved corners to prevent bacterial harborage.',
    capacity: '2,000 - 45,000 CFM',
    power: '415V, 3-Phase, 50Hz',
    specifications: [
      { key: 'Casing Construction', value: 'Double skin 50mm PUF thermal break' },
      { key: 'Filtration Stages', value: 'Pre (EU4), Fine (EU7), HEPA (H14)' },
      { key: 'Fan Technology', value: 'Direct-driven backward curved plug fan' },
      { key: 'Leakage Class', value: 'EN 1886 Class L1' }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'
  }
];

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: '1.2 MW Industrial Heat Pump Retrofit',
    slug: '1-2-mw-heat-pump-retrofit',
    client: 'Apex Biotech Ltd',
    location: 'Pune, Maharashtra',
    capacity: '1,200 kW Hot Water at 85°C',
    year: 2025,
    summary: 'Complete replacement of legacy diesel boiler with multi-stage industrial heat pumps, reducing annual emissions by 420 MT CO2.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Turnkey ISO 7 Cleanroom Environmental HVAC',
    slug: 'iso-7-cleanroom-hvac',
    client: 'Zenith Formulations',
    location: 'Baddi, Himachal Pradesh',
    capacity: '28,000 CFM with ±0.5°C Precision',
    year: 2024,
    summary: 'Design, supply and validation of an ISO Class 7 injectable formulation cleanroom with 100% fresh air dehumidification.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Brewery Pasteurization Thermal Recovery Network',
    slug: 'brewery-pasteurization-thermal-recovery',
    client: 'Continental Breweries Ltd',
    location: 'Aurangabad, Maharashtra',
    capacity: '850 kW Heat Recovery',
    year: 2025,
    summary: 'Waste heat harvesting from wort chilling loops used to preheat boiler feed water via titanium plate heat exchangers.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
  }
];

const FALLBACK_APPLICATIONS: Application[] = [
  {
    id: 1,
    title: 'Pharmaceutical & Biotechnology',
    slug: 'pharmaceutical-biotechnology',
    summary: 'Ultra-pure cleanroom environments, aseptic filling suites, and high-purity water heating systems complying with US FDA and EU GMP norms.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Breweries, Distilleries & Beverages',
    slug: 'breweries-beverages',
    summary: 'Wort boiling, pasteurization heat loops, bottle washing thermal circuits, and cold-side refrigeration optimization.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Dairy & Food Processing',
    slug: 'dairy-food-processing',
    summary: 'Sanitary milk pasteurization heating, CIP chemical cleaning hot loops, and hygienic facility climate control.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Textile Processing & Dyeing',
    slug: 'textile-processing-dyeing',
    summary: 'High-volume hot water delivery for fabric scouring, continuous washing ranges, and dye baths with heat recovery.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Hospitality & Commercial Infrastructure',
    slug: 'hospitality-commercial',
    summary: 'Centralized hot water supply, underfloor heating, heated infinity pools, and quiet HVAC systems for luxury resorts and hospitals.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'
  }
];

const FALLBACK_DOWNLOADS: DownloadItem[] = [
  {
    id: 1,
    title: 'Revati Global Corporate Profile & Engineering Capabilities',
    category: 'Corporate',
    description: 'Comprehensive overview of engineering infrastructure, thermal competencies, and client case studies.',
    file: '/brand/corporate-profile.pdf',
    file_size: '3.4 MB'
  },
  {
    id: 2,
    title: 'Industrial High-Temperature Heat Pump Technical Datasheet',
    category: 'Datasheet',
    description: 'COP curves, dimensional layouts, power specs, and hydraulic schematics for ThermaMax R90 series.',
    file: '/brand/heat-pump-datasheet.pdf',
    file_size: '2.1 MB'
  },
  {
    id: 3,
    title: 'Cleanroom HVAC Engineering Standards & Validation Guide',
    category: 'Brochure',
    description: 'ISO 14644 airflow classification criteria and technical AHU layout guidance.',
    file: '/brand/cleanroom-brochure.pdf',
    file_size: '4.8 MB'
  }
];

const FALLBACK_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: 'Decarbonizing Industrial Heat: Why Heat Pumps Outperform Boilers',
    slug: 'decarbonizing-industrial-heat-pumps',
    summary: 'An engineering analysis on how industrial heat pumps deliver up to 4x efficiency gains compared to diesel or gas boilers.',
    published_at: '2026-03-15',
    author: 'Revati Engineering Team',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'ISO 14644 Cleanroom Airflow Principles for Pharmaceutical Facilities',
    slug: 'iso-14644-cleanroom-airflow-principles',
    summary: 'Designing turbulent vs laminar airflow regimens to control airborne viable and non-viable particulate concentrations.',
    published_at: '2026-02-28',
    author: 'Revati Engineering Team',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'
  }
];

export async function getSolutions(): Promise<Solution[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/solutions`, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_SOLUTIONS;
    const data = await res.json();
    return data.solutions || data.data || FALLBACK_SOLUTIONS;
  } catch {
    return FALLBACK_SOLUTIONS;
  }
}

export async function getSolutionBySlug(slug: string): Promise<Solution | undefined> {
  const all = await getSolutions();
  return all.find(s => s.slug === slug) || FALLBACK_SOLUTIONS.find(s => s.slug === slug);
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_PRODUCTS;
    const data = await res.json();
    return data.products || data.data || FALLBACK_PRODUCTS;
  } catch {
    return FALLBACK_PRODUCTS;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find(p => p.slug === slug) || FALLBACK_PRODUCTS.find(p => p.slug === slug);
}

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_PROJECTS;
    const data = await res.json();
    return data.projects || data.data || FALLBACK_PROJECTS;
  } catch {
    return FALLBACK_PROJECTS;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const all = await getProjects();
  return all.find(p => p.slug === slug) || FALLBACK_PROJECTS.find(p => p.slug === slug);
}

export async function getApplications(): Promise<Application[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/applications`, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_APPLICATIONS;
    const data = await res.json();
    return data.applications || data.data || FALLBACK_APPLICATIONS;
  } catch {
    return FALLBACK_APPLICATIONS;
  }
}

export async function getDownloads(): Promise<DownloadItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/downloads`, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_DOWNLOADS;
    const data = await res.json();
    return data.downloads || data.data || FALLBACK_DOWNLOADS;
  } catch {
    return FALLBACK_DOWNLOADS;
  }
}

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_BLOGS;
    const data = await res.json();
    return data.blogs || data.data || FALLBACK_BLOGS;
  } catch {
    return FALLBACK_BLOGS;
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const all = await getBlogs();
  return all.find(b => b.slug === slug) || FALLBACK_BLOGS.find(b => b.slug === slug);
}

export async function submitEnquiry(payload: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  _hp?: string;
  _t?: number;
  turnstileToken?: string;
}) {
  const res = await fetch(`${API_BASE_URL}/enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok || data.result !== 'success') {
    throw new Error(data.message || 'Failed to submit enquiry');
  }
  return data;
}
