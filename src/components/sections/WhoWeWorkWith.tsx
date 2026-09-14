"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

const industries = [
  {
    name: "Management Consulting",
    href: "/industries/consulting",
    pains: ["Proposal pipeline management", "Utilization reporting", "Project handoff coordination"],
  },
  {
    name: "Legal",
    href: "/industries/legal",
    pains: ["Matter intake and qualification", "Client status updates", "Billing workflow gaps"],
  },
  {
    name: "Accounting",
    href: "/industries/accounting",
    pains: ["Seasonal capacity coordination", "Client portal and document collection", "Deadline tracking"],
  },
  {
    name: "Financial Advisory",
    href: "/industries/financial-advisory",
    pains: ["Lead qualification and follow-up", "Review preparation workflows", "Compliance document tracking"],
  },
  {
    name: "Executive Search",
    href: "/industries/executive-search",
    pains: ["Candidate pipeline management", "Client progress updates", "Placement and onboarding coordination"],
  },
  {
    name: "Architecture & Design",
    href: "/industries/architecture",
    pains: ["Project handoff sequences", "Client feedback coordination", "Design review cycles"],
  },
];

export function WhoWeWorkWith() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26] bg-[#0E0E12]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <FadeIn className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)" }}
              >
                Who we
                <br />
                work with
              </h2>
              <p className="mt-5 text-sm text-[#555560] leading-relaxed max-w-[36ch]">
                Firms that sell expertise and need their back-office to match
                the quality of their client-facing work.
              </p>
              <p className="mt-4 text-sm text-[#555560] leading-relaxed max-w-[36ch]">
                If your firm bills by expertise rather than volume, Reygent is
                likely a strong fit.
              </p>
              <div className="mt-8">
                <ButtonLink href="/assessment" variant="secondary" size="sm">
                  Check your fit
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          {/* Right — interactive industry list */}
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="flex flex-col">
              {industries.map((ind, i) => (
                <FadeIn key={ind.name} delay={i * 0.05}>
                  <li>
                    <a
                      href={ind.href}
                      className="group block border-b border-[#1E1E26] first:border-t first:border-[#1E1E26]"
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(i)}
                      onBlur={() => setHovered(null)}
                    >
                      <div className="flex items-start gap-6 px-4 -mx-4 py-5 transition-colors duration-150 hover:bg-[#111116]">
                        <span
                          className="font-mono text-[10px] tracking-[0.1em] mt-[3px] flex-shrink-0 w-6 transition-colors duration-300"
                          style={{ color: hovered === i ? "#D4A96A" : "#35353C" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span
                            className="block text-[0.9375rem] font-medium transition-colors duration-200"
                            style={{ color: hovered === i ? "#EEEEF0" : "#88888F" }}
                          >
                            {ind.name}
                          </span>
                          <AnimatePresence>
                            {hovered === i && (
                              <motion.ul
                                initial={reduce ? false : { opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pt-2 flex flex-col gap-1">
                                  {ind.pains.map((pain) => (
                                    <li
                                      key={pain}
                                      className="flex items-center gap-2 text-xs text-[#555560]"
                                    >
                                      <span className="h-px w-3 flex-shrink-0 bg-[#2A2A33]" />
                                      {pain}
                                    </li>
                                  ))}
                                </div>
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                        <span
                          className="flex-shrink-0 mt-[3px] text-sm transition-all duration-200"
                          style={{
                            color: hovered === i ? "#555560" : "#2A2A33",
                            transform: hovered === i ? "translateX(3px)" : "translateX(0)",
                          }}
                        >
                          &rarr;
                        </span>
                      </div>
                    </a>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
