// ============================================================
// HOOK: useScrollAnimation
// ============================================================
// Adds a CSS class to observed elements when they scroll
// into view (85% of viewport height).
//
// USAGE:
//   useScrollAnimation(".project-card, .skill-card");
//
// The elements must have initial opacity:0 / translateY set
// in CSS, and the "animated" class triggers the animation.
// ============================================================

import { useEffect } from "react";

export function useScrollAnimation(selector = ".section-title, .project-card, .skill-card, .highlight-item, .stat, .soft-skill-item, .animated-paragraph, .contact-form-container, .contact-info") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    function check() {
      elements.forEach((el, i) => {
        if (el.classList.contains("animated")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          const delay = (i % 8) * 0.08;
          el.style.animation = `fadeInUp 0.7s ease ${delay}s forwards`;
          el.classList.add("animated");
        }
      });
    }

    window.addEventListener("scroll", check, { passive: true });
    check(); // run on mount
    return () => window.removeEventListener("scroll", check);
  }, [selector]);
}
