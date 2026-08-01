import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
    </main>
  );
}
