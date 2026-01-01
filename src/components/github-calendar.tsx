"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export function GithubContributionCalendar() {
  const { theme } = useTheme();

  return (
    <GitHubCalendar
      username="coderswarup"
      colorScheme={theme === "dark" ? "dark" : "light"}
    />
  );
}
