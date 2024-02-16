import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { Fragment } from "react";

const Header = ({ darkMode, setDarkMode, setSection }) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 410);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white px-2 py-4 md:py-0 md:px-15 h-18 sticky top-0 z-50 shadow-xs">
      <nav className="flex flex-row gap-2 justify-between items-center md:p-5">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        {isMobileScreen ? (
          <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  Options
                  <IoIosArrowDown
                    className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
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
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <button
                        className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                        onClick={() => setSection("Home")}
                      >
                        Home
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                        onClick={() => setSection("Experience")}
                      >
                        Experience
                      </button>
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                        onClick={() => setSection("Projects")}
                      >
                        Projects
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                        onClick={() => setSection("Contact")}
                      >
                        Contact
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <>
            <button
              className="px-2 md:ml-auto md:mx-8 md:px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
              onClick={() => setSection("Home")}
            >
              Home
            </button>
            <button
              className="px-2 md:mx-8 md:px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
              onClick={() => setSection("Experience")}
            >
              Experience
            </button>
            <button
              className="px-2 md:mx-8 md:px-4rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
              onClick={() => setSection("Projects")}
            >
              Projects
            </button>
            <button
              className="px-2 md:mx-8 md:px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
              onClick={() => setSection("Contact")}
            >
              Contact
            </button>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <MdWbSunny className="body-base-medium cursor-pointer" />
              ) : (
                <MdNightsStay className="body-base-medium cursor-pointer" />
              )}
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
