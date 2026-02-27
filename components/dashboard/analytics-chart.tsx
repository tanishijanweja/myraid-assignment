"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { vacancyStats } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { ChevronDownIcon } from "@/components/ui/icons";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/cn";

type SeriesKey = "applied" | "interviews" | "rejected";
type DateRange = "year" | "half" | "quarter";

const seriesLabels: Record<SeriesKey, string> = {
  applied: "Application Sent",
  interviews: "Interviews",
  rejected: "Rejected",
};

const seriesColor: Record<SeriesKey, string> = {
  applied: "#3b82f6",
  interviews: "#10b981",
  rejected: "#ef4444",
};

const seriesDotClass: Record<SeriesKey, string> = {
  applied: "bg-info",
  interviews: "bg-success",
  rejected: "bg-danger",
};

const seriesTone: Record<SeriesKey, "info" | "success" | "danger"> = {
  applied: "info",
  interviews: "success",
  rejected: "danger",
};

const dateRangeLabels: Record<DateRange, string> = {
  year: "This Year",
  half: "Last 6 Months",
  quarter: "Last 3 Months",
};

export function AnalyticsChart() {
  const [activeSeries, setActiveSeries] = useState<Record<SeriesKey, boolean>>({
    applied: true,
    interviews: true,
    rejected: true,
  });
  const [dateRange, setDateRange] = useState<DateRange>("year");
  const [showDateMenu, setShowDateMenu] = useState(false);

  const seriesEntries = useMemo(
    () => Object.entries(seriesLabels) as Array<[SeriesKey, string]>,
    [],
  );

  const filteredData = useMemo(() => {
    const endIndex = vacancyStats.length;
    let startIndex = 0;

    switch (dateRange) {
      case "half":
        startIndex = Math.max(0, endIndex - 6);
        break;
      case "quarter":
        startIndex = Math.max(0, endIndex - 3);
        break;
      default:
        startIndex = 0;
    }

    return vacancyStats.slice(startIndex, endIndex);
  }, [dateRange]);

  return (
    <Card className="animate-fade-up p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div>
          <p className="text-sm font-semibold text-ink">Vacancy Stats</p>
          <p className="text-xs text-ink-soft">{dateRangeLabels[dateRange]}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {seriesEntries.map(([key, label]) => (
              <Switch
                key={key}
                label={label}
                checked={activeSeries[key]}
                tone={seriesTone[key]}
                onToggle={() =>
                  setActiveSeries((prev) => ({
                    ...prev,
                    [key]: !prev[key],
                  }))
                }
              />
            ))}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDateMenu(!showDateMenu)}
              className="hidden items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium text-ink-muted transition-all hover:border-accent/40 sm:flex"
            >
              {dateRangeLabels[dateRange]}
              <ChevronDownIcon
                className={`transition-transform ${showDateMenu ? "rotate-180" : ""}`}
              />
            </button>
            {showDateMenu && (
              <div className="absolute right-0 top-full mt-1 z-10 w-36 rounded-lg border border-border bg-white shadow-lg animate-scale-in">
                {(Object.entries(dateRangeLabels) as Array<[DateRange, string]>).map(
                  ([key, label]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setDateRange(key);
                        setShowDateMenu(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-surface-muted ${
                        dateRange === key
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-ink-muted"
                      }`}
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 h-[200px] sm:mt-6 sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData} margin={{ top: 10, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false} 
              fontSize={10} 
              tick={{ fill: '#a1a1aa' }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              fontSize={10} 
              width={28}
              tick={{ fill: '#a1a1aa' }}
            />
            <Tooltip
              cursor={{ stroke: "#d1d5db", strokeDasharray: "3 3" }}
              contentStyle={{
                borderRadius: 12,
                borderColor: "#e5e7eb",
                fontSize: 11,
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            />
            {activeSeries.applied ? (
              <Line
                type="monotone"
                dataKey="applied"
                stroke={seriesColor.applied}
                strokeWidth={2.5}
                dot={{ fill: seriesColor.applied, r: 4 }}
                activeDot={{ r: 6 }}
              />
            ) : null}
            {activeSeries.interviews ? (
              <Line
                type="monotone"
                dataKey="interviews"
                stroke={seriesColor.interviews}
                strokeWidth={2.5}
                dot={false}
              />
            ) : null}
            {activeSeries.rejected ? (
              <Line
                type="monotone"
                dataKey="rejected"
                stroke={seriesColor.rejected}
                strokeWidth={2.5}
                dot={false}
              />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-ink-soft sm:mt-4 sm:gap-6">
        {seriesEntries.map(([key, label]) => (
          <div key={`legend-${key}`} className="flex items-center gap-1.5 sm:gap-2">
            <span className={cn("h-2 w-2 rounded-full", seriesDotClass[key])} />
            <span className="text-[11px] sm:text-xs">{label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
