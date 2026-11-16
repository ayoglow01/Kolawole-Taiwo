import type { ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "teal"
  | "outline"
  | "onDarkPrimary"
  | "onDarkOutline";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-display font-semibold tracking-tight transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[0.95rem]",
} as const;

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white shadow-card hover:bg-navy-soft hover:shadow-lift hover:-translate-y-0.5",
  teal: "bg-teal text-white shadow-card hover:bg-teal-hover hover:-translate-y-0.5",
  outline:
    "border border-navy/25 text-navy hover:border-navy/60 hover:bg-navy/[0.04] hover:-translate-y-0.5",
  onDarkPrimary:
    "bg-white text-navy shadow-card hover:bg-fog hover:-translate-y-0.5",
  onDarkOutline:
    "border border-white/35 text-white hover:bg-white/10 hover:-translate-y-0.5",
};

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof SIZES;
  className?: string;
  /** Render as a link when provided. */
  href?: string;
  /** Open in a new tab with safe rel attributes (use with href). */
  external?: boolean;
  /** Trigger a file download (use with href). */
  download?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

/**
 * One button style used across the site. Renders an accessible
 * <a> when `href` is given, otherwise a real <button>.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  external = false,
  download,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        download={download}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
