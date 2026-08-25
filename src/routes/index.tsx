import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Code2, Rocket, Workflow, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ProductSlideshow } from "@/components/site/ProductSlideshow";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  CTASection,
  CaseStudiesGrid,
  DifferentiatorBand,
  IndustriesGrid,
  InsightsGrid,
  ProcessTimeline,
  ServicesGrid,
  SolutionsGrid,
  StatsBand,
  TechnologyStrip,
  TestimonialsGrid,
  WhyGrid,
} from "@/components/site/blocks";
import aboutImage from "@/assets/about-collab.jpg";
import dashboardLight from "@/assets/dashboard-light.png";
import dashboardDark from "@/assets/dashboard-dark.png";
import productBg from "@/assets/bg-workspace-2.jpg";
import heroVideoMp4 from "@/assets/hero-bg.mp4";
import heroVideoWebm from "@/assets/hero-bg.webm";
import heroPoster from "@/assets/hero-poster.jpg";
import { products } from "@/data/site";

const title = "CASEP GROUP — Transforming Organizations Through Technology";
const description =
  "CASEP GROUP is a Ghanaian technology company delivering software development, cloud solutions, business automation, and digital transformation for schools, businesses, and organizations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CASEP GROUP",
          description,
          url: "/",
          founder: { "@type": "Person", name: "Caleb Agyei Sey" },
          address: { "@type": "PostalAddress", addressCountry: "GH", addressLocality: "Accra" },
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  component: Home,
});

const trustStrip = [
  { icon: Code2, label: "Software Development" },
  { icon: Cloud, label: "Cloud Solutions" },
  { icon: Workflow, label: "Business Automation" },
  { icon: Rocket, label: "Digital Transformation" },
];

function Home() {
  const product = products[0]!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-navy-foreground">
        {/* Looping background video. Hidden (in favor of the static poster
            image) when the user has requested reduced motion. */}
        <video
          className="absolute inset-0 hidden h-full w-full object-cover motion-safe:block"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
        <img
          src={heroPoster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
        />
        <div className="navy-video-overlay absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -left-32 top-24 z-[1] h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-pulse-glow"
          aria-hidden="true"
        />
        <div className="container-page relative z-10 py-14 sm:py-16 md:py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:mt-6 sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-6xl">
              Transforming Organizations Through Technology.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/75 sm:mt-6 sm:text-base md:text-lg">
              CASEP GROUP helps schools, businesses, and organizations digitize operations, automate
              processes, and build scalable digital solutions that drive efficiency and growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-9">
              <Button asChild variant="brand" size="xl">
                <Link to="/contact">Let&apos;s Work Together</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-navy-foreground/60 sm:mt-8">
              Proudly Ghanaian. Built for a connected world.
            </p>
          </Reveal>
        </div>

        {/* Trust strip */}
        <div className="relative z-10 border-t border-navy-foreground/10 bg-navy-deep/40">
          <ul className="container-page grid grid-cols-4 gap-2 py-5 sm:gap-4 sm:py-7">
            {trustStrip.map((item) => (
              <li
                key={item.label}
                className="flex flex-col items-center gap-1.5 text-center sm:flex-row sm:gap-3 sm:text-left"
              >
                <item.icon
                  className="h-4 w-4 shrink-0 text-cyan sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-medium leading-tight text-navy-foreground/85 sm:text-sm">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About preview */}
      <Section decorated>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-primary">About CASEP GROUP</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Technology Built Around Your Goals.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At CASEP GROUP, we believe technology should do more than look good — it should solve
              real problems, improve operations, and create measurable value.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We work with schools, businesses, and organizations to design and implement digital
              solutions that simplify processes, improve efficiency, and create a foundation for
              sustainable growth.
            </p>
            <Button asChild variant="softOutline" size="lg" className="mt-8">
              <Link to="/about">
                Learn More About CASEP GROUP
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={aboutImage}
              alt="A team reviewing a digital transformation plan together in a modern office"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </Section>

      <ServicesGrid tone="surface" />
      <SolutionsGrid />

      {/* Featured product */}
      <section
        className="bg-photo-navy relative overflow-hidden py-14 text-navy-foreground sm:py-16 md:py-20 lg:pt-10 lg:pb-28"
        style={{ backgroundImage: `url(${productBg})` }}
      >
        <div className="container-page relative z-10">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:items-start lg:gap-12">
            <Reveal>
              <span className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-primary-foreground">
                CASEP GROUP Product
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:mt-5 sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                School Management, Reimagined.
              </h2>
              <p className="mt-3 text-base font-medium text-cyan sm:text-lg">
                A smarter way to manage modern schools.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-foreground/75 sm:mt-5 sm:text-base">
                CASEP GROUP is developing a comprehensive school management platform that brings
                academic administration, fees, communication, and reporting into one centralized
                system.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ProductSlideshow
                images={[
                  {
                    src: dashboardLight,
                    alt: "SchoolMS Pro dashboard showing student totals, fee collection, and recent student records",
                  },
                  {
                    src: dashboardDark,
                    alt: "SchoolMS Pro dashboard in dark mode showing student totals, fee collection, and recent student records",
                  },
                ]}
                intervalMs={35000}
                className="w-full"
              />
            </Reveal>
          </div>

          {/* Feature list + CTAs span the full section width. Six items per
              row (6/5 split) fills the wide container more tightly than a
              4/4/3 split; the shorter second row auto-centers. Font/icon
              size step down on desktop only so the longer labels (e.g.
              "Parent Portal & Communication") still fit on one line. */}
          <Reveal delay={200}>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:mt-9 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-6 lg:gap-y-7">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-1.5 text-sm text-navy-foreground/80 lg:w-[calc((100%-7.5rem)/6)] lg:gap-1 lg:text-xs xl:text-[13px]"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan lg:h-3.5 lg:w-3.5" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-9 lg:mt-12 lg:justify-center">
              <Button asChild variant="brand" size="xl">
                <Link to="/products">Explore SchoolMSPro</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyGrid />
      <IndustriesGrid tone="default" />
      <ProcessTimeline />
      <DifferentiatorBand />
      <TechnologyStrip />
      <CaseStudiesGrid />
      <StatsBand />
      <TestimonialsGrid />
      <InsightsGrid tone="surface" />
      <CTASection />
    </>
  );
}
