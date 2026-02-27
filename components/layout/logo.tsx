import { cn } from "@/lib/cn";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact, className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-accent text-white shadow-soft">
        <span className="font-display text-lg font-semibold">S</span>
      </div>
      {!compact ? (
        <div className="leading-tight">
          <p className="font-display text-lg font-semibold text-ink">SyncUp</p>
          <p className="text-xs font-medium text-ink-soft">Network smarter</p>
        </div>
      ) : null}
    </div>
  );
}
