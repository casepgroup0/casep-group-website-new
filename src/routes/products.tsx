import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ProductSlideshow } from "@/components/site/ProductSlideshow";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTASection, PageHero } from "@/components/site/blocks";
import { products } from "@/data/site";
import dashboardLight from "@/assets/dashboard-light.png";
import dashboardDark from "@/assets/dashboard-dark.png";

const title = "Products — School Management System | CASEP GROUP";
const description =
  "CASEP GROUP products, including a school management system for student records, fees, payments, communication, and administrative reporting.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="CASEP GROUP Products"
        title="Products Built for Recurring Organizational Challenges."
        description="Technology products designed to solve problems we see repeatedly across schools, businesses, and institutions."
      >
        <Button asChild variant="brand" size="xl">
          <Link to="/contact">Request a Demo</Link>
        </Button>
      </PageHero>

      {products.map((product) => (
        <Section key={product.slug}>
          <div className="grid items-start gap-12 lg:-mt-20 lg:grid-cols-2">
            <Reveal>
              <ProductSlideshow
                images={[
                  {
                    src: dashboardLight,
                    alt: `${product.name} dashboard showing student totals, fee collection, and recent student records`,
                  },
                  {
                    src: dashboardDark,
                    alt: `${product.name} dashboard in dark mode showing student totals, fee collection, and recent student records`,
                  },
                ]}
                intervalMs={35000}
                className="w-full"
              />
            </Reveal>
            <Reveal delay={100}>
              <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary lg:px-2.5 lg:py-0.5 lg:text-[0.65rem]">
                {product.status}
              </span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:mt-2 lg:text-2xl">
                SchoolMSPro
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:mt-2 lg:text-sm">
                {product.description}
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground lg:mt-5 lg:text-xs">
                Key features
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 lg:mt-3 lg:gap-y-1.5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm lg:gap-1.5 lg:text-xs"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary lg:h-3.5 lg:w-3.5"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground lg:mt-5 lg:text-xs">
                Target users
              </h3>
              <p className="mt-2 text-sm text-muted-foreground lg:text-xs">{product.audience}</p>

              <div className="mt-8 flex flex-wrap gap-3 lg:mt-5">
                <Button asChild variant="brand" size="lg">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
                <Button asChild variant="softOutline" size="lg">
                  <Link to="/contact">Talk to CASEP GROUP</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section tone="surface">
        <SectionHeading
          eyebrow="Roadmap"
          title="More Products in Progress."
          description="Additional products will be published here as they move from development into release."
          align="center"
        />
      </Section>

      <CTASection />
    </>
  );
}
