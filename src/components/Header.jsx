import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({ darkMode, setDarkMode, setSection }) => {
  return (
    <header className="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white px-15 h-16 sticky top-0 z-50 shadow-xs">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-lg">Niket Jain</h1>
        <button
          className="ml-auto mx-8 hover:border border-gray-400 px-4 rounded-lg"
          onClick={() => setSection("Home")}
        >
          Home
        </button>
        <button
          className="mx-8 hover:border border-gray-400 px-4 rounded-lg hover:shadow-xs"
          onClick={() => setSection("Projects")}
        >
          Projects
        </button>
        <button
          className="mx-8 hover:border border-gray-400 px-4 rounded-lg hover:shadow-xs"
          onClick={() => setSection("Experience")}
        >
          Experience
        </button>
        <button
          className="mx-8 hover:border border-gray-400 px-4 rounded-lg hover:shadow-xs"
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
      </nav>
    </header>
  );
};

export default Header;
