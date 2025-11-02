import SectionHeading from "./ui/SectionHeading";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="space-y-12">
      <SectionHeading
        eyebrow="Capabilities"
        title="Tooling that keeps teams shipping"
        description="I combine modern web frameworks with dependable DevOps practices, ensuring each release is observable, tested, and ready to scale."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 hover:border-cyan-400/60"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {group.items.map((item) => (
                <li key={`${group.title}-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
