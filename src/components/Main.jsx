import React, { useEffect } from "react";
import avatar from "../assets/avatar.svg";
import ProjectCard from "../cards/ProjectCard";
import Experience from "./Experience";
import Contact from "./Contact";

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

  const projects = [
    {
      id: 1,
      title: "Bloggerly - blogging web application",
      description: `
      Built a user-friendly web application using React and SpringBoot framework that allows users to publish, view, update, delete their blog posts, and browse blog posts published by others and comment on them
      Implemented a Facebook-style blog feed that recommends trending blogs and blogs from the users a person is following. Built a tagging mechanism for categorizing blogs.
      Integrated secure user authentication using JWT, ensuring user privacy and security
      `,
      githubLink: "https://github.com/niketjain1/Bloggerly",
    },
    {
      id: 2,
      title: "New image segmentation algorithm for biomedical applications",
      description: `Designed a new general-purpose image segmentation algorithm that helps with early diagnosis of Diabetic
      Retinopathy disease that matched in accuracy (84%) with the state-of-the-art models designed specifically for
      this task. The new algorithm, however, can also be used in other biomedical applications
      Packaged the algorithm as a plugin inside ImageJ - an open-source JAVA-based image processing software`,
      pdfLink:
        "https://drive.google.com/file/d/1OlORNd70pdxSC9VceFVNjmWhURjeJ5gK/view?usp=sharing",
    },
    {
      id: 3,
      title: "DadGPT - A Twitter Bot for Endless Dad Jokes",
      description: `A Twitter bot that generates and posts unique dad jokes on your Twitter account
      Built using OpenAI's ChatGPT APIs and the tweepy Python package to generate and post jokes on a variety of subjects, ensuring that no duplicate jokes are posted
      Can be easily customized to fit your preferences, such as changing the frequency of posts, the subject matter of jokes, and more`,
      githubLink: "https://github.com/niketjain1/DadGPT",
      twitterLink: "https://twitter.com/Dad_GPT",
    },
    {
      id: 4,
      title: "Cinephile - a movie database API",
      description: `Developed a RESTful API that let’s users create a list of movies they’ve watched
      Implemented using Spring Boot and MySQL database, allows for creating, reading, updating and deleting the movie records
      Wrote integration tests to validate the functionality of the API endpoints`,
      githubLink: "https://github.com/niketjain1/Movies-database-api",
    },
    {
      id: 5,
      title: "Human Activity Recognition based on smartphone sensor data",
      description: `Based on data collected using various sensors in smartphones, worked on recognizing activities like standing, sitting, walking, etc.
      Built ML models based on Logistic Regression, KNN, Decision tree`,
      githubLink:
        "https://github.com/niketjain1/Human-Activities-of-daily-living-Recognition-model",
    },
    {
      id: 6,
      title: "Techno Farm",
      description: `Programmed Arduino to use an Ultrasonic sensor to make the bot autonomous and obstacle avoiding
      Used Image processing & trained a NN to detect crop quality, helping farmers take preventive measures
      Presented the project at Manipal Techfest 2019
      `,
      githubLink: "https://github.com/niketjain1/technofarm",
    },
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
      </div>
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
