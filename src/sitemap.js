import { generateSitemap } from 'react-sitemap-generator';
import Router from './Router';

generateSitemap({
  url: 'https://www.detweiler.co.uk',
  routes: [Router],
  output: './public',
});
