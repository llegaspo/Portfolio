import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCopy,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { PROFILE } from "../data/portfolio";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const MY_EMAIL = PROFILE.email;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#07111f] p-6 text-slate-200 selection:bg-cyan-300/25 lg:p-12">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-amber-300/10 blur-[128px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col">
        <div className="mb-8">
          <Link
            to="/"
            className="group inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Return Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid w-full grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl md:grid-cols-2"
        >
          <div className="relative p-8 md:p-12">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-300 to-transparent" />

            <h2 className="mb-2 flex items-center gap-3 text-3xl font-semibold text-white">
              <FaPaperPlane className="text-xl text-cyan-200" /> Send a Message
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-slate-400">
              If you need a contract web developer for responsive fixes, site
              builds, UI cleanup, or CMS customization, send the brief here.
            </p>

            <form ref={formRef} onSubmit={handleSend} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="mb-2 ml-1 block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0a0f18]/60 p-4 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-cyan-300/5 focus:ring-0"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-2 ml-1 block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0a0f18]/60 p-4 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-cyan-300/5 focus:ring-0"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 ml-1 block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0a0f18]/60 p-4 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-cyan-300/5 focus:ring-0"
                  placeholder="Project brief"
                />
              </div>

              <div>
                <label className="mb-2 ml-1 block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0f18]/60 p-4 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-cyan-300/5 focus:ring-0"
                  placeholder="Tell me what needs to be built, fixed, or improved."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 py-4 font-semibold text-slate-950 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Transmit Message"}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-center text-sm font-bold text-emerald-400"
                >
                  <FaCheckCircle /> Sent successfully!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-center text-sm font-bold text-red-400"
                >
                  Error sending. Please check console.
                </motion.div>
              )}
            </form>
          </div>

          <div className="relative flex flex-col justify-center border-l border-white/5 bg-[#0a0f18]/50 p-8 backdrop-blur-sm md:p-12">
            <div className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Prefer manual transmission?
              </h2>
              <p className="leading-relaxed text-slate-400">
                You can also reach out directly if that is faster for your
                workflow.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-amber-300 opacity-30 blur transition duration-500 group-hover:opacity-75" />
                <button
                  onClick={handleCopyEmail}
                  className="relative flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0F1723] p-5 text-left transition-all hover:bg-slate-900 group-hover:border-white/20"
                >
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
                      My Email Address
                    </p>
                    <p className="truncate pr-4 text-lg font-semibold text-white md:text-xl">
                      {MY_EMAIL}
                    </p>
                  </div>
                  <div className="text-slate-500 transition-colors group-hover:text-emerald-300">
                    {copied ? (
                      <FaCheckCircle className="text-xl" />
                    ) : (
                      <FaCopy className="text-xl" />
                    )}
                  </div>
                </button>
              </div>

              <a
                href={`mailto:${MY_EMAIL}`}
                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-4 text-center text-slate-300 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FaEnvelope /> Open in Mail App{" "}
                <FaArrowRight className="text-xs opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            </div>

            <div className="mt-auto pt-10">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <FaMapMarkerAlt className="text-cyan-200" />
                <span>{PROFILE.location}</span>
              </div>
              <p className="mt-2 text-center text-xs text-slate-600">
                Response time: ~24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
