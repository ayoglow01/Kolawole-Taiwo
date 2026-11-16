
import {
  ChartColumn,
  BriefcaseBusiness,
  Calculator,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type SkillIconKey = "analytics" | "productivity" | "accounting";

type SkillGroup = {
  id: string;
  icon: SkillIconKey;
  title: string;
  description: string;
  skills: string[];
};

/** Technical skills organized by professional category. */
const skillGroups: SkillGroup[] = [
  {
    id: "data-analytics",
    icon: "analytics",
    title: "Data & Analytics",
    description:
      "Working with data to generate insights, build reports, and support informed business decisions.",
    skills: [
      "Power BI",
      "PL-300",
      "DAX",
      "Import & DirectQuery",
      "PostgreSQL / SQL",
      "Microsoft Excel",
      "Data Management",
      "Reporting",
    ],
  },
  {
    id: "office-productivity",
    icon: "productivity",
    title: "Office & Productivity",
    description:
      "Using essential office applications for professional documentation, presentations, and communication.",
    skills: [
      "Microsoft Word",
      "PowerPoint",
      "Outlook",
    ],
  },
  {
    id: "accounting-software",
    icon: "accounting",
    title: "Accounting Software",
    description:
      "Using accounting applications to support financial record-keeping and business operations.",
    skills: [
      "Sage Pastel",
    ],
  },
];

/** Consistent Lucide icon mapping. */
const ICONS: Record<SkillIconKey, LucideIcon> = {
  analytics: ChartColumn,
  productivity: BriefcaseBusiness,
  accounting: Calculator,
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-line bg-surface py-20 md:py-28"
    >
      <Container>
        {/* Section introduction */}
        <Reveal>
          <SectionHeading
            index="03"
            label="Technical Skills"
            title="Tools & Technologies"
            headingId="skills-heading"
            description="A practical combination of analytical tools, office applications, and accounting software used to manage data, streamline workflows, and support business operations."
          />
        </Reveal>

        {/* Skill categories */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = ICONS[group.icon];

            return (
              <Reveal
                key={group.id}
                delayMs={index * 90}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-canvas p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:bg-surface hover:shadow-lift">
                  {/* Category icon */}
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal/20 bg-teal-tint text-teal transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-soft"
                  >
                    <Icon
                      className="h-[1.4rem] w-[1.4rem]"
                      strokeWidth={1.8}
                    />
                  </span>

                  {/* Category title */}
                  <h3 className="mt-5 font-display text-[1.05rem] leading-snug font-bold tracking-tight text-navy">
                    {group.title}
                  </h3>

                  {/* Category description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {group.description}
                  </p>

                  {/* Individual skills */}
                  <ul className="mt-5 space-y-2.5 border-t border-line-soft pt-5 text-sm">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2.5 text-ink"
                      >
                        <Check
                          className="mt-[3px] h-3.5 w-3.5 shrink-0 text-gold"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span>{skill}</span>
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
