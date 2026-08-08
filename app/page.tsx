import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </main>
  );
}
