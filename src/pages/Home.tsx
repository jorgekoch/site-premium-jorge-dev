import { HeroBase } from "../components/sections/HeroBase";
import { AuthoritySectionBase } from "../components/sections/AuthoritySectionBase";
import { ProcessSectionBase } from "../components/sections/ProcessSectionBase";
import { ContactCtaBase } from "../components/sections/ContactCtaBase";

import { siteConfig } from "../config/site";
import { homeData } from "../data/home";
import { authorityData } from "../data/authority";
import { processData } from "../data/process";

export function Home() {
  return (
    <>
      <HeroBase
        eyebrow={homeData.hero.eyebrow}
        title={homeData.hero.title}
        description={homeData.hero.description}
        primaryCta={{
          label: siteConfig.cta.primaryLabel,
          to: siteConfig.cta.primaryTo,
        }}
        secondaryCta={{
          label: siteConfig.cta.secondaryLabel,
          to: siteConfig.cta.secondaryTo,
        }}
        highlights={homeData.hero.highlights}
      />

      <AuthoritySectionBase
        eyebrow="Credibilidade"
        title="Sites modernos, responsivos e pensados para gerar resultado"
        description="Meu foco é criar projetos que transmitam mais profissionalismo, organizem melhor a comunicação e facilitem o contato com potenciais clientes."
        items={authorityData.home}
      />

      <ProcessSectionBase
        eyebrow={processData.section.eyebrow}
        title={processData.section.title}
        description={processData.section.description}
        items={processData.items}
      />

      <ContactCtaBase
        eyebrow={homeData.finalCta.eyebrow}
        title={homeData.finalCta.title}
        description={homeData.finalCta.description}
        primaryCta={{
          label: siteConfig.cta.primaryLabel,
          to: siteConfig.cta.primaryTo,
        }}
        secondaryCta={{
          label: siteConfig.cta.secondaryLabel,
          to: siteConfig.cta.secondaryTo,
        }}
      />
    </>
  );
}