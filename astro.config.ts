import { defineConfig } from 'astro/config';
import type { AstroIntegration } from 'astro';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { redesAtivas } from './src/data/redes';

/**
 * Atalhos curtos (/linkedin, /github…) gerados a partir de src/data/redes.ts.
 * Grava dist/_redirects com 301 reais — formato lido por Netlify e Cloudflare Pages.
 * (Sem adaptador: o site continua 100% estático e portátil.)
 */
const atalhosDasRedes = (): AstroIntegration => ({
  name: 'atalhos-das-redes',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (redesAtivas.length === 0) return;
      const linhas = redesAtivas.map((r) => `${r.atalho} ${r.url} 301`).join('\n') + '\n';
      await writeFile(fileURLToPath(new URL('_redirects', dir)), linhas, 'utf8');
    },
  },
});

export default defineConfig({
  // Provisório: trocar pela URL final antes do lançamento (canonical, sitemap e Open Graph dependem dela).
  site: 'https://lucaslira.netlify.app',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !/\/(og|cv)\/?$/.test(page) }), icon(), atalhosDasRedes()],
  i18n: { defaultLocale: 'pt-br', locales: ['pt-br'] },
  vite: { plugins: [tailwindcss()] },
});
