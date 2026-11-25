import type { Project } from "../types";

/**
 * PROJECTS — structured as an array so more projects can be added later
 * without touching the component. The featured project is rendered in the
 * "Selected Work" section.
 *
 * `projectUrl` stays `null` until a real, working link exists — the
 * "View project" action is hidden until then. Never use a placeholder URL.
 * Replace `image.src` with a real screenshot when available and remove
 * the caption (set it to `null`).
 */
export const projects: Project[] = [
  {
    id: "flight-performance-dashboard",
    name: "Flight Performance Dashboard",
    summary:
      "A Power BI dashboard I designed to support operational performance monitoring of flight activity — analysing passenger volumes, punctuality and status trends across airports and time periods.",
    technologies: ["Power BI", "DAX", "Data Modelling"],
    details: [
      "I built a star-schema data model around a central flight fact table",
      "I structured airport, date, passenger, pilot and flight-status dimension tables",
      "I wrote DAX measures that power passenger and performance analysis",
      "I report on-time, delayed and cancelled flight activity",
      "I analyse monthly flight-status trends",
      "I visualize flight activity by airport location",
    ],
    image: {
      src: "/images/project-dashboard.jpg",
      alt: "A flight performance dashboard layout with status cards, charts and an airport analysis panel.",
      caption:
        "A Power BI dashboard I built to monitor flight activity, track performance, and uncover operational insights.",
    },
    projectUrl: null,
    isFeatured: true,
  },
];

/** The project rendered in the featured "Selected Work" section. */
export const featuredProject = projects.find((p) => p.isFeatured) ?? null;
