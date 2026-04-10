"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects({ data }: { data: any[] }) {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-8">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((project, index) => (
            <a key={index} href={project.link} className="group block h-full">
              <div className="h-full flex flex-col p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] hover:-translate-y-2">
                <div className="w-full aspect-video rounded-xl bg-zinc-800 mb-6 flex items-center justify-center overflow-hidden relative border border-white/5">
                   <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-fuchsia-600/40 to-orange-600/40 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                   <span className="text-white font-bold tracking-widest uppercase z-10 text-xl drop-shadow-md">{project.image}</span>
                </div>
                
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-zinc-400 mb-8 flex-grow leading-relaxed group-hover:text-zinc-300 transition-colors">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
