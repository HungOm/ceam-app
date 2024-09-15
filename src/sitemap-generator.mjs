import { createWriteStream } from 'node:fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define your routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/mission', changefreq: 'weekly', priority: 0.8 },
  { url: '/community', changefreq: 'weekly', priority: 0.8 },
  { url: '/shelter', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

async function generateSitemap() {
  try {
    // Create a write stream to the desired sitemap location
    const writeStream = createWriteStream('./public/sitemap.xml');

    // Instantiate SitemapStream with your hostname
    const sitemapStream = new SitemapStream({ hostname: 'https://www.ceamalaysia.org' });

    // Pipe SitemapStream to writeStream
    sitemapStream.pipe(writeStream);

    // Write each URL to the sitemap stream
    links.forEach((link) => sitemapStream.write(link));

    // End the sitemap stream
    sitemapStream.end();

    // Wait until the stream is finished
    await streamToPromise(sitemapStream);

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Execute the sitemap generation
generateSitemap();
