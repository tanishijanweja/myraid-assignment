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

const iconMap = {
  home: HomeIcon,
  dashboard: DashboardIcon,
  messages: MessageIcon,
  jobs: BriefcaseIcon,
  bookmarks: BookmarkIcon,
  settings: SettingsIcon,
};

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg md:hidden">
      <nav className="flex items-center justify-between" aria-label="Primary">
        {navItems.slice(0, 5).map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl text-ink-muted transition",
                isActive && "bg-accent text-white shadow-sm",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
