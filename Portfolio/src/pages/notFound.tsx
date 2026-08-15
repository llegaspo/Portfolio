import { Link } from "react-router-dom";
import Typewriter from "../components/ui/typewriter";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-center px-6">
      <h1 className="text-display font-bold lowercase text-white">404</h1>

      <div className="mt-4 flex items-baseline font-mono text-lg text-slate-400">
        <span className="mr-2 select-none text-accent-500">&gt;</span>
        <Typewriter
          phrases={["route not found", "check the url", "or head back home"]}
        />
      </div>

      <Link
        to="/"
        className="mt-10 w-fit rounded-md border border-white/12 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
      >
        Back home
      </Link>
    </main>
  );
}
