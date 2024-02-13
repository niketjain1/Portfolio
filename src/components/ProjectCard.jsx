import React from "react";

const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white dark:bg-diver shadow-lg rounded-md transition-transform duration-300 transform hover:translate-y-[-10px]">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="p-6 flex items-center justify-center bg-gray-800 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 dark:bg-gray-700">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
