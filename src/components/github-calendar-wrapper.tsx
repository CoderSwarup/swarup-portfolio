"use client";

import dynamic from "next/dynamic";

const GithubContributionCalendar = dynamic(
  () =>
    import("@/components/github-calendar").then((mod) => ({
      default: mod.GithubContributionCalendar,
    })),
  { ssr: false }
);

export function GithubContributionCalendarWrapper() {
  return <GithubContributionCalendar />;
}
