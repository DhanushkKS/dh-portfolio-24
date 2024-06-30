"use client";
import { Intro } from "@/components/Intro";
import { SectionDivider } from "@/components/SectionDivider";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experiences } from "@/components/Experiences";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
