"use client";
import { FaReact } from "react-icons/fa6";
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import SkillCard from "../SkillCard";
import { jetbrainsMono } from "@/app/font";

const skills = [
    { name: "HTML 5", icon: <RiHtml5Fill />, hoverColor: "group-hover:text-orange-500" },
    { name: "CSS", icon: <RiCss3Fill />, hoverColor: "group-hover:text-blue-500" },
    { name: "TypeScript", icon: <SiTypescript />, hoverColor: "group-hover:text-sky-500" },
    { name: "Next.js", icon: <RiNextjsFill />, hoverColor: "group-hover:text-white" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill />, hoverColor: "group-hover:text-cyan-400" },
    { name: "React.js", icon: <FaReact />, hoverColor: "group-hover:text-cyan-300" },
];

export default function SkillsSection() {
    return (
        <section id="skills" className={` ${jetbrainsMono.className} flex flex-col gap-10 py-16 px-4`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    My Skills
                </h1>
            </div>
            <div className="flex flex-wrap max-w-4xl mx-auto gap-6 items-center justify-center">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}
