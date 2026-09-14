import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  Systems: [
    { label: "Lead Management", href: "/systems/lead-management" },
    { label: "Client Onboarding", href: "/systems/client-onboarding" },
    { label: "Follow-up", href: "/systems/follow-up" },
    { label: "Reporting", href: "/systems/reporting" },
  ],
  Industries: [
    { label: "Consulting", href: "/industries/consulting" },
    { label: "Legal", href: "/industries/legal" },
    { label: "Accounting", href: "/industries/accounting" },
  ],
  Company: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E1E26] bg-[#09090C] mt-auto">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Logo size="md" />
            <p className="text-sm text-[#404048] max-w-[260px] leading-relaxed">
              Business automation for professional-service firms.
            </p>
            <a
              href="/assessment"
              className="text-xs text-[#555560] hover:text-[#88888F] transition-colors duration-150"
            >
              Get your assessment &rarr;
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <span className="text-xs font-medium text-[#88888F] tracking-wide">
                {group}
              </span>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#404048] hover:text-[#555560] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#1E1E26] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#35353C]">
            &copy; {year} Reygent. All rights reserved.
          </p>
          <p className="text-xs text-[#35353C]">
            Built for firms that run on expertise.
          </p>
        </div>
      </Container>
    </footer>
  );
}
