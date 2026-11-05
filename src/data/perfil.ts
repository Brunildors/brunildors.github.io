const cidade = 'Praia Grande';
const uf = 'SP';

export const perfil = {
  nome: 'Lucas Silva de Lira',
  cargo: 'Desenvolvedor de Sistemas com IA',
  cidade,
  uf,
  local: `${cidade}, ${uf}`,
  valor: 'Construo sistemas com LLMs e agentes de IA que automatizam processos reais de empresas.',
  descricao:
    'Lucas Silva de Lira, desenvolvedor de sistemas com IA em Praia Grande, SP. Automação, sistemas multiagentes e LLMs.',
  bio: [
    'Sou estudante de Inteligência Artificial e desenvolvo sistemas com LLMs. Gosto de pegar uma tarefa repetitiva, entender cada etapa e transformá-la em um fluxo automático, às vezes com vários agentes de IA trabalhando juntos, cada um com uma função.',
    'Programo em Python e JavaScript, monto integrações e fluxos no n8n e desenvolvo com o apoio de agentes de código, como o Claude Code e o Codex. Também me interesso por engenharia de prompts e por desenvolvimento web.',
    'Nos projetos pessoais, aprendo construindo. O Desafio de Kalos, por exemplo, é um jogo de batalhas por turnos em JavaScript puro, com testes automatizados e dados da PokéAPI.',
  ],
  cv: '/cv/Lucas-Silva-de-Lira-CV.pdf',
};

export const experiencias = [
  {
    cargo: 'Analista e desenvolvedor de sistemas com LLMs',
    empresa: 'Ellicon Assessoria Contábil',
    periodo: 'Setembro/2025 – atual',
    resumo:
      'Desenvolvimento de sistemas e automações com LLMs, incluindo um sistema multiagente para automatizar a produção.',
    tecnologias: ['Claude Code', 'Codex', 'n8n', 'LLMs'],
  },
  {
    cargo: 'Financeiro',
    empresa: 'Ellicon Assessoria Contábil',
    periodo: 'Setembro/2025 – atual',
    resumo: 'Rotinas financeiras da empresa.',
  },
];

export const formacao = [
  {
    curso: 'Tecnólogo em Inteligência Artificial',
    instituicao: '[TODO: instituição]',
    periodo: '2026 – previsão dezembro/2027',
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
  { nome: 'Python', plataforma: 'FIAP – Nano Course' },
  { nome: 'Python', plataforma: 'Santander Academy' },
  { nome: 'Ética em Inteligência Artificial', plataforma: 'Bradesco Academy' },
];

/** Baseado nas ferramentas do README do GitHub e no que o projeto usa de fato. */
export const competencias = [
  { grupo: 'Linguagens', itens: ['Python', 'JavaScript', 'HTML', 'CSS', 'C#', 'C++'] },
  { grupo: 'Dados', itens: ['MySQL'] },
  {
    grupo: 'IA e automação',
    itens: ['LLMs', 'Sistemas multiagentes', 'Engenharia de prompts', 'n8n', 'Claude Code', 'Codex'],
  },
  { grupo: 'Design', itens: ['Figma'] },
];
