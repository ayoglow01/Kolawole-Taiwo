import type { ExpertiseArea } from "../types";

/**
 * AREAS OF EXPERTISE — capabilities, not service packages or pricing.
 * Icons are referenced by key; the mapping to actual icon components
 * lives in `src/components/sections/Expertise.tsx`.
 */
export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "operations-administration",
    icon: "operations",
    title: "Business Operations & Administration",
    description:
      "I keep organizations running smoothly — coordinating people, processes and follow-through across departments.",
    capabilities: [
      "Operations coordination",
      "Administrative leadership",
      "Cross-departmental communication",
      "Process improvement",
      "Operational follow-up",
    ],
  },
  {
    id: "data-analytics-reporting",
    icon: "analytics",
    title: "Data Analytics & Reporting",
    description:
      "I turn operational and financial data into clear business performance reporting with the Microsoft analytics stack.",
    capabilities: [
      "Microsoft Power BI",
      "DAX",
      "Data modelling",
      "PostgreSQL / SQL",
      "Excel",
      "Business performance dashboards",
    ],
  },
  {
    id: "business-development-stakeholders",
    icon: "stakeholders",
    title: "Business Development & Stakeholder Relations",
    description:
      "I build and maintain the customer and stakeholder relationships that sustain revenue and service delivery.",
    capabilities: [
      "Customer relations",
      "Stakeholder communication",
      "Business development experience",
      "Revenue follow-up",
      "Service delivery coordination",
    ],
  },
  {
    id: "training-leadership",
    icon: "training",
    title: "Training, Team Leadership & Facilitation",
    description:
      "I teach practical analytics skills and coordinate teams and events with a mentoring-first approach.",
    capabilities: [
      "Training in Power BI, SQL and Excel",
      "Team coordination",
      "Professional instruction",
      "Event coordination",
      "Leadership and mentoring",
    ],
  },
];
