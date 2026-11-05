/**
 * Fonte única dos contatos. Usada nos botões do hero e da seção Contato,
 * no JSON-LD do SEO e nos atalhos curtos (/github, /linkedin, /whatsapp),
 * que viram redirecionamentos 301 em astro.config.ts.
 */
export interface Contato {
  nome: string;
  /** Texto exibido ao lado do nome no botão da seção Contato. */
  exibicao: string;
  /** Ícone do conjunto Tabler (astro-icon). */
  icone: string;
  url: string;
  /** Atalho curto do próprio site. Só as redes externas têm (o e-mail não). */
  atalho?: string;
  /** Perfil público de pessoa (vai no `sameAs` do SEO). WhatsApp e e-mail não são. */
  perfilPublico?: boolean;
}

/** Ordem dos botões no hero e na seção Contato. */
export const contatos: Contato[] = [
  {
    nome: 'E-mail',
    exibicao: 'luccassliraa@gmail.com',
    icone: 'tabler:mail',
    url: 'mailto:luccassliraa@gmail.com',
  },
  {
    nome: 'GitHub',
    exibicao: 'Brunildors',
    icone: 'tabler:brand-github',
    url: 'https://github.com/Brunildors',
    atalho: '/github',
    perfilPublico: true,
  },
  {
    nome: 'LinkedIn',
    exibicao: 'lucas-silva-de-lira',
    icone: 'tabler:brand-linkedin',
    url: 'https://www.linkedin.com/in/lucas-silva-de-lira-00a8a8427/',
    atalho: '/linkedin',
    perfilPublico: true,
  },
  {
    nome: 'WhatsApp',
    exibicao: '(13) 97419-3984',
    icone: 'tabler:brand-whatsapp',
    url: 'https://wa.me/5513974193984',
    atalho: '/whatsapp',
  },
];

/** Contatos com atalho próprio, que viram redirecionamentos 301. */
export const redes = contatos.filter((c): c is Contato & { atalho: string } => Boolean(c.atalho));

/** URLs de perfis públicos, para o `sameAs` do SEO. */
export const perfisPublicos = contatos.filter((c) => c.perfilPublico).map((c) => c.url);
