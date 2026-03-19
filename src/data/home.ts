export type HighlightItem = {
  title: string;
  text: string;
};

export type FinalCtaData = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeData = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: HighlightItem[];
  };
  finalCta: FinalCtaData;
};

export const homeData: HomeData = {
  hero: {
    eyebrow: "Desenvolvimento de sites modernos",
    title: "Seu site não pode ser só bonito. Ele precisa gerar resultado.",
    description:
      "Eu crio sites profissionais, rápidos e estratégicos para profissionais e pequenos negócios que querem se posicionar melhor e transformar visitantes em clientes.",
    highlights: [
      {
        title: "Visual profissional",
        text: "Design moderno que transmite confiança desde o primeiro acesso.",
      },
      {
        title: "Foco em conversão",
        text: "Estrutura pensada para gerar contato e oportunidades reais.",
      },
      {
        title: "Tecnologia moderna",
        text: "Sites rápidos, responsivos e construídos com boas práticas.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Próximo passo",
    title: "Vamos tirar seu projeto do papel?",
    description:
      "Se você quer um site mais profissional, estratégico e alinhado com o valor do seu trabalho, vamos conversar sobre o seu projeto.",
  },
};