const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || 'rg_live_677b989846a07722e1398c02';

const defaultHeaders = {
  'apikey': API_KEY,
  'Content-Type': 'application/json'
};

export interface Banner {
  id: string | number;
  title: string;
  slug: string;
  image?: string;
  icon?: string;
  cta_text?: string;
  cta_link?: string;
}

export interface Feature {
  id: string | number;
  title: string;
  slug: string;
  image?: string;
  description?: string;
  link?: string;
}

export interface Category {
  id: string | number;
  title: string;
  slug: string;
  image?: string;
  description?: string;
  subCategories?: Category[];
}

export interface Solution {
  id: string | number;
  title: string;
  slug: string;
  summary: string;
  description: string;
  features?: string[];
  image?: string;
  icon?: string;
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
  project_type?: string;
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
  summary?: string;
  description?: string;
  image?: string;
}

export interface Testimonial {
  id: string | number;
  full_name: string;
  company_name?: string;
  position?: string;
  message: string;
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

// Fallback data using Futuretek copied rich assets
export const FALLBACK_BANNERS: Banner[] = [
  {
    id: 1,
    title: 'Clean Energy & Industrial Heating Solutions',
    slug: 'clean-energy-industrial-heating',
    image: '/images/background-image.png',
    icon: '/images/svg/drill.svg',
    cta_text: 'Explore Solutions',
    cta_link: '/solutions'
  },
  {
    id: 2,
    title: 'High-Temperature Industrial Heat Pumps & Steam Systems',
    slug: 'high-temp-industrial-heat-pumps',
    image: '/images/img/about/about-section-two-bg.png',
    icon: '/images/svg/manufacture.svg',
    cta_text: 'Request Quote',
    cta_link: '/contact'
  }
];

export const FALLBACK_FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Well Maintained',
    slug: 'well-maintained',
    image: '/images/svg/maintainance.svg',
    description: 'We deliver innovative solutions for clean energy and industrial excellence with zero downtime reliability.'
  },
  {
    id: 2,
    title: 'Certified Engineering',
    slug: 'certified-engineering',
    image: '/images/svg/manufacture.svg',
    description: 'ASME, IBR and ISO compliant thermal and mechanical engineering standards for mission-critical operations.'
  },
  {
    id: 3,
    title: 'Precision Quality',
    slug: 'precision-quality',
    image: '/images/svg/drill.svg',
    description: 'Advanced fluid mechanics, cleanroom air balancing, and turnkey HVAC execution tested to global specifications.'
  },
  {
    id: 4,
    title: 'Dedicated Support',
    slug: 'dedicated-support',
    image: '/images/svg/vest.svg',
    description: 'Pan-India engineering support team located at our Kolkata headquarters with rapid response capability.'
  }
];

export const FALLBACK_SOLUTIONS: Solution[] = [
  {
    id: 1,
    title: 'Plant Upgrade & Improvement',
    slug: 'plant-upgrade-and-improvement',
    summary: 'Comprehensive plant modernization, efficiency optimization, and energy audit engineering.',
    description: 'Revati Global is a trusted partner in industrial plant retrofitting, boiler modernization, and process heating efficiency optimization across India.',
    image: '/images/img/services/service1.jpg',
    icon: '/images/svg/services/helmet.svg'
  },
  {
    id: 2,
    title: 'Industrial Construction & Engineering',
    slug: 'industrial-construction',
    summary: 'Turnkey thermal fluid piping networks, boiler houses, and pressure vessel installation.',
    description: 'Complete mechanical and structural construction adhering to ASME and IBR engineering specifications.',
    image: '/images/img/services/service2.jpg',
    icon: '/images/svg/services/robotic.svg'
  },
  {
    id: 3,
    title: 'Chemical & Process Heating',
    slug: 'chemical-industry',
    summary: 'Thermic fluid systems, titanium heat exchangers, and high-temp corrosive fluid handling.',
    description: 'Engineered heating solutions designed specifically for pharmaceutical synthesis and chemical manufacturing.',
    image: '/images/img/services/service3.jpg',
    icon: '/images/svg/services/bioengineering.svg'
  },
  {
    id: 4,
    title: 'Energy & Commodities Optimization',
    slug: 'energy-commodities',
    summary: 'Industrial heat pump systems and waste heat recovery loops reducing operational costs by up to 60%.',
    description: 'Cutting-edge closed-loop thermal harvesting that transforms industrial waste heat into usable high-temperature energy.',
    image: '/images/img/services/service4.jpg',
    icon: '/images/svg/services/oil-well.svg'
  }
];

