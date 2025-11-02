import Link from "next/link";
import ExperienceSection from "../../components/ExperienceSection";
import {
  experience,
  profile,
  socialLinks,
} from "../../data/siteContent";

export const metadata = {
  title: "Experience · Roshan Vivek",
  description:
    "Professional experience and education highlights for Roshan Vivek, software developer focused on full-stack and DevOps engineering.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 pb-16 pt-12 sm:px-10">
        <header className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300/80">
            The journey
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Experience & Education
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300">
            A closer look at the roles and initiatives where I combined software development,
            DevOps automation, and collaborative delivery to keep teams shipping with confidence.
          </p>
        </header>
        <ExperienceSection experience={experience} />
        <footer className="mt-auto rounded-3xl border border-white/15 bg-white/[0.05] p-6 text-sm text-slate-300">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">{profile.fullName}</p>
              <p>{profile.headline}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
