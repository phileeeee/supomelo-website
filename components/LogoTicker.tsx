'use client';

export default function LogoTicker() {
  // Placeholder logos - grey rounded rectangles
  const logos = Array(10).fill(null);

  return (
    <div className="ticker-mask overflow-hidden">
      <div className="animate-ticker flex gap-12 w-max">
        {/* First set */}
        {logos.map((_, i) => (
          <div
            key={`logo-1-${i}`}
            className="w-24 h-8 bg-border-light rounded-md flex-shrink-0"
          />
        ))}
        {/* Duplicate for seamless loop */}
        {logos.map((_, i) => (
          <div
            key={`logo-2-${i}`}
            className="w-24 h-8 bg-border-light rounded-md flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
