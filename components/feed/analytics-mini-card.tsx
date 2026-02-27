import { Card } from "@/components/ui/card";
import { ChartIcon } from "@/components/ui/icons";

export function AnalyticsMiniCard() {
  return (
    <Card className="animate-fade-up p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-ink-soft">Analytics</p>
          <p className="mt-0.5 text-sm font-semibold text-ink">Connections</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
          <ChartIcon size={18} />
        </div>
      </div>
      <div className="mt-4">
        <svg viewBox="0 0 180 70" className="h-16 w-full">
          <path
            d="M5 48 C 30 20, 50 55, 80 32 C 105 12, 130 46, 175 26"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M5 58 C 35 40, 58 60, 86 40 C 110 22, 140 52, 175 36"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="mt-2 flex items-center justify-between text-[10px] font-medium text-ink-soft">
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
        </div>
      </div>
    </Card>
  );
}
