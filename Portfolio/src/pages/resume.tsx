import type { ReactNode } from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import PageHeader from "../components/layout/pageHeader";
import {
  ACTIVITIES,
  EDUCATION,
  EXPERIENCES,
  PROFILE,
  SKILL_GROUPS,
} from "../data/portfolio";

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
      <h2 className="mb-3 text-center font-mono text-[11px] font-bold tracking-[0.18em] text-accent-300 uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Resume() {
  return (
    <>
      <PageHeader />

      <main className="min-h-screen text-slate-100">
      <div className="mx-auto max-w-[1280px] px-4 pt-6 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-end gap-3">
          <div className="flex flex-wrap gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/12 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-white/30 hover:text-white"
            >
              <FaExternalLinkAlt size={12} />
              Open PDF
            </a>
            <a
              href={PROFILE.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-white/12 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
            >
              <FaDownload size={12} />
              Download PDF
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-[860px] rounded-lg border border-white/10">
            <div className="w-full p-6 text-slate-300 sm:p-8 lg:p-10">
              <header className="border-b border-white/10 pb-4">
                <h1 className="text-center text-[1.55rem] font-bold tracking-tight text-white">
                  {PROFILE.name}
                </h1>
                <p className="mt-2 text-center font-mono text-[11.5px] leading-6 text-slate-400">
                  {PROFILE.email} • {PROFILE.githubUrl} • {PROFILE.phone}
                </p>
              </header>

              <div className="mt-5 space-y-5 text-[12.5px] leading-6 text-slate-200">
                <ResumeSection title="Experience">
                  <div className="space-y-4">
                    {EXPERIENCES.map((experience) => (
                      <article
                        key={`${experience.company ?? experience.role}-${experience.period}`}
                      >
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                          <h3 className="font-semibold text-white">
                            {experience.role}
                            {experience.company
                              ? ` — ${experience.company}`
                              : ""}
                          </h3>
                          <p className="shrink-0 font-mono text-[11px] text-slate-400">
                            {experience.period}
                          </p>
                        </div>
                        <ul className="mt-1 space-y-1.5 pl-5">
                          {experience.bullets.map((item) => (
                            <li
                              key={item}
                              className="list-disc marker:text-accent-400"
                            >
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
                        {EDUCATION.school}
                      </h3>
                      <p>
                        {EDUCATION.degree}. {EDUCATION.gwa}
                      </p>
                      {EDUCATION.academicNotes.map((note) => (
                        <p key={note}>{note}</p>
                      ))}
                    </div>
                    <div className="text-left font-mono text-[11px] text-slate-400 sm:text-right">
                      <p>{EDUCATION.location}</p>
                      <p>{EDUCATION.graduation}</p>
                    </div>
                  </div>
                </ResumeSection>

                <ResumeSection title="Activities">
                  <ul className="space-y-2 pl-5">
                    {ACTIVITIES.map((activity) => (
                      <li
                        key={activity.id}
                        className="list-disc marker:text-accent-400"
                      >
                        <span className="font-semibold text-white">
                          {activity.title}
                          {activity.result.includes("Top")
                            ? ` (${activity.result})`
                            : ""}
                          :
                        </span>{" "}
                        {activity.fullDesc}
                      </li>
                    ))}
                  </ul>
                </ResumeSection>

                <ResumeSection title="Technical Skills">
                  <div className="space-y-1.5">
                    {SKILL_GROUPS.map((group) => (
                      <p key={group.label}>
                        <span className="font-semibold text-white">
                          {group.label}:
                        </span>{" "}
                        {group.items.join(", ")}
                      </p>
                    ))}
                  </div>
                </ResumeSection>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
