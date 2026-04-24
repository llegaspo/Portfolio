import ProfileCard from "../components/profileCard";
import Chip from "../components/ui/chip";
import { useState } from "react";
import Background from "../components/home/background";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceItem from "../components/home/experienceItem";
import ProjectCard from "../components/home/projectCard";
import Section from "../components/ui/section";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { EDUCATION, EXPERIENCES, PROJECTS, SKILLS } from "../data/portfolio";

const featuredProjects = PROJECTS.filter((project) =>
  [
    "isupply-seo",
    "scratch-hq",
    "get-nifty",
    "school-announcement-website",
  ].includes(project.id),
);

const highlights = [
  {
    id: "school-announcement-website",
    title: "School Announcement Website",
    result: "Coursework Project",
    shortDesc:
      "Built as a campus announcement platform with frontend work and backend contribution.",
    fullDesc:
      "I contributed to the frontend and part of the backend for a university announcement platform designed to make updates easier to publish and easier for students to find.",
    image: "/announcementWebsite.png",
    projectId: "school-announcement-website",
  },
  {
    id: "palengke",
    title: "IBPAP Hackathon (Can You HackIT?)",
    result: "Hackathon Build",
    shortDesc:
      "Helped build PALengke, a React Native app for small vendors, from Figma under time pressure.",
    fullDesc:
      "PALengke was built during the IBPAP Hackathon. I helped translate the team's Figma designs into working React Native screens for a small-vendor marketplace concept.",
    image: "/PALengke.png",
    projectId: "palengke",
  },
  {
    id: "panday",
    title: "Philippine Startup Challenge (PSC) X",
    result: "Top 25 Finalist",
    shortDesc:
      "Contributed to Panday, a platform connecting clients with informal service workers.",
    fullDesc:
      "Panday reached the Top 25 finalists in Central Visayas. I contributed to the product flow and overall platform experience for a web app connecting homeowners with informal workers.",
    image: "/panday.png",
    projectId: "panday",
  },
];

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen text-gray-200 selection:bg-violet-500/30">
      <Background />
      <div className="max-w-[1600px] mx-auto flex flex-col lg:justify-center lg:flex-row">
        <div className="lg:w-[40%] lg:pl-20 lg:h-screen lg:sticky lg:top-12 mt-18 white p-6 flex flex-col items-center lg:items-end lg:border-r border-gray-800/50 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div className="relative overflow-hidden bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-2 shadow-2xl">
                <ProfileCard />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-[65%] p-6 md:p-12 lg:p-20 pt-12 overflow-x-hidden">
          <Section title="// 01_ABOUT" delay={0.2}>
            <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl">
              I am a contract web developer focused on responsive frontend
              work, CMS customization, and practical website delivery. I build
              and improve sites that stay clean, usable, and reliable across
              desktop, tablet, and mobile.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              Recent work includes live client websites like
              isupplyseo.com.au, scratchhq.au, and getnifty.xyz, alongside
              coursework and competition projects built with React, TypeScript,
              React Native, WordPress, Firebase, and PostgreSQL.
            </p>
          </Section>

          <Section title="// TECH_ARSENAL" delay={0.2}>
            <div className="mb-8">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-violet-500 rounded-full" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "TypeScript"].map((tech) => (
                  <Chip key={tech} text={tech} size={14} />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" /> Frameworks
                & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React", "React Native", "Tailwind CSS", "WordPress", "Zod", "tRPC"].map(
                  (tech) => (
                    <Chip key={tech} text={tech} size={14} />
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                Database & Infra
              </h3>
              <div className="flex flex-wrap gap-3">
                {[...SKILLS.backend, "Git/GitHub", "API Integration", "Hygraph"].map(
                  (tech) => (
                    <Chip key={tech} text={tech} size={14} />
                  ),
                )}
              </div>
            </div>
          </Section>

          <Section title="// EXPERIENCE" delay={0.2}>
            {EXPERIENCES.map((experience) => (
              <ExperienceItem
                key={`${experience.role}-${experience.period}`}
                role={experience.role}
                company={experience.company}
                date={experience.period}
                items={experience.bullets}
              />
            ))}
          </Section>

          <Section title="// PROJECTS" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.summary}
                  image={project.image ?? "/announcementWebsite.png"}
                  tags={project.tags}
                />
              ))}
            </div>
          </Section>

          <Section title="// PROJECTS & COMPETITIONS" delay={0.2}>
            <div className="space-y-4 max-w-4xl">
              {highlights.map((comp) => {
                const isOpen = expandedId === comp.id;

                return (
                  <motion.div
                    key={comp.id}
                    initial={false}
                    className={`group border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "bg-white/5 border-violet-500/30"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <button
                      onClick={() => toggle(comp.id)}
                      className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer outline-none"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3
                            className={`text-xl font-bold transition-colors ${
                              isOpen
                                ? "text-violet-400"
                                : "text-gray-100 group-hover:text-violet-300"
                            }`}
                          >
                            {comp.title}
                          </h3>
                          <span
                            className={`text-xs font-mono px-2 py-1 rounded border ${
                              comp.result.includes("Top")
                                ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                                : "border-gray-700 text-gray-400"
                            }`}
                          >
                            {comp.result}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base font-light">
                          {comp.shortDesc}
                        </p>
                      </div>

                      <div
                        className={`text-gray-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-violet-500" : ""
                        }`}
                      >
                        <FaChevronDown />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-0 border-t border-white/5">
                            <div className="flex flex-col md:flex-row gap-6 mt-6">
                              <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden relative">
                                <img
                                  src={comp.image}
                                  alt={comp.title}
                                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay" />
                              </div>

                              <div className="flex-1">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                  {comp.fullDesc}
                                </p>

                                <Link
                                  to={`/project/${comp.projectId}`}
                                  className="inline-flex items-center gap-2 text-sm font-bold text-violet-400 hover:text-white transition-colors group/btn"
                                >
                                  <span>View Project Case Study</span>
                                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </Section>

          <Section title="// EDUCATION" delay={0.2}>
            <div className="bg-gray-900/30 p-6 rounded-xl border-l-4 border-violet-500">
              <h3 className="text-2xl font-bold text-gray-50">
                {EDUCATION.school}
              </h3>
              <p className="text-violet-400 font-mono mb-4">
                {EDUCATION.degree} ({EDUCATION.graduation})
              </p>
              <p className="text-gray-400 text-lg">
                {EDUCATION.academicNotes[0]}
                <br />
                {EDUCATION.academicNotes[1]}
                <br />
                {EDUCATION.academicNotes[3]}
              </p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
