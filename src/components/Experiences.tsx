"use client";
import { useSectionInView } from "@/hooks/useSectionInView";
import { SectionHeading } from "@/components/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/libs/data";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

export const Experiences = () => {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Experience");

  return (
    <>
      <section id="experience" ref={ref} className="scroll-mt-40 mb-28">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="">
          {experiencesData.map((experience, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={experience.date}
                icon={experience.icon}
                iconStyle={{
                  background: theme === "light" ? "white" : "rgba(3,7,18,0.75)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{experience.title}</h3>
                <p className="font-normal !mt-0">{experience.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
};
