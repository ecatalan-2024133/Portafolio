import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="section" style={{ padding: "2rem 0", borderTop: "1px solid var(--border)" }}>
      <div className="section-inner flex items-center justify-between gap-4">
        <p style={{ color: "var(--text-muted)", margin: 0 }}>
          © {new Date().getFullYear()} {personal.fullName}
        </p>
        <a href={`mailto:${personal.email}`} style={{ color: "#0077cc" }}>
          {personal.email}
        </a>
      </div>
    </footer>
  );
}
