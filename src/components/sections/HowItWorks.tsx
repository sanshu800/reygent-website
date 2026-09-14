import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    number: "01",
    name: "Understand",
    description:
      "We map your current operation in detail. Where time is actually spent, what happens when things go wrong, where information moves manually, and what the firm needs in order to scale without adding headcount.",
  },
  {
    number: "02",
    name: "Design",
    description:
      "We identify the highest-leverage bottlenecks and design the systems around your existing tools and process. No unnecessary platforms. No infrastructure you don't control.",
  },
  {
    number: "03",
    name: "Build",
    description:
      "We implement the automations, integrations, and AI-assisted workflows. Each component is built with clear ownership, documented behavior, and a handoff your team can maintain.",
  },
  {
    number: "04",
    name: "Refine",
    description:
      "Systems go live, and we stay close through the initial period. We measure what matters, adjust what doesn't work, and stabilize the operation before stepping back.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26]">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)" }}
              >
                How an engagement works
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-sm text-[#555560] leading-relaxed max-w-[48ch]">
                Every engagement follows the same four phases. The specifics
                differ by firm; the structure does not.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-[#1E1E26]">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="bg-[#0B0B0E] p-8 flex flex-col gap-5 h-full">
                {/* Number — large typographic element */}
                <div className="flex items-start justify-between">
                  <span
                    className="font-mono font-medium text-[#1E1E26] leading-none select-none"
                    style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}
                  >
                    {step.number}
                  </span>
                  {/* Ray accent on first step */}
                  {i === 0 && (
                    <span
                      aria-hidden="true"
                      className="h-px w-8 mt-4 flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(212,169,106,0.6), transparent)",
                      }}
                    />
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-[#EEEEF0] tracking-[-0.01em]">
                    {step.name}
                  </h3>
                  <p className="text-sm text-[#555560] leading-[1.65]">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
