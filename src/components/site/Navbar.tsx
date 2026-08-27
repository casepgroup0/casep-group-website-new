import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 8);

      const scrolledDown = currentY > lastY;
      const pastThreshold = currentY > 96;

      if (scrolledDown && pastThreshold) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled ? "border-border glass-panel" : "border-transparent glass-panel",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-2 sm:gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="CASEP GROUP home">
          <Logo className="h-8 w-8" />
          <span className="text-base font-extrabold tracking-tight md:text-lg">CASEP GROUP</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button asChild variant="brand" size="default" className="hidden lg:inline-flex">
            <Link to="/contact">Let&apos;s Work Together</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border glass-panel lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex items-center gap-3 pb-2">
              <Button asChild variant="brand" size="default" className="flex-1">
                <Link to="/contact">Let&apos;s Work Together</Link>
              </Button>
              <ThemeToggle className="h-11 w-11 sm:hidden" />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
