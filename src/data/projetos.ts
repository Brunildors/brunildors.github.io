import { getCollection, getEntry } from 'astro:content';
import type { Lang } from '../i18n';

/**
 * Projetos publicados (sem `rascunho`), na ordem definida em `ordem`, com o texto no idioma pedido.
 * Os dados (capa, links, tecnologias) vêm de projetos/dados e os textos de projetos/textos/<idioma>.
 */
export async function projetosPublicados(lang: Lang) {
  const dados = (await getCollection('projetos', (p) => !p.data.rascunho)).sort(
    (a, b) => a.data.ordem - b.data.ordem,
  );

  return Promise.all(
    dados.map(async (projeto) => {
      const texto = await getEntry('textosProjetos', `${lang}/${projeto.id}`);
      if (!texto) throw new Error(`Falta o texto em "${lang}" do projeto "${projeto.id}".`);
      return { slug: projeto.id, dados: projeto.data, texto };
    }),
  );
}

export type ProjetoPublicado = Awaited<ReturnType<typeof projetosPublicados>>[number];
