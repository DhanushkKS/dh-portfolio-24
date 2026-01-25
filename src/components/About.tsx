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
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-40 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        id="about"
      >
        <SectionHeading>About Me </SectionHeading>
        <p className="mb-4 leading-relaxed">
          I am a <span className="font-bold ">Full-Stack Engineer</span> with
          over
          <span className="font-bold">
            {" "}
            3 years of professional experience
          </span>{" "}
          specializing in building high-scale web architectures with{" "}
          <span className="font-bold underline">Next.js and Node.js</span>.
          While my engineering journey began with a solid foundation in{" "}
          <span className="italic">C#, Java, and the MERN stack</span>, I have
          spent the last few years mastering the art of architecting complex
          SaaS solutions.
        </p>
        <p className="mb-4 leading-relaxed text-justify">
          In my current role as the{" "}
          <span className="font-bold">
            Lead Frontend Architect at Meridian Creative Solutions
          </span>
          , I drive the technical strategy for{" "}
          <span className="font-bold italic">Explor.app</span>. I leverage the
          latest capabilities of{" "}
          <span className="font-bold underline decoration-blue-500">
            Next.js 16 (App Router) and React 19
          </span>{" "}
          to deliver enterprise-grade performance. I specialize in{" "}
          <span className="font-bold">Server-Side Rendering (SSR)</span>,
          optimizing <span className="italic">massive client-side states</span>,
          and building complex interactive features like{" "}
          <span className="font-bold">nested drag-and-drop engines</span> that
          directly improve business efficiency.
        </p>
        <p className="mb-4 leading-relaxed">
          I am deeply passionate about the synergy between{" "}
          <span className="font-bold">AI and Modern Web Technologies</span>. I
          constantly experiment with how intelligent automation can be
          integrated into Node.js backends to redefine modern user interfaces.
          My mission is to engineer software that is not only performant but
          also{" "}
          <span className="font-bold">
            impactful, scalable, and future-proof
          </span>
          .
        </p>
        <p className="font-medium italic border-l-4 border-gray-500 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/10">
          I’m always open to discussing tech architecture, collaborating on
          innovative projects, or exploring new opportunities.{" "}
          <span className="font-bold ">
            Let's build something exceptional together!
          </span>
        </p>
      </motion.section>
    </>
  );
};
