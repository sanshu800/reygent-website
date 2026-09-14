import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const frictions = [
  {
    title: "Leads that disappear",
    body: "Inquiries arrive through email, website forms, referrals — then get lost in inboxes. No qualification, no follow-up, no pipeline.",
  },
  {
    title: "Onboarding that takes weeks",
    body: "New clients wait days for contracts, then longer for account access, then longer still before the actual work starts. The firm looks disorganized before it begins.",
  },
  {
    title: "Manual follow-up that doesn't happen",
    body: "The reminder to follow up exists in someone's head. Or their calendar. Or a sticky note. Most of the time, the client follows up first.",
  },
  {
    title: "Reporting built in spreadsheets",
    body: "Status reports assembled from five different tools. Hours spent every week moving numbers between systems that don't talk to each other.",
  },
  {
    title: "Knowledge that lives with one person",
    body: "The process only works when the right person is in the office. When they're not, the operation slows down or stops. This scales poorly.",
  },
];

export function Problem() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#1E1E26]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — heading, sticky on desktop */}
          <FadeIn className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2
                className="font-semibold text-[#EEEEF0] leading-[1.15] tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)" }}
              >
                Where service firms
                <br />
                lose time.
              </h2>
              <p className="mt-5 text-sm text-[#555560] leading-relaxed max-w-[36ch]">
                These are not edge cases. They are the default operating
                conditions for most professional-service firms.
              </p>
              <div className="mt-8 h-px w-12 bg-[#D4A96A] opacity-50" />
            </div>
          </FadeIn>

          {/* Right — friction points */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col">
              {frictions.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.07}>
                  <div className="py-7 border-b border-[#1E1E26] first:border-t first:border-[#1E1E26]">
                    <div className="flex gap-6 items-start">
                      {/* Number */}
                      <span className="font-mono text-[11px] text-[#35353C] tracking-[0.1em] pt-[3px] flex-shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* Content */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[0.9375rem] font-medium text-[#EEEEF0] tracking-[-0.01em]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#555560] leading-[1.65] max-w-[58ch]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
