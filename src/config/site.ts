import type { SiteConfig } from "../types";

/**
 * SITE CONFIGURATION — the single place for site-level settings.
 *
 * To show/hide a contact detail, change its `isPublic` flag.
 * To publish a social profile, replace `null` with the real URL.
 * To enable the WhatsApp action, set `whatsappNumber` to a confirmed
 * WhatsApp-enabled number in international format (e.g. "+2347038600293").
 * To enable the CV download, place the file in `public/cv/` and set `cvDownload`.
 */
export const siteConfig: SiteConfig = {
  siteName: "Kolawole Taiwo Olawale",
  headerIdentity: {
    name: "Kolawole Taiwo Olawale",
    initials: "KTO",
  },
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ],
  seo: {
    title:
      "Kolawole Taiwo Olawale | Business Operations & Power BI Data Analyst",
    description:
      "Explore my professional experience, operations leadership, achievements and Power BI analytics expertise. I am Kolawole Taiwo Olawale, a business operations and performance professional based in Lagos, Nigeria.",
    // Set once a real domain is configured (also update index.html canonical tag).
    canonicalUrl: null,
  },
  contact: {
    email: {
      value: "kolawoletaiwo2002@yahoo.com",
      display: "kolawoletaiwo2002@yahoo.com",
      isPublic: true,
    },
    phone: {
      value: "+2347038600293",
      display: "+234 703 860 0293",
      isPublic: true,
    },
    altPhone: {
      value: "+2348057009208",
      display: "+234 805 700 9208",
      isPublic: true,
    },
    location: {
      value: "Lagos, Nigeria",
      display: "Lagos, Nigeria",
      isPublic: true,
    },
    socialLinks: {
      linkedin: null,
      twitter: null,
      instagram: null,
      facebook: null,
    },
    // No WhatsApp number has been confirmed yet — do not assume either phone
    // number is WhatsApp-enabled. Set only when verified.
    whatsappNumber: "+2347038600293",
    cvDownload: { path: "/cv/kolawole-taiwo-olawale.pdf", fileName: "Kolawole-Taiwo-Olawale-CV.pdf" }
  },
};
