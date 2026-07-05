"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: any;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const Project = ({
  title,
  description,
  tags,
  imageUrl,
  year,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // Maintaining exact scroll animations requested by user
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group w-full flex"
    >
      <section
        className="flex flex-col w-full bg-gray-100 border border-black/5
           overflow-hidden rounded-lg hover:bg-gray-200 transition
           dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        {/* Fixed aspect ratio container for uniform project images inside the grid */}
        <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-black/20">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Dynamic content area that expands evenly */}
        <div className="flex flex-col flex-1 pt-5 pb-6 px-5">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-white/60 tracking-wider whitespace-nowrap">
              {year}
            </span>
          </div>

          <p className="mt-1 leading-relaxed text-gray-700 dark:text-white/70 text-sm flex-1">
            {description}
          </p>

          {/* Contextual actions layer */}
          <div className="flex gap-4 mt-4 mb-4 flex-wrap">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-950 dark:text-white underline decoration-blue-500 decoration-2 underline-offset-4 hover:opacity-80 transition-all w-max"
              >
                Live Demo <FiExternalLink className="text-xs" />
              </a>
            )}

            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-white/70 underline decoration-gray-400 decoration-2 underline-offset-4 hover:opacity-80 transition-all w-max"
              >
                View Code <FiGithub className="text-xs" />
              </a>
            ) : (
              !liveUrl && (
                <span className="text-xs italic text-gray-400 dark:text-white/40">
                  Source Code Private
                </span>
              )
            )}
          </div>

          {/* Tech tags pushed to the bottom of the grid cell card */}
          <ul className="flex gap-2 flex-wrap mt-auto">
            {tags &&
              tags.map((tag, index) => (
                <React.Fragment key={index}>
                  <li className="bg-black/[0.7] px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    {tag}
                  </li>
                </React.Fragment>
              ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
};
