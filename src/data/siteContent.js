export const profile = {
  name: "Roshan Vivek",
  fullName: "Roshan Rathika Vivekanandan",
  headline: "Software developer focused on full-stack platforms & DevOps automation",
  summary:
    "I build resilient software with Spring Boot, React, and cloud-native pipelines that keep releases fast, observable, and dependable.",
  location: "Leicester, United Kingdom · Open to remote collaboration",
  email: "Roshanvivek2000@gmail.com",
  availability: "Actively seeking software development & DevOps opportunities.",
};

export const skillHighlights = [
  {
    title: "Full-stack delivery",
    description: "Spring Boot services, React frontends, and TypeScript tooling.",
  },
  {
    title: "DevOps pipelines",
    description: "GitLab CI/CD, automated testing, container packaging, release gates.",
  },
  {
    title: "Cloud & containers",
    description: "Kubernetes (MicroK8s), Docker, AWS, and OpenStack lab orchestration.",
  },
];

export const navigation = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "2+", label: "Years shipping production software" },
  { value: "15%", label: "Profit uplift through automation" },
  { value: "4", label: "End-to-end cloud releases delivered" },
];

export const projects = [
  {
    title: "Petitions Platform (CI/CD Pipeline)",
    description:
      "Spring Boot + React platform deployed via GitLab pipelines with automated builds, tests, container images, and Kubernetes rollout.",
    stack: ["Spring Boot", "React", "GitLab CI/CD", "Kubernetes", "Docker"],
    link: "https://gitlab.com/roshan-vivek/petitions-platform",
    outcome:
      "Cut release time from manual hours to minutes with gated promotions and quality checks.",
    highlight: "Full DevOps pipeline · GitLab",
  },
  {
    title: "Cloud & Kubernetes Management System",
    description:
      "Provisioned an OpenStack lab, orchestrated Docker workloads with MicroK8s, and automated scaling for compute-heavy services.",
    stack: ["OpenStack", "MicroStack", "MicroK8s", "Docker"],
    link: null,
    outcome:
      "Delivered on-demand container lifecycle controls and documented operational runbooks.",
    highlight: "Infrastructure automation",
  },
  {
    title: "Cloud-Native Productivity Tracker",
    description:
      "Full-stack tracker capturing effort distribution with Spring Boot APIs, React UI, and AWS-hosted Kubernetes.",
    stack: ["Java", "Spring Boot", "React", "AWS", "PostgreSQL"],
    link: null,
    outcome:
      "Improved delivery visibility and surfaced a 15% profit opportunity through data insights.",
    highlight: "Enterprise analytics",
  },
  {
    title: "Banking Microservices Prototype",
    description:
      "Explored modularising core banking workflows into discrete Spring Boot microservices with resilient communication patterns.",
    stack: ["Java", "Spring Boot", "Microservices", "REST"],
    link: "https://github.com/Roshan-R-V/Banking_platform",
    outcome:
      "Validated domain boundaries and service isolation to support future scaling.",
    highlight: "Service design",
  },
];

export const experience = [
  {
    company: "Wipro Limited",
    role: "Project Engineer · Full-stack & Platform Engineering",
    period: "Sept 2022 – Sept 2024",
    summary:
      "Shipped internal tooling and stabilised enterprise systems for energy clients while mentoring across the team.",
    highlights: [
      "Implemented a productivity tracker with Spring Boot, React, and PostgreSQL, revealing a 15% profit increase.",
      "Cut defect turnaround by 30% through process automation and proactive monitoring.",
      "Partnered with cross-functional teams to deliver high-priority fixes within aggressive SLAs.",
    ],
  },
  {
    company: "University of Leicester",
    role: "MSc Software Engineering Candidate",
    period: "Sept 2024 – Sept 2025",
    summary:
      "Focusing on software architecture, cloud computing, and generative development while leading hands-on DevOps projects.",
    highlights: [
      "Exploring resource optimisation for high-performance computing workloads.",
      "Collaborating on agile product teams building greenfield mobile and web experiences.",
    ],
  },
];

export const skills = [
  {
    title: "Core Stack",
    items: ["Java & Spring Boot", "React & TypeScript", "Node.js APIs", "PostgreSQL & MongoDB"],
  },
  {
    title: "DevOps Toolkit",
    items: ["GitLab CI/CD", "Docker", "Kubernetes (MicroK8s)", "AWS (EC2, S3)", "OpenStack"],
  },
  {
    title: "Quality & Collaboration",
    items: ["Automated testing (JUnit, Selenium)", "Observability dashboards", "Agile delivery & mentoring"],
  },
];

export const socialLinks = [
  { label: "GitLab", href: "https://gitlab.com/roshan-vivek" },
  { label: "GitHub", href: "https://github.com/Roshan-R-V" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roshan-vivek/" },
  { label: "Resume", href: "/Roshan_CV.pdf" },
];
