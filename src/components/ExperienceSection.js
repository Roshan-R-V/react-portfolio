import SectionHeading from "./ui/SectionHeading";

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="space-y-12">
      <SectionHeading
        eyebrow="Experience"
        title="Blending product engineering with platform thinking"
        description="From enterprise environments to postgraduate research, I focus on building reliable systems, enabling teams, and keeping delivery pipelines healthy."
      />
      <div className="space-y-8">
        {experience.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg shadow-slate-900/40"
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -top-12 right-10 h-32 w-32 rounded-full ${
                index % 2 === 0 ? "bg-cyan-400/20" : "bg-purple-500/20"
              } blur-3xl`}
            />
            <div className="relative space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.period}</span>
              </div>
              <p className="text-sm font-semibold text-cyan-200">{item.company}</p>
              <p className="text-sm leading-relaxed text-slate-300">{item.summary}</p>
              {item.highlights?.length ? (
                <ul className="space-y-2 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