export const FALLBACK_APPLICATIONS: Application[] = [
  {
    id: 1,
    title: 'Energy Management',
    slug: 'energy-management',
    summary: 'Comprehensive thermal and electrical energy harvesting systems for modern factories.',
    image: '/images/img/application/application1.png'
  },
  {
    id: 2,
    title: 'Steam Engineering',
    slug: 'steam-engineering',
    summary: 'High-pressure steam distribution, condensate return, and pressure reducing station engineering.',
    image: '/images/img/application/application2.png'
  },
  {
    id: 3,
    title: 'Fuel & Water Management',
    slug: 'fuel-water-management',
    summary: 'Sanitary water purification, boiler feedwater deaeration, and high-purity chemical treatment.',
    image: '/images/img/application/application3.png'
  },
  {
    id: 4,
    title: 'Flow Management',
    slug: 'flow-management',
    summary: 'Precision control valves, ultrasonic flow metering, and balancing hydronics.',
    image: '/images/img/application/application4.png'
  },
  {
    id: 5,
    title: 'Compressed Air Solutions',
    slug: 'compressed-air-solutions',
    summary: 'High-efficiency industrial air compressors, desiccant dryers, and zero-loss pneumatic networks.',
    image: '/images/img/application/application5.png'
  }
];

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Regulatory Compliance Thermal System',
    slug: 'regulatory-compliance-thermal-system',
    location: 'Kolkata, West Bengal',
    project_type: 'Industrial Thermal',
    summary: 'Turnkey thermal engineering and regulatory steam compliance system engineered for large-scale industrial manufacturing.',
    image: '/images/img/projects/project1.jpg'
  },
  {
    id: 2,
    title: 'Commercial Steam Recovery Plant',
    slug: 'commercial-steam-recovery-plant',
    location: 'Howrah Industrial Belt, Kolkata',
    project_type: 'Energy Management',
    summary: 'High-efficiency condensate and flash steam heat recovery network integrated into process pipelines.',
    image: '/images/img/projects/project2.jpg'
  },
  {
    id: 3,
    title: 'Cleanroom Climate Engineering Facility',
    slug: 'cleanroom-climate-engineering-facility',
    location: 'Salt Lake Sector V, Kolkata',
    project_type: 'Cleanroom HVAC',
    summary: 'Precision environmental validation and aseptic climate control system for pharmaceutical packaging.',
    image: '/images/img/projects/project3.jpg'
  },
  {
    id: 4,
    title: 'Industrial Process Heating Infrastructure',
    slug: 'industrial-process-heating-infrastructure',
    location: 'Durgapur Industrial Complex, West Bengal',
    project_type: 'Boilers & Heaters',
    summary: 'Heavy-duty thermic fluid heating unit with automated modulation and low emissions burners.',
    image: '/images/img/projects/project4.jpg'
  },
  {
    id: 5,
    title: 'Turnkey Hydronic Piping Network',
    slug: 'turnkey-hydronic-piping-network',
    location: 'Haldia Petrochemical Hub, West Bengal',
    project_type: 'Piping & Valves',
    summary: 'ASME-compliant high-pressure hydronic distribution loop with precision flow regulation.',
    image: '/images/img/projects/project5.jpg'
  }
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    full_name: 'Sheela Adhikari',
    company_name: 'Precision Engineering Pvt. Ltd.',
    position: 'Chief Technical Director',
    message: 'Revati Global provided exceptional engineering support for our high-temperature boiler and piping installation. Highly recommended for thermal projects.'
  },
  {
    id: 2,
    full_name: 'Nisha Karki',
    company_name: 'Apex Cleanroom & Formulations',
    position: 'Plant Operations Manager',
    message: 'Their cleanroom HVAC validation and hydronic balancing delivered outstanding performance within stringent regulatory parameters.'
  },
  {
    id: 3,
    full_name: 'Mamata Gurung',
    company_name: 'Eastern Manufacturing Hub',
    position: 'General Manager',
    message: 'Reliable engineering, punctual delivery, and thorough technical expertise. The Kolkata engineering team has been a valuable partner for our plant expansion.'
  }
];

