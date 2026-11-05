# Portfólio — Lucas Silva de Lira

Portfólio web de desenvolvedor de sistemas com IA. Site estático feito com **Astro** e **TypeScript**, com CSS próprio (sem framework de estilos) e fontes IBM Plex hospedadas no próprio site.

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

## Como editar o conteúdo

- Perfil, experiência, formação, cursos e competências: `src/data/perfil.ts`
- Contatos e redes (e atalhos `/github`, `/linkedin`, `/whatsapp`): `src/data/redes.ts`
- Projetos: um arquivo `.md` em `src/content/projetos/` (imagens em `src/assets/projetos/<slug>/`).
  - `repositorio` e `demo` criam os botões "Código no GitHub" e "Jogar"; sem eles, os botões não aparecem.
  - `rascunho: true` esconde o projeto.
- Depois de mudar o conteúdo, rode `npm run assets` para atualizar o CV em PDF.

## Pendências antes do lançamento

Tudo que ainda falta aparece no site como `[TODO: …]`, e o CI bloqueia PRs para a `main` enquanto houver algum em `src/`.

A URL do site (`site` em `astro.config.ts`) vem da variável `URL`, que o Netlify já define no build. Localmente, vale `http://localhost:4321`.
O PDF do CV e a imagem de compartilhamento ficam versionados: rode `npm run assets` sempre que o conteúdo mudar.

## Deploy (Netlify)

O plano gratuito usa créditos: cada deploy de produção custa 15 de 300 por mês, e deploy previews são grátis.
Fluxo: trabalhar na `dev`, abrir PR para a `main`, conferir o preview e juntar várias mudanças por merge.

## Licença

Código sob MIT. Textos, imagens e CV: todos os direitos reservados (veja `LICENSE`).
