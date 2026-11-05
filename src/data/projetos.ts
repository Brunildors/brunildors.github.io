import { getCollection } from 'astro:content';

/** Projetos publicados (sem `rascunho`), na ordem definida em `ordem`. */
export async function projetosPublicados() {
  const projetos = await getCollection('projetos', (p) => !p.data.rascunho);
  return projetos.sort((a, b) => a.data.ordem - b.data.ordem);
}
