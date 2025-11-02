import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  profile,
  navigation,
  stats,
  skillHighlights,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-lg shadow-slate-900/40 backdrop-blur-xl sm:p-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-10 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-16 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl opacity-80"
      />
      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="space-y-8 lg:flex-1">
          <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-cyan-200/80">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] transition hover:border-cyan-300/60 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
              {profile.availability}
            </span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
              {profile.summary}
            </p>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              {profile.location}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {skillHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {primaryCta}
            {secondaryCta}
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-cyan-400/40"
              >
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</dt>
                <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative hidden h-[340px] w-full flex-1 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent lg:block">
          <Image
            src="/background.webp"
            alt="Abstract developer workspace illustration"
            fill
            priority
            className="object-cover opacity-70 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm font-semibold text-white">{profile.fullName}</p>
            <p className="text-xs text-slate-200">{profile.headline}</p>
            <p className="text-xs text-slate-300">Focused on cloud-native delivery & high-trust releases.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
