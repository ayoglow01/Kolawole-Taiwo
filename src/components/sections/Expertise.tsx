import {
  Briefcase,
  ChartColumn,
  Handshake,
  Presentation,
  Check,
  type LucideIcon,
} from "lucide-react";
import { expertiseAreas } from "../../data/expertise";
import type { ExpertiseIconKey } from "../../types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/** One consistent icon library (lucide-react), mapped by data key. */
const ICONS: Record<ExpertiseIconKey, LucideIcon> = {
  operations: Briefcase,
  analytics: ChartColumn,
  stakeholders: Handshake,
  training: Presentation,
};

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="border-y border-line bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            index="02"
            label="Expertise"
            title="Areas of Expertise"
            headingId="expertise-heading"
            description="Four capability areas I have built over fifteen years of operations work and formal analytics training — what I actually do, day to day."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {expertiseAreas.map((area, index) => {
            const Icon = ICONS[area.icon];
            return (
              <Reveal key={area.id} delayMs={index * 90} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-canvas p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:bg-surface hover:shadow-lift">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal/20 bg-teal-tint text-teal transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-soft"
                  >
                    <Icon className="h-[1.4rem] w-[1.4rem]" strokeWidth={1.8} />
                  </span>

                  <h3 className="mt-5 font-display text-[1.05rem] leading-snug font-bold tracking-tight text-navy">
                    {area.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-line-soft pt-5 text-sm">
                    {area.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2.5 text-ink">
                        <Check
                          className="mt-[3px] h-3.5 w-3.5 shrink-0 text-gold"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
