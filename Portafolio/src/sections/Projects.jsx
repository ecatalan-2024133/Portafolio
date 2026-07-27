import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, Tag, Circle } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import { projects } from "../data/portfolio";
import { fadeUp, viewportOptions } from "../animations/variants";

const FILTERS = [
    { label: "All", value: "all" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Backend", value: "backend" },
    { label: "Frontend", value: "frontend" },
];

const STATUS_STYLES = {
    production: { label: "Production", color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
    "open-source": { label: "Open Source", color: "#0077cc", bg: "rgba(0,119,204,0.1)" },
    development: { label: "In development", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
};

export default function Projects() {
    const [filter, setFilter] = useState("all");
    const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

    return (
        <section id="projects" className="section" style={{ background: "var(--bg-1)" }}>
            <div className="section-inner">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
                >
                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-2">
                        {FILTERS.map((f) => (
                            <motion.button
                                key={f.value}
                                onClick={() => setFilter(f.value)}
                                className="text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200"
                                style={{
                                    background: filter === f.value ? "#005187" : "var(--card)",
                                    color: filter === f.value ? "#f0f6ff" : "var(--text-muted)",
                                    border: `1px solid ${filter === f.value ? "rgba(0,119,204,0.4)" : "var(--border)"}`,
                                    boxShadow: filter === f.value ? "0 0 16px rgba(0,81,135,0.3)" : "none",
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {f.label}
                            </motion.button>
                        ))}
                    </div>

                    <div className="projects-heading-right">
                        <div className="eyebrow">Portfolio</div>
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                fontWeight: 800,
                                color: "var(--text)",
                            }}
                        >
                            Featured projects
                            <span className="gradient-text">.</span>
                        </h2>
                    </div>


                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => {
                            const status = STATUS_STYLES[project.status] ?? STATUS_STYLES.production;
                            return (
                                <motion.article
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: i * 0.07 }}
                                    className="card group overflow-hidden"
                                >
                                    {/* Image */}
                                    <div
                                        className="relative overflow-hidden"
                                        style={{ height: 200, background: "var(--card)" }}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div
                                            className="absolute inset-0 transition-opacity duration-300"
                                            style={{
                                                background: "linear-gradient(to top, rgba(6,12,20,0.8) 0%, transparent 60%)",
                                            }}
                                        />
                                        {/* Hover actions */}
                                        <div
                                            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ background: "rgba(0,81,135,0.2)", backdropFilter: "blur(4px)" }}
                                        >
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-xl"
                                                style={{ background: "rgba(6,12,20,0.8)", border: "1px solid rgba(0,119,204,0.3)", color: "#f0f6ff" }}
                                                aria-label="GitHub"
                                            >
                                                <GithubIcon size={18} />
                                            </a>
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-xl"
                                                style={{ background: "#005187", border: "1px solid rgba(0,119,204,0.4)", color: "#f0f6ff" }}
                                                aria-label="Demo"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                        {/* Featured badge */}
                                        {project.featured && (
                                            <div
                                                className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                                                style={{ background: "#005187", color: "#f0f6ff", border: "1px solid rgba(0,119,204,0.4)" }}
                                            >
                                                Featured
                                            </div>
                                        )}
                                        {/* Status */}
                                        <div
                                            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                                            style={{ background: status.bg, color: status.color, border: `1px solid ${status.color}40` }}
                                        >
                                            <Circle size={5} className="fill-current" />
                                            {status.label}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3
                                            className="font-bold text-base mb-2 leading-tight"
                                            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "var(--text-muted)" }}>
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2.5 py-1 rounded-lg font-medium flex items-center gap-1"
                                                    style={{
                                                        background: "rgba(0,81,135,0.1)",
                                                        border: "1px solid rgba(0,81,135,0.2)",
                                                        color: "#5ba8dc",
                                                    }}
                                                >
                                                    <Tag size={9} />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div
                                            className="flex items-center justify-between pt-4"
                                            style={{ borderTop: "1px solid var(--border)" }}
                                        >
                                            <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-subtle)" }}>
                                                <Calendar size={11} />
                                                {project.date}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                                                    style={{ color: "var(--text-muted)" }}
                                                >
                                                    <GithubIcon size={12} />
                                                    Code
                                                </a>
                                                <span style={{ color: "var(--border)" }}>·</span>
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-xs font-medium"
                                                    style={{ color: "#0077cc" }}
                                                >
                                                    <ExternalLink size={12} />
                                                    Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
