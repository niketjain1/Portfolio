import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-b border-gray-300">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-lg">Niket Jain</h1>

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
