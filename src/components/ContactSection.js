import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";

export default function ContactSection({ profile, socialLinks }) {
  return (
    <section
      id="contact"
      className="overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-slate-900/20 p-8 shadow-xl shadow-cyan-500/30 sm:p-12"
    >
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Let's collaborate"
          title="Build your next release with confidence"
          description="Whether it's a greenfield platform, a pipeline overhaul, or a cloud-native migration, I can help architect, automate, and ship it."
        />
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 text-sm text-slate-100/80">
            <p className="font-semibold uppercase tracking-[0.25em] text-white">Reach out</p>
            <p>Email: {profile.email}</p>
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Start a project
            </Link>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Connect</p>
            <ul className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
