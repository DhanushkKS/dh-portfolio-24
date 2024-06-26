"use client";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        id="about"
      >
        <SectionHeading>About Me </SectionHeading>
        <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          cupiditate exercitationem facere minus! Adipisci, alias consequuntur
          dolores dolorum est eveniet fugiat modi nihil porro quae, quas sed
          sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet animi cupiditate exercitationem facere minus! Adipisci, alias
          consequuntur dolores dolorum est eveniet fugiat modi nihil porro quae,
          quas sed sunt ullam?
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          aspernatur culpa dolorum eos excepturi modi molestias nesciunt non
          tenetur. Alias amet commodi, ipsa iste minima nobis nulla odit quod
          suscipit?
        </p>
      </motion.section>
    </>
  );
};
