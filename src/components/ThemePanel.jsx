// ============================================================
// COMPONENT: ThemePanel
// ============================================================
// The floating palette button and slide-out theme panel.
// Lets users choose a color theme and toggle dark/light mode.
//
// TO ADD A NEW THEME:
//   1. Add an entry to the THEMES array below
//   2. Define its CSS variables in global.css (see existing themes)
//
// TO CHANGE DEFAULT THEME: see App.jsx useState initial value
// ============================================================

import { useState, useEffect, useRef } from "react";

// Available color themes — add new ones here
const THEMES = [
  { key: "default", label: "Default" },
  { key: "ocean",   label: "Ocean" },
  { key: "forest",  label: "Forest" },
  { key: "sunset",  label: "Sunset" },
  { key: "midnight",label: "Midnight" },
  { key: "violet",  label: "Violet" },
];

export default function ThemePanel({ currentTheme, currentMode, onThemeChange, onModeToggle }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const isDark = currentMode === "dark";

  return (
    <>
      {/* Floating palette toggle button */}
      <div className="theme-toggle">
        <button
          ref={btnRef}
          id="theme-switcher"
          className={`theme-btn${open ? " active" : ""}`}
          aria-label="Toggle theme"
          onClick={() => setOpen((v) => !v)}
        >
          <i className="fas fa-palette"></i>
        </button>
      </div>

      {/* Slide-out theme panel */}
      <div ref={panelRef} className={`theme-panel${open ? " active" : ""}`}>
        <div className="theme-header">
          <i className="fas fa-palette"></i>
          <h4>Theme Colors</h4>
          <button className="close-panel" onClick={() => setOpen(false)}>
            &times;
          </button>
        </div>

        <div className="theme-options">
          {THEMES.map((t) => (
            <div
              key={t.key}
              className={`theme-option${currentTheme === t.key ? " active" : ""}`}
              data-theme={t.key}
              onClick={() => {
                onThemeChange(t.key);
              }}
            >
              <div className={`theme-preview ${t.key}-theme`}></div>
              <span>{t.label}</span>
            </div>
          ))}
        </div>

        <div className="theme-mode-toggle">
          <button id="mode-toggle" className="mode-toggle-btn" onClick={onModeToggle}>
            <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`}></i>
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </>
  );
}