export const FALLBACK_DOWNLOADS: DownloadItem[] = [
  {
    id: 1,
    title: 'Shellmax Global Series Technical Manual',
    category: 'Datasheet',
    description: 'Complete technical specifications, burner configurations, and dimension schedules.',
    file: '/brand/corporate-profile.pdf',
    file_size: '3.4 MB'
  },
  {
    id: 2,
    title: 'Revati Global Corporate Engineering Profile',
    category: 'Corporate',
    description: 'Comprehensive overview of engineering competencies, thermal projects, and client case studies.',
    file: '/brand/heat-pump-datasheet.pdf',
    file_size: '2.1 MB'
  }
];

export const FALLBACK_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: 'Decarbonizing Industrial Heat: Why Heat Pumps Outperform Boilers',
    slug: 'decarbonizing-industrial-heat-pumps',
    summary: 'An engineering analysis on how industrial heat pumps deliver up to 4x efficiency gains compared to diesel or gas boilers.',
    published_at: '2026-03-15',
    author: 'Revati Engineering Team',
    image: '/images/img/blogs/blog1.jpg'
  },
  {
    id: 2,
    title: 'ISO 14644 Cleanroom Airflow Principles for Pharmaceutical Facilities',
    slug: 'iso-14644-cleanroom-airflow-principles',
    summary: 'Designing turbulent vs laminar airflow regimens to control airborne viable and non-viable particulate concentrations.',
    published_at: '2026-02-28',
    author: 'Revati Engineering Team',
    image: '/images/img/blogs/blog2.jpg'
  }
];

// -------------------------------------------------------------
// Live API Methods (with graceful fallback)
// -------------------------------------------------------------

export async function getBanners(): Promise<Banner[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/banners`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return FALLBACK_BANNERS;
    const data = await res.json();
    return data.banners?.length ? data.banners : FALLBACK_BANNERS;
  } catch {
    return FALLBACK_BANNERS;
  }
}

export async function getFeatures(): Promise<Feature[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/features`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return FALLBACK_FEATURES;
    const data = await res.json();
    return data.features?.length ? data.features : FALLBACK_FEATURES;
  } catch {
    return FALLBACK_FEATURES;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.categories || [];
  } catch {
    return [];
  }
}

export async function getSolutions(): Promise<Solution[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/solutions`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return FALLBACK_SOLUTIONS;
    const data = await res.json();
    return data.solutions?.length ? data.solutions : FALLBACK_SOLUTIONS;
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
    const res = await fetch(`${API_BASE_URL}/products`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.products || [];
  } catch {
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find(p => p.slug === slug);
}

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return FALLBACK_PROJECTS;
    const data = await res.json();
    return data.projects?.length ? data.projects : FALLBACK_PROJECTS;
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
    const res = await fetch(`${API_BASE_URL}/applications`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return FALLBACK_APPLICATIONS;
    const data = await res.json();
    return data.applications?.length ? data.applications : FALLBACK_APPLICATIONS;
  } catch {
    return FALLBACK_APPLICATIONS;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return FALLBACK_TESTIMONIALS;
    const data = await res.json();
    return data.testimonials?.length ? data.testimonials : FALLBACK_TESTIMONIALS;
  } catch {
    return FALLBACK_TESTIMONIALS;
  }
}

export async function getDownloads(): Promise<DownloadItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/downloads`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return FALLBACK_DOWNLOADS;
    const data = await res.json();
    return data.downloads?.length ? data.downloads : FALLBACK_DOWNLOADS;
  } catch {
    return FALLBACK_DOWNLOADS;
  }
}

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      headers: defaultHeaders,
      next: { revalidate: 300 }
    });
    if (!res.ok) return FALLBACK_BLOGS;
    const data = await res.json();
    return data.blogs?.length ? data.blogs : FALLBACK_BLOGS;
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
  interest?: string;
  state?: string;
  city?: string;
  country?: string;
  _hp?: string;
  _t?: number;
}): Promise<{ ok: boolean; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/enquiries`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    return { ok: res.ok && data.result === 'success', message: data.message };
  } catch (err: any) {
    return { ok: false, message: err?.message || 'Network error' };
  }
}
