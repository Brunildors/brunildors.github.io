import { pt, type Textos } from './pt';
import { en } from './en';

export type Lang = 'pt' | 'en';
export const idiomas: Lang[] = ['pt', 'en'];

const dicionarios: Record<Lang, Textos> = { pt, en };

/** Textos da interface no idioma pedido. */
export const textos = (lang: Lang): Textos => dicionarios[lang];

/** Valor que pode ser o mesmo nos dois idiomas (string) ou ter uma versão para cada. */
export type Bilingue = string | Record<Lang, string>;
export const traduz = (valor: Bilingue, lang: Lang): string =>
  typeof valor === 'string' ? valor : valor[lang];

/** Rotas do site. O português fica na raiz e o inglês em /en/. */
export const rotaHome = (lang: Lang): string => (lang === 'pt' ? '/' : '/en/');
export const rotaProjeto = (lang: Lang, slug: string): string =>
  lang === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`;

/** A mesma página nos dois idiomas, para o botão PT | EN e para o hreflang. */
export type Alternativas = Record<Lang, string>;
export const alternativasHome: Alternativas = { pt: rotaHome('pt'), en: rotaHome('en') };
export const alternativasProjeto = (slug: string): Alternativas => ({
  pt: rotaProjeto('pt', slug),
  en: rotaProjeto('en', slug),
});
