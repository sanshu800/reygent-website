import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { HowItWorksClient } from "@/components/interactive/HowItWorksClient";

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26]">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)" }}
              >
                How an engagement works
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-sm text-[#555560] leading-relaxed max-w-[48ch]">
                Every engagement follows the same four phases. The specifics
                differ by firm. The structure does not.
              </p>
            </div>
          </div>
        </FadeIn>

        <HowItWorksClient />
      </Container>
    </section>
  );
}
