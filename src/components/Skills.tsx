"use client";
import { useSectionInView } from "@/hooks/useSectionInView";
import { SectionHeading } from "@/components/SectionHeading";
import { skillsData } from "@/libs/data";
import { motion } from "framer-motion";

export const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <>
      <section
        ref={ref}
        id="skills"
        className="mb-28 max-w-[45rem] text-center sm:mb-40 scroll-mt-40"
      >
        <SectionHeading>Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              initial={{ opacity: 0, y: 100 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};
