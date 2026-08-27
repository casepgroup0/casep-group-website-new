import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  tone = "default",
  id,
  decorated = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "navy";
  id?: string;
  /** Adds a subtle dot-grid texture and soft blurred color blobs behind the content. */
  decorated?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-14 sm:py-16 md:py-20 lg:py-28",
        tone === "navy" && "text-navy-foreground",
        decorated && "overflow-hidden",
        className,
      )}
    >
      <div className="container-page relative">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-semibold tracking-wide",
            onDark ? "text-cyan" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg",
            onDark ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
