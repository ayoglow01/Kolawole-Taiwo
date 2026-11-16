import { Briefcase, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  const { about, name, title } = profile;

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-canvas py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            index="01"
            label="About"
            title="Experience you can verify, insight you can act on."
            headingId="about-heading"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <Reveal className="max-w-2xl">
            <div className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[1.02rem] leading-[1.8] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-gold pl-5 font-display text-lg font-semibold tracking-tight text-navy">
              “Driving business excellence through operational leadership and
              data-driven insights.”
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <aside
              aria-label="Professional snapshot"
              className="rounded-2xl border border-line bg-surface p-7 shadow-card"
            >
              <h3 className="font-display text-base font-bold tracking-tight text-navy">
                {name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{title}</p>

              <div className="mt-6 space-y-4 border-t border-line-soft pt-6 text-sm">
                <p className="flex items-start gap-3">
                  <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-ink">Current role</span>
                    <span className="mt-0.5 block text-muted">{about.currentRole}</span>
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-ink">Based in</span>
                    <span className="mt-0.5 block text-muted">Lagos, Nigeria</span>
                  </span>
                </p>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line-soft pt-6">
                {about.detailTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-navy"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
