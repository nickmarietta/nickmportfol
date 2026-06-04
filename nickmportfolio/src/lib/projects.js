export const projects = [
  {
    slug: "silverware",
    num: "01",
    featured: true,
    title: "SilverWare",
    img: "/images/Silverware.png",
    desc: "A web application for restaurant owners to customize their store layout and manage operations. Built with a full-stack React + Django architecture deployed on AWS.",
    tags: ["ReactJS", "Django", "AWS", "SQLite"],
    links: [
      { label: "↗ Code", href: "https://github.com/owendevita/Silverware" },
    ],
    problem:
      "Restaurant owners lacked a simple, flexible tool to manage store layouts and daily operations without expensive, bloated POS systems.",
    solution:
      "A full-stack web application letting restaurant owners customize their floor plan, manage tables, and track operational data — all from a browser.",
    role: "Co-developed the full stack — owned the React UI, contributed to the Django REST API, and managed the AWS EC2 deployment pipeline.",
    gallery: 4,
    architectureNodes: ["React SPA", "Django REST API", "AWS EC2", "SQLite"],
  },
  {
    slug: "econauts",
    num: "02",
    featured: true,
    title: "EcoNauts",
    img: "/images/EcoNauts.png",
    desc: "An environmental placement platform connecting students with green internships and sustainability-focused organizations. Streamlines discovery and application.",
    tags: ["React", "Python", "REST API", "PostgreSQL"],
    links: [
      {
        label: "↗ Code",
        href: "https://github.com/nickmarietta/GreenPlacement",
      },
    ],
    problem:
      "Students passionate about sustainability had no centralized place to discover green internships — opportunities were scattered across dozens of sites.",
    solution:
      "A placement platform aggregating green internships, letting students filter by cause area and apply from a single unified dashboard.",
    role: "Led front-end development — designed and built the React interface, integrated the REST API, and drove all UX decisions for the student experience.",
    gallery: 4,
    architectureNodes: [
      "React Frontend",
      "Python REST API",
      "PostgreSQL",
      "Auth Layer",
    ],
  },
  {
    slug: "redclarity",
    num: "03",
    featured: false,
    title: "RedClarity",
    img: "/images/RedClarity.png",
    desc: "A sports management application for organizing team lineups, tracking player statistics, and coordinating roster decisions across a full season.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    links: [
      { label: "↗ Code", href: "https://github.com/nickmarietta/lineuplist" },
    ],
    problem:
      "Sports team managers had no simple tool to track lineups, stats, and roster changes across a season without resorting to spreadsheets.",
    solution:
      "A sports management dashboard that lets managers set lineups, track per-player statistics, and coordinate roster decisions from one place.",
    role: "Full-stack developer — built the React dashboard, Node/Express REST API, and MongoDB data layer end-to-end.",
    gallery: 3,
    architectureNodes: [
      "React Dashboard",
      "Express API",
      "MongoDB",
      "Node.js Runtime",
    ],
  },
  {
    slug: "ecoprompt",
    num: "04",
    featured: true,
    title: "EcoPrompt",
    img: "/images/EcoPrompt.png",
    desc: "An AI prompt optimizer that rewrites verbose prompts for efficiency and visualizes their environmental impact — built in 24 hours at FullyHacks 2026.",
    tags: ["Next.js", "FastAPI", "Python", "Tailwind", "PostgreSQL", "Ollama"],
    links: [
      { label: "↗ Code", href: "https://github.com/nickmarietta/EcoPrompt" },
    ],
    problem:
      "AI prompts are often unnecessarily verbose and computationally wasteful, with users having no visibility into the energy cost of their AI usage.",
    solution:
      "A web app that rewrites prompts using a local Ollama LLM pipeline, then scores and visualizes the environmental impact reduction via the HumanDelta metric.",
    role: "Built the full stack in 24 hours — Next.js frontend with Tailwind, FastAPI backend, Ollama LLM integration, and PostgreSQL via Neon for persistence.",
    gallery: 0,
    architectureNodes: [
      "Next.js Frontend",
      "FastAPI Backend",
      "Ollama (LLM)",
      "PostgreSQL / Neon",
    ],
  },
  {
    slug: "chess-tutor",
    num: "05",
    featured: false,
    title: "Chess Tutor",
    img: "/images/ChessTutor.png",
    desc: "A web app for importing chess games and receiving plain-English move-by-move analysis powered by the Stockfish engine.",
    tags: ["TypeScript", "Stockfish", "Chess"],
    links: [
      { label: "↗ Code", href: "https://github.com/nickmarietta/chess-tutor" },
    ],
    problem:
      "Chess players reviewing their games need expert feedback but can't always access a coach or easily interpret raw engine evaluation scores.",
    solution:
      "A browser-based tool that imports chess games and uses the Stockfish engine to deliver human-readable analysis explaining the key moments in each game.",
    role: "Sole developer — built the full TypeScript application from scratch, integrating Stockfish for move evaluation and feedback generation.",
    gallery: 0,
    architectureNodes: [
      "TypeScript Frontend",
      "Stockfish Engine",
      "PGN Parser",
      "Move Evaluator",
    ],
  },
  {
    slug: "language-learning",
    num: "06",
    featured: false,
    title: "Language Learning Game",
    img: "/images/LanguageLearning.png",
    desc: "An audio-visual language learning game built with Python and Pygame for FullyHacks 2024, featuring interactive menus, sound, and multiple game modes.",
    tags: ["Python", "Pygame", "Tkinter"],
    links: [
      {
        label: "↗ Code",
        href: "https://github.com/nickmarietta/FullyHacks2024LLP",
      },
    ],
    problem:
      "Language learning apps are often repetitive and low-engagement — most rely on dry drills with no game-like reward loop to keep learners motivated.",
    solution:
      "An interactive desktop game that teaches vocabulary through audio-visual gameplay, custom fonts, and a polished UI built in a single hackathon session.",
    role: "Co-developed at FullyHacks 2024 with YuHui Li and Matthew Marietta — contributed to game logic, menu system, and audio integration.",
    gallery: 0,
    architectureNodes: [
      "Pygame Game Engine",
      "Tkinter GUI",
      "Python",
      "Playsound Audio",
    ],
  },
  {
    slug: "nuri",
    num: "07",
    featured: false,
    title: "Nuri",
    img: "/images/Nuri.png",
    desc: "An iOS app that lets users check skincare product ingredients, flagging harmful or beneficial components to help consumers make informed purchasing decisions.",
    tags: ["Swift", "iOS"],
    links: [{ label: "↗ Code", href: "https://github.com/jdc88/Nuri" }],
    problem:
      "Skincare consumers face long, complex ingredient lists with no accessible way to quickly evaluate what's safe, beneficial, or worth avoiding.",
    solution:
      "A native iOS app for searching and scanning skincare ingredients that surfaces clear, actionable information about each component.",
    role: "iOS developer — built the Swift application for ingredient lookup and evaluation as part of a collaborative team project.",
    gallery: 0,
    architectureNodes: [
      "Swift / SwiftUI",
      "iOS Platform",
      "Ingredient Database",
    ],
  },
];

export const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
