import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const capabilities = [
  {
    num: "01",
    system: "Lead routing workflow",
    description:
      "Multi-channel intake captures inquiries from email, web forms, and referral sources. Qualification logic scores each against firm criteria. Routing sends to the right team member with context already assembled. Automated first response dispatches immediately.",
    specs: ["Multi-source intake", "Qualification scoring", "Pipeline routing", "Automated response", "CRM sync"],
  },
  {
    num: "02",
    system: "Client onboarding sequence",
    description:
      "Triggered on contract signature. Document requests dispatched automatically. Portal access provisioned in parallel with team task assignment. Client receives structured communications throughout. Completion tracked without manual follow-up.",
    specs: ["Contract trigger", "Document collection", "Portal provisioning", "Task dispatch", "Completion tracking"],
  },
  {
    num: "03",
    system: "Follow-up automation",
    description:
      "Status-based triggers ensure consistent contact at the right intervals. Re-engagement logic identifies dormant leads and re-activates them. Escalation rules surface situations requiring human judgment without requiring manual review.",
    specs: ["Status triggers", "Interval logic", "Re-engagement", "Escalation rules", "Response tracking"],
  },
  {
    num: "04",
    system: "Operational reporting pipeline",
    description:
      "Data pulled from connected systems on a defined schedule. Processed, formatted, and delivered to the right people without manual assembly. Exception alerts surface anomalies before they become problems.",
    specs: ["Cross-tool data pulls", "Scheduled processing", "Formatted delivery", "Distribution rules", "Exception alerts"],
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
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)" }}
              >
                Capability
                <br />
                specifications
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-sm text-[#555560] leading-relaxed max-w-[48ch]">
                These are the systems Reygent designs and builds. They are
                described as implemented specifications, not as marketing
                concepts. Case studies from live engagements will be added as
                they complete.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Specs */}
        <div className="flex flex-col gap-px bg-[#1E1E26]">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.num} delay={i * 0.07}>
              <div className="bg-[#09090C] p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                  {/* Left — name */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] text-[#D4A96A] tracking-[0.12em]">
                        {cap.num}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#EEEEF0] tracking-[-0.01em] leading-snug">
                      {cap.system}
                    </h3>
                  </div>

                  {/* Middle — description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm text-[#555560] leading-[1.7]">
                      {cap.description}
                    </p>
                  </div>

                  {/* Right — specs */}
                  <div className="lg:col-span-3">
                    <ul className="flex flex-col gap-2">
                      {cap.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-center gap-2 font-mono text-[10px] text-[#404048] tracking-[0.06em]"
                        >
                          <span className="h-px w-3 flex-shrink-0 bg-[#2A2A33]" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
