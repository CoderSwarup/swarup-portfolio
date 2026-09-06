"use client";

import { defaultCommandPaletteGroups } from "@/data/config/command-palette";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { CommandPalette } from "@/components/common/CommandPalette";
import type { CommandPaletteGroup } from "@/components/common/CommandPalette";
import { contactConfig } from "@/data/config/contact";
import { socials } from "@/data/config/socials";

interface SearchCommandButtonProps {
  className?: string;
}

export function SearchCommandButton({ className }: SearchCommandButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(
      typeof navigator !== "undefined" &&
        navigator.platform?.toUpperCase().includes("MAC"),
    );
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(contactConfig.email);
  }, []);

  const handleToggleTheme = useCallback(() => {
    document.querySelector<HTMLButtonElement>("[aria-label='Toggle theme']")?.click();
  }, []);

  const groups: CommandPaletteGroup[] = useMemo(
    () =>
      defaultCommandPaletteGroups.map((group) => ({
        heading: group.heading,
        items: group.items.map((item) => ({
          label: item.label,
          icon: item.icon,
          shortcut: item.shortcut,
          onSelect: () => {
            if (item.type === "navigate" && item.href) {
              router.push(item.href);
              return;
            }
            if (item.type === "action") {
              switch (item.actionId) {
                case "copy-email":
                  handleCopyEmail();
                  break;
                case "open-github":
                  window.open(socials.GitHub.url, "_blank", "noopener,noreferrer");
                  break;
                case "open-linkedin":
                  window.open(socials.LinkedIn.url, "_blank", "noopener,noreferrer");
                  break;
                case "open-x":
                  window.open(socials.X.url, "_blank", "noopener,noreferrer");
                  break;
                case "toggle-theme":
                  handleToggleTheme();
                  break;
              }
            }
          },
        })),
      })),
    [router, handleCopyEmail, handleToggleTheme],
  );

  const shortcutLabel = isMac ? "⌘K" : "Ctrl K";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "flex items-center gap-1 rounded-full px-2 sm:px-2.5 py-1 text-xs sm:text-sm text-black/50 transition-colors hover:text-black dark:text-white/50 dark:hover:text-white",
          className,
        )}
        aria-label="Open command palette"
      >
        <Search className="size-3.5 sm:size-4" />
        <span className="hidden items-center gap-0.5 sm:flex">
          <kbd className="pointer-events-none rounded border border-black/10 bg-black/5 px-1 py-px text-[9px] sm:text-[10px] font-medium leading-none text-black/40 dark:border-white/10 dark:bg-white/10 dark:text-white/40">
            {shortcutLabel}
          </kbd>
        </span>
      </button>

      <CommandPalette open={open} onOpenChange={setOpen} groups={groups} />
    </>
  );
}
