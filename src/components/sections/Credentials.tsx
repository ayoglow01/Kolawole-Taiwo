import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { certifications, education } from "../../data/credentials";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Credentials() {
  const highlighted = certifications.filter((c) => c.isHighlighted);
  const others = certifications.filter((c) => !c.isHighlighted);

  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="bg-canvas py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="06"
            label="Credentials"
            title="Certifications & Education"
            headingId="credentials-heading"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Certifications */}
          <Reveal>
            <div>
              <h3 className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-navy">
                <Award className="h-[1.15rem] w-[1.15rem] text-gold" aria-hidden="true" />
                Certifications
              </h3>

              <div className="mt-5 space-y-4">
                {highlighted.map((cert) => (
                  <article
                    key={cert.id}
                    className="on-dark relative overflow-hidden rounded-2xl bg-navy px-7 py-7 shadow-card"
                  >
                    <div
                      aria-hidden="true"
                      className="hairline-grid-dark pointer-events-none absolute inset-0"
                    />
                    <div className="relative flex items-start gap-4">
                      <BadgeCheck
                        className="mt-0.5 h-8 w-8 shrink-0 text-gold"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs font-semibold tracking-[0.18em] text-mist uppercase">
                          {cert.issuer}
                        </p>
                        <p className="mt-1.5 font-display text-lg leading-snug font-bold tracking-tight text-white">
                          {cert.name}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-mist">
                          The credential behind my analytics practice —
                          validating my Power BI, DAX and data-modelling expertise.
                        </p>
                      </div>
                    </div>
                  </article>
                ))}

                <ul className="divide-y divide-line-soft overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                  {others.map((cert) => (
                    <li key={cert.id} className="px-6 py-4">
                      <p className="font-display text-sm font-semibold tracking-tight text-navy">
                        {cert.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">{cert.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delayMs={120}>
            <div className="lg:sticky lg:top-28">
              <h3 className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-navy">
                <GraduationCap className="h-[1.15rem] w-[1.15rem] text-teal" aria-hidden="true" />
                Education
              </h3>

              <ul className="mt-5 space-y-4">
                {education.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-2xl border border-line bg-surface px-6 py-5 shadow-card"
                  >
                    <p className="font-display text-[0.98rem] font-bold tracking-tight text-navy">
                      {item.qualification}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.institution}</p>
                    <p className="mt-3 inline-block rounded-md bg-canvas px-2.5 py-1 text-xs font-medium tracking-wide text-muted">
                      {item.period}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted">
                My accounting degree and business administration diploma ground
                the numbers; my Microsoft and analytics certifications power
                the reporting.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
