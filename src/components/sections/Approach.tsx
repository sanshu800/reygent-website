import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const principles = [
  {
    heading: "Automate the right work",
    body: "Not everything should be automated. Repetitive, rule-based, time-consuming tasks — yes. Complex judgement, relationship-sensitive communication, strategic decisions — no. We help you tell the difference.",
  },
  {
    heading: "Keep humans in control",
    body: "Automation is infrastructure, not a replacement for professional judgement. Every system we build has clear ownership, visible behavior, and override controls your team can use without calling us.",
  },
  {
    heading: "Build around your existing operation",
    body: "We work with the tools your firm already uses. We do not require you to switch platforms or learn new software. The systems fit around your operation — not the other way around.",
  },
  {
    heading: "Measure what it actually changes",
    body: "Every system has a clear operational objective. Time saved, errors reduced, response times improved. If we cannot measure the impact, we have not built the right thing.",
  },
];

export function Approach() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26] bg-[#0E0E12]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — heading, sticky */}
          <FadeIn className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)" }}
              >
                The Reygent
                <br />
                approach
              </h2>
              <p className="mt-5 text-sm text-[#555560] leading-relaxed max-w-[34ch]">
                Four principles that govern every engagement. Direct, not
                philosophical.
              </p>
            </div>
          </FadeIn>

          {/* Right — principles */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
            {principles.map((p, i) => (
              <FadeIn key={p.heading} delay={i * 0.07}>
                <div className="py-8 border-b border-[#1E1E26] first:border-t first:border-[#1E1E26]">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <span className="font-mono text-[10px] text-[#35353C] tracking-[0.1em] sm:col-span-1 pt-[3px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="sm:col-span-11 flex flex-col gap-2">
                      <h3 className="text-[0.9375rem] font-semibold text-[#EEEEF0] tracking-[-0.01em]">
                        {p.heading}
                      </h3>
                      <p className="text-sm text-[#555560] leading-[1.65] max-w-[56ch]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
