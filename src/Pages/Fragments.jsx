import { fragments } from "../data/FragmentsData.jsx"
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";


export default function Fragments() {
    return (
         <Section>
              <Container>
                {fragments.content} 
              </Container>
            </Section>
    );
}