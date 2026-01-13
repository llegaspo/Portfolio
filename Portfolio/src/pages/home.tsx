import ProfileCard from "../components/profileCard";
import Chip from "../components/ui/chip";
import { useState, useEffect } from "react";
import Background from "../components/home/background";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceItem from "../components/home/experienceItem";
import ProjectCard from "../components/home/projectCard";
import Section from "../components/ui/section";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CompetitionItem {
  _id: string;
  title: string;
  result: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  projectId: string;
}

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const [competitions, setCompetitions] = useState<CompetitionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await fetch("/api/competitions/");
        console.log("competition res", response);
        const data = await response.json();
        if (Array.isArray(data)) {
          setCompetitions(data);
        }
      } catch (error) {
        console.error("Failed to fetch competitions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, []);

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
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-20"></div>{" "}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-2 shadow-2xl">
                <ProfileCard />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-[65%] p-6 md:p-12 lg:p-20 pt-12 overflow-x-hidden">
          <Section title="// 01_ABOUT" delay={0.2}>
            <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl">
              I am a Full-Stack Developer and Technical Lead with 3+ years of
              engineering experience. I don't just write code; I architect
              production-ready solutions that solve complex business problems.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              I specialize in the React Ecosystem (Next.js, React Native) and
              robust Backend Infrastructure (tRPC, Zod, Vector DBs). From
              leading high-performance agile teams to shipping scalable
              freelance platforms, I focus on end-to-end type safety, clean
              architecture, and rapid deployment.
            </p>
          </Section>

          <Section title="// TECH_ARSENAL" delay={0.2}>
            <div className="mb-8">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-violet-500 rounded-full" />
                {/* <div className="w-full ml-8 mb-2 justify-start text-gray-50 text-2xl font-extrabold "> */}
                Languages
              </h3>
              {/* <div className="ml-8 flex flex-wrap mb-4 gap-4 justify-start-safe mb-2 pl-5"> */}
              {/*   <Chip text="JavaScript/TypeScript" size={15} /> */}
              {/*   <Chip text="React Native" size={15} /> */}
              {/*   <Chip text="Native" size={15} /> */}
              {/*   <Chip text="Python" size={15} /> */}
              {/*   <Chip text="HTML" size={15} /> */}
              {/*   <Chip text="CSS" size={15} /> */}
              {/*   <Chip text="Flutter" size={15} /> */}
              {/*   <Chip text="C/C++" size={15} /> */}
              {/*   <Chip text="C#" size={15} /> */}
              {/* </div> */}
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React Native",
                  "Python",
                  "HTML",
                  "CSS",
                  "Flutter",
                  "C++",
                  "C#",
                ].map((tech) => (
                  <Chip key={tech} text={tech} size={14} />
                ))}
              </div>
            </div>

            {/* <div className="ml-8 w-full mb-2 justify-start text-gray-50 text-2xl font-extrabold "> */}
            {/*   Frameworks and Libraries */}
            {/* </div> */}
            <div className="mb-8">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" /> Frameworks
                & Libraries
              </h3>
              {/* <div className="flex gap-4 flex-wrap justify-start mb-2 pl-5 ml-8"> */}
              {/*   <Chip text="React" size={15} /> */}
              {/*   <Chip text="Next.js" size={15} /> */}
              {/*   <Chip text="tRPC" size={15} /> */}
              {/*   <Chip text="Zod" size={15} /> */}
              {/*   <Chip text="Django" size={15} /> */}
              {/* </div> */}
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "tRPC", "Zod", "Django", "Tailwind"].map(
                  (tech) => (
                    <Chip key={tech} text={tech} size={14} />
                  ),
                )}
              </div>
            </div>

            {/* <div className="ml-8 w-full mb-2 justify-start text-gray-50 text-2xl font-extrabold "> */}
            {/*   Database and Infrastructure */}
            {/* </div> */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />{" "}
                Database & Infra
              </h3>
              {/* <div className="flex ml-8 justify-start mb-6 flex-wrap gap-4 mb-2 pl-5"> */}
              {/*   <Chip text="PostgreSQL" size={15} /> */}
              {/*   <Chip text="Firebase" size={15} /> */}
              {/*   <Chip text="MongoDB" size={15} /> */}
              {/*   <Chip text="Git/GitHub" size={15} /> */}
              {/*   <Chip text="Vector Database" size={15} /> */}
              {/*   <Chip text="CI/CD" size={15} /> */}
              {/*   <Chip text="Docker" size={15} /> */}
              {/* </div> */}
              <div className="flex flex-wrap gap-3">
                {[
                  "PostgreSQL",
                  "Firebase",
                  "MongoDB",
                  "Git",
                  "Vector DB",
                  "Docker",
                  "CI/CD",
                ].map((tech) => (
                  <Chip key={tech} text={tech} size={14} />
                ))}
              </div>
            </div>
          </Section>

          {/* <div className="w-96 left-[431px] top-[666px]  justify-start text-violet-400 text-4xl font-extrabold "> */}
          {/*   // EXPERIENCE */}
          {/* </div> */}
          {/* <div className="w-full text-gray-50 ml-8 text-3xl font-extrabold "> */}
          {/*   Software Engineering Lead ( Academic {"&"} Project-Based) */}
          {/* </div> */}
          {/* <div className="w-full ml-8 text-gray-400 text-base mb-2"> */}
          {/*   2024 - Nov 2025 */}
          {/* </div> */}
          {/**/}
          {/* <div className=" pl-20 text-gray-400 text-justify text-xl"> */}
          {/*   <ul className="list-disc list-outside"> */}
          {/*     <li> */}
          {/*       Engineered full-stack features using the T3 Stack (TypeScript, */}
          {/*       React, tRPC), ensuring 100% type safety from database to UI. */}
          {/*     </li> */}
          {/*     <li> */}
          {/*       Managed complex PostgreSQL schemas and optimized CRUD operations */}
          {/*       via pgAdmin. */}
          {/*     </li> */}
          {/*     <li> */}
          {/*       Integrated AI-services into web workflows and standardized Git */}
          {/*       version control practices for the team. */}
          {/*     </li> */}
          {/*   </ul> */}
          {/* </div> */}

          <Section title="// EXPERIENCE" delay={0.2}>
            <ExperienceItem
              role="Software Engineering Lead"
              company="Academic & Project-Based"
              date="2024 - Nov 2025"
              items={[
                "Engineered full-stack features using the T3 Stack (TypeScript, React, tRPC), ensuring 100% type safety.",
                "Managed complex PostgreSQL schemas and optimized CRUD operations.",
                "Integrated AI-services into web workflows and standardized Git practices.",
              ]}
            />
            <ExperienceItem
              role="Web Development Intern"
              company="Bayoah PH"
              date="Sept 2024 – Nov 2024"
              items={[
                "Contributed to scalable React components.",
                "Optimized database queries for 20% faster load times.",
                "Collaborated with senior devs on architectural decisions.",
              ]}
            />
            <ExperienceItem
              role="Freelance Full-Stack Developer"
              date="2021 – 2023"
              items={[
                "Architected responsive web apps for small businesses using React & TypeScript.",
                "Built AI-ready backends capable of storing Vector Embeddings.",
                "Implemented Zod schema validation and Firebase Auth.",
              ]}
            />
          </Section>

          {/* <div className="w-full mb-4 text-violet-400 text-4xl font-extrabold font-['JetBrains_Mono']"> */}
          {/*   // PROJECTS */}
          {/* </div> */}
          {/* <div className="mb-4 flex justify-center"> */}
          {/*   <div className="w-[554px] h-[510px] p-4 bg-gray-800 border-[3px] border-gray-700"> */}
          {/*     <div className="w-full text-gray-50 font-bold text-2xl"> */}
          {/*       School Announcement System */}
          {/*     </div> */}
          {/*     <div className="flex"> */}
          {/*       <Chip text="React" /> */}
          {/*       <Chip text="TypeScript" /> */}
          {/*       <Chip text="Software Engineering" /> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}

          <Section title="// PROJECTS" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <ProjectCard
                id="school-announcements"
                title="School Announcement System"
                description="Web app for containing all announcements in University of the Philippines Cebu built with Nextjs."
                image="/announcementWebsite.png"
                tags={["Nextjs", "React", "TypeScript"]}
              />

              <ProjectCard
                id="eduroad"
                title="EduRoad"
                description="Mobile app built with Flutter integrating AI features."
                image="/eduroad.png"
                tags={["Flutter", "AI", "Android Studio"]}
              />

              <ProjectCard
                id="palengke"
                title="PALengke"
                description="React Native web app built during IBPAP Hackathon."
                image="/PALengke.png"
                tags={["React Native", "Web", "Hackathon"]}
              />

              <ProjectCard
                id="panday"
                title="Panday"
                description="Web app connecting clients with service workers."
                image="/panday.png"
                tags={["React", "Startup", "Web App"]}
              />
            </div>
          </Section>

          <Section title="// COMPETITIONS & HACKATHONS" delay={0.2}>
            {loading ? (
              <div className="text-gray-500 animate-pulse">
                Loading competitions...
              </div>
            ) : (
              <div className="space-y-4 max-w-4xl">
                {competitions.map((comp) => {
                  const isOpen = expandedId === comp._id;

                  return (
                    <motion.div
                      key={comp._id}
                      initial={false}
                      className={`group border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "bg-white/5 border-violet-500/30"
                          : "hover:bg-white/[0.02]"
                      }`}
                    >
                      <button
                        onClick={() => toggle(comp._id)}
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
                            {/* Conditional Badge Coloring */}
                            <span
                              className={`text-xs font-mono px-2 py-1 rounded border ${
                                comp.result.includes("Top") ||
                                comp.result.includes("Winner")
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
            )}
          </Section>

          <Section title="// EDUCATION" delay={0.2}>
            <div className="bg-gray-900/30 p-6 rounded-xl border-l-4 border-violet-500">
              <h3 className="text-2xl font-bold text-gray-50">
                University of the Philippines Cebu
              </h3>
              <p className="text-violet-400 font-mono mb-4">
                B.S. Computer Science (2023 - Present)
              </p>
              <p className="text-gray-400 text-lg">
                University Scholar:{" "}
                <span className="text-white font-bold">1.36 GPA</span> (approx
                3.65/4.0)
                <br />
                DOST-SEI Scholar: Scholarship for Science & Tech.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
