
import { useRef } from "react";
// Animation library
import {
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";

// Icon library
import {
  Calendar,
  ChevronDown,
} from "lucide-react";
import {
  earlierExperience,
  featuredExperience,
} from "../../data/experience";
import type { ExperienceItem } from "../../types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const JOURNEY_EASE = [0.22, 1, 0.36, 1] as const;

/** An individual milestone along the career journey. */
function JourneyEntry({
  item,
  index,
  compact = false,
  delayStep = 0.11,
}: {
  item: ExperienceItem;
  index: number;
  compact?: boolean;
  delayStep?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const delay = shouldReduceMotion ? 0 : index * delayStep;

  return (
    <motion.li
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, x: -24, y: 14, scale: 0.985 }
      }
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay,
        ease: JOURNEY_EASE,
      }}
      className="group relative z-10 pl-8 pb-9 last:pb-0 sm:pl-10"
    >
      {/* Journey milestone */}
      <motion.span
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.45,
          delay: delay + (shouldReduceMotion ? 0 : 0.12),
          ease: JOURNEY_EASE,
        }}
        className="absolute top-[0.45rem] left-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal bg-surface shadow-[0_0_0_4px_rgba(20,184,166,0.07)] transition-colors duration-300 group-hover:border-gold sm:h-[1.1rem] sm:w-[1.1rem]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform duration-300 group-hover:scale-125" />
      </motion.span>

      {/* Experience card */}
      <motion.article
        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`rounded-xl border border-line bg-surface shadow-card transition-[border-color,box-shadow] duration-300 hover:border-teal/30 hover:shadow-lift ${
          compact ? "px-5 py-4 sm:px-6" : "px-6 py-6 sm:px-7"
        }`}
      >
        {/* Organization and period */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h3 className="font-display text-[1.05rem] font-bold tracking-tight text-navy">
            {item.organization}
          </h3>

          <p className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted">
            <Calendar
              className="h-3.5 w-3.5 text-teal"
              aria-hidden="true"
            />
            <time>{item.period}</time>
          </p>
        </div>

        {/* Position */}
        {item.role ? (
          <p className="mt-1 text-sm font-semibold text-teal">
            {item.role}
          </p>
        ) : null}

        {/* Career highlights */}
        {item.highlights && item.highlights.length > 0 ? (
          <ul className="mt-4 space-y-2 border-t border-line-soft pt-4 text-sm leading-relaxed text-muted">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-gold"
                />
                <span className="text-ink">{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </motion.article>
    </motion.li>
  );
}

/** Scroll-responsive pathway connecting career milestones. */
function JourneyTimeline({
  items,
  compact = false,
  delayStep = 0.11,
}: {
  items: ExperienceItem[];
  compact?: boolean;
  delayStep?: number;
}) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 45%"],
  });

  return (
    <div ref={timelineRef} className="relative">
      {/* Static timeline track */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[0.44rem] z-0 w-px bg-line sm:left-[0.5rem]"
      />

      {/* Animated journey pathway */}
      <motion.span
        aria-hidden="true"
        style={{
          scaleY: shouldReduceMotion ? 1 : scrollYProgress,
        }}
        className="absolute top-2 bottom-2 left-[0.44rem] z-0 w-px origin-top bg-gradient-to-b from-teal via-gold to-teal sm:left-[0.5rem]"
      />

      {/* Journey milestones */}
      <ol className="relative">
        {items.map((item, index) => (
          <JourneyEntry
            key={item.id}
            item={item}
            index={index}
            compact={compact}
            delayStep={delayStep}
          />
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-canvas py-20 md:py-28"
    >
      <Container>
        {/* Section heading */}
        <Reveal>
          <SectionHeading
            index="04"
            label="Experience"
            title="Professional Experience"
            headingId="experience-heading"
            description="My fifteen years across corporate operations, entrepreneurship and analytics — I present my recent roles first, with my complete career record available below."
          />
        </Reveal>

        <div className="max-w-3xl">
          {/* Featured career journey */}
          <JourneyTimeline items={featuredExperience} />

          {/* Earlier career milestones */}
          {earlierExperience.length > 0 ? (
            <details className="group mt-5 rounded-xl border border-line bg-surface shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-6 py-4 transition-colors hover:bg-canvas [&::-webkit-details-marker]:hidden">
                <span className="font-display text-sm font-semibold tracking-tight text-navy">
                  View earlier experience
                  <span className="ml-2 rounded-md bg-canvas px-2 py-0.5 text-xs font-medium text-muted transition-colors group-open:bg-teal-tint group-open:text-teal">
                    {earlierExperience.length} roles · 2001 – 2019
                  </span>
                </span>

                <ChevronDown
                  className="h-4 w-4 shrink-0 text-teal transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              <div className="border-t border-line-soft px-6 pt-6 pb-2 sm:px-7">
                <JourneyTimeline
                  items={earlierExperience}
                  compact
                  delayStep={0.08}
                />
              </div>
            </details>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
