import { RaySignature } from "@/components/brand/RaySignature";
import { HeroEntry } from "@/components/motion/HeroEntry";
import { ButtonLink } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Container } from "@/components/ui/Container";

const systemNodes = [
  {
    id: "01",
    name: "Lead Management",
    items: ["Intake & qualification", "Pipeline routing", "Automated response"],
  },
  {
    id: "02",
    name: "Client Onboarding",
    items: ["Document collection", "Portal provisioning", "Task assignment"],
  },
  {
    id: "03",
    name: "Follow-up",
    items: ["Triggered sequences", "Contextual timing", "Escalation logic"],
  },
  {
    id: "04",
    name: "Reporting",
    items: ["Automated data pulls", "Client delivery", "Ops dashboards"],
  },
];

function WorkflowDiagram() {
  return (
    <div
      aria-hidden="true"
      className="relative flex flex-col gap-0 select-none"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#242429]">
        <span className="font-mono text-[10px] text-[#555560] tracking-[0.12em] uppercase">
          System overview
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A96A] opacity-70" />
          <span className="font-mono text-[10px] text-[#555560] tracking-[0.1em]">
            Active
          </span>
        </span>
      </div>

      {/* Nodes */}
      <div className="relative">
        {/* Vertical connector line */}
        <div
          className="absolute left-[6px] top-[7px] w-px bg-gradient-to-b from-[#D4A96A]/40 via-[#D4A96A]/20 to-transparent"
          style={{ height: "calc(100% - 24px)" }}
        />

        <div className="flex flex-col gap-6">
          {systemNodes.map((node, i) => (
            <div key={node.id} className="flex gap-4">
              {/* Node dot */}
              <div className="flex flex-col items-center pt-[5px] flex-shrink-0">
                <div
                  className="h-[13px] w-[13px] rounded-full border flex items-center justify-center"
                  style={{
                    borderColor:
                      i === 0
                        ? "rgba(212,169,106,0.7)"
                        : "rgba(55,55,62,0.8)",
                    backgroundColor:
                      i === 0
                        ? "rgba(212,169,106,0.12)"
                        : "rgba(17,17,22,0.8)",
                  }}
                >
                  {i === 0 && (
                    <div className="h-[5px] w-[5px] rounded-full bg-[#D4A96A]" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 pb-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#555560] tracking-[0.1em]">
                    {node.id}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: i === 0 ? "#EEEEF0" : "#88888F",
                    }}
                  >
                    {node.name}
                  </span>
                </div>
                <ul className="flex flex-col gap-1 pl-[28px]">
                  {node.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[10px] text-[#404048] tracking-[0.04em]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer line */}
      <div className="mt-6 pt-4 border-t border-[#242429] flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#35353C] tracking-[0.08em]">
          Interconnected by design
        </span>
        <span className="font-mono text-[10px] text-[#35353C] tracking-[0.08em]">
          Built for your tools
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16">
      <RaySignature />

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content — left 6 columns */}
          <div className="lg:col-span-6">
            <HeroEntry>
              {/* Label */}
              <Label>Business automation for professional services</Label>

              {/* Headline */}
              <h1
                className="font-semibold text-[#EEEEF0] leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
              >
                Your firm should run
                <br />
                <span className="text-[#555560]">without you running it.</span>
              </h1>

              {/* Lead */}
              <p className="text-[1.0625rem] text-[#88888F] leading-[1.7] max-w-[48ch]">
                Reygent designs and implements the operational systems that remove
                repetitive work from professional-service firms — lead routing,
                client onboarding, follow-up, and reporting.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <ButtonLink href="/assessment" variant="primary" size="lg">
                  Get your assessment
                </ButtonLink>
                <ButtonLink href="/systems" variant="secondary" size="lg">
                  See what we build
                </ButtonLink>
              </div>
            </HeroEntry>
          </div>

          {/* Workflow diagram — right 5 columns */}
          <div className="hidden lg:block lg:col-span-5 lg:col-start-8">
            <div className="relative rounded-lg border border-[#242429] bg-[#0E0E12] p-7 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
              {/* Subtle inner glow from top-right */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden"
              >
                <div
                  className="absolute"
                  style={{
                    top: "-20%",
                    right: "-10%",
                    width: "70%",
                    height: "60%",
                    background:
                      "radial-gradient(ellipse at 80% 20%, rgba(212,169,106,0.06) 0%, transparent 65%)",
                  }}
                />
              </div>
              <WorkflowDiagram />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
