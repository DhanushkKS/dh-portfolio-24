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
              className="relative bg-white border overflow-hidden border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              initial={{ opacity: 0, y: 100 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span>{skill.name}</span>
              <span
                className="opacity-15  border border-gray-900 absolute bg-gradient-to-r from-gray-600 to-gray-900 shadow-xl backdrop-blur-sm h-full
                bottom-0 left-0 rounded-lg overflow-hidden dark:bg-gradient-to-r
                dark:from-gray-200 dark:to-gray-500 dark:shadow-lg dark:bg-opacity-10 dark:border dark:border-gray-900 "
                style={{
                  width: `${skill.level}%`,
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                }}
              ></span>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};
