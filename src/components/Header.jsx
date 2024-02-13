import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-15 h-16 sticky top-0">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-lg">Niket Jain</h1>
        <div className="ml-auto mx-8 hover:border border-gray-400 px-4 rounded-lg hover:cursor-pointer">
          Home
        </div>
        <div className="mx-8 hover:border border-gray-400 px-4 rounded-lg hover:cursor-pointer">
          About
        </div>
        <div className="mx-8 hover:border border-gray-400 px-4 rounded-lg hover:cursor-pointer">
          Projects
        </div>
        <div className="mx-8 hover:border border-gray-400 px-4 rounded-lg hover:cursor-pointer">
          Contact
        </div>
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="body-base-medium cursor-pointer" />
          ) : (
            <MdNightsStay className="body-base-medium cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
