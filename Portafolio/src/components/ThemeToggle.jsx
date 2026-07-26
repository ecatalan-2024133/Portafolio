import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg border"
      style={{
        background: "transparent",
        borderColor: "var(--border-strong)",
        color: "var(--text-muted)",
      }}
      whileHover={{ scale: 1.05, borderColor: "#005187", color: "#0077cc" }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      <AnimateIcon isDark={isDark} />
    </motion.button>
  );
}

function AnimateIcon({ isDark }) {
  return (
    <motion.span
      key={String(isDark)}
      initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
      animate={{ rotate: 0, opacity: 1, scale: 1 }}
      exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.25 }}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </motion.span>
  );
}
