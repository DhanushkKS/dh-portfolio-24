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

export const Experiences = () => {
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
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.06) ",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{ borderRight: "0.4rem solid #f3f4f6" }}
                date={experience.date}
                icon={experience.icon}
                iconStyle={{ background: "white", fontSize: "2rem" }}
              >
                <h3 className="font-semibold capitalize">{experience.title}</h3>
                <p className="font-normal !mt-0">{experience.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
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
