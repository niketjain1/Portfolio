import Header from "./components/Header";
import "./styles/main.css";
import { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [section, setSection] = useState("home");

  return (
    <div className={darkMode && "dark"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setSection={setSection}
      />

      <main className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
        <Hero sectionSelected={section} />
      </main>
    </div>
  );
}

export default App;
