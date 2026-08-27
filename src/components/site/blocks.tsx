import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { Icon } from "./Icon";
import {
  capabilityStats,
  caseStudies,
  industries,
  insights,
  processSteps,
  services,
  solutions,
  technologies,
  testimonials,
  whyCasep,
} from "@/data/site";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-cyan/20 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div className="container-page relative py-14 sm:py-16 md:py-20 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-cyan">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-foreground/75 sm:mt-5 sm:text-base md:text-lg">
            {description}
          </p>
          {children ? <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesGrid({ tone = "default" }: { tone?: "default" | "surface" }) {
  return (
    <Section tone={tone} id="services" decorated>
      <SectionHeading
        eyebrow="Services"
        title="Technology Solutions Designed for Real-World Impact."
        description="From first idea to long-term support, we deliver the technical work that moves organizations forward."
      />
      <div className="mt-8 grid grid-cols-6 gap-1.5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 60} as="article">
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group flex aspect-square flex-col items-center justify-center rounded-lg border border-border bg-card/75 p-1 text-center shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:aspect-auto sm:h-full sm:items-start sm:justify-start sm:rounded-2xl sm:p-6 sm:text-left lg:p-7"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground sm:h-12 sm:w-12 sm:rounded-xl">
                <Icon name={service.icon} className="h-3.5 w-3.5 sm:h-6 sm:w-6" />
              </span>
              <h3 className="mt-1 text-center text-[5px] font-bold uppercase leading-[1.15] tracking-tight sm:mt-5 sm:text-xl sm:font-bold sm:normal-case sm:leading-tight sm:tracking-normal">
                {service.title}
              </h3>
              <p className="mt-3 hidden flex-1 text-sm leading-relaxed text-muted-foreground sm:block">
                {service.short}
              </p>
              <span className="mt-6 hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function SolutionsGrid({ tone = "default" }: { tone?: "default" | "surface" }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? solutions[activeIndex] : null;

  return (
    <Section tone={tone} id="solutions" decorated>
      <SectionHeading
        eyebrow="Solutions"
        title="Solutions That Solve Business Problems."
        description="We organize our work around the operational problems organizations face, not around technology labels."
      />
      <div className="mt-8 grid grid-cols-5 gap-1.5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
        {solutions.map((solution, i) => {
          const isActive = activeIndex === i;
          return (
            <Reveal key={solution.title} delay={i * 60} as="article">
              <button
                type="button"
                onClick={() => setActiveIndex(isActive ? null : i)}
                aria-expanded={isActive}
                aria-label={solution.title}
                className={cn(
                  "flex aspect-square w-full flex-col items-center justify-center rounded-lg border p-1 text-center shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:aspect-auto sm:h-full sm:items-start sm:justify-start sm:rounded-2xl sm:p-6 sm:text-left lg:p-7",
                  isActive ? "border-primary bg-accent/60" : "border-border bg-card/75",
                )}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-brand text-primary-foreground sm:h-11 sm:w-11 sm:rounded-lg">
                  <Icon name={solution.icon} className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </span>
                <h3 className="mt-1 text-center text-[5px] font-bold uppercase leading-[1.15] tracking-tight sm:mt-5 sm:text-lg sm:font-bold sm:normal-case sm:leading-tight sm:tracking-normal">
                  {solution.title}
                </h3>
                <p className="mt-3 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                  {solution.description}
                </p>
              </button>
            </Reveal>
          );
        })}
        <Reveal delay={solutions.length * 60} className="col-span-5 sm:col-span-1">
          <Link
            to="/contact"
            search={{ type: "inquiry" }}
            className="flex h-[60px] w-full items-center justify-between gap-2 rounded-lg border border-primary/30 bg-accent/60 px-3 sm:hidden"
          >
            <span className="text-[11px] font-semibold leading-tight text-foreground">
              Not sure where to start?
            </span>
            <span className="inline-flex max-w-[130px] shrink-0 items-center justify-center rounded-xl bg-gradient-brand px-2.5 py-1.5 text-center text-[8px] font-bold uppercase leading-tight tracking-wide text-primary-foreground">
              Discuss Your Requirements With Us
            </span>
          </Link>
          <div className="hidden h-full flex-col justify-center rounded-2xl border border-primary/25 bg-accent/50 p-5 backdrop-blur-xl sm:flex sm:p-6 lg:p-7">
            <h3 className="text-lg font-bold">Not sure where to start?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us what is slowing your organization down and we will map the options.
            </p>
            <Button asChild variant="brand" size="lg" className="mt-6 self-start">
              <Link to="/contact" search={{ type: "inquiry" }}>
                Discuss Your Requirements
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Mobile-only expanded detail panel for the tapped solution */}
      {active ? (
        <div className="mt-4 rounded-2xl border border-primary/30 bg-card/90 p-5 shadow-soft backdrop-blur-xl sm:hidden">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
              <Icon name={active.icon} className="h-5 w-5" />
            </span>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close details"
              className="text-sm text-muted-foreground"
            >
              ✕
            </button>
          </div>
          <h3 className="mt-3 text-base font-bold">{active.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{active.description}</p>
        </div>
      ) : null}
    </Section>
  );
}

export function WhyGrid() {
  return (
    <Section tone="surface" decorated>
      <SectionHeading
        eyebrow="Why CASEP GROUP"
        title="Why Organizations Choose CASEP GROUP"
        description="A technology partner that understands operations as well as engineering."
      />
      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
        {whyCasep.map((item, i) => (
          <Reveal key={item.title} delay={i * 50}>
            <div className="h-full rounded-2xl border border-border bg-card/75 p-5 shadow-soft backdrop-blur-xl sm:p-6 lg:p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProcessTimeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How We Work"
        title="A Clear Process From First Conversation to Long-Term Support."
      />
      <ol className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
        {processSteps.map((step, i) => (
          <Reveal key={step.number} delay={i * 60} as="li">
            <div className="relative h-full rounded-2xl border border-border bg-card/75 p-5 shadow-soft backdrop-blur-xl sm:p-6 lg:p-7">
              <span className="text-sm font-bold text-gradient-brand">{step.number}</span>
              <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function IndustriesGrid({ tone = "surface" }: { tone?: "default" | "surface" }) {
  return (
    <Section tone={tone} id="industries" decorated>
      <SectionHeading
        eyebrow="Industries"
        title="Technology for Different Industries."
        description="Every sector runs on different processes. We adapt the solution to the sector, not the other way round."
      />
      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 md:grid-cols-3 lg:grid-cols-4">
        {industries.map((industry, i) => (
          <Reveal key={industry.title} delay={i * 40} as="article">
            <div className="h-full rounded-2xl border border-border bg-card/75 p-5 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon name={industry.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{industry.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function DifferentiatorBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-14 text-navy-foreground sm:py-16 md:py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div
        className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan/20 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-cyan">The difference</p>
          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            We Don&apos;t Just Build Technology. We Build Better Ways of Working.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/75 sm:mt-5 sm:text-base md:text-lg">
            Technology is most valuable when it creates meaningful improvements. CASEP GROUP
            combines technical expertise with business thinking to create solutions that help
            organizations work smarter, make better decisions, and prepare for the future.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function TechnologyStrip() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Capabilities"
        title="Modern Technology. Practical Results."
        description="We choose proven tools that keep systems reliable, secure, and affordable to maintain."
      />
      <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
        {technologies.map((tech, i) => (
          <Reveal key={tech} delay={i * 25}>
            <span className="inline-flex rounded-full border border-border bg-card/75 px-3.5 py-1.5 text-sm font-medium text-muted-foreground shadow-soft backdrop-blur-xl transition-colors hover:border-primary/40 hover:text-primary sm:px-4 sm:py-2">
              {tech}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CaseStudiesGrid() {
  return (
    <Section tone="surface" decorated>
      <SectionHeading
        eyebrow="Case studies"
        title="Work Framed Around Outcomes."
        description="Illustrative examples of the engagements we structure. Published client work will replace these entries."
      />
      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Reveal key={study.title} delay={i * 60} as="article">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card/75 p-5 shadow-soft backdrop-blur-xl sm:p-6 lg:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {study.industry}
                </span>
                {study.placeholder ? (
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                    Example
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 text-lg font-bold">{study.title}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <dt className="font-semibold text-foreground">Challenge</dt>
                  <dd>{study.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Solution</dt>
                  <dd>{study.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Impact</dt>
                  <dd>{study.impact}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function TestimonialsGrid() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="Client Voices, Published Once Verified."
        description="We do not publish invented endorsements. These placeholders will be replaced with attributed feedback."
      />
      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.role} delay={i * 60} as="article">
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card/75 p-5 shadow-soft backdrop-blur-xl sm:p-6 lg:p-7">
              <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <span className="font-semibold">{item.role}</span>
                <span className="block text-xs text-muted-foreground">{item.context}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function StatsBand() {
  return (
    <Section tone="surface">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {capabilityStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 50}>
            <div className="h-full rounded-2xl border border-border bg-card/75 p-5 text-center shadow-soft backdrop-blur-xl sm:p-6 lg:p-7">
              <p className="text-4xl font-extrabold text-gradient-brand">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function InsightsGrid({ tone = "default" }: { tone?: "default" | "surface" }) {
  return (
    <Section tone={tone} decorated>
      <SectionHeading
        eyebrow="Insights"
        title="Perspectives on Technology and Operations."
        description="Planned articles on the topics organizations ask us about most. These outlines are not yet published pieces."
      />
      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
        {insights.map((post, i) => (
          <Reveal key={post.slug} delay={i * 50} as="article">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card/75 p-5 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-6 lg:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {post.category}
                </span>
                {post.draft ? (
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                    Draft
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CTASection({
  title = "Ready to Transform the Way Your Organization Works?",
  description = "Whether you need a custom software solution, a modern digital presence, cloud infrastructure, or business process automation, let's discuss how technology can help your organization move forward.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-14 sm:py-16 md:py-20 lg:py-24", className)}>
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-navy px-5 py-10 text-navy-foreground shadow-lift sm:px-7 sm:py-14 md:px-14 md:py-16">
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
            <div
              className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-cyan/25 blur-3xl animate-pulse-glow"
              aria-hidden="true"
            />
            <div className="relative max-w-2xl">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75 sm:mt-4 sm:text-base">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="brand" size="default">
                  <Link to="/contact" search={{ type: "inquiry" }}>
                    Start a Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
