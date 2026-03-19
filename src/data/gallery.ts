import arquivappImg from "../assets/projetos/projeto-arquivapp.jpg";
import ianImg from "../assets/projetos/projeto-prof-ian.jpg";
import codingImg from "../assets/projetos/coding.jpg";

export type GalleryItem = {
  tag?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  link?: {
    label: string;
    href: string;
    target?: string;
    rel?: string;
  };
};

export type GalleryData = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: GalleryItem[];
};

export const galleryData: GalleryData = {
  section: {
    eyebrow: "Projetos",
    title: "Projetos desenvolvidos com foco em clareza, usabilidade e apresentação profissional",
    description:
      "Aqui estão alguns projetos que mostram minha forma de pensar estrutura, interface e experiência do usuário na prática.",
  },

  items: [
  {
    tag: "Projeto real",
    title: "Arquivapp",
    description:
      "Aplicação completa com foco em organização de arquivos, experiência do usuário e estrutura escalável.",
    image: arquivappImg,
    imageAlt: "Projeto Arquivapp",
    link: {
      label: "Acessar o site",
      href: "https://arquivapp.com.br",
    },
  },
  {
    tag: "Projeto real",
    title: "Site Professor Ian",
    description:
      "Site institucional com foco em apresentação profissional, clareza de serviços e conversão.",
    image: ianImg,
    imageAlt: "Site do professor Ian",
    link: {
      label: "Acessar o site",
      href: "https://professor-ian.vercel.app/",
    },
  },
  {
    tag: "Em construção",
    title: "Novos projetos em andamento",
    description:
      "Estou desenvolvendo novos projetos com foco em performance, design moderno e experiência do usuário.",
    image: codingImg,
    imageAlt: "Projetos em desenvolvimento",
  },
],
};