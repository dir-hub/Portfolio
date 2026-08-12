import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-x-hidden overflow-y-hidden bg-black-100">
      <FloatingNav navItems={navItems} />
      <Hero />
      <ScrollReveal><Grid /></ScrollReveal>
      <ScrollReveal><RecentProjects /></ScrollReveal>
      <ScrollReveal><Clients /></ScrollReveal>
      <ScrollReveal><Experience /></ScrollReveal>
      <ScrollReveal><Approach /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </main>
  );
}
