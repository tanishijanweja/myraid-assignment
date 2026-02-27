"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { jobApplications } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronDownIcon } from "@/components/ui/icons";
import { Switch } from "@/components/ui/switch";

type SortOption = "date-desc" | "date-asc" | "company-asc" | "role-asc";

export function JobTable() {
  const [filters, setFilters] = useState({
    inProgress: true,
    applied: true,
    offered: true,
    rejected: false,
  });
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filteredAndSortedJobs = useMemo(() => {
    let filtered = jobApplications.filter((job) => {
      if (filters.inProgress && job.status === "In-progress") return true;
      if (filters.applied && job.status === "Applied") return true;
      if (filters.offered && job.status === "Offered") return true;
      if (filters.rejected && job.status === "Rejected") return true;
      return false;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.appliedOn).getTime() - new Date(a.appliedOn).getTime();
        case "date-asc":
          return new Date(a.appliedOn).getTime() - new Date(b.appliedOn).getTime();
        case "company-asc":
          return a.company.localeCompare(b.company);
        case "role-asc":
          return a.role.localeCompare(b.role);
        default:
          return 0;
      }
    });

    return sorted;
  }, [filters, sortBy]);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "date-desc", label: "Date (Newest)" },
    { value: "date-asc", label: "Date (Oldest)" },
    { value: "company-asc", label: "Company (A-Z)" },
    { value: "role-asc", label: "Role (A-Z)" },
  ];

  return (
    <Card className="animate-fade-up p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">Job Application Status</p>
          <p className="text-xs text-ink-soft">Pending tasks and progress</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium text-ink-muted transition-all hover:border-accent/40"
          >
            Sort by
            <ChevronDownIcon className={`transition-transform ${showSortMenu ? "rotate-180" : ""}`} />
          </button>
          {showSortMenu && (
            <div className="absolute right-0 top-full mt-1 z-10 w-40 rounded-lg border border-border bg-white shadow-lg">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value);
                    setShowSortMenu(false);
                  }}
                  className={`w-full px-3 py-2 text-left text-xs transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-surface-muted ${
                    sortBy === option.value ? "bg-accent/10 text-accent font-medium" : "text-ink-muted"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
        <Switch
          label="In Progress"
          checked={filters.inProgress}
          onToggle={() => setFilters({ ...filters, inProgress: !filters.inProgress })}
          tone="accent"
        />
        <Switch
          label="Applied"
          checked={filters.applied}
          onToggle={() => setFilters({ ...filters, applied: !filters.applied })}
          tone="info"
        />
        <Switch
          label="Offered"
          checked={filters.offered}
          onToggle={() => setFilters({ ...filters, offered: !filters.offered })}
          tone="success"
        />
        <Switch
          label="Rejected"
          checked={filters.rejected}
          onToggle={() => setFilters({ ...filters, rejected: !filters.rejected })}
          tone="danger"
        />
      </div>

      {filteredAndSortedJobs.length === 0 ? (
        <div className="mt-8 text-center">
          <p className="text-sm text-ink-soft">No jobs match the selected filters</p>
        </div>
      ) : (
        <>
          <div className="mt-5 hidden overflow-hidden rounded-xl border border-border md:block">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-muted text-ink-soft">
                <tr>
                  <th className="px-4 py-3.5 font-semibold">Job title</th>
                  <th className="px-4 py-3.5 font-semibold">Company</th>
                  <th className="px-4 py-3.5 font-semibold">Applied on</th>
                  <th className="px-4 py-3.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedJobs.map((job) => (
                  <tr
                    key={job.id}
                    className="border-t border-border text-ink transition-colors hover:bg-surface-soft"
                  >
                    <td className="px-4 py-4 font-semibold">{job.role}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2.5">
                        <Image
                          src={job.companyLogo}
                          alt={job.company}
                          width={20}
                          height={20}
                        />
                        <span>{job.company}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-ink-soft">{job.appliedOn}</td>
                    <td className="px-4 py-4">
                      <Badge tone={job.statusTone}>{job.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-3 md:hidden">
            {filteredAndSortedJobs.map((job) => (
              <div
                key={`${job.id}-mobile`}
                className="rounded-xl border border-border p-3 transition-all hover:border-accent/40 hover:shadow-sm sm:p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink">{job.role}</p>
                  <Badge tone={job.statusTone}>{job.status}</Badge>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-ink-soft">
                  <Image
                    src={job.companyLogo}
                    alt={job.company}
                    width={18}
                    height={18}
                  />
                  <span>{job.company}</span>
                  <span>•</span>
                  <span>{job.appliedOn}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Card>
  );
}
