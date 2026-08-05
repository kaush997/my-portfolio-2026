// ============================================================
// PORTFOLIO CONTENT — edit everything about Sanduni's site here.
// Components just read from this file, so you rarely need to
// touch component code to update text, links, or lists.
// ============================================================

export const profile = {
  name: "Sanduni Hulathdoowage",
  initials: "SH",
  role: "Software Engineer & Researcher",
  tagline: "I build thoughtful software and study the systems behind it.",
  location: "Colombo, Sri Lanka",
  email: "skdilukshi@gmail.com",
  phone: "+94 71 772 8723",
  resumeUrl: "#",
  social: {
    github: "https://github.com/kaush997",
    linkedin: "www.linkedin.com/in/sanduni-hulathdoowage-994248245",
    facebook: "https://www.facebook.com/sanduni.kaushalya.31?mibextid=ZbWKwL",
    scholar: "https://scholar.google.com/citations?user=lpXYeWoAAAAJ&hl=en&authuser=1",
  },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a Software Engineer with a BSc (Hons) in Computing and Information Systems from Sabaragamuwa University of Sri Lanka. I specialize in designing and developing scalable web applications and enterprise software that solve real-world business challenges.",
    "My experience spans full-stack development, system design, and business process automation, with a focus on building reliable, efficient, and user-centric solutions. I also have a strong foundation in Machine Learning and Computer Vision through academic research and industry experience, which has strengthened my analytical and problem-solving skills.",
    "I'm passionate about software architecture, continuous learning, and developing innovative solutions that create meaningful value for businesses and users.",
  ],
  stats: [
    { label: "Years of experience", value: "3+" },
    { label: "Projects shipped", value: "50+" },
    { label: "Research papers", value: "3" },
    { label: "Certifications", value: "14" },
  ],
};

export const services = [
  {
    title: "Web Application Development",
    description:
      "End-to-end delivery of responsive, accessible web apps — from architecture to polished UI — using React, Node.js, and modern tooling.",
    icon: "Code2",
  },
  {
    title: "Applied Machine Learning",
    description:
      "Designing and deploying ML models for real products: data pipelines, model evaluation, and production inference.",
    icon: "BrainCircuit",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, performance audits, and pragmatic guidance for teams scaling their engineering practices.",
    icon: "Compass",
  },
  {
    title: "UI/UX Prototyping",
    description:
      "Turning rough ideas into interactive, testable prototypes that communicate product direction quickly.",
    icon: "PenTool",
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    org: "Nimbus Labs",
    period: "2023 — Present",
    location: "Colombo, Sri Lanka",
    points: [
      "Lead a team of 4 engineers building a real-time analytics platform used by 50k+ monthly active users.",
      "Cut infrastructure costs by 32% through query optimisation and a re-architected caching layer.",
      "Introduced a component design system adopted across three product teams.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Cortex Systems",
    period: "2021 — 2023",
    location: "Colombo, Sri Lanka",
    points: [
      "Built and maintained core services for a fintech onboarding product handling 10k+ daily transactions.",
      "Partnered with the data team to ship a fraud-detection model into production.",
      "Reduced average API latency by 40% through targeted refactors and caching.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Vellora Technologies",
    period: "2020 — 2021",
    location: "Colombo, Sri Lanka",
    points: [
      "Shipped internal tooling that automated a manual QA workflow, saving ~6 hours/week.",
      "Wrote test coverage for legacy modules, raising coverage from 41% to 78%.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. (Hons) in Computer Science",
    school: "University of Colombo School of Computing",
    period: "2017 — 2021",
    detail: "First Class Honours · Final-year project on federated learning for edge devices.",
  },
  {
    degree: "G.C.E. Advanced Level — Physical Science",
    school: "Visakha Vidyalaya, Colombo",
    period: "2014 — 2016",
    detail: "Island rank in Combined Mathematics.",
  },
];

export const skills = [
  { name: "JavaScript / TypeScript", level: 95 },
  { name: "React & Next.js", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 85 },
  { name: "Machine Learning (PyTorch)", level: 78 },
  { name: "SQL & Data Modelling", level: 82 },
  { name: "Cloud (AWS / GCP)", level: 75 },
  { name: "UI/UX Design", level: 70 },
];

export const certificates = [
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford Online",
    year: "2022",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2022",
  },
];

export const researches = [
  {
    title: "Federated Learning Strategies for Low-Resource Edge Devices",
    venue: "IEEE Regional Conference on Computing, 2023",
    description:
      "Proposed a lightweight aggregation strategy that reduces communication overhead by 27% on constrained IoT hardware.",
    link: "#",
  },
  {
    title: "Explainability Trade-offs in Production Recommendation Systems",
    venue: "ACM SIGKDD Workshop, 2022",
    description:
      "Studied the accuracy–interpretability trade-off in gradient-boosted recommenders deployed at scale.",
    link: "#",
  },
  {
    title: "A Comparative Study of Caching Strategies for Real-Time Analytics",
    venue: "University of Colombo Research Symposium, 2021",
    description:
      "Undergraduate thesis benchmarking cache-invalidation strategies for high-write analytics workloads.",
    link: "#",
  },
];

export const projects = [
  {
    title: "Pulse — Real-Time Analytics Dashboard",
    description:
      "A self-serve analytics platform with live event streaming, custom dashboards, and role-based access.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    link: "#",
    repo: "#",
  },
  {
    title: "Aegis — Fraud Detection Pipeline",
    description:
      "An ML pipeline that scores fintech transactions in under 80ms, with a feedback loop for continual retraining.",
    tags: ["Python", "PyTorch", "Kafka", "Docker"],
    link: "#",
    repo: "#",
  },
  {
    title: "Nimbus UI — Component Library",
    description:
      "An accessible, themeable React component library used across three internal product teams.",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    link: "#",
    repo: "#",
  },
  {
    title: "Kolam — Generative Pattern Studio",
    description:
      "A small creative-coding tool that generates traditional geometric patterns using parametric rules.",
    tags: ["Canvas API", "JavaScript", "Creative Coding"],
    link: "#",
    repo: "#",
  },
];

export const gallery = [
  {
    caption: "Speaking at Colombo Dev Meetup, 2024",
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
  },
  {
    caption: "Hackathon win — Nimbus Labs team",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    caption: "Workshop: intro to machine learning",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    caption: "University research symposium",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    caption: "Office — building Pulse dashboard",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    caption: "Mentoring session with junior engineers",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
];
