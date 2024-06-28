"use client";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export const About = () => {
  const { ref } = useSectionInView("About", 0.2);
  return (
    <>
      <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        id="about"
      >
        <SectionHeading>About Me </SectionHeading>
        <p className="mb-3">
          Hello! I'm Shyaman Dhanushka, a computer science graduate from the
          University of Ruhuna,Sri Lanka. Now equipped with a solid foundation
          in programming languages such as ASP.NET, React, C#, Java, JavaScript,
          Angular, PostgreSQL, SQL, Version Controlling, Spring Boot, and the
          MERN stack. Proficient in PHP, MySQL, HTML, and CSS, I've effectively
          developed and deployed a myriad of web applications. Over the course
          of 3+ years, I've garnered invaluable experience in web development,
          tackling diverse projects and refining my skills in crafting
          efficient, user-centric interfaces.
        </p>
        <p className="mb-3">
          Beyond conventional web development, my curiosity extends to the
          realms of AI and machine learning, where I'm eager to explore how
          these technologies can revolutionize solutions. I aspire to
          continually grow and excel in the dynamic landscape of technology,
          contributing to cutting-edge projects and collaborating with
          like-minded professionals to make a positive impact.
        </p>
        <p className="mb-3">
          If you're interested in connecting, collaborating, or discussing
          exciting opportunities, feel free to reach out to me. Let's embark on
          a journey to drive positive change through technology together!
        </p>
      </motion.section>
    </>
  );
};
