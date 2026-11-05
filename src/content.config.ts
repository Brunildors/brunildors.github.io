import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumo: z.string(),
      stack: z.array(z.string()),
      ordem: z.number(),
      /** Projeto com `rascunho: true` não é publicado. */
      rascunho: z.boolean().default(false),
      papel: z.string(),
      contexto: z.string().optional(),
      /** Imagem de capa, relativa ao .md. Sem ela, o projeto aparece só com texto. */
      capa: image().optional(),
      /** Repositório no GitHub. Sem ele, o botão não aparece. */
      repositorio: z.url().optional(),
      /** Versão publicada (jogo, site) para o botão "Jogar". */
      demo: z.url().optional(),
      aviso: z.string().optional(),
    }),
});

export const collections = { projetos };
