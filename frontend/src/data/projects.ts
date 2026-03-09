export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  status: "In Progress" | "Completed";
  year: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 9,
    title: "SpurHacks",
    image: "/project_images/placeholder.png",
    description: "Hackathon build focused on fast prototyping and end-to-end delivery.",
    link: "/projects/spur-hacks",
    status: "In Progress",
    year: "2026",
    stack: ["React", "Next.js", "TypeScript"],
    highlights: [
      "Rapidly iterated from concept to demo-ready implementation.",
      "Focused on clear UX and practical problem framing.",
      "Built for quick extension after the event.",
    ],
  },
  {
    id: 8,
    title: "aiBlock",
    image: "/project_images/placeholder.png",
    description: "AI-assisted workflow concept for reducing repetitive tasks.",
    link: "/projects/ai-block",
    status: "In Progress",
    year: "2026",
    stack: ["React", "Node.js", "AI APIs"],
    highlights: [
      "Designed a lightweight workflow to automate high-friction steps.",
      "Created a modular architecture for model/provider flexibility.",
      "Prioritized response quality and latency balance.",
    ],
  },
  {
    id: 7,
    title: "Portfolio v2",
    image: "/project_images/placeholder.png",
    description: "Second-generation personal portfolio with richer interaction design.",
    link: "/projects/portfolio-v2",
    status: "In Progress",
    year: "2026",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Refined project card UX and animated text interactions.",
      "Improved visual hierarchy across intro and experience sections.",
      "Structured content for easier future updates.",
    ],
  },
  {
    id: 6,
    title: "Git Tissues",
    image: "/project_images/placeholder.png",
    description: "Developer utility aimed at reducing common Git friction points.",
    link: "/projects/git-tissues",
    status: "Completed",
    year: "2025",
    stack: ["TypeScript", "Node.js", "CLI"],
    highlights: [
      "Simplified repetitive Git operations into clear commands.",
      "Added guardrails for common branch and commit mistakes.",
      "Built with a developer-first terminal experience.",
    ],
  },
  {
    id: 5,
    title: "TrueDermis",
    image: "/project_images/placeholder.png",
    description: "Product exploration for dermatology-focused user workflows.",
    link: "/projects/true-dermis",
    status: "Completed",
    year: "2025",
    stack: ["React", "API Integration", "UI Design"],
    highlights: [
      "Mapped core user flow for condition tracking and information lookup.",
      "Designed interface patterns for trust and clarity.",
      "Integrated supporting data endpoints for faster feedback.",
    ],
  },
  {
    id: 4,
    title: "DBAC Companion App",
    image: "/project_images/placeholder.png",
    description: "Companion app to support day-to-day workflows and information access.",
    link: "/projects/dbac-companion-app",
    status: "Completed",
    year: "2025",
    stack: ["React Native", "Supabase", "TypeScript"],
    highlights: [
      "Built a mobile-first interface for quick in-the-field actions.",
      "Implemented authentication and data syncing flow.",
      "Focused on reliability in low-attention usage scenarios.",
    ],
  },
  {
    id: 3,
    title: "EdiGen",
    image: "/project_images/placeholder.png",
    description: "Tooling to generate and manage EDI-related outputs more efficiently.",
    link: "/projects/edi-gen",
    status: "Completed",
    year: "2025",
    stack: ["TypeScript", "Backend APIs", "Data Validation"],
    highlights: [
      "Automated repetitive generation tasks into a structured pipeline.",
      "Added validation checks to reduce downstream issues.",
      "Improved throughput and consistency for generated artifacts.",
    ],
  },
  {
    id: 2,
    title: "GateKeeper",
    image: "/project_images/placeholder.png",
    description: "Access-control and management interface for secure workflows.",
    link: "/projects/gatekeeper",
    status: "Completed",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Authorization"],
    highlights: [
      "Implemented role-aware user pathways.",
      "Added clear status surfaces for access and permission states.",
      "Optimized the admin flow for operational speed.",
    ],
  },
  {
    id: 1,
    title: "EdiGen (Early Version)",
    image: "/project_images/placeholder.png",
    description: "Early prototype of the EdiGen platform and workflow assumptions.",
    link: "/projects/edi-gen",
    status: "Completed",
    year: "2024",
    stack: ["TypeScript", "Prototype UI", "Automation"],
    highlights: [
      "Validated early generation and validation flow assumptions.",
      "Shaped the data model used in later iterations.",
      "Established baseline architecture for expansion.",
    ],
  },
];

export const getProjectSlug = (project: Project): string =>
  project.link.replace(/^\/?projects\//, "").replace(/\/$/, "");

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => getProjectSlug(project) === slug);

export const getProjectSlugs = (): string[] =>
  Array.from(new Set(projects.map((project) => getProjectSlug(project))));
