import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const ProjectCard = ({ title, description, githubLink, twitterLink }) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="max-w-lg  cursor-pointer mx-auto overflow-hidden bg-white dark:bg-diver shadow-lg rounded-md transition-transform duration-300 transform hover:translate-y-[-10px] flex flex-col group">
        <div onClick={openModal} className="flex-1">
          <div className="p-6 ">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              {title}
            </h3>
          </div>
          <p className="px-6 text-gray-600 dark:text-gray-300 body-base-medium max-h-100 text-multiline-ellipsis text-start w-100">
            {description}
          </p>
        </div>
        <div className="p-6 flex items-center justify-center cursor-default bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-gray-700">
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={
                githubLink ? "hover:cursor-pointer" : "hover:cursor-not-allowed"
              }
            >
              <FaGithub size={24} />
            </a>
          ) : null}
          {twitterLink ? (
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className={
                twitterLink
                  ? "ml-5 hover:cursor-pointer"
                  : "hover:cursor-not-allowed"
              }
            >
              <FaTwitter size={24} />
            </a>
          ) : null}
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl max-h-xl h-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="body-base-regular text-gray-500">
                      {description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                    {githubLink ? (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          githubLink
                            ? "hover:cursor-pointer"
                            : "hover:cursor-not-allowed"
                        }
                      >
                        <FaGithub size={24} />
                      </a>
                    ) : null}
                    {twitterLink ? (
                      <a
                        href={twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          twitterLink
                            ? "ml-5 hover:cursor-pointer"
                            : "hover:cursor-not-allowed"
                        }
                      >
                        <FaTwitter size={24} />
                      </a>
                    ) : null}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectCard;
