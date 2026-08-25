import { useRouter, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

/**
 * Small floating button that navigates back one step in browser history.
 * Hidden on the homepage since there's nowhere within the site to go back to.
 */
export function BackButton() {
  const router = useRouter();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname === "/") return null;

  return (
    <button
      type="button"
      onClick={() => router.history.back()}
      aria-label="Back to previous page"
      title="Back to previous page"
      className="group fixed bottom-4 left-4 z-50 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft backdrop-blur-md transition-all hover:w-auto hover:gap-1.5 hover:px-3 hover:shadow-lift sm:bottom-6 sm:left-6"
    >
      <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
      <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-200 group-hover:ml-1 group-hover:max-w-[6rem] group-hover:opacity-100">
        Back
      </span>
    </button>
  );
}
