"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/mock-data";
import { cn } from "@/lib/cn";
import {
  BookmarkIcon,
  BriefcaseIcon,
  DashboardIcon,
  HomeIcon,
  MessageIcon,
  SettingsIcon,
} from "@/components/ui/icons";
import { Logo } from "@/components/layout/logo";

const iconMap = {
  home: HomeIcon,
  dashboard: DashboardIcon,
  messages: MessageIcon,
  jobs: BriefcaseIcon,
  bookmarks: BookmarkIcon,
  settings: SettingsIcon,
};

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-5 hidden h-[calc(100vh-40px)] w-16 flex-col items-center gap-5 rounded-panel border border-border bg-surface py-4 shadow-sm md:flex animate-slide-in-down">
      <Logo compact />
      <nav className="flex flex-1 flex-col items-center gap-2" aria-label="Primary">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative flex h-11 w-11 items-center justify-center rounded-xl text-ink-soft transition-all interactive",
                isActive
                  ? "bg-accent text-white shadow-sm"
                  : "hover:bg-surface-muted hover:text-ink hover:scale-110",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </nav>
      <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-border bg-surface-muted transition-transform hover:scale-110 cursor-pointer" />
    </aside>
  );
}
