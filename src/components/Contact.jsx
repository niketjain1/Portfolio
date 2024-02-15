import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
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
  return (
    <>
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
    </>
  );
};

export default Contact;
