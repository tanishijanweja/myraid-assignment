import { dashboardStats } from "@/lib/mock-data";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { JobTable } from "@/components/dashboard/job-table";
import { RecommendedJobs } from "@/components/dashboard/recommended-jobs";
import { StatCard } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@/components/ui/icons";

export default function DashboardPage() {
  return (
    <section className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-4 sm:space-y-6">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-lg font-semibold text-ink sm:text-xl">
              Welcome back, Julie 👋
            </p>
            <p className="text-xs text-ink-soft sm:text-sm">
              Here's what you need to focus on today
            </p>
          </div>
          <div className="flex items-center gap-2 sm:shrink-0">
            <Button variant="outline" size="sm" className="flex-1 sm:flex-initial">
              <span className="hidden sm:inline">Last 30 Days</span>
              <span className="sm:hidden">30 Days</span>
              <ChevronDownIcon size={14} />
            </Button>
            <Button size="sm" className="flex-1 sm:flex-initial">Search Job</Button>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.id} data={stat} />
          ))}
        </div>

        <AnalyticsChart />
        <JobTable />
      </div>

      <aside className="hidden lg:block">
        <RecommendedJobs />
      </aside>
    </section>
  );
}
