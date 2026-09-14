import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";

export const metadata: Metadata = {
  title: "Assessment — Reygent",
  description:
    "Map your firm's operational gaps and find out where automation creates the most leverage.",
};

/**
 * Assessment route — placeholder.
 *
 * The full assessment is a multi-step flow:
 *   Business → Team → Operational pain → Current workflow → Tools →
 *   Volume → Time/cost → Desired outcome → Contact → Qualification → Booking
 *
 * This placeholder serves as the CTA destination until the assessment is built.
 * It is a real route — not a dead anchor — so all CTAs resolve correctly.
 *
 * TODO: Implement the full assessment flow.
 */
export default function AssessmentPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-[#0B0B0E] px-4">
      <Container className="flex flex-col items-center text-center gap-8 max-w-[560px]">
        <Logo size="lg" />

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-[#EEEEF0] tracking-tight leading-snug">
            Assessment coming soon
          </h1>
          <p className="text-sm text-[#555560] leading-relaxed max-w-[44ch]">
            The operational assessment is in development. In the meantime, reach out directly and we will walk you through the process.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink href="/contact" variant="primary" size="md">
            Get in touch
          </ButtonLink>
          <ButtonLink href="/" variant="secondary" size="md">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
