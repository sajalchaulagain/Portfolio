// ============================================================
// COMPONENT: Footer
// ============================================================
// Site footer with logo, quick links, social icons.
// Newsletter form is intentionally removed (no backend for it).
//
// TO CHANGE FOOTER LOGO TEXT: update "Mr. Chaule" below
// TO CHANGE TAGLINE: update the <p> below the logo
// TO ADD SOCIAL ICONS: edit src/data/socialLinks.json
// ============================================================

import socialLinks from "../data/socialLinks.json";

// Footer social icons (exclude email from icon row)
const FOOTER_SOCIALS = socialLinks.filter((s) => !s.url.startsWith("mailto"));

const NAV_LINKS = ["home", "about", "skills", "projects", "contact"];

export default function Footer() {
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.querySelector(".navbar");
    window.scrollTo({ top: el.offsetTop - (nav?.offsetHeight || 80) + 10, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & tagline */}
          <div className="footer-logo">
            <div className="footer-logo-wrapper">
              <h3>Mr. Chaule</h3>
              <div className="logo-dot"></div>
            </div>
            <p>Creating digital experiences with passion</p>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              {FOOTER_SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.ariaLabel}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; Sajal Chaulagain | Mr. Chaule. All rights reserved.
          </p>
          <div className="footer-credits">
            <span>
              Made with <i className="fas fa-heart"></i> and{" "}
              <i className="fas fa-code"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
