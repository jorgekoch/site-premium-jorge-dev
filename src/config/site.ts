export type SiteConfig = {
  brand: {
    name: string;
    initials: string;
    tagline: string;
  };
  contact: {
    whatsapp: string;
    instagram: string;
    email: string;
  };
  cta: {
    primaryLabel: string;
    primaryTo: string;
    secondaryLabel: string;
    secondaryTo: string;
  };
  footer: {
    note: string;
  };
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Jorge Koch",
    initials: "JK",
    tagline: "Sites modernos e estratégicos.",
  },

  contact: {
    whatsapp: "https://wa.me/5547999632405?text=Olá,%20vim%20pelo%20seu%20site%20e%20quero%20falar%20sobre%20um%20projeto.",
    instagram: "https://instagram.com/jorge_koch",
    email: "jorgeluizkoch@gmail.com",
  },

  cta: {
    primaryLabel: "Solicitar projeto",
    primaryTo: "/contato",
    secondaryLabel: "Ver projetos",
    secondaryTo: "/galeria",
  },

  footer: {
    note: "Sites modernos, responsivos e pensados para transmitir profissionalismo e gerar resultado.",
  },
};