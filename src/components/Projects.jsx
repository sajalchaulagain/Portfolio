// ============================================================
// COMPONENT: Projects
// ============================================================
// Displays all project cards dynamically from projects.json.
//
// DATA SOURCE: src/data/projects.json
//
// TO ADD A NEW PROJECT:
//   Open src/data/projects.json and add an object with:
//     title, year, category, description, image, tags, links
//   The new card will appear automatically. No code change needed.
//
// TO CHANGE PROJECT ORDER: reorder entries in projects.json
// TO REMOVE A PROJECT: delete its entry in projects.json
// ============================================================

import projects from "../data/projects.json";

// Single project card component
function ProjectCard({ project }) {
  const imgSrc = `images/${project.image}`;

  return (
    <div className="project-card">
      <div className="project-image">
        <div className="project-image-placeholder">
          <img
            src={imgSrc}
            alt={project.title}
            className="auto-img project-display-image"
            onError={(e) => {
              e.target.style.opacity = "0";
            }}
          />
          <i className={`fas ${project.fallbackIcon} fallback-icon`}></i>
          <div className="project-image-overlay"></div>
          <div className="project-image-label">{project.category}</div>
        </div>
        <div className="project-hover">
          <i className="fas fa-external-link-alt"></i>
          <span>View Project</span>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-year">{project.year}</div>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tags.map((tag) => (
            <span className="tech-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Project links (live demo, GitHub, view design, etc.) */}
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <i className={`fas ${link.icon}`}></i>
            <span>{link.label}</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Showcase of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* "More Coming Soon" placeholder card */}
          <div className="project-placeholder">
            <div className="placeholder-content">
              <div className="placeholder-icon">
                <i className="fas fa-plus-circle"></i>
                <div className="pulse-ring"></div>
              </div>
              <h3>More Projects Coming Soon</h3>
              <p>I&apos;m constantly working on new projects. Stay tuned!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
