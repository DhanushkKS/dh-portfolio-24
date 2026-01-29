import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
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
    title: "Full Stack Engineer",
    location: "Meridian Creative Solutions",
    description:
      "Lead Frontend Architect for Explor.app: Driving the frontend strategy for a multi-tenant travel management SaaS, focusing on role-based access control (RBAC) and high-scale itinerary management.\n" +
      "\n" +
      " " +
      "High-Performance Itinerary Engine: Engineered a complex, nested drag-and-drop builder using dnd-kit. Optimized UI performance using functional referential equality in React to handle massive state updates, resulting in a 60% faster creation workflow.\n" +
      "\n" +
      "Scalable State Architecture: Implemented Redux Toolkit & RTK Query to manage global state and server caching, slashing redundant network requests by 40% and ensuring real-time UI synchronization.\n" +
      "\n" +
      "Geospatial Integration: Leveraged Google Maps API for dynamic routing and location clustering, providing travelers with interactive, day-wise spatial visualizations of their trips.\n" +
      "\n" +
      "Enterprise-Grade Forms: Architected data-intensive forms with Formik & Yup, ensuring robust validation logic and seamless UX for complex data entry tasks.\n" +
      "\n" +
      "Tech Stack: Next.js (App Router), React 19, Tailwind v4, Material UI, Redux Toolkit, Framer Motion.",

    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
  {
    title: "Associate Software Engineer",
    location: "Maxfinity Pvt. Ltd.",
    description:
      "As an Associate Software Engineer at Maxfinity Pvt. Ltd, " +
      "I contributed to developing Maxi, an ad posting web app. " +
      "I gained hands-on experience with React, Tailwind CSS, ASP.NET Core," +
      "EF Core, Dapper, Redux Toolkit, and .NET Identity." +
      "This role enhanced my skills in full-stack development, " +
      "version control with Git, and Agile practices.",
    icon: React.createElement(CgWorkAlt),
    date: "2024-2025",
  },
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
  { name: "React", level: 95 },
  { name: "Next.js", level: 80 },
  { name: "Asp.NET Core(C#)", level: 95 },
  { name: "C#", level: 95 },
  { name: "Java", level: 95 },
  { name: "Tailwind CSS", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "HTML", level: 100 },
  { name: "CSS", level: 90 },
  { name: "React MUI", level: 90 },
  { name: "Spring Boot", level: 70 },
  { name: "Angular", level: 70 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "GraphQL", level: 60 },
  { name: "PostgreSQL", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "MySQL", level: 60 },
  { name: "Next.js", level: 70 },
  { name: "Git", level: 80 },
  { name: "PHP", level: 60 },
  { name: "Azure", level: 60 },
  { name: "GitHub Actions", level: 70 },
  { name: "Redux", level: 80 },
  { name: "Apollo", level: 60 },
  { name: "Express", level: 70 },
  { name: "Framer Motion", level: 80 },
  { name: "Firebase", level: 60 },
  { name: "WordPress", level: 70 },
] as const;

export const profileImage = {
  imageUrl: ProfileImage,
  altText: "profile_picture",
};
export const metaDescription: string =
  "Shyaman Dhanushka is a Full Stack Engineer specializing in Next.js, TypeScript, and the React ecosystem. " +
  "With 4+ years of experience in architecting scalable web applications, he focuses on frontend performance optimization and modern UI/UX. " +
  "Currently leveraging the Vercel AI SDK to build innovative SaaS solutions, Shyaman combines technical expertise with a leadership mindset to deliver impactful digital products.";
