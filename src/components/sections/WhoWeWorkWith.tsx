import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ButtonLink } from "@/components/ui/Button";

const industries = [
  {
    name: "Management Consulting",
    href: "/industries/consulting",
    note: "Client delivery, pipeline management, utilization reporting",
  },
  {
    name: "Legal",
    href: "/industries/legal",
    note: "Matter intake, client updates, billing workflows",
  },
  {
    name: "Accounting",
    href: "/industries/accounting",
    note: "Seasonal capacity, client portals, document collection",
  },
  {
    name: "Financial Advisory",
    href: "/industries/financial-advisory",
    note: "Lead qualification, review preparation, compliance workflows",
  },
  {
    name: "Executive Search",
    href: "/industries/executive-search",
    note: "Candidate pipelines, client updates, placement workflows",
  },
  {
    name: "Architecture & Design",
    href: "/industries/architecture",
    note: "Project handoffs, client communication, design review cycles",
  },
];

export function WhoWeWorkWith() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26] bg-[#0E0E12]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — heading */}
          <FadeIn className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)" }}
              >
                Who we work with
              </h2>
              <p className="mt-5 text-sm text-[#555560] leading-relaxed max-w-[36ch]">
                We work with service firms that sell expertise, run on
                relationships, and lose time to operational coordination.
              </p>
              <p className="mt-4 text-sm text-[#555560] leading-relaxed max-w-[36ch]">
                If your firm bills by deliverable or expertise rather than by
                volume, Reygent is likely a strong fit.
              </p>
              <div className="mt-8">
                <ButtonLink
                  href="/assessment"
                  variant="secondary"
                  size="sm"
                  className="text-xs"
                >
                  Check your fit
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          {/* Right — industry list */}
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="flex flex-col">
              {industries.map((industry, i) => (
                <FadeIn key={industry.name} delay={i * 0.05}>
                  <li>
                    <a
                      href={industry.href}
                      className="group flex items-start gap-6 py-5 border-b border-[#1E1E26] first:border-t first:border-[#1E1E26] hover:bg-[#111116] -mx-4 px-4 transition-colors duration-150"
                    >
                      <span
                        className="font-mono text-[10px] text-[#35353C] tracking-[0.1em] mt-[3px] flex-shrink-0 w-6"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <span className="text-[0.9375rem] font-medium text-[#88888F] group-hover:text-[#EEEEF0] transition-colors duration-150">
                          {industry.name}
                        </span>
                        <span className="text-sm text-[#35353C] group-hover:text-[#555560] transition-colors duration-150 leading-snug">
                          {industry.note}
                        </span>
                      </div>
                      <span
                        className="text-[#35353C] group-hover:text-[#555560] transition-colors duration-150 flex-shrink-0 mt-[2px]"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
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
