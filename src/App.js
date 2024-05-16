import Header from "./components/Header";
import "./styles/main.css";
import { useState } from "react";
import Main from "./components/Main";
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [section, setSection] = useState("home");
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 835);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={darkMode && "dark"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setSection={setSection}
        isMobileScreen={isMobileScreen}
      />

      <main className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white min-w-screen min-h-screen">
        <Main sectionSelected={section} isMobileScreen={isMobileScreen} />
      </main>
    </div>
  );
}

export default App;
