export type ProcessItem = {
  step: string;
  title: string;
  text: string;
};

export type ProcessData = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: ProcessItem[];
};

export const processData: ProcessData = {
  section: {
    eyebrow: "Como funciona",
    title: "Um processo simples, organizado e pensado para tirar seu projeto do papel com mais clareza",
    description:
      "A ideia é tornar o desenvolvimento do site mais leve, objetivo e alinhado com o que você realmente precisa comunicar.",
  },

  items: [
    {
      step: "01",
      title: "Entendimento",
      text: "Primeiro eu entendo seu objetivo, seu público e o que o site precisa transmitir para funcionar bem.",
    },
    {
      step: "02",
      title: "Estrutura",
      text: "Depois organizo a base do projeto pensando em clareza, navegação, posicionamento e experiência do usuário.",
    },
    {
      step: "03",
      title: "Desenvolvimento",
      text: "Transformo essa estrutura em um site moderno, responsivo e alinhado com a proposta do seu negócio.",
    },
    {
      step: "04",
      title: "Entrega",
      text: "Faço os ajustes finais e deixo o projeto pronto para publicação, uso e evolução futura.",
    },
  ],
};