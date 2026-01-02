import Chip from "./chip";

export default function ProfileCard() {
  return (
    <div className="pt-6 flex px-6 flex-col md:w-[30vw] md:h-[85vh] bg-gray-800 rounded-3xl items-center ">
      <div className="w-[80%] h-[50%] bg-zinc-600 rounded-3xl " />
      <div className="text-3xl mx-[5%] mt-[5%] text-gray-50 font-bold font-inter">
        Jed Lordy Legaspo
      </div>
      <div className="flex items-center mt-1 gap-4 text-gray-50 font-inter">
        {/* Item 1 */}
        <div className="flex items-center gap-2">
          <span className="text-violet-400 text-sm">&gt;</span>
          <span className="text-violet-400 text-sm">Full Stack Developer</span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-2">
          <span className="text-violet-400 text-sm">&gt;</span>
          <span className="text-violet-400 text-sm">Technical Lead</span>
        </div>
      </div>
      <div className="h-2" />

      <p className="text-gray-400 text-sm text-justify mx-2">
        {" "}
        Building type-safe, scalable web architectures and AI-integrated
        backends. DOST Scholar @ UP Cebu. 1.36 Running GPA.{" "}
      </p>
      <div className="h-2" />
      <div className="flex justify-evenly w-[calc(100%+2rem)]">
        <Chip text="TypeScript" />
        <Chip text="React" />
        <Chip text="C++" />
        <Chip text="PostgreSQL" />
        <Chip text="Firebase" />
      </div>

      <div className="h-2" />

      <div className="flex justify-evenly w-full flex-1">
        <a href="https://www.github.com/llegaspo" target="_blank">
          <img src="/github.png" alt="Github Link" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
