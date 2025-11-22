export type LessonType = "video" | "quiz";

export type QuizOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type QuizQuestion = {
  id: string;
  text: string;
  options: QuizOption[];
};

export type Lesson = {
  id: string;
  title: string;
  type: LessonType;
  youtubeId?: string;
  description?: string;
  questions?: QuizQuestion[];
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Trail = {
  id: string;
  title: string;
  description: string;
  modules: Module[];
};

// ======================================================
// TRILHA 1 – COMUNICAÇÃO PROFISSIONAL
// ======================================================

const communicationTrail: Trail = {
  id: "communication",
  title: "Comunicação Profissional",
  description:
    "Comunicação eficaz, postura e competências essenciais no ambiente de trabalho.",
  modules: [
    {
      id: "comm-m1",
      title: "Fundamentos da Comunicação",
      lessons: [
        {
          id: "comm-m1l1",
          title: "O que é comunicação profissional?",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Entenda o conceito de comunicação profissional e seu impacto no dia a dia de trabalho.",
        },
        {
          id: "comm-m1l2",
          title: "Postura e linguagem no ambiente corporativo",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Veja exemplos práticos de postura, tom de voz e linguagem adequada.",
        },
        {
          id: "comm-m1l3",
          title: "Quiz: Conceitos básicos",
          type: "quiz",
          questions: [
            {
              id: "comm-m1l3q1",
              text: "Comunicação assertiva é:",
              options: [
                {
                  id: "a",
                  text: "Falar tudo o que pensa, sem filtros.",
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: "Expressar-se com clareza e respeito.",
                  isCorrect: true,
                },
                {
                  id: "c",
                  text: "Evitar conflitos a qualquer custo.",
                  isCorrect: false,
                },
              ],
            },
            {
              id: "comm-m1l3q2",
              text: "No ambiente de trabalho, é importante:",
              options: [
                {
                  id: "a",
                  text: "Escutar ativamente os colegas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Falar mais alto para se impor.",
                  isCorrect: false,
                },
                {
                  id: "c",
                  text: "Interromper para mostrar interesse.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m1l4",
          title: "Quiz: Comunicação verbal",
          type: "quiz",
          questions: [
            {
              id: "comm-m1l4q1",
              text: "Qual é um exemplo de boa comunicação verbal?",
              options: [
                {
                  id: "a",
                  text: "Usar gírias o tempo todo.",
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: "Ser claro e objetivo.",
                  isCorrect: true,
                },
                {
                  id: "c",
                  text: "Falar muito rápido.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m1l5",
          title: "Quiz: Comunicação não verbal",
          type: "quiz",
          questions: [
            {
              id: "comm-m1l5q1",
              text: "Entre os itens abaixo, qual ajuda na comunicação não verbal?",
              options: [
                {
                  id: "a",
                  text: "Contato visual adequado.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Ficar olhando para o celular.",
                  isCorrect: false,
                },
                {
                  id: "c",
                  text: "Cruzar os braços e se afastar.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "comm-m2",
      title: "Comunicação Escrita",
      lessons: [
        {
          id: "comm-m2l1",
          title: "Boas práticas em e-mails",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Aprenda como escrever e-mails objetivos e profissionais.",
        },
        {
          id: "comm-m2l2",
          title: "Mensagens em aplicativos corporativos",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como se comunicar bem em chats internos como Teams, Slack, etc.",
        },
        {
          id: "comm-m2l3",
          title: "Quiz: Estrutura de um e-mail",
          type: "quiz",
          questions: [
            {
              id: "comm-m2l3q1",
              text: "O que NÃO é recomendado em um e-mail profissional?",
              options: [
                { id: "a", text: "Assunto claro.", isCorrect: false },
                { id: "b", text: "Saudação inicial.", isCorrect: false },
                {
                  id: "c",
                  text: "Uso excessivo de emojis.",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m2l4",
          title: "Quiz: Tom de voz na escrita",
          type: "quiz",
          questions: [
            {
              id: "comm-m2l4q1",
              text: "Qual opção representa um tom adequado?",
              options: [
                {
                  id: "a",
                  text: '"URGENTE!!! RESPONDA AGORA!!!"',
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: '"Por favor, poderia verificar isso hoje?"',
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m2l5",
          title: "Quiz: Revisão de texto",
          type: "quiz",
          questions: [
            {
              id: "comm-m2l5q1",
              text: "Antes de enviar um e-mail é importante:",
              options: [
                {
                  id: "a",
                  text: "Conferir ortografia e clareza.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Enviar o mais rápido possível.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "comm-m3",
      title: "Comunicação em Equipe",
      lessons: [
        {
          id: "comm-m3l1",
          title: "Trabalho em equipe e colaboração",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Entenda o papel da comunicação no trabalho em equipe.",
        },
        {
          id: "comm-m3l2",
          title: "Feedbacks construtivos",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como dar e receber feedbacks de maneira saudável.",
        },
        {
          id: "comm-m3l3",
          title: "Quiz: Empatia na equipe",
          type: "quiz",
          questions: [
            {
              id: "comm-m3l3q1",
              text: "Ser empático significa:",
              options: [
                {
                  id: "a",
                  text: "Ignorar as dificuldades do outro.",
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: "Tentar compreender o ponto de vista do outro.",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m3l4",
          title: "Quiz: Conflitos",
          type: "quiz",
          questions: [
            {
              id: "comm-m3l4q1",
              text: "Em um conflito na equipe, é melhor:",
              options: [
                {
                  id: "a",
                  text: "Conversar abertamente e buscar solução.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Falar mal da pessoa para outros colegas.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m3l5",
          title: "Quiz: Escuta ativa",
          type: "quiz",
          questions: [
            {
              id: "comm-m3l5q1",
              text: "Escuta ativa envolve:",
              options: [
                {
                  id: "a",
                  text: "Prestar atenção e fazer perguntas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Pensar apenas na resposta.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "comm-m4",
      title: "Comunicação com Clientes",
      lessons: [
        {
          id: "comm-m4l1",
          title: "Primeiro contato com o cliente",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como se apresentar e criar uma boa primeira impressão.",
        },
        {
          id: "comm-m4l2",
          title: "Entendendo as necessidades do cliente",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Técnicas para escutar e mapear as necessidades.",
        },
        {
          id: "comm-m4l3",
          title: "Quiz: Linguagem com o cliente",
          type: "quiz",
          questions: [
            {
              id: "comm-m4l3q1",
              text: "É adequado usar gírias com o cliente?",
              options: [
                { id: "a", text: "Sim, sempre.", isCorrect: false },
                {
                  id: "b",
                  text: "Depende do contexto, mas com cuidado.",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m4l4",
          title: "Quiz: Resolver problemas",
          type: "quiz",
          questions: [
            {
              id: "comm-m4l4q1",
              text: "Quando o cliente está insatisfeito, você deve:",
              options: [
                {
                  id: "a",
                  text: "Ouvir, pedir desculpas e buscar solução.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Culpar outro setor.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m4l5",
          title: "Quiz: Registro das informações",
          type: "quiz",
          questions: [
            {
              id: "comm-m4l5q1",
              text: "Depois de falar com um cliente, é importante:",
              options: [
                {
                  id: "a",
                  text: "Registrar pontos importantes da conversa.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Confiar só na memória.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "comm-m5",
      title: "Comunicação para o Futuro",
      lessons: [
        {
          id: "comm-m5l1",
          title: "Comunicação em entrevistas",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Dicas de como se comunicar bem em entrevistas de emprego.",
        },
        {
          id: "comm-m5l2",
          title: "Networking e carreira",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como construir uma rede de contatos com boa comunicação.",
        },
        {
          id: "comm-m5l3",
          title: "Quiz: Entrevistas",
          type: "quiz",
          questions: [
            {
              id: "comm-m5l3q1",
              text: "Em uma entrevista, você deve:",
              options: [
                {
                  id: "a",
                  text: "Chegar no horário, ouvir e responder com clareza.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Responder com monossílabos.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m5l4",
          title: "Quiz: Rede de contatos",
          type: "quiz",
          questions: [
            {
              id: "comm-m5l4q1",
              text: "Networking é:",
              options: [
                {
                  id: "a",
                  text: "Construir relacionamentos de forma genuína.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Só adicionar pessoas nas redes sociais.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "comm-m5l5",
          title: "Quiz: Plano de desenvolvimento",
          type: "quiz",
          questions: [
            {
              id: "comm-m5l5q1",
              text: "Para evoluir na comunicação profissional, é importante:",
              options: [
                {
                  id: "a",
                  text: "Buscar feedback e praticar constantemente.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Esperar que tudo aconteça naturalmente.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ======================================================
// TRILHA 2 – INTRODUÇÃO AO MUNDO CORPORATIVO
// ======================================================

const corporateTrail: Trail = {
  id: "corporate",
  title: "Introdução ao Mundo Corporativo",
  description:
    "Entenda como funcionam as empresas, áreas, rotinas e cultura organizacional.",
  modules: [
    {
      id: "corp-m1",
      title: "Conhecendo a Empresa",
      lessons: [
        {
          id: "corp-m1l1",
          title: "O que é uma empresa?",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Conceitos básicos sobre empresas, objetivos e áreas principais.",
        },
        {
          id: "corp-m1l2",
          title: "Estrutura organizacional",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Áreas, departamentos e como as pessoas se organizam dentro da empresa.",
        },
        {
          id: "corp-m1l3",
          title: "Quiz: Conceitos de empresa",
          type: "quiz",
          questions: [
            {
              id: "corp-m1l3q1",
              text: "Uma empresa existe principalmente para:",
              options: [
                {
                  id: "a",
                  text: "Gerar valor e resultados.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Ser um lugar de lazer.",
                  isCorrect: false,
                },
              ],
            },
            {
              id: "corp-m1l3q2",
              text: "A área de RH é responsável por:",
              options: [
                {
                  id: "a",
                  text: "Cuidar das pessoas e processos de pessoas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Cuidar apenas de computadores.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m1l4",
          title: "Quiz: Departamentos",
          type: "quiz",
          questions: [
            {
              id: "corp-m1l4q1",
              text: "Qual área cuida das finanças da empresa?",
              options: [
                { id: "a", text: "Marketing.", isCorrect: false },
                { id: "b", text: "Financeiro.", isCorrect: true },
              ],
            },
          ],
        },
        {
          id: "corp-m1l5",
          title: "Quiz: Cultura organizacional",
          type: "quiz",
          questions: [
            {
              id: "corp-m1l5q1",
              text: "Cultura organizacional é:",
              options: [
                {
                  id: "a",
                  text: "O jeito como a empresa faz as coisas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "A decoração do escritório.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "corp-m2",
      title: "Rotina e Processos",
      lessons: [
        {
          id: "corp-m2l1",
          title: "Dia a dia do jovem aprendiz",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como é a rotina dentro do ambiente corporativo como jovem aprendiz.",
        },
        {
          id: "corp-m2l2",
          title: "Fluxo de trabalho e prazos",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Entenda a importância dos prazos e como organizar suas atividades.",
        },
        {
          id: "corp-m2l3",
          title: "Quiz: Organização pessoal",
          type: "quiz",
          questions: [
            {
              id: "corp-m2l3q1",
              text: "Para organizar suas tarefas, é importante:",
              options: [
                {
                  id: "a",
                  text: "Usar agenda ou lista de tarefas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Confiar apenas na memória.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m2l4",
          title: "Quiz: Pontualidade",
          type: "quiz",
          questions: [
            {
              id: "corp-m2l4q1",
              text: "Ser pontual significa:",
              options: [
                {
                  id: "a",
                  text: "Chegar no horário combinado.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Chegar quando der.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m2l5",
          title: "Quiz: Prioridades",
          type: "quiz",
          questions: [
            {
              id: "corp-m2l5q1",
              text: "Se você tem duas tarefas com prazos diferentes:",
              options: [
                {
                  id: "a",
                  text: "Começa pela mais urgente/importante.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Faz só a mais fácil.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "corp-m3",
      title: "Comportamento Profissional",
      lessons: [
        {
          id: "corp-m3l1",
          title: "Postura profissional",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Atitudes que passam seriedade, respeito e responsabilidade.",
        },
        {
          id: "corp-m3l2",
          title: "Ética no ambiente de trabalho",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "O que é ética e por que ela é essencial no mundo corporativo.",
        },
        {
          id: "corp-m3l3",
          title: "Quiz: Respeito e ética",
          type: "quiz",
          questions: [
            {
              id: "corp-m3l3q1",
              text: "Um comportamento ético é:",
              options: [
                {
                  id: "a",
                  text: "Cumprir as regras e tratar a todos com respeito.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Aproveitar brechas para tirar vantagem.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m3l4",
          title: "Quiz: Uso de recursos da empresa",
          type: "quiz",
          questions: [
            {
              id: "corp-m3l4q1",
              text: "Sobre computador e internet da empresa, é correto:",
              options: [
                {
                  id: "a",
                  text: "Usar principalmente para atividades do trabalho.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Usar livremente para assuntos pessoais.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m3l5",
          title: "Quiz: Imagem profissional",
          type: "quiz",
          questions: [
            {
              id: "corp-m3l5q1",
              text: "A imagem profissional é construída por:",
              options: [
                {
                  id: "a",
                  text: "Postura, comunicação e entregas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Apenas roupas que você usa.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "corp-m4",
      title: "Ferramentas Corporativas",
      lessons: [
        {
          id: "corp-m4l1",
          title: "E-mail, agenda e reuniões",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como usar as principais ferramentas do dia a dia corporativo.",
        },
        {
          id: "corp-m4l2",
          title: "Plataformas de colaboração",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Visão geral de ferramentas como Teams, Slack e similares.",
        },
        {
          id: "corp-m4l3",
          title: "Quiz: Reuniões produtivas",
          type: "quiz",
          questions: [
            {
              id: "corp-m4l3q1",
              text: "Antes de uma reunião, é importante:",
              options: [
                {
                  id: "a",
                  text: "Ler a pauta e chegar no horário.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Entrar sem saber o assunto.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m4l4",
          title: "Quiz: Comunicação em canais",
          type: "quiz",
          questions: [
            {
              id: "corp-m4l4q1",
              text: "Nos chats corporativos, é melhor:",
              options: [
                {
                  id: "a",
                  text: "Ser direto e respeitoso.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Responder com memes sempre.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m4l5",
          title: "Quiz: Organização digital",
          type: "quiz",
          questions: [
            {
              id: "corp-m4l5q1",
              text: "Arquivos importantes devem ser:",
              options: [
                {
                  id: "a",
                  text: "Organizados em pastas e nomeados.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Espalhados em qualquer pasta.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "corp-m5",
      title: "Carreira no Mundo Corporativo",
      lessons: [
        {
          id: "corp-m5l1",
          title: "Crescimento dentro da empresa",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como aproveitar a oportunidade de jovem aprendiz para crescer.",
        },
        {
          id: "corp-m5l2",
          title: "Planos de desenvolvimento",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Montando um plano simples para evoluir na carreira.",
        },
        {
          id: "corp-m5l3",
          title: "Quiz: Objetivos profissionais",
          type: "quiz",
          questions: [
            {
              id: "corp-m5l3q1",
              text: "Ter objetivos profissionais claros ajuda a:",
              options: [
                {
                  id: "a",
                  text: "Guiar escolhas e ações.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Deixar tudo mais confuso.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m5l4",
          title: "Quiz: Aprendizado contínuo",
          type: "quiz",
          questions: [
            {
              id: "corp-m5l4q1",
              text: "Aprender continuamente significa:",
              options: [
                {
                  id: "a",
                  text: "Buscar sempre novos conhecimentos.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Parar de estudar após conseguir um emprego.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "corp-m5l5",
          title: "Quiz: Atitude protagonista",
          type: "quiz",
          questions: [
            {
              id: "corp-m5l5q1",
              text: "Ter atitude protagonista é:",
              options: [
                {
                  id: "a",
                  text: "Esperar que os outros resolvam tudo.",
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: "Assumir responsabilidades e buscar soluções.",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ======================================================
// TRILHA 3 – NOÇÕES DE DIREITO TRABALHISTA
// ======================================================

const laborLawTrail: Trail = {
  id: "labor-law",
  title: "Noções de Direito Trabalhista",
  description:
    "Direitos e deveres do jovem aprendiz, contratos e conceitos legais.",
  modules: [
    {
      id: "law-m1",
      title: "Conceitos Básicos",
      lessons: [
        {
          id: "law-m1l1",
          title: "O que é Direito do Trabalho?",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Visão geral sobre o que é o Direito do Trabalho e seus objetivos.",
        },
        {
          id: "law-m1l2",
          title: "Relação de emprego",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Entenda a diferença entre empregado, empregador e outros vínculos.",
        },
        {
          id: "law-m1l3",
          title: "Quiz: Conceitos iniciais",
          type: "quiz",
          questions: [
            {
              id: "law-m1l3q1",
              text: "Direito do Trabalho cuida:",
              options: [
                {
                  id: "a",
                  text: "Das relações entre empregados e empregadores.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Apenas de contratos de aluguel.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m1l4",
          title: "Quiz: Relação de emprego",
          type: "quiz",
          questions: [
            {
              id: "law-m1l4q1",
              text: "Empregado é a pessoa que:",
              options: [
                {
                  id: "a",
                  text: "Presta serviços de forma pessoal e contínua.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Contrata trabalhadores.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m1l5",
          title: "Quiz: CLT",
          type: "quiz",
          questions: [
            {
              id: "law-m1l5q1",
              text: "A CLT é:",
              options: [
                {
                  id: "a",
                  text: "Consolidação das Leis do Trabalho.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Cadastro de Livros Tributários.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "law-m2",
      title: "Direitos do Jovem Aprendiz",
      lessons: [
        {
          id: "law-m2l1",
          title: "Contrato de aprendizagem",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "O que é o contrato de aprendizagem e suas características.",
        },
        {
          id: "law-m2l2",
          title: "Jornada e atividades permitidas",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Regras sobre horário de trabalho e o que o aprendiz pode fazer.",
        },
        {
          id: "law-m2l3",
          title: "Quiz: Contrato de aprendizagem",
          type: "quiz",
          questions: [
            {
              id: "law-m2l3q1",
              text: "O contrato de aprendizagem é voltado para:",
              options: [
                {
                  id: "a",
                  text: "Formação técnico-profissional do jovem.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Trabalho sem regras.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m2l4",
          title: "Quiz: Jornada do aprendiz",
          type: "quiz",
          questions: [
            {
              id: "law-m2l4q1",
              text: "A jornada do aprendiz deve:",
              options: [
                {
                  id: "a",
                  text: "Permitir conciliação com os estudos.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Impedir a ida à escola.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m2l5",
          title: "Quiz: Direitos básicos",
          type: "quiz",
          questions: [
            {
              id: "law-m2l5q1",
              text: "O jovem aprendiz tem direito a:",
              options: [
                {
                  id: "a",
                  text: "Salário, férias, 13º e FGTS.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Nenhum direito trabalhista.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "law-m3",
      title: "Jornada, Férias e Benefícios",
      lessons: [
        {
          id: "law-m3l1",
          title: "Jornada de trabalho, horas extras e intervalos",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Conceitos básicos sobre tempo de trabalho e descanso.",
        },
        {
          id: "law-m3l2",
          title: "Férias e 13º salário",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como funcionam férias e gratificação de fim de ano.",
        },
        {
          id: "law-m3l3",
          title: "Quiz: Jornada e intervalos",
          type: "quiz",
          questions: [
            {
              id: "law-m3l3q1",
              text: "Intervalos existem para:",
              options: [
                {
                  id: "a",
                  text: "Descanso e segurança do trabalhador.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Aumentar o cansaço.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m3l4",
          title: "Quiz: Férias",
          type: "quiz",
          questions: [
            {
              id: "law-m3l4q1",
              text: "Férias servem para:",
              options: [
                {
                  id: "a",
                  text: "Descansar após um período de trabalho.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Trabalhar mais.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m3l5",
          title: "Quiz: Benefícios",
          type: "quiz",
          questions: [
            {
              id: "law-m3l5q1",
              text: "Benefícios como vale transporte e refeição:",
              options: [
                {
                  id: "a",
                  text: "Ajudam a apoiar o trabalhador no dia a dia.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Não têm importância.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "law-m4",
      title: "Obrigações e Responsabilidades",
      lessons: [
        {
          id: "law-m4l1",
          title: "Deveres do empregado",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Compromissos básicos que o trabalhador assume com a empresa.",
        },
        {
          id: "law-m4l2",
          title: "Deveres do empregador",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Responsabilidades da empresa com seus funcionários.",
        },
        {
          id: "law-m4l3",
          title: "Quiz: Deveres do empregado",
          type: "quiz",
          questions: [
            {
              id: "law-m4l3q1",
              text: "Entre os deveres do empregado estão:",
              options: [
                {
                  id: "a",
                  text: "Cumprir horário, regras e tarefas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Ignorar regras internas.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m4l4",
          title: "Quiz: Deveres do empregador",
          type: "quiz",
          questions: [
            {
              id: "law-m4l4q1",
              text: "O empregador deve:",
              options: [
                {
                  id: "a",
                  text: "Pagar salários em dia e garantir condições seguras.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Descumprir leis trabalhistas.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m4l5",
          title: "Quiz: Boas práticas",
          type: "quiz",
          questions: [
            {
              id: "law-m4l5q1",
              text: "Boas relações de trabalho são construídas com:",
              options: [
                {
                  id: "a",
                  text: "Respeito e cumprimento de deveres.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Faltas injustificadas constantes.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "law-m5",
      title: "Segurança, Saúde e Encerramento do Contrato",
      lessons: [
        {
          id: "law-m5l1",
          title: "Segurança e saúde no trabalho",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Conceitos de segurança, EPIs e prevenção de acidentes.",
        },
        {
          id: "law-m5l2",
          title: "Encerramento do contrato e rescisão",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Noções básicas sobre o fim do vínculo de trabalho.",
        },
        {
          id: "law-m5l3",
          title: "Quiz: Segurança",
          type: "quiz",
          questions: [
            {
              id: "law-m5l3q1",
              text: "EPI significa:",
              options: [
                {
                  id: "a",
                  text: "Equipamento de Proteção Individual.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Escritório Padrão Industrial.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m5l4",
          title: "Quiz: Acidentes de trabalho",
          type: "quiz",
          questions: [
            {
              id: "law-m5l4q1",
              text: "Se notar uma situação de risco, você deve:",
              options: [
                {
                  id: "a",
                  text: "Avisar o responsável/gestor.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Ignorar.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "law-m5l5",
          title: "Quiz: Rescisão",
          type: "quiz",
          questions: [
            {
              id: "law-m5l5q1",
              text: "Na rescisão, o trabalhador tem direito a:",
              options: [
                {
                  id: "a",
                  text: "Verba rescisória conforme lei/contrato.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Nenhum pagamento.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const trails: Trail[] = [communicationTrail, corporateTrail, laborLawTrail];
