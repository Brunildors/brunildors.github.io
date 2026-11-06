import { defineConfig, fontProviders } from 'astro/config';
import type { AstroIntegration } from 'astro';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { redes } from './src/data/redes';

/**
 * Atalhos curtos (/linkedin, /github…) gerados a partir de src/data/redes.ts.
 * Grava dist/_redirects com 301 reais — formato lido por Netlify e Cloudflare Pages.
 * (Sem adaptador: o site continua 100% estático e portátil.)
 */
const atalhosDasRedes = (): AstroIntegration => ({
  name: 'atalhos-das-redes',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const linhas = redes.map((r) => `${r.atalho} ${r.url} 301`).join('\n') + '\n';
      await writeFile(fileURLToPath(new URL('_redirects', dir)), linhas, 'utf8');
    },
  },
});

export default defineConfig({
  // Canonical, sitemap e Open Graph dependem desta URL. No Netlify, `URL` já vem com o endereço do site.
  site: process.env.URL ?? 'http://localhost:4321',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !/\/(og|cv)\/?$/.test(page) }), icon(), atalhosDasRedes()],
  i18n: { defaultLocale: 'pt-br', locales: ['pt-br'] },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Chakra Petch',
      cssVariable: '--fonte-display',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Sans',
      cssVariable: '--fonte-texto',
      weights: [400, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--fonte-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
