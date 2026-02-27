import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent/90 focus-visible:ring-accent/30",
  secondary:
    "bg-accent-soft text-accent hover:bg-accent-soft/80 focus-visible:ring-accent/20",
  ghost:
    "bg-transparent text-ink-muted hover:bg-surface-muted focus-visible:ring-accent/20",
  outline:
    "border border-border text-ink-muted hover:border-accent/40 hover:text-accent focus-visible:ring-accent/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
