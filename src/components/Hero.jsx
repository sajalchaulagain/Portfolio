// ============================================================
// COMPONENT: Hero (Home Section)
// ============================================================
// The first section visitors see. Contains:
//   - Greeting + name
//   - Typed.js animated roles
//   - Personal intro paragraph
//   - CTA buttons (View My Work, Contact Me)
//   - Profile image with floating tech icons
//
// TO UPDATE PROFILE IMAGE: change the src in <img> below
// TO CHANGE TYPED STRINGS: update the strings array in useEffect
// TO CHANGE INTRO TEXT: update the <p className="intro-description">
// ============================================================

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    // ANIMATION SETTINGS: adjust typeSpeed, backSpeed, strings here
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        // "Front-End Developer",
        // "Back-End Developer",
        // "App Developer",
        // "Software Developer",
        "UI/UX Designer",
        // "Database Developer",
        "Graphic Designer",
        // "Content Creator",
        "Video Editor",
        "IoT Fresherr",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "",
    });

    return () => typed.destroy();
  }, []);

  function scrollTo(id) {
    const el = document.querySelector(id);
    if (!el) return;
    const nav = document.querySelector(".navbar");
    window.scrollTo({ top: el.offsetTop - (nav?.offsetHeight || 80) + 10, behavior: "smooth" });
  }

  return (
    <section id="home" className="section home-section">
      <div className="container home-container">
        <div className="home-content">
          {/* ── Left: intro text ── */}
          <div className="intro-text">
            <h4 className="greeting">
              <span className="wave">👋</span> Hello, I&apos;m
            </h4>

            <h1 className="main-title">
              <span className="title-word title-word-1">Sajal</span>
              <span className="title-word title-word-2">Chaulagain</span>
            </h1>

            <h2 className="subtitle">
              aka <span className="highlight">Mr. Chaule</span>
            </h2>

            <div className="typing-container">
              <p>
                I&apos;m a <span ref={typedRef} className="typed-text"></span>
                <span className="typing-cursor"></span>
              </p>
            </div>

            {/* TO CHANGE INTRO TEXT: edit the paragraph below */}
            <p className="intro-description">
              I&apos;m IT student from Nepal who enjoys building websites,
              exploring AI tools, and turning random ideas into real projects.
              Most days you&apos;ll find me learning something new,
              experimenting with code, or working on projects that help me
              understand technology better.
            </p>

            <div className="cta-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo("#projects")}
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollTo("#contact")}
              >
                <span>Contact Me</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>

            {/* Social badges */}
            <div className="social-badges">
              <div className="badge">
                <i className="fas fa-graduation-cap"></i>
                <span>IT Student</span>
              </div>
              <div className="badge">
                <i className="fas fa-laptop-code"></i>
                <span>Web Developer</span>
              </div>
              <div className="badge">
                <i className="fas fa-video"></i>
                <span>Content Creator</span>
              </div>
            </div>
          </div>

          {/* ── Right: profile image ── */}
          <div className="profile-image-container">
            <div className="profile-placeholder">
              <div className="image-wrapper">
                <div className="profile-glow"></div>
                {/* TO UPDATE PROFILE IMAGE: change the src below */}
                <img
                  src="images/me ai 4.webp"
                  alt="Sajal Chaulagain - Portfolio Profile"
                  className="auto-img profile-circle"
                />
                <i className="fas fa-user-circle fallback-icon"></i>
              </div>
            </div>

            {/* Floating tech icons around profile */}
            <div className="floating-elements">
              <div className="floating-element fe-1">
                <i className="fab fa-python"></i>
              </div>
              <div className="floating-element fe-2">
                <i className="fab fa-js"></i>
              </div>
              <div className="floating-element fe-3">
                <i className="fas fa-microchip"></i>
              </div>
              <div className="floating-element fe-4">
                <i className="fab fa-android"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="scroll-indicator">
          <button
            className="scroll-down"
            onClick={() => scrollTo("#about")}
            aria-label="Scroll to About section"
          >
            <span>Scroll</span>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrows">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
