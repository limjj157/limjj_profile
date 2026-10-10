interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}
