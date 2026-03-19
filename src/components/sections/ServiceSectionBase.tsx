import styled, { css } from "styled-components";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";
import { Button } from "../ui/Button";
import { SectionHeader } from "./SectionHeader";
import { media } from "../../styles/breakpoints";

type ServiceItem = {
  tag?: string;
  title: string;
  description?: string;
  bullets?: string[];
  cta?: {
    label: string;
    to: string;
    variant?: "primary" | "ghost";
  };
};

type SectionCta = {
  label: string;
  to: string;
};

type ServiceSectionBaseProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: ServiceItem[];
  cta?: SectionCta;
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

  @media ${media.laptop} {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
`;

const premiumCardStyles = css`
  border-color: rgba(34, 197, 94, 0.45);
  background:
    linear-gradient(180deg, rgba(34, 197, 94, 0.12), rgba(34, 197, 94, 0.03)),
    ${({ theme }) => theme.colors.surface};
  box-shadow:
    0 0 0 1px rgba(34, 197, 94, 0.12),
    0 16px 40px rgba(34, 197, 94, 0.1);

  transform: translateY(-2px);
`;

const ServiceCard = styled(Card)<{ $isPremium?: boolean }>`
  display: grid;
  gap: 1.1rem;
  align-content: start;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  @media ${media.tablet} {
    padding: 1.7rem;
  }

  @media ${media.laptop} {
    padding: 1.85rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(34, 197, 94, 0.45),
      rgba(34, 197, 94, 0)
    );
    pointer-events: none;
  }

  ${({ $isPremium }) => $isPremium && premiumCardStyles}
`;

const PremiumBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.35rem 0.7rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(34, 197, 94, 0.16);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  line-height: 1;
`;

const Header = styled.div`
  display: grid;
  gap: 0.8rem;
  padding-right: 5.5rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.8;
`;

const BulletList = styled.ul`
  display: grid;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Bullet = styled.li`
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.7;
  padding-left: 1.1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.08);
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const ActionRow = styled.div`
  margin-top: 0.25rem;

  & > * {
    width: 100%;

    @media ${media.tablet} {
      width: auto;
    }
  }
`;

const SectionAction = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  & > * {
    width: 100%;

    @media ${media.tablet} {
      width: auto;
    }
  }
`;

export function ServiceSectionBase({
  eyebrow = "Serviços",
  title = "Uma estrutura clara para apresentar o que você oferece",
  description = "Use esta seção para destacar seus principais serviços, modalidades ou áreas de atuação.",
  items = [],
  cta,
}: ServiceSectionBaseProps) {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <Grid>
          {items.map((item, index) => {
            const isPremium = item.tag?.toLowerCase() === "premium";

            return (
              <ServiceCard key={index} $isPremium={isPremium}>
                {isPremium && <PremiumBadge>Mais completo</PremiumBadge>}

                <Header>
                  {item.tag && <Tag>{item.tag}</Tag>}
                  <Title>{item.title}</Title>
                  {item.description && (
                    <Description>{item.description}</Description>
                  )}
                </Header>

                {item.bullets?.length ? (
                  <BulletList>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <Bullet key={bulletIndex}>{bullet}</Bullet>
                    ))}
                  </BulletList>
                ) : null}

                <Spacer />

                {item.cta && (
                  <ActionRow>
                    <Button to={item.cta.to} variant={item.cta.variant || "ghost"}>
                      {item.cta.label}
                    </Button>
                  </ActionRow>
                )}
              </ServiceCard>
            );
          })}
        </Grid>

        {cta && (
          <SectionAction>
            <Button to={cta.to}>{cta.label}</Button>
          </SectionAction>
        )}
      </Container>
    </Section>
  );
}