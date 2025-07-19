"use client";

import React from "react";
import ProjectCard from "./cards";
import { projectCardConfig } from "./config";

const ProjectsPage = () => {
  return (
    <div className="flex h-max min-h-screen flex-col pt-12 pr-4 pb-6 pl-32 sm:pr-32">
      <h1 className="text-primary text-6xl font-bold">Projects</h1>

      <p className="text-secondary mt-6 max-w-xl text-lg">
        A collection of personal and professional projects showcasing design,
        development, and creative problem solving.
      </p>

      <div className="bg-accent-1 mt-4 mb-8 h-0.5 max-w-xl rounded-full" />

      <div className="flex flex-wrap justify-start gap-6">
        {projectCardConfig.map((card, i) => (
          <ProjectCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
