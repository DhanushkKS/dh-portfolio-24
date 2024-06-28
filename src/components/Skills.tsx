"use client";
import { useSectionInView } from "@/hooks/useSectionInView";

export const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <>
      <section ref={ref} id="skills" className="scroll-mt-40">
        Skills
      </section>
    </>
  );
};
