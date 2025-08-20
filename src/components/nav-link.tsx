"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // from shadcn template
import { NavItem } from "@/types/navgation";

export type NavLinkProps = NavItem & {
  className?: string;
  onClick?: () => void;
};

/**
 * NavLink – SRP: renders a single link.
 * OCP: Styling/active rules can be extended via props without modifying component internals.
 */
export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, label, external, startsWith, className, onClick }, ref) => {
    const pathname = usePathname();
    const isActive = React.useMemo(() => {
      if (!pathname) return false;
      if (startsWith) return pathname.startsWith(href);
      return pathname === href;
    }, [pathname, href, startsWith]);

    const base = "text-sm md:text-base transition-colors";
    const active = "text-foreground";
    const inactive = "text-muted-foreground hover:text-foreground";

    if (external) {
      return (
        <Link
          ref={ref}
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
          className={cn(base, isActive ? active : inactive, className)}
        >
          {label}
        </Link>
      );
    }

    return (
      <Link
        ref={ref}
        href={href}
        onClick={onClick}
        className={cn(base, isActive ? active : inactive, className)}
      >
        {label}
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";
