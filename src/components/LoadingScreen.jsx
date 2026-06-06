// ============================================================
// COMPONENT: LoadingScreen
// ============================================================
// Shows a branded loading animation on first page load.
// Automatically hides after ~2 seconds and calls onDone().
//
// TO CHANGE LOADING DURATION: adjust the setTimeout below
// TO CHANGE LOGO TEXT: update "Mr. Chaule" text
// ============================================================

import { useEffect } from "react";

export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    // Hide the loader after a shorter startup delay
    const timeout = setTimeout(() => {
      const screen = document.querySelector(".loading-screen");
      if (screen) screen.classList.add("hidden");
      onDone();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [onDone]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="loading-circle"></div>
          <div className="loading-text">Mr. Chaule Presence</div>
        </div>
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
