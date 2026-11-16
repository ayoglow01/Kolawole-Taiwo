import { describe, expect, it } from "vitest";
import { siteConfig } from "../../config/site";
import { experience, earlierExperience, featuredExperience } from "../experience";
import { expertiseAreas } from "../expertise";
import { projects, featuredProject } from "../projects";
import { certifications, education } from "../credentials";
import { leadershipItems } from "../leadership";
import { impactMetrics, profile } from "../profile";

/**
 * Content-integrity tests. These guard the CV-derived facts and the
 * "no fabricated links" rules, so accidental data edits fail the build.
 */

describe("site configuration", () => {
  it("has unique navigation ids matching real page sections", () => {
    const sectionIds = [
      "home",
      "about",
      "expertise",
      "experience",
      "work",
      "credentials",
      "leadership",
      "contact",
    ];
    const ids = siteConfig.navigation.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(sectionIds).toContain(id);
    }
  });

  it("stores contact values in link-safe formats", () => {
    const { contact } = siteConfig;
    expect(contact.email.value).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(contact.phone.value).toMatch(/^\+\d+$/);
    expect(contact.altPhone.value).toMatch(/^\+\d+$/);
  });

  it("keeps unconfirmed integrations disabled", () => {
    // No WhatsApp number has been confirmed, and no CV file exists yet.
    expect(siteConfig.contact.whatsappNumber).toBeNull();
    expect(siteConfig.contact.cvDownload).toBeNull();
    // No social profile has been confirmed.
    expect(Object.values(siteConfig.contact.socialLinks).every((v) => v === null)).toBe(true);
    // No domain has been configured.
    expect(siteConfig.seo.canonicalUrl).toBeNull();
  });
});

describe("professional experience", () => {
  it("contains the complete CV record", () => {
    expect(experience).toHaveLength(11);
  });

  it("splits cleanly into featured and earlier roles with no overlap", () => {
    const featuredIds = featuredExperience.map((i) => i.id);
    const earlierIds = earlierExperience.map((i) => i.id);
    expect(featuredIds.length + earlierIds.length).toBe(experience.length);
    expect(featuredIds.some((id) => earlierIds.includes(id))).toBe(false);
    // Order is preserved: all featured entries come first in the source array.
    const firstEarlierIndex = experience.findIndex((i) => !i.isFeatured);
    const lastFeaturedIndex = experience.map((i) => i.isFeatured).lastIndexOf(true);
    expect(lastFeaturedIndex).toBeLessThan(firstEarlierIndex);
  });

  it("lists the current role first", () => {
    expect(experience[0].organization).toBe("GIIT Africa");
    expect(experience[0].role).toBe("Coordinating Manager");
    expect(experience[0].period).toBe("June 2025 – Present");
  });

  it("only attributes verified highlights to GIIT Africa and KTWealth", () => {
    const giit = experience.find((i) => i.id === "giit-africa");
    expect(giit?.highlights).toContain(
      "Recovered over 50% of outstanding student fees within three months",
    );
    const ktwealth = experience.find((i) => i.id === "ktwealth-business-hub");
    expect(ktwealth?.highlights).toContain("Served more than 50 customers");
  });
});

describe("impact metrics", () => {
  it("carries a context line so figures are never misattributed", () => {
    for (const metric of impactMetrics) {
      expect(metric.context.length).toBeGreaterThan(0);
    }
  });

  it("matches the verified CV figures", () => {
    expect(impactMetrics.map((m) => m.value)).toEqual(["15+", "50%+", "3", "50+"]);
  });
});

describe("expertise, projects and credentials", () => {
  it("presents exactly four expertise areas, each with capabilities", () => {
    expect(expertiseAreas).toHaveLength(4);
    for (const area of expertiseAreas) {
      expect(area.capabilities.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("features the Flight Performance Dashboard with no fabricated link", () => {
    expect(projects).toHaveLength(1);
    expect(featuredProject?.name).toBe("Flight Performance Dashboard");
    expect(featuredProject?.projectUrl).toBeNull();
    expect(featuredProject?.image.caption).toBeTruthy(); // labelled as illustrative
  });

  it("includes PL-300 as the single highlighted certification", () => {
    const highlighted = certifications.filter((c) => c.isHighlighted);
    expect(highlighted).toHaveLength(1);
    expect(highlighted[0].id).toBe("pl-300");
    expect(certifications).toHaveLength(5);
    expect(education).toHaveLength(2);
    // No invented verification links.
    expect(certifications.every((c) => c.credentialUrl === null)).toBe(true);
  });

  it("keeps voluntary leadership entries intact", () => {
    expect(leadershipItems).toHaveLength(4);
  });
});

describe("profile content", () => {
  it("uses the correct professional identity", () => {
    expect(profile.name).toBe("Kolawole Taiwo Olawale");
    expect(profile.title).toBe(
      "Business Operations & Performance Professional | Power BI Data Analyst",
    );
    expect(profile.location).toBe("Lagos, Nigeria");
  });

  it("points the hero image at a local placeholder asset", () => {
    expect(profile.hero.image.src).toBe("/images/profile_img.jpg");
    expect(profile.hero.image.alt.length).toBeGreaterThan(10);
  });
});
