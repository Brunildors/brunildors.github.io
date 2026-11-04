import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    stack: z.array(z.string()),
    ordem: z.number(),
    destaque: z.boolean().default(false),
    /** Projeto com `rascunho: true` não é publicado. */
    rascunho: z.boolean().default(false),
    papel: z.string(),
    contexto: z.string().optional(),
    links: z.array(z.object({ rotulo: z.string(), url: z.string() })).default([]),
    aviso: z.string().optional(),
  }),
});

export const collections = { projetos };
