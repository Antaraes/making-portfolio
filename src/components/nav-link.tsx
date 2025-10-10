"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // from shadcn template
import { NavItem } from "@/types/navgation";

export type NavLinkProps = NavItem & {
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
};

/**
 * NavLink – SRP: renders a single link.
 * OCP: Styling/active rules can be extended via props without modifying component internals.
 */
export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, label, external, startsWith, className, onClick, isMobile }, ref) => {
    const pathname = usePathname();
    const isActive = React.useMemo(() => {
      if (!pathname) return false;
      if (startsWith) return pathname.startsWith(href);
      return pathname === href;
    }, [pathname, href, startsWith]);

    const base = "text-sm md:text-base transition-all duration-300";

    // Desktop styles with underline animation
    const desktopActive = "text-black relative after:absolute after:bottom-0 after:left-0 after:w-[40%] after:h-0.5 after:bg-red-600 after:transition-all after:duration-300";
    const desktopInactive = "text-gray-700 hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-[40%]";

    // Mobile styles with flip animation
    const mobileStyles = "mobile-nav-item";

    if (external) {
      return (
        <Link
          ref={ref}
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
          className={cn(
            base,
            isMobile ? mobileStyles : (isActive ? desktopActive : desktopInactive),
            className
          )}
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
        className={cn(
          base,
          isMobile ? mobileStyles : (isActive ? desktopActive : desktopInactive),
          className
        )}
      >
        {label}
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";
