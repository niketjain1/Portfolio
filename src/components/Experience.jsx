import React from "react";
import NumansLogo from "../assets/NumansLogo.svg";

const Experience = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-rose-400 dark:bg-gradient-to-r dark:from-blue-300 dark:border dark:border-gray-400 max-w-6xl rounded-lg p-8">
      <div className="flex flex-col">
        <h2 className="title-base mb-8 text-white">Experience</h2>
        <div className="border border-gray-400 bg-gray-50 dark:to-gray-100 shadow-sm p-8 rounded-md">
          <div className="flex items-center mb-2">
            <img src={NumansLogo} alt="NumansLogo" />
            <div className="subtitle-base ml-5 text-gray-800 dark:text-gray-800">
              Software Developer Intern at Numans
            </div>
            <div className="ml-auto text-gray-800 dark:text-gray-800">
              June 2023 - February 2024
            </div>
          </div>
          <div className="mb-3 text-start">
            <strong className="text-rose-600 dark:text-gray-700 underline">
              Core Development on Device History Feature
            </strong>
            <ul className="list-disc list-inside font-fakt dark:text-gray-900">
              <li>
                Designed and implemented a comprehensive 'Device History'
                feature to streamline device management for HR and IT teams.
              </li>
              <li>
                Used NextJS for frontend, NestJS, and MongoDB for the backend.
                This automated system captures actions such as device assignment
                to employees and complex tasks like servicing, and maintaining
                an accurate and accessible history.
              </li>
            </ul>
          </div>
          <div className="mb-3 text-start">
            <strong className="text-rose-600 dark:text-gray-700 underline">
              Automated Notification System
            </strong>
            <ul className="list-disc list-inside font-fakt dark:text-gray-900">
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
            <strong className="text-rose-600 dark:text-gray-700 underline">
              Performance Optimization Initiatives
            </strong>
            <ul className="list-disc list-inside font-fakt dark:text-gray-900">
              <li>
                Led efforts to boost product performance, achieving a 25%
                reduction in data retrieval times. Implemented the refinement of
                GraphQL queries and restructuring of API calls using NestJS and
                TypeScript.
              </li>
              <li>
                Introduced strategic caching mechanisms with Apollo client,
                seamlessly integrated with NextJS. This resulted in an
                impressive 20% improvement in latency, contributing to a more
                responsive user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
