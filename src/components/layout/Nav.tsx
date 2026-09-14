"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Systems", href: "/systems" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#09090C]/92 backdrop-blur-md border-b border-[#1E1E26]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2.5 text-sm text-[#88888F] hover:text-[#EEEEF0] transition-colors duration-150 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/contact"
              className="text-sm text-[#88888F] hover:text-[#EEEEF0] transition-colors duration-150 py-2 px-1"
            >
              Contact
            </a>
            <ButtonLink href="/assessment" variant="primary" size="sm">
              Get assessment
            </ButtonLink>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-[#17171D] transition-colors"
          >
            <span
              className={cn(
                "block h-px w-5 bg-[#EEEEF0] transition-all duration-200",
                mobileOpen && "rotate-45 translate-y-[4px]"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-[#EEEEF0] transition-all duration-200",
                mobileOpen && "-rotate-45 -translate-y-[3px]"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-[#1E1E26] bg-[#09090C]/95 backdrop-blur-md",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-sm text-[#88888F] hover:text-[#EEEEF0] transition-colors duration-150 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2.5 text-sm text-[#88888F] hover:text-[#EEEEF0] transition-colors duration-150 rounded-md"
          >
            Contact
          </a>
          <div className="pt-2 pb-1">
            <ButtonLink href="/assessment" variant="primary" size="sm" className="w-full justify-center">
              Get assessment
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
