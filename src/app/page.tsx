// Main Page Component
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Terminal } from "@/components/sections/Terminal";
import { Achievements } from "@/components/sections/Achievements";
import { Leadership } from "@/components/sections/Leadership";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Marquee />
      <About />
      <Work />
      <Skills />
      <Terminal />
      <Achievements />
      <Leadership />
      <Timeline />
      <Contact />
    </>
  );
}
