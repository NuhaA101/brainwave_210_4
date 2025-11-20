import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import { fragments } from "../data/FragmentsData.jsx"

export default function About() {
  return (
    <Section>
      <Container>
        {fragments.content}
      </Container>
    </Section>
  );
}
