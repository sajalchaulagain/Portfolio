// ============================================================
// COMPONENT: BackToTop
// ============================================================
// Floating button that appears after scrolling 300px down.
// Smoothly scrolls back to the top when clicked.
// ============================================================

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      id="back-to-top"
      className={`back-to-top${visible ? " show" : ""}`}
      aria-label="Back to top"
      onClick={handleClick}
    >
      <i className="fas fa-chevron-up"></i>
      <div className="back-to-top-wave"></div>
    </button>
  );
}
