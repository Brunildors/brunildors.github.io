import type { Textos } from './pt';

/** English texts. Must have exactly the same shape as pt.ts (the type checker enforces it). */
export const en: Textos = {
  html: 'en',
  ogLocale: 'en_US',

  perfil: {
    cargo: 'AI Systems Developer',
    local: 'Praia Grande, SP, Brazil',
    descricao:
      'Lucas Silva de Lira, AI systems developer in Praia Grande, SP, Brazil. Automation, multi-agent systems and LLMs.',
    resumo:
      'I study Artificial Intelligence and build systems with LLMs that turn repetitive tasks into automated workflows, sometimes with several AI agents working together. I code in Python and JavaScript, build workflows in n8n and develop with the help of Claude Code and Codex.',
    fotoAlt: 'Face photo of Lucas Silva de Lira',
    bio: [
      'I am an Artificial Intelligence student and I build systems with LLMs. I like to take a repetitive task, understand each step and turn it into an automated workflow, sometimes with several AI agents working together, each with its own role.',
      'I code in Python and JavaScript, build integrations and workflows in n8n, and develop with the help of coding agents such as Claude Code and Codex. I am also interested in prompt engineering and web development.',
      'In my personal projects I learn by building. Desafio de Kalos, for example, is a turn-based battle game in plain JavaScript, with automated tests and data from PokéAPI.',
    ],
  },

  ui: {
    pularConteudo: 'Skip to content',
    menuPrincipal: 'Main',
    inicio: 'Home',
    idioma: 'Language',
    apresentacao: 'Introduction',
  },

  menu: {
    sobre: 'About',
    experiencia: 'Experience',
    projetos: 'Projects',
    stacks: 'Stacks',
    formacao: 'Education',
    contato: 'Contact',
  },

  secoes: {
    experiencia: 'Experience',
    projetos: 'Projects',
    stacks: 'Stacks',
    formacao: 'Education & courses',
    contato: 'Contact',
  },

  hero: {
    baixarCurriculo: 'Download resume',
    email: 'E-mail',
  },

  projetos: {
    destaque: 'Featured project',
    detalhes: 'Details',
    codigoGithub: 'Code on GitHub',
    todos: 'All projects',
    meuPapel: 'My role',
    contexto: 'Context',
    tecnologias: 'Technologies',
    telaDoProjeto: 'Screenshot of the project',
  },

  stacks: {
    filtrarPor: 'Filter by role',
    todas: 'All',
    categorias: {
      web: 'Web',
      back: 'Back end',
      banco: 'Database',
      ia: 'AI & automation',
      design: 'Design',
    },
    tipos: {
      linguagem: 'Language',
      marcacao: 'Markup',
      estilo: 'Styling',
      banco: 'Database',
      tecnica: 'Technique',
      ferramenta: 'Tool',
    },
    statusTodas: 'Showing all {n} technologies',
    statusFiltro: 'Showing {n} technologies in {categoria}',
    statusFiltroUma: 'Showing 1 technology in {categoria}',
  },

  experiencias: [
    {
      cargo: 'Systems Analyst and Developer (LLMs)',
      empresa: 'Ellicon Assessoria Contábil',
      periodo: 'September 2025 – present',
      resumo:
        'Development of systems and automations with LLMs, including a multi-agent system that automates production.',
      tecnologias: ['Claude Code', 'Codex', 'n8n', 'LLMs'],
    },
    {
      cargo: 'Finance',
      empresa: 'Ellicon Assessoria Contábil',
      periodo: 'September 2025 – present',
      resumo: "The company's financial routines.",
    },
  ],

  formacao: {
    titulo: 'Education',
    itens: [
      {
        curso: 'Associate Degree in Artificial Intelligence',
        instituicao: '[TODO: institution]',
        periodo: '2026 – expected December 2027',
        status: 'In progress',
      },
      {
        curso: 'Computer Engineering',
        instituicao: '[TODO: institution]',
        periodo: 'Attended in 2025',
        status: 'Not completed',
      },
      {
        curso: 'High School',
        instituicao: 'Colégio Objetivo',
        periodo: 'Completed',
        status: 'Graduated',
      },
    ],
  },

  cursos: {
    titulo: 'Courses',
    itens: [
      { nome: 'Python', plataforma: 'FIAP – Nano Course' },
      { nome: 'Python', plataforma: 'Santander Academy' },
      { nome: 'Artificial Intelligence Ethics', plataforma: 'Bradesco Academy' },
    ],
  },

  contato: {
    frase: "Let's build something together?",
    apoio: 'If you want to talk about a project, a job or just swap ideas, pick the channel you prefer.',
  },

  rodape: {
    codigo: 'Source code of this site',
  },

  cv: {
    titulo: 'Resume',
    resumo: 'Summary',
    experiencia: 'Experience',
    projetos: 'Projects',
    formacao: 'Education',
    cursos: 'Courses',
    competencias: 'Skills',
  },

  erro404: {
    titulo: '404: page not found',
    texto: 'The address you opened does not exist or has moved.',
    voltar: 'Back to home',
  },
};
