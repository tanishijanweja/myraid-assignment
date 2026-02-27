import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";

type PagesLayoutProps = {
  children: ReactNode;
};

export default function PagesLayout({ children }: PagesLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
