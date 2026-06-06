// ============================================================
// COMPONENT: Contact
// ============================================================
// Displays only contact information and social links.
// The form has been removed because no backend/email service
// should be used in this deployment.
//
// TO CHANGE CONTACT INFO: update the CONTACT_INFO array below
// TO CHANGE SOCIAL LINKS: edit src/data/socialLinks.json
// ============================================================

import socialLinks from "../data/socialLinks.json";

// Contact info cards — update here
const CONTACT_INFO = [
  {
    icon: "fas fa-user",
    label: "Name",
    value: "Sajal Chaulagain",
    link: null,
  },
  {
    icon: "fas fa-graduation-cap",
    label: "Education",
    value: "BIT Student at Texas College of Management & IT",
    link: "https://www.google.com/maps/place/Texas+College+of+Management+%26+IT/@27.7137003,85.3424286,77m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb19711fc67af3:0x4ec22ef7b705ac5!2sTexas+College+of+Management+%26+IT!8m2!3d27.7135615!4d85.3424839!16s%2Fg%2F11c55cm1pm!3m5!1s0x39eb19711fc67af3:0x4ec22ef7b705ac5!8m2!3d27.7135615!4d85.3424839!16s%2Fg%2F11c55cm1pm?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Kathmandu, Nepal",
    link: "https://www.google.com/maps/place/Gaushala,+Kathmandu+44600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Information</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Feel free to reach out through any of these platforms</p>
        </div>

        <div className="contact-details">
          {CONTACT_INFO.map((info) => (
            <div className="contact-item" key={info.label}>
              <div className="contact-icon">
                <i className={info.icon}></i>
                <div className="icon-bg"></div>
              </div>
              <div className="contact-text">
                <h4>{info.label}</h4>
                {info.link ? (
                  <p>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  </p>
                ) : (
                  <p>{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="social-section">
          <h4>Connect With Me</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="social-link"
                target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
              >
                <div className="social-icon">
                  <i className={social.icon}></i>
                </div>
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
