import { ArrowUpRight, Check } from "lucide-react";
import { featuredProject } from "../../data/projects";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/**
 * Selected Work — renders the featured project from `src/data/projects.ts`.
 * The "View project" action only appears when a real `projectUrl` is
 * configured; the preview caption is shown whenever a placeholder image
 * is in use.
 */
export function FeaturedProject() {
  if (!featuredProject) return null;
  const project = featuredProject;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-y border-line bg-surface py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="05"
            label="Selected Work"
            title="Featured Analytics Project"
            headingId="work-heading"
          />
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Project narrative */}
          <Reveal>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-navy">
                {project.name}
              </h3>

              <ul
                aria-label="Technologies used"
                className="mt-4 flex flex-wrap gap-2"
              >
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-teal/25 bg-teal-tint px-3 py-1 text-xs font-semibold tracking-wide text-teal"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
                {project.summary}
              </p>

              <h4 className="mt-8 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                Key implementation details
              </h4>
              <ul className="mt-4 space-y-3">
                {project.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-navy"
                    >
                      <Check className="h-3 w-3 text-gold-soft" strokeWidth={3} />
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>

              {project.projectUrl ? (
                <div className="mt-9">
                  <Button href={project.projectUrl} external variant="teal" size="lg">
                    View project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              ) : null}
            </div>
          </Reveal>

          {/* Dashboard preview */}
          <Reveal delayMs={120}>
            <figure>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -right-3 bottom-5 left-5 rounded-2xl border border-gold/40 bg-navy"
                />
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={760}
                  loading="lazy"
                  decoding="async"
                  className="relative w-full rounded-xl border border-line bg-canvas object-cover shadow-frame"
                />
              </div>
              {project.image.caption ? (
                <figcaption className="mt-4 text-center text-xs leading-relaxed text-muted italic">
                  {project.image.caption}
                </figcaption>
              ) : null}
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
