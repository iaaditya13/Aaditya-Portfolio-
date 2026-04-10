"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesSection({ data }: { data: any[] }) {
  return (
    <section id="case-studies" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-8">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((study, index) => (
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

        <div className="mt-12 flex justify-center">
          <Link href="/case-studies" className="px-8 py-3 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all font-medium text-white hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2">
            View more Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
