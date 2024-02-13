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
      link: "https://twitter.com/niketjain",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/niketjain",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/niketjain",
    },
    {
      id: 4,
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/niketjain1/",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Project 1",
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
      <p className="max-w-xl subtitle-base text-gray-500">
        Hello welcome to my site, I am a Software Engineer, I love table tennis,
        and coding
      </p>

      <div id="Projects" />
      <div className="border-t border-dashed w-11/12 my-12 bg-gray-600 dark:bg-gray-300" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="title-base mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      <div id="Experience" />
      <div className="border-t border-dashed w-11/12 my-12 bg-gray-600 dark:bg-gray-300" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="title-base">Experience</h2>
        <p className="font-sans mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
      </div>

      <div id="Contact" />
      <div className="border-t border-dashed w-11/12 my-12 bg-gray-600 dark:bg-gray-300" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="title-base">Contact</h2>
        <p className="font-sans mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>

      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
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
