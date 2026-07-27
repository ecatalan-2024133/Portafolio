import novabankImage from "../assets/images/novabank.png";
import scophImage from "../assets/images/scoph.png";
import felixsImage from "../assets/images/felixs.png";
import biovidaImage from "../assets/images/biovida.png";
import velureImage from "../assets/images/velure.png";
import listenAIImage from "../assets/images/listen.png";

/* ─── Personal ─────────────────────────────────────────────────────────────── */
export const personal = {
  firstName: "Roberto",
  lastName: "Catalán",
  fullName: "Roberto Catalán",
  initials: "RC",
  titles: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
  tagline: "Software Developer",
  description:
    "Full Stack Developer focused on building modern, high-performance web solutions. Specialized in creating applications with React, .NET, and Node.js, integrating REST APIs, relational and NoSQL databases, and Docker deployment workflows. I learn quickly, adapt to new technologies, and keep a strong emphasis on clean code, scalability, and continuous improvement.",
  location: "Ciudad de Guatemala, Guatemala",
  email: "rbertocatalan@gmail.com",
  phone: "+502 5434-4476",
  whatsapp: "+502 5434-4476",
  github: "https://github.com/r0b3r-c4t",
  linkedin: "https://www.linkedin.com/in/roberto-c-256752383/",
  twitter: "https://twitter.com/edgar_dev",
  available: true,
  yearsExperience: 5,
  projectsDelivered: 10,
  linesOfCode: "500K+",
  cvUrl: "/cv-edgar-catalan.pdf",
  stats: [
    { value: "5+", label: "Years of experience" },
    { value: "10+", label: "Projects delivered" },
    { value: "15+", label: "Technologies" },
    { value: "1", label: "Certifications" },
  ],
};

/* ─── Technologies ─────────────────────────────────────────────────────────── */
export const technologies = {
  frontend: [
    { name: "React", icon: "SiReact", level: 95 },
    { name: "TypeScript", icon: "SiTypescript", level: 90 },
    { name: "HTML5", icon: "SiHtml5", level: 98 },
    { name: "CSS3", icon: "SiCss3", level: 95 },
    { name: "Tailwind CSS", icon: "SiTailwindcss", level: 95 },
    { name: "JavaScript", icon: "SiJavascript", level: 95 },
    { name: "Zustand", icon: "SiZustand", level: 85 },
    { name: "Bootstrap", icon: "SiBootstrap", level: 90 },
    { name: "React Router", icon: "SiReactrouter", level: 85 }
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs", level: 85 },
    { name: "Fastify", icon: "SiFastify", level: 90 },
    { name: "C#", icon: "SiSharp", level: 80 },
    { name: "ASP.NET Core", icon: "SiDotnet", level: 80 },
    { name: "Java", icon: "SiOpenjdk", level: 80 },
    { name: "Spring Boot", icon: "SiSpringboot", level: 80 },
    { name: "REST APIs", icon: "SiPostman", level: 90 },
  ],
  databases: [
    { name: "PostgreSQL", icon: "SiPostgresql", level: 90 },
    { name: "MongoDB", icon: "SiMongodb", level: 85 },
    { name: "Supabase", icon: "SiSupabase", level: 85 },
    { name: "MySQL", icon: "SiMysql", level: 85 }
  ],
  cloud: [
    { name: "Docker", icon: "SiDocker", level: 90 },
    { name: "Render", icon: "SiRender", level: 90 },
    { name: "Vercel", icon: "SiVercel", level: 90 },
    { name: "Nginx", icon: "SiNginx", level: 75 },
  ],
  tools: [
    { name: "Git", icon: "SiGit", level: 95 },
    { name: "GitHub", icon: "SiGithub", level: 95 },
    { name: "Figma", icon: "SiFigma", level: 80 },
    { name: "Vite", icon: "SiVite", level: 90 },
    { name: "Linux", icon: "SiLinux", level: 90 },
    { name: "Postman", icon: "SiPostman", level: 95 },
    { name: "pnpm", icon: "SiPnpm", level: 90 },
  ]
};

export const portfolioData = {
  technologies,
};

