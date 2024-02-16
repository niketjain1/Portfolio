import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

const SocialLinks = ({ githubLink, twitterLink, pdfLink }) => {
  const socialLinks = [
    { icon: <FaGithub size={24} />, link: githubLink, label: "GitHub" },
    { icon: <FaTwitter size={24} />, link: twitterLink, label: "Twitter" },
    { icon: <IoDocumentTextSharp size={24} />, link: pdfLink, label: "PDF" },
  ];

  return (
    <div className="flex flex-row">
      {socialLinks.map((socialLink, index) => (
        <React.Fragment key={index}>
          {socialLink.link ? (
            <a
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                socialLink.link
                  ? "hover:cursor-pointer"
                  : "hover:cursor-not-allowed"
              } flex flex-row ml-${index === 0 ? "0" : "5"}`}
            >
              {socialLink.icon}
            </a>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialLinks;
