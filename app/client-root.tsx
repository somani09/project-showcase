"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { cn, shadowDepthPrimary } from "./utils";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  //F2F7FF
  //EDF2FB

  return (
    <div className="relative flex min-h-screen bg-[#EDF2FB]">
      <button
        onClick={() => setSidebarOpen(true)}
        className={cn(
          "absolute top-[161px] left-[34px] z-50 flex h-16 w-16 items-center justify-center rounded-full",
          "bg-glass/20 border-primary/10 border-2 backdrop-blur-[6px]",
          shadowDepthPrimary,
          "translate-z-0 transition-opacity duration-300 ease-in-out will-change-[opacity]",
          sidebarOpen ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <div className="space-y-1">
          <span className="bg-primary block h-0.5 w-6"></span>
          <span className="bg-primary block h-0.5 w-6"></span>
          <span className="bg-primary block h-0.5 w-6"></span>
        </div>
      </button>

      <div
        className={cn(
          "absolute top-32 left-0 z-50 origin-[64px_64px] transition-transform duration-300 ease-in-out",
          sidebarOpen
            ? "pointer-events-auto visible scale-100"
            : "pointer-events-none scale-0",
        )}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
