import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "educacion", label: "Educación" },
  { id: "contacto", label: "Contacto" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--glass-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.2)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo("inicio")}
              className="flex items-center gap-3 group"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #005187, #0077cc)",
                  boxShadow: "0 0 16px rgba(0,81,135,0.4)",
                  fontFamily: "var(--font-display)",
                }}
              >
                EC
              </div>
              <span
                className="text-sm font-semibold hidden sm:block"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Edgar Catalán
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                    style={{ color: isActive ? "#0077cc" : "var(--text-muted)" }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(0,81,135,0.15)" }}
                        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle isDark={isDark} toggle={toggleTheme} />
              <button
                onClick={() => scrollTo("contacto")}
                className="hidden md:inline-flex btn-primary text-sm px-4 py-2"
                style={{ padding: "0.5rem 1.25rem" }}
              >
                Contáctame
              </button>
              <button
                className="lg:hidden p-2 rounded-lg"
                style={{ color: "var(--text-muted)", background: "transparent", border: "1px solid var(--border)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menú"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(6,12,20,0.5)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed top-16 inset-x-4 z-40 lg:hidden rounded-2xl p-4 glass"
              style={{ border: "1px solid var(--glass-border)" }}
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {NAV_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200"
                  style={{
                    color: active === id ? "#0077cc" : "var(--text-muted)",
                    background: active === id ? "rgba(0,81,135,0.15)" : "transparent",
                  }}
                >
                  {label}
                </button>
              ))}
              <div className="mt-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <button
                  onClick={() => scrollTo("contacto")}
                  className="w-full btn-primary text-sm"
                >
                  Contáctame
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
