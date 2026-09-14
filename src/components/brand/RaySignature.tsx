/**
 * RaySignature — ambient brand light element for the hero section.
 *
 * A single directional warm-amber radial gradient suggesting a beam of
 * light entering from upper-right. Positioned absolute, pointer-events-none.
 *
 * This is the Reygent visual signature. It appears ONLY in the hero.
 * Do not reuse in other sections.
 */
export function RaySignature() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Primary ray — upper right */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          right: "-5%",
          width: "70%",
          height: "70%",
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(212,169,106,0.08) 0%, transparent 60%)",
        }}
      />
      {/* Secondary trace — very subtle, adds depth */}
      <div
        className="absolute"
        style={{
          top: "0%",
          right: "10%",
          width: "40%",
          height: "50%",
          background:
            "radial-gradient(ellipse at 70% 10%, rgba(212,169,106,0.04) 0%, transparent 55%)",
        }}
      />
    </div>
  );
}
