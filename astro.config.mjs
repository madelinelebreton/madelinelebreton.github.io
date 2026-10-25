import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import figures from './src/plugins/rehype-figures.mjs';

// User site: https://madelinelebreton.github.io (served from the domain root, so no `base`).
export default defineConfig({
  site: 'https://madelinelebreton.github.io',
  trailingSlash: 'always',
  redirects: { '/news/': '/media/' },
  build: { format: 'directory' },
  image: { layout: 'constrained' },
  markdown: { processor: satteri({ hastPlugins: [figures] }) },
});
