import styled from "styled-components";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";
import { SectionHeader } from "./SectionHeader";
import { media } from "../../styles/breakpoints";

type GalleryItem = {
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

type GallerySectionBaseProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: GalleryItem[];
};

const Section = styled.section`
  padding: 1rem 0 4rem;

  @media ${media.laptop} {
    padding: 1rem 0 5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;

  @media ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryCard = styled(Card)`
  padding: 0;
  overflow: hidden;
  display: grid;
  align-content: start;
`;

const Media = styled.div`
  position: relative;
  width: 100%;
  min-height: 220px;
  background: ${({ theme }) => theme.colors.backgroundSoft};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${media.tablet} {
    min-height: 240px;
  }

  @media ${media.laptop} {
    min-height: 260px;
  }
`;

const MediaLink = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
`;

const MediaInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover img {
    transform: scale(1.03);
  }

  &:hover div[data-overlay="true"] {
    opacity: 1;
    backdrop-filter: blur(6px);
    background: rgba(10, 10, 14, 0.42);
  }

  &:hover span[data-overlay-text="true"] {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
  display: block;
  transition: transform ${({ theme }) => theme.transitions.default};

  @media ${media.tablet} {
    min-height: 240px;
  }

  @media ${media.laptop} {
    min-height: 260px;
  }
`;

const Overlay = styled.div.attrs({ "data-overlay": "true" })`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(10, 10, 14, 0.24);
  backdrop-filter: blur(0px);
  opacity: 0;
  transition:
    opacity ${({ theme }) => theme.transitions.default},
    backdrop-filter ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default};
`;

const OverlayText = styled.span.attrs({ "data-overlay-text": "true" })`
  padding: 0.8rem 1.1rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  letter-spacing: 0.01em;
  transform: translateY(6px);
  opacity: 0.96;
  transition:
    transform ${({ theme }) => theme.transitions.default},
    opacity ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default};
`;

const Placeholder = styled.div`
  width: 100%;
  min-height: 220px;
  display: grid;
  place-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 1.5rem;

  @media ${media.tablet} {
    min-height: 240px;
  }

  @media ${media.laptop} {
    min-height: 260px;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 0.8rem;
  padding: 1.2rem;

  @media ${media.tablet} {
    padding: 1.3rem;
  }
`;

const Title = styled.h3`
  font-size: 1.12rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.75;
`;

export function GallerySectionBase({
  eyebrow = "Galeria",
  title = "Uma estrutura para apresentar imagens, projetos ou portfólio",
  description = "Use esta seção para mostrar trabalhos, registros visuais, fotos profissionais ou qualquer material que ajude a reforçar sua proposta.",
  items = [],
}: GallerySectionBaseProps) {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <Grid>
          {items.map((item, index) => (
            <GalleryCard key={index}>
              <Media>
                {item.image ? (
                  item.link ? (
                    <MediaLink
                      href={item.link.href}
                      target={item.link.target || "_blank"}
                      rel={item.link.rel || "noreferrer"}
                      aria-label={item.link.label || "Acessar o site"}
                    >
                      <MediaInner>
                        <Image
                          src={item.image}
                          alt={item.imageAlt || item.title || ""}
                        />
                        <Overlay>
                          <OverlayText>
                            {item.link.label || "Acessar o site"}
                          </OverlayText>
                        </Overlay>
                      </MediaInner>
                    </MediaLink>
                  ) : (
                    <MediaInner>
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title || ""}
                      />
                    </MediaInner>
                  )
                ) : (
                  <Placeholder>Imagem / projeto / portfólio</Placeholder>
                )}
              </Media>

              <Content>
                {item.tag && <Tag>{item.tag}</Tag>}
                {item.title && <Title>{item.title}</Title>}
                {item.description && (
                  <Description>{item.description}</Description>
                )}
              </Content>
            </GalleryCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}