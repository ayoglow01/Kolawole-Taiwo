import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";
import { Container } from "../ui/Container";

/** All sections the scroll-spy watches (superset of the nav links). */
const SECTION_IDS = [
  "home",
  "about",
  "expertise",
  "experience",
  "work",
  "credentials",
  "leadership",
  "contact",
];

export function Header() {
  const { headerIdentity, navigation } = siteConfig;
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(8);
  const activeId = useActiveSection(SECTION_IDS);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // "Contact" is presented as the header CTA rather than a duplicate link.
  const links = navigation.filter((item) => item.id !== "contact");
  const contactNav = navigation.find((item) => item.id === "contact");

  // Escape closes the mobile menu and returns focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-canvas/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || menuOpen
          ? "border-line shadow-[0_4px_20px_-8px_rgba(20,38,61,0.12)]"
          : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          {/* Identity */}
          <a
            href="#home"
            className="group flex items-center gap-3 rounded-md"
            aria-label={`${headerIdentity.name} — back to top`}
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/50 bg-navy font-display text-xs font-bold tracking-widest text-gold-soft transition-colors group-hover:border-gold"
            >
              {headerIdentity.initials}
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate font-display text-sm font-bold tracking-tight text-navy">
                {headerIdentity.name}
              </span>
              <span className="block truncate text-[0.7rem] font-medium tracking-wide text-muted">
                Business Operations · Power BI Analytics
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {links.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-teal"
                      : "text-muted hover:text-navy"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px bg-teal transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
            {contactNav ? (
              <a
                href={`#${contactNav.id}`}
                className={`ml-3 inline-flex items-center rounded-lg px-4 py-2 font-display text-sm font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 ${
                  activeId === contactNav.id
                    ? "bg-teal text-white shadow-card"
                    : "bg-navy text-white shadow-card hover:bg-navy-soft"
                }`}
              >
                {contactNav.label}
              </a>
            ) : null}
          </nav>

          {/* Mobile menu toggle */}
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-navy transition-colors hover:border-navy/40 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      {menuOpen ? (
        <div id="mobile-menu" className="mobile-menu border-t border-line bg-surface lg:hidden">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col py-3">
              {navigation.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-lg px-3 py-3 text-[0.95rem] font-medium transition-colors ${
                      isActive
                        ? "bg-teal-tint text-teal"
                        : "text-ink hover:bg-canvas hover:text-teal"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
