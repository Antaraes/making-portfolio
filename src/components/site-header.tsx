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
    <>
      <style jsx global>{`
        /* Mobile Menu Flip Animation */
        .mobile-nav-item {
          position: relative;
          display: block;
          width: 100%;
          padding: 1rem 0;
          font-size: 2rem;
          font-weight: 700;
          text-transform: uppercase;
          border-bottom: 2px solid #e5e7eb;
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: all 0.5s ease;
        }

        .mobile-nav-item:hover {
          transform: rotateX(360deg);
          background: linear-gradient(135deg, #000 0%, #dc2626 50%, #000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          border-bottom-color: #dc2626;
        }

        .mobile-nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.1), transparent);
          transition: width 0.5s ease;
        }

        .mobile-nav-item:hover::before {
          width: 100%;
        }

        /* Desktop underline animation */
        .desktop-nav-link {
          position: relative;
          padding-bottom: 0.25rem;
        }

        @media (max-width: 768px) {
          .mobile-nav-item {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-md bg-white/90 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo - Left side */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation - Center/Right */}
            <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
              {items.map((item) => (
                <NavLink
                  key={item.href}
                  {...item}
                  className="text-base lg:text-lg font-semibold tracking-tight desktop-nav-link pb-2"
                  isMobile={false}
                />
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    aria-label="Toggle menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] bg-white">
                  <SheetHeader className="border-b border-gray-200 pb-6 mb-8">
                    <SheetTitle className="text-3xl font-bold text-black uppercase tracking-tight">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-0">
                    {items.map((item) => (
                      <NavLink
                        key={item.href}
                        {...item}
                        isMobile={true}
                        onClick={() => setOpen(false)}
                      />
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
