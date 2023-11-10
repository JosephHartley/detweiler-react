import { createSitemap } from 'sitemap';
import { writeFileSync } from 'fs';

const hostname = 'https://www.detweiler.co.uk';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/gigs', changefreq: 'monthly', priority: 0.8 },
  { url: '/releases', changefreq: 'monthly', priority: 0.8 },
  { url: '/news', changefreq: 'monthly', priority: 0.8 },
];

const sitemapInstance = createSitemap({
  hostname,
  urls,
});

writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
