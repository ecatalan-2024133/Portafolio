import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { personal } from "../data/portfolio";
import { staggerContainer, staggerItem, heroTitle } from "../animations/variants";

/* ── Typing animation ──────────────────────────────────────────────────── */
function TypingText({ texts }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1600);
      return () => clearTimeout(t);
    }
    const current = texts[index];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
        setDeleting(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }
  }, [displayed, deleting, paused, texts, index]);

  return (
    <span>
      <span style={{ color: "#0077cc" }}>{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ color: "#0077cc" }}
      >
        |
      </motion.span>
    </span>
  );
}

/* ── Canvas particle network ───────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const count = Math.min(60, Math.floor((W * H) / 18000));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,119,204,0.5)";
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,81,135,${0.25 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        const dx = particles[i].x - mouse.current.x;
        const dy = particles[i].y - mouse.current.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(0,119,204,${0.4 * (1 - d / 100)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.6,
        pointerEvents: "none",
      }}
    />
  );
}

/* ── Developer Avatar ──────────────────────────────────────────────────── */
function DevAvatar() {
  const floatingBadges = [
    { label: "React", angle: -60, dist: 150 },
    { label: "Node.js", angle: 0, dist: 150 },
    { label: "TypeScript", angle: 60, dist: 150 },
    { label: "AWS", angle: 120, dist: 150 },
    { label: "Docker", angle: 180, dist: 150 },
    { label: "PostgreSQL", angle: 240, dist: 150 },
  ];

  return (
    <div className="relative flex items-center justify-center" style={{ width: 360, height: 360 }}>
      {/* Outer glow */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,81,135,0.2) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Animated ring */}
      <motion.div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          border: "1px solid rgba(0,81,135,0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            top: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 8,
            height: 8,
            background: "#0077cc",
            borderRadius: "50%",
            boxShadow: "0 0 8px #0077cc",
          }}
        />
      </motion.div>

      {/* Second ring */}
      <motion.div
        style={{
          position: "absolute",
          width: 230,
          height: 230,
          borderRadius: "50%",
          border: "1px solid rgba(0,81,135,0.2)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 6,
            height: 6,
            background: "#005187",
            borderRadius: "50%",
            boxShadow: "0 0 6px #005187",
          }}
        />
      </motion.div>

      {/* Center card */}
      <motion.div
        className="relative flex flex-col items-center justify-center rounded-2xl"
        style={{
          width: 190,
          height: 190,
          background: "var(--card)",
          border: "1px solid rgba(0,81,135,0.4)",
          boxShadow: "0 0 40px rgba(0,81,135,0.25), inset 0 0 40px rgba(0,81,135,0.05)",
          zIndex: 1,
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Grid pattern inside card */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(0,81,135,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,81,135,0.06) 1px,transparent 1px)",
            backgroundSize: "20px 20px",
            borderRadius: "1rem",
          }}
        />
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "1rem",
            background: "linear-gradient(135deg,#005187,#0077cc)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#f0f6ff",
            fontFamily: "var(--font-display)",
            boxShadow: "0 0 20px rgba(0,119,204,0.3)",
            marginBottom: "0.75rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          EC
        </div>
        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "var(--text)",
            fontFamily: "var(--font-display)",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          Edgar Catalán
        </p>
        <p
          style={{
            fontSize: "0.7rem",
            color: "#0077cc",
            fontFamily: "var(--font-mono)",
            zIndex: 1,
            marginTop: "0.2rem",
          }}
        >
          Software Developer
        </p>
        {/* Status dot */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            display: "flex",
            alignItems: "center",
            gap: 4,
            zIndex: 1,
          }}
        >
          <motion.div
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
            online
          </span>
        </div>
      </motion.div>

      {/* Floating tech badges */}
      {floatingBadges.map((badge, i) => {
        const rad = ((badge.angle - 90) * Math.PI) / 180;
        const x = Math.cos(rad) * badge.dist;
        const y = Math.sin(rad) * badge.dist;
        return (
          <motion.div
            key={badge.label}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              background: "var(--card)",
              border: "1px solid rgba(0,81,135,0.3)",
              borderRadius: "999px",
              padding: "4px 10px",
              fontSize: "0.65rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              zIndex: 2,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
            whileHover={{
              scale: 1.1,
              borderColor: "#0077cc",
              color: "#0077cc",
              boxShadow: "0 0 12px rgba(0,119,204,0.3)",
            }}
          >
            {badge.label}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Radial gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,81,135,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid-bg opacity-40" />
      {/* Particles */}
      <ParticleCanvas />

      <div className="section-inner relative z-10 w-full py-24 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Available badge */}
            <motion.div variants={staggerItem}>
              <span className="badge">
                <motion.span
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Disponible para proyectos
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={heroTitle} className="space-y-1">
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                Hola, soy
              </p>
              <h1
                className="leading-none tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  color: "var(--text)",
                }}
              >
                <span className="gradient-text">Edgar Roberto</span>
                <br />
                <span style={{ color: "var(--text)" }}>Catalán Méndez</span>
              </h1>
              <div
                className="text-xl md:text-2xl font-semibold pt-2"
                style={{ fontFamily: "var(--font-display)", minHeight: "2rem" }}
              >
                <TypingText texts={personal.titles} />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-base leading-relaxed max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {personal.description}
            </motion.p>

            {/* Location */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-subtle)" }}
            >
              <MapPin size={13} />
              {personal.location}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-3 pt-1">
              <motion.button
                className="btn-primary"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowRight size={16} />
                Contáctame
              </motion.button>
              <motion.a
                href={personal.cvUrl}
                download
                className="btn-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Descargar CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={staggerItem} className="flex items-center gap-3 pt-1">
              <span className="text-sm" style={{ color: "var(--text-subtle)" }}>
                Encuéntrame en
              </span>
              {[
                { href: personal.github, Icon: GithubIcon, label: "GitHub" },
                { href: personal.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg"
                  style={{
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                    background: "transparent",
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "#005187",
                    color: "#0077cc",
                    boxShadow: "0 0 12px rgba(0,81,135,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — avatar */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DevAvatar />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10"
          style={{ borderTop: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {personal.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#0077cc" }}
              >
                {s.value}
              </div>
              <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--text-subtle)" }}
        onClick={() => document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll hacia abajo"
      >
        <span className="text-xs" style={{ fontFamily: "var(--font-mono)" }}>
          scroll
        </span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}
