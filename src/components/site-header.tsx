"use client";

import * as React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NavLink } from "./nav-link";
import { NavItem } from "@/types/navgation";
import { Logo } from "./logo";

interface SiteHeaderProps {
  items: ReadonlyArray<NavItem>;
}

export function SiteHeader({ items }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b  backdrop-blur bg-white">
      <div className=" flex h-16 items-center justify-center">
        {/* Desktop nav */}
        <nav className=" gap-8 flex">
          {items.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              className="text-lg font-medium tracking-tight"
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
