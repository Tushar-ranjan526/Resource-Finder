"use client"
import { HoverEffect } from "@/Components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-20 mb-10">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Front-End Development",
    description:
      "the art and science of creating the user interface (UI) and user experience (UX) of a website or application.",
    link: "tech-stack/front-end-devlopment",
  },
  {
    title: "Back-End Development",
    description:
      " the powerhouse that drives applications and websites, processing data, managing databases, and ensuring everything runs smoothly behind the scenes.",
    link: "tech-stack/back-end-development",
  },
  {
    title: "Full-Stack Web Devlopment",
    description:
      "he entire process of building a web application, from the user interface to the database. A full stack developer is a versatile professional who can work on both the front-end and back-end components of a project.",
    link: "tech-stack/web-development",
  },
  {
    title: "App Development",
    description:
      "creating software applications for smartphones and tablets. With billions of users worldwide, it's a dynamic and rapidly evolving field.",
    link: "tech-stack/app-devlopment",
  },
  {
    title: "Data Science",
    description:
      "he interdisciplinary field that involves extracting knowledge and insights from data using scientific methods, processes, algorithms, and systems. It's a blend of statistics, mathematics, computer science, and domain expertise.",
    link: "tech-stack/data-science",
  },
  {
    title: "Data Structures & Algo",
    description:
      "Data structures are the fundamental building blocks for organizing and storing data in computer memory. Algorithms define the logic and operations performed on data.",
    link: "tech-stack/data-structures",
  },
];
