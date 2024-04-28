import React, { useEffect } from "react";
import ProjectCard from "../cards/ProjectCard";
import Experience from "./Experience";
import Contact from "./Contact";
import Avatar from "./Avatar";
import { projects } from "../constants/projects";

const Hero = ({ sectionSelected, isMobileScreen }) => {
  useEffect(() => {
    const element = document.getElementById(sectionSelected);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [sectionSelected]);

  return (
    <section
      className="min-h-screen flex flex-col justify-start items-center p-5 text-center"
      id="Home"
    >
      <Avatar />
      <h2 className="text-red-600 title-base uppercase">Niket Jain</h2>
      <h1 className="py-3 subtitle-lg">Software Engineer</h1>
      <p className="subtitle-base w-11/12 text-gray-500">
        Hey <span className="animate-pulse text-2xl">👋</span> I am an aspiring
        backend developer who wants to work on building tech-first solutions to
        complex real-world problems. As a kid I loved tinkering with things that
        were broken, figuring out how they worked, and fixing them again which
        led to my interest to be an engineer. <br />I believe in learning by
        doing, competitive by nature.
      </p>

      <div id="Experience" />
      <div className="border-t border-dashed w-11/12 my-12 bg-gray-600 dark:bg-gray-300" />
      <Experience isMobileScreen={isMobileScreen} />

      <div id="Projects" />
      <div className="border-t border-dashed w-11/12 my-12 bg-gray-600 dark:bg-gray-300" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="title-base mb-8 bg-gradient-to-b from-orange-300 to-orange-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default Hero;
