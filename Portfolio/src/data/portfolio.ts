export type Metric = {
  value: string;
  label: string;
  /** Terse form for the hero's single-line stat strip. */
  short: string;
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
  /** Two-letter timeline marker, e.g. "IS". */
  monogram: string;
  /** Lead with the role instead of the company — for entries where the
      "company" is a placeholder like "Various Clients". */
  roleAsHeading?: boolean;
  period: string;
  location?: string;
  summary?: string;
  stack?: string[];
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
  /** Omit when no screenshot exists — ProjectCard renders a wordmark fallback. */
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  domain?: string;
  category: string;
  internalCaseStudy: boolean;
};

export type Activity = {
  id: string;
  title: string;
  result: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  projectId: string;
};

export const PROFILE = {
  name: "Jed Lordy Legaspo",
  title: "Software Engineer",
  /** Cycled by the hero typewriter. */
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Engineer",
  ],
  headline:
    "I build production web platforms end to end — from Next.js and NestJS architecture down to the deployment, DNS, and integrations that keep them running.",
  summary:
    "I work across the stack on real client systems: re-engineering an AI-generated prototype into a scalable Nx monorepo at Old.St Labs, building and shipping live commercial sites at iSupply Group, and delivering freelance web applications since 2021. I care about clean architecture, honest data modeling, and interfaces that hold up on every device.",
  location: "Lahug, Cebu City, Philippines",
  email: "jed.lordy123@gmail.com",
  phone: "+63 992 474 0456",
  phoneHref: "+639924740456",
  githubUrl: "https://github.com/llegaspo",
  linkedinUrl: "https://linkedin.com/in/jed-lordy-legaspo-9a55041a0",
  resumeUrl: "/resume.pdf",
  status: "Open to software engineering roles",
  focus: [
    "TypeScript",
    "Next.js",
    "NestJS",
    "AWS",
    "Clean Architecture",
    "Production Delivery",
  ],
};

