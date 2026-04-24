export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Capability = {
  title: string;
  description: string;
  points: string[];
};

export type Experience = {
  role: string;
  company?: string;
  period: string;
  bullets: string[];
};

export type FeaturedProject = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  role: string;
  tags: string[];
  techStack: string[];
  features: string[];
  challenges: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  domain?: string;
  accent: string;
  category: string;
  internalCaseStudy: boolean;
};

export const PROFILE = {
  name: "Jed Lordy Legaspo",
  title: "Contract Web Developer",
  headline:
    "I build responsive, conversion-focused websites and frontend systems for brands that need the web to perform.",
  summary:
    "My work sits at the overlap of frontend engineering, CMS customization, and practical product delivery. I improve broken layouts, refine content flows, build custom site functionality, and ship polished experiences that hold up across desktop, tablet, and mobile.",
  location: "Lahug, Cebu City, Philippines",
  email: "jed.lordy123@gmail.com",
  phone: "+63 9924740456",
  githubUrl: "https://github.com/llegaspo",
  linkedinUrl: "https://linkedin.com/in/jed-lordy-legaspo-9a55041a0",
  resumeUrl: "/resume.pdf",
  status: "Open to contract web work",
  focus: [
    "Responsive UI",
    "Frontend Systems",
    "React + TypeScript",
    "WordPress Customization",
    "SEO-Ready Builds",
    "API Integrations",
  ],
};

