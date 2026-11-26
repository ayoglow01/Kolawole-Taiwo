import { describe, expect, it } from "vitest";
import {
  activeSocialLinks,
  mailtoHref,
  telHref,
  whatsappHref,
} from "../links";
import type { SocialLinks } from "../../types";

describe("telHref", () => {
  it("strips spaces from display-format numbers", () => {
    expect(telHref("+234 703 860 0293")).toBe("tel:+2347038600293");
  });

  it("strips dashes and parentheses", () => {
    expect(telHref("+234 (805) 700-9208")).toBe("tel:+2348057009208");
  });

  it("keeps an already-clean number unchanged", () => {
    expect(telHref("+2348057009208")).toBe("tel:+2348057009208");
  });
});

describe("mailtoHref", () => {
  it("builds a plain mailto link", () => {
    expect(mailtoHref("kingkolawoleolawaletaiwo@gmail.com")).toBe(
      "mailto:kingkolawoleolawaletaiwo@gmail.com",
    );
  });

  it("URL-encodes an optional subject", () => {
    expect(mailtoHref("a@b.com", "Role enquiry & intro")).toBe(
      "mailto:a@b.com?subject=Role%20enquiry%20%26%20intro",
    );
  });
});

describe("whatsappHref", () => {
  it("builds a wa.me deep link from an international number", () => {
    expect(whatsappHref("+234 703 860 0293")).toBe("https://wa.me/2347038600293");
  });
});

describe("activeSocialLinks", () => {
  const emptySocials: SocialLinks = {
    linkedin: null,
    twitter: null,
    instagram: null,
    facebook: null,
  };

  it("returns nothing when all profiles are unconfirmed", () => {
    expect(activeSocialLinks(emptySocials)).toEqual([]);
  });

  it("returns only configured profiles, with labels and URLs", () => {
    const socials: SocialLinks = {
      ...emptySocials,
      linkedin: "https://www.linkedin.com/in/example",
    };
    expect(activeSocialLinks(socials)).toEqual([
      {
        key: "linkedin",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/example",
      },
    ]);
  });

  it("treats an empty string as unconfirmed", () => {
    expect(
      activeSocialLinks({ ...emptySocials, twitter: "" }),
    ).toEqual([]);
  });

  it("preserves a stable display order", () => {
    const all: SocialLinks = {
      facebook: "https://facebook.com/x",
      instagram: "https://instagram.com/x",
      linkedin: "https://linkedin.com/in/x",
      twitter: "https://x.com/y",
    };
    expect(activeSocialLinks(all).map((s) => s.key)).toEqual([
      "linkedin",
      "twitter",
      "instagram",
      "facebook",
    ]);
  });
});
