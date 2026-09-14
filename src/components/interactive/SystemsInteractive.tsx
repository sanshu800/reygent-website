"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const systems = [
  {
    id: "lead",
    num: "01",
    name: "Lead Management",
    href: "/systems/lead-management",
    pitch: "Every inquiry is captured, qualified, and routed — automatically.",
    detail:
      "Multi-channel intake from email, web forms, and referrals. Qualification logic determines fit. Routing sends leads to the right person with context already assembled. Automated first response goes out immediately.",
    flow: ["Inquiry arrives", "Qualification scoring", "Pipeline routing", "Auto-response", "Sales handoff"],
    specs: ["Multi-source intake", "Scoring rules", "CRM sync", "Templated response", "Handoff trigger"],
  },
  {
    id: "onboard",
    num: "02",
    name: "Client Onboarding",
    href: "/systems/client-onboarding",
    pitch: "From signed engagement to fully operational client in hours, not weeks.",
    detail:
      "Triggered the moment a contract is signed. Document collection dispatched, portal access provisioned, team tasks assigned in parallel. Client receives structured communications throughout.",
    flow: ["Contract signed", "Doc requests sent", "Portal provisioned", "Team tasks assigned", "Client confirmed"],
    specs: ["Contract trigger", "Document collection", "Portal provisioning", "Parallel task dispatch", "Completion tracking"],
  },
  {
    id: "followup",
    num: "03",
    name: "Follow-up",
    href: "/systems/follow-up",
    pitch: "Consistent contact that runs on schedule — not on memory.",
    detail:
      "Status-based triggers ensure the right message reaches the right person at the right time. Re-engagement logic catches dormant leads. Escalation rules alert team members when action is genuinely required.",
    flow: ["Status trigger", "Message dispatch", "Response tracking", "Re-engagement", "Escalation"],
    specs: ["Status triggers", "Contextual messaging", "Response tracking", "Re-engagement logic", "Escalation rules"],
  },
  {
    id: "report",
    num: "04",
    name: "Reporting",
    href: "/systems/reporting",
    pitch: "Operational reports delivered automatically, without manual assembly.",
    detail:
      "Data pulled from connected systems on schedule. Reports formatted and delivered to the right people. Exception alerts surface issues without requiring manual review cycles.",
    flow: ["Data pull", "Processing", "Formatting", "Delivery", "Exception alerts"],
    specs: ["Cross-tool data pulls", "Scheduled processing", "Formatted delivery", "Distribution rules", "Exception alerts"],
  },
];

