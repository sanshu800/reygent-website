import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const frictions = [
  {
    n: "01",
    title: "Leads that disappear",
    body: "Inquiries arrive through multiple channels, land in different inboxes, and get lost before anyone qualifies them. The firm never knows how many opportunities it misses.",
  },
  {
    n: "02",
    title: "Onboarding that takes weeks",
    body: "New clients wait for contracts, then longer for access, then longer still before the work begins. The firm looks disorganized before it has delivered anything.",
  },
  {
    n: "03",
    title: "Follow-up that doesn't happen",
    body: "The reminder exists in someone's head, or on a sticky note, or in a shared calendar that nobody checks consistently. Most of the time, the client follows up first.",
  },
  {
    n: "04",
    title: "Reports built in spreadsheets",
    body: "Status reports assembled from five different tools every week. Hours spent moving numbers between systems that do not talk to each other.",
  },
  {
    n: "05",
    title: "Knowledge that lives with one person",
    body: "The process only works when the right person is available. When they are not, the operation slows down or stops entirely. This does not scale.",
  },
];

export function Problem() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — sticky heading */}
          <FadeIn className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)" }}
              >
                Where firms
                <br />
                lose time.
              </h2>
              <div className="mt-5 h-px w-10 bg-[#D4A96A] opacity-40" />
              <p className="mt-5 text-sm text-[#555560] leading-relaxed max-w-[32ch]">
                These are not edge cases. They are the default operating
                conditions for most professional-service firms.
              </p>
            </div>
          </FadeIn>

          {/* Right — numbered friction list */}
          <div className="lg:col-span-7 lg:col-start-6">
            {frictions.map((item, i) => (
              <FadeIn key={item.n} delay={i * 0.06}>
                <div className="py-7 border-b border-[#1E1E26] first:border-t first:border-[#1E1E26]">
                  <div className="flex gap-6">
                    <span className="font-mono text-[10px] text-[#35353C] tracking-[0.1em] pt-[3px] flex-shrink-0">
                      {item.n}
                    </span>
                    <div>
                      <h3 className="text-[0.9375rem] font-semibold text-[#EEEEF0] tracking-[-0.01em] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#555560] leading-[1.7] max-w-[56ch]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Closing bridge line */}
            <FadeIn delay={0.35}>
              <div className="pt-8 pl-10">
                <p className="text-sm text-[#88888F] leading-relaxed max-w-[50ch]">
                  These problems compound. Every inefficiency adds friction to
                  the next step. Reygent designs systems that remove them
                  permanently — not just for one task, but across the operation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
