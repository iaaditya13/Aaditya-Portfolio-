"use client";
import { motion } from "framer-motion";

export default function Skills({ data }: { data: Record<string, string[]> }) {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-8">Skills & Arsenal</h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
          {Object.entries(data).map(([category, skills], index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-zinc-200 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-black border border-zinc-800 text-zinc-400 rounded-full text-sm hover:text-zinc-200 hover:border-zinc-700 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
