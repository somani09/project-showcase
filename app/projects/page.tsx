"use client";

import React from "react";
import { cn } from "../utils";
import ProjectCard from "./cards";

const ProjectsPage = () => {
  return (
    <div className="px-32 py-12">
      <h1 className="text-primary text-6xl font-bold">Projects</h1>

      <p className="text-secondary mt-6 max-w-xl text-lg">
        A collection of personal and professional projects showcasing design,
        development, and creative problem solving.
      </p>

      <div className="bg-accent-1 mt-4 mb-8 h-0.5 max-w-xl rounded-full" />

      <div className="flex flex-wrap justify-center gap-6">
        {projectCardConfig.map((card, i) => (
          <ProjectCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

export const projectCardConfig = [
  {
    title: "Gallery App",
    description: "A Next.js portfolio and community platform for artists.",
    image: "/imageforbg.png",
  },
  {
    title: "Portfolio Site",
    description: "A fully responsive portfolio built using React and Tailwind.",
    image: "/imageforbg.png",
  },
  {
    title: "E-commerce UI",
    description: "A sleek e-commerce frontend using TanStack Table and Shadcn.",
    image: "/imageforbg.png",
  },
  {
    title: "Task Manager",
    description: "Collaborative Kanban board using Drag & Drop and Zustand.",
    image: "/imageforbg.png",
  },
  {
    title: "Auth Flow",
    description: "Robust auth system using NextAuth.js and middleware.",
    image: "/imageforbg.png",
  },
  {
    title: "Dev Dashboard",
    description: "Admin dashboard with charts, metrics and dynamic routing.",
    image: "/imageforbg.png",
  },
];
