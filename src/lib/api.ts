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
  summary?: string;
  description?: string;
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
  description?: string;
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

// -------------------------------------------------------------
// Real Fallback Data (100% matched to Futuretek original dump & assets)
// -------------------------------------------------------------

export const FALLBACK_BANNERS: Banner[] = [
  {
    id: 1,
    title: 'Industries & Clean Energy Solutions',
    slug: 'industries',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/banners/e8403251-202b-4305-a9dd-e4f3e0b3d11f.webp',
    cta_text: 'Explore Solutions',
    cta_link: '/solutions'
  },
  {
    id: 2,
    title: 'Turnkey Thermal & Engineering Solutions',
    slug: 'solutions',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/banners/12ca1829-07c4-4023-9604-3a4bcd339cd2.webp',
    cta_text: 'Request Quote',
    cta_link: '/contact'
  }
];

export const FALLBACK_FEATURES: Feature[] = [
  {
    id: 4,
    title: 'Well Maintained',
    slug: 'well-maintained',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/features/cc8f2212-54f0-4fc8-a1e8-86f3917826e8.svg',
    description: 'We deliver innovative solutions for clean energy and process heating, offering advanced systems to enhance efficiency for every industrial need.'
  },
  {
    id: 5,
    title: 'Industrial Specialist',
    slug: 'industrial-specialist',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/features/3df6af7f-8c16-4cf3-bbd9-15a54b52ca64.svg',
    description: 'We focus on managing thermal engineering projects, including planning, execution, and monitoring while meeting stringent safety and regulatory standards.'
  },
  {
    id: 6,
    title: 'Latest Equipment',
    slug: 'latest-equipment',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/features/78261cf9-c6ac-40cf-9c94-5627580ddd6b.svg',
    description: 'We provide our customers with state-of-the-art boilers, heat pumps, and valves to ensure optimal operational performance.'
  },
  {
    id: 7,
    title: 'Safety Commitment',
    slug: 'safety-commitment',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/features/851e60a8-bf3c-4c09-a704-6229f29a3251.svg',
    description: 'Our company is committed to delivering the highest safety standards across all installations, adhering to stringent engineering guidelines.'
  }
];

