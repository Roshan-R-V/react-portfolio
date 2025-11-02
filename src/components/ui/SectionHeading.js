export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`space-y-4 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="text-3xl font-semibold text-white sm:text-4xl leading-tight">{title}</h2>
      ) : null}
      {description ? (
        <p className="text-base leading-relaxed text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
