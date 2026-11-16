import { BadgeCheck, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Hero() {
  const { hero, name, title, location } = profile;

  return (
    <section id="home" className="relative overflow-hidden bg-canvas" aria-labelledby="hero-heading">
      {/* Subtle editorial hairline motif */}
      <div aria-hidden="true" className="hairline-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-teal-tint opacity-60 blur-3xl"
      />

      <Container className="relative pb-16 pt-14 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:gap-16">
          {/* Text column */}
          <div>
            <p className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.22em] text-muted uppercase">
              <span aria-hidden="true" className="h-px w-10 bg-gold" />
              {hero.label}
            </p>

            <h1
              id="hero-heading"
              className="mt-5 font-display text-[2.1rem] leading-[1.12] font-extrabold tracking-tight text-navy text-balance sm:text-5xl lg:text-[3.4rem]"
            >
              {hero.headline}
            </h1>

            <p className="mt-4 font-display text-base font-semibold text-teal sm:text-lg">
              {name} — {title}
            </p>

            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">
              {hero.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={`#${hero.primaryCta.targetId}`} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={`#${hero.secondaryCta.targetId}`} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-[1.15rem] w-[1.15rem] text-gold" aria-hidden="true" />
                <span className="font-medium text-ink">{hero.credentialNote}</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal" aria-hidden="true" />
                {location}
              </span>
            </div>
          </div>

          {/* Portrait column */}
<div className="relative mx-auto w-full max-w-sm lg:max-w-none">
  {/* Offset navy panel — the site's framing signature */}
  <div
    aria-hidden="true"
    className="absolute -top-4 right-4 bottom-6 left-6 rounded-2xl border border-gold/30 bg-navy sm:right-6 sm:left-8"
  />

  <figure className="relative w-full">
    <img
      src={hero.image.src}
      alt={hero.image.alt}
      width={800}
      height={1000}
      fetchPriority="high"
      decoding="async"
      className="relative block aspect-[4/5] w-full rounded-2xl border border-line object-cover object-[50%_20%] shadow-frame"
    />
  </figure>
</div>
        </div>
      </Container>
    </section>
  );
}
