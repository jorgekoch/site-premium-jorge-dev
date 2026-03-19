export type AuthorityItem = {
  value: string;
  title: string;
  text: string;
};

export type AuthorityData = {
  home: AuthorityItem[];
  about: AuthorityItem[];
};

export const authorityData: AuthorityData = {
  home: [
    {
      value: "Projetos reais",
      title: "Experiência prática",
      text: "Desenvolvimento de soluções concretas com foco em estrutura, clareza e resultado.",
    },
    {
      value: "React + TypeScript",
      title: "Tecnologia moderna",
      text: "Construção com ferramentas atuais para entregar sites mais sólidos, organizados e escaláveis.",
    },
    {
      value: "Responsividade",
      title: "Boa experiência em qualquer tela",
      text: "Layouts pensados para funcionar bem no desktop, tablet e celular.",
    },
    {
      value: "Foco estratégico",
      title: "Mais do que aparência",
      text: "Cada seção é pensada para comunicar melhor, transmitir valor e facilitar conversão.",
    },
  ],

  about: [
    {
      value: "Transição com propósito",
      title: "Mudança de carreira consciente",
      text: "A migração para a tecnologia veio da busca por um caminho com mais construção prática e possibilidade real de evolução.",
    },
    {
      value: "Aprendizado constante",
      title: "Evolução contínua",
      text: "Estudo, prática e refinamento fazem parte do meu processo em cada novo projeto.",
    },
    {
      value: "Olhar estratégico",
      title: "Clareza e posicionamento",
      text: "Busco criar sites que comuniquem melhor e façam o profissional parecer tão bom quanto ele realmente é.",
    },
    {
      value: "Compromisso com qualidade",
      title: "Cuidado em cada detalhe",
      text: "Do conteúdo à interface, a proposta é entregar algo mais profissional, organizado e funcional.",
    },
  ],
};