import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { HeroEntry } from "@/components/motion/HeroEntry";
import { SystemDiagram } from "@/components/interactive/SystemDiagram";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      {/* Hero ray — primary brand appearance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main ambient ray, upper-right */}
        <div
          className="absolute"
          style={{
            top: "-15%", right: "-8%",
            width: "75%", height: "80%",
            background: "radial-gradient(ellipse at 75% 20%, rgba(212,169,106,0.09) 0%, transparent 58%)",
          }}
        />
        {/* Secondary trace */}
        <div
          className="absolute"
          style={{
            top: "5%", right: "5%",
            width: "45%", height: "55%",
            background: "radial-gradient(ellipse at 65% 15%, rgba(212,169,106,0.04) 0%, transparent 55%)",
          }}
        />
        {/* Thin horizontal line — decorative ray edge */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "16.5%",
            height: "1px",
            background: "linear-gradient(to right, transparent 0%, rgba(212,169,106,0.06) 30%, rgba(212,169,106,0.08) 60%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative z-10 py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Left — content */}
          <div className="lg:col-span-6">
            <HeroEntry>
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-6 flex-shrink-0"
                  style={{ background: "linear-gradient(to right, rgba(212,169,106,0.7), rgba(212,169,106,0.2))" }}
                />
                <span className="font-mono text-[10px] text-[#D4A96A] tracking-[0.14em] uppercase">
                  Business automation
                </span>
              </div>

              {/* Headline — clip-reveal via HeroEntry */}
              <div>
                <h1
                  className="font-semibold text-[#EEEEF0] leading-[1.06] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.6rem, 4.5vw, 4.25rem)" }}
                >
                  Your firm should
                  <br />
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(238,238,240,0.3)",
                    }}
                  >
                    run without
                  </span>
                  <br />
                  <span>you running it.</span>
                </h1>
              </div>

              {/* Sub-copy */}
              <p className="text-[1rem] text-[#88888F] leading-[1.75] max-w-[46ch]">
                Reygent designs and implements the operational systems that
                remove repetitive work from professional-service firms — lead
                routing, client onboarding, follow-up, and reporting.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <ButtonLink href="/assessment" variant="primary" size="lg">
                  Get your assessment
                </ButtonLink>
                <ButtonLink href="/systems" variant="secondary" size="lg">
                  See what we build
                </ButtonLink>
              </div>
            </HeroEntry>
          </div>

          {/* Right — live system diagram */}
          <div className="lg:col-span-5 lg:col-start-8">
            <SystemDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
