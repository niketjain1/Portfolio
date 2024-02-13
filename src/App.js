import Header from "./components/Header";
import "./styles/main.css";
import { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
      </main>
    </div>
  );
}

export default App;
