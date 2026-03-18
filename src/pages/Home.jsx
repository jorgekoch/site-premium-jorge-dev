import { HeroBase } from "../components/sections/HeroBase";
import { AuthoritySectionBase } from "../components/sections/AuthoritySectionBase";
import { ServiceSectionBase } from "../components/sections/ServiceSectionBase";
import { AboutSectionBase } from "../components/sections/AboutSectionBase";
import { FaqSectionBase } from "../components/sections/FaqSectionBase";
import { ContactCtaBase } from "../components/sections/ContactCtaBase";
import { siteConfig } from "../config/site";
import { homeData } from "../data/home";
import { servicesData } from "../data/services";
import { aboutData } from "../data/about";
import { faqData } from "../data/faq";
import { authorityData } from "../data/authority";

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
        title="Uma base criada para transmitir confiança desde o primeiro olhar"
        description="Esse starter kit foi pensado para ajudar profissionais a se apresentarem melhor, organizarem sua comunicação e converterem mais."
        items={authorityData.home}
      />

      <ServiceSectionBase
        eyebrow={servicesData.section.eyebrow}
        title={servicesData.section.title}
        description={servicesData.section.description}
        items={servicesData.items}
        cta={servicesData.sectionCta}
      />

      <AboutSectionBase
        eyebrow={aboutData.section.eyebrow}
        title={aboutData.section.title}
        description={aboutData.section.description}
        mainTag={aboutData.content.mainTag}
        mainTitle={aboutData.content.mainTitle}
        paragraphs={aboutData.content.paragraphs}
        bullets={aboutData.content.bullets}
        sideTag={aboutData.content.sideTag}
        sideTitle={aboutData.content.sideTitle}
        sideItems={aboutData.content.sideItems}
        showImage={false}
      />

      <FaqSectionBase
        eyebrow="Perguntas frequentes"
        title="Dúvidas comuns sobre essa estrutura"
        description="Essas respostas ajudam a entender como esse starter kit pode ser usado de forma prática em projetos reais."
        items={faqData.home}
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