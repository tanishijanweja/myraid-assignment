import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  variant?: "solid" | "ghost";
};

export function IconButton({
  icon,
  variant = "ghost",
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30",
        variant === "solid"
          ? "bg-surface-muted text-ink hover:bg-accent hover:text-white"
          : "text-ink-muted hover:bg-surface-muted hover:text-ink",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
