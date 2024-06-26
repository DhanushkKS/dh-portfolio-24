"use client";
import Image from "next/image";
import { profileImage } from "@/libs/data";
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <>
      <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.altText}
                width="192"
                height="192"
                priority
                quality="60"
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-r-white shadow-xl"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: 0.2,
                stiffness: 111,
              }}
              className=" absolute bottom-0 right-0 text-4xl"
            >
              🌵
            </motion.span>
          </div>
        </div>

        <motion.p
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Shyaman Dhanushka.</span> I'm a
          <span className="font-bold"> full-stack developer</span> with
          <span className="font-bold">3 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is
          <span className="underline">.NET and React </span>.
        </motion.p>
        <div>//</div>
      </section>
    </>
  );
};
