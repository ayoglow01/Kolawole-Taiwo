/**
 * Shared content types.
 * All website content is described by these interfaces and stored in
 * `src/config` and `src/data` — components only present it.
 */

/** A single navigation entry pointing at a section id on the page. */
export interface NavItem {
  /** Element id of the target section (without `#`). */
  id: string;
  label: string;
}

/**
 * A contact detail that can be shown or hidden independently.
 * `isPublic: false` keeps the value in configuration but hides it from the site.
 */
export interface ContactChannel {
  /** Raw value used to build links (email address, international phone number). */
  value: string;
  /** Human-readable text shown on the page. */
  display: string;
  isPublic: boolean;
}

/**
 * Social profile links. `null` means "not confirmed yet" — the link is
 * hidden everywhere until a real URL is provided. Never use placeholders.
 */
export interface SocialLinks {
  linkedin: string | null;
  twitter: string | null;
  instagram: string | null;
  facebook: string | null;
}

export interface ContactConfig {
  email: ContactChannel;
  phone: ContactChannel;
  altPhone: ContactChannel;
  location: ContactChannel;
  socialLinks: SocialLinks;
  /**
   * A WhatsApp-enabled number in international format (e.g. "+2347012345678").
   * Must remain `null` until a WhatsApp number is confirmed — the WhatsApp
   * action is only rendered when this is set.
   */
  whatsappNumber: string | null;
  /**
   * Local path to the CV file (e.g. "/cv/kolawole-taiwo-olawale.pdf").
   * `null` until a real CV file exists in `public/cv/` — the download
   * action is hidden until then.
   */
  cvDownload: { path: string; fileName: string } | null;
}

export interface SiteConfig {
  siteName: string;
  /** Short identity used in the header (name or initials treatment). */
  headerIdentity: { name: string; initials: string };
  navigation: NavItem[];
  seo: {
    title: string;
    description: string;
    /** Set to the production URL once a domain exists (also add <link rel="canonical"> in index.html). */
    canonicalUrl: string | null;
  };
  contact: ContactConfig;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  location: string;
  hero: {
    label: string;
    headline: string;
    intro: string;
    credentialNote: string;
    image: { src: string; alt: string };
    primaryCta: { label: string; targetId: string };
    secondaryCta: { label: string; targetId: string };
  };
  about: {
    paragraphs: string[];
    currentRole: string;
    detailTags: string[];
  };
}

/** A verified impact figure. `context` keeps the figure attributed to its role. */
export interface Metric {
  value: string;
  label: string;
  context: string;
}

export type ExpertiseIconKey =
  | "operations"
  | "analytics"
  | "stakeholders"
  | "training";

export interface ExpertiseArea {
  id: string;
  icon: ExpertiseIconKey;
  title: string;
  description: string;
  capabilities: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  /** Omit when the CV lists no formal role title for the entry. */
  role?: string;
  period: string;
  /** Only include highlights that are verified in the CV. */
  highlights?: string[];
  /** Featured roles are always visible; the rest sit behind a disclosure. */
  isFeatured: boolean;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  technologies: string[];
  details: string[];
  image: {
    src: string;
    alt: string;
    /** Shown under the image when the asset is a placeholder, not the real thing. */
    caption: string | null;
  };
  /** `null` until a real project URL exists — the link is hidden until then. */
  projectUrl: string | null;
  isFeatured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  /** `null` until a verifiable credential URL is available. */
  credentialUrl: string | null;
  /** Highlighted credentials (e.g. PL-300) receive stronger visual treatment. */
  isHighlighted: boolean;
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  period: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
}
