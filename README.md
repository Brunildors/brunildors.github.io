# Portfólio — Lucas Silva de Lira

Portfólio web de desenvolvedor de sistemas com IA. Site estático feito com **Astro**, **TypeScript** e **Tailwind CSS**.

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

- Perfil, experiência, formação, cursos e stack: `src/data/perfil.ts`
- Redes sociais (e atalhos `/linkedin`, `/github`…): `src/data/redes.ts` — preencha `url` para a rede aparecer
- Projetos: um arquivo `.md` em `src/content/projetos/` (imagens em `src/assets/projetos/<slug>/`); `rascunho: true` esconde o projeto
- Depois de mudar o conteúdo, rode `npm run assets` para atualizar o CV em PDF

## Pendências antes do lançamento

Tudo que ainda falta aparece no site como `[TODO: …]`, e o CI bloqueia PRs para a `main` enquanto houver algum.
Confirmar também a URL final em `astro.config.ts` (`site`).

## Deploy (Netlify)

O plano gratuito usa créditos: cada deploy de produção custa 15 de 300 por mês, e deploy previews são grátis.
Fluxo: trabalhar na `dev`, abrir PR para a `main`, conferir o preview e juntar várias mudanças por merge.

## Licença

Código sob MIT. Textos, imagens e CV: todos os direitos reservados (veja `LICENSE`).
