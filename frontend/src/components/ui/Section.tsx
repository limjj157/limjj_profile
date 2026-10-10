"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "px-4 py-20 sm:px-6 lg:px-8",
        isVisible ? "animate-fade-in-up" : "opacity-0-initial",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
