import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './dist',
  publicDir: './public',
  site: 'https://abakersconfession.co.uk',
  build: {
    // This ensures files in public directory are copied as-is
    assets: '_assets'
  }
});