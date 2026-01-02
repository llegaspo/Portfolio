import ProfileCard from "../components/profileCard";
import Chip from "../components/chip";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 bg-gray-900 -z-10" />
      <div className="flex flex-wrap w-full min-h-screen relative">
        {/* stick the card to the left-side of the screen*/}
        <div className=" w-full md:w-[35vw] shrink-0 ml-5 md:ml-20 border-2 border-white">
          {" "}
          {/* Fixed width for sidebar */}
          <div className="md:sticky top-12 mt-24 border-2 border-white">
            <ProfileCard />
          </div>
        </div>

        <div className="flex flex-col justify-center mt-24 md:w-1/2 pr-20">
          <div className="mb-6 bg-gray-900 text-violet-400 text-4xl font-extrabold font-['JetBrains_Mono']">
            // 01_ABOUT
          </div>

          <div className=" pl-5 bg-gray-900 top-12 indent-10 text-gray-50 text-justify text-xl">
            I am a Full-Stack Developer and Technical Lead with 3+ years of
            engineering experience. I don't just write code; I architect
            production-ready solutions that solve complex business problems.
          </div>
          <div className=" pl-5 mb-12 indent-10 text-gray-400 text-justify text-xl">
            I specialize in the React Ecosystem (Next.js, React Native) and
            robust Backend Infrastructure (tRPC, Zod, Vector DBs). From leading
            high-performance agile teams to shipping scalable freelance
            platforms, I focus on end-to-end type safety, clean architecture,
            and rapid deployment.
          </div>

          <div className="text-violet-400 mb-4 text-4xl font-extrabold font-['JetBrains_Mono']">
            // TECH_ARSENAL
          </div>
          <div className="w-full ml-8 mb-2 justify-start text-gray-50 text-2xl font-extrabold ">
            Languages
          </div>
          <div className="ml-8 flex flex-wrap mb-4 gap-4 justify-start-safe mb-2 pl-5">
            <Chip text="JavaScript/TypeScript" size={15} />
            <Chip text="React Native" size={15} />
            <Chip text="Native" size={15} />
            <Chip text="Python" size={15} />
            <Chip text="HTML" size={15} />
            <Chip text="CSS" size={15} />
            <Chip text="Flutter" size={15} />
            <Chip text="C/C++" size={15} />
            <Chip text="C#" size={15} />
          </div>

          <div className="ml-8 w-full mb-2 justify-start text-gray-50 text-2xl font-extrabold ">
            Frameworks and Libraries
          </div>
          <div className="flex gap-4 flex-wrap justify-start mb-2 pl-5 ml-8">
            <Chip text="React" size={15} />
            <Chip text="Next.js" size={15} />
            <Chip text="tRPC" size={15} />
            <Chip text="Zod" size={15} />
            <Chip text="Django" size={15} />
          </div>

          <div className="ml-8 w-full mb-2 justify-start text-gray-50 text-2xl font-extrabold ">
            Database and Infrastructure
          </div>
          <div className="flex ml-8 justify-start mb-6 flex-wrap gap-4 mb-2 pl-5">
            <Chip text="PostgreSQL" size={15} />
            <Chip text="Firebase" size={15} />
            <Chip text="MongoDB" size={15} />
            <Chip text="Git/GitHub" size={15} />
            <Chip text="Vector Database" size={15} />
            <Chip text="CI/CD" size={15} />
            <Chip text="Docker" size={15} />
          </div>
          <div className="w-96 left-[431px] top-[666px]  justify-start text-violet-400 text-4xl font-extrabold ">
            // EXPERIENCE
          </div>
          <div className="w-full text-gray-50 ml-8 text-3xl font-extrabold ">
            Software Engineering Lead ( Academic {"&"} Project-Based)
          </div>
          <div className="w-full ml-8 text-gray-400 text-base mb-2">
            2024 - Nov 2025
          </div>

          <div className=" pl-20 text-gray-400 text-justify text-xl">
            <ul className="list-disc list-outside">
              <li>
                Engineered full-stack features using the T3 Stack (TypeScript,
                React, tRPC), ensuring 100% type safety from database to UI.
              </li>
              <li>
                Managed complex PostgreSQL schemas and optimized CRUD operations
                via pgAdmin.
              </li>
              <li>
                Integrated AI-services into web workflows and standardized Git
                version control practices for the team.
              </li>
            </ul>
          </div>
          <div className="w-full text-gray-50 ml-8 text-3xl font-extrabold ">
            Web Development Intern @ Bayoah PH
          </div>
          <div className="w-full ml-8 text-gray-400 text-base mb-2">
            Sept 2024 – Nov 2024
          </div>

          <div className=" pl-20 text-gray-400 text-justify text-xl">
            <ul className="list-disc list-outside">
              <li>
                Engineered full-stack features using the T3 Stack (TypeScript,
                React, tRPC), ensuring 100% type safety from database to UI.
              </li>
              <li>
                Managed complex PostgreSQL schemas and optimized CRUD operations
                via pgAdmin.
              </li>
              <li>
                Integrated AI-services into web workflows and standardized Git
                version control practices for the team.
              </li>
            </ul>
          </div>
          <div className="w-full text-gray-50 ml-8 text-3xl font-extrabold ">
            Freelance Full-Stack Developer
          </div>
          <div className="w-full ml-8 text-gray-400 text-base mb-2">
            2021 – 2023
          </div>

          <div className=" pl-20 text-gray-400 text-justify text-xl">
            <ul className="list-disc list-outside">
              <li>
                Architected responsive web apps for small businesses using React{" "}
                {"&"} TypeScript.
              </li>
              <li>
                Built AI-ready backends capable of storing and querying Vector
                Embeddings.
              </li>
              <li>
                Implemented Zod schema validation to secure API inputs and
                utilized Firebase for real-time authentication.
              </li>
            </ul>
          </div>

          <div className="w-full mb-4 text-violet-400 text-4xl font-extrabold font-['JetBrains_Mono']">
            // PROJECTS
          </div>
          <div className="mb-4 flex justify-center">
            <div className="w-[554px] h-[510px] p-4 bg-gray-800 border-[3px] border-gray-700">
              <div className="w-full text-gray-50 font-bold text-2xl">
                School Announcement System
              </div>
              <div className="flex">
                <Chip text="React" />
                <Chip text="TypeScript" />
                <Chip text="Software Engineering" />
              </div>
            </div>
          </div>
          <div className="flex mb-4 justify-center">
            <div className="w-[554px] h-[510px] p-4 bg-gray-800 border-[3px] border-gray-700">
              <div className="w-full text-gray-50 font-bold text-2xl">
                School Announcement System
              </div>
              <div className="flex">
                <Chip text="React" />
                <Chip text="TypeScript" />
                <Chip text="Software Engineering" />
              </div>
            </div>
          </div>
          <div className="w-full mb-4 text-violet-400 text-4xl font-extrabold font-['JetBrains_Mono']">
            // COMPETITIONS_&_SPRINTS
          </div>
          <div className="ml-8 w-full h-14 justify-start">
            <span className="text-gray-50 text-2xl font-bold leading-6">
              Ceb-i Hacks 2025 (MCIA)
              <br />
            </span>
            <span className="text-emerald-500 text-base font-normal font-['JetBrains_Mono'] leading-6">
              Top 25 Finalist
            </span>
          </div>
          <div className="ml-8 mb-4 w-full h-16 text-justify text-gray-400 text-xl font-normal font-['Inter']">
            Built a "Gig Economy" web platform connecting informal workers to
            clients using full-stack web technologies
          </div>
          <div className="w-full h-12 mb-4 ml-8">
            <span className="text-gray-50 text-2xl font-bold font-['JetBrains_Mono'] leading-6">
              Philippine Startup Challenge X<br />
            </span>
            <span className="text-emerald-500 text-base font-normal font-['JetBrains_Mono'] leading-6">
              Top 25 Finalist
            </span>
          </div>
          <div className="w-full h-16  text-justify text-gray-400 text-xl font-normal font-inter ml-8 mb-4">
            Solved nearly all flags in network forensics and vulnerability
            assessment challenges as a first-time team.
          </div>
          <div className="w-full h-14 ml-8 mb-4 justify-start">
            <span className="text-gray-50 text-2xl font-bold font-['JetBrains_Mono'] leading-6">
              Trend Micro CTF
              <br />
            </span>
            <span className="text-emerald-500 text-base font-normal font-['JetBrains_Mono'] leading-6">
              Cybersecurity
            </span>
          </div>
          <div className="w-full h-16 text-justify text-gray-400 text-xl font-normal font-inter ml-8 mb-4">
            Led teams to build Flutter and React Native prototypes under 48-hour
            strict deadlines.
          </div>
          <div className="w-full h-14 ml-8 mb-4 justify-start">
            <span className="text-gray-50 text-2xl font-bold font-['JetBrains_Mono'] leading-6">
              Notion & IBPAP Hackathons
              <br />
            </span>
            <span className="text-emerald-500 text-base font-normal font-['JetBrains_Mono'] leading-6">
              Team Lead
            </span>
          </div>
          <div className="w-full ml-8 mb-4 h-16 text-justify text-gray-400 text-xl font-normal font-inter">
            Led teams to build Flutter and React Native prototypes under 48-hour
            strict deadlines.
          </div>
          <div className="w-full mb-4 text-violet-400 text-4xl font-extrabold ">
            // EDUCATION
          </div>
          <div className="w-full h-14">
            <span className="text-gray-50 ml-8 text-2xl font-bold leading-6">
              University of the Philippines Cebu
              <br />
            </span>
            <span className="text-gray-400 ml-8 text-base font-normal">
              B.S. Computer Science (2023 - Present)
            </span>
          </div>
          <div className="w-full h-16 text-justify text-gray-400 ml-8 text-xl font-normal font-inter">
            University Scholar: 1.36 GPA (approx 3.65/4.0) DOST-SEI Scholar:
            Scholarship for Science {"&"} Tech.
          </div>
        </div>
      </div>
    </>
  );
}
