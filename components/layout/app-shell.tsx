import type { ReactNode } from "react";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Topbar } from "@/components/layout/topbar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-page pb-24 md:pb-10">
      <div className="mx-auto flex max-w-[1400px] gap-3 px-3 py-3 sm:gap-5 sm:px-4 sm:py-5 md:px-6 lg:px-8">
        <SidebarNav />
        <div className="flex min-w-0 flex-1 flex-col gap-4 sm:gap-6">
          <Topbar />
          {children}
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
