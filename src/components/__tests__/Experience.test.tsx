import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Experience } from "../sections/Experience";
import { earlierExperience, featuredExperience } from "../../data/experience";

describe("<Experience /> disclosure behaviour", () => {
  it("shows every featured role immediately", () => {
    render(<Experience />);
    for (const item of featuredExperience) {
      expect(screen.getByText(item.organization)).toBeTruthy();
    }
  });

  it("renders the earlier-career disclosure with the correct role count", () => {
    render(<Experience />);
    const summary = screen.getByText("View earlier experience").closest("summary");
    expect(summary).toBeTruthy();
    expect(summary?.textContent).toContain(`${earlierExperience.length} roles`);
  });

  it("starts collapsed and opens on click (keyboard-operable <details>)", () => {
    render(<Experience />);
    const details = screen
      .getByText("View earlier experience")
      .closest("details") as HTMLDetailsElement;
    expect(details.open).toBe(false);

    fireEvent.click(screen.getByText("View earlier experience"));
    expect(details.open).toBe(true);

    // Earlier roles are part of the document data at all times.
    expect(screen.getByText("UBA PLC")).toBeTruthy();
  });

  it("gives the section an accessible heading", () => {
    render(<Experience />);
    const heading = screen.getByRole("heading", {
      name: "Professional Experience",
    });
    expect(heading.tagName).toBe("H2");
  });
});
