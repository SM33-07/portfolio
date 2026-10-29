export interface ExperienceItem {
  organization: string;
  location: string;
  roles: {
    title: string;
    period: string;
    bullets: string[];
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const EDUCATION = {
  institution: "Manipal University Jaipur",
  location: "Jaipur, Rajasthan",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  period: "Aug. 2025 – Present",
};

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C/C++", "HTML5/CSS3", "SQL", "Java"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Prisma ORM",
      "JWT Authentication",
      "OAuth",
      "Zod",
      "REST API Design",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Databases & Caching",
    skills: ["PostgreSQL", "Supabase"],
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Google Cloud Platform",
      "Microsoft Azure",
      "VS Code",
    ],
  },
  {
    category: "Practices",
    skills: [
      "Sprint-based development",
      "Adversarial/smoke testing",
      "Service-layer architecture",
      "API-first design",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    organization: "IEEE Computer Society MUJ",
    location: "Jaipur, Rajasthan",
    roles: [
      {
        title: "Senior Coordinator, Technical Projects",
        period: "May 2026 – Present",
        bullets: [
          "Designed and built an interactive web-based puzzle case file for CASCADE, IEEE CS MUJ’s flagship online event, from concept through deployment.",
          "Coordinate technical contributors and project timelines; designed and deployed Operation Deadlight, an animated, puzzle-driven cryptic-hunt website for CASCADE and other major IEEE CS MUJ initiatives, including Genesis 6.0",
        ],
      },
      {
        title: "Technical Team — Junior Committee",
        period: "Jan 2026 – Apr 2026",
        bullets: [
          "Contributed to technical projects and event execution as part of the Technical Projects team, building the foundation for promotion to Senior Coordinator.",
        ],
      },
    ],
  },
  {
    organization: "LearnIT Club, MUJ",
    location: "Jaipur, Rajasthan",
    roles: [
      {
        title: "Senior Coordinator, Web Development",
        period: "May 2026 – Present",
        bullets: [
          "Lead web development coordination and contributor workflows for the Code-e-Manipal hackathon platform using Next.js, TypeScript, Supabase, and PostgreSQL.",
        ],
      },
      {
        title: "Web Development Junior Working Team",
        period: "Oct 2025 – May 2026",
        bullets: [
          "Developed the Resources platform for the LearnIT website, organizing curated technical learning materials for student developers.",
        ],
      },
    ],
  },
];

export const PERSONAL_LINKS = {
  github: "https://github.com/SM33-07",
  linkedin: "https://www.linkedin.com/in/soham-more-muj/",
  resume: "/resume.pdf",
};

export const APPROVED_POSITIONING_LINE =
  "Computer science student building full-stack platforms, with a focus on backend systems, databases, and developer tools.";
