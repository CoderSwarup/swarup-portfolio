import type { ComponentType } from "react";
import { Home, Newspaper, FolderKanban } from "lucide-react";

export type IconComponent = ComponentType<{ className?: string }>;

export type NavItem = {
  label: string;
  href: string;
  icon: IconComponent;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Projects", href: "/projects", icon: FolderKanban },
];

export const headerConfig = {
  name: "Swarup Bhise",
  initials: "CS",
  avatarUrl: "/assets/logo.png",
};
