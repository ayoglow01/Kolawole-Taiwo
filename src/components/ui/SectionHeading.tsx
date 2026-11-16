interface SectionHeadingProps {
  /** Numerical label, e.g. "03" — part of the site's editorial signature. */
  index: string;
  /** Small uppercase eyebrow, e.g. "About". */
  label: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  /** Applied to the <h2> so the section can use aria-labelledby. */
  headingId?: string;
}

/**
 * Consistent section header: numbered editorial label, hairline,
 * eyebrow text, display heading and optional intro paragraph.
 */
export function SectionHeading({
  index,
  label,
  title,
  description,
  tone = "light",
  headingId,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <header className="mb-10 md:mb-14">
      <div className="flex items-center gap-3" aria-hidden="true">
        <span
          className={`font-display text-xs font-bold tracking-[0.25em] ${
            dark ? "text-gold-soft" : "text-teal"
          }`}
        >
          {index}
        </span>
        <span className={`h-px w-8 ${dark ? "bg-gold/50" : "bg-gold"}`} />
        <span
          className={`text-xs font-semibold tracking-[0.22em] uppercase ${
            dark ? "text-mist" : "text-muted"
          }`}
        >
          {label}
        </span>
      </div>
      <h2
        id={headingId}
        className={`mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            dark ? "text-mist" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