export const METRICS: Metric[] = [
  {
    value: "5+ years",
    label: "Building for the web",
    short: "building for the web",
    detail:
      "Freelance delivery since 2021, then engineering roles at iSupply Group and Old.St Labs.",
  },
  {
    value: "5 live sites",
    label: "Shipped and publicly reachable",
    short: "shipped",
    detail:
      "isupplyseo.com.au, isupplyelectrical.com.au, scratchhq.au, bigliftcrane.com.au, and getnifty.xyz.",
  },
  {
    value: "1.36",
    label: "GWA at UP Cebu",
    short: "gwa at up cebu",
    detail:
      "B.S. Computer Science, University Scholar, DOST-SEI Scholar. Expected June 2027.",
  },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Product Engineering",
    description:
      "I take features from data model to shipped UI without handing off in the middle.",
    points: [
      "Next.js and NestJS in an Nx monorepo",
      "DynamoDB single-table modeling and Zod validation",
      "Clean architecture and shared libraries",
    ],
  },
  {
    title: "CMS + Platform Work",
    description:
      "I extend WordPress and Shopify when off-the-shelf plugins stop being enough.",
    points: [
      "Custom plugins for onboarding and content filtering",
      "Structured data generation and Kadence extensions",
      "Liquid work on Shopify client projects",
    ],
  },
  {
    title: "Delivery + Operations",
    description:
      "Shipping is part of the job. I own the path from branch to production.",
    points: [
      "DNS, SSL, redirects, and hosting configuration",
      "Production troubleshooting on live client systems",
      "PR workflow, rebasing, and engineering code review",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "iSupply Group Pty Ltd",
    monogram: "IS",
    period: "January 2026 – July 2026",
    summary:
      "Owned build and delivery for the group's client websites, from greenfield builds to production operations.",
    stack: ["WordPress", "JavaScript", "Liquid", "Shopify", "PHP"],
    bullets: [
      "Architected and developed isupplyseo.com.au and isupplyelectrical.com.au from the ground up, building reusable components, custom functionality, and integrations around business-specific requirements.",
      "Engineered custom WordPress plugins and extensions for multi-step client onboarding, content filtering, structured data generation, and Kadence functionality, reducing reliance on paid third-party solutions.",
      "Enhanced scratchhq.au through responsive UI improvements, CRM integration, and a custom structured-data system; developed bigliftcrane.com.au and contributed custom functionality to Shopify client projects.",
      "Built AI-assisted development workflows using multiple models and coding agents to accelerate implementation, debugging, refactoring, and UI iteration while manually reviewing and validating production changes.",
      "Managed deployment and production environments across client systems, including DNS, SSL, redirects, hosting configuration, integrations, and production troubleshooting.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Old.St Labs",
    monogram: "OL",
    period: "June 2026 – July 2026",
    summary:
      "Re-engineered Project Pulse, a multi-project issue and workflow tracking platform, toward a scalable production architecture.",
    stack: ["Next.js", "NestJS", "Nx", "TypeScript", "DynamoDB", "Zod"],
    bullets: [
      "Contributed to the re-engineering of Project Pulse, a multi-project issue and workflow tracking platform, migrating an AI-generated prototype toward a scalable architecture using Next.js, NestJS, Nx, TypeScript, shared libraries, and clean architecture principles.",
      "Built backend functionality with NestJS and AWS DynamoDB, applying single-table data modeling, API integration, Zod validation, and real production data integration.",
      "Replaced mocked functionality with backend-driven workflows while resolving authentication, login, validation, ticket detail, and application-flow issues across the platform.",
      "Implemented public-link generation functionality and iterated on production changes through testing, pull requests, rebasing, and engineering code review.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Various Clients",
    monogram: "FR",
    roleAsHeading: true,
    period: "2021 – February 2026",
    summary:
      "Delivered production websites and web applications for individuals and small businesses, end to end.",
    stack: ["React", "TypeScript", "JavaScript", "Firebase", "Hygraph"],
    bullets: [
      "Designed and delivered production websites and web applications for individuals and small businesses, managing projects from requirements gathering and technical planning through development, deployment, and post-launch support.",
      "Enhanced getnifty.xyz by improving scroll-based video animation performance, refining blog and page interfaces, integrating content from Hygraph CMS, and improving overall interaction and visual flow.",
      "Built responsive applications using React, TypeScript, JavaScript, and Firebase, implementing frontend, authentication, database, and backend functionality according to client requirements and project constraints.",
      "Worked directly with clients to translate business requirements into production features, troubleshoot technical and deployment issues, and iteratively improve applications based on stakeholder feedback.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Bayoah PH",
    monogram: "BA",
    period: "September 2024 – November 2024",
    summary:
      "First team-based engineering environment: GitHub workflows, code review, and full-stack ticket work.",
    stack: ["React", "TypeScript", "PostgreSQL", "Zod"],
    bullets: [
      "Completed development tasks through GitHub-based team workflows, implementing fixes independently and opening pull requests for review.",
      "Resolved frontend and data display issues in React and TypeScript, including filtering bugs, stale state, and incorrect table output.",
      "Implemented CRUD functionality and built a billing table interface for application modules to improve data management and internal usability.",
      "Contributed to backend and data-layer updates by adding schema support for new models and assisting with PostgreSQL-backed application changes.",
      "Extended validation logic with a custom Zod-based decimal validator for application requirements not covered by the default library.",
    ],
  },
];

export const PROJECTS: FeaturedProject[] = [
  {
    id: "project-pulse",
    title: "Project Pulse",
    subtitle: "Multi-project issue and workflow tracking platform",
    summary:
      "Re-engineered an AI-generated prototype into a scalable Nx monorepo with NestJS services, DynamoDB single-table modeling, and clean architecture boundaries.",
    date: "Old.St Labs · 2026",
    role: "Software Engineer",
    tags: ["Next.js", "NestJS", "Nx", "DynamoDB"],
    techStack: [
      "Next.js",
      "NestJS",
      "Nx",
      "TypeScript",
      "AWS DynamoDB",
      "Zod",
      "Clean Architecture",
    ],
    features: [
      "Nx monorepo with shared libraries and enforced architectural boundaries",
      "DynamoDB single-table design backing multi-project issue tracking",
      "Public-link generation for sharing work outside the workspace",
    ],
    challenges:
      "The starting point was an AI-generated prototype: it demoed well but had no architectural spine, mocked most of its data, and could not scale. The work was migrating it toward real service boundaries and a real data layer without freezing the product. Single-table DynamoDB modeling was the hardest part — access patterns had to be settled up front, because getting the key design wrong is expensive to undo later.",
    description:
      "Project Pulse is a multi-project issue and workflow tracking platform I helped re-engineer at Old.St Labs. I built backend functionality in NestJS against AWS DynamoDB, applied single-table data modeling and Zod validation, and systematically replaced mocked functionality with backend-driven workflows — resolving authentication, login, validation, ticket detail, and application-flow issues along the way. Changes shipped through testing, pull requests, rebasing, and engineering code review.",
    image: "/project-pulse.webp",
    category: "Product Engineering",
    internalCaseStudy: true,
  },
  {
    id: "isupply-seo",
    title: "iSupply SEO",
    subtitle: "Agency site architected and built from the ground up",
    summary:
      "Built from scratch with reusable components, custom functionality, and integrations shaped around the agency's service model and SEO requirements.",
    date: "iSupply Group · 2026",
    role: "Software Engineer",
    tags: ["Live Site", "WordPress", "Custom Plugins", "Structured Data"],
    techStack: [
      "WordPress",
      "Custom PHP",
      "JavaScript",
      "CSS",
      "Structured Data",
    ],
    features: [
      "Service-led page architecture for SEO and web packages",
      "Reusable components and custom functionality built to spec",
      "Structured data generation without paid plugin dependencies",
    ],
    challenges:
      "The site had to sell services clearly without feeling like every other agency template. I focused on responsive structure, direct calls to action, and custom implementation that supported both search visibility and conversion.",
    description:
      "iSupply SEO is a live commercial website I architected and developed from the ground up at iSupply Group. The project meant translating the agency's service content into a structured site that could rank, convert, and stay easy to update as the business changed.",
    image: "/isupplyseo.webp",
    liveUrl: "https://isupplyseo.com.au",
    domain: "isupplyseo.com.au",
    category: "Client Website",
    internalCaseStudy: false,
  },
  {
    id: "isupply-electrical",
    title: "iSupply Electrical",
    subtitle: "16,000+ product WooCommerce storefront",
    summary:
      "Built a large-catalog electrical wholesale store from the ground up — product taxonomy, faceted category filtering, cart and checkout, and trade-account registration.",
    date: "iSupply Group · 2026",
    role: "Software Engineer",
    tags: ["Live Site", "WooCommerce", "E-Commerce", "Search"],
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "Product Search",
    ],
    features: [
      "Catalog of 16,000+ products across a deep category taxonomy",
      "Faceted filtering and product search across the full catalog",
      "Cart, pricing with GST, and trade registration onboarding",
    ],
    challenges:
      "Catalogs of this size punish naive implementations. Category counts, faceted filtering, and search all have to stay responsive while the product tree runs thousands of items deep, so the work centered on query behavior and a navigation structure that stays usable at that scale.",
    description:
      "iSupply Electrical is a live electrical, data, and lighting wholesale storefront I architected and developed from the ground up at iSupply Group. It carries over 16,000 products across categories like lighting, switchgear, cable, and safety equipment, with faceted filtering, catalog-wide search, cart and checkout, and a tradesman registration flow.",
    image: "/isupplyelectrical.webp",
    liveUrl: "https://isupplyelectrical.com.au",
    domain: "isupplyelectrical.com.au",
    category: "Client Website",
    internalCaseStudy: false,
  },
  {
    id: "scratch-hq",
    title: "Scratch HQ",
    subtitle: "Responsive UI, CRM integration, and custom structured data",
    summary:
      "Improved responsive behavior, integrated CRM functionality, and built a custom structured-data system on a live automotive service site.",
    date: "iSupply Group · 2026",
    role: "Software Engineer",
    tags: ["Live Site", "WordPress", "CRM", "Structured Data"],
    techStack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Technical SEO",
      "Responsive CSS",
    ],
    features: [
      "Responsive UI improvements across critical service pages",
      "CRM integration wired into the lead capture flow",
      "Custom structured-data system without premium plugin lock-in",
    ],
    challenges:
      "The site needed practical improvements supporting SEO and lead capture without adding plugin bloat. Targeted custom work beat layering on another paid tool.",
    description:
      "Scratch HQ is a live client site where I handled responsive UI improvements, CRM integration, and a custom structured-data system. The focus was making the site cleaner, more reliable, and better aligned with search visibility and conversion goals.",
    image: "/scratchHQ.webp",
    liveUrl: "https://scratchhq.au",
    domain: "scratchhq.au",
    category: "Client Website",
    internalCaseStudy: false,
  },
  {
    id: "biglift-crane",
    title: "Big Lift Crane",
    subtitle: "Industrial services site build",
    summary:
      "Developed a live site for an industrial crane services business, covering build, custom functionality, and production deployment.",
    date: "iSupply Group · 2026",
    role: "Software Engineer",
    tags: ["Live Site", "WordPress", "Deployment"],
    techStack: ["WordPress", "PHP", "JavaScript", "Hosting & DNS"],
    features: [
      "Full site build for an industrial services business",
      "Custom functionality matched to service and enquiry flows",
      "Deployment, DNS, and production configuration handled end to end",
    ],
    challenges:
      "Industrial service businesses have very concrete enquiry paths. The work was keeping the site simple and fast while making it obvious how to get a quote.",
    description:
      "Big Lift Crane is a live client site I developed at iSupply Group, taking it from build through deployment including hosting configuration and production troubleshooting.",
    image: "/bigliftcrane.webp",
    liveUrl: "https://bigliftcrane.com.au",
    domain: "bigliftcrane.com.au",
    category: "Client Website",
    internalCaseStudy: false,
  },
  {
    id: "get-nifty",
    title: "Get Nifty",
    subtitle: "Motion-heavy brand experience with Hygraph-backed content",
    summary:
      "Improved scroll-based video animation performance, refined blog and page interfaces, and integrated content from Hygraph CMS.",
    date: "Freelance · 2026",
    role: "Frontend Engineer",
    tags: ["Live Site", "Hygraph", "Motion", "Performance"],
    techStack: ["React", "Hygraph", "Animation", "JavaScript", "Content UI"],
    features: [
      "Scroll-tied video animation with improved performance",
      "Refined blog and page interfaces",
      "Hygraph CMS content integration",
    ],
    challenges:
      "Keeping a motion-heavy experience polished without making it noisy or hard to follow. The work centered on animation performance, timing, and smoother transitions.",
    description:
      "Get Nifty is a brand-heavy website where I improved scroll-based video animation performance, refined the blog and page interfaces, integrated Hygraph CMS content, and improved the overall interaction and visual flow.",
    image: "/getNifty.webp",
    liveUrl: "https://getnifty.xyz",
    domain: "getnifty.xyz",
    category: "Client Website",
    internalCaseStudy: false,
  },
  {
    id: "panday",
    title: "Panday",
    subtitle: "PSC-X Top 25 finalist platform for informal service workers",
    summary:
      "Web platform connecting clients with informal service workers. I helped shape the platform's design and improved user flow for people with limited technical experience.",
    date: "PSC X · Top 25 Finalist",
    role: "Product + Frontend Contributor",
    tags: ["Competition", "Web Platform", "Product Design", "Finalist"],
    techStack: ["React", "Product Design", "Marketplace UX", "Web App"],
    features: [
      "Client-to-worker connection flow for local services",
      "Marketplace UX focused on trust and clarity",
      "Flows designed for low technical literacy",
    ],
    challenges:
      "The users this platform serves are not comfortable with complex software. Making the flow obvious enough for them, while still credible to a startup competition audience, was the whole design problem.",
    description:
      "Panday was built for the Philippine Startup Challenge X and reached the Top 25 finalists in Central Visayas. I contributed to the platform's design and improved user flow for users with limited technical experience.",
    image: "/panday.webp",
    category: "Competition Project",
    internalCaseStudy: true,
  },
  {
    id: "palengke",
    title: "PALengke",
    subtitle: "React Native marketplace app for small vendors",
    summary:
      "Built during the IBPAP Hackathon by implementing interface designs from Figma and contributing to cross-platform frontend development under time constraints.",
    date: "IBPAP Hackathon · Can You HackIT?",
    role: "Frontend Contributor",
    tags: ["Competition", "React Native", "Figma", "Mobile"],
    techStack: [
      "React Native",
      "TypeScript",
      "Figma",
      "Mobile UI",
      "Rapid Prototyping",
    ],
    features: [
      "Marketplace flows for buyers and small vendors",
      "Figma designs translated to working screens at hackathon speed",
      "Cross-platform frontend implementation",
    ],
    challenges:
      "The product needed to feel complete under tight hackathon constraints. The work focused on translating design quickly while keeping screens coherent and usable.",
    description:
      "PALengke is a React Native app for small vendors, built during the IBPAP Hackathon (Can You HackIT?). I implemented interface designs from Figma and contributed to cross-platform frontend development under hackathon time constraints.",
    image: "/PALengke.webp",
    category: "Competition Project",
    internalCaseStudy: true,
  },
  {
    id: "school-announcement-website",
    title: "School Announcement Website",
    subtitle: "Coursework build for centralized campus announcements",
    summary:
      "Contributed to frontend development and part of the backend for a dynamic announcement platform built as a university coursework project.",
    date: "Coursework · UP Cebu",
    role: "Frontend + Backend Contributor",
    tags: ["Coursework", "Next.js", "TypeScript", "Web App"],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Web Forms",
      "Content Management",
    ],
    features: [
      "Centralized announcement publishing for students",
      "Responsive reading experience across devices",
      "Structured frontend backed by dynamic content workflows",
    ],
    challenges:
      "Balancing a clean user-facing presentation against coursework constraints and backend integration needs.",
    description:
      "A coursework project built to make school announcements easier to publish and easier to find. I worked on the frontend and part of the backend, shaping a more usable announcement flow for campus updates.",
    image: "/announcementWebsite.webp",
    category: "Coursework",
    internalCaseStudy: true,
  },
  {
    id: "eduroad",
    title: "EduRoad",
    subtitle: "Hackathon mobile app for personalized education pathways",
    summary:
      "Built during the Notion Hackathon at UP Cebu, combining Flutter frontend work with AI-driven and API-backed features for student guidance.",
    date: "Notion Hackathon · UP Cebu",
    role: "Team Lead + App Developer",
    tags: ["Competition", "Flutter", "AI", "Mobile"],
    techStack: ["Flutter", "Dart", "Android Studio", "REST APIs", "AI Features"],
    features: [
      "Mobile-first learning pathway experience",
      "AI-assisted guidance and recommendation flows",
      "API-backed educational content and interactions",
    ],
    challenges:
      "Combining AI and API-driven functionality inside a hackathon build without losing usability. The focus was keeping the app practical and responsive under time pressure.",
    description:
      "EduRoad was developed during the Notion Hackathon at UP Cebu as a mobile app helping students navigate educational pathways. I led the team and built the Flutter application while integrating AI-oriented and API-backed functionality.",
    image: "/eduroad.webp",
    category: "Competition Project",
    internalCaseStudy: true,
  },
];

