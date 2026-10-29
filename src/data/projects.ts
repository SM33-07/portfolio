export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  status: string;
  statusBadge: "shipped" | "production" | "in_development" | "team_project";
  summary: string;
  contribution: string;
  contributionPending?: boolean;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  notes?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "codevault",
    number: "01",
    title: "CodeVault",
    subtitle: "Self-hosted code snippet platform",
    status: "Live demo / shipped project",
    statusBadge: "shipped",
    summary:
      "A full-stack code snippet platform with authentication, private/public visibility controls, search and filtering, syntax-highlighted views, and fork lineage tracking.",
    contribution:
      "Built a full-stack snippet platform with Next.js, Express.js, PostgreSQL, and Prisma, implementing JWT authentication, ownership enforcement, search/filtering, profiles, visibility controls, analytics, syntax-highlighted views, and fork lineage tracking. Identified and fixed an inverted visibility check through adversarial security testing that could have allowed users to fork private snippets they did not own; added Google/GitHub OAuth, Gemini-powered code explanations with graceful fallback, Dockerized local deployment, and documented smoke tests.",
    stack: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT & OAuth",
      "Docker",
      "Gemini API",
    ],
    liveUrl: "https://trycodevault.vercel.app/",
    githubUrl: "https://github.com/SM33-07/CodeVault",
  },
  {
    slug: "code-e-manipal-portal",
    number: "02",
    title: "Code-e-Manipal Portal 2.0",
    subtitle: "Flagship hackathon platform & participant portal",
    status: "Live platform",
    statusBadge: "production",
    summary:
      "A full-stack hackathon management platform with a public event site, registration flows, and a separate portal for participant and administrative workflows.",
    contribution:
      "Developed a full-stack hackathon platform using Next.js, React, TypeScript, and Tailwind CSS with Supabase authentication/management, Azure PostgreSQL, and pgAdmin. Implemented role-based participant and administrative workflows for registration, submissions, and event management with reusable responsive interfaces. Lead web development coordination and contributor workflows for the Code-e-Manipal hackathon platform using Next.js, TypeScript, Supabase, and PostgreSQL.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase Auth",
      "Azure PostgreSQL",
      "pgAdmin",
      "Framer Motion",
    ],
    liveUrl: "https://code-e-manipal.vercel.app/",
  },
  {
    slug: "operation-deadlight",
    number: "03",
    title: "Operation Deadlight",
    subtitle: "Animated cryptic-hunt website & puzzle case file",
    status: "Live event deployment",
    statusBadge: "shipped",
    summary:
      "An interactive web-based puzzle case file and animated cryptic-hunt website built for CASCADE, IEEE Computer Society MUJ's flagship online event.",
    contribution:
      "Designed and built an interactive web-based puzzle case file for CASCADE, IEEE CS MUJ’s flagship online event, from concept through deployment. Designed and deployed Operation Deadlight, an animated, puzzle-driven cryptic-hunt website for CASCADE and other major IEEE CS MUJ initiatives, including Genesis 6.0.",
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Web Audio",
      "Interactive Dossiers",
    ],
    liveUrl: "https://operation-deadlight.vercel.app/",
  },
  {
    slug: "aether-realm",
    number: "04",
    title: "Aether Realm",
    subtitle: "RPG-inspired interactive 3D developer portfolio",
    status: "Live demo / completed project",
    statusBadge: "shipped",
    summary:
      "An explorable game-like developer portfolio replacing conventional static presentation with an interactive 3D RPG world, orthographic camera controls, and persistent progress.",
    contribution:
      "Built an RPG-inspired interactive 3D portfolio using Next.js, React Three Fiber, Three.js, and TypeScript, replacing a conventional portfolio with an explorable game-like environment. Implemented custom character movement, orthographic camera behavior, interactive portfolio zones, dialogue panels, proximity triggers, and persistent progression using Zustand.",
    stack: [
      "Next.js",
      "React",
      "React Three Fiber",
      "Three.js",
      "Zustand",
      "Howler",
      "Tailwind CSS",
    ],
    liveUrl: "https://aether-realm-soham.vercel.app/",
    githubUrl: "https://github.com/SM33-07/Aether-Realm",
  },
  {
    slug: "postgresql-query-advisor",
    number: "05",
    title: "PostgreSQL Query Advisor / Corollary",
    subtitle: "Database performance diagnostics & query analytics",
    status: "In development",
    statusBadge: "in_development",
    summary:
      "An in-progress exploration of PostgreSQL performance diagnostics leveraging pg_stat_statements and EXPLAIN query plan analytics for rule-based optimization insights.",
    contribution:
      "Started exploring PostgreSQL query performance diagnostics using pg_stat_statements and EXPLAIN plans, with a focus on query statistics, costly execution patterns and rule-based diagnostic ideas.",
    stack: [
      "PostgreSQL",
      "Prisma",
      "@prisma/adapter-pg",
      "TypeScript",
      "pg",
    ],
    notes:
      "In development: schema and connection scaffolding established; automated advisor behavior, benchmarks, and production performance gains are not established.",
  },
  {
    slug: "chandravue",
    number: "06",
    title: "Chandravue",
    subtitle: "Lunar exploration interface & ML model platform",
    status: "Public site live / backend offline",
    statusBadge: "team_project",
    summary:
      "A collaborative lunar surface exploration interface incorporating machine learning model visualization. The public frontend is accessible, while backend model services are currently offline.",
    contribution:
      "Contributed to Chandravue's backend development, including training one of its three machine-learning models using a dataset sourced from Kaggle. Also contributed to integrating the trained model into the application.",
    stack: [
      "Backend development",
      "Machine learning",
    ],
    liveUrl: "https://chandravue.vercel.app/",
    notes:
      "Public frontend is accessible; backend model services are currently offline.",
  },
];
