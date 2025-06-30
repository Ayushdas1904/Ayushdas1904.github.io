"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { jetbrainsMono } from "@/app/font";
import { X, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { techIconMap } from "./navPages/Projects";

interface ProjectModalProps {
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  gradient: string;
  github: string;
  live: string;
  onClose: () => void;
}

export default function ProjectModal({
  title,
  description,
  thumbnail,
  techStack,
  gradient,
  github,
  live,
  onClose,
}: ProjectModalProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const lightShadow = {
    boxShadow: `
      rgba(0, 0, 0, 0.5) 0px 20px 30px,
      rgba(0, 0, 0, 0.4) 0px 12px 18px
    `,
  };

  const darkShadow = {
    boxShadow: `
      rgba(255, 255, 255, 0.2) 0px 4px 12px,
      rgba(255, 255, 255, 0.1) 0px 8px 24px
    `,
  };

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center px-5 sm:px-4"
      onClick={onClose}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={false}
        className="relative w-full max-w-3xl rounded-xl overflow-hidden group transition-all duration-300"
        style={{
          ...(isDarkMode ? lightShadow : darkShadow),
          background: `radial-gradient(circle at 50% 0%, ${gradient})`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full z-50"
        >
          <X size={20} />
        </button>

        {/* Text + Tech + Links */}
        <div className="relative z-10 flex flex-col gap-4 text-white p-4 sm:p-6">
          <h2 className={`${jetbrainsMono.className} text-xl sm:text-2xl md:text-3xl font-bold`}>
            {title}
          </h2>
          <p className="text-sm sm:text-base text-white/80">{description}</p>

          {/* Image */}
          <div className="relative w-full min-h-[200px] sm:min-h-[420px] flex justify-center rounded-2xl">
            <Image
              src={thumbnail}
              alt="project"
              fill
              className="rounded-2xl w-[90%] sm:w-[80%] md:w-[400px]"
            />
          </div>

          {/* Links & Tech Stack */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black font-semibold px-4 py-2 rounded-3xl hover:opacity-80 transition"
              >
                <ExternalLink size={18} /> Live Preview
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black font-semibold px-4 py-2 rounded-3xl hover:opacity-80 transition"
              >
                <FiGithub size={18} /> GitHub
              </a>
            </div>

            <div className="flex justify-center md:justify-end transition-all duration-500">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center text-[24px] sm:text-[28px] shadow-md transition-all duration-500`}
                  style={{ zIndex: techStack.length - index }}
                >
                  {techIconMap[tech] || null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