/** Ordering for the home page project grid — most technically significant first. */
export const FEATURED_PROJECT_IDS = [
  "project-pulse",
  "isupply-seo",
  "scratch-hq",
  "isupply-electrical",
  "get-nifty",
  "biglift-crane",
];

export const ACTIVITIES: Activity[] = [
  {
    id: "panday",
    title: "Philippine Startup Challenge (PSC) X — Central Visayas",
    result: "Top 25 Finalist",
    shortDesc:
      "Contributed to Panday, a web platform connecting clients with informal service workers.",
    fullDesc:
      "Panday reached the Top 25 finalists in Central Visayas. I helped shape the platform's design and improved user flow for users with limited technical experience.",
    image: "/panday.webp",
    projectId: "panday",
  },
  {
    id: "palengke",
    title: "IBPAP Hackathon (Can You HackIT?)",
    result: "Hackathon Build",
    shortDesc:
      "Helped develop PALengke, a React Native app for small vendors.",
    fullDesc:
      "I implemented interface designs from Figma and contributed to cross-platform frontend development under hackathon time constraints.",
    image: "/PALengke.webp",
    projectId: "palengke",
  },
  {
    id: "eduroad",
    title: "Notion Hackathon (UP Cebu)",
    result: "Hackathon Build",
    shortDesc:
      "Led and built EduRoad, a Flutter app with AI and API-backed features for student guidance.",
    fullDesc:
      "EduRoad was developed during the Notion Hackathon at UP Cebu. I led the team, built the Flutter app, and integrated AI-driven and API-backed functionality into a practical mobile experience for students.",
    image: "/eduroad.webp",
    projectId: "eduroad",
  },
  {
    id: "school-announcement-website",
    title: "School Announcement Website",
    result: "Coursework Project",
    shortDesc:
      "Built a campus announcement platform with frontend work and backend contribution.",
    fullDesc:
      "I contributed to the frontend and part of the backend for a university announcement platform designed to make updates easier to publish and easier for students to find.",
    image: "/announcementWebsite.webp",
    projectId: "school-announcement-website",
  },
];

