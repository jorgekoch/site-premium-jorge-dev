import { AboutSectionBase } from "../components/sections/AboutSectionBase";
import { AuthoritySectionBase } from "../components/sections/AuthoritySectionBase";
import { ContactCtaBase } from "../components/sections/ContactCtaBase";
import { siteConfig } from "../config/site";
import { aboutData } from "../data/about";
import { authorityData } from "../data/authority";
import logo from "../assets/logo.jpeg";

export function Sobre() {
  return (
    <>
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
        image={logo}
        imageAlt="Logo Jorge Koch Dev"
        showImage={true}
      />

      <AuthoritySectionBase
        eyebrow="Confiança"
        title="Pontos que reforçam meu jeito de construir projetos"
        description="Além da trajetória, esses elementos ajudam a mostrar como penso estrutura, experiência do usuário e posicionamento em cada projeto."
        items={authorityData.about}
      />

      <ContactCtaBase
        eyebrow={aboutData.finalCta.eyebrow}
        title={aboutData.finalCta.title}
        description={aboutData.finalCta.description}
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