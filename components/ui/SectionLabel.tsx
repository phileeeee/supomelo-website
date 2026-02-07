interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`text-xs font-medium uppercase tracking-[0.2em] ${
        light ? 'text-text-muted' : 'text-text-muted'
      }`}
    >
      {children}
    </span>
  );
}
