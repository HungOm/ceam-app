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

const sitemapStream = new SitemapStream({ hostname: 'https://www.ceamalaysia.org' });

const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemapStream)
  .then((data) => {
    console.log('Sitemap generated!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });

// Write each URL to the stream
links.forEach((link) => {
  sitemapStream.write(link);
});

// End the stream
sitemapStream.end();

// Pipe the stream to writeStream
sitemapStream.pipe(writeStream);
