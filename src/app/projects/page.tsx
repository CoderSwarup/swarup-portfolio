import { ProjectsSection } from "@/components/project/ProjectsSection";

export const metadata = {
  title: "Projects",
  description: "A selection of projects I've built.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-dvh">
      <ProjectsSection />
    </main>
  );
}
