import { Heart } from "lucide-react";
import React, { JSX, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostgresql } from "react-icons/si";

export const techIconMap: Record<string, JSX.Element> = {
  react: <FaReact className="text-cyan-300" />,
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  mongo: <SiMongodb className="text-green-400" />,
  ts: <SiTypescript className="text-blue-500" />,
  next: <SiNextdotjs className="text-white" />,
  postgres: <SiPostgresql className="text-sky-500" />,
};

const projects = [
  {
    title: "ADfluence",
    description: "A creator brand collaboration website",
    thumbnail: "/project1.png",
    techStack: ["ts", "next", "mongo"],
    gradient: "#51fbfb, rgb(13, 1, 60)",
    github: "https://github.com/Ayushdas1904/Adfluence",
    live: "https://adfluence-eosin.vercel.app/",
  },
  {
    title: "FitBuddy",
    description: "Your personal fitness companion",
    thumbnail: "/project1.png",
    techStack: ["ts", "node", "express", "mongo"],
    gradient: "#14f195, rgb(13, 1, 60)",
    github: "https://github.com/Ayushdas1904/FitBuddy",
    live: "https://fit-buddy-2004.vercel.app/",
  },
  {
    title: "Prolingo",
    description: "A Duolingo-inspired app for programming languages",
    thumbnail: "/project3.png",
    techStack: ["ts", "node", "postgres"],
    gradient: "#64e, rgb(13, 1, 60)",
    github: "https://github.com/Ayushdas1904/Hack-5.0-ProLingo",
    live: "https://prolingo-alpha.vercel.app/",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div id="projects" className={`  ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20 w-full max-w-4xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex gap-2 text-[#e8390d]">
          Made with <Heart />
        </p>
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div className={`${jetbrainsMono.className} flex flex-col gap-6 w-full `}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
