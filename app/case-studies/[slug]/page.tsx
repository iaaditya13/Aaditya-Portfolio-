import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return PORTFOLIO_DATA.caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = PORTFOLIO_DATA.caseStudies.find((s) => s.slug === params.slug);
  
  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white pb-32">
      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24">
        <Link href="/#case-studies" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{study.title}</h1>
        <p className="text-xl text-zinc-400 mb-12 leading-relaxed">{study.summary}</p>
        
        <div className="w-full aspect-[2/1] md:aspect-[21/9] rounded-2xl mb-16 relative overflow-hidden shadow-xl">
          <Image src={study.cover} alt={study.title} fill className="object-cover" priority />
        </div>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-amber-50/50 font-semibold mb-4">The Problem</h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">{study.problem}</p>
          </section>
          
          <div className="w-full h-px bg-zinc-800/50" />
          
          <section>
            <h2 className="text-sm uppercase tracking-widest text-amber-50/50 font-semibold mb-4">Research & Strategy</h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">{study.research}</p>
          </section>

          <div className="w-full h-px bg-zinc-800/50" />
          
          <section>
            <h2 className="text-sm uppercase tracking-widest text-amber-50/50 font-semibold mb-4">The Solution</h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">{study.solution}</p>
          </section>
          
          <div className="w-full h-px bg-zinc-800/50" />
          
          <section>
            <h2 className="text-sm uppercase tracking-widest text-amber-50/50 font-semibold mb-4">Outcomes & Impact</h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">{study.outcome}</p>
          </section>
          
          <div className="w-full h-px bg-zinc-800/50" />

          <section>
            <h2 className="text-sm uppercase tracking-widest text-amber-50/50 font-semibold mb-4">Key Learnings</h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">{study.learnings}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
