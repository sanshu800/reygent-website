import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const principles = [
  {
    n: "01",
    heading: "Automate the right work",
    body: "Repetitive, rule-based tasks — yes. Complex judgement, relationship-sensitive communication, strategic decisions — no. We help firms tell the difference and act on it.",
  },
  {
    n: "02",
    heading: "Keep humans in control",
    body: "Automation is infrastructure, not a replacement for professional judgement. Every system has clear ownership, visible behavior, and override controls the team can use without calling us.",
  },
  {
    n: "03",
    heading: "Build around the existing operation",
    body: "We work with the tools the firm already uses. No mandatory platform switches. No new software to learn. Systems fit around the operation, not the other way around.",
  },
  {
    n: "04",
    heading: "Measure what actually changes",
    body: "Every system has a clear operational objective. Time saved, errors reduced, response times improved. If we cannot measure the impact, we did not build the right thing.",
  },
];

export function Approach() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26] bg-[#0E0E12]">
      <Container>
        {/* Large statement */}
        <FadeIn>
          <div className="mb-16 pb-12 border-b border-[#1E1E26]">
            <h2
              className="font-semibold text-[#EEEEF0] leading-[1.1] tracking-[-0.03em] max-w-[18ch]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              The Reygent approach
            </h2>
            <p className="mt-6 text-[#555560] leading-relaxed max-w-[52ch] text-sm">
              Four principles that govern every engagement. Operational by
              design. Not a philosophy statement.
            </p>
          </div>
        </FadeIn>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E1E26]">
          {principles.map((p, i) => (
            <FadeIn key={p.n} delay={i * 0.06}>
              <div className="bg-[#0E0E12] p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-mono text-[10px] text-[#D4A96A] tracking-[0.14em] mt-[2px] flex-shrink-0">
                    {p.n}
                  </span>
                  <h3 className="text-base font-semibold text-[#EEEEF0] tracking-[-0.01em] leading-snug">
                    {p.heading}
                  </h3>
                </div>
                <p className="text-sm text-[#555560] leading-[1.7] max-w-[48ch] pl-8">
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
