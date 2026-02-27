import { cn } from "@/lib/cn";

type ProgressBarProps = {
  value: number;
  className?: string;
};

export function ProgressBar({ value, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn(
        "h-1.5 w-full rounded-pill bg-border",
        className,
      )}
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
    >
      <div
        className="h-1.5 rounded-pill bg-success"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