export const METRICS: Metric[] = [
  {
    value: "3+ years",
    label: "Web Delivery",
    detail: "Client work, internships, and product builds across React, WordPress, and TypeScript.",
  },
  {
    value: "3 live sites",
    label: "Verified Client Work",
    detail: "iSupply SEO, Scratch HQ, and Get Nifty are publicly reachable and live.",
  },
  {
    value: "2027",
    label: "Expected Graduation",
    detail: "B.S. Computer Science at the University of the Philippines Cebu.",
  },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Frontend Engineering",
    description:
      "I turn rough pages into stable, responsive interfaces that feel intentional across breakpoints.",
    points: [
      "Layout cleanup and responsive fixes",
      "Interaction polish and animation tuning",
      "Component-driven UI implementation",
    ],
  },
  {
    title: "CMS + Content Systems",
    description:
      "I work inside real-world content stacks and extend them when off-the-shelf plugins stop being enough.",
    points: [
      "Custom WordPress plugins",
      "Schema insertion and SEO support",
      "Blog filtering and editorial flows",
    ],
  },
  {
    title: "Full-Stack Delivery",
    description:
      "I can move from frontend improvements to data modeling, validation, and internal tooling without losing momentum.",
    points: [
      "React, TypeScript, and Firebase builds",
      "PostgreSQL and Zod-backed app changes",
      "Deployment, DNS, redirects, and hosting fixes",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Contract Web Developer",
    company: "Various Clients",
    period: "January 2026 – Present",
    bullets: [
      "Improved responsive WordPress websites by fixing layout inconsistencies, overlapping elements, and broken UI behavior across desktop, tablet, and mobile.",
      "Enhanced scratchhq.au through frontend refinements, CRM-ready feature integration, and a custom plugin for schema markup without relying on paid SEO plugin upgrades.",
      "Contributed to getnifty.xyz by smoothing scroll-based video animation, refining page and blog UI, and improving flow on a Hygraph-integrated website.",
      "Built isupplyseo.com.au from scratch, leading the website's design and implementation around the client's service content, offers, and brand direction.",
      "Developed custom WordPress plugins for onboarding flows, blog filtering, and Kadence blocks while handling DNS, SSL, redirects, hosting setup, and deployment troubleshooting.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Bayoah PH",
    period: "September 2024 – November 2024",
    bullets: [
      "Completed development tasks through GitHub-based team workflows, implementing fixes independently and opening pull requests for review.",
      "Resolved frontend and data display issues in React and TypeScript, including filtering bugs, stale state, and incorrect table output.",
      "Implemented CRUD functionality and built a billing table interface for application modules to improve data management and internal usability.",
      "Contributed to backend and data-layer updates by adding schema support for new models and assisting with PostgreSQL-backed application changes.",
      "Extended validation logic with a custom Zod-based decimal validator for application requirements not covered by the default library.",
    ],
  },
  {
    role: "Freelance Web Developer",
    period: "2021 – 2023",
    bullets: [
      "Designed and developed responsive websites and web applications for individual clients and small businesses from planning through deployment.",
      "Built interfaces primarily with React, TypeScript, and JavaScript, choosing tools and architecture based on business needs and budget.",
      "Delivered practical web solutions using Firebase for authentication, database, and backend functionality to keep projects lightweight and affordable.",
      "Gathered requirements, translated them into working features, fixed bugs, and iterated continuously based on feedback and evolving product needs.",
    ],
  },
];

export const PROJECTS: FeaturedProject[] = [
  {
    id: "isupply-seo",
    title: "iSupply SEO",
    subtitle: "Conversion-focused agency site built from scratch",
    summary:
      "Led design and implementation for a live client website focused on SEO offers, clean conversion paths, and flexible service packaging.",
    date: "Client Work · 2026",
    role: "Design + Development Lead",
    tags: ["Live Site", "WordPress", "Responsive UI", "SEO Architecture"],
    techStack: ["WordPress", "Custom PHP", "JavaScript", "CSS", "Schema Markup"],
    features: [
      "Service-led page architecture for SEO and web packages",
      "Responsive layouts built for mobile-first browsing",
      "Custom site functionality aligned to the client's offer structure",
    ],
    challenges:
      "The challenge was building a site that sold services clearly without feeling generic. I focused on responsive structure, direct calls to action, and implementation details that supported both SEO and conversions.",
    description:
      "iSupply SEO is a live client website I built from scratch around the agency's service model. The project required translating service content into a structured website that could rank, convert, and remain easy to update as the business evolved.",
    image: "/isupplyseo.png",
    liveUrl: "https://isupplyseo.com.au",
    domain: "isupplyseo.com.au",
    accent: "from-cyan-500/25 via-sky-500/10 to-transparent",
    category: "Client Website",
    internalCaseStudy: false,
  },
  {
    id: "scratch-hq",
    title: "Scratch HQ",
    subtitle: "Frontend fixes and custom functionality for a service business",
    summary:
      "Improved frontend behavior, integrated CRM-ready functionality, and added schema support through custom plugin work on a live automotive service site.",
    date: "Client Work · 2026",
    role: "Frontend + Custom Plugin Development",
    tags: ["Live Site", "WordPress", "Custom Plugin", "Schema Support"],
    techStack: ["WordPress", "PHP", "JavaScript", "Technical SEO", "Responsive CSS"],
    features: [
      "Frontend refinements across critical service pages",
      "Custom schema tooling without premium plugin lock-in",
      "Implementation tuned for lead generation and trust signals",
    ],
    challenges:
      "The site needed practical improvements that supported SEO and lead capture without introducing plugin bloat. I used targeted custom work instead of layering on unnecessary tools.",
    description:
      "Scratch HQ is a live client site where I handled frontend refinement and custom functionality work. The focus was making the site cleaner, more reliable, and better aligned with search visibility and conversion goals.",
    image: "/scratchHQ.png",
    liveUrl: "https://scratchhq.au",
    domain: "scratchhq.au",
    accent: "from-amber-500/25 via-orange-500/10 to-transparent",
    category: "Client Website",
    internalCaseStudy: false,
  },
  {
    id: "get-nifty",
    title: "Get Nifty",
    subtitle: "Motion-heavy brand experience with Hygraph-backed content",
    summary:
      "Refined video-driven scrolling, page transitions, and blog UI to make a visually ambitious content site feel smoother and easier to navigate.",
    date: "Client Work · 2026",
    role: "Frontend Refinement",
    tags: ["Live Site", "Hygraph", "Motion", "UI Polish"],
    techStack: ["React", "Hygraph", "Animation", "JavaScript", "Content UI"],
    features: [
      "Smoother scroll-tied video and motion behavior",
      "Improved visual flow across page and blog templates",
      "UI refinements that strengthened interaction clarity",
    ],
    challenges:
      "The core challenge was keeping a motion-heavy experience polished without making the interface feel noisy or difficult to follow. The work centered on timing, clarity, and smoother transitions.",
    description:
      "Get Nifty is a brand-heavy website where I contributed frontend refinements focused on motion quality and page usability. My work improved scroll interactions, blog presentation, and the overall rhythm of the browsing experience.",
    image: "/getNifty.png",
    liveUrl: "https://getnifty.xyz",
    domain: "getnifty.xyz",
    accent: "from-emerald-500/25 via-lime-500/10 to-transparent",
    category: "Client Website",
    internalCaseStudy: false,
  },
  {
    id: "school-announcement-website",
    title: "School Announcement Website",
    subtitle: "Coursework build for centralized campus announcements",
    summary:
      "Contributed to both frontend development and part of the backend for a dynamic announcement website built as a university coursework project.",
    date: "Coursework Project",
    role: "Frontend + Backend Contributor",
    tags: ["Case Study", "Next.js", "TypeScript", "Web App"],
    techStack: ["Next.js", "React", "TypeScript", "Web Forms", "Content Management"],
    features: [
      "Centralized announcement publishing for students",
      "Responsive reading experience across devices",
      "Structured frontend backed by dynamic content workflows",
    ],
    challenges:
      "The main challenge was balancing clean user-facing presentation with coursework constraints and backend integration needs. I focused on making the interface clear and practical while supporting dynamic content.",
    description:
      "This coursework project was built to make school announcements easier to publish and easier to find. I worked on the frontend and part of the backend, helping shape a more usable announcement flow for campus updates.",
    image: "/announcementWebsite.png",
    accent: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
    category: "Case Study",
    internalCaseStudy: true,
  },
  {
    id: "palengke",
    title: "PALengke",
    subtitle: "Hackathon marketplace app translated from Figma to frontend",
    summary:
      "Helped build a React Native app for small vendors during the IBPAP HackIT? competition, moving quickly from design files into working frontend screens.",
    date: "IBPAP HackIT? Competition",
    role: "Frontend Contributor",
    tags: ["Case Study", "React Native", "Hackathon", "Figma"],
    techStack: ["React Native", "TypeScript", "Figma", "Mobile UI", "Rapid Prototyping"],
    features: [
      "Marketplace flows for buyers and small vendors",
      "Hackathon-speed frontend delivery from design files",
      "Cross-platform UI thinking under time pressure",
    ],
    challenges:
      "The product needed to feel complete under tight hackathon constraints. The work focused on translating design quickly while keeping screens coherent and usable.",
    description:
      "PALengke was built during a hackathon focused on practical product delivery under time pressure. I helped turn Figma screens into a working frontend for a small-vendor marketplace concept.",
    image: "/PALengke.png",
    accent: "from-rose-500/20 via-orange-500/10 to-transparent",
    category: "Competition Project",
    internalCaseStudy: true,
  },
  {
    id: "panday",
    title: "Panday",
    subtitle: "PSC-X finalist platform for informal service workers",
    summary:
      "Contributed to Panday, a web platform connecting clients with informal workers, with a focus on product shape, platform flow, and overall user experience.",
    date: "PSC-X · Top 25 Finalist",
    role: "Product + Frontend Contributor",
    tags: ["Case Study", "Startup", "Web Platform", "Finalist"],
    techStack: ["React", "Product Design", "Marketplace UX", "Web App"],
    features: [
      "Client-to-worker connection flow for local services",
      "Marketplace UX focused on trust and clarity",
      "Early-stage product shaping during competition delivery",
    ],
    challenges:
      "Panday needed to present a two-sided marketplace clearly in a short time frame. The challenge was making the flow understandable and credible enough for a startup competition audience.",
    description:
      "Panday was built for the Philippine Startup Challenge and reached the Top 25 finalists in Central Visayas. I contributed to shaping the platform's experience and improving how users move through the product.",
    image: "/panday.png",
    accent: "from-teal-500/20 via-cyan-500/10 to-transparent",
    category: "Competition Project",
    internalCaseStudy: true,
  },
];

export const HIGHLIGHTS = [
  {
    title: "Philippine Startup Challenge (PSC) X",
    result: "Top 25 Finalist · Central Visayas",
    description:
      "Contributed to Panday, a web platform connecting clients with informal service workers, and helped shape the product flow and user experience.",
  },
  {
    title: "IBPAP HackIT?",
    result: "Hackathon Build",
    description:
      "Helped develop PALengke, a React Native app for small vendors, translating Figma screens into frontend implementation under tight constraints.",
  },
  {
    title: "School Announcement Website",
    result: "Coursework Project",
    description:
      "Contributed to frontend development and part of the backend implementation for a dynamic announcement platform built at university.",
  },
];

export const EDUCATION = {
  school: "University of the Philippines Cebu",
  degree: "Bachelor of Science, Computer Science",
  location: "Lahug, Cebu City, Philippines",
  graduation: "Expected June 2027",
  academicNotes: [
    "Cumulative GPA: 1.36 (3.65/4.0)",
    "University Scholar (2023–2024 2nd sem; 2024–2025 1st & 2nd sem)",
    "College Scholar (2023–2024 1st sem)",
    "DOST-SEI Scholar",
  ],
};

export const SKILLS = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Tailwind CSS",
  ],
  backend: ["Firebase", "PostgreSQL", "Zod", "tRPC"],
  tools: ["WordPress", "Git/GitHub", "API Integration", "Hygraph"],
};
