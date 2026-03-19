import { ServiceSectionBase } from "../components/sections/ServiceSectionBase";
import { FaqSectionBase } from "../components/sections/FaqSectionBase";
import { ContactCtaBase } from "../components/sections/ContactCtaBase";
import { siteConfig } from "../config/site";
import { servicesData } from "../data/services";
import { faqData } from "../data/faq";

export function Servicos() {
  return (
    <>
      <ServiceSectionBase
        eyebrow={servicesData.section.eyebrow}
        title={servicesData.section.title}
        description={servicesData.section.description}
        items={servicesData.items}
        cta={servicesData.sectionCta}
      />

      <FaqSectionBase
        eyebrow="Dúvidas comuns"
        title="Perguntas que ajudam a escolher o melhor formato"
        description="Se você ainda não sabe qual tipo de site faz mais sentido para o seu momento, essas respostas podem te ajudar a decidir com mais clareza."
        items={faqData.services}
      />

      <ContactCtaBase
        eyebrow={servicesData.finalCta.eyebrow}
        title={servicesData.finalCta.title}
        description={servicesData.finalCta.description}
        primaryCta={{
          label: "Solicitar orçamento",
          to: siteConfig.cta.primaryTo,
        }}
        secondaryCta={{
          label: "Ver projetos",
          to: "/galeria",
        }}
      />
    </>
  );
}