import type { ComponentType } from "react";
import { Home, Newspaper, FolderKanban, Mail, SunMoon } from "lucide-react";
import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import X from "@/components/svgs/X";
import { navItems } from "./header";

export type CommandPaletteItemConfig = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  shortcut?: string;
  type: "navigate" | "action";
  href?: string;
  actionId?: string;
};

export type CommandPaletteGroupConfig = {
  heading: string;
  items: CommandPaletteItemConfig[];
};

export const defaultCommandPaletteGroups: CommandPaletteGroupConfig[] = [
  {
    heading: "Navigate",
    items: navItems.map((item) => ({
      id: item.href,
      label: item.label,
      icon: item.icon,
      type: "navigate" as const,
      href: item.href,
    })),
  },
  {
    heading: "Actions",
    items: [
      { id: "copy-email", label: "Copy Email", icon: Mail, type: "action", actionId: "copy-email", shortcut: "⌘E" },
      { id: "open-github", label: "Open GitHub", icon: Github, type: "action", actionId: "open-github" },
      { id: "open-linkedin", label: "Open LinkedIn", icon: LinkedIn, type: "action", actionId: "open-linkedin" },
      { id: "open-x", label: "Open X", icon: X, type: "action", actionId: "open-x" },
      { id: "toggle-theme", label: "Toggle Theme", icon: SunMoon, type: "action", actionId: "toggle-theme", shortcut: "⌘D" },
    ],
  },
];