export const FALLBACK_SOLUTIONS: Solution[] = [
  {
    id: 1,
    title: 'Plant Upgrade & Improvement',
    slug: 'plant-upgrade-and-improvement',
    summary: 'Comprehensive plant modernization, efficiency optimization, and energy audit engineering.',
    description: 'Revati Global is a trusted partner in industrial plant retrofitting, boiler modernization, and process heating efficiency optimization.',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/solutions/4d7d75e1-6d19-41b1-ba85-73ba750d12be.webp'
  },
  {
    id: 2,
    title: 'Annual Service Contracts',
    slug: 'annual-service-contracts',
    summary: 'Dedicated routine maintenance, preventive diagnostics, and emergency onsite technical support.',
    description: 'Comprehensive annual maintenance contracts ensuring maximum uptime, certified calibration, and continuous steam reliability.',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/solutions/75bb7dc9-936b-415b-aeda-e6c93d20e07d.webp'
  },
  {
    id: 3,
    title: 'Supervision of Installation Testing & Commissioning',
    slug: 'supervision-of-installation-testing-and-commissioning',
    summary: 'Expert mechanical and electrical supervision during boiler, heat pump, and piping erection.',
    description: 'Certified engineers ensuring flawless alignment, pressure hydrostatic testing, and regulatory sign-offs.',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/solutions/b77bb28f-9017-40c0-b497-c060f0bed5ff.webp'
  },
  {
    id: 4,
    title: 'Balance of Plant',
    slug: 'balance-of-plant',
    summary: 'Turnkey thermal fluid auxiliaries, deaerators, feed water stations, and economizers.',
    description: 'Complete balance of plant engineering integrating boilers, economizers, water treatment, and electrical control panels.',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/solutions/4d7d75e1-6d19-41b1-ba85-73ba750d12be.webp'
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
    id: 5,
    title: 'Power Plant Waste Heat Recovery',
    slug: 'water-heat-recovery-power-plant',
    location: 'Kolkata, West Bengal',
    project_type: 'Energy Management',
    summary: 'Turnkey waste heat recovery boiler (WHR) and steam generation system integrated with exhaust loops.',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/projects/0d2d9d89-cc11-4358-b3ff-80471a1fd845.webp'
  },
  {
    id: 1,
    title: 'Regulatory Compliance System',
    slug: 'regulatory-compliance-system-1',
    location: 'Kolkata, West Bengal',
    project_type: 'Statutory Compliance',
    summary: 'Turnkey thermal engineering and statutory steam compliance system engineered for industrial manufacturing.',
    image: '/images/img/projects/project1.jpg'
  },
  {
    id: 2,
    title: 'Regulatory Compliance System',
    slug: 'regulatory-compliance-system-2',
    location: 'Kolkata, West Bengal',
    project_type: 'High-Temperature Piping',
    summary: 'High-temperature hydronic piping network and pressure vessel compliance validation.',
    image: '/images/img/projects/project2.jpg'
  },
  {
    id: 3,
    title: 'Regulatory Compliance System',
    slug: 'regulatory-compliance-system-3',
    location: 'Kolkata, West Bengal',
    project_type: 'Thermal Systems',
    summary: 'Automated thermal energy management and process heating monitoring.',
    image: '/images/img/projects/project3.jpg'
  },
  {
    id: 4,
    title: 'Regulatory Compliance System',
    slug: 'regulatory-compliance-system-4',
    location: 'Kolkata, West Bengal',
    project_type: 'Boiler Infrastructure',
    summary: 'Heavy-duty thermic fluid heating unit with automated modulation.',
    image: '/images/img/projects/project4.jpg'
  },
  {
    id: 6,
    title: 'Regulatory Compliance System',
    slug: 'regulatory-compliance-system-5',
    location: 'Kolkata, West Bengal',
    project_type: 'Energy Recovery',
    summary: 'High-pressure hydronic distribution loop with precision flow regulation.',
    image: '/images/img/projects/project5.jpg'
  }
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    full_name: 'Sheela Adhikari',
    company_name: 'Manufacturing Operations',
    position: 'Technical Director',
    message: 'I have been using the Shellmax Boiler for over two years at our manufacturing facility. It is easy to maintain, and the energy savings experienced have a positive impact on our overall cost structure.',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/testimonials/51bf09e2-b70a-44f2-b967-208304a83354.webp'
  },
  {
    id: 2,
    full_name: 'Nisha Karki',
    company_name: 'Industrial Processing Hub',
    position: 'Plant Operations Manager',
    message: 'Combipac boiler performance is highly efficient, providing consistent steam generation while keeping fuel consumption to a minimum. It has contributed to a cleaner and more sustainable operation.',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/testimonials/d93ed173-6da0-443f-b1f9-58036fe872c7.webp'
  },
  {
    id: 3,
    full_name: 'Mamata Gurung',
    company_name: 'Engineering Systems Ltd',
    position: 'Facilities Lead',
    message: 'Choosing Aquatherm for our plumbing systems has been one of the best decisions for our business. The durability and reliability of the pipes have significantly reduced maintenance costs and downtime.',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/testimonials/91a484ba-024d-4828-94d2-a2d103e04cc1.webp'
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
  }
];

export const FALLBACK_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: 'Technology is important for your business and industry growth',
    slug: 'technology-is-important-for-your-business-you-use-technology-makes',
    summary: 'How modern boiler technologies, digital dosing, and smart monitoring optimize energy output.',
    published_at: '2025-04-08',
    author: 'Revati Engineering Team',
    image: 'https://jpnzetekuwlnefxdrbgt.supabase.co/storage/v1/object/public/revati-media/blogs/0af8d54b-405a-4875-b371-d437276aa27d.webp'
  }
];

// -------------------------------------------------------------
// Live API Methods (with graceful fallback to verified assets)
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
    if (data.projects && data.projects.length > 0) {
      const combined: Project[] = [...data.projects];
      for (const fp of FALLBACK_PROJECTS) {
        if (!combined.some(p => p.slug === fp.slug || p.id === fp.id)) {
          combined.push(fp);
        }
      }
      return combined;
    }
    return FALLBACK_PROJECTS;
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
