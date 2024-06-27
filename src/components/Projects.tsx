import { SectionHeading } from "@/components/SectionHeading";
import { projectsData } from "@/libs/data";
import { Project } from "@/components/Project";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <SectionHeading>Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <>
              <Project key={index} {...project} />
            </>
          ))}
        </div>
      </section>
    </>
  );
};
