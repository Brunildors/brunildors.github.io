/**
 * Fonte única dos contatos e redes. Usada nos botões do hero e do contato,
 * no JSON-LD do SEO e nos atalhos curtos (/linkedin, /github, /whatsapp),
 * que viram redirecionamentos 301 em astro.config.ts.
 */
export interface Rede {
  id: 'email' | 'whatsapp' | 'linkedin' | 'github';
  nome: string;
  /** Texto exibido ao lado do nome no botão da seção Contato. */
  exibicao: string;
  /** Ícone do conjunto Tabler (astro-icon). */
  icone: string;
  url: string;
  /** Atalho curto do próprio site. Só as redes externas têm. */
  atalho: string;
}

export const redes: Rede[] = [
  {
    id: 'github',
    nome: 'GitHub',
    exibicao: 'Brunildors',
    icone: 'tabler:brand-github',
    url: 'https://github.com/Brunildors',
    atalho: '/github',
  },
  {
    id: 'linkedin',
    nome: 'LinkedIn',
    exibicao: 'lucas-silva-de-lira',
    icone: 'tabler:brand-linkedin',
    url: 'https://www.linkedin.com/in/lucas-silva-de-lira-00a8a8427/',
    atalho: '/linkedin',
  },
  {
    id: 'whatsapp',
    nome: 'WhatsApp',
    exibicao: '(13) 97419-3984',
    icone: 'tabler:brand-whatsapp',
    url: 'https://wa.me/5513974193984',
    atalho: '/whatsapp',
  },
];

export const email = {
  id: 'email',
  nome: 'E-mail',
  exibicao: 'luccassliraa@gmail.com',
  icone: 'tabler:mail',
  url: 'mailto:luccassliraa@gmail.com',
} as const;

/** Ordem do botão na seção Contato. */
export const contatos = [email, ...redes];
