export type AboutData = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  content: {
    mainTag: string;
    mainTitle: string;
    paragraphs: string[];
    bullets: string[];
    sideTag: string;
    sideTitle: string;
    sideItems: string[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export const aboutData: AboutData = {
  section: {
    eyebrow: "Sobre mim",
    title: "Transição de carreira, prática constante e foco em projetos reais",
    description:
      "Mais do que desenvolver interfaces bonitas, meu objetivo é criar sites que ajudem profissionais e negócios a se posicionarem melhor e transmitirem mais valor online.",
  },

  content: {
    mainTag: "Minha trajetória",
    mainTitle: "Da economia para a tecnologia, com foco em soluções práticas",
    paragraphs: [
      "Sou formado em Ciências Econômicas e tenho MBA em Gestão Financeira. Depois de enfrentar as dificuldades do mercado na minha área de formação, decidi fazer uma transição de carreira para a tecnologia.",
      "Sempre tive interesse por tecnologia, mas foi no desenvolvimento que encontrei um caminho para construir soluções reais, unir lógica com criatividade e transformar ideias em projetos com utilidade prática.",
      "Hoje estudo programação de forma consistente, desenvolvo projetos reais e venho aprofundando minha visão em front-end, estrutura, experiência do usuário e criação de sites modernos com foco em clareza, posicionamento e conversão.",
    ],
    bullets: [
      "Construção prática de projetos reais",
      "Foco em sites modernos, responsivos e estratégicos",
      "Busca constante por evolução técnica e visual",
    ],
    sideTag: "Destaques",
    sideTitle: "O que trago para cada projeto",
    sideItems: [
      "Olhar estratégico para estrutura e posicionamento",
      "Cuidado com clareza, organização e experiência do usuário",
      "Desenvolvimento com tecnologia moderna e responsiva",
      "Compromisso com evolução contínua e melhoria real",
    ],
  },

  finalCta: {
    eyebrow: "Próximo passo",
    title: "Se você quer um site mais profissional, vamos conversar sobre o seu projeto",
    description:
      "Posso te ajudar a transformar sua ideia em uma presença online mais forte, clara e alinhada com o valor do seu trabalho.",
  },
};