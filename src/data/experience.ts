import type { ExperienceItem } from "../types";

/**
 * PROFESSIONAL EXPERIENCE — the complete CV-derived employment record,
 * most recent first. Roles with `isFeatured: true` are visible immediately;
 * the rest appear behind the accessible "View earlier experience" disclosure.
 * Nothing here should be removed — reorder or re-flag instead.
 */
export const experience: ExperienceItem[] = [
  {
    id: "giit-africa",
    organization: "GIIT Africa",
    role: "Coordinating Manager",
    period: "June 2025 – Present",
    isFeatured: true,
    highlights: [
      "Coordinate cross-departmental operations and administrative follow-up",
      "Recovered over 50% of outstanding student fees within three months",
      "Coordinated three graduation ceremonies",
      "Improved certificate-processing coordination",
      "Train students in Power BI, SQL and Excel",
    ],
  },
  {
    id: "ktwealth-business-hub",
    organization: "KTWealth Business Hub",
    role: "Founder / Managing Partner",
    period: "2020 – May 2025",
    isFeatured: true,
    highlights: [
      "Managed travel services and shoe sales operations",
      "Oversaw operations, customer relations and procurement",
      "Served more than 50 customers",
    ],
  },
  {
    id: "professional-development-travel",
    organization: "Professional Development & Online Travel Services",
    period: "2019 – 2020",
    isFeatured: true,
    highlights: [
      "Completed online professional training",
      "Provided online travel services to personal contacts",
    ],
  },
  {
    id: "binbit-nigeria",
    organization: "Binbit Nigeria Limited",
    role: "Administrator / Account Manager",
    period: "2014 – 2019",
    isFeatured: true,
    highlights: [
      "Managed administrative operations, customer service and value-added services (VAS) delivery.",
      "Maintained key stakeholder relationships.",
    ]
  },
  {
    id: "eureko-aviation-school",
    organization: "Eureko Aviation School",
    role: "Instructor",
    period: "2014",
    isFeatured: false,
    highlights: [
      "Delivered practical training in aviation ticketing and travel operations.",
    ]
  },
  {
    id: "5510-travel-tours",
    organization: "5510 Travel & Tours",
    role: "Founder / Business Development Executive",
    period: "2011 – 2013",
    isFeatured: false,
    highlights: [
      "Established and ran a registered travel agency, developing and implementing business growth initiatives.",
      "Provided passport and visa processing support as a side service through 5510 and informally.", 
      "Helped more than 10 individuals and 2 families procure international passports and travel visas.",
    ]
  },
  {
    id: "mtech-communication",
    organization: "MTech Communication PLC",
    role: "Account Officer",
    period: "2010 – 2011",
    isFeatured: false,
    highlights: [
      "Maintained accounting records and supported financial reporting.",
    ]
  },
  {
    id: "di-travels-tours",
    organization: "DI-Travels & Tours",
    role: "Office Manager",
    period: "2008 – 2010",
    isFeatured: false,
    highlights: [
     "Trained and worked in travel support services, managing office operations while gaining practical experience in travel documentation and client support.",
    ]
  },
  {
    id: "touchpoints-nigeria",
    organization: "Touchpoints Nigeria Ltd",
    role: "Accountant / Factory Manager",
    period: "2006 – 2008",
    isFeatured: false,
    highlights: [
      "Developed cash-flow and inventory-control systems and coordinated projects across accounting and factory operations.",
    ]
  },
  {
    id: "uacn-mr-biggs",
    organization: "UACN PLC (Mr Biggs)",
    role: "Franchise Account Officer",
    period: "2004 – 2006",
    isFeatured: false,
    highlights: [
      "Managed invoicing, reconciliations and franchise account support.",
    ]
  },
  {
    id: "uba-industrial-training",
    organization: "UBA PLC",
    role: "Industrial Training Staff",
    period: "2001",
    isFeatured: false,
    highlights: [
      "Supported funds-transfer operations and banking procedures.",
    ]
  },
];

/** Roles shown before the disclosure. */
export const featuredExperience = experience.filter((item) => item.isFeatured);

/** Roles revealed by "View earlier experience". */
export const earlierExperience = experience.filter((item) => !item.isFeatured);
