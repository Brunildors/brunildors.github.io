/**
 * Textos em português. O inglês (en.ts) é tipado a partir deste arquivo:
 * se um texto faltar lá, o `npm run check` acusa.
 */
export const pt = {
  html: 'pt-BR',
  ogLocale: 'pt_BR',

  perfil: {
    cargo: 'Desenvolvedor de Sistemas com IA',
    local: 'Praia Grande, SP',
    descricao:
      'Lucas Silva de Lira, desenvolvedor de sistemas com IA em Praia Grande, SP. Automação, sistemas multiagentes e LLMs.',
    /** Resumo do topo do site (hero). */
    resumo:
      'Estudo Inteligência Artificial e desenvolvo sistemas com LLMs que transformam tarefas repetitivas em fluxos automáticos, às vezes com vários agentes de IA trabalhando juntos. Programo em Python e JavaScript, monto fluxos no n8n e desenvolvo com o apoio do Claude Code e do Codex.',
    fotoAlt: 'Foto de rosto de Lucas Silva de Lira',
    /** Texto longo, usado só no currículo em PDF. */
    bio: [
      'Sou estudante de Inteligência Artificial e desenvolvo sistemas com LLMs. Gosto de pegar uma tarefa repetitiva, entender cada etapa e transformá-la em um fluxo automático, às vezes com vários agentes de IA trabalhando juntos, cada um com uma função.',
      'Programo em Python e JavaScript, monto integrações e fluxos no n8n e desenvolvo com o apoio de agentes de código, como o Claude Code e o Codex. Também me interesso por engenharia de prompts e por desenvolvimento web.',
      'Nos projetos pessoais, aprendo construindo. O Desafio de Kalos, por exemplo, é um jogo de batalhas por turnos em JavaScript puro, com testes automatizados e dados da PokéAPI.',
    ],
  },

  ui: {
    pularConteudo: 'Pular para o conteúdo',
    menuPrincipal: 'Principal',
    inicio: 'Início',
    idioma: 'Idioma',
    apresentacao: 'Apresentação',
  },

  menu: {
    sobre: 'Sobre',
    experiencia: 'Experiência',
    projetos: 'Projetos',
    stacks: 'Stacks',
    formacao: 'Formação',
    contato: 'Contato',
  },

  secoes: {
    experiencia: 'Experiência',
    projetos: 'Projetos',
    stacks: 'Stacks',
    formacao: 'Formação e cursos',
    contato: 'Contato',
  },

  hero: {
    baixarCurriculo: 'Baixar currículo',
    email: 'E-mail',
  },

  projetos: {
    destaque: 'Projeto em destaque',
    detalhes: 'Detalhes',
    codigoGithub: 'Código no GitHub',
    todos: 'Todos os projetos',
    meuPapel: 'Meu papel',
    contexto: 'Contexto',
    tecnologias: 'Tecnologias',
    telaDoProjeto: 'Tela do projeto',
  },

  stacks: {
    filtrarPor: 'Filtrar por função',
    todas: 'Todas',
    categorias: {
      web: 'Web',
      back: 'Back-end',
      banco: 'Banco de dados',
      ia: 'IA e automação',
      design: 'Design',
    },
    tipos: {
      linguagem: 'Linguagem',
      marcacao: 'Marcação',
      estilo: 'Estilo',
      banco: 'Banco',
      tecnica: 'Técnica',
      ferramenta: 'Ferramenta',
    },
    statusTodas: 'Mostrando todas as {n} tecnologias',
    statusFiltro: 'Mostrando {n} tecnologias de {categoria}',
    statusFiltroUma: 'Mostrando 1 tecnologia de {categoria}',
  },

  experiencias: [
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
  ],

  formacao: {
    titulo: 'Formação',
    itens: [
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
    ],
  },

  cursos: {
    titulo: 'Cursos',
    itens: [
      { nome: 'Python', plataforma: 'FIAP – Nano Course' },
      { nome: 'Python', plataforma: 'Santander Academy' },
      { nome: 'Ética em Inteligência Artificial', plataforma: 'Bradesco Academy' },
    ],
  },

  contato: {
    frase: 'Vamos construir algo juntos?',
    apoio: 'Se quiser falar sobre um projeto, uma vaga ou só trocar uma ideia, escolha o canal que preferir.',
  },

  rodape: {
    codigo: 'Código deste site',
  },

  cv: {
    titulo: 'Currículo',
    resumo: 'Resumo',
    experiencia: 'Experiência',
    projetos: 'Projetos',
    formacao: 'Formação',
    cursos: 'Cursos',
    competencias: 'Competências',
  },

  erro404: {
    titulo: '404: página não encontrada',
    texto: 'O endereço que você abriu não existe ou foi movido.',
    voltar: 'Voltar ao início',
  },
};

export type Textos = typeof pt;
