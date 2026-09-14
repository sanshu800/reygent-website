import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-[#1E1E26] overflow-hidden">
      {/* Ray — third and final appearance, converging from bottom-left */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute"
          style={{
            bottom: "-30%", left: "-10%",
            width: "65%", height: "90%",
            background: "radial-gradient(ellipse at 15% 85%, rgba(212,169,106,0.07) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "0", right: "0",
            width: "40%", height: "50%",
            background: "radial-gradient(ellipse at 85% 80%, rgba(212,169,106,0.04) 0%, transparent 60%)",
          }}
        />
        {/* Top ray-edge line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: 0, height: "1px",
            background: "linear-gradient(to right, transparent 0%, rgba(212,169,106,0.12) 25%, rgba(212,169,106,0.18) 60%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left — large headline */}
            <div className="lg:col-span-7">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2.25rem, 4vw, 3.75rem)" }}
              >
                Find out where your
                <br />
                firm is losing time.
              </h2>
            </div>

            {/* Right — copy + CTAs */}
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
              <p className="text-sm text-[#88888F] leading-[1.75]">
                The assessment takes ten minutes. It maps the current operation
                and shows exactly where automation creates leverage for the
                firm — not in general, but specifically.
              </p>
              <div className="flex flex-col gap-3">
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
