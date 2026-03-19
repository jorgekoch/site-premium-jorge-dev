import styled from "styled-components";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { media } from "../../styles/breakpoints";

type HighlightItem = {
  title: string;
  text: string;
};

type CtaLink = {
  label: string;
  to: string;
};

type HeroBaseProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  highlights?: HighlightItem[];
  image?: string;
};

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 2rem 0 4rem;

  @media ${media.tablet} {
    padding: 2.5rem 0 4.5rem;
  }

  @media ${media.laptop} {
    padding: 4rem 0 6rem;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: -120px;
  right: -100px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(56, 189, 248, 0.18) 0%,
    rgba(34, 197, 94, 0.14) 45%,
    rgba(34, 197, 94, 0) 100%
  );
  filter: blur(90px);
  pointer-events: none;

  @media ${media.laptop} {
    width: 420px;
    height: 420px;
  }
`;

const Grid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2rem;
  align-items: center;

  @media ${media.laptop} {
    grid-template-columns: 1.08fr 0.92fr;
    gap: 3rem;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 1.1rem;

  @media ${media.tablet} {
    gap: 1.25rem;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 0.45rem 0.9rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.24);
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 720px;
  font-size: clamp(2.2rem, 6vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
  text-wrap: balance;
`;

const Description = styled.p`
  max-width: 640px;
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.85;

  @media ${media.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Actions = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 0.25rem;

  @media ${media.tablet} {
    display: flex;
    flex-wrap: wrap;
  }

  & > * {
    width: 100%;

    @media ${media.tablet} {
      width: auto;
    }
  }
`;

const Highlights = styled.div`
  display: grid;
  gap: 0.85rem;
  margin-top: 0.5rem;

  @media ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Highlight = styled.div`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(8px);
`;

const HighlightTitle = styled.strong`
  display: block;
  margin-bottom: 0.35rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.35;
`;

const HighlightText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

const Visual = styled.div`
  display: grid;
`;

const VisualCard = styled.div`
  position: relative;
  min-height: 280px;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(56, 189, 248, 0.12), rgba(34, 197, 94, 0.03)),
    ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow:
    0 0 0 1px rgba(34, 197, 94, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.28);
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  @media ${media.tablet} {
    min-height: 360px;
  }

  @media ${media.laptop} {
    min-height: 500px;
  }
`;

const VisualImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  position: relative;
  width: 100%;
  min-height: inherit;
  display: grid;
  place-items: center;
  padding: 1.5rem;
`;

const PlaceholderInner = styled.div`
  width: min(100%, 320px);
  display: grid;
  gap: 1rem;
`;

const PlaceholderBlock = styled.div`
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(34, 197, 94, 0.16);
  background: rgba(255, 255, 255, 0.03);
`;

const PlaceholderTop = styled(PlaceholderBlock)`
  height: 160px;
`;

const PlaceholderLine = styled(PlaceholderBlock)`
  height: 14px;
`;

const FloatingInfo = styled.div`
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(10, 10, 14, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  display: grid;
  gap: 0.35rem;
`;

const FloatingLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const FloatingText = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.65;
`;

export function HeroBase({
  eyebrow = "Seu serviço",
  title = "Título principal do site",
  description = "Uma descrição clara explicando o que você faz e como ajuda seu cliente.",
  primaryCta = { label: "Ação principal", to: "/contato" },
  secondaryCta,
  highlights = [],
  image,
}: HeroBaseProps) {
  return (
    <Section>
      <BackgroundGlow />

      <Container>
        <Grid>
          <Content>
            <Eyebrow>{eyebrow}</Eyebrow>

            <Title>{title}</Title>

            <Description>{description}</Description>

            <Actions>
              {primaryCta && (
                <Button to={primaryCta.to}>
                  {primaryCta.label}
                </Button>
              )}

              {secondaryCta && (
                <Button to={secondaryCta.to} variant="ghost">
                  {secondaryCta.label}
                </Button>
              )}
            </Actions>

            {highlights.length > 0 && (
              <Highlights>
                {highlights.map((item, index) => (
                  <Highlight key={index}>
                    <HighlightTitle>{item.title}</HighlightTitle>
                    <HighlightText>{item.text}</HighlightText>
                  </Highlight>
                ))}
              </Highlights>
            )}
          </Content>

          <Visual>
            <VisualCard>
              {image ? (
                <VisualImage src={image} alt="" />
              ) : (
                <Placeholder>
                  <PlaceholderInner>
                    <PlaceholderTop />
                    <PlaceholderLine />
                    <PlaceholderLine />
                    <PlaceholderLine />
                  </PlaceholderInner>

                  <FloatingInfo>
                    <FloatingLabel>Apresentação profissional</FloatingLabel>
                    <FloatingText>
                      Estrutura moderna, visual consistente e foco em posicionamento,
                      clareza e conversão.
                    </FloatingText>
                  </FloatingInfo>
                </Placeholder>
              )}
            </VisualCard>
          </Visual>
        </Grid>
      </Container>
    </Section>
  );
}