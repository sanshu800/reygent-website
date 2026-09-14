import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const systems = [
  {
    id: "01",
    name: "Lead Management",
    href: "/systems/lead-management",
    description:
      "Every inquiry captured, qualified, and moved through your pipeline. Automated routing to the right person. No leads go cold because nobody noticed.",
    capabilities: [
      "Multi-channel intake",
      "Qualification logic",
      "Pipeline routing",
      "Automated first response",
      "Sales handoff",
    ],
    featured: true,
  },
  {
    id: "02",
    name: "Client Onboarding",
    href: "/systems/client-onboarding",
    description:
      "From signed engagement to fully onboarded client in a fraction of the time. Document collection, portal access, and task coordination run automatically.",
    capabilities: [
      "Document collection",
      "Welcome sequences",
      "Portal provisioning",
      "Team task assignment",
    ],
    featured: false,
  },
  {
    id: "03",
    name: "Follow-up",
    href: "/systems/follow-up",
    description:
      "Triggered sequences that run on schedule. No team member needs to remember to follow up. No client waits too long without hearing from you.",
    capabilities: [
      "Triggered sequences",
      "Contextual timing",
      "Re-engagement logic",
      "Escalation rules",
    ],
    featured: false,
  },
  {
    id: "04",
    name: "Reporting",
    href: "/systems/reporting",
    description:
      "Operational and client-facing reports generated automatically. Numbers pulled from the right systems, formatted, and delivered without a manual pull.",
    capabilities: [
      "Automated data pulls",
      "Client delivery",
      "Operational dashboards",
      "Scheduled distribution",
    ],
    featured: false,
  },
];

export function Systems() {
  const [featured, ...rest] = systems;

  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26] bg-[#0E0E12]">
      <Container>
        {/* Section header */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <h2
              className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)" }}
            >
              What Reygent builds
            </h2>
            <p className="text-sm text-[#555560] max-w-[44ch] lg:text-right leading-relaxed">
              Four interconnected systems. Each one addresses a distinct
              operational bottleneck. Together, they let the firm run without
              manual coordination.
            </p>
          </div>
        </FadeIn>

        {/* Featured system — full width */}
        <FadeIn>
          <a
            href={featured.href}
            className="group block border border-[#1E1E26] hover:border-[#35353C] bg-[#0B0B0E] transition-colors duration-300 mb-px"
            aria-label={`${featured.name} — learn more`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left — system info */}
              <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#D4A96A] tracking-[0.12em]">
                    {featured.id}
                  </span>
                  <span className="h-px flex-1 max-w-[32px] bg-[#1E1E26]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#EEEEF0] tracking-[-0.02em] mb-3 group-hover:text-white transition-colors">
                    {featured.name}
                  </h3>
                  <p className="text-sm text-[#88888F] leading-[1.7] max-w-[52ch]">
                    {featured.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-xs text-[#555560] group-hover:text-[#88888F] transition-colors">
                    Learn more
                  </span>
                  <span className="text-[#35353C] group-hover:text-[#555560] transition-colors text-sm">
                    &rarr;
                  </span>
                </div>
              </div>

              {/* Right — capabilities */}
              <div className="lg:col-span-4 lg:col-start-9 border-t lg:border-t-0 lg:border-l border-[#1E1E26] p-8 lg:p-10 flex flex-col justify-center">
                <ul className="flex flex-col gap-3">
                  {featured.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-3 text-sm text-[#555560]"
                    >
                      <span
                        className="h-px w-4 flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(to right, rgba(212,169,106,0.5), rgba(212,169,106,0.1))",
                        }}
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        </FadeIn>

        {/* Remaining systems — 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E1E26]">
          {rest.map((system, i) => (
            <FadeIn key={system.id} delay={i * 0.07}>
              <a
                href={system.href}
                className="group block bg-[#0B0B0E] hover:bg-[#0E0E12] transition-colors duration-200 p-8 h-full flex flex-col"
                aria-label={`${system.name} — learn more`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] text-[#D4A96A] tracking-[0.12em]">
                    {system.id}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#EEEEF0] tracking-[-0.01em] mb-3 group-hover:text-white transition-colors">
                  {system.name}
                </h3>
                <p className="text-sm text-[#555560] leading-[1.65] mb-6">
                  {system.description}
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {system.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="font-mono text-[10px] text-[#404048] tracking-[0.04em]"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </a>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
