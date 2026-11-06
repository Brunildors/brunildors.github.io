import type { Lang } from '../i18n';

/**
 * Dados que são os mesmos nos dois idiomas. Os textos (cargo, resumo, experiência…)
 * ficam em src/i18n/pt.ts e src/i18n/en.ts.
 */
export const perfil = {
  nome: 'Lucas Silva de Lira',
  cidade: 'Praia Grande',
  uf: 'SP',
  repositorio: 'https://github.com/Brunildors/brunildors.github.io',
};

/** Currículo em PDF de cada idioma, gerado por `npm run assets`. */
export const curriculo: Record<Lang, string> = {
  pt: '/cv/Lucas-Silva-de-Lira-CV.pdf',
  en: '/cv/Lucas-Silva-de-Lira-Resume.pdf',
};
