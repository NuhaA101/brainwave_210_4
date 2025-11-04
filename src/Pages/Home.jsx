import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";

export default function Home() {
    return (
    <div>
        <Section 
            as="section"
            aria-labeledby="intro-heading"
            className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
        >
            <Container>
               <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Text content 2/3rds */}
                <div className="lg:col-span-2 text-center lg:text-left">
                    <h1 id="intro-heading " className="heading-hero">Hi, My name is Nuha Ahmad </h1>
                    <h2 className="mt-4 max-w-prose lg:mx-0 mx-auto -body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                {/*CTA Buttons*/}
                <div className="mt-8 flex flex-wrap lg:justify-start justify-center gap-4">
                <Button 
                    as="a"
                    href="/portfolio"
                    aria-label="Check out my work"
                    variant="primary">
                    Check out my work
                </Button>
                 <Button 
                    as="a"
                    href="/resume"
                    aria-label="Download my resume"
                    variant="secondary">
                    Download my resume
                </Button>
                </div>
                </div>

               </div>
            </Container>
        </Section>
    </div>
    );
}