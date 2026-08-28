import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  CTASection,
  DifferentiatorBand,
  IndustriesGrid,
  PageHero,
  SolutionsGrid,
} from "@/components/site/blocks";

const title = "Solutions — Systems That Solve Business Problems | CASEP GROUP";
const description =
  "School management, business management, financial management, HR and workforce systems, and custom enterprise solutions built by CASEP GROUP.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions That Solve Business Problems."
        description="We start with identifying the operational problems; slow admissions, manual invoicing, scattered records, then design the system that removes it."
      >
        <Button asChild variant="onDark" size="xl">
          <Link to="/products">See Our Products</Link>
        </Button>
      </PageHero>
      <div className="lg:-mt-[8.25rem]">
        <SolutionsGrid hideHeading />
      </div>
      <div className="lg:-mt-32">
        <DifferentiatorBand />
      </div>
      <div className="lg:-mt-32">
        <IndustriesGrid />
      </div>
      <div className="lg:-mt-32">
        <CTASection hideSolutionsLink />
      </div>
    </>
  );
}
