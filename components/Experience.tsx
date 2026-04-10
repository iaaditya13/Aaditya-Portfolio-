"use client";
import { motion } from "framer-motion";

export default function Experience({ data }: { data: any[] }) {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-8">Experience</h2>
        <div className="grid gap-6 group/list">
          {data.map((job, index) => (
            <div key={index} className="group p-6 md:p-8 rounded-3xl bg-zinc-900/50 border border-white/5 shadow-sm transition-all duration-300 hover:bg-zinc-800/80 hover:border-fuchsia-500/30 hover:shadow-[0_8px_30px_rgba(217,70,239,0.1)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">{job.company}</h3>
                  <p className="text-zinc-400 mt-1">{job.role}</p>
                </div>
                <div className="text-sm font-mono text-fuchsia-300 bg-fuchsia-500/10 border border-fuchsia-500/20 px-4 py-1.5 rounded-full w-fit">
                  {job.dates}
                </div>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex gap-3 text-zinc-300">
                    <span className="text-fuchsia-500/50 mt-1.5 shrink-0">•</span>
                    <span className="leading-relaxed group-hover:text-zinc-200 transition-colors">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
