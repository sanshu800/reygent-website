import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SystemsInteractive } from "@/components/interactive/SystemsInteractive";

export function Systems() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26] bg-[#0E0E12]">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)" }}
              >
                What Reygent builds
              </h2>
            </div>
            <p className="text-sm text-[#555560] max-w-[46ch] lg:text-right leading-relaxed">
              Four interconnected operational systems. Not isolated automations —
              a connected infrastructure that runs around the business.
            </p>
          </div>
        </FadeIn>

        {/* Interactive systems panel */}
        <FadeIn delay={0.1}>
          <SystemsInteractive />
        </FadeIn>
      </Container>
    </section>
  );
}
