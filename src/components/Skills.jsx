// ============================================================
// COMPONENT: Skills
// ============================================================
// Displays tech skills (with animated progress bars) and
// soft skills (with dot-level indicators).
//
// DATA SOURCE: src/data/skills.json
//
// TO ADD A NEW SKILL:
//   Open src/data/skills.json and add an entry to
//   techSkills or softSkills arrays. No code change needed.
//
// TO CHANGE SKILL PERCENTAGE: update "percent" in skills.json
// ============================================================

import { useEffect, useRef } from "react";
import skillsData from "../data/skills.json";

export default function Skills() {
  const animatedRef = useRef(false);

  useEffect(() => {
    function animateBars() {
      const bars = document.querySelectorAll(".skill-progress[data-width]");
      const unanimatedBars = Array.from(bars).filter((bar) => !bar.classList.contains("animated"));
      if (unanimatedBars.length === 0) return;

      unanimatedBars.forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          bar.style.width = bar.dataset.width + "%";
          bar.classList.add("animated");

          const percentEl = bar.closest(".skill-card")?.querySelector(".skill-percent");
          if (percentEl) {
            const target = parseInt(bar.dataset.width, 10);
            percentEl.textContent = `${target}%`;
          }
        }
      });
    }

    window.addEventListener("scroll", animateBars, { passive: true });
    animateBars();
    return () => window.removeEventListener("scroll", animateBars);
  }, []);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technical and professional abilities</p>
        </div>

        <div className="skills-categories">
          {/* ── Tech Skills ── */}
          <div className="category">
            <h3 className="category-title">
              <i className="fas fa-code"></i>
              <span>Programming &amp; Tech Skills</span>
              <div className="title-line"></div>
            </h3>

            <div className="skills-grid">
              {skillsData.techSkills.map((skill) => (
                <div className="skill-card" key={skill.id}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <div className="skill-header">
                      <h4>{skill.name}</h4>
                      <span className="skill-percent">0%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-width={skill.percent}
                        style={{ width: 0 }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Soft Skills ── */}
          <div className="category">
            <h3 className="category-title">
              <i className="fas fa-users"></i>
              <span>Soft Skills</span>
              <div className="title-line"></div>
            </h3>

            <div className="soft-skills">
              {skillsData.softSkills.map((skill) => (
                <div className="soft-skill-item" key={skill.id}>
                  <div className="soft-skill-icon">
                    <i className={skill.icon}></i>
                    <div className="icon-ring"></div>
                  </div>
                  <div className="soft-skill-info">
                    <h4>{skill.name}</h4>
                    <p>{skill.description}</p>
                    <div className="skill-level">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                          key={dot}
                          className={`level-dot${dot <= skill.level ? " active" : ""}`}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-footer">
          <div className="skill-note">
            <i className="fas fa-sync-alt"></i>
            <p>Continuously learning and improving my skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}
