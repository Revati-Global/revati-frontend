import { MetadataRoute } from 'next';
import { getSolutions, getProducts, getProjects, getApplications, getBlogs } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://revatiglobal.com';

  const [solutions, products, projects, applications, blogs] = await Promise.all([
    getSolutions(),
    getProducts(),
    getProjects(),
    getApplications(),
    getBlogs()
  ]);

  const staticPages = [
    '',
    '/about',
    '/solutions',
    '/products',
    '/applications',
    '/projects',
    '/downloads',
    '/blog',
    '/contact',
    '/privacy',
    '/terms'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const solutionPages = solutions.map(s => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const productPages = products.map(p => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const projectPages = projects.map(pr => ({
    url: `${baseUrl}/projects/${pr.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = blogs.map(b => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...solutionPages, ...productPages, ...projectPages, ...blogPages];
}
