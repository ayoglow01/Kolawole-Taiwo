import type { Certification, EducationItem } from "../types";

/**
 * CERTIFICATIONS & EDUCATION — exactly as recorded in the CV.
 * `credentialUrl` stays `null` until a genuine verification link exists;
 * no certification IDs or URLs are invented.
 */
export const certifications: Certification[] = [
  {
    id: "pl-300",
    name: "Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft Certified",
    credentialUrl: null,
    isHighlighted: true,
  },
  {
    id: "coursera-excel",
    name: "Introduction to Data Analysis Using Microsoft Excel",
    issuer: "Coursera — Project Certificate",
    credentialUrl: null,
    isHighlighted: false,
  },
  {
    id: "daystar-leadership",
    name: "Basic Leadership Certificate",
    issuer: "Daystar Leadership Academy",
    credentialUrl: null,
    isHighlighted: false,
  },
  {
    id: "wofbi-basic",
    name: "Basic Certificate Course",
    issuer: "Word of Faith Bible Institute",
    credentialUrl: null,
    isHighlighted: false,
  },
  {
    id: "wofbi-leadership",
    name: "Leadership Certificate Course",
    issuer: "Word of Faith Bible Institute",
    credentialUrl: null,
    isHighlighted: false,
  },
];

export const education: EducationItem[] = [
  {
    id: "lasu-bsc",
    qualification: "B.Sc. (Hons) Accounting",
    institution: "Lagos State University",
    period: "2001 – 2005",
  },
  {
    id: "fpo-nd",
    qualification: "National Diploma, Business Administration",
    institution: "Federal Polytechnic Offa",
    period: "1998 – 2000",
  },
];
