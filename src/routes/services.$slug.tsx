import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTASection, PageHero, ProcessTimeline } from "@/components/site/blocks";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — CASEP GROUP" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.service.title} — CASEP GROUP`;
    const d = loaderData.service.short;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={service.title} title={service.hero} description={service.short}>
        <Button asChild variant="brand" size="xl">
          <Link to="/contact">Start a Project</Link>
        </Button>
        <Button asChild variant="onDark" size="xl">
          <Link to="/services">
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
        </Button>
      </PageHero>

      <div className="lg:-mt-16">
        <Section>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border p-8 shadow-soft">
                <h2 className="text-2xl font-bold">The problem</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {service.problem}
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-primary/25 p-8">
                <h2 className="text-2xl font-bold">Our approach</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {service.solution}
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      <div className="lg:-mt-16">
        <Section tone="surface">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Capabilities" title="What This Includes" />
              <ul className="mt-8 space-y-3">
                {service.capabilities.map((item, i) => (
                  <Reveal key={item} delay={i * 40} as="li">
                    <div className="flex items-start gap-3 rounded-xl border border-border px-5 py-4 shadow-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Benefits" title="What Changes for You" />
              <ul className="mt-8 space-y-3">
                {service.benefits.map((item, i) => (
                  <Reveal key={item} delay={i * 40} as="li">
                    <div className="flex items-start gap-3 rounded-xl border border-border px-5 py-4 shadow-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                      <span className="text-sm">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Relevant technologies
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="lg:-mt-16">
        <ProcessTimeline />
      </div>

      <div className="lg:-mt-16">
        <Section tone="surface">
          <SectionHeading eyebrow="FAQs" title="Common Questions" />
          <Reveal className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </Section>
      </div>

      <div className="lg:-mt-16">
        <CTASection title={`Ready to talk about ${service.title.toLowerCase()}?`} />
      </div>
    </>
  );
}
