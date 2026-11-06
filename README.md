# Portfólio — Lucas Silva de Lira

Portfólio web de desenvolvedor de sistemas com IA. Site estático feito com **Astro** e **TypeScript**, com CSS próprio (sem framework de estilos) e fontes Chakra Petch e IBM Plex hospedadas no próprio site.

O visual segue uma paleta própria, em `src/styles/global.css`: grafite, metal, vinho, bordô e prata. As animações de passagem entre seções ficam em `src/scripts/passagem.ts` e só rodam com JavaScript e sem pedido de movimento reduzido.

## Rodar localmente

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # gera dist/
npm run preview    # serve dist/ (use -- --host para testar no celular pelo Wi-Fi)
npm run check      # tipos
npm run lint
npm run assets     # gera o PDF do CV e a imagem Open Graph (precisa de Brave, Chrome ou Edge)
```

## Idiomas

O site existe em português (`/`) e em inglês (`/en/`), cada um com suas próprias páginas, e o botão PT | EN leva à mesma página no outro idioma. O currículo em PDF também tem as duas versões.

## Como editar o conteúdo

- **Textos do site** (cargo, resumo, experiência, formação, cursos, menus e botões): `src/i18n/pt.ts` e `src/i18n/en.ts`. O inglês é tipado a partir do português: se um texto faltar, o `npm run check` acusa.
- **Contatos e redes** (e atalhos `/github`, `/linkedin`, `/whatsapp`): `src/data/redes.ts`
- **Stacks** (tecnologias, função e tipo): `src/data/stacks.ts`
- **Projetos:** dois arquivos por projeto.
  - `src/content/projetos/dados/<slug>.json`: o que não muda com o idioma (ordem, ícone, tecnologias, capa, `repositorio` e `demo`). `destaque: true` faz o projeto virar o card grande; `capaAjuste: "conter"` mostra logos inteiros.
  - `src/content/projetos/textos/pt/<slug>.md` e `.../en/<slug>.md`: título, resumo, rótulo do botão da demo e texto do projeto.
  - Imagens em `src/assets/projetos/<slug>/`. `rascunho: true` esconde o projeto.
- Depois de mudar o conteúdo, rode `npm run assets` para atualizar os currículos em PDF (PT e EN) e as imagens de compartilhamento.

## Pendências antes do lançamento

Tudo que ainda falta aparece no site como `[TODO: …]`, e o CI bloqueia PRs para a `main` enquanto houver algum em `src/`.

A URL do site (`site` em `astro.config.ts`) vem da variável `URL`: o workflow de deploy a define e, no Netlify, ela já vem pronta. Localmente, vale `http://localhost:4321`.
O PDF do CV e a imagem de compartilhamento ficam versionados: rode `npm run assets` sempre que o conteúdo mudar.

## Deploy

**GitHub Pages (atual):** todo push na `main` publica o site em https://brunildors.github.io/ pelo workflow `.github/workflows/deploy.yml`.
Fluxo: trabalhar na `dev` (o CI roda a cada push), abrir PR para a `main` e fazer o merge.

Os atalhos `/github`, `/linkedin` e `/whatsapp` geram o arquivo `dist/_redirects`, que o GitHub Pages não lê. Eles só funcionam em Netlify ou Cloudflare Pages.

**Netlify (alternativa):** o `netlify.toml` já está pronto. O plano gratuito usa créditos: cada deploy de produção custa 15 de 300 por mês, e deploy previews são grátis.

## Licença

Código sob MIT. Textos, imagens e CV: todos os direitos reservados (veja `LICENSE`).
