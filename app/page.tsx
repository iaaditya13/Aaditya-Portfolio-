import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Experience from "@/components/Experience";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Hero data={PORTFOLIO_DATA} />
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col gap-32 py-16">
        <About data={PORTFOLIO_DATA.about} />
        <Journey data={PORTFOLIO_DATA.journey} />
        <Experience data={PORTFOLIO_DATA.experience} />
        <CaseStudiesSection data={PORTFOLIO_DATA.caseStudies.slice(0, 2)} />
        <Skills data={PORTFOLIO_DATA.skills} />
        <Contact data={PORTFOLIO_DATA.socials} />
      </div>
    </main>
  );
}
