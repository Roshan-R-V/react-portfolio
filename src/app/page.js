import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import {
  navigation,
  profile,
  projects,
  skillHighlights,
  skills,
  socialLinks,
  stats,
} from "../data/siteContent";

export default function Home() {
  const primaryHeroCta = (
    <Link
      href="#skills"
      className="inline-flex items-center justify-center rounded-full bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
    >
      View skillset
    </Link>
  );

  const secondaryHeroCta = (
    <Link
      href="https://gitlab.com/roshan-vivek/petitions-platform"
      className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
    >
      See CI/CD pipeline
    </Link>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-20%] z-0 h-[520px] bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-10%] z-0 h-[400px] bg-gradient-to-t from-purple-500/12 via-transparent to-transparent"
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-20 pt-14 sm:px-12">
        <HeroSection
          profile={profile}
          navigation={navigation}
          stats={stats}
          skillHighlights={skillHighlights}
          primaryCta={primaryHeroCta}
          secondaryCta={secondaryHeroCta}
        />
        <main className="space-y-24">
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <ContactSection profile={profile} socialLinks={socialLinks} />
        </main>
        <footer className="mt-8 flex flex-col gap-3 pb-6 text-xs uppercase tracking-[0.2em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {profile.name} · {profile.headline}
          </p>
          <p className="text-slate-500">
            {new Date().getFullYear()} · Crafted with Next.js & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
