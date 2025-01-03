import Landing from "./home/page";
import About from "./about/page";
import Thanks from "./thanks/page";
import Skills from "./skills/page";
import Experiences from "./experiences/page";

import Section from "@/components/Section";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 text-center">
      <Section>
        <Landing />
      </Section>
      <Section>
        <Experiences />
      </Section>
      <Section>
        <Skills />
      </Section>
      <About />
      <Section>
        <Thanks />
      </Section>
    </section>
  );
}
