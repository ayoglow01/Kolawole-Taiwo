import type { SocialLinks } from "../types";

/**
 * Small, testable helpers for building contact and social links.
 * Keeping them here means link formatting is defined once and
 * can be verified by unit tests.
 */

/** Build a `tel:` URL from a phone number in any display format. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** Build a `mailto:` URL, optionally with a subject line. */
export function mailtoHref(email: string, subject?: string): string {
  const base = `mailto:${email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

/** Build a WhatsApp deep link from a confirmed WhatsApp number. */
export function whatsappHref(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

export type SocialKey = keyof SocialLinks;

export interface ActiveSocial {
  key: SocialKey;
  label: string;
  url: string;
}

const SOCIAL_LABELS: Record<SocialKey, string> = {
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  instagram: "Instagram",
  facebook: "Facebook",
};

/**
 * Return only the social profiles that have a real, configured URL.
 * Unconfirmed profiles (`null`) never reach the UI.
 */
export function activeSocialLinks(links: SocialLinks): ActiveSocial[] {
  return (Object.keys(SOCIAL_LABELS) as SocialKey[])
    .filter((key) => links[key] !== null && links[key] !== "")
    .map((key) => ({
      key,
      label: SOCIAL_LABELS[key],
      url: links[key] as string,
    }));
}
