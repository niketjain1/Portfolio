import React from "react";
import NumansLogo from "../assets/NumansLogo.svg";

const Experience = () => {
  return (
    <div className="flex flex-col px-56">
      <div className=" border shadow-sm p-8">
        <h2 className="title-base mb-8 bg-gradient-to-b from-blue-300 to-blue-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="flex items-center mb-2">
          <img src={NumansLogo} alt="NumansLogo" />
          <div className="subtitle-base ml-5 text-gray-800 dark:text-white">
            Software Developer Intern at Numans
          </div>
          <div className="ml-auto text-gray-600">June 2021 - August 2021</div>
        </div>
        <div className="mb-3 text-start">
          <strong className="text-blue-600 dark:text-blue-300">
            Core Development on Device History Feature
          </strong>
          <ul className="list-disc list-inside">
            <li>
              Designed and implemented a comprehensive 'Device History' feature
              to streamline device management for HR and IT teams.
            </li>
            <li>
              Used NextJS for frontend, NestJS, and MongoDB for the backend.
              This automated system captures actions such as device assignment
              to employees and complex tasks like servicing, and maintaining an
              accurate and accessible history.
            </li>
          </ul>
        </div>
        <div className="mb-3 text-start">
          <strong className="text-blue-600 dark:text-blue-300">
            Automated Notification System
          </strong>
          <ul className="list-disc list-inside">
            <li>
              Engineered a streamlined Slack notification system using AWS
              Lambda, reducing Turnaround Time (TAT) by an impressive 30%.
            </li>
            <li>
              Significantly improved operational workflows, leading to quicker
              top-ups and shipment processes.
            </li>
          </ul>
        </div>
        <div className="mb-3 text-start">
          <strong className="text-blue-600 dark:text-blue-300">
            Performance Optimization Initiatives
          </strong>
          <ul className="list-disc list-inside">
            <li>
              Led efforts to boost product performance, achieving a 25%
              reduction in data retrieval times. Implemented the refinement of
              GraphQL queries and restructuring of API calls using NestJS and
              TypeScript.
            </li>
            <li>
              Introduced strategic caching mechanisms with Apollo client,
              seamlessly integrated with NextJS. This resulted in an impressive
              20% improvement in latency, contributing to a more responsive user
              experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
