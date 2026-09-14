"use client";

import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const steps = [
  {
    num: "01",
    name: "Understand",
    body: "We map the current operation in detail. Where time is actually spent. Where information moves manually. Where handoffs break down. What the firm needs to scale without adding headcount.",
  },
  {
    num: "02",
    name: "Design",
    body: "We identify the highest-leverage bottlenecks and design the system around the firm's existing tools and process. No unnecessary platforms. No infrastructure the team can't maintain.",
  },
  {
    num: "03",
    name: "Build",
    body: "We implement the automations, integrations, and workflows. Each component is built with documented behavior and a clean handoff. The firm understands what was built and why.",
  },
  {
    num: "04",
    name: "Refine",
    body: "Systems go live. We stay close through the initial period, measure what matters, adjust what doesn't work, and stabilize before stepping back. Ongoing support remains available.",
  },
];

export function HowItWorksClient() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    if (reduce) {
      // Defer the state update out of the synchronous effect body
      const id = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(id);
    }
    const onScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start filling when section enters viewport, complete when section center passes
      const p = Math.min(1, Math.max(0, (vh - top) / (height * 0.85)));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  const activeStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));

  return (
    <div ref={sectionRef}>
      {/* Progress track */}
      <div className="relative mb-12">
        {/* Background track */}
        <div className="h-px w-full bg-[#1E1E26]" />
        {/* Filled ray line */}
        <div
          className="absolute top-0 left-0 h-px origin-left"
          style={{
            width: "100%",
            transform: `scaleX(${reduce ? 1 : progress})`,
            transformOrigin: "left center",
            background: "linear-gradient(to right, rgba(212,169,106,0.8) 0%, rgba(212,169,106,0.3) 100%)",
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        {/* Step markers on the track */}
        <div className="absolute top-0 left-0 right-0 flex justify-between">
          {steps.map((_, i) => {
            const fraction = i / (steps.length - 1);
            const isActive = progress >= fraction - 0.01;
            return (
              <div
                key={i}
                className="h-3 w-3 rounded-full border -mt-[5px] transition-all duration-500"
                style={{
                  borderColor: isActive ? "rgba(212,169,106,0.8)" : "#1E1E26",
                  backgroundColor: isActive ? "rgba(212,169,106,0.18)" : "#09090C",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Step grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E1E26]">
        {steps.map((step, i) => {
          const isActive = i <= activeStep;
          return (
            <div
              key={step.num}
              className="bg-[#09090C] p-8 flex flex-col gap-4 transition-colors duration-500"
              style={{ backgroundColor: isActive ? "#0E0E12" : "#09090C" }}
            >
              {/* Number */}
              <span
                className="font-mono text-[2.5rem] font-medium leading-none select-none transition-colors duration-500"
                style={{ color: isActive ? "rgba(212,169,106,0.18)" : "#111116" }}
              >
                {step.num}
              </span>
              <div>
                <h3
                  className="text-base font-semibold tracking-[-0.01em] mb-2 transition-colors duration-500"
                  style={{ color: isActive ? "#EEEEF0" : "#2A2A33" }}
                >
                  {step.name}
                </h3>
                <p
                  className="text-sm leading-[1.7] transition-colors duration-500"
                  style={{ color: isActive ? "#555560" : "#1E1E26" }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
