import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigationLinks = [
    { id: "home", label: "Home" },
    { id: "technologies", label: "Technologies" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}
    >
      <div className="section-inner">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                Edgar Catalán
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Senior Software Developer building high-impact web applications with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--text)" }}>
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navigationLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(id);
                  }}
                  className="text-sm text-left transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0077cc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--text)" }}>
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0077cc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Mail size={13} /> {personal.email}
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <MapPin size={13} /> {personal.location}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-sm"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-subtle)" }}
        >
          <p>© {year} Roberto Catalán | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
