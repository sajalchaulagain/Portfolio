// ============================================================
// COMPONENT: About
// ============================================================
// The "About Me" section. Contains:
//   - Personal bio paragraphs
//   - Experience highlight cards
//   - Stats counter (Projects, Experience, Dedication)
//   - Secondary profile photo
//
// TO UPDATE ABOUT IMAGE: change src on the <img> below
// TO CHANGE STATS: update the data-count values in stats array
// TO EDIT BIO: update the <p> paragraphs directly in JSX
// ============================================================

import { useEffect } from "react";

// STATS: update count and label here
const STATS = [
  { count: 7, label: "Projects" },
  { count: 1, label: "Years Experience" },
  { count: 100, label: "% Dedication" },
];

// Highlight items (About section cards)
const HIGHLIGHTS = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    desc: "HTML/CSS/JavaScript, React, Node.js",
  },
  {
    icon: "fas fa-video",
    title: "Video Editing",
    desc: "Adobe Premiere, After Effects, Content Creation",
  },
  {
    icon: "fas fa-keyboard",
    title: "Graphic Design",
    desc: "Photoshop/Figma",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Problem Solving",
    desc: "Creative solutions, Analytical thinking",
  },
];

// Animate a number from 0 to target over duration ms
function animateCount(el, target, duration = 2000) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function About() {
  useEffect(() => {
    const statsEls = Array.from(
      document.querySelectorAll(".about-section .stat-number")
    );
    let animatedCount = 0;
    let observer = null;

    const animateStat = (el) => {
      if (el.dataset.animated === "true") return;
      const target = parseInt(el.dataset.count, 10);
      animateCount(el, target);
      el.dataset.animated = "true";
      animatedCount += 1;

      if (animatedCount === statsEls.length && observer) {
        observer.disconnect();
      }
    };

    if (window.IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateStat(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );

      statsEls.forEach((el) => observer.observe(el));
      return () => observer && observer.disconnect();
    }

    const onScroll = () => {
      statsEls.forEach((el) => {
        if (el.dataset.animated === "true") return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          animateStat(el);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          {/* ── Left: text ── */}
          <div className="about-text">
            <h3>
              <span className="text-highlight">Student</span>,{" "}
              <span className="text-highlight">Developer</span> &amp;{" "}
              <span className="text-highlight">Tech Enthusiast</span>
            </h3>

            <div className="about-paragraphs">
              <p className="animated-paragraph">
                I am currently pursuing a Bachelor of Information Technology
                (BIT) at{" "}
                <strong className="highlight-text">
                  Texas College of Management &amp; IT
                </strong>
                . My journey into technology started with curiosity about how
                websites, software, and digital tools work, which gradually
                turned into a passion for building things on my own.
              </p>

              <p className="animated-paragraph">
                I enjoy exploring{" "}
                <strong className="highlight-text">Web Development</strong>,{" "}
                <strong className="highlight-text">
                  Artificial Intelligence
                </strong>
                , and{" "}
                <strong className="highlight-text">
                  Software Development
                </strong>
                . Whether it&apos;s creating websites, learning new programming
                concepts, or experimenting with AI tools, I love turning ideas
                into practical projects while continuously improving my skills
                and knowledge.
              </p>
            </div>

            {/* Experience highlights */}
            <div className="experience-highlights">
              {HIGHLIGHTS.map((h) => (
                <div className="highlight-item" key={h.title}>
                  <div className="highlight-icon">
                    <i className={h.icon}></i>
                  </div>
                  <div className="highlight-content">
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats counters */}
            <div className="about-stats">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <div
                    className="stat-number"
                    data-count={s.count}
                  >
                    0
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className="about-image">
            <div className="about-image-placeholder">
              <div className="about-glow"></div>
              <div className="about-image-wrapper">
                {/* TO UPDATE ABOUT IMAGE: change the src below */}
                <img
                  src="images/me_.webp"
                  alt="About Sajal Chaulagain - BIT Student"
                  className="auto-img about-content-image"
                />
                <i className="fas fa-user-graduate fallback-icon"></i>
              </div>
              <div className="about-image-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
