"use client";

import React, { useState } from "react";
import ProjectCard from "./cards";
import { pageConfig, projectCardConfig } from "./config";
import { cn } from "../utils";

const ProjectsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-max min-h-screen flex-col px-8 pt-12 sm:pl-32 md:pr-32">
      <h1 className="text-primary text-6xl font-bold">Projects</h1>

      <div className="text-secondary relative mt-6 text-sm sm:text-lg">
        {/* Small screens only — collapsible */}
        <div className="sm:hidden">
          <div
            className={cn(
              "relative transition-[max-height] duration-500 ease-in-out",
              isExpanded ? "overflow-visible" : "overflow-hidden",
            )}
            style={{
              maxHeight: isExpanded ? "none" : "2.5rem",
            }}
          >
            <p>{pageConfig.description}</p>
            {!isExpanded && (
              <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-white to-transparent" />
            )}
          </div>
          <div className="mt-1 flex justify-end">
            <button
              className="text-primary text-xs font-semibold underline"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "Read less ↑" : "Read more ↓"}
            </button>
          </div>
        </div>

        {/* Larger screens only — always fully visible */}
        <div className="hidden sm:block">
          <p>{pageConfig.description}</p>
        </div>
      </div>

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
