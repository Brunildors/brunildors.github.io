import type { Bilingue } from '../i18n';

/** Papel da tecnologia na stack: separa linguagem de ferramenta, banco, técnica etc. */
export type Tipo = 'linguagem' | 'marcacao' | 'estilo' | 'banco' | 'tecnica' | 'ferramenta';

/** Funções (categorias) usadas no filtro da aba Stacks. Os nomes ficam em src/i18n. */
export type Categoria = 'web' | 'back' | 'banco' | 'ia' | 'design';

export interface ItemStack {
  nome: Bilingue;
  /** Ícone do conjunto Tabler (astro-icon). */
  icone: string;
  tipo: Tipo;
}

/** Baseado nas ferramentas do README do GitHub e no que os projetos usam de fato. */
export const stacks: { id: Categoria; itens: ItemStack[] }[] = [
  {
    id: 'web',
    itens: [
      { nome: 'HTML', icone: 'tabler:brand-html5', tipo: 'marcacao' },
      { nome: 'CSS', icone: 'tabler:brand-css3', tipo: 'estilo' },
      { nome: 'JavaScript', icone: 'tabler:brand-javascript', tipo: 'linguagem' },
    ],
  },
  {
    id: 'back',
    itens: [
      { nome: 'Python', icone: 'tabler:brand-python', tipo: 'linguagem' },
      { nome: 'C#', icone: 'tabler:brand-c-sharp', tipo: 'linguagem' },
      { nome: 'C++', icone: 'tabler:brand-cpp', tipo: 'linguagem' },
    ],
  },
  {
    id: 'banco',
    itens: [{ nome: 'MySQL', icone: 'tabler:brand-mysql', tipo: 'banco' }],
  },
  {
    id: 'ia',
    itens: [
      { nome: 'LLMs', icone: 'tabler:brain', tipo: 'tecnica' },
      {
        nome: { pt: 'Sistemas multiagentes', en: 'Multi-agent systems' },
        icone: 'tabler:topology-star-3',
        tipo: 'tecnica',
      },
      {
        nome: { pt: 'Engenharia de prompts', en: 'Prompt engineering' },
        icone: 'tabler:prompt',
        tipo: 'tecnica',
      },
      { nome: 'n8n', icone: 'tabler:route', tipo: 'ferramenta' },
      { nome: 'Claude Code', icone: 'tabler:terminal-2', tipo: 'ferramenta' },
      { nome: 'Codex', icone: 'tabler:brand-openai', tipo: 'ferramenta' },
    ],
  },
  {
    id: 'design',
    itens: [{ nome: 'Figma', icone: 'tabler:brand-figma', tipo: 'ferramenta' }],
  },
];
