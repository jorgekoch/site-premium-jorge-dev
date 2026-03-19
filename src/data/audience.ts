export type AudienceItem = {
  title: string;
  text: string;
};

export type AudienceData = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: AudienceItem[];
};

export const audienceData: AudienceData = {
  section: {
    eyebrow: "Para quem é",
    title: "Sites para quem quer se posicionar melhor e transmitir mais profissionalismo",
    description:
      "Essa estrutura foi pensada para profissionais e negócios que precisam de uma presença online clara, moderna e estratégica.",
  },

  items: [
    {
      title: "Profissionais autônomos",
      text: "Para quem quer se apresentar melhor, gerar confiança e facilitar o contato com novos clientes.",
    },
    {
      title: "Pequenos negócios",
      text: "Para marcas e serviços que precisam sair do amador e ter uma presença online mais forte.",
    },
    {
      title: "Quem depende de indicação",
      text: "Para transformar visitas em oportunidades reais com um site mais convincente e bem estruturado.",
    },
    {
      title: "Quem quer crescer",
      text: "Para quem entende que imagem, clareza e posicionamento fazem diferença no resultado.",
    },
  ],
};