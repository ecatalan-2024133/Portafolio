import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star } from "lucide-react";
import { education } from "../data/portfolio";
import { fadeUp, staggerContainer, staggerItem, viewportOptions } from "../animations/variants";

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="section-inner">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-16"
        >
          <div className="eyebrow">Education</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text)",
            }}
          >
            Academic education
            <span className="gradient-text">.</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          <div className="timeline-line" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-8 pl-14"
          >
            {education.map((edu) => (
              <motion.div key={edu.id} variants={staggerItem} className="relative">
                <div className="timeline-dot" />

                <div className="card p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg,#005187,#0077cc)" }}
                    >
                      <GraduationCap size={22} style={{ color: "#f0f6ff" }} />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base leading-tight"
                        style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="font-semibold text-sm mt-0.5" style={{ color: "#0077cc" }}>
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {edu.period}
                        </span>
                        <span
                          className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: "rgba(0,81,135,0.1)", color: "#0077cc", border: "1px solid rgba(0,81,135,0.2)" }}
                        >
                          <Star size={9} />
                          {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg font-medium"
                        style={{
                          background: "rgba(0,81,135,0.1)",
                          border: "1px solid rgba(0,81,135,0.2)",
                          color: "#5ba8dc",
                        }}
                      >
                        <BookOpen size={9} />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
