// ============================================================
// COMPONENT: Navbar
// ============================================================
// Sticky navigation bar with:
//   - Logo "Mr. Chaule"
//   - Nav links (Home, About, Skills, Projects, Contact)
//   - Mobile hamburger menu
//   - Quick dark/light mode toggle
//   - Hide-on-scroll-down / show-on-scroll-up behaviour
//
// TO CHANGE LOGO TEXT: update the <span className="logo-text"> below
// TO ADD A NEW NAV LINK: add an entry to the NAV_LINKS array
// ============================================================

import { useState, useEffect, useRef } from "react";

// Navigation links — add or rename here
const NAV_LINKS = [
  { href: "#home",     label: "Home",     icon: "fas fa-home" },
  { href: "#about",    label: "About",    icon: "fas fa-user" },
  { href: "#skills",   label: "Skills",   icon: "fas fa-code" },
  { href: "#projects", label: "Projects", icon: "fas fa-project-diagram" },
  { href: "#contact",  label: "Contact",  icon: "fas fa-envelope" },
];

export default function Navbar({ mode, onModeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  // Track scroll for active section, hide/show nav, shadow
  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;

      // Shadow
      setScrolled(scrollY > 50);

      // Hide on scroll down, show on scroll up
      if (scrollY > lastScrollY.current && scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = scrollY;

      // Active section detection
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const bottom = top + section.clientHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(section.id);
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll to section
  function handleNavClick(e, href) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const navHeight = document.querySelector(".navbar")?.offsetHeight || 80;
    window.scrollTo({ top: target.offsetTop - navHeight + 10, behavior: "smooth" });
    setMenuOpen(false);
  }

  const isDark = mode === "dark";

  return (
    <nav className={`navbar${hidden ? " hidden" : ""}${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className="logo-text">Mr. Chaule</span>
          <div className="logo-dot"></div>
        </a>

        {/* Hamburger (mobile) */}
        <button
          className={`menu-toggle${menuOpen ? " active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburger"></span>
        </button>

        {/* Nav links */}
        <ul className={`nav-menu${menuOpen ? " active" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="nav-item">
              <a
                href={link.href}
                className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <i className={link.icon}></i> {link.label}
              </a>
            </li>
          ))}

          {/* Quick dark/light toggle in nav */}
          <li className="nav-item nav-theme-toggle">
            <button
              className="nav-theme-btn"
              aria-label="Toggle dark mode"
              onClick={onModeToggle}
            >
              <i className={`fas ${isDark ? "fa-sun" : "fa-adjust"}`}></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
