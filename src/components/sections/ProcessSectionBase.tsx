import styled from "styled-components";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { SectionHeader } from "./SectionHeader";
import { media } from "../../styles/breakpoints";

type ProcessItem = {
  step: string;
  title: string;
  text: string;
};

type ProcessSectionBaseProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: ProcessItem[];
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

const ProcessCard = styled(Card)`
  display: grid;
  gap: 0.8rem;
  align-content: start;
`;

const Step = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primaryContrast};
  background: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h3`
  font-size: 1.05rem;
  line-height: 1.35;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.75;
`;

export function ProcessSectionBase({
  eyebrow = "Como funciona",
  title = "Uma estrutura para explicar o processo com clareza",
  description = "Use esta seção para mostrar as etapas e deixar o fluxo mais compreensível.",
  items = [],
}: ProcessSectionBaseProps) {
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
            <ProcessCard key={index}>
              <Step>{item.step}</Step>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </ProcessCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}