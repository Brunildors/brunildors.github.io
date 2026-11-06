---
titulo: Desafio de Kalos
resumo: Jogo web de batalhas por turnos, inspirado em Pokémon XY, feito com HTML, CSS e JavaScript puro e dados da PokéAPI.
stack: [HTML, CSS, JavaScript, PokéAPI]
ordem: 1
icone: tabler:swords
destaque: true
papel: Desenvolvedor
capa: ../../assets/projetos/desafio-de-kalos/capa.png
repositorio: https://github.com/Brunildors/Desafio-de-kalos
demo: https://brunildors.github.io/Desafio-de-kalos/
aviso: Projeto de fã, sem fins lucrativos e sem vínculo com a Nintendo, a Creatures Inc., a GAME FREAK ou a The Pokémon Company. Os dados e as imagens dos Pokémon vêm da PokéAPI.
---

## O jogo

O jogador é um treinador da região de Kalos. Ele escolhe o personagem, um parceiro inicial (Froakie, Chespin ou Fennekin) e enfrenta 10 fases de batalhas por turnos até se tornar campeão. No caminho, a equipe sobe de nível, evolui e captura novos Pokémon, até 6. São 3 vidas, o progresso fica salvo no navegador e a dificuldade aumenta a partir da fase 5.

## Como foi feito

- HTML, CSS e JavaScript com módulos ES, sem framework e sem etapa de build.
- Regras do jogo em módulos puros, separados da interface, que tem um arquivo por tela.
- Dados e imagens vindos da PokéAPI, com cache, tempo limite e novas tentativas.
- Testes automatizados com `node --test` para tabela de tipos, cálculo de dano, ordem dos turnos, evolução, sorteio de oponentes, capturas e save.
- Publicado como site estático no GitHub Pages.
