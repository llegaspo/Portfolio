import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import Background from "../components/home/background";
import { PROFILE } from "../data/portfolio";

const resumeExperience = [
  {
    title: "Contract Web Developer — Various Clients",
    date: "January 2026 — Present",
    bullets: [
      "Improved responsive WordPress websites for multiple clients by resolving layout inconsistencies, overlapping elements, and broken UI behavior across desktop, tablet, and mobile devices.",
      "Enhanced scratchhq.au through frontend refinements, CRM-related feature integration, and a custom plugin for inserting schema markup without relying on paid SEO plugin upgrades.",
      "Contributed to getnifty.xyz by improving scroll-based video animation smoothness, refining blog and page UI, and strengthening overall visual flow and user interaction on a Hygraph-integrated website.",
      "Built isupplyseo.com.au from scratch, leading the website's design and implementation based on client requirements, service content, and branding direction.",
      "Developed custom WordPress plugins for a multi-step onboarding form, blog filtering, and Kadence block extensions, while also handling technical site operations such as DNS, SSL, redirects, hosting setup, and deployment troubleshooting.",
    ],
  },
  {
    title: "Web Development Intern — Bayoah PH",
    date: "September 2024 — November 2024",
    bullets: [
      "Completed assigned development tasks through GitHub-based team workflows, independently implementing fixes and opening pull requests for review in a collaborative web development environment.",
      "Resolved frontend and data display issues in React and TypeScript, including bugs related to filtering behavior, stale or improperly refreshed data, and incorrect table output.",
      "Implemented CRUD functionality and built a billing table interface for application modules, improving data management and internal usability.",
      "Contributed to backend and data-layer updates by adding schema support for new models, updating model field types, and assisting with PostgreSQL-backed application changes.",
      "Extended validation functionality by creating a custom Zod-based decimal validator to support application requirements not covered by the default library.",
    ],
  },
  {
    title: "Freelance Web Developer",
    date: "2021 — 2023",
    bullets: [
      "Designed and developed responsive websites and web applications for individual clients and small businesses, managing the full workflow from client consultation and planning to implementation and deployment.",
      "Built user interfaces primarily with React, TypeScript, and JavaScript, choosing appropriate tools and architectures based on business needs and project budget.",
      "Delivered practical and low-cost web solutions using Firebase for authentication, database, and backend functionality, helping clients get started without heavy infrastructure costs.",
      "Gathered client requirements, translated them into working features, resolved bugs, and continuously refined projects based on feedback and evolving business needs.",
    ],
  },
];

const resumeProjects = [
  {
    title:
      "Philippine Startup Challenge (PSC) X — Central Visayas (Top 25 Finalist)",
    description:
      "Contributed to Panday, a web platform connecting clients with informal service workers, by helping shape the platform's design and improving user flow for users with limited technical experience.",
  },
  {
    title: "IBPAP Hackathon (Can You HackIT?)",
    description:
      "Helped develop PALengke, a React Native app for small vendors, by implementing interface designs from Figma and contributing to cross-platform frontend development under hackathon time constraints.",
  },
  {
    title: "School Announcement Website",
    description:
      "Contributed to frontend development and led much of the backend implementation for a dynamic announcement platform built as a coursework project.",
  },
];

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-violet-200/12 pt-4 first:border-t-0 first:pt-0">
      <h2 className="mb-3 text-center font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-violet-200">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Resume() {
  return (
    <main className="min-h-screen text-slate-100">
      <Background />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <FaArrowLeft size={12} />
            Back Home
          </Link>

          <div className="flex flex-wrap gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FaExternalLinkAlt size={12} />
              Open PDF
            </a>
            <a
              href={PROFILE.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-400"
            >
              <FaDownload size={12} />
              Download PDF
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-violet-500/10 blur-3xl" />
          <div className="pointer-events-none absolute left-[6%] top-[8%] h-40 w-40 rounded-full border border-violet-400/12" />
          <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-56 w-56 rounded-full border border-blue-400/10" />

          <div className="relative mx-auto max-w-[920px] rounded-[1.75rem] border border-white/10 bg-[#090910]/88 p-3 shadow-[0_30px_90px_rgba(2,6,23,0.38)]">
            <div className="mx-auto w-full max-w-[840px] rounded-[1.15rem] border border-violet-300/12 bg-[linear-gradient(180deg,rgba(14,14,22,0.98),rgba(11,11,18,0.96))] p-6 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8 lg:p-10">
              <header className="border-b border-violet-200/12 pb-4">
                <h1 className="text-center text-[1.55rem] font-bold tracking-tight text-white">
                  Jed Lordy Legaspo
                </h1>
                <p className="mt-2 text-center text-[12px] leading-6 text-slate-300">
                  jed.lordy123@gmail.com • https://github.com/llegaspo • +63
                  9924740456
                </p>
              </header>

              <div className="mt-5 space-y-5 text-[12.5px] leading-6 text-slate-200">
                <ResumeSection title="Experience">
                  <div className="space-y-4">
                    {resumeExperience.map((experience) => (
                      <article key={`${experience.title}-${experience.date}`}>
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                          <h3 className="font-semibold text-white">
                            {experience.title}
                          </h3>
                          <p className="shrink-0 text-[11px] text-slate-400">
                            {experience.date}
                          </p>
                        </div>
                        <ul className="mt-1 space-y-1.5 pl-5">
                          {experience.bullets.map((item) => (
                            <li key={item} className="list-disc marker:text-violet-300">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </ResumeSection>

                <ResumeSection title="Education">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-semibold text-white">
                        University of the Philippines Cebu
                      </h3>
                      <p>Bachelor of Science, Computer Science. GPA: 1.36 (3.65/4.0)</p>
                      <p>University Scholar (2023–2024, 2nd sem; 2024–2025, 1st & 2nd sem)</p>
                      <p>College Scholar (2023–2024, 1st sem)</p>
                      <p>DOST-SEI Scholar</p>
                    </div>
                    <div className="text-left text-[11px] text-slate-400 sm:text-right">
                      <p>Lahug, Cebu City, Philippines</p>
                      <p>Expected June 2027</p>
                    </div>
                  </div>
                </ResumeSection>

                <ResumeSection title="Projects & Competitions">
                  <ul className="space-y-2 pl-5">
                    {resumeProjects.map((item) => (
                      <li
                        key={item.title}
                        className="list-disc marker:text-violet-300"
                      >
                        <span className="font-semibold text-white">
                          {item.title}:
                        </span>{" "}
                        {item.description}
                      </li>
                    ))}
                  </ul>
                </ResumeSection>

                <ResumeSection title="Skills & Interests">
                  <div className="space-y-1.5">
                    <p>
                      <span className="font-semibold text-white">
                        Frontend & Mobile:
                      </span>{" "}
                      HTML, CSS, JavaScript, TypeScript, React, React Native,
                      Tailwind CSS
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        Backend & Data:
                      </span>{" "}
                      Firebase, PostgreSQL, Zod, tRPC
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        Tools & Platforms:
                      </span>{" "}
                      WordPress, Git/GitHub, API Integration, Hygraph
                    </p>
                  </div>
                </ResumeSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
