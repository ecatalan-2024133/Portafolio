import { motion } from "framer-motion";

export function AnimatedSection({ children, className = "", delay = 0, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-primary mb-4 ${centered ? "justify-center w-full" : ""}`}
        >
          <span className="h-px w-8 bg-primary opacity-60" />
          {eyebrow}
          <span className="h-px w-8 bg-primary opacity-60" />
        </div>
      )}
      <h2
        className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-ink-muted max-w-2xl leading-relaxed">{description}</p>
      )}
    </div>
  );
}
