import { cn } from "@/lib/utils";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Mono system label — use sparingly, maximum 1-2 per page.
 * For section-level technical/system categorization only.
 */
export function Label({ children, className }: LabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs tracking-[0.1em] text-[#555560] uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
