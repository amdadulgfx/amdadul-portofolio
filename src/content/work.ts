import type { DiagramSpec } from "@/components/Diagram";

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  context: string;
  problem: string;
  approach: { title: string; body: string }[];
  outcome: string[];
  lesson: string;
  diagram: DiagramSpec;
  diagramCaption: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-crm",
    title: "Enterprise CRM that scales from thousands to millions of records",
    company: "Gain Solutions",
    role: "Backend Project Lead",
    period: "2023 — Present",
    summary:
      "Hybrid ECS + serverless architecture for a sales CRM, with a self-scaling queue pattern that keeps the core API responsive during heavy data syncs.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "AWS ECS", "Lambda", "SQS", "EventBridge"],
    metrics: [
      { value: "35%", label: "faster job processing after SQL refactor" },
      { value: "M+", label: "records per client the design targets" },
      { value: "Async", label: "email send — no waiting on providers" },
    ],
    context:
      "The CRM helps large sales teams run their whole pipeline — from first contact with a lead to closing the deal and tracking revenue. It integrates deeply with Gmail, Outlook, Google Calendar and Stripe, and enterprise clients bring data sets that grow from thousands to millions of records.",
    problem:
      "A single monolithic API would have to do everything: serve the UI, enforce permissions, and also run long, bursty integration work like syncing a mailbox or importing a large contact list. That work would starve the API and blow through serverless execution limits if moved naively to Lambda.",
    approach: [
      {
        title: "Split the core from the heavy lifting",
        body: "The core backend runs on ECS and owns business logic, RBAC and PostgreSQL CRUD, exposed to a Next.js front end over GraphQL so each screen fetches exactly what it needs. Integrations live in a decoupled serverless layer: synchronous calls go through API Gateway, everything slow goes through SQS.",
      },
      {
        title: "A recursive queue so Lambda never times out",
        body: "When a job has to process a massive set of contacts or organisations, the worker handles one chunk and pushes the remainder back onto SQS. The loop scales itself with the data, never hits Lambda's execution limit, and keeps the ECS core free during large syncs.",
      },
      {
        title: "Send first, deliver in the background",
        body: "Sending an email used to be synchronous: the UI waited for the provider's API and a database write. I made it asynchronous — persist the record, enqueue, return immediately — and a worker delivers it. If the provider is down, the job stays on the queue and retries instead of failing the user's session.",
      },
      {
        title: "Let the database do what it's good at",
        body: "A job runner was hitting PostgreSQL four or five times per job, shuttling data to Node.js and back. Rewriting it as one query with joins and CTEs made it about 35% faster and stopped the CPU spikes on the database under load.",
      },
    ],
    outcome: [
      "The core API stays responsive while large mailbox and contact syncs run in the background.",
      "Scheduled work and automated workflows run on EventBridge, independent of the core service.",
      "Each part of the system scales on its own as client data grows.",
    ],
    lesson:
      "Serverless limits fail silently. A Lambda on the default 128 MB passed QA with small payloads, then was SIGKILLed with realistic calendar objects — no logs at all. Now the team checks infrastructure metrics, not just application logs, whenever an SDK behaves strangely.",
    diagramCaption: "Core API on ECS, integrations and heavy jobs on a decoupled serverless layer.",
    diagram: {
      width: 820,
      height: 400,
      nodes: [
        { id: "web", x: 20, y: 40, label: "Next.js app", sub: "Amplify · Route 53", kind: "client" },
        { id: "core", x: 305, y: 40, label: "Core API · ECS", sub: "GraphQL · RBAC · CRUD", kind: "service" },
        { id: "pg", x: 600, y: 40, label: "PostgreSQL", sub: "RDS", kind: "data" },
        { id: "sqs", x: 305, y: 190, label: "SQS", sub: "async jobs", kind: "queue" },
        { id: "apigw", x: 600, y: 190, label: "API Gateway", sub: "sync integrations", kind: "service" },
        { id: "ext", x: 600, y: 320, label: "Gmail · Outlook", sub: "Calendar · Stripe", kind: "external" },
        { id: "eb", x: 20, y: 320, label: "EventBridge", sub: "cron · workflows", kind: "queue" },
        { id: "lambda", x: 305, y: 320, label: "Lambda workers", sub: "one chunk per run", kind: "service" },
      ],
      edges: [
        { from: "web", to: "core", label: "GraphQL" },
        { from: "core", to: "pg" },
        { from: "core", to: "sqs", label: "enqueue" },
        { from: "core", to: "apigw", label: "sync" },
        { from: "sqs", to: "lambda", offset: -22, label: "consume" },
        { from: "lambda", to: "sqs", offset: 22, label: "remainder", dashed: true, accent: true },
        { from: "eb", to: "lambda", label: "schedule" },
        { from: "lambda", to: "ext", label: "provider APIs" },
        { from: "apigw", to: "ext" },
      ],
    },
  },
  {
    slug: "email-analytics",
    title: "Email analytics when the provider gives you none",
    company: "Gain Solutions",
    role: "Backend Project Lead",
    period: "CRM feature",
    summary:
      "Open, click, bounce and delivery analytics for Gmail and Outlook — providers that expose none of it through their APIs.",
    tags: ["Node.js", "PostgreSQL", "Gmail API", "Microsoft Graph", "SQS"],
    metrics: [
      { value: "2", label: "providers unified in one model" },
      { value: "7", label: "engagement signals tracked" },
    ],
    context:
      "Sales teams wanted to know what happened after they hit send: was it delivered, did it bounce (soft or hard), when was it first opened, how many times, which links were clicked, which attachments were viewed.",
    problem:
      "Unlike services such as SES, Gmail and Outlook don't provide delivery or engagement events through their APIs or webhooks. And every email client behaves differently — some block images by default, some pre-fetch content — so naive tracking produces bad data.",
    approach: [
      {
        title: "Instrument the message itself",
        body: "At send time the worker injects a unique tracking pixel and rewrites every link to a tracked redirect URL. Loading the pixel records an open; following a link records a click and then 302s the reader to the real destination.",
      },
      {
        title: "Classify delivery from what the provider does say",
        body: "Delivery failures and soft vs. hard bounces are derived from provider responses and event patterns, then normalised into one event model across Gmail and Outlook.",
      },
      {
        title: "Design for messy clients",
        body: "Edge cases — image blocking, pre-loading, duplicate hits — were handled explicitly so seen counts and first-seen timestamps stay trustworthy, and the tracking endpoints stay cheap and horizontally scalable.",
      },
    ],
    outcome: [
      "Users get one engagement view across Gmail and Outlook, despite neither provider offering it.",
      "Core analytics shipped on time; attachment-view tracking was split out as its own piece of work.",
    ],
    lesson:
      "My first estimate missed that attachment views are impossible with raw attachments — it needs a hosted-file model. I flagged it early and moved it out of the sprint so the rest shipped. Since then I run a short spike before committing a timeline to anything I haven't tested.",
    diagramCaption: "Opens and clicks are captured by our own endpoints, not the provider.",
    diagram: {
      width: 820,
      height: 300,
      nodes: [
        { id: "crm", x: 20, y: 40, label: "CRM compose", sub: "user hits send", w: 150, kind: "client" },
        { id: "send", x: 240, y: 40, label: "Send worker", sub: "adds pixel + links", w: 150, kind: "service" },
        { id: "prov", x: 460, y: 40, label: "Gmail / Outlook", sub: "provider API", w: 150, kind: "external" },
        { id: "inbox", x: 680, y: 40, label: "Recipient", sub: "any email client", w: 150, kind: "client" },
        { id: "ui", x: 20, y: 200, label: "Analytics view", sub: "opens · clicks", w: 150, kind: "client" },
        { id: "db", x: 240, y: 200, label: "Event store", sub: "PostgreSQL", w: 150, kind: "data" },
        { id: "track", x: 460, y: 200, label: "Tracking API", sub: "/open · /click", w: 150, kind: "service" },
        { id: "dest", x: 680, y: 200, label: "Destination URL", sub: "302 redirect", w: 150, kind: "external" },
      ],
      edges: [
        { from: "crm", to: "send" },
        { from: "send", to: "prov", offset: -12 },
        { from: "prov", to: "send", offset: 12, label: "status", dashed: true },
        { from: "prov", to: "inbox" },
        { from: "inbox", to: "track", label: "open / click", accent: true },
        { from: "track", to: "dest" },
        { from: "track", to: "db", label: "event" },
        { from: "db", to: "ui", label: "query" },
      ],
    },
  },
  {
    slug: "medlink-recruitment",
    title: "Serverless recruitment platform to 50,000+ users",
    company: "MedLink Jobs",
    role: "Software Engineer · Lead",
    period: "2022 — 2023",
    summary:
      "Led the build and launch of a healthcare recruitment platform on a serverless GraphQL backend.",
    tags: ["Node.js", "AWS AppSync", "Lambda", "EventBridge", "MySQL"],
    metrics: [
      { value: "50k+", label: "users after launch" },
      { value: "Serverless", label: "GraphQL backend, no servers to run" },
    ],
    context:
      "MedLink Jobs connects healthcare professionals with employers. I led development from the first build to launch, working across teams to debug, test and release on schedule.",
    problem:
      "A small team had to ship a product that could handle growth without an ops burden, and move changes between development, staging and production without surprises.",
    approach: [
      {
        title: "Serverless GraphQL",
        body: "AWS AppSync served the GraphQL API with Lambda resolvers in Node.js over MySQL, so capacity followed traffic without managing servers.",
      },
      {
        title: "Event-driven background work",
        body: "EventBridge drove scheduled and event-based jobs, keeping slow work out of the request path.",
      },
      {
        title: "A calmer deployment flow",
        body: "I reworked how releases moved between environments so promotions were predictable and repeatable.",
      },
    ],
    outcome: [
      "Launched and grew past 50,000 users.",
      "Smoother, more predictable releases across environments.",
    ],
    lesson:
      "Leading a launch is mostly coordination: clear task breakdowns in Jira, early integration with design in Figma, and fixing the release process before it becomes the bottleneck.",
    diagramCaption: "GraphQL on AppSync, Lambda resolvers, event-driven jobs.",
    diagram: {
      width: 820,
      height: 260,
      nodes: [
        { id: "web", x: 20, y: 40, label: "Web app", sub: "candidates", w: 150, kind: "client" },
        { id: "appsync", x: 240, y: 40, label: "AWS AppSync", sub: "GraphQL API", w: 150, kind: "service" },
        { id: "fn", x: 460, y: 40, label: "Lambda resolvers", sub: "Node.js", w: 150, kind: "service" },
        { id: "db", x: 680, y: 40, label: "MySQL", sub: "RDS", w: 150, kind: "data" },
        { id: "eb", x: 240, y: 170, label: "EventBridge", sub: "schedules · events", w: 150, kind: "queue" },
        { id: "jobs", x: 460, y: 170, label: "Lambda jobs", sub: "background work", w: 150, kind: "service" },
      ],
      edges: [
        { from: "web", to: "appsync", label: "GraphQL" },
        { from: "appsync", to: "fn" },
        { from: "fn", to: "db" },
        { from: "eb", to: "jobs", label: "trigger", accent: true },
        { from: "jobs", to: "db" },
      ],
    },
  },
  {
    slug: "change-management-saas",
    title: "Halving API costs with an in-house PDF export",
    company: "Gordian Global Solutions",
    role: "Software Engineer · Contract",
    period: "2023 — 2024",
    summary:
      "Replaced a paid export API with our own PDF pipeline, and shipped reporting and theming for a change-management SaaS.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "React", "Power BI", "CI/CD"],
    metrics: [
      { value: "50%+", label: "lower API costs" },
      { value: "25%", label: "higher user engagement" },
    ],
    context:
      "A change-management SaaS used by organisations to plan and track change initiatives, built on Node.js, GraphQL, PostgreSQL, React and AWS.",
    problem:
      "Report exports went through a third-party API billed per call, which grew with usage. The product also needed richer reporting and per-customer branding.",
    approach: [
      {
        title: "Own the export path",
        body: "Built a custom PDF export system so reports are generated by our own backend rather than paying per export — cutting API costs by more than half.",
      },
      {
        title: "Reporting and data model",
        body: "Integrated Power BI reports and restructured database models to support the new reporting needs and improve performance.",
      },
      {
        title: "Engagement and delivery",
        body: "Shipped theme customisation and a WordPress-based learning centre (+25% engagement), and set up CI/CD pipelines to automate backend deployment.",
      },
    ],
    outcome: [
      "Export costs no longer scale linearly with usage.",
      "Faster, automated releases for the backend.",
    ],
    lesson:
      "Check the invoice, not just the code: some of the highest-leverage engineering work is removing a cost that grows with every user.",
    diagramCaption: "Exports moved from a per-call vendor API to our own service.",
    diagram: {
      width: 820,
      height: 260,
      nodes: [
        { id: "web", x: 20, y: 40, label: "React app", sub: "themed per customer", w: 150, kind: "client" },
        { id: "api", x: 240, y: 40, label: "GraphQL API", sub: "Node.js", w: 150, kind: "service" },
        { id: "db", x: 460, y: 40, label: "PostgreSQL", sub: "restructured models", w: 150, kind: "data" },
        { id: "bi", x: 680, y: 40, label: "Power BI", sub: "embedded reports", w: 150, kind: "external" },
        { id: "pdf", x: 240, y: 170, label: "PDF export", sub: "in-house service", w: 150, kind: "service" },
        { id: "vendor", x: 460, y: 170, label: "Paid export API", sub: "removed", w: 150, kind: "removed" },
      ],
      edges: [
        { from: "web", to: "api", label: "GraphQL" },
        { from: "api", to: "db" },
        { from: "db", to: "bi" },
        { from: "api", to: "pdf", label: "export", accent: true },
        { from: "pdf", to: "vendor", dashed: true },
      ],
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
