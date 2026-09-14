import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

/**
 * Proof / Capabilities section.
 *
 * No fabricated testimonials, client names, companies, metrics, or case studies.
 * Shows concrete operational systems Reygent is capable of building.
 * Honest about the absence of published case studies.
 */

const capabilities = [
  {
    system: "Lead routing",
    description:
      "A multi-channel intake system that captures inquiries from email, website forms, and referral sources — qualifies them against firm criteria — and routes to the right team member with context already assembled.",
    specs: [
      "Multi-source intake",
      "Qualification logic",
      "CRM/pipeline sync",
      "Automated first response",
    ],
  },
  {
    system: "Client onboarding",
    description:
      "An end-to-end onboarding workflow that moves a new engagement from signed contract to fully operational client — without manual coordination from your team.",
    specs: [
      "Document collection",
      "Portal provisioning",
      "Parallel task dispatch",
      "Completion tracking",
    ],
  },
  {
    system: "Follow-up sequences",
    description:
      "A triggered communication system that maintains consistent contact with leads, prospects, and clients at the right intervals — based on their status, not on someone's calendar.",
    specs: [
      "Status-based triggers",
      "Contextual messaging",
      "Re-engagement logic",
      "Escalation rules",
    ],
  },
  {
    system: "Operational reporting",
    description:
      "Automated data collection and report generation across the firm's operational systems — delivered to the right people on the right schedule without manual assembly.",
    specs: [
      "Cross-tool data pulls",
      "Formatted delivery",
      "Scheduled distribution",
      "Exception alerts",
    ],
  },
];

export function Proof() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26]">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)" }}
              >
                What these systems
                <br />
                look like in practice
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-sm text-[#555560] leading-relaxed max-w-[48ch]">
                These are specifications of systems Reygent designs and builds.
                Client case studies will be published as engagements complete.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Capability specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E1E26]">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.system} delay={i * 0.06}>
              <div className="bg-[#0B0B0E] p-8 flex flex-col gap-5 h-full">
                {/* System name */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#D4A96A] tracking-[0.12em]">
                    System
                  </span>
                  <span className="h-px flex-1 max-w-[24px] bg-[#1E1E26]" />
                </div>
                <h3 className="text-base font-semibold text-[#EEEEF0] tracking-[-0.01em]">
                  {cap.system}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#88888F] leading-[1.65]">
                  {cap.description}
                </p>

                {/* Specs */}
                <div className="mt-auto pt-4 border-t border-[#1E1E26]">
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {cap.specs.map((spec) => (
                      <li
                        key={spec}
                        className="font-mono text-[10px] text-[#404048] tracking-[0.04em]"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
