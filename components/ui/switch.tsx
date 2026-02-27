import { cn } from "@/lib/cn";

type SwitchTone = "accent" | "info" | "success" | "warning" | "danger";

type SwitchProps = {
  label: string;
  checked: boolean;
  onToggle?: () => void;
  tone?: SwitchTone;
  className?: string;
};

const toneTrack: Record<SwitchTone, string> = {
  accent: "bg-accent",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

export function Switch({
  label,
  checked,
  onToggle,
  tone = "accent",
  className,
}: SwitchProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold text-ink-soft",
        className,
      )}
      aria-pressed={checked}
    >
      <span
        className={cn(
          "relative h-4 w-7 rounded-pill transition",
          checked ? toneTrack[tone] : "bg-border",
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white shadow-soft transition",
            checked ? "translate-x-3" : "translate-x-0",
          )}
        />
      </span>
      <span className={checked ? "text-ink" : "text-ink-soft"}>{label}</span>
    </button>
  );
}
