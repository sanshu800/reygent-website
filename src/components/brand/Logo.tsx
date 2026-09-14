import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
};

/**
 * Reygent wordmark with ray mark.
 * The ray element (a small diagonal line) is the brand signature.
 * Placeholder implementation — replace with final SVG mark when available.
 */
export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Reygent"
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight text-[#EEEEF0] no-underline",
        sizes[size],
        className
      )}
    >
      {/* Ray mark — geometric signature */}
      <span
        aria-hidden="true"
        className="relative inline-flex h-5 w-5 items-center justify-center"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer square, subtle */}
          <rect
            x="1"
            y="1"
            width="18"
            height="18"
            rx="3"
            stroke="#35353C"
            strokeWidth="1"
          />
          {/* Ray — diagonal line, warm amber */}
          <line
            x1="5"
            y1="15"
            x2="15"
            y2="5"
            stroke="#D4A96A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Small dot at ray origin */}
          <circle cx="5" cy="15" r="1.5" fill="#D4A96A" />
        </svg>
      </span>
      <span>Reygent</span>
    </Link>
  );
}
