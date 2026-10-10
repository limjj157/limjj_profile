import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "industry";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-sm font-medium",
        variant === "default" && "bg-accent/10 text-accent",
        variant === "industry" && "bg-accent/20 text-accent-hover",
        className
      )}
    >
      {children}
    </span>
  );
}
