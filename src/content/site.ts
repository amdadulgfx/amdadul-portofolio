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
};

export const experience: Job[] = [
  {
    company: "Gain Solutions",
    location: "Dhaka, Bangladesh",
    role: "Backend Developer · Project Lead",
    period: "Nov 2023 — Present",
    current: true,
    summary:
      "Lead backend engineer on an enterprise CRM and on the modernisation of legacy HRM systems.",
    highlights: [
      "Own the CRM's backend architecture: an ECS core with a decoupled serverless layer for integrations and heavy jobs.",
      "Cut average response time by 35% by rewriting chatty data access into set-based SQL (joins + CTEs).",
      "Run AWS infrastructure — ECS, Lambda, SQS, EventBridge, CloudWatch — for uptime and observability.",
      "Mentor junior developers, review code, and run sprint planning and architecture decisions.",
    ],
    stack: ["Node.js", "GraphQL", "PostgreSQL", "Sequelize", "AWS ECS", "Lambda", "SQS", "EventBridge"],
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
    summary: "Led development of a healthcare recruitment platform from build to launch.",
    highlights: [
      "Built and launched a recruitment platform that grew past 50,000 users.",
      "Designed a serverless GraphQL backend on AppSync, Lambda and EventBridge over MySQL.",
      "Streamlined the deployment flow across environments for safer, faster releases.",
    ],
    stack: ["Node.js", "AWS AppSync", "Lambda", "EventBridge", "MySQL"],
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
