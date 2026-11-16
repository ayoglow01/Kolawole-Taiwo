import { HeartHandshake } from "lucide-react";
import { leadershipIntro, leadershipItems } from "../../data/leadership";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/**
 * Leadership & Voluntary Service — deliberately compact and clearly
 * separated from paid professional employment.
 */
export function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="border-t border-line bg-surface py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="07"
            label="Voluntary Service"
            title="Leadership & Community Service"
            headingId="leadership-heading"
            description={leadershipIntro}
          />
        </Reveal>

        <Reveal delayMs={80}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {leadershipItems.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-4 rounded-xl border border-line bg-canvas px-6 py-5 transition-colors duration-300 hover:border-navy/20 hover:bg-surface"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gold-tint text-gold"
                >
                  <HeartHandshake className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-display text-sm font-bold tracking-tight text-navy">
                    {item.role}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">
                    {item.organization}
                  </p>
                  <p className="mt-2 text-xs font-medium tracking-wide text-teal">
                    {item.period}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={140}>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            Voluntary positions I hold within my church community — distinct
            from the professional employment recorded above.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
