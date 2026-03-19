export type ServiceItem = {
  tag?: string;
  title: string;
  description?: string;
  bullets?: string[];
  cta?: {
    label: string;
    to: string;
    variant?: "primary" | "ghost";
  };
};

export type ServicesData = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: ServiceItem[];
  sectionCta: {
    label: string;
    to: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export const servicesData: ServicesData = {
  section: {
    eyebrow: "Serviços",
    title: "Soluções pensadas para diferentes momentos e objetivos",
    description:
      "Do site mais enxuto até uma estrutura mais estratégica e refinada, cada projeto é pensado para transmitir profissionalismo, clareza e gerar resultado.",
  },

  items: [
    {
      tag: "Essencial",
      title: "Landing Page",
      description:
        "Uma página única, direta e profissional para apresentar seu serviço, destacar seus diferenciais e facilitar o contato.",
      bullets: [
        "Estrutura enxuta e objetiva",
        "Ideal para quem quer começar bem",
        "Foco total em clareza e conversão",
      ],
      cta: {
        label: "Quero uma landing page",
        to: "/contato",
        variant: "ghost",
      },
    },
    {
      tag: "Profissional",
      title: "Site Institucional",
      description:
        "Uma estrutura mais completa para apresentar melhor sua marca, seus serviços e fortalecer sua presença online.",
      bullets: [
        "Múltiplas seções ou páginas",
        "Mais organização de conteúdo",
        "Mais autoridade e percepção de valor",
      ],
      cta: {
        label: "Quero um site profissional",
        to: "/contato",
      },
    },
    {
      tag: "Premium",
      title: "Site Estratégico",
      description:
        "Uma solução mais refinada para quem quer unir design, posicionamento e experiência do usuário em um projeto mais forte.",
      bullets: [
        "Estrutura mais estratégica",
        "Refino visual e melhor experiência",
        "Mais impacto, mais clareza e mais valor percebido",
      ],
      cta: {
        label: "Quero esse nível",
        to: "/contato",
      },
    },
  ],

  sectionCta: {
    label: "Solicitar orçamento",
    to: "/contato",
  },

  finalCta: {
    eyebrow: "Vamos conversar",
    title: "Encontre o formato ideal para o seu projeto",
    description:
      "Se você quer entender qual tipo de site faz mais sentido para o seu momento, posso te ajudar a definir a melhor direção e o melhor nível de investimento.",
  },
};