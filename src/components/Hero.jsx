import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import avatar from "../assets/avatar.svg";

const Hero = () => {
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

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <div className="py-3 mt-5">
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-60 md:h-60 object-cover object-top bg-gradient-to-br from-red-400 to-purple-500 rounded-full"
        />
        <a href=""></a>
      </div>
      <h2 className="text-red-600 font-Roboto uppercase">Niket Jain</h2>
      <h3 className="py-3 subtitle-lg">Software Engineer</h3>
      <p className="max-w-xl subtitle-base text-gray-500">
        Hello welcome to my site, I am a Software Engineer, I love table tennis,
        and coding
      </p>

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
