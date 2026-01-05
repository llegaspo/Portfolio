import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaEnvelope,
  FaCopy,
  FaCheckCircle,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  // YOUR KEYS
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const MY_EMAIL = "jed.lordy123@gmail.com";

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
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-violet-500/30 font-inter p-6 lg:p-12 relative overflow-hidden flex flex-col items-center">
      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-800/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-800/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col">
        {/* --- BACK LINK (Consistent Style) --- */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-lg hover:bg-white/5 w-fit"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Return to Base
          </Link>
        </div>

        {/* --- MAIN GLASS CARD --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl"
        >
          {/* --- LEFT SIDE: THE FORM --- */}
          <div className="p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-transparent"></div>

            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 flex items-center gap-3">
              <FaPaperPlane className="text-violet-400 text-xl" /> Send a
              Message
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Have a project in mind or just want to say hello? Use the form
              below to send a signal directly to my inbox.
            </p>

            <form ref={formRef} onSubmit={handleSend} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-xs font-mono text-violet-300/80 uppercase mb-2 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500/50 focus:bg-violet-500/5 focus:ring-0 transition-all outline-none placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-violet-300/80 uppercase mb-2 ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500/50 focus:bg-violet-500/5 focus:ring-0 transition-all outline-none placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-violet-300/80 uppercase mb-2 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500/50 focus:bg-violet-500/5 focus:ring-0 transition-all outline-none placeholder:text-gray-600"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-violet-300/80 uppercase mb-2 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500/50 focus:bg-violet-500/5 focus:ring-0 transition-all outline-none resize-none placeholder:text-gray-600"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
              >
                {loading ? "Sending..." : "Transmit Message"}
              </button>

              {/* Status Feedback */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm text-center font-bold flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl"
                >
                  <FaCheckCircle /> Sent successfully!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center font-bold bg-red-500/10 border border-red-500/20 p-3 rounded-xl"
                >
                  Error sending. Please check console.
                </motion.div>
              )}
            </form>
          </div>

          {/* --- RIGHT SIDE: DIRECT CONTACT --- */}
          <div className="bg-[#0a0a0a]/40 p-8 md:p-12 flex flex-col justify-center border-l border-white/5 relative backdrop-blur-sm">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Prefer manual transmission?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                No problem. You can copy my address or open your default mail
                client directly.
              </p>
            </div>

            <div className="space-y-6">
              {/* OPTION 1: COPY TO CLIPBOARD */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-emerald-600 rounded-2xl opacity-30 blur group-hover:opacity-75 transition duration-500"></div>
                <button
                  onClick={handleCopyEmail}
                  className="relative w-full bg-[#0F0F0F] hover:bg-gray-900 p-5 rounded-xl flex items-center justify-between border border-white/10 group-hover:border-white/20 transition-all text-left"
                >
                  <div>
                    <p className="text-xs text-violet-400 font-mono uppercase tracking-wider mb-2">
                      My Email Address
                    </p>
                    <p className="text-white font-bold text-lg md:text-xl truncate pr-4">
                      {MY_EMAIL}
                    </p>
                  </div>
                  <div className="text-gray-500 group-hover:text-emerald-400 transition-colors">
                    {copied ? (
                      <FaCheckCircle className="text-xl" />
                    ) : (
                      <FaCopy className="text-xl" />
                    )}
                  </div>
                </button>
              </div>

              {/* OPTION 2: MAILTO LINK */}
              <a
                href={`mailto:${MY_EMAIL}`}
                className="block w-full text-center py-4 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 group"
              >
                <FaEnvelope /> Open in Mail App{" "}
                <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            <div className="mt-auto pt-10">
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <FaMapMarkerAlt className="text-violet-500" />
                <span>Based in Cebu City, Philippines</span>
              </div>
              <p className="text-gray-600 text-xs text-center mt-2 font-mono">
                Response time: ~24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
