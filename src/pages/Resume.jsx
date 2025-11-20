import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Resume() {
  return (
    <>
    <SEO
      title="Nuha Ahmad Resume"
      description="View my professional resume and experience as a Full-Stack Web Developer"
      url="/resume"
    />
    <Section>
      <Container>
        <h1 className="heading-page">My Resume</h1>
        <p className="mt-2 body-default">Click to download</p>
        <iframe
          src="Nuha_Resume.pdf"
          width="100%"
          height="800px"
          title= "Nuha Ahmad Resume"
          className="mt-4 border-grey-300 rounded-lg shadiw-lg"
        >
          <p>Your browser does not support iframes <a href="/Nuha_Resume">Click here to view the PDF directly</a></p>
        </iframe>
      </Container>
    </Section>
    </>
  );
}
