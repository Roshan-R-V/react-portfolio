import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="space-y-12">
      <SectionHeading
        eyebrow="Selected Work"
        title="Product builds with production-ready pipelines"
        description="A quick look at the software and infrastructure I've delivered end-to-end—from backend services and web interfaces to automated deployments."
        align="center"
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-400/20"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                {project.highlight ? (
                  <p className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    {project.highlight}
                  </p>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
              {project.outcome ? (
                <p className="text-sm font-semibold text-cyan-200/90">{project.outcome}</p>
              ) : null}
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                {project.stack.map((item) => (
                  <li key={`${project.title}-${item}`} className="rounded-full border border-white/10 px-3 py-1">
                    {item}
                  </li>
                ))}
              </ul>
              {project.link ? (
                <Link
                  href={project.link}
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  View repository →
                </Link>
              ) : (
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Internal case study
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
