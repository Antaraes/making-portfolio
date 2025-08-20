// src/components/layout/main-layout.tsx

import { navItems } from "@/config/nav";
import { SiteHeader } from "./site-header";

// import { SiteFooter } from "./site-footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SiteHeader items={navItems} />
      <main className="min-h-[calc(100vh-64px)]">{children}</main>
      {/* <SiteFooter /> */}
    </>
  );
}
