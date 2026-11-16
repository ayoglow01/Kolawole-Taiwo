import type { Metric, Profile } from "../types";

/**
 * PROFILE CONTENT — hero, about and impact figures.
 * Replace the hero image by changing `hero.image.src` to a new file
 * in `public/images/` (see README).
 */
export const profile: Profile = {
  name: "Kolawole Taiwo Olawale",
  initials: "KTO",
  title:
    "Business Operations & Performance Professional | Power BI Data Analyst",
  location: "Lagos, Nigeria",
  hero: {
    label: "Business Operations & Data Analytics",
    headline:
      "Driving Business Excellence Through Operational Leadership and Data‑Driven Insights.",
    intro:
      "I am a business operations and performance professional with over 15 years of experience coordinating operations, leading administration and building customer relationships — experience I now combine with practical data analytics expertise in Power BI, SQL and Excel.",
    credentialNote: "Microsoft Certified Power BI Data Analyst (PL-300)",
    image: {
      src: "/images/profile_img.jpg",
      alt: "My professional headshot.",
    },
    primaryCta: { label: "Get in Touch", targetId: "contact" },
    secondaryCta: { label: "Explore My Experience", targetId: "experience" },
  },
  about: {
    paragraphs: [
      "I have spent more than fifteen years in business operations and administration — spanning accounting administration, office management, customer and stakeholder relations, and founding and running my own ventures in travel services and retail. Today I serve as Coordinating Manager at GIIT Africa, where I coordinate cross-departmental operations, drive follow-up on outstanding student fees, coordinate graduation ceremonies and train students in Power BI, SQL and Excel.",
      "Alongside this operational career, I have built practical data analytics capability, earning the Microsoft Certified: Power BI Data Analyst Associate (PL-300) credential with expertise in Power BI, DAX, SQL, PostgreSQL and Excel. This combination is my defining professional strength: I read performance data with a working knowledge of the organizations, processes and stakeholders behind the numbers — and I turn it into business performance reporting that supports real decisions.",
    ],
    currentRole: "Coordinating Manager, GIIT Africa",
    detailTags: [
      "Lagos, Nigeria",
      "Business Operations",
      "Performance Reporting",
      "Data Analytics",
    ],
  },
};

/**
 * IMPACT METRICS — verified CV figures only. Each figure carries its own
 * `context` so it is never attributed to the wrong role or organization.
 */
export const impactMetrics: Metric[] = [
  {
    value: "15+",
    label: "Years of professional experience",
    context: "Operations, administration & analytics",
  },
  {
    value: "50%+",
    label: "Outstanding student fees I recovered",
    context: "Within three months at GIIT Africa",
  },
  {
    value: "3",
    label: "Graduation ceremonies I coordinated",
    context: "At GIIT Africa",
  },
  {
    value: "50+",
    label: "Customers I served",
    context: "Through my KTWealth Business Hub",
  },
];
