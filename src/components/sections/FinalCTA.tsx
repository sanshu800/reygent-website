import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-[#1E1E26] overflow-hidden">
      {/* Ray signature — third and final appearance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Directional ray from bottom-left */}
        <div
          className="absolute"
          style={{
            bottom: "-20%",
            left: "-5%",
            width: "60%",
            height: "80%",
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(212,169,106,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Thin highlight line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "0",
            height: "1px",
            background:
              "linear-gradient(to right, transparent 0%, rgba(212,169,106,0.15) 30%, rgba(212,169,106,0.15) 70%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left — headline */}
            <div className="lg:col-span-7">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.1] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}
              >
                Find out where your
                <br />
                firm is losing time.
              </h2>
            </div>

            {/* Right — copy + CTA */}
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
              <p className="text-sm text-[#88888F] leading-[1.7]">
                The assessment takes ten minutes. It maps your current operation
                and identifies where automation creates the most leverage for
                your firm specifically.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <ButtonLink href="/assessment" variant="primary" size="lg">
                  Get your assessment
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost" size="lg">
                  Talk to us first
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
