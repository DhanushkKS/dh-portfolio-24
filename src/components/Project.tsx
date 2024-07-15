"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/libs/data";

export const Project = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <section
        className="flex flex-col sm:relative bg-gray-100 max-w-[45rem]
           border border-black/5 overflow-hidden sm:pr-8 rounded-lg
           hover:bg-gray-200 transition group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20
            "
      >
        <div
          className="
        max-w-[100%] mb-5
        flex flex-col h-full sm:group-even:ml-[18rem] "
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex gap-2 flex-wrap  mt-4 sm:mt-2">
            {tags &&
              tags.map((tag, index) => (
                <React.Fragment key={index}>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    {tag}
                  </li>
                </React.Fragment>
              ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="sm:absolute sm:top-8 sm:-right-40 sm:w-[28.25rem]
          rounded-t-lg shadow-2xl
          transition
          group-hover:scale-105
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-even:right-[initial]
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          group-even:-left-40 "
        />
      </section>
    </motion.div>
  );
};

type ProjectProps = (typeof projectsData)[number];
