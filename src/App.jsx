// ============================================================
// APP.JSX — Root Component
// ============================================================
// Manages the global theme (color theme + dark/light mode)
// and renders all portfolio sections in order.
//
// TO ADD A NEW SECTION: import and add it below in order.
// TO CHANGE DEFAULT THEME: update the useState initial values.
// ============================================================

import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import FloatingShapes from "./components/FloatingShapes";
import ThemePanel from "./components/ThemePanel";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Available color themes
// TO ADD A NEW THEME: add the key here and define CSS variables in global.css
const THEMES = ["default", "ocean", "forest", "sunset", "midnight", "violet"];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "default"
  );
  const [mode, setMode] = useState(
    () => localStorage.getItem("portfolio-mode") || "light"
  );

  // Apply theme class to <body> whenever theme or mode changes
  useEffect(() => {
    const body = document.body;

    // Remove all theme classes
    THEMES.forEach((t) => body.classList.remove(`${t}-theme`));
    body.classList.remove("dark-mode", "light-mode");

    // Apply current theme and mode
    body.classList.add(`${theme}-theme`);
    body.classList.add(`${mode}-mode`);

    // Persist to localStorage
    localStorage.setItem("portfolio-theme", theme);
    localStorage.setItem("portfolio-mode", mode);
  }, [theme, mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Loading screen — shown briefly on first visit */}
      <LoadingScreen onDone={() => setLoading(false)} />

      {!loading && (
        <>
          {/* Decorative animated background shapes */}
          <FloatingShapes />

          {/* Theme switcher panel (color + dark/light toggle) */}
          <ThemePanel
            currentTheme={theme}
            currentMode={mode}
            onThemeChange={setTheme}
            onModeToggle={toggleMode}
          />

          {/* Navigation */}
          <Navbar mode={mode} onModeToggle={toggleMode} />

          {/* Main sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating back-to-top button */}
          <BackToTop />
        </>
      )}
    </>
  );
}
