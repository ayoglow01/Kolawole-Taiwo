import { Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../../config/site";
import {
  activeSocialLinks,
  mailtoHref,
  telHref,
  whatsappHref,
} from "../../lib/links";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SocialIcon } from "../ui/SocialIcon";

/**
 * Contact — direct channels only. Every action rendered here is real:
 * mailto:, tel:, a confirmed WhatsApp number, configured social URLs or
 * an existing CV file. Anything unconfirmed stays hidden.
 */
export function Contact() {
  const { contact } = siteConfig;
  const socials = activeSocialLinks(contact.socialLinks);

  const channels = [
    ...(contact.email.isPublic
      ? [
          {
            id: "email",
            icon: Mail,
            label: "Email",
            value: contact.email.display,
            href: mailtoHref(contact.email.value),
          },
        ]
      : []),
    ...(contact.phone.isPublic
      ? [
          {
            id: "phone",
            icon: Phone,
            label: "Phone",
            value: contact.phone.display,
            href: telHref(contact.phone.value),
          },
        ]
      : []),
    ...(contact.altPhone.isPublic
      ? [
          {
            id: "alt-phone",
            icon: Phone,
            label: "Alternative phone",
            value: contact.altPhone.display,
            href: telHref(contact.altPhone.value),
          },
        ]
      : []),
    ...(contact.location.isPublic
      ? [
          {
            id: "location",
            icon: MapPin,
            label: "Location",
            value: contact.location.display,
            href: null,
          },
        ]
      : []),
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="on-dark relative overflow-hidden bg-navy"
    >
      <div aria-hidden="true" className="hairline-grid-dark pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl"
      />

      <Container className="relative py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              index="08"
              label="Contact"
              title="Let's Connect."
              tone="dark"
              headingId="contact-heading"
              description="For roles, analytics projects, training conversations or operational improvement work — the fastest way to reach me is a direct email or phone call."
            />
            <div className="flex flex-wrap items-center gap-3">
              {contact.whatsappNumber ? (
                <Button
                  href={whatsappHref(contact.whatsappNumber)}
                  external
                  variant="onDarkPrimary"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Message on WhatsApp
                </Button>
              ) : null}
              {contact.cvDownload ? (
                <Button
                  href={contact.cvDownload.path}
                  download={contact.cvDownload.fileName}
                  variant="onDarkOutline"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </Button>
              ) : null}
              {socials.length > 0 ? (
                <div className="flex gap-2.5">
                  {socials.map((social) => (
                    <a
                      key={social.key}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-fog transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/60 hover:text-white"
                    >
                      <SocialIcon name={social.key} />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-white/5 text-gold-soft"
                    >
                      <Icon className="h-[1.25rem] w-[1.25rem]" strokeWidth={1.8} />
                    </span>
                    <span className="mt-4 block text-xs font-semibold tracking-[0.18em] text-mist uppercase">
                      {channel.label}
                    </span>
                    <span className="mt-1 block font-display text-[0.9rem] leading-snug font-semibold tracking-tight break-words text-white">
                      {channel.value}
                    </span>
                  </>
                );

                return (
                  <li key={channel.id}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.08]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
