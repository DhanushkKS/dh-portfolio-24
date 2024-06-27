import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import React from "react";

//Images
import ProfileImage from "../../public/profile.jpeg";

//Project Images
import RecipeImage from "../../public/projects-images/recipe-app.jpeg";
import InventoryImage from "../../public/projects-images/inventor-management-system-api.jpeg";
import RestoImage from "../../public/projects-images/resto.png";
import AISummarizerImage from "../../public/projects-images/dh-ai-summarizer.jpeg";

export const links = [
  { name: "Home" },
  { name: "About" },
  { name: "Projects" },
  { name: "Skills" },
  { name: "Experience" },
  { name: "Contact" },
] as const;
export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  //Add latest projects here…
  {
    title: "Recipe App (MERN Stack)",
    description:
      "I developed a dynamic MERN stack web app with a sleek UI using React and MUI. " +
      "It uses Redux RTK Query for efficient API data fetching, MongoDB for the database, " +
      "and JWT for secure authentication. Users can register, log in, add, and view favorite recipes.",
    tags: [
      "React",
      "MongoDB",
      "React MUI",
      "NodeJs",
      "expressjs",
      "RTK Query",
      "JWT",
    ],
    imageUrl: RecipeImage,
  },
  {
    title: "Inventory Management System (ASP.NET core 7 and Angular)",
    description:
      " I developed an Inventory Management System using Angular 17 and ASP.NET Core Web API. " +
      "Angular Material was the UI library, and PostgreSQL was the database. " +
      "The backend used Clean Architecture with CQRS. GitHub managed version control.",
    tags: [
      "ASP.NET core web API",
      "Angular",
      "Postgres",
      "Clean Architecture",
      "CQRS",
      "Generic repository Pattern",
      "DDD",
    ],
    imageUrl: InventoryImage,
  },
  {
    title: "Resto (Restaurant Management System - MERN Stack)",
    description:
      "The system optimizes operations with reports on business performance, email, the and" +
      " SMS notifications, a tracking system, and a chatbot for support. Users can filter and the" +
      " search menu items and the system facilitates online payments",
    tags: ["MERN Stack"],
    imageUrl: RestoImage,
  },
  {
    title: "AI Summarizer App",
    description:
      "I developed a paragraph summarizer app that leverages the GPT-4 API to generate concise summaries of user-provided text. " +
      "This application demonstrates my ability to integrate advanced AI capabilities into a user-friendly interface, " +
      "providing a valuable tool for quickly distilling large amounts of information into manageable summaries.",
    tags: ["React", "Vite", "AI", "Rapid API", "Open AI GPT-4"],
    imageUrl: AISummarizerImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const profileImage = {
  imageUrl: ProfileImage,
  altText: "profile_picture",
};
