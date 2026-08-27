import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { PageHero } from "@/components/site/blocks";
import { company, services, socialLinks } from "@/data/site";

const title = "Contact CASEP GROUP — Start a Technology Project";
const description =
  "Talk to CASEP GROUP about software development, cloud solutions, business automation, digital transformation, or the school management system.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const serviceOptions = [
  ...services.map((service) => service.title),
  "School Management System",
  "Other",
];

const budgetOptions = [
  "Not yet defined",
  "Under GHS 20,000",
  "GHS 20,000 – GHS 60,000",
  "GHS 60,000 – GHS 150,000",
  "GHS 150,000+",
];

type Errors = {
  fullName?: string;
  email?: string;
  service?: string;
  message?: string;
};

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Errors = {};

    const name = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const service = String(form.get("service") ?? "");
    const message = String(form.get("message") ?? "").trim();

    if (name.length < 2) next.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!service) next.service = "Please select the service you need.";
    if (message.length < 20) next.message = "Please describe your project in at least 20 characters.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No email service is connected yet. The submission is validated and held
    // locally so this handler can be wired to an API, CRM, or database later.
    setStatus("loading");
    window.setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something That Matters."
        description="Tell us about your organization and what you are trying to improve. We will respond with clear next steps."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-9"
            >
              {status === "sent" ? (
                <div
                  role="status"
                  className="mb-6 rounded-xl border border-primary/30 bg-accent/60 p-5 text-sm"
                >
                  <p className="font-semibold">Inquiry captured.</p>
                  <p className="mt-1 text-muted-foreground">
                    No email service is connected to this form yet, so your details have not been
                    sent. Please reach us directly at {company.email} in the meantime.
                  </p>
                </div>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="fullName" label="Full Name" error={errors.fullName} required>
                  <Input id="fullName" name="fullName" autoComplete="name" required />
                </Field>
                <Field id="organization" label="Organization">
                  <Input id="organization" name="organization" autoComplete="organization" />
                </Field>
                <Field id="email" label="Email Address" error={errors.email} required>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </Field>
                <Field id="phone" label="Phone Number">
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                </Field>
                <Field id="service" label="Service Needed" error={errors.service} required>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="budget" label="Budget Range">
                  <select
                    id="budget"
                    name="budget"
                    defaultValue={budgetOptions[0]}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field id="message" label="Project Description" error={errors.message} required>
                  <Textarea id="message" name="message" rows={6} required />
                </Field>
              </div>

              {/* Honeypot field for basic spam protection */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company-website">Leave this field empty</label>
                <input id="company-website" name="companyWebsite" tabIndex={-1} autoComplete="off" />
              </div>

              <Button
                type="submit"
                variant="brand"
                size="xl"
                className="mt-7 w-full sm:w-auto"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Send Inquiry"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-border bg-surface p-7 shadow-soft md:p-9">
              <h2 className="text-xl font-bold">Contact information</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  {company.location}
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  {company.hours}
                </li>
              </ul>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Connect With Us
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="inline-flex rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  required?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {required ? <span className="ml-1 text-destructive">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
