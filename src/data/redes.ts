/**
 * Fonte única das redes sociais.
 * - Preencha `url` para a rede aparecer no site (hero, contato, rodapé).
 * - `atalho` vira um redirecionamento 301 (ex.: /linkedin) em astro.config.ts.
 * Redes com `url` vazia ficam ocultas até serem preenchidas.
 */
export interface Rede {
  id: string;
  nome: string;
  /** Nome do ícone no conjunto Tabler (astro-icon). */
  icone: string;
  url?: string;
  atalho: string;
}

export const redes: Rede[] = [
  { id: 'linkedin', nome: 'LinkedIn', icone: 'tabler:brand-linkedin', url: undefined, atalho: '/linkedin' },
  { id: 'github', nome: 'GitHub', icone: 'tabler:brand-github', url: undefined, atalho: '/github' },
  {
    id: 'instagram',
    nome: 'Instagram',
    icone: 'tabler:brand-instagram',
    url: undefined,
    atalho: '/instagram',
  },
];

export const redesAtivas = redes.filter((r): r is Rede & { url: string } => Boolean(r.url));
