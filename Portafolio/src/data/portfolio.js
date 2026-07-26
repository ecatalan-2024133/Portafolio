/* ─── Personal ─────────────────────────────────────────────────────────────── */
export const personal = {
  firstName: "Edgar Roberto",
  lastName: "Catalán Méndez",
  fullName: "Edgar Roberto Catalán Méndez",
  initials: "EC",
  titles: ["Full Stack Developer", "Backend Developer", "Frontend Developer", "Software Engineer"],
  tagline: "Software Developer",
  description:
    "Ingeniero de software con más de 5 años de experiencia diseñando y construyendo aplicaciones web de alto rendimiento. Especializado en arquitecturas escalables, APIs robustas y experiencias de usuario fluidas. Apasionado por el código limpio, las buenas prácticas y la entrega continua de valor.",
  location: "Ciudad de México, México",
  email: "edgar.catalan@outlook.com",
  phone: "+52 55 3000 0000",
  whatsapp: "525530000000",
  github: "https://github.com/edgar-catalan",
  linkedin: "https://linkedin.com/in/edgar-catalan",
  twitter: "https://twitter.com/edgar_dev",
  available: true,
  yearsExperience: 5,
  projectsDelivered: 40,
  linesOfCode: "500K+",
  cvUrl: "/cv-edgar-catalan.pdf",
  stats: [
    { value: "5+", label: "Años de experiencia" },
    { value: "40+", label: "Proyectos entregados" },
    { value: "15+", label: "Tecnologías" },
    { value: "3", label: "Certificaciones" },
  ],
};

/* ─── Technologies ─────────────────────────────────────────────────────────── */
export const technologies = [
  {
    category: "Frontend",
    icon: "monitor",
    color: "#0077cc",
    items: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    color: "#005187",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "NestJS", level: 85 },
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 78 },
      { name: "PHP / Laravel", level: 72 },
    ],
  },
  {
    category: "Bases de Datos",
    icon: "database",
    color: "#004a7a",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 78 },
      { name: "Prisma ORM", level: 88 },
      { name: "TypeORM", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    color: "#003d66",
    items: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 68 },
      { name: "GitHub Actions", level: 85 },
      { name: "Terraform", level: 65 },
      { name: "Vercel / Netlify", level: 90 },
    ],
  },
  {
    category: "Herramientas",
    icon: "wrench",
    color: "#0064a8",
    items: [
      { name: "Git", level: 95 },
      { name: "Linux", level: 82 },
      { name: "Vite", level: 90 },
      { name: "Jest / Vitest", level: 85 },
      { name: "Playwright", level: 78 },
      { name: "Figma", level: 70 },
    ],
  },
];

/* ─── Projects ─────────────────────────────────────────────────────────────── */
export const projects = [
  {
    id: 1,
    title: "Nexus ERP — Gestión Empresarial",
    description:
      "Sistema ERP completo para empresas medianas. Módulos de inventario, facturación, RRHH y reportes en tiempo real. Soporte para 500+ usuarios concurrentes con arquitectura de microservicios.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    category: "fullstack",
    status: "production",
    github: "https://github.com/edgar-catalan/nexus-erp",
    demo: "https://nexus-erp.example.com",
    date: "Dic 2023",
    featured: true,
  },
  {
    id: 2,
    title: "Atlas FinTech API",
    description:
      "API REST de alto rendimiento para servicios financieros. Procesamiento de transacciones, validación de identidad y reportes regulatorios. 99.99% de uptime en producción.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "JWT", "AWS Lambda"],
    category: "backend",
    status: "production",
    github: "https://github.com/edgar-catalan/atlas-api",
    demo: "https://atlas-api.example.com/docs",
    date: "Jun 2023",
    featured: true,
  },
  {
    id: 3,
    title: "Pulsar Analytics Dashboard",
    description:
      "Dashboard de analíticas en tiempo real para monitoreo de KPIs empresariales. Visualizaciones interactivas, alertas automáticas y exportación de reportes.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&auto=format",
    tags: ["React", "TypeScript", "D3.js", "WebSockets", "Node.js", "MongoDB"],
    category: "fullstack",
    status: "production",
    github: "https://github.com/edgar-catalan/pulsar-dashboard",
    demo: "https://pulsar-analytics.example.com",
    date: "Ene 2023",
    featured: true,
  },
  {
    id: 4,
    title: "Horizon UI Component Library",
    description:
      "Biblioteca de componentes React de código abierto con 70+ componentes accesibles, Storybook integrado y soporte completo para TypeScript. 2k+ estrellas en GitHub.",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&h=500&fit=crop&auto=format",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI", "Vitest"],
    category: "frontend",
    status: "open-source",
    github: "https://github.com/edgar-catalan/horizon-ui",
    demo: "https://horizon-ui.example.com",
    date: "Sep 2022",
    featured: false,
  },
];

