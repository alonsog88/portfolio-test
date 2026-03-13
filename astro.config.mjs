// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alonsog88.github.io',  // 👈 two 8s
  base: '/portfolio-test',               // 👈 add this
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
