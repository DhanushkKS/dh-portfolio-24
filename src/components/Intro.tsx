"use client";
import Image from "next/image";
import { profileImage } from "@/libs/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowBarRight, BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

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
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex
            items-center rounded-full gap-2 outline-none focus:scale-110
            hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          >
            Contact me here
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            href="/cv_shyamanDhanushka_0506.pdf"
            download
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
            hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10"
          >
            Download CV
            <HiDownload className="opacity-70 group-hover:translate-y-1" />
          </a>

          <a
            href="https://www.linkedin.com/in/shyaman-dhanushka"
            target="_blank"
            className="bg-white p-4 flex items-center gap-2 text-gray-700 rounded-full  focus:scale-[1.15]
            hover:scale-[1.15]  active:scale-105 transition cursor-pointer border border-black/10"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/DhanushkKS"
            target="_blank"
            className="bg-white p-4 flex items-center gap-2 text-gray-700 rounded-full  focus:scale-[1.15]
            hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </section>
    </>
  );
};
