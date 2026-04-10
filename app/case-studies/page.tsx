import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AllCaseStudiesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto w-full">
      <Link href="/#case-studies" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">All Case Studies</h1>
        <p className="text-zinc-400 text-lg">Deep dives into problems, processes, and impact.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.caseStudies.map((study, index) => (
          <Link key={index} href={`/case-studies/${study.slug}`} className="group block h-full">
            <div className="h-full flex flex-col p-6 md:p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/80 hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{study.title}</h3>
              <p className="text-zinc-400 mb-8 flex-grow leading-relaxed group-hover:text-zinc-300 transition-colors">{study.summary}</p>
              
              <div className="flex items-center text-sm font-bold text-white gap-2 group-hover:gap-3 transition-all mt-auto border-t border-white/5 pt-5 group-hover:text-cyan-300">
                 Read Case Study <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
