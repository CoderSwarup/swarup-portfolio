import type { ComponentType } from "react";
import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import X from "@/components/svgs/X";
import Youtube from "@/components/svgs/Youtube";
import Mail from "@/components/svgs/Mail";

export type SocialItem = {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  navbar: boolean;
};

export const socials: Record<string, SocialItem> = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/CoderSwarup/",
    icon: Github,
    navbar: true,
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/swarup-bhise-a981932aa/",
    icon: LinkedIn,
    navbar: true,
  },
  X: {
    name: "X",
    url: "https://x.com/SwarupBhise",
    icon: X,
    navbar: true,
  },
  Youtube: {
    name: "Youtube",
    url: "https://dub.sh/dillion-youtube",
    icon: Youtube,
    navbar: false,
  },
  email: {
    name: "Send Email",
    url: "#",
    icon: Mail,
    navbar: false,
  },
};