/* ─── Projects ─────────────────────────────────────────────────────────────── */
export const projects = [
  {
    id: 1,
    title: "Novabank - Banking System",
    description:
      "Complete banking system with account management, transfers, payments, and financial reporting features. Built with advanced security and regulatory compliance in mind.",
    image: novabankImage,
    tags: ["React", "Node.js", "PostgreSQL", "ASP.NET", "Fastify", "Docker"],
    category: "fullstack",
    status: "production",
    github: "https://github.com/r0b3r-c4t/Novabank.git",
    demo: "https://novabank-nine-rosy.vercel.app/",
    date: "2026",
    featured: true,
  },
  {
    id: 2,
    title: "SCOPH - Medical Scheduling and Inventory Management",
    description:
      "Medical scheduling and inventory management system for healthcare organizations. Enables scheduling of medical events, patient tracking, and resource administration.",
    image: scophImage,
    tags: ["React", "Node.js", "PostgreSQL", "ASP.NET", "Fastify", "Docker"],
    category: "fullstack",
    status: "open-source",
    github: "https://github.com/r0b3r-c4t/SCOPH-Gestor-Jornadas-Medicas.git",
    date: "2026",
    featured: true,
  },
  {
    id: 3,
    title: "Listen AI - Audio-to-Text Transcription App",
    description:
      "Audio-to-text transcription application using AI-powered natural language processing. Generates a downloadable DOCX file with the transcribed text.",
    image: listenAIImage,
    tags: ["Python", "CSS", "HTML5"],
    category: "fullstack",
    status: "open-source",
    github: "https://github.com/r0b3r-c4t/Listen-AI",
    date: "2025",
    featured: true,
  },
  {
    id: 4,
    title: "Felix's - Veterinary Clinic Management",
    description:
      "Management system for veterinary clinics, offering appointment control, animal medical history tracking, and inventory administration.",
    image: felixsImage,
    tags: ["Java", "JavaFX", "CSS", "MySQL"],
    category: "fullstack",
    status: "open-source",
    github: "https://github.com/r0b3r-c4t/Felix-s.git",
    date: "2025",
    featured: false,
  },
  {
    id: 5,
    title: "Biovida - Pharmaceutical Website",
    description:
      "Website for a pharmaceutical company with product information, services, and contact details. Includes responsive design implementation.",
    image: biovidaImage,
    tags: ["HTML5", "CSS"],
    category: "frontend",
    status: "open-source",
    github: "https://github.com/r0b3r-c4t/Biovida.git",
    date: "2025",
    featured: false,
  },
  {
    id: 6,
    title: "Velure - Vehicle Dealership Management System",
    description:
      "Management system for vehicle dealerships, enabling inventory control, quote management, and sales tracking.",
    image: velureImage,
    tags: ["Java", "CSS", "HTML5", "MySQL"],
    category: "fullstack",
    status: "open-source",
    github: "https://github.com/r0b3r-c4t/Velure",
    date: "2025",
    featured: false,
  },

];

/* ─── Education ─────────────────────────────────────────────────────────────── */
export const education = [
  {
    id: 1,
    institution: "Centro Educativo Técnico Laboral Kinal",
    shortName: "Kinal",
    degree: "Technical Specialist in Computer Science",
    period: "2024 – 2026",
    description:
      "Training focused on software development, databases, web development, and application architecture. Participated in academic projects using modern technologies and development methodologies.",
    highlights: [
      "Web Development",
      "Databases",
      "Object-Oriented Programming",
      "Software Architecture"]
  },
  {
    id: 2,
    institution: "Self-Taught Learning",
    shortName: "Self Learning",
    degree: "Full Stack Development",
    period: "2024 – Present",
    description:
      "Continuous self-learning through official documentation, personal projects, and solving real-world problems, focusing on modern web application technologies.",
    highlights: [
      "React",
      "ASP.NET Core",
      "Fastify",
      "Docker"
    ],
  }
];

/* ─── Skills ───────────────────────────────────────────────────────────────── */
export const skills = {
  soft: [
    { name: "Technical Leadership", level: 90 },
    { name: "Effective Communication", level: 88 },
    { name: "Problem Solving", level: 95 },
    { name: "Teamwork", level: 92 },
    { name: "Time Management", level: 85 },
    { name: "Mentoring", level: 80 },
  ],
  hard: [
    { name: "System Design", level: 88 },
    { name: "Code Review", level: 92 },
    { name: "Performance Optimization", level: 90 },
    { name: "CI/CD Pipelines", level: 85 },
    { name: "Web Security (OWASP)", level: 82 },
    { name: "Software Architecture", level: 85 },
  ],
  languages: [
    { name: "Spanish", level: 100, label: "Native" },
    { name: "English", level: 85, label: "Advanced (B2)" },
    { name: "Portuguese", level: 40, label: "Basic" },
  ],
};
