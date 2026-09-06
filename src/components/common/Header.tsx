"use client";

import { navItems, headerConfig } from "@/data/config/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggleButton } from "@/components/common/ThemeSwitch";
import { SearchCommandButton } from "@/components/common/SearchCommandButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center",
      )}
    >
      <div
        className={cn(
          "relative flex w-full max-w-2xl items-center justify-between px-5 sm:px-6 h-12 sm:h-14 backdrop-blur-md bg-white/70 dark:bg-[#110f11]/80 transition-all duration-300",
        )}
      >
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/15" />
        <Link
          href="/"
          className="transition-opacity hover:opacity-70"
        >
          <Avatar className="size-6 sm:size-8">
            <AvatarImage alt={headerConfig.name} src={headerConfig.avatarUrl} />
            <AvatarFallback>{headerConfig.initials}</AvatarFallback>
          </Avatar>
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1 sm:gap-1.5 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-black dark:text-white"
                    : "text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white",
                )}
              >
                <span className={cn(
                  "absolute inset-x-1 -bottom-px h-px transition-opacity duration-300",
                  "bg-gradient-to-r from-transparent via-black/40 to-transparent dark:via-white/50",
                  isActive ? "opacity-100" : "opacity-0",
                )} />
                <item.icon className="size-3.5 sm:size-4 shrink-0" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}

          <Separator orientation="vertical" className="mx-0.5 sm:mx-1 h-3.5 sm:h-4" />

          <SearchCommandButton />

          <ThemeToggleButton className="size-7 sm:size-8" />
        </nav>
      </div>
    </header>
  );
}
