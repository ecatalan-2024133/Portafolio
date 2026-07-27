import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { personal } from "../data/portfolio";
import { fadeUp, fadeLeft, fadeRight, viewportOptions } from "../animations/variants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send the message.");
      }

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert(error.message || "There was an error sending the message.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  const socials = [
    { icon: GithubIcon, label: "GitHub", href: personal.github },
    { icon: LinkedinIcon, label: "LinkedIn", href: personal.linkedin },
  ];

  const whatsappNumber = personal.whatsapp.replace(/\D/g, "");

  return (
    <section id="contact" className="section" style={{ background: "var(--bg)" }}>
      <div className="section-inner">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <div className="eyebrow justify-center">Get in touch</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text)",
            }}
          >
            Let's work{" "}
            <span className="gradient-text">together</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Do you have a project in mind or want to discuss opportunities?
            <br /> I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-2 space-y-6"
          >
            {contactItems.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 card group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{ background: "rgba(0,81,135,0.12)", border: "1px solid rgba(0,81,135,0.2)" }}
                  >
                    <item.icon size={17} style={{ color: "#0077cc" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold mb-0.5" style={{ color: "var(--text-subtle)" }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-4 p-4 card">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,81,135,0.12)", border: "1px solid rgba(0,81,135,0.2)" }}
                  >
                    <item.icon size={17} style={{ color: "#0077cc" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold mb-0.5" style={{ color: "var(--text-subtle)" }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 p-4 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#25D366",
              }}
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>

            {/* Socials */}
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--text-subtle)" }}>
                Social networks
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl transition-all duration-200"
                    style={{ color: "var(--text-muted)", border: "1px solid var(--border)", background: "var(--card)" }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div
              className="p-4 rounded-xl text-sm"
              style={{ background: "rgba(0,81,135,0.08)", border: "1px solid rgba(0,81,135,0.2)", color: "#5ba8dc" }}
            >
              ⚡ Currently available for full-time and freelance roles. Average response time:{" "}
              <strong>under 24 hours.</strong>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-12 flex flex-col items-center justify-center text-center gap-4 h-full"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.1)" }}
                >
                  <CheckCircle size={32} style={{ color: "#22c55e" }} />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  Message sent!
                </h3>
                <p style={{ color: "var(--text-muted)" }} className="text-sm">
                  Thanks for reaching out. I will reply within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="text-sm mt-2"
                  style={{ color: "#0077cc" }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  Send me a message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "Full name", placeholder: "John Doe", type: "text" },
                    { id: "email", label: "Email", placeholder: "john@company.com", type: "email" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                        style={{ color: "var(--text-subtle)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        value={form[field.id]}
                        onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#005187";
                          e.target.style.boxShadow = "0 0 0 2px rgba(0,81,135,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "var(--text-subtle)" }}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    placeholder="Work proposal · Freelance project · Technical inquiry"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                    onFocus={(e) => { e.target.style.borderColor = "#005187"; e.target.style.boxShadow = "0 0 0 2px rgba(0,81,135,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "var(--text-subtle)" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project, available role, or how I can help..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                    style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                    onFocus={(e) => { e.target.style.borderColor = "#005187"; e.target.style.boxShadow = "0 0 0 2px rgba(0,81,135,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
