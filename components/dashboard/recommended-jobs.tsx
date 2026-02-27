import Image from "next/image";
import { recommendedJobs } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { StarIcon } from "@/components/ui/icons";

export function RecommendedJobs() {
  return (
    <Card className="animate-fade-up p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Recommended Jobs</p>
          <p className="text-xs text-ink-soft">Today</p>
        </div>
        <button className="text-xs font-semibold text-accent">View all</button>
      </div>
      <div className="mt-4 space-y-3">
        {recommendedJobs.map((job) => (
          <div
            key={job.id}
            className="rounded-soft border border-border px-3 py-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted">
                  <Image
                    src={job.companyLogo}
                    alt={job.company}
                    width={22}
                    height={22}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink">{job.role}</p>
                  <p className="text-[11px] text-ink-soft">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-warning">
                <StarIcon size={14} />
                <span className="text-xs text-ink">{job.rating}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-ink-soft">
              <div className="flex flex-wrap items-center">
                {job.meta.map((meta, index) => (
                  <span key={`${job.id}-${meta}`}>
                    {meta}
                    {index < job.meta.length - 1 ? " · " : ""}
                  </span>
                ))}
              </div>
              <span className="whitespace-nowrap">{job.posted}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full rounded-pill border border-border px-3 py-2 text-xs font-semibold text-ink-muted transition hover:border-accent/30 hover:text-accent">
        View all posts →
      </button>
    </Card>
  );
}
