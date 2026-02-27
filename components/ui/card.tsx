import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "soft";
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-surface shadow-sm",
        variant === "soft" && "bg-surface-soft",
        className,
      )}
      {...props}
    />
  );
}
