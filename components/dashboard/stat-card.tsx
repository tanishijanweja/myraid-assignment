import type { StatCard as StatCardType } from "@/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

const toneMap: Record<StatCardType["tone"], string> = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
};

type StatCardProps = {
  data: StatCardType;
};

export function StatCard({ data }: StatCardProps) {
  return (
    <Card className="flex items-center justify-between px-5 py-5 animate-fade-up">
      <div>
        <p className="text-xs font-medium text-ink-soft">{data.label}</p>
        <p className="mt-2 text-2xl font-bold text-ink">{data.value}</p>
        <p className="mt-1.5 text-xs text-ink-soft">{data.delta}</p>
      </div>
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-muted">
        <div className="flex items-end gap-1">
          {["h-3", "h-4", "h-7", "h-5"].map((height, index) => (
            <span
              key={`${data.id}-bar-${height}-${index}`}
              className={cn("w-1.5 rounded-full", toneMap[data.tone], height)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
