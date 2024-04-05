import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logo from "../assets/logo.jpg";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { Fragment } from "react";

const Header = ({ darkMode, setDarkMode, setSection, isMobileScreen }) => {
  const [selectedSection, setSelectedSection] = useState("Home");

  const handleSectionClick = (section) => {
    setSection(section);
    setSelectedSection(section);
  };

  return (
    <header className="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white px-2 py-4 md:py-0 md:pl-15 h-18 sticky top-0 z-50 shadow-xs">
      <nav className="flex flex-row justify-between items-center md:p-5">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full mx-2" />
        {isMobileScreen ? (
          <>
            <div className="text-right ml-auto mr-4">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    {selectedSection}
                    <IoIosArrowDown
                      className="-mr-1 ml-2 mt-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-2 ">
                      <Menu.Item>
                        <button
                          className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                          onClick={() => handleSectionClick("Home")}
                        >
                          Home
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                          onClick={() => handleSectionClick("Experience")}
                        >
                          Experience
                        </button>
                      </Menu.Item>

                      <Menu.Item>
                        <button
                          className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                          onClick={() => handleSectionClick("Projects")}
                        >
                          Projects
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                          onClick={() => handleSectionClick("Contact")}
                        >
                          Contact
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </>
        ) : (
          <>
            <button
              className="px-2 md:ml-auto md:mr-8 md:px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
              onClick={() => setSection("Home")}
            >
              Home
            </button>
            <button
              className="px-2 md:mr-8 md:px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
              onClick={() => setSection("Experience")}
            >
              Experience
            </button>
            <button
              className="px-2 md:mr-8 md:px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
              onClick={() => setSection("Projects")}
            >
              Projects
            </button>
            <button
              className="px-2 md:mr-8 md:px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
              onClick={() => setSection("Contact")}
            >
              Contact
            </button>
          </>
        )}
        <a
          href="https://drive.google.com/file/d/1MCRmjHOm2FiJaFDQYrNgSvXyoFte75IS/view?usp=sharing"
          className="px-2 md:px-4 mx-4 md:mr-8 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-teal-500 text-white hover:shadow-xs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Resume
        </a>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-2">
          {darkMode ? (
            <MdWbSunny className="body-base-medium cursor-pointer" />
          ) : (
            <MdNightsStay className="body-base-medium cursor-pointer" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
