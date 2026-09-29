// Single source of truth for the site's copy. Edit here, not in components.

export const profile = {
  name: "Md Amdadul Haq Arif",
  shortName: "Arif",
  role: "Senior Full Stack Engineer",
  location: "Dhaka, Bangladesh",
  availability: "Open to senior roles · Remote",
  email: "arifhaq24m@gmail.com",
  url: "https://aharif.xyz",
  resume: "/Amdadul-Haq-Arif-Resume.pdf",
  headline: "I design and ship backends that stay fast as the data grows.",
  intro:
    "Senior full stack engineer with 4+ years building SaaS products on Node.js, PostgreSQL and AWS — and the React front ends that sit on top of them. Currently Backend Project Lead at Gain Solutions, where I own the architecture of an enterprise CRM.",
  socials: {
    github: "https://github.com/amdadulgfx",
    linkedin: "https://www.linkedin.com/in/amdadulgfx/",
    medium: "https://medium.com/@amdadulgfx",
  },
};

export const stats = [
  { value: "4+", label: "years shipping production SaaS" },
  { value: "50k+", label: "users on a platform I led" },
  { value: "35%", label: "faster responses from SQL work" },
  { value: "50%+", label: "API cost cut with a custom PDF engine" },
];

export type Job = {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  products?: { name: string; url: string }[];
};

export const experience: Job[] = [
  {
    company: "Gain Solutions",
    location: "Dhaka, Bangladesh",
    role: "Backend Developer · Project Lead",
    period: "Nov 2023 — Present",
    current: true,
    summary:
      "Lead backend engineer on Gain.io, a CRM + helpdesk platform, and on modernising Payrun, an HR and payroll platform.",
    highlights: [
      "Own the CRM's backend architecture: an ECS core with a decoupled serverless layer for integrations and heavy jobs.",
      "Cut average response time by 35% by rewriting chatty data access into set-based SQL (joins + CTEs).",
      "Run AWS infrastructure — ECS, Lambda, SQS, EventBridge, CloudWatch — for uptime and observability.",
      "Mentor junior developers, review code, and run sprint planning and architecture decisions.",
    ],
    stack: ["Node.js", "GraphQL", "PostgreSQL", "Sequelize", "AWS ECS", "Lambda", "SQS", "EventBridge"],
    products: [
      { name: "gain.io", url: "https://gain.io" },
      { name: "payrun.app", url: "https://payrun.app" },
    ],
  },
  {
    company: "Gordian Global Solutions",
    location: "Melbourne, Australia · Contract",
    role: "Software Engineer",
    period: "Dec 2023 — Jul 2024",
    summary: "Built features across the stack of a change-management SaaS product.",
    highlights: [
      "Replaced a paid export API with an in-house PDF export system, cutting API costs by more than 50%.",
      "Integrated Power BI reporting and restructured database models for new product requirements.",
      "Shipped theme customisation and a WordPress learning centre that lifted engagement by 25%.",
      "Set up CI/CD pipelines to automate backend deployments.",
    ],
    stack: ["Node.js", "GraphQL", "PostgreSQL", "React", "Power BI", "AWS"],
  },
  {
    company: "MedLink Jobs",
    location: "Hyderabad, India · Remote",
    role: "Software Engineer · Lead",
    period: "Nov 2022 — Oct 2023",
    summary: "Led development of MedLink Jobs, India's healthcare job platform, from build to launch.",
    highlights: [
      "Built and launched a recruitment platform that grew past 50,000 users.",
      "Designed a serverless GraphQL backend on AppSync, Lambda and EventBridge over MySQL.",
      "Streamlined the deployment flow across environments for safer, faster releases.",
    ],
    stack: ["Node.js", "AWS AppSync", "Lambda", "EventBridge", "MySQL"],
    products: [{ name: "medlinkjobs.com", url: "https://medlinkjobs.com" }],
  },
  {
    company: "Mimothi Solutions",
    location: "Bangalore, India · Remote",
    role: "Full Stack Developer",
    period: "Mar 2022 — Oct 2022",
    summary: "Built web and mobile apps end-to-end in an agile team.",
    highlights: [
      "Delivered features across React, React Native and Node.js services on PostgreSQL and MySQL.",
      "Fixed critical production bugs and hardened APIs for performance and stability.",
    ],
    stack: ["React", "React Native", "Material UI", "Node.js", "PostgreSQL", "GraphQL"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript (ES2023)", "SQL", "Python"] },
  { group: "Backend", items: ["Node.js", "GraphQL", "REST", "gRPC", "Sequelize", "Elasticsearch"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Partitioning", "Query tuning", "Vector DBs"] },
  { group: "AWS", items: ["ECS", "Lambda", "SQS", "EventBridge", "AppSync", "RDS", "CloudFormation", "CodePipeline"] },
  { group: "Frontend", items: ["React", "Next.js", "React Native", "Material UI", "Tailwind"] },
  { group: "Practice", items: ["System design", "Code review", "Mentoring", "Unit & E2E testing", "AI-assisted dev"] },
];

export const education = [
  { title: "B.Sc. in Computer Science & Engineering", place: "Daffodil International University", period: "2017 — 2021" },
];

export const extras = [
  "ICPC Asia Dhaka Regional — Preliminary, 2019",
  "Best Organizer, DIUDC National Debating Competition, 2017",
];

// Live products I've worked on. Descriptions are from each product's public site;
// "role" is my contribution. Keep internal details and screenshots out unless approved.
export type Product = {
  name: string;
  url: string;
  domain: string;
  image: string;
  company: string;
  period: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  caseStudy?: string;
};

export const products: Product[] = [
  {
    name: "Gain.io",
    url: "https://gain.io",
    domain: "gain.io",
    image: "/products/gain.webp",
    company: "Gain Solutions",
    period: "2023 — Present",
    tagline: "CRM and helpdesk in one customer record",
    description:
      "Sales pipeline, deals, offers and meetings alongside tickets, live chat, SLAs and CSAT — with email and calendar integrations and mobile apps.",
    role: "Backend project lead: core architecture, Gmail / Outlook / Calendar integrations, email analytics, AWS infrastructure.",
    stack: ["Node.js", "GraphQL", "PostgreSQL", "AWS"],
    caseStudy: "enterprise-crm",
  },
  {
    name: "Payrun",
    url: "https://payrun.app",
    domain: "payrun.app",
    image: "/products/payrun.webp",
    company: "Gain Solutions",
    period: "2023 — Present",
    tagline: "All-in-one HR and payroll platform",
    description:
      "Employee management, attendance and timesheets, leave, hiring, payroll and expenses for growing teams across 150+ countries.",
    role: "Upgraded legacy HRM backend systems for performance and maintainability.",
    stack: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    name: "MedLink Jobs",
    url: "https://medlinkjobs.com",
    domain: "medlinkjobs.com",
    image: "/products/medlink.webp",
    company: "MedLink Jobs",
    period: "2022 — 2023",
    tagline: "India's healthcare job platform",
    description:
      "A job marketplace connecting doctors, nurses, pharmacists and lab technicians with verified healthcare employers.",
    role: "Engineering lead: built and launched the platform on a serverless GraphQL backend; grew past 50,000 users.",
    stack: ["Node.js", "AppSync", "Lambda", "MySQL"],
    caseStudy: "medlink-recruitment",
  },
];
