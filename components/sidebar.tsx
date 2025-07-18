"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, shadowDepthPrimary } from "@/app/utils";

interface SidebarProps {
  className?: string;
}

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Portfolio", href: "/portfolio" },
];

const sidebarContainerClasses = cn(
  "flex h-max w-96 flex-col justify-center overflow-hidden rounded-r-4xl p-6",
  "bg-glass/20",
  "border-primary/10 border-2",
  "backdrop-blur-[6px]",
  shadowDepthPrimary,
);

const navLinkBaseClasses =
  "flex h-16 items-center rounded-2xl border px-8 py-2 text-lg transition";

const activeNavLinkClasses = cn(
  "bg-accent-2 border-secondary text-primary font-bold backdrop-blur-[6px]",
  shadowDepthPrimary,
);

const inactiveNavLinkClasses = "bg-glass text-secondary border-primary";

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <aside className={cn(sidebarContainerClasses, className)}>
      <div>
        <div className="flex items-center space-x-4">
          <div className="bg-secondary border-primary h-20 w-20 shrink-0 overflow-hidden rounded-full border-2" />
          <div>
            <p className="text-primary text-2xl font-bold">Vaibhav Somani</p>
            <p className="text-secondary text-lg font-semibold">
              Software Developer
            </p>
          </div>
        </div>

        <p className="text-text mt-4 text-base leading-relaxed">
          Full-Stack Software Engineer | 3+ years of experience | Master’s in
          CS, ASU | Expert in React.js, Next.js, TanStack, Tailwind, Figma |
          Bringing designs to life.
        </p>

        <hr className="border-accent-1 my-6 border-1" />

        <nav className="space-y-3">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  navLinkBaseClasses,
                  isActive ? activeNavLinkClasses : inactiveNavLinkClasses,
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
