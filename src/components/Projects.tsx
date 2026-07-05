"use client";

import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { projectsData } from "@/libs/data";
import { Project } from "@/components/Project";
import { useSectionInView } from "@/hooks/useSectionInView";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 max-w-[62rem] mx-auto px-4"
    >
      <SectionHeading>Projects</SectionHeading>

      {/* Dynamic responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
