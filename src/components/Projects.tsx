"use client";
import { SectionHeading } from "@/components/SectionHeading";
import { projectsData } from "@/libs/data";
import { Project } from "@/components/Project";
import { useSectionInView } from "@/hooks/useSectionInView";
import React from "react";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <>
      <section ref={ref} id="projects" className="scroll-mt-40 mb-28">
        <SectionHeading>Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};
