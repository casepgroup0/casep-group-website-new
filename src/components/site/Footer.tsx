import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, services, socialLinks } from "@/data/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";
import footerBg from "@/assets/bg-workspace-3.jpg";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
] as const;

export function Footer() {
  return (
    <footer
      className="bg-photo-navy text-navy-foreground"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="relative z-10 container-page grid gap-8 py-12 sm:gap-10 sm:py-14 md:grid-cols-3 md:gap-10 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-2 lg:items-center lg:text-center">
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-extrabold tracking-tight">CASEP GROUP</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90 lg:text-center">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 lg:text-center">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90 lg:text-center">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 lg:text-center">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-cyan"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-navy-foreground/90">
            Connect With Us
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90 lg:text-center">
                Contact
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70 lg:text-center">
                <li className="flex items-center gap-2 lg:justify-center">
                  <Mail className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all transition-colors hover:text-cyan"
                  >
                    {company.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 lg:justify-center">
                  <Phone className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-cyan"
                  >
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2 lg:justify-center">
                  <MapPin className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  {company.location}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90 lg:text-center">
                Socials
              </h4>
              <ul className="mt-4 grid w-fit grid-cols-3 gap-2 lg:mx-auto">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:border-cyan hover:text-cyan"
                    >
                      <SocialIcon name={social.icon} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container-page pb-3 text-center sm:pb-4 sm:text-left lg:hidden">
        <p className="text-xs text-navy-foreground/60 sm:text-sm">{company.tagline}</p>
      </div>

      <div className="relative z-10 border-t border-navy-foreground/10">
        <div className="container-page flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-1 py-6 text-xs text-navy-foreground/60">
          <p>© 2026 CASEP GROUP. All Rights Reserved.</p>
          <p className="hidden lg:block">{company.tagline}</p>
          <p className="text-navy-foreground/40">Designed &amp; developed by CASEP GROUP</p>
        </div>
      </div>
    </footer>
  );
}
