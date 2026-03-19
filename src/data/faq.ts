export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqData = {
  home: FaqItem[];
  services: FaqItem[];
  contact: FaqItem[];
};

export const faqData: FaqData = {
  home: [
    {
      question: "Quanto custa um site?",
      answer:
        "O valor varia de acordo com o tipo de projeto. Existem opções mais simples, como landing pages, e projetos mais completos com foco em posicionamento e conversão. No contato inicial eu te ajudo a entender qual formato faz mais sentido para o seu caso.",
    },
    {
      question: "Quanto tempo leva para ficar pronto?",
      answer:
        "O prazo depende da complexidade do projeto, mas em geral varia entre alguns dias para projetos mais simples até algumas semanas para estruturas mais completas.",
    },
    {
      question: "O site funciona no celular?",
      answer:
        "Sim. Todos os sites são desenvolvidos de forma responsiva, funcionando bem em celular, tablet e desktop.",
    },
    {
      question: "Preciso já ter tudo pronto antes de começar?",
      answer:
        "Não. Você pode entrar em contato mesmo sem ter tudo definido. Eu te ajudo a organizar as ideias e entender o melhor caminho para o seu site.",
    },
    {
      question: "Você faz sites personalizados?",
      answer:
        "Sim. Cada projeto é adaptado ao objetivo, ao público e ao tipo de serviço do cliente, buscando sempre uma estrutura mais clara, profissional e eficiente.",
    },
  ],

  services: [
    {
      question: "Qual é a diferença entre landing page e site institucional?",
      answer:
        "A landing page é mais direta e focada em uma ação principal. Já o site institucional permite apresentar melhor serviços, informações e fortalecer o posicionamento da marca ou do profissional.",
    },
    {
      question: "Como saber qual formato faz mais sentido para mim?",
      answer:
        "Isso depende do seu objetivo, da quantidade de conteúdo que você precisa mostrar e do nível de presença online que quer construir. No contato inicial eu posso te orientar sobre a melhor opção.",
    },
    {
      question: "Posso começar com algo mais simples e evoluir depois?",
      answer:
        "Sim. Muitas vezes esse é o melhor caminho. Você pode começar com uma estrutura mais enxuta e depois expandir conforme sua necessidade cresce.",
    },
    {
      question: "O site já é entregue pronto para celular?",
      answer:
        "Sim. Todos os projetos são desenvolvidos de forma responsiva, funcionando bem em celular, tablet e desktop.",
    },
  ],

  contact: [
    {
      question: "Como funciona o primeiro contato?",
      answer:
        "Você pode me chamar pelo WhatsApp e explicar sua ideia. A partir disso, eu te ajudo a entender qual formato de site faz mais sentido para o seu caso.",
    },
    {
      question: "Preciso já ter tudo definido antes de falar com você?",
      answer:
        "Não. Você pode entrar em contato mesmo sem ter tudo organizado. O primeiro passo também serve para clarear as ideias.",
    },
    {
      question: "Você atende projetos online?",
      answer:
        "Sim. Todo o processo pode ser feito online, de forma simples e organizada.",
    },
    {
      question: "Posso tirar dúvidas antes de decidir?",
      answer:
        "Claro. O objetivo do primeiro contato é justamente entender sua necessidade e te orientar sem complicação.",
    },
  ],
};