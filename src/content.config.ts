import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Cada projeto tem duas partes:
 * - `projetos`: dados que não mudam com o idioma (ordem, ícone, tecnologias, capa e links). Um .json por projeto.
 * - `textosProjetos`: título, resumo e texto do projeto, um .md por idioma em textos/pt e textos/en.
 */
const projetos = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projetos/dados' }),
  schema: ({ image }) =>
    z.object({
      ordem: z.number(),
      /** Projeto em destaque: aparece como card grande no topo da vitrine. */
      destaque: z.boolean().default(false),
      /** Projeto com `rascunho: true` não é publicado. */
      rascunho: z.boolean().default(false),
      /** Emblema do card quando o projeto não tem capa (nome do ícone Tabler, ex.: tabler:trophy). */
      icone: z.string().default('tabler:code'),
      stack: z.array(z.string()),
      /** Imagem de capa, relativa a este arquivo. */
      capa: image().optional(),
      /** `cobrir` preenche o quadro (prints); `conter` mostra a imagem inteira, com folga (logos). */
      capaAjuste: z.enum(['cobrir', 'conter']).default('cobrir'),
      /** Repositório no GitHub. Sem ele, o botão não aparece. */
      repositorio: z.url().optional(),
      /** Versão publicada (jogo, site, protótipo). O rótulo do botão vem do texto do projeto. */
      demo: z.url().optional(),
    }),
});

const textosProjetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos/textos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    papel: z.string(),
    contexto: z.string().optional(),
    aviso: z.string().optional(),
    /** Rótulo do botão da demo: "Jogar", "Ver protótipo", "Abrir demonstração"… */
    demoRotulo: z.string().optional(),
    /** Texto alternativo da capa. */
    capaAlt: z.string().optional(),
    /** Legenda mostrada sob a capa na página do projeto. */
    legendaCapa: z.string().optional(),
  }),
});

export const collections = { projetos, textosProjetos };