/* ─── Experience ────────────────────────────────────────────────────────────── */
export const experience = [
  {
    id: 1,
    company: "Syncorp Technologies",
    role: "Senior Full Stack Developer",
    type: "Full-time",
    startDate: "Ene 2022",
    endDate: "Presente",
    current: true,
    location: "CDMX, México · Remoto",
    description:
      "Lidero el desarrollo del producto central de una plataforma B2B SaaS con más de 20,000 usuarios activos. Responsable de decisiones de arquitectura, revisiones de código y mentoring de un equipo de 5 ingenieros. Reduje la latencia de la API en un 45% mediante optimización de consultas y caché con Redis.",
    achievements: [
      "Redujo latencia de API en 45% con optimización de queries y Redis",
      "Lideró migración a microservicios, mejorando escalabilidad en 3x",
      "Implementó CI/CD con GitHub Actions, reduciendo tiempo de deploy en 70%",
    ],
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Redis", "AWS", "Docker", "K8s"],
  },
  {
    id: 2,
    company: "Axiom Digital Studio",
    role: "Full Stack Developer",
    type: "Full-time",
    startDate: "Mar 2020",
    endDate: "Dic 2021",
    current: false,
    location: "Guadalajara, México",
    description:
      "Desarrollé y entregué 10 proyectos para clientes de industrias como fintech, salud y e-commerce. Introduje prácticas de testing automatizado que redujeron bugs en producción en un 60%. Lideré la migración de una aplicación monolítica PHP a una arquitectura moderna React + Node.js.",
    achievements: [
      "Entregó 10 proyectos a tiempo y dentro del presupuesto",
      "Redujo bugs en producción en 60% con testing automatizado",
      "Migró app monolítica PHP a React + Node.js",
    ],
    technologies: ["React", "Node.js", "Vue.js", "MySQL", "GraphQL", "GitHub Actions", "Laravel"],
  },
  {
    id: 3,
    company: "Vertex Agency",
    role: "Junior Frontend Developer",
    type: "Full-time",
    startDate: "Jul 2019",
    endDate: "Feb 2020",
    current: false,
    location: "CDMX, México",
    description:
      "Desarrollé interfaces responsivas para clientes de los sectores retail, educación y gobierno. Colaboré con diseñadores para implementar diseños pixel-perfect y garantizar compatibilidad cross-browser.",
    achievements: [
      "Implementó 15+ interfaces responsivas para clientes enterprise",
      "Mejoró rendimiento de carga en 40% con optimizaciones de assets",
      "Primer desarrollador del equipo en adoptar TypeScript",
    ],
    technologies: ["React", "JavaScript", "SCSS", "REST APIs", "Webpack", "jQuery"],
  },
];

/* ─── Education ─────────────────────────────────────────────────────────────── */
export const education = [
  {
    id: 1,
    institution: "Universidad Nacional Autónoma de México",
    shortName: "UNAM",
    degree: "Ingeniería en Computación",
    period: "2015 – 2019",
    description:
      "Titulado con mención honorífica. Tesis sobre optimización de algoritmos para sistemas distribuidos. Participé en competencias de programación competitiva representando a la facultad.",
    highlights: ["Sistemas Distribuidos", "Algoritmos y Estructuras de Datos", "Ingeniería de Software", "Bases de Datos"],
    gpa: "9.2 / 10",
  },
  {
    id: 2,
    institution: "Instituto Tecnológico de Estudios Superiores",
    shortName: "ITES",
    degree: "Técnico en Programación",
    period: "2012 – 2015",
    description:
      "Formación técnica en programación orientada a objetos, desarrollo web y bases de datos relacionales.",
    highlights: ["Programación OOP", "Desarrollo Web", "SQL", "Redes"],
    gpa: "9.6 / 10",
  },
];

/* ─── Certifications ────────────────────────────────────────────────────────── */
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    subtitle: "Associate Level",
    issuer: "Amazon Web Services",
    issuerShort: "AWS",
    date: "Octubre 2023",
    expiresDate: "Octubre 2026",
    credentialId: "AWS-SAA-C03-ECM",
    color: "#FF9900",
    verified: true,
  },
  {
    id: 2,
    name: "Professional Scrum Master I",
    subtitle: "PSM I",
    issuer: "Scrum.org",
    issuerShort: "Scrum.org",
    date: "Marzo 2022",
    credentialId: "PSM-I-ECM-2022",
    color: "#009FDA",
    verified: true,
  },
  {
    id: 3,
    name: "Meta React Developer",
    subtitle: "Professional Certificate",
    issuer: "Meta / Coursera",
    issuerShort: "Meta",
    date: "Junio 2021",
    credentialId: "META-RD-ECM-2021",
    color: "#0082FB",
    verified: true,
  },
  {
    id: 4,
    name: "Node.js Application Developer",
    subtitle: "JSNAD Certification",
    issuer: "OpenJS Foundation",
    issuerShort: "OpenJS",
    date: "Enero 2021",
    credentialId: "JSNAD-ECM-2021",
    color: "#5FA04E",
    verified: true,
  },
];

/* ─── Skills ───────────────────────────────────────────────────────────────── */
export const skills = {
  soft: [
    { name: "Liderazgo Técnico", level: 90 },
    { name: "Comunicación Efectiva", level: 88 },
    { name: "Resolución de Problemas", level: 95 },
    { name: "Trabajo en Equipo", level: 92 },
    { name: "Gestión del Tiempo", level: 85 },
    { name: "Mentoring", level: 80 },
  ],
  hard: [
    { name: "Diseño de Sistemas", level: 88 },
    { name: "Revisión de Código", level: 92 },
    { name: "Optimización de Rendimiento", level: 90 },
    { name: "CI/CD Pipelines", level: 85 },
    { name: "Seguridad Web (OWASP)", level: 82 },
    { name: "Arquitectura de Software", level: 85 },
  ],
  languages: [
    { name: "Español", level: 100, label: "Nativo" },
    { name: "Inglés", level: 85, label: "Avanzado (B2)" },
    { name: "Portugués", level: 40, label: "Básico" },
  ],
};