export const EDUCATION = {
  school: "University of the Philippines Cebu",
  degree: "Bachelor of Science, Computer Science",
  location: "Lahug, Cebu City, Philippines",
  graduation: "Expected June 2027",
  gwa: "GWA: 1.36 (1.00 highest)",
  academicNotes: [
    "University Scholar (2023–2024, 2nd sem; 2024–2025, 1st & 2nd sem)",
    "College Scholar (2023–2024, 1st sem)",
    "DOST-SEI Scholar",
  ],
};

/** Mirrors the resume's Technical Skills section. */
export const SKILLS = {
  languages: ["TypeScript", "JavaScript", "HTML", "CSS", "Liquid"],
  frontend: ["React", "Next.js", "React Native", "Tailwind CSS"],
  backend: [
    "NestJS",
    "Firebase",
    "PostgreSQL",
    "DynamoDB",
    "Zod",
    "tRPC",
    "REST APIs",
  ],
  platforms: ["AWS", "Nx", "Git/GitHub", "WordPress", "Shopify", "Hygraph"],
};

export const SKILL_GROUPS = [
  { label: "Languages", items: SKILLS.languages, dot: "bg-accent-400" },
  { label: "Frontend & Mobile", items: SKILLS.frontend, dot: "bg-sky-400" },
  { label: "Backend & Data", items: SKILLS.backend, dot: "bg-emerald-400" },
  { label: "Platforms & Tools", items: SKILLS.platforms, dot: "bg-amber-400" },
];
