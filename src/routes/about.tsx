import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTASection, PageHero, ProcessTimeline, WhyGrid } from "@/components/site/blocks";
import { company, values } from "@/data/site";
import aboutImage from "@/assets/about-collab.jpg";
import founderImage from "@/assets/founder-portrait.jpg";

const title = "About CASEP GROUP — Technology Company in Ghana";
const description =
  "CASEP GROUP is a Ghanaian technology company founded by Caleb Agyei Sey, helping organizations digitize operations and build scalable digital solutions.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Technology Built Around Your Goals."
        description="We combine software engineering, cloud technology, and business understanding to help organizations operate efficiently and grow with confidence."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">Who We Are</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              CASEP GROUP is a technology and business-solutions company based in {company.location}.
              We work with schools, businesses, institutions, and nonprofit organizations to design
              and implement digital systems that improve how they operate.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our work spans software development, cloud infrastructure, business process
              automation, and digital transformation. We approach every engagement with the same
              question: what problem is this technology meant to solve, and how will we know it
              worked?
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={aboutImage}
              alt="CASEP GROUP team reviewing a technology solution with a client"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-3xl border border-border shadow-lift"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border p-8 shadow-soft">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To empower organizations with practical technology solutions that improve
                efficiency, enable innovation, and drive sustainable growth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-border p-8 shadow-soft">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To become a trusted technology partner for organizations seeking to transform how
                they operate, compete, and grow.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Our Values" title="What Guides Our Work" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value} delay={i * 40} as="li">
                <div className="flex items-center gap-3 rounded-xl border border-border px-5 py-4 shadow-soft">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm font-semibold">{value}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <img
              src={founderImage}
              alt="Caleb Agyei Sey, Founder of CASEP GROUP"
              width={517}
              height={667}
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm font-semibold tracking-wide text-primary">Founder</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{company.founder}</h2>
            <p className="mt-1 text-base font-medium text-muted-foreground">
              Founder, CASEP GROUP
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Caleb Agyei Sey founded CASEP GROUP to bring practical, well-engineered technology to
              organizations that have historically been underserved by enterprise software. His
              work focuses on software and website development and management, cloud technology,
              and business process automation, building systems that people actually use day to
              day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              He leads the company&apos;s technical direction, working closely with clients to
              translate operational challenges into clear system requirements and dependable
              digital solutions.
            </p>
          </Reveal>
        </div>
      </Section>

      <WhyGrid />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}
