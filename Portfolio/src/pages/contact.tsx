import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageHeader from "../components/layout/pageHeader";
import { PROFILE } from "../data/portfolio";

const FIELD_CLASS =
  "w-full rounded-md border border-white/12 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent-400";

const LABEL_CLASS = "mb-1.5 block text-xs lowercase text-slate-500";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
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
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <PageHeader />

      <main className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <h1 className="text-4xl font-bold lowercase text-white">contact</h1>

        <p className="mt-4 max-w-lg leading-relaxed text-slate-400">
          I&rsquo;m open to software engineering roles and contract work. Send a
          message here and I&rsquo;ll usually reply within a day.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSend}
          className="mt-10 max-w-lg space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="user_name" className={LABEL_CLASS}>
                name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                required
                className={FIELD_CLASS}
              />
            </div>

            <div>
              <label htmlFor="user_email" className={LABEL_CLASS}>
                email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                required
                className={FIELD_CLASS}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className={LABEL_CLASS}>
              subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              className={FIELD_CLASS}
            />
          </div>

          <div>
            <label htmlFor="message" className={LABEL_CLASS}>
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className={`${FIELD_CLASS} resize-none`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-md border border-white/12 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "sending…" : "send message"}
            </button>

            <p aria-live="polite" className="text-sm">
              {status === "success" && (
                <span className="text-emerald-400">
                  Sent — thanks, I&rsquo;ll get back to you.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  Didn&rsquo;t send. Email me directly below.
                </span>
              )}
            </p>
          </div>
        </form>

        <div className="mt-14 border-t border-white/8 pt-8">
          <p className="mb-4 text-xs lowercase text-slate-500">or directly</p>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-mono text-sm text-slate-300 transition-colors hover:text-accent-300"
              >
                {PROFILE.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs lowercase text-slate-600 transition-colors hover:text-slate-300"
              >
                {copied ? "copied" : "copy"}
              </button>
            </div>

            <a
              href={`tel:${PROFILE.phoneHref}`}
              className="w-fit font-mono text-sm text-slate-300 transition-colors hover:text-accent-300"
            >
              {PROFILE.phone}
            </a>

            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="w-fit font-mono text-sm text-slate-300 transition-colors hover:text-accent-300"
            >
              linkedin
            </a>

            <p className="mt-2 font-mono text-xs text-slate-600">
              {PROFILE.location}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
