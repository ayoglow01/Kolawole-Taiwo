import { impactMetrics } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/**
 * Professional impact — verified CV figures only. Each figure carries a
 * context line so metrics from different roles are never conflated.
 * Values are plain text (no animated counters required to read them).
 */
export function Impact() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="on-dark relative overflow-hidden bg-navy"
    >
      <div aria-hidden="true" className="hairline-grid-dark pointer-events-none absolute inset-0" />
      <Container className="relative py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-14">
          <div className="md:w-64 md:shrink-0">
            <h2
              id="impact-heading"
              className="font-display text-xl font-bold tracking-tight text-white"
            >
              Professional Impact
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              Verified figures drawn from different roles across my 15-year
              career in operations, entrepreneurship and analytics.
            </p>
          </div>

          <dl className="grid flex-1 grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <Reveal key={metric.label} delayMs={index * 80} className="bg-navy">
                <div className="flex h-full flex-col justify-between px-6 py-7">
                  <dt className="order-2">
                    <span className="block font-display text-sm font-semibold leading-snug text-white">
                      {metric.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-mist">
                      {metric.context}
                    </span>
                  </dt>
                  <dd className="order-1 mb-3 font-display text-4xl font-extrabold tracking-tight text-gold-soft">
                    {metric.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
