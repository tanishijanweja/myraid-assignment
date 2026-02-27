import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

export function Input({ className, leadingIcon, trailingIcon, ...props }: InputProps) {
  return (
    <label className={cn("relative flex w-full items-center", className)}>
      {leadingIcon ? (
        <span className="absolute left-4 text-ink-soft">{leadingIcon}</span>
      ) : null}
      {trailingIcon ? (
        <span className="absolute right-4 text-ink-soft">{trailingIcon}</span>
      ) : null}
      <input
        className={cn(
          "h-10 w-full rounded-pill border border-border bg-surface-muted px-4 text-sm text-ink placeholder:text-ink-soft shadow-inset transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20",
          Boolean(leadingIcon) ? "pl-11" : undefined,
          Boolean(trailingIcon) ? "pr-11" : undefined,
        )}
        {...props}
      />
    </label>
  );
}