function SystemFlow({ flow, active }: { flow: string[]; active: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col gap-0">
      {flow.map((step, i) => {
        const isActive = i <= active;
        const isCurrent = i === active;
        return (
          <div key={step} className="flex items-start gap-3 py-2">
            {/* Connector column */}
            <div className="flex flex-col items-center w-4 flex-shrink-0">
              <div
                className="h-3 w-3 rounded-full border transition-all duration-500"
                style={{
                  borderColor: isActive ? "rgba(212,169,106,0.8)" : "#1E1E26",
                  backgroundColor: isActive ? "rgba(212,169,106,0.18)" : "transparent",
                }}
              >
                {isCurrent && (
                  <div
                    className="m-auto mt-[3px] h-[5px] w-[5px] rounded-full bg-[#D4A96A]"
                    style={{ animation: reduce ? "none" : "dotPulse 1.5s ease-in-out infinite" }}
                  />
                )}
              </div>
              {i < flow.length - 1 && (
                <div
                  className="w-px mt-0.5 transition-all duration-700"
                  style={{
                    height: "20px",
                    backgroundColor: isActive ? "rgba(212,169,106,0.25)" : "#1E1E26",
                  }}
                />
              )}
            </div>
            <span
              className="text-sm leading-snug pt-[1px] transition-colors duration-400"
              style={{ color: isCurrent ? "#EEEEF0" : isActive ? "#555560" : "#2A2A33" }}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function SystemsInteractive() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const [flowStep, setFlowStep] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function selectSystem(i: number) {
    setSelected(i);
    setFlowStep(0);
    if (reduce) return;
    // Cancel any in-flight flow timers before starting new ones
    timersRef.current.forEach(clearTimeout);
    const s = systems[i];
    timersRef.current = s.flow.map((_, idx) =>
      setTimeout(() => setFlowStep(idx), idx * 280)
    );
  }

  // Start flow on mount
  useEffect(() => {
    if (reduce) {
      const id = setTimeout(() => setFlowStep(systems[0].flow.length - 1), 0);
      return () => clearTimeout(id);
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    systems[0].flow.forEach((_, idx) => {
      timers.push(setTimeout(() => setFlowStep(idx), idx * 300 + 600));
    });
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sys = systems[selected];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#1E1E26] bg-[#0E0E12]">
      {/* Left — system selector */}
      <div className="lg:col-span-4 border-r border-[#1E1E26]">
        {systems.map((s, i) => (
          <button
            key={s.id}
            onClick={() => selectSystem(i)}
            className="w-full text-left"
            aria-pressed={selected === i}
            aria-label={`Select ${s.name} system`}
          >
            <div
              className="flex items-start gap-4 p-6 border-b border-[#1E1E26] last:border-b-0 transition-colors duration-200"
              style={{
                backgroundColor: selected === i ? "rgba(14,14,18,0.0)" : "transparent",
                borderLeft: selected === i
                  ? "2px solid rgba(212,169,106,0.6)"
                  : "2px solid transparent",
              }}
            >
              <span
                className="font-mono text-[10px] tracking-[0.12em] mt-[3px] flex-shrink-0 transition-colors duration-300"
                style={{ color: selected === i ? "#D4A96A" : "#35353C" }}
              >
                {s.num}
              </span>
              <div>
                <div
                  className="text-sm font-medium transition-colors duration-300 leading-snug"
                  style={{ color: selected === i ? "#EEEEF0" : "#555560" }}
                >
                  {s.name}
                </div>
                {selected === i && (
                  <motion.div
                    initial={reduce ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-[#404048] leading-relaxed mt-1 max-w-[28ch]">
                      {s.pitch}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Right — detail panel */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={sys.id}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 h-full"
          >
            {/* Top — name + link */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-[#EEEEF0] tracking-[-0.01em]">
                  {sys.name}
                </h3>
                <p className="text-sm text-[#555560] mt-1 max-w-[52ch] leading-relaxed">
                  {sys.detail}
                </p>
              </div>
            </div>

            {/* Grid — flow + specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#1E1E26]">
              {/* Workflow */}
              <div>
                <span className="font-mono text-[10px] text-[#35353C] tracking-[0.12em] uppercase block mb-4">
                  Workflow
                </span>
                <SystemFlow flow={sys.flow} active={flowStep} />
              </div>

              {/* Capabilities */}
              <div>
                <span className="font-mono text-[10px] text-[#35353C] tracking-[0.12em] uppercase block mb-4">
                  Capabilities
                </span>
                <ul className="flex flex-col gap-2.5">
                  {sys.specs.map((spec, i) => (
                    <motion.li
                      key={spec}
                      initial={reduce ? false : { opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="flex items-center gap-3 text-sm text-[#88888F]"
                    >
                      <span
                        className="h-px w-4 flex-shrink-0"
                        style={{ background: "linear-gradient(to right, rgba(212,169,106,0.5), rgba(212,169,106,0.1))" }}
                      />
                      {spec}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA link */}
            <div className="mt-6 pt-4 border-t border-[#1E1E26]">
              <a
                href={sys.href}
                className="group inline-flex items-center gap-2 text-xs text-[#555560] hover:text-[#88888F] transition-colors duration-200"
              >
                Learn more about {sys.name}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
