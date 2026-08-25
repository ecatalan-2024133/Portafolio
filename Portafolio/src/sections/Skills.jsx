import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Globe } from "lucide-react";
import { skills } from "../data/portfolio";
import { fadeUp, staggerContainer, staggerItem, viewportOptions } from "../animations/variants";

function SkillBar({ name, level, delay, isVisible }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                    {name}
                </span>
                <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)", fontSize: "0.7rem" }}
                >
                    {level}%
                </span>
            </div>
            <div className="skill-bar-track">
                <motion.div
                    className="skill-bar-fill"
                    style={{ width: "100%", transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isVisible ? level / 100 : 0 }}
                    transition={{ duration: 0.7, delay, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}

function LanguageBadge({ name, level, label }) {
    const segments = 10;
    const filled = Math.round((level / 100) * segments);
    return (
        <div className="card p-5 flex flex-col items-center text-center gap-3">
            <div className="flex gap-1">
                {Array.from({ length: segments }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 2,
                            background: i < filled ? "#005187" : "var(--border)",
                            transition: "background 0.3s",
                        }}
                    />
                ))}
            </div>
            <div>
                <p className="font-semibold text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                    {name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#0077cc" }}>
                    {label}
                </p>
            </div>
        </div>
    );
}

export default function Skills() {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, {
        once: true,
        amount: 0.15,
        margin: "0px 0px -100px 0px",
    });

    return (
        <section ref={sectionRef} id="skills" className="section" style={{ background: "var(--bg-2)" }}>
            <div className="section-inner">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    className="mb-16"
                >
                    <div className="eyebrow">Skills</div>
                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "var(--text)",
                        }}
                    >
                        
                        <span>Skills and competencies</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Soft skills */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center"
                                style={{ background: "rgba(0,81,135,0.12)", border: "1px solid rgba(0,81,135,0.2)" }}
                            >
                                <Brain size={16} style={{ color: "#0077cc" }} />
                            </div>
                            <h3 className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                                Soft Skills
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {skills.soft.map((s, i) => (
                                <motion.div key={s.name} variants={staggerItem}>
                                    <SkillBar name={s.name} level={s.level} delay={0.05 * i} isVisible={isSectionInView} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Hard skills */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center"
                                style={{ background: "rgba(0,81,135,0.12)", border: "1px solid rgba(0,81,135,0.2)" }}
                            >
                                <Code2 size={16} style={{ color: "#0077cc" }} />
                            </div>
                            <h3 className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                                Hard Skills
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {skills.hard.map((s, i) => (
                                <motion.div key={s.name} variants={staggerItem}>
                                    <SkillBar name={s.name} level={s.level} delay={0.05 * i} isVisible={isSectionInView} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center"
                                style={{ background: "rgba(0,81,135,0.12)", border: "1px solid rgba(0,81,135,0.2)" }}
                            >
                                <Globe size={16} style={{ color: "#0077cc" }} />
                            </div>
                            <h3 className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                                Languages
                            </h3>
                        </div>
                        <div className="space-y-3">
                            {skills.languages.map((lang) => (
                                <motion.div key={lang.name} variants={staggerItem}>
                                    <LanguageBadge name={lang.name} level={lang.level} label={lang.label} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
