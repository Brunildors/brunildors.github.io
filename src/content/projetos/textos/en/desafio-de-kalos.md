---
titulo: Desafio de Kalos
resumo: A turn-based web battle game inspired by Pokémon XY, built with plain HTML, CSS and JavaScript and data from PokéAPI.
papel: Developer
demoRotulo: Play
capaAlt: Desafio de Kalos start screen, with the choice between a female and a male trainer
aviso: A fan project, non-profit and not affiliated with Nintendo, Creatures Inc., GAME FREAK or The Pokémon Company. Pokémon data and images come from PokéAPI.
---

## The game

The player is a trainer from the Kalos region. They pick a character and a starter partner (Froakie, Chespin or Fennekin) and face 10 turn-based battle stages until they become champion. Along the way the team levels up, evolves and captures new Pokémon, up to 6. There are 3 lives, progress is saved in the browser and difficulty rises from stage 5.

## How it was built

- HTML, CSS and JavaScript with ES modules, no framework and no build step.
- Game rules in pure modules, separate from the interface, which has one file per screen.
- Data and images from PokéAPI, with caching, timeouts and retries.
- Automated tests with `node --test` for the type chart, damage calculation, turn order, evolution, opponent draws, captures and saves.
- Published as a static site on GitHub Pages.
