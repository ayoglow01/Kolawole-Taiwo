import { siteConfig } from "../../config/site";
import { activeSocialLinks } from "../../lib/links";
import { Container } from "../ui/Container";
import { SocialIcon } from "../ui/SocialIcon";

export function Footer() {
  const { headerIdentity, navigation, contact } = siteConfig;
  const socials = activeSocialLinks(contact.socialLinks);
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark border-t border-white/10 bg-navy-deep text-fog">
      <Container className="py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 bg-navy font-display text-[0.65rem] font-bold tracking-widest text-gold-soft"
              >
                {headerIdentity.initials}
              </span>
              <span className="font-display text-sm font-bold text-white">
                {headerIdentity.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Business Operations &amp; Performance Professional · Power BI Data
              Analyst · Lagos, Nigeria
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-mist transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {socials.length > 0 ? (
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-mist transition-colors hover:border-gold/60 hover:text-white"
                >
                  <SocialIcon name={social.key} />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Kolawole Taiwo Olawale. All rights reserved.</p>
          <p>Driving business excellence through operational leadership and data-driven insights.</p>
        </div>
      </Container>
    </footer>
  );
}
