import styled from "styled-components";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { SectionHeader } from "./SectionHeader";
import { media } from "../../styles/breakpoints";

type AudienceItem = {
  title: string;
  text: string;
};

type AudienceSectionBaseProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: AudienceItem[];
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
    grid-template-columns: repeat(4, 1fr);
  }
`;

const AudienceCard = styled(Card)`
  display: grid;
  gap: 0.75rem;
  align-content: start;
`;

const Title = styled.h3`
  font-size: 1.05rem;
  line-height: 1.35;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.75;
`;

export function AudienceSectionBase({
  eyebrow = "Para quem é",
  title = "Uma estrutura para mostrar para quem seu serviço faz sentido",
  description = "Use esta seção para ajudar o visitante a se identificar com a proposta.",
  items = [],
}: AudienceSectionBaseProps) {
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
            <AudienceCard key={index}>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </AudienceCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}