import { Link } from "react-router-dom";
import Hero from "../components/home/hero";
import Nav, { type NavSection } from "../components/layout/nav";
import Footer from "../components/layout/footer";
import ProfileCard from "../components/profileCard";
import Section from "../components/ui/section";
import ExperienceItem from "../components/home/experienceItem";
import ProjectCard from "../components/home/projectCard";
import {
  ACTIVITIES,
  EDUCATION,
  EXPERIENCES,
  FEATURED_PROJECT_IDS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from "../data/portfolio";

const SECTIONS: NavSection[] = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "stack", label: "stack" },
];

const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
  PROJECTS.find((project) => project.id === id),
).filter((project): project is (typeof PROJECTS)[number] => Boolean(project));

export default function Home() {
  return (
    <>
      <Nav sections={SECTIONS} />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-3xl px-6">
        <Hero />

        <main>
          <Section id="about" title="about">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <ProfileCard />
              <p className="leading-relaxed text-slate-400">
                {PROFILE.summary}
              </p>
            </div>
          </Section>

          <Section id="experience" title="experience">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company ?? experience.role}-${experience.period}`}
                role={experience.role}
                company={experience.company}
                monogram={experience.monogram}
                date={experience.period}
                stack={experience.stack}
                roleAsHeading={experience.roleAsHeading}
                items={experience.bullets}
                isLast={index === EXPERIENCES.length - 1}
              />
            ))}
          </Section>

          <Section id="projects" title="projects">
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.subtitle}
                  techStack={project.techStack}
                  image={project.image}
                  domain={project.domain}
                />
              ))}
            </div>
          </Section>

          <Section id="stack" title="stack">
            <dl className="space-y-4">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-1 sm:flex-row sm:gap-6"
                >
                  <dt className="w-40 shrink-0 font-mono text-xs text-slate-600">
                    {group.label.toLowerCase()}
                  </dt>
                  <dd className="text-sm text-slate-400">
                    {group.items.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="activities" title="activities">
            <ul className="space-y-5">
              {ACTIVITIES.map((activity) => (
                <li key={activity.id}>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <Link
                      to={`/project/${activity.projectId}`}
                      className="text-sm font-medium text-white transition-colors hover:text-accent-300"
                    >
                      {activity.title}
                    </Link>
                    <span className="font-mono text-[11px] text-slate-600">
                      {activity.result}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {activity.shortDesc}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="education" title="education">
            <p className="font-mono text-xs text-slate-500">
              {EDUCATION.graduation}
            </p>
            <h3 className="mt-1 font-semibold text-white">
              {EDUCATION.school}
            </h3>
            <p className="text-sm text-slate-400">{EDUCATION.degree}</p>
            <p className="mt-1 font-mono text-xs text-slate-500">
              {EDUCATION.gwa}
            </p>

            <ul className="mt-4 space-y-1.5">
              {EDUCATION.academicNotes.map((note) => (
                <li key={note} className="flex text-sm text-slate-400">
                  <span aria-hidden="true" className="mr-3 text-slate-600">
                    &bull;
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </Section>
        </main>

        <Footer />
      </div>
    </>
  );
}
