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
    title: "Software Engineer - Intern",
    location: "ITX360 Pvt.Ltd, Colombo 03, Sri Lanka.",
    description:
      "I worked as a Software Engineer - Intern for 6 months at ITX360, " +
      "where I contributed to both frontend and backend development. " +
      "This hands-on experience allowed me to apply my academic knowledge to real-world projects, " +
      "further enhancing my skills in software engineering.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Graduated Bachelor of Computer Science (BCS)",
    location: "University of Ruhuna, Sri Lanka.",
    description:
      "I hold a Bachelor's degree in Computer Science from the University of Ruhuna, Sri Lanka. " +
      "During my studies, I gained a strong foundation in computer science principles and practical experience in software development, " +
      "which has been instrumental in shaping my career as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
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
  "Asp.NET Core(C#)",
  "C#",
  "React",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React MUI",
  "Spring Boot",
  "Angular",
  "Node.js",
  "TypeScript",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Next.js",
  "Git",
  "PHP",
  "Azure",
  "GitHub Actions",
  "Redux",
  "Apollo",
  "Express",
  "Framer Motion",
  "FireBase",
  "WordPress",
] as const;

export const profileImage = {
  imageUrl: ProfileImage,
  altText: "profile_picture",
};
