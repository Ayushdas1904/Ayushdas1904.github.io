"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode | string;
  hoverColor?: string; // e.g., "group-hover:text-cyan-300"
}

export default function SkillCard({
  name,
  icon,
  hoverColor = "group-hover:text-black dark:group-hover:text-white",
}: SkillCardProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const lightShadow = {
    boxShadow: `
      rgba(0, 0, 0, 0.5) 0px 15px 25px,
      rgba(0, 0, 0, 0.35) 0px 10px 15px,
      rgba(0, 0, 0, 0.25) 0px 4px 6px
    `,
  };

  const darkShadow = {
    boxShadow: `
      rgba(200, 200, 200, 0.2) 2px 2px 6px,
      rgba(160, 160, 160, 0.15) 0px 6px 10px
    `,
  };

  const iconClasses = cn(
    "transition-all duration-300 group-hover:-translate-y-2",
    hoverColor
  );

  return (
    <div
      className="group w-24 sm:w-28 h-24 sm:h-28 rounded-lg flex flex-col items-center justify-center transition-all duration-300"
      style={isDarkMode ? darkShadow : lightShadow}
    >
      {typeof icon === "string" ? (
        <Image
          src={icon}
          alt={name}
          width={28}
          height={28}
          className={iconClasses}
        />
      ) : (
        <div className={cn("text-2xl sm:text-3xl", iconClasses)}>{icon}</div>
      )}
      <span className="text-xs mt-2 text-foreground">
        {name}
      </span>
    </div>
  );
}
