export const perfil = {
  nome: 'Lucas Silva de Lira',
  cargo: 'Desenvolvedor de Sistemas com IA',
  subtitulo: 'Automação · Sistemas multiagentes · LLMs',
  local: 'Praia Grande, SP',
  valor: 'Construo sistemas com LLMs e agentes de IA que automatizam processos reais de empresas.',
  descricao:
    'Lucas Silva de Lira — desenvolvedor de sistemas com IA em Praia Grande/SP. Automação, sistemas multiagentes e LLMs aplicados a processos reais.',
  bio: [
    'Sou estudante de Inteligência Artificial e desenvolvo, na Ellicon Assessoria Contábil, sistemas que usam LLMs para automatizar processos do dia a dia da empresa.',
    'Por atuar também na área financeira, entendo o processo que estou automatizando — e isso muda a qualidade do que eu entrego.',
  ],
  /** E-mail público dedicado ao portfólio. Enquanto vazio, o site mostra um marcador [TODO]. */
  email: undefined as string | undefined,
  /** Foto opcional (colocar em src/assets e importar). */
  foto: undefined as string | undefined,
  cv: '/cv/Lucas-Silva-de-Lira-CV.pdf',
};

export const experiencias = [
  {
    empresa: 'Ellicon Assessoria Contábil',
    cargo: 'Analista e desenvolvedor de sistemas com LLMs (IA)',
    periodo: '[TODO: mês/ano] — atual',
    resumo:
      'Desenvolvimento de sistemas e automações com LLMs, incluindo um sistema multiagente para automatizar a produção.',
    tags: ['Claude Code', 'Codex', 'n8n', 'LLMs'],
  },
  {
    empresa: 'Ellicon Assessoria Contábil',
    cargo: 'Financeiro',
    periodo: '[TODO: mês/ano] — atual',
    resumo: 'Rotinas financeiras da empresa, o que dá visão de negócio ao que eu automatizo.',
    tags: ['Financeiro', 'Processos'],
  },
];

export const formacao = [
  {
    curso: 'Tecnólogo em Inteligência Artificial',
    instituicao: '[TODO: instituição]',
    periodo: '2026 — previsão dez/2027',
    status: 'Cursando',
  },
  {
    curso: 'Engenharia da Computação',
    instituicao: '[TODO: instituição]',
    periodo: 'Cursada em 2025',
    status: 'Incompleta',
  },
  {
    curso: 'Ensino Médio',
    instituicao: 'Colégio Objetivo',
    periodo: 'Concluído',
    status: 'Completo',
  },
];

export const cursos = [
  { nome: 'Python — Nano Course', plataforma: '[TODO: plataforma]' },
  { nome: 'Python — Santander Academy', plataforma: 'Santander Academy' },
  { nome: 'Ética em Inteligência Artificial', plataforma: '[TODO: plataforma]' },
];

/** Stack provisória — confirmar com o Lucas o que ele realmente domina. */
export const stack = [
  { grupo: 'Linguagens', itens: ['Python', 'JavaScript', 'TypeScript'] },
  { grupo: 'IA e automação', itens: ['LLMs', 'Claude Code', 'Codex', 'n8n', 'Sistemas multiagentes'] },
  { grupo: 'Web e design', itens: ['HTML', 'CSS', 'Figma', 'APIs REST'] },
];
