import ProfileCard from "../components/profileCard";
import Chip from "../components/ui/chip";
import Background from "../components/home/background";
import { motion } from "framer-motion";
import ExperienceItem from "../components/home/experienceItem";
import ProjectCard from "../components/home/projectCard";
import Section from "../components/ui/section";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-200 selection:bg-violet-500/30">
      <Background />
      {/* <div className="flex flex-wrap w-full min-h-screen relative"> */}
      <div className="max-w-[1600px] mx-auto flex flex-col lg:justify-center lg:flex-row">
        {/* stick the card to the left-side of the screen*/}
        {/* <div className=" w-full md:w-[35vw] shrink-0 ml-5 md:ml-20 border-2 border-white"> */}
        <div className="lg:w-[40%] lg:pl-20 lg:h-screen lg:sticky lg:top-12 mt-18 white p-6 flex flex-col items-center lg:items-end lg:border-r border-gray-800/50 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-20"></div>{" "}
              {/* Fixed width for sidebar */}
              {/* <div className="md:sticky top-12 mt-24 border-2 border-white"> */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-2 shadow-2xl">
                <ProfileCard />
              </div>
            </div>
          </motion.div>
        </div>

        {/* <div className="flex flex-col justify-center mt-24 md:w-1/2 pr-20"> */}
        <div className="lg:w-[65%] p-6 md:p-12 lg:p-20 pt-12 overflow-x-hidden">
          {/* <div className="mb-6 bg-gray-900 text-violet-400 text-4xl font-extrabold font-['JetBrains_Mono']"> */}
          {/*   // 01_ABOUT */}
          {/* </div> */}
          <Section title="// 01_ABOUT" delay={0.2}>
            {/* <div className=" pl-5 bg-gray-900 top-12 indent-10 text-gray-50 text-justify text-xl"> */}
            <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl">
              I am a Full-Stack Developer and Technical Lead with 3+ years of
              engineering experience. I don't just write code; I architect
              production-ready solutions that solve complex business problems.
            </p>
            {/* <div className=" pl-5 mb-12 indent-10 text-gray-400 text-justify text-xl"> */}
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              I specialize in the React Ecosystem (Next.js, React Native) and
              robust Backend Infrastructure (tRPC, Zod, Vector DBs). From
              leading high-performance agile teams to shipping scalable
              freelance platforms, I focus on end-to-end type safety, clean
              architecture, and rapid deployment.
            </p>
          </Section>

          {/* <div className="text-violet-400 mb-4 text-4xl font-extrabold font-['JetBrains_Mono']"> */}
          {/*   // TECH_ARSENAL */}
          {/* </div> */}
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
                id="automated-drone"
                description="This is a project heehehehehehhe"
                image="/github.png"
                title="School Announcement System"
                tags={["React", "TypeScript", "PostgreSQL"]}
              />
              <ProjectCard
                id="portfolio-v1"
                description="This is a project heehehehehehhe"
                image="/github.png"
                title="Freelance Platform"
                tags={["Next.js", "Tailwind", "Stripe"]}
              />
            </div>
          </Section>

          {/* <div className="w-full mb-4 text-violet-400 text-4xl font-extrabold font-['JetBrains_Mono']"> */}
          {/*   // COMPETITIONS_&_SPRINTS */}
          {/* </div> */}
          {/* <div className="ml-8 w-full h-14 justify-start"> */}
          {/*   <span className="text-gray-50 text-2xl font-bold leading-6"> */}
          {/*     Ceb-i Hacks 2025 (MCIA) */}
          {/*     <br /> */}
          {/*   </span> */}
          {/*   <span className="text-emerald-500 text-base font-normal font-['JetBrains_Mono'] leading-6"> */}
          {/*     Top 25 Finalist */}
          {/*   </span> */}
          {/* </div> */}
          {/* <div className="ml-8 mb-4 w-full h-16 text-justify text-gray-400 text-xl font-normal font-['Inter']"> */}
          {/*   Built a "Gig Economy" web platform connecting informal workers to */}
          {/*   clients using full-stack web technologies */}
          {/* </div> */}

          <Section title="// COMPETITIONS" delay={0.2}>
            <div className="space-y-8 max-w-3xl">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
                    Ceb-i Hacks 2025
                  </h3>
                  <span className="text-emerald-500 font-mono text-sm border border-emerald-500/30 px-2 py-1 rounded">
                    Top 25 Finalist
                  </span>
                </div>
                <p className="text-gray-400 text-lg">
                  Built a "Gig Economy" web platform connecting informal workers
                  to clients using full-stack web technologies.
                </p>
              </div>

              <div className="h-px bg-gray-800 w-full" />

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
                    Philippine Startup Challenge X
                  </h3>
                  <span className="text-emerald-500 font-mono text-sm border border-emerald-500/30 px-2 py-1 rounded">
                    Top 25 Finalist
                  </span>
                </div>
                <p className="text-gray-400 text-lg">
                  Solved nearly all flags in network forensics and vulnerability
                  assessment challenges.
                </p>
              </div>
            </div>
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
