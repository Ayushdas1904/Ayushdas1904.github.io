import { Heart } from "lucide-react";
import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";

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
    live: "https://fitbuddy.vercel.app/",
  },
  {
    title: "Prolingo",
    description: "A Duolingo-inspired app for programming languages",
    thumbnail: "/project3.png",
    techStack: ["ts", "node", "postgres"],
    gradient: "#64e, rgb(13, 1, 60)",
    github: "https://github.com/Ayushdas1904/Hack-5.0-ProLingo",
    live: "https://prolingo.vercel.app/",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className={`  ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20 w-full max-w-4xl`}>
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
