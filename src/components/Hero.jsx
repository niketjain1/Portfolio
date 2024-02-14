import React, { useEffect } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import avatar from "../assets/avatar.svg";
import ProjectCard from "./ProjectCard";
import { IoMail } from "react-icons/io5";
import Experience from "./Experience";

const Hero = ({ sectionSelected }) => {
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

  const socials = [
    {
      id: 1,
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/niketj2000",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/niket-j",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/niket._.j",
    },
    {
      id: 4,
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/niketjain1/",
    },
    {
      id: 5,
      name: "Email",
      icon: <IoMail />,
      link: "mailto:niketj2000@gmail.com",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Bloggerly",
      description: "Description for Project 1",
      githubLink: "https://github.com/your-username/project1",
    },
    {
      id: 1,
      title: "Project 2",
      description: "Description for Project 1",
      githubLink: "https://github.com/your-username/project1",
    },
    {
      id: 1,
      title: "Project 3",
      description: "Description for Project 1",
      githubLink: "https://github.com/your-username/project1",
    },
    {
      id: 1,
      title: "Project 4",
      description: "Description for Project 1",
      githubLink: "https://github.com/your-username/project1",
    },
    {
      id: 1,
      title: "Project 5",
      description: "Description for Project 1",
      githubLink: "https://github.com/your-username/project1",
    },
    // Add more projects as needed
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-start items-center p-5 text-center"
      id="Home"
    >
      <div className="py-3 mt-5">
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-60 md:h-60 object-cover object-top bg-gradient-to-br from-red-400 to-purple-500 rounded-full"
        />
        {/* <a href=""></a> */}
      </div>
      <h2 className="text-red-600 title-base uppercase">Niket Jain</h2>
      <h1 className="py-3 subtitle-lg">Software Engineer</h1>
      <p className="subtitle-base w-11/12 text-gray-500">
        Hey <span className="animate-pulse text-2xl">👋</span> I am an aspiring
        backend developer who wants to work on building tech-first solutions to
        complex real-world problems. As a kid I loved tinkering with things that
        were broken, figuring out how they worked, and fixing them again which
        led to my interest to be an engineer. <br />I believe in learning by
        doing, competitive by nature
      </p>

      <div id="Projects" />
      <div className="border-t border-dashed w-11/12 my-12 bg-gray-600 dark:bg-gray-300" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="title-base mb-8 bg-gradient-to-b from-orange-300 to-orange-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      <div id="Experience" />
      <div className="border-t border-dashed w-11/12 my-12 bg-gray-600 dark:bg-gray-300" />
      <Experience />

      <div id="Contact" />
      <div className="border-t border-dashed w-11/12 my-12 bg-gray-600 dark:bg-gray-300" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="title-base mb-8 bg-gradient-to-b from-green-300 to-green-600 bg-clip-text text-transparent">
          Contact
        </h2>
      </div>

      <div className="flex justify-evenly text-3xl w-full md:w-1/3">
        {socials.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noreferrer noopener"
            className="p-3 hover:cursor-pointer hover:text-red-600"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
