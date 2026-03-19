export type ContactPageData = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  direct: {
    title: string;
    text: string;
  };
  social: {
    title: string;
    text: string;
  };
};

export const contactPageData: ContactPageData = {
  section: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre o seu projeto",
    description:
      "Se você quer um site mais profissional, claro e alinhado com o valor do seu trabalho, esse é o próximo passo.",
  },

  direct: {
    title: "Fale diretamente comigo",
    text:
      "O caminho mais rápido é pelo WhatsApp. Você pode me explicar sua ideia, tirar dúvidas e entender qual formato de site faz mais sentido para o seu caso.",
  },

  social: {
    title: "Outros canais",
    text:
      "Se preferir, você também pode entrar em contato pelas redes sociais e acompanhar meu trabalho por lá.",
  },
};