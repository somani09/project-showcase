/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { cn, shadowDepthPrimary } from "@/app/utils";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  const cardContent = (
    <div
      className={cn(
        "group border-primary/20 bg-glass/10 relative h-[200px] w-[300px] cursor-pointer overflow-hidden rounded-xl border backdrop-blur-[2px]",
        "transition-transform duration-300 hover:scale-[1.02]",
      )}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-300"
      />

      <div
        className={cn(
          "text-primary absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center",
          "rounded-xl border-2 border-transparent bg-white/40",
          "group-hover:bg-glass/40 group-hover:border-primary/10 transition-all duration-300 group-hover:backdrop-blur-[8px]",
          shadowDepthPrimary,
        )}
      >
        <h3 className="text-xl font-bold transition-all duration-300 group-hover:translate-y-[-1rem]">
          {title}
        </h3>
        <p className="text-secondary mt-2 hidden text-base transition-opacity duration-300 group-hover:flex">
          {description}
        </p>
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} in new tab`}
    >
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default ProjectCard;
