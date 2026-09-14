"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const nodes = [
  { id: "lead",       label: "Lead intake",       sub: ["Email", "Web form", "Referral"] },
  { id: "qualify",    label: "Qualification",     sub: ["Scoring", "Routing"] },
  { id: "followup",   label: "Follow-up",         sub: ["Triggered", "Contextual"] },
  { id: "onboard",    label: "Onboarding",        sub: ["Docs", "Portal", "Tasks"] },
  { id: "report",     label: "Reporting",         sub: ["Delivery", "Alerts"] },
];

export function SystemDiagram() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started || reduce) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % nodes.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [started, reduce]);

  return (
    <div
      aria-hidden="true"
      className="relative select-none rounded-lg border border-[#1E1E26] bg-[#0E0E12] p-6 overflow-hidden"
      style={{ boxShadow: "0 0 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)" }}
    >
      {/* Ambient ray in diagram */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-20%", right: "-10%",
          width: "60%", height: "70%",
          background: "radial-gradient(ellipse at 75% 25%, rgba(212,169,106,0.07) 0%, transparent 65%)",
          animation: reduce ? "none" : "shimmerRay 3s ease-in-out infinite",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-5 pb-4 border-b border-[#1E1E26]">
        <span className="font-mono text-[10px] text-[#555560] tracking-[0.14em] uppercase">
          Operational system
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#D4A96A]"
            style={{ animation: reduce ? "none" : "dotPulse 2s ease-in-out infinite" }}
          />
          <span className="font-mono text-[10px] text-[#555560]">Running</span>
        </span>
      </div>

      {/* Node list */}
      <div className="relative z-10 flex flex-col gap-0">
        {/* Left vertical connector */}
        <div
          className="absolute left-[17px] top-[8px] w-px origin-top"
          style={{
            height: "calc(100% - 16px)",
            background: "linear-gradient(to bottom, rgba(212,169,106,0.4) 0%, rgba(212,169,106,0.1) 60%, transparent 100%)",
            animation: started && !reduce ? "lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) both" : "none",
          }}
        />

        {nodes.map((node, i) => {
          const isActive = active === i;
          return (
            <div
              key={node.id}
              className="flex gap-4 py-3"
              style={{
                animation: started && !reduce
                  ? `nodeIn 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s both`
                  : "none",
              }}
            >
              {/* Node indicator */}
              <div className="flex flex-col items-center mt-[5px] flex-shrink-0 w-[35px]">
                <div
                  className="h-[13px] w-[13px] rounded-full border transition-all duration-500"
                  style={{
                    borderColor: isActive ? "rgba(212,169,106,0.8)" : "rgba(55,55,62,0.8)",
                    backgroundColor: isActive ? "rgba(212,169,106,0.15)" : "rgba(17,17,22,0.9)",
                  }}
                >
                  {isActive && (
                    <div
                      className="m-auto mt-[3px] h-[5px] w-[5px] rounded-full bg-[#D4A96A]"
                      style={{ animation: reduce ? "none" : "dotPulse 1.5s ease-in-out infinite" }}
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <span
                  className="text-sm font-medium leading-tight transition-colors duration-400"
                  style={{ color: isActive ? "#EEEEF0" : "#555560" }}
                >
                  {node.label}
                </span>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex gap-2 pt-1 flex-wrap">
                        {node.sub.map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[9px] text-[#D4A96A] tracking-[0.08em] px-1.5 py-0.5 rounded"
                            style={{ background: "rgba(212,169,106,0.08)", border: "1px solid rgba(212,169,106,0.15)" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-4 pt-4 border-t border-[#1E1E26] flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#35353C] tracking-[0.08em]">
          Interconnected by design
        </span>
        <span className="font-mono text-[10px] text-[#35353C] tracking-[0.08em]">
          {nodes.length} stages
        </span>
      </div>
    </div>
  );
}
